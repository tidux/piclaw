// @ts-nocheck

import { getLspSession } from '../api.js';

function createClientToken() {
    try {
        return crypto.randomUUID();
    } catch {
        return `piclaw-lsp-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
    }
}

function createRequestId() {
    try {
        return crypto.randomUUID();
    } catch {
        return `lsp-req-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
    }
}

export function createLspClientAdapter(options = {}) {
    const path = String(options.path || '');
    const clientToken = String(options.clientToken || createClientToken());
    const getSession = typeof options.getSession === 'function' ? options.getSession : getLspSession;
    const baseUrl = String(options.baseUrl || (typeof window !== 'undefined' ? window.location.href : 'http://localhost/'));
    const callbacks = {
        onSession: typeof options.onSession === 'function' ? options.onSession : () => {},
        onReady: typeof options.onReady === 'function' ? options.onReady : () => {},
        onStatus: typeof options.onStatus === 'function' ? options.onStatus : () => {},
        onDiagnostics: typeof options.onDiagnostics === 'function' ? options.onDiagnostics : () => {},
        onError: typeof options.onError === 'function' ? options.onError : () => {},
    };

    let socket = null;
    let sessionInfo = null;
    let documentText = null;
    let connected = false;
    let documentOpen = false;
    let serverCapabilities = {};
    const pending = new Map();

    async function connect() {
        callbacks.onStatus({ state: 'checking', detail: 'Checking LSP…' });
        sessionInfo = await getSession(path, { clientToken });
        callbacks.onSession(sessionInfo);
        if (!sessionInfo?.available) {
            callbacks.onStatus({ state: 'unavailable', detail: sessionInfo?.unavailable_reason || 'LSP unavailable' });
            return sessionInfo;
        }

        callbacks.onStatus({ state: 'connecting', detail: `Connecting ${sessionInfo?.language_id || 'LSP'}…` });
        const url = new URL(sessionInfo?.ws_path || '/lsp/ws', baseUrl);
        url.protocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
        url.searchParams.set('path', path);
        url.searchParams.set('client', clientToken);
        socket = new WebSocket(url.toString());

        socket.addEventListener('open', () => {
            connected = true;
            documentOpen = false;
            callbacks.onStatus({ state: 'connected', detail: 'LSP connected' });
            if (documentText != null) {
                sendOpenDocument();
            }
        });

        socket.addEventListener('message', (event) => {
            let payload = null;
            try {
                payload = JSON.parse(String(event.data || '{}'));
            } catch (error) {
                callbacks.onError(error);
                return;
            }
            if (payload?.type === 'session') {
                callbacks.onSession({ ...(sessionInfo || {}), ...payload, available: true });
                return;
            }
            if (payload?.type === 'ready') {
                serverCapabilities = payload?.capabilities && typeof payload.capabilities === 'object'
                    ? payload.capabilities
                    : {};
                callbacks.onReady(payload);
                callbacks.onStatus({ state: 'ready', detail: 'LSP connected' });
                return;
            }
            if (payload?.type === 'diagnostics') {
                callbacks.onDiagnostics(payload);
                return;
            }
            if (payload?.type === 'error') {
                if (payload?.request_id && pending.has(payload.request_id)) {
                    const deferred = pending.get(payload.request_id);
                    pending.delete(payload.request_id);
                    deferred.reject(new Error(String(payload.error || 'LSP request failed.')));
                    return;
                }
                callbacks.onStatus({ state: 'error', detail: String(payload.error || 'LSP error') });
                callbacks.onError(payload);
                return;
            }
            if (payload?.request_id && pending.has(payload.request_id)) {
                const deferred = pending.get(payload.request_id);
                pending.delete(payload.request_id);
                if (payload?.error) {
                    deferred.reject(new Error(String(payload.error?.message || payload.error || 'LSP request failed.')));
                } else {
                    deferred.resolve(payload.result ?? null);
                }
            }
        });

        socket.addEventListener('close', () => {
            connected = false;
            documentOpen = false;
            socket = null;
            for (const deferred of pending.values()) {
                deferred.reject(new Error('LSP connection closed.'));
            }
            pending.clear();
            callbacks.onStatus({
                state: sessionInfo?.available ? 'disconnected' : 'unavailable',
                detail: sessionInfo?.available ? 'LSP disconnected' : 'LSP unavailable',
            });
        });

        socket.addEventListener('error', (error) => {
            callbacks.onStatus({ state: 'error', detail: 'LSP connection failed' });
            callbacks.onError(error);
        });

        return sessionInfo;
    }

    function send(payload) {
        if (!socket || socket.readyState !== WebSocket.OPEN) return false;
        socket.send(JSON.stringify(payload));
        return true;
    }

    function sendOpenDocument() {
        if (documentText == null) return false;
        const sent = send({ type: 'open_document', path, text: documentText });
        if (sent) {
            documentOpen = true;
        }
        return sent;
    }

    function openDocument(text) {
        documentText = String(text ?? '');
        if (connected) {
            if (documentOpen) {
                send({ type: 'change_document', path, text: documentText });
            } else {
                sendOpenDocument();
            }
        }
    }

    function changeDocument(text) {
        documentText = String(text ?? '');
        if (connected) {
            if (!documentOpen) {
                sendOpenDocument();
            } else {
                send({ type: 'change_document', path, text: documentText });
            }
        }
    }

    function closeDocument() {
        if (connected) {
            send({ type: 'close_document', path });
        }
        documentOpen = false;
    }

    function request(type, line, character) {
        if (!connected) return Promise.resolve(null);
        const requestId = createRequestId();
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                pending.delete(requestId);
                resolve(null);
            }, 10000);
            pending.set(requestId, {
                resolve: (value) => {
                    clearTimeout(timeout);
                    resolve(value);
                },
                reject: (error) => {
                    clearTimeout(timeout);
                    reject(error);
                },
            });
            const sent = send({ type, path, line, character, request_id: requestId });
            if (!sent) {
                pending.delete(requestId);
                clearTimeout(timeout);
                resolve(null);
            }
        });
    }

    function requestCompletion(line, character) {
        return request('completion', line, character);
    }

    function requestHover(line, character) {
        return request('hover', line, character);
    }

    function requestDefinition(line, character) {
        return request('definition', line, character);
    }

    function dispose() {
        closeDocument();
        for (const deferred of pending.values()) {
            deferred.reject(new Error('LSP client disposed.'));
        }
        pending.clear();
        if (socket) {
            try { socket.close(); } catch {}
            socket = null;
        }
        connected = false;
    }

    return {
        clientToken,
        connect,
        dispose,
        openDocument,
        changeDocument,
        closeDocument,
        requestCompletion,
        requestHover,
        requestDefinition,
        isAvailable: () => Boolean(sessionInfo?.available),
        isConnected: () => connected,
        getSessionInfo: () => sessionInfo,
        getServerCapabilities: () => serverCapabilities,
    };
}

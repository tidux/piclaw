// @ts-nocheck
/**
 * drawio-pane.ts — WebPaneExtension for editing .drawio diagrams.
 *
 * In preview mode (workspace browser): shows a launch card with "Edit in Tab" button.
 * In edit/tab mode: loads the self-hosted draw.io editor in an iframe with
 * postMessage-based load/save via the workspace file API.
 */

import type { PaneCapability, PaneContext, PaneInstance, WebPaneExtension } from './pane-types.js';

const DRAWIO_EXTENSIONS = new Set(['.drawio']);

/** Also match .drawio.xml and .drawio.svg by checking full filename. */
function isDrawioFile(filePath?: string): boolean {
    if (!filePath) return false;
    const lower = filePath.toLowerCase();
    return lower.endsWith('.drawio') ||
           lower.endsWith('.drawio.xml') ||
           lower.endsWith('.drawio.svg') ||
           lower.endsWith('.drawio.png');
}

function getExtension(filePath?: string): string {
    if (!filePath) return '';
    const lower = filePath.toLowerCase();
    if (lower.endsWith('.drawio.xml')) return '.drawio.xml';
    if (lower.endsWith('.drawio.svg')) return '.drawio.svg';
    if (lower.endsWith('.drawio.png')) return '.drawio.png';
    const lastDot = filePath.lastIndexOf('.');
    if (lastDot < 0) return '';
    return filePath.slice(lastDot).toLowerCase();
}

function esc(s: string): string {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const DEFAULT_DRAWIO_XML = '<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';

function normalizeDrawioXml(value: string | null | undefined): string {
    const text = String(value || '').trim();
    return text ? text : DEFAULT_DRAWIO_XML;
}

function getDrawioFormat(filePath: string): 'xml' | 'xmlsvg' | 'xmlpng' {
    const lower = String(filePath || '').toLowerCase();
    if (lower.endsWith('.drawio.svg') || lower.endsWith('.svg')) return 'xmlsvg';
    if (lower.endsWith('.drawio.png') || lower.endsWith('.png')) return 'xmlpng';
    return 'xml';
}

function bytesToBase64(bytes: Uint8Array): string {
    let binary = '';
    const chunk = 0x8000;
    for (let i = 0; i < bytes.length; i += chunk) {
        binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
    }
    return btoa(binary);
}

export function buildDrawioEditorUrl(isDark: boolean): string {
    return `/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${isDark ? '1' : '0'}`;
}

function patchDrawioExportTarget(iframeWindow: Window, targetOrigin = '*'): boolean {
    try {
        const postParentEvent = (eventName: string, payload: Record<string, unknown>) => {
            const parent = iframeWindow.parent || iframeWindow.opener;
            if (!parent) return false;
            parent.postMessage(JSON.stringify({ event: eventName, ...payload }), targetOrigin);
            return true;
        };
        const postExport = (payload: Record<string, unknown>) => postParentEvent('workspace-export', payload);
        const resolveBaseName = (filename: string) => {
            const text = String(filename || 'diagram.drawio').trim() || 'diagram.drawio';
            return text
                .replace(/\.drawio\.(svg|png|xml)$/i, '')
                .replace(/\.(svg|png|jpe?g|pdf|xml)$/i, '')
                .replace(/\.drawio$/i, '') || 'diagram';
        };
        const mimeTypeForFormat = (format: string) => {
            switch (format) {
                case 'svg': return 'image/svg+xml';
                case 'png': return 'image/png';
                case 'jpeg':
                case 'jpg': return 'image/jpeg';
                default: return 'application/xml';
            }
        };
        const extensionForFormat = (format: string) => {
            switch (format) {
                case 'svg': return '.svg';
                case 'png': return '.png';
                case 'jpeg':
                case 'jpg': return '.jpg';
                default: return '.drawio';
            }
        };
        const findEditorUi = () => {
            try {
                for (const key of Object.keys(iframeWindow as any)) {
                    const value = (iframeWindow as any)[key];
                    if (!value || typeof value !== 'object') continue;
                    if (typeof value.saveFile === 'function' && value.actions && value.menus && value.editor) {
                        return value;
                    }
                }
            } catch {
                /* expected: cross-object inspection can fail on some transient globals during load. */
            }
            return null;
        };

        const editorUiCtor = (iframeWindow as any).EditorUi;
        if (editorUiCtor?.prototype && !editorUiCtor.prototype.__piclawWorkspaceSavePatched) {
            const originalSaveData = editorUiCtor.prototype.saveData;
            editorUiCtor.prototype.saveData = function(filename: string, format: string, data: string, mime: string, base64Encoded: boolean, defaultMode: string) {
                try {
                    if (filename && data != null && postExport({ filename, format, data, xml: mime === 'application/xml' || mime === 'text/xml' ? data : undefined, mimeType: mime, base64Encoded: Boolean(base64Encoded), defaultMode })) {
                        return;
                    }
                } catch (error) {
                    console.warn('[drawio-pane] saveData intercept failed, falling back to native save', error);
                }
                return originalSaveData.apply(this, arguments as any);
            };
            editorUiCtor.prototype.__piclawWorkspaceSavePatched = true;
        }

        const appCtor = (iframeWindow as any).App;
        if (appCtor?.prototype && !appCtor.prototype.__piclawExportPatched) {
            const originalExportFile = appCtor.prototype.exportFile;
            appCtor.prototype.exportFile = function(data: string, filename: string, mimeType: string, base64Encoded: boolean, mode: string, folderId: string) {
                try {
                    if (filename && postExport({ filename, data, mimeType, base64Encoded: Boolean(base64Encoded), mode, folderId })) {
                        return;
                    }
                } catch (error) {
                    console.warn('[drawio-pane] export intercept failed, falling back to native export', error);
                }
                return originalExportFile.apply(this, arguments as any);
            };
            appCtor.prototype.__piclawExportPatched = true;
        }

        const ui = findEditorUi();
        if (ui && !ui.__piclawServerSaveFlowPatched) {
            const saveAsAction = ui.actions?.get?.('saveAs') || ui.actions?.get?.('saveAs...');
            if (saveAsAction) {
                const originalSaveAs = saveAsAction.funct;
                saveAsAction.funct = () => {
                    try {
                        const currentFilename = String(ui.getCurrentFile?.()?.getTitle?.() || ui.getCurrentFile?.()?.title || 'diagram.drawio');
                        const choice = String(iframeWindow.prompt?.('Save on server as: drawio, svg, png, jpeg', 'drawio') || '').trim().toLowerCase();
                        if (!choice) return;
                        const normalized = choice === 'jpg' ? 'jpeg' : choice;
                        if (!['drawio', 'xml', 'svg', 'png', 'jpeg'].includes(normalized)) {
                            iframeWindow.alert?.('Supported server-side save formats: drawio, svg, png, jpeg');
                            return;
                        }
                        const xml = typeof ui.getFileData === 'function' ? ui.getFileData(true) : null;
                        if (typeof xml !== 'string' || !xml.trim()) {
                            iframeWindow.alert?.('Could not read the current diagram XML for Save As.');
                            return;
                        }
                        const format = normalized === 'xml' ? 'drawio' : normalized;
                        const filename = `${resolveBaseName(currentFilename)}${extensionForFormat(format)}`;
                        postParentEvent('workspace-save-as', {
                            filename,
                            format,
                            xml,
                            mimeType: mimeTypeForFormat(format),
                        });
                    } catch (error) {
                        console.warn('[drawio-pane] custom saveAs failed, falling back to native action', error);
                        return originalSaveAs?.apply(saveAsAction, []);
                    }
                };
            }

            const exportAction = ui.actions?.get?.('export');
            if (exportAction) {
                exportAction.setEnabled?.(false);
                exportAction.isEnabled = () => false;
                exportAction.funct = () => {
                    iframeWindow.alert?.('Use File → Save As… to save SVG, PNG, JPEG, or Draw.io to the server.');
                };
            }

            const exportAsMenu = ui.menus?.get?.('exportAs');
            if (exportAsMenu) {
                exportAsMenu.setEnabled?.(false);
                exportAsMenu.isEnabled = () => false;
            }

            const fileMenu = ui.menus?.get?.('file');
            if (fileMenu) {
                fileMenu.funct = function(menu: any, parent: any) {
                    ui.menus.addMenuItems(menu, ['new', 'open', '-', 'save', 'saveAs', '-', 'import', '-', 'pageSetup', 'print'], parent);
                };
            }

            ui.__piclawServerSaveFlowPatched = true;
        }

        return Boolean((editorUiCtor?.prototype && editorUiCtor.prototype.__piclawWorkspaceSavePatched)
            || (appCtor?.prototype && appCtor.prototype.__piclawExportPatched)
            || (ui && ui.__piclawServerSaveFlowPatched));
    } catch {
        return false;
    }
}

async function responseToDataUri(response: Response, fallbackMimeType: string): Promise<string> {
    const bytes = new Uint8Array(await response.arrayBuffer());
    const mimeType = response.headers.get('Content-Type') || fallbackMimeType;
    return `data:${mimeType};base64,${bytesToBase64(bytes)}`;
}

// ── Preview card (workspace browser) ────────────────────────────

class DrawioPreviewCard implements PaneInstance {
    private container: HTMLElement;
    private disposed = false;

    constructor(container: HTMLElement, context: PaneContext) {
        this.container = container;
        const filePath = context.path || '';
        const name = filePath.split('/').pop() || 'diagram.drawio';

        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);';
        wrapper.innerHTML = `
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">📐</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${esc(name)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `;
        container.appendChild(wrapper);

        const btn = wrapper.querySelector('#drawio-open-tab') as HTMLButtonElement;
        if (btn) {
            btn.addEventListener('click', () => {
                const evt = new CustomEvent('drawio:open-tab', {
                    bubbles: true,
                    detail: { path: filePath },
                });
                container.dispatchEvent(evt);
            });
        }
    }

    getContent(): string | undefined { return undefined; }
    isDirty(): boolean { return false; }
    focus(): void {}
    resize(): void {}
    dispose(): void {
        if (this.disposed) return;
        this.disposed = true;
        this.container.innerHTML = '';
    }
}

// ── Full editor (editor tab) ────────────────────────────────────

class DrawioEditorInstance implements PaneInstance {
    private container: HTMLElement;
    private iframe: HTMLIFrameElement | null = null;
    private overlay: HTMLDivElement | null = null;
    private disposed = false;
    private filePath: string;
    private fileName: string;
    private format: 'xml' | 'xmlsvg' | 'xmlpng';
    private xmlData = '';
    private fileLoaded = false;
    private editorReady = false;
    private loadSent = false;
    private saveChain: Promise<void> = Promise.resolve();
    private pendingServerSaveAs: { filename?: string; mimeType?: string; format?: string } | null = null;
    private onMessageBound: (event: MessageEvent) => void;

    constructor(container: HTMLElement, context: PaneContext) {
        this.container = container;
        this.filePath = context.path || '';
        this.fileName = this.filePath.split('/').pop() || 'diagram.drawio';
        this.format = getDrawioFormat(this.filePath);
        this.onMessageBound = this.onMessage.bind(this);

        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'position:relative;width:100%;height:100%;background:#1e1e1e;';

        this.overlay = document.createElement('div');
        this.overlay.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;';
        this.overlay.textContent = 'Loading draw.io editor…';
        wrapper.appendChild(this.overlay);

        const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const editorUrl = buildDrawioEditorUrl(isDark);

        this.iframe = document.createElement('iframe');
        this.iframe.src = editorUrl;
        this.iframe.style.cssText = 'width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;';
        this.iframe.addEventListener('load', () => {
            const tryPatch = () => {
                if (!this.iframe?.contentWindow || this.disposed) return;
                if (patchDrawioExportTarget(this.iframe.contentWindow)) return;
                setTimeout(tryPatch, 250);
            };
            tryPatch();
        });
        wrapper.appendChild(this.iframe);
        container.appendChild(wrapper);

        window.addEventListener('message', this.onMessageBound);
        void this.loadFile();
    }

    private async loadFile(): Promise<void> {
        if (!this.filePath) {
            this.xmlData = DEFAULT_DRAWIO_XML;
            this.fileLoaded = true;
            this.trySendLoad();
            return;
        }
        try {
            const response = await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);
            if (response.ok) {
                if (this.format === 'xmlsvg') {
                    this.xmlData = await responseToDataUri(response, 'image/svg+xml');
                } else if (this.format === 'xmlpng') {
                    this.xmlData = await responseToDataUri(response, 'image/png');
                } else {
                    this.xmlData = normalizeDrawioXml(await response.text());
                }
            } else if (response.status === 404) {
                this.xmlData = DEFAULT_DRAWIO_XML;
            } else {
                throw new Error(`HTTP ${response.status}`);
            }
            this.fileLoaded = true;
            this.trySendLoad();
        } catch (error) {
            if (this.overlay) {
                this.overlay.textContent = `Failed to load: ${error instanceof Error ? error.message : String(error)}`;
            }
        }
    }

    private trySendLoad(): void {
        if (this.disposed || this.loadSent || !this.editorReady || !this.fileLoaded || !this.iframe?.contentWindow) {
            return;
        }
        this.loadSent = true;
        this.iframe.contentWindow.postMessage(JSON.stringify({
            action: 'load',
            xml: this.format === 'xml' ? normalizeDrawioXml(this.xmlData) : this.xmlData,
            autosave: 1,
            saveAndExit: '0',
            noSaveBtn: '1',
            noExitBtn: '1',
            title: this.fileName,
        }), '*');
        if (this.overlay) this.overlay.style.display = 'none';
    }

    private queueSave(payload: { xml?: string; data?: string; format?: string; mimeType?: string; filename?: string; base64Encoded?: boolean }, acknowledge: boolean): void {
        if (!this.filePath) return;
        this.saveChain = this.saveChain.then(async () => {
            const response = await fetch('/drawio/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    path: this.filePath,
                    format: payload.format || this.format,
                    xml: payload.xml,
                    data: payload.data,
                    mimeType: payload.mimeType,
                    filename: payload.filename,
                    base64Encoded: payload.base64Encoded,
                }),
            });
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            if (acknowledge && this.iframe?.contentWindow) {
                this.iframe.contentWindow.postMessage(JSON.stringify({
                    action: 'status',
                    message: 'Saved',
                    modified: false,
                }), '*');
            }
        }).catch((error) => {
            console.error('[drawio-pane] save failed:', error);
            if (this.overlay) {
                this.overlay.style.display = 'flex';
                this.overlay.textContent = `Save failed: ${error instanceof Error ? error.message : String(error)}`;
            }
        });
    }

    private onMessage(event: MessageEvent): void {
        if (this.disposed || event.source !== this.iframe?.contentWindow) return;
        let msg: any;
        try {
            msg = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        } catch {
            return;
        }
        switch (msg?.event) {
            case 'init':
                this.editorReady = true;
                this.trySendLoad();
                break;
            case 'autosave':
                if (this.format === 'xml') {
                    if (typeof msg.xml === 'string') this.queueSave({ xml: msg.xml, format: 'xml' }, false);
                } else if (typeof msg.xml === 'string') {
                    this.xmlData = msg.xml;
                }
                break;
            case 'save':
                if (this.format === 'xml') {
                    if (typeof msg.xml === 'string') this.queueSave({ xml: msg.xml, format: 'xml' }, true);
                } else if (typeof msg.xml === 'string' && this.iframe?.contentWindow) {
                    this.xmlData = msg.xml;
                    this.iframe.contentWindow.postMessage(JSON.stringify({
                        action: 'export',
                        format: this.format,
                        xml: msg.xml,
                        spinKey: 'export',
                    }), '*');
                }
                break;
            case 'workspace-save-as': {
                const requestedFormat = typeof msg.format === 'string' ? msg.format : 'drawio';
                if (requestedFormat === 'drawio' || requestedFormat === 'xml') {
                    if (typeof msg.xml === 'string') {
                        this.queueSave({
                            xml: msg.xml,
                            data: msg.xml,
                            mimeType: typeof msg.mimeType === 'string' ? msg.mimeType : 'application/xml',
                            filename: typeof msg.filename === 'string' ? msg.filename : undefined,
                            format: 'xml',
                        }, true);
                    }
                    break;
                }
                this.pendingServerSaveAs = {
                    filename: typeof msg.filename === 'string' ? msg.filename : undefined,
                    mimeType: typeof msg.mimeType === 'string' ? msg.mimeType : undefined,
                    format: requestedFormat,
                };
                if (typeof msg.xml === 'string' && this.iframe?.contentWindow) {
                    this.iframe.contentWindow.postMessage(JSON.stringify({
                        action: 'export',
                        format: requestedFormat,
                        xml: msg.xml,
                        spinKey: 'export',
                    }), '*');
                }
                break;
            }
            case 'export':
                if (typeof msg.data === 'string') {
                    const pending = this.pendingServerSaveAs;
                    this.pendingServerSaveAs = null;
                    this.queueSave({
                        data: msg.data,
                        format: pending?.format || this.format,
                        xml: typeof msg.xml === 'string' ? msg.xml : undefined,
                        filename: pending?.filename,
                        mimeType: pending?.mimeType,
                    }, true);
                }
                break;
            case 'workspace-export':
                if (typeof msg.data === 'string') {
                    const pending = this.pendingServerSaveAs;
                    this.pendingServerSaveAs = null;
                    this.queueSave({
                        data: msg.data,
                        xml: typeof msg.xml === 'string' ? msg.xml : undefined,
                        mimeType: pending?.mimeType || (typeof msg.mimeType === 'string' ? msg.mimeType : undefined),
                        filename: pending?.filename || (typeof msg.filename === 'string' ? msg.filename : undefined),
                        base64Encoded: Boolean(msg.base64Encoded),
                        format: pending?.format || this.format,
                    } as any, true);
                }
                break;
            case 'exit':
            default:
                break;
        }
    }

    getContent(): string | undefined { return undefined; }
    isDirty(): boolean { return false; }
    focus(): void { this.iframe?.focus(); }
    resize(): void {}
    dispose(): void {
        if (this.disposed) return;
        this.disposed = true;
        window.removeEventListener('message', this.onMessageBound);
        if (this.iframe) {
            this.iframe.src = 'about:blank';
            this.iframe = null;
        }
        this.overlay = null;
        this.container.innerHTML = '';
    }
}

// ── Extension ───────────────────────────────────────────────────

export const drawioPaneExtension: WebPaneExtension = {
    id: 'drawio-editor',
    label: 'Draw.io Editor',
    icon: 'git-merge',   // closest available icon for diagrams
    capabilities: ['edit', 'preview'] as PaneCapability[],
    placement: 'tabs',

    canHandle(context: PaneContext): boolean | number {
        if (!isDrawioFile(context?.path)) return false;
        // Priority 60 — beats text editor (default) and office viewer
        return 60;
    },

    mount(container: HTMLElement, context: PaneContext): PaneInstance {
        if (context?.mode === 'view') {
            return new DrawioPreviewCard(container, context);
        }
        return new DrawioEditorInstance(container, context);
    },
};

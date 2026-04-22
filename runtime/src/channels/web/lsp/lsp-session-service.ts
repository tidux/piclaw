import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import { pathToFileURL } from "node:url";
import path from "node:path";
import type { ServerWebSocket } from "bun";

import { DEFAULT_WEB_USER_ID, getWebSession } from "../../../db.js";
import { createLogger, debugSuppressedError } from "../../../utils/logger.js";
import { killProcessTree, registerProcess, unregisterProcess } from "../../../utils/process-tracker.js";
import { getSessionTokenFromRequest } from "../auth/session-auth.js";
import { toRelativePath } from "../workspace/paths.js";
import {
  resolveLspTargetForPath,
  type LspServerProfile,
  type ResolvedLspTarget,
} from "./server-registry.js";

const log = createLogger("web.lsp-session-service");
const LSP_ANON_CLIENT_HEADER = "x-piclaw-lsp-client";
const DEFAULT_LSP_HANDOFF_TTL_MS = 5 * 60 * 1000;
const DEFAULT_LSP_IDLE_TTL_MS = 60 * 1000;

export interface LspSessionOwner {
  token: string;
  userId: string;
  handoffToken?: string | null;
}

export interface LspSocketData extends LspSessionOwner {
  kind: "lsp";
  path: string;
  target: ResolvedLspTarget;
  attachedSessionKey?: string | null;
}

interface LspHandoffRecord {
  owner: LspSessionOwner;
  relativePath: string;
  expiresAt: number;
}

interface LspProcessLike {
  stdin: { write(chunk: string | Uint8Array): void; end?(): void };
  stdout: { on(event: "data", listener: (chunk: Buffer | Uint8Array | string) => void): unknown };
  stderr: { on(event: "data", listener: (chunk: Buffer | Uint8Array | string) => void): unknown };
  on(event: "exit", listener: (code: number | null, signal: NodeJS.Signals | null) => void): unknown;
  kill(signal?: NodeJS.Signals | number): boolean;
  pid?: number | null;
}

interface LspDocumentRecord {
  uri: string;
  relativePath: string;
  absolutePath: string;
  version: number;
  text: string;
  clients: Set<ServerWebSocket<LspSocketData>>;
}

interface LspSessionRecord {
  key: string;
  owner: LspSessionOwner;
  target: ResolvedLspTarget;
  process: LspProcessLike;
  clients: Set<ServerWebSocket<LspSocketData>>;
  openDocuments: Map<string, LspDocumentRecord>;
  requestSeq: number;
  pendingRequests: Map<number, PendingRequestRecord>;
  initializePromise: Promise<void>;
  initialized: boolean;
  serverCapabilities: Record<string, unknown> | null;
  stdoutBuffer: Buffer;
  idleTimer: ReturnType<typeof setTimeout> | null;
  createdAt: string;
}

type PendingRequestRecord =
  | {
      kind: "browser";
      ws: ServerWebSocket<LspSocketData>;
      requestId: string;
      responseType: string;
    }
  | {
      kind: "internal";
      resolve: (value: unknown) => void;
      reject: (error: Error) => void;
      timeout: ReturnType<typeof setTimeout>;
    };

export interface LspSessionInfo {
  enabled: boolean;
  transport: "websocket";
  ws_path: string;
  handoff_supported: boolean;
  active: boolean;
  available: boolean;
  language_id: string | null;
  profile_id: string | null;
  root_path: string | null;
  path: string | null;
  connected_clients: number;
  unavailable_reason?: string | null;
}

export interface LspSessionServiceOptions {
  spawnProcess?: (target: ResolvedLspTarget) => LspProcessLike;
  handoffTtlMs?: number;
  idleTtlMs?: number;
}

type EditorClientMessage =
  | { type: "open_document"; path: string; text: string }
  | { type: "change_document"; path: string; text: string }
  | { type: "close_document"; path: string }
  | { type: "completion"; path: string; line: number; character: number; request_id?: string | null }
  | { type: "hover"; path: string; line: number; character: number; request_id?: string | null }
  | { type: "definition"; path: string; line: number; character: number; request_id?: string | null }
  | { type: "references"; path: string; line: number; character: number; request_id?: string | null }
  | { type: "rename"; path: string; line: number; character: number; new_name: string; request_id?: string | null };

function createHandoffToken(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `lsp-handoff-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  }
}

function readAnonymousLspClientToken(req: Request): string | null {
  try {
    const urlToken = new URL(req.url).searchParams.get("client")?.trim() || "";
    const headerToken = req.headers.get(LSP_ANON_CLIENT_HEADER)?.trim() || "";
    const token = urlToken || headerToken;
    return /^[a-zA-Z0-9._:-]{8,128}$/.test(token) ? token : null;
  } catch {
    return null;
  }
}

function toBuffer(chunk: Buffer | Uint8Array | string): Buffer {
  if (Buffer.isBuffer(chunk)) return chunk;
  return Buffer.from(chunk);
}

function createDefaultSpawnProcess(target: ResolvedLspTarget): LspProcessLike {
  const command = target.executablePath || target.profile.command.command;
  return spawn(command, target.profile.command.args, {
    cwd: target.rootPath,
    env: {
      ...process.env,
      PICLAW_EDITOR_LSP: "1",
    },
    stdio: ["pipe", "pipe", "pipe"],
  }) as ChildProcessWithoutNullStreams;
}

function uriForPath(absolutePath: string): string {
  return pathToFileURL(absolutePath).href;
}

function sessionKeyFor(target: ResolvedLspTarget, owner: LspSessionOwner): string {
  return `${owner.token}::${target.profile.id}::${target.rootPath}`;
}

function normalizeRequestId(value: unknown): string {
  const raw = String(value ?? "").trim();
  return raw || crypto.randomUUID();
}

export class LspSessionService {
  private readonly sessions = new Map<string, LspSessionRecord>();
  private readonly handoffs = new Map<string, LspHandoffRecord>();
  private readonly spawnProcess: (target: ResolvedLspTarget) => LspProcessLike;
  private readonly handoffTtlMs: number;
  private readonly idleTtlMs: number;

  constructor(options: LspSessionServiceOptions = {}) {
    this.spawnProcess = options.spawnProcess ?? createDefaultSpawnProcess;
    this.handoffTtlMs = Number.isFinite(options.handoffTtlMs)
      ? Math.max(1, Number(options.handoffTtlMs))
      : DEFAULT_LSP_HANDOFF_TTL_MS;
    this.idleTtlMs = Number.isFinite(options.idleTtlMs)
      ? Math.max(0, Number(options.idleTtlMs))
      : DEFAULT_LSP_IDLE_TTL_MS;
  }

  resolveOwnerFromRequest(req: Request, allowUnauthenticated = false): LspSessionOwner | null {
    const token = getSessionTokenFromRequest(req);
    if (token) {
      const session = getWebSession(token);
      if (session) return { token, userId: session.user_id, handoffToken: null };
    }
    if (!allowUnauthenticated) return null;
    const anonymousClientToken = readAnonymousLspClientToken(req);
    if (!anonymousClientToken) return null;
    return {
      token: `web-lsp-anon:${anonymousClientToken}`,
      userId: DEFAULT_WEB_USER_ID,
      handoffToken: null,
    };
  }

  resolveSocketDataFromRequest(req: Request, allowUnauthenticated = false): LspSocketData | null {
    const owner = this.resolveOwnerFromRequest(req, allowUnauthenticated);
    if (!owner) return null;
    const pathParam = new URL(req.url).searchParams.get("path")?.trim() || "";
    const target = resolveLspTargetForPath(pathParam);
    if (!target || !target.available) return null;
    return {
      kind: "lsp",
      token: owner.token,
      userId: owner.userId,
      handoffToken: new URL(req.url).searchParams.get("handoff")?.trim() || null,
      path: target.relativePath,
      target,
      attachedSessionKey: null,
    };
  }

  getSessionInfo(owner: LspSessionOwner, inputPath: string | null | undefined): LspSessionInfo {
    const target = resolveLspTargetForPath(inputPath);
    if (!target) {
      return {
        enabled: true,
        transport: "websocket",
        ws_path: "/lsp/ws",
        handoff_supported: true,
        active: false,
        available: false,
        language_id: null,
        profile_id: null,
        root_path: null,
        path: typeof inputPath === "string" ? inputPath : null,
        connected_clients: 0,
        unavailable_reason: "No curated LSP server profile matches this file type.",
      };
    }
    const session = this.sessions.get(sessionKeyFor(target, owner));
    return {
      enabled: true,
      transport: "websocket",
      ws_path: "/lsp/ws",
      handoff_supported: true,
      active: Boolean(session),
      available: target.available,
      language_id: target.profile.languageId,
      profile_id: target.profile.id,
      root_path: target.rootRelativePath || null,
      path: target.relativePath,
      connected_clients: session?.clients.size ?? 0,
      unavailable_reason: target.unavailableReason,
    };
  }

  createHandoffFromRequest(req: Request, allowUnauthenticated = false): { token: string; expires_at: string } | null {
    const owner = this.resolveOwnerFromRequest(req, allowUnauthenticated);
    if (!owner) return null;
    const pathParam = new URL(req.url).searchParams.get("path")?.trim() || "";
    const target = resolveLspTargetForPath(pathParam);
    if (!target || !target.available) return null;
    const session = this.sessions.get(sessionKeyFor(target, owner));
    if (!session || session.clients.size === 0) return null;
    this.sweepExpiredHandoffs();
    const token = createHandoffToken();
    const expiresAt = Date.now() + this.handoffTtlMs;
    this.handoffs.set(token, {
      owner: { token: owner.token, userId: owner.userId, handoffToken: null },
      relativePath: target.relativePath,
      expiresAt,
    });
    return { token, expires_at: new Date(expiresAt).toISOString() };
  }

  attachClient(ws: ServerWebSocket<LspSocketData>): void {
    const owner = ws.data;
    const session = this.ensureSession(owner.target, owner);
    ws.data.attachedSessionKey = session.key;
    this.clearIdleTimer(session);
    if (this.validateHandoff(owner, owner.path)) {
      for (const client of Array.from(session.clients)) {
        if (client === ws) continue;
        try {
          client.close(1000, "lsp handoff");
        } catch (error) {
          debugSuppressedError(log, "Existing LSP websocket was already closing during handoff.", error, { sessionKey: session.key });
        }
        session.clients.delete(client);
      }
    }
    session.clients.add(ws);
    this.send(ws, {
      type: "session",
      path: owner.path,
      root_path: owner.target.rootRelativePath || ".",
      language_id: owner.target.profile.languageId,
      profile_id: owner.target.profile.id,
      connected_clients: session.clients.size,
    });
    void session.initializePromise.then(() => {
      if (!session.clients.has(ws)) return;
      this.send(ws, {
        type: "ready",
        path: owner.path,
        language_id: owner.target.profile.languageId,
        profile_id: owner.target.profile.id,
        capabilities: session.serverCapabilities || {},
      });
    }).catch((error) => {
      this.send(ws, {
        type: "error",
        error: error instanceof Error ? error.message : String(error || "Failed to initialize language server."),
      });
    });
  }

  handleMessage(ws: ServerWebSocket<LspSocketData>, rawMessage: string | Buffer | Uint8Array): void {
    const session = this.getAttachedSession(ws);
    if (!session) return;
    const payload = this.parseClientMessage(rawMessage);
    if (!payload) return;
    void session.initializePromise.then(async () => {
      switch (payload.type) {
        case "open_document":
          await this.handleOpenDocument(session, ws, payload.path, payload.text);
          break;
        case "change_document":
          await this.handleChangeDocument(session, ws, payload.path, payload.text);
          break;
        case "close_document":
          await this.handleCloseDocument(session, ws, payload.path);
          break;
        case "completion":
          await this.forwardRequest(session, ws, payload.path, payload.request_id, "textDocument/completion", {
            textDocument: { uri: this.uriForSessionPath(session, payload.path) },
            position: { line: Math.max(0, payload.line), character: Math.max(0, payload.character) },
          }, "completion_result");
          break;
        case "hover":
          await this.forwardRequest(session, ws, payload.path, payload.request_id, "textDocument/hover", {
            textDocument: { uri: this.uriForSessionPath(session, payload.path) },
            position: { line: Math.max(0, payload.line), character: Math.max(0, payload.character) },
          }, "hover_result");
          break;
        case "definition":
          await this.forwardRequest(session, ws, payload.path, payload.request_id, "textDocument/definition", {
            textDocument: { uri: this.uriForSessionPath(session, payload.path) },
            position: { line: Math.max(0, payload.line), character: Math.max(0, payload.character) },
          }, "definition_result");
          break;
        case "references":
          await this.forwardRequest(session, ws, payload.path, payload.request_id, "textDocument/references", {
            textDocument: { uri: this.uriForSessionPath(session, payload.path) },
            position: { line: Math.max(0, payload.line), character: Math.max(0, payload.character) },
            context: { includeDeclaration: true },
          }, "references_result");
          break;
        case "rename":
          await this.forwardRequest(session, ws, payload.path, payload.request_id, "textDocument/rename", {
            textDocument: { uri: this.uriForSessionPath(session, payload.path) },
            position: { line: Math.max(0, payload.line), character: Math.max(0, payload.character) },
            newName: String(payload.new_name || "").trim(),
          }, "rename_result");
          break;
      }
    }).catch((error) => {
      this.send(ws, {
        type: "error",
        error: error instanceof Error ? error.message : String(error || "Language server request failed."),
      });
    });
  }

  detachClient(ws: ServerWebSocket<LspSocketData>): void {
    const session = this.getAttachedSession(ws);
    if (!session) return;
    session.clients.delete(ws);
    for (const [uri, doc] of Array.from(session.openDocuments.entries())) {
      if (!doc.clients.has(ws)) continue;
      doc.clients.delete(ws);
      if (doc.clients.size === 0) {
        this.sendRpcNotification(session, "textDocument/didClose", {
          textDocument: { uri },
        });
        session.openDocuments.delete(uri);
      }
    }
    if (session.clients.size === 0) {
      this.scheduleIdleTimer(session);
    }
  }

  shutdown(): void {
    for (const session of this.sessions.values()) {
      this.clearIdleTimer(session);
      for (const pending of session.pendingRequests.values()) {
        if (pending.kind !== "internal") continue;
        clearTimeout(pending.timeout);
        pending.reject(new Error("Language server session shut down."));
      }
      session.pendingRequests.clear();
      try {
        const pid = session.process.pid ?? null;
        if (pid) {
          unregisterProcess(pid);
          killProcessTree(pid);
        } else {
          session.process.kill("SIGKILL");
        }
      } catch (error) {
        debugSuppressedError(log, "Language server already exited during shutdown.", error, { sessionKey: session.key });
      }
    }
    this.sessions.clear();
    this.handoffs.clear();
  }

  private handleProcessMessage(session: LspSessionRecord, chunk: Buffer | Uint8Array | string): void {
    session.stdoutBuffer = Buffer.concat([session.stdoutBuffer, toBuffer(chunk)]);
    while (true) {
      const headerEnd = session.stdoutBuffer.indexOf("\r\n\r\n");
      if (headerEnd < 0) return;
      const headerText = session.stdoutBuffer.slice(0, headerEnd).toString("utf8");
      const match = /Content-Length:\s*(\d+)/i.exec(headerText);
      if (!match) {
        session.stdoutBuffer = Buffer.alloc(0);
        return;
      }
      const contentLength = Number.parseInt(match[1], 10);
      const bodyStart = headerEnd + 4;
      const bodyEnd = bodyStart + contentLength;
      if (session.stdoutBuffer.length < bodyEnd) return;
      const body = session.stdoutBuffer.slice(bodyStart, bodyEnd).toString("utf8");
      session.stdoutBuffer = session.stdoutBuffer.slice(bodyEnd);
      try {
        this.handleRpcMessage(session, JSON.parse(body));
      } catch (error) {
        debugSuppressedError(log, "Failed to parse LSP server payload.", error, { sessionKey: session.key, body });
      }
    }
  }

  private handleRpcMessage(session: LspSessionRecord, payload: any): void {
    if (payload && typeof payload.id === "number" && session.pendingRequests.has(payload.id)) {
      const pending = session.pendingRequests.get(payload.id)!;
      session.pendingRequests.delete(payload.id);
      if (pending.kind === "browser") {
        const result = pending.responseType === "definition_result" || pending.responseType === "references_result"
          ? this.serializeLocationResult(payload.result)
          : pending.responseType === "rename_result"
            ? this.serializeWorkspaceEdit(payload.result)
            : (payload.result ?? null);
        this.send(pending.ws, {
          type: pending.responseType,
          request_id: pending.requestId,
          result,
          error: payload.error ?? null,
        });
      } else {
        clearTimeout(pending.timeout);
        if (payload?.error) {
          pending.reject(new Error(String(payload.error?.message || payload.error || "Language server request failed.")));
        } else {
          pending.resolve(payload.result ?? null);
        }
      }
      return;
    }

    if (payload?.method === "textDocument/publishDiagnostics") {
      const uri = String(payload.params?.textDocument?.uri || payload.params?.uri || "").trim();
      if (!uri) return;
      const doc = session.openDocuments.get(uri);
      const diagnostics = Array.isArray(payload.params?.diagnostics) ? payload.params.diagnostics : [];
      if (!doc) return;
      for (const client of doc.clients) {
        this.send(client, {
          type: "diagnostics",
          path: doc.relativePath,
          diagnostics,
        });
      }
    }
  }

  private async handleOpenDocument(session: LspSessionRecord, ws: ServerWebSocket<LspSocketData>, inputPath: string, text: string): Promise<void> {
    const target = this.resolveDocumentTarget(session, inputPath);
    const uri = uriForPath(target.absolutePath);
    const doc = session.openDocuments.get(uri);
    if (doc) {
      doc.version += 1;
      doc.text = text;
      doc.clients.add(ws);
      this.sendRpcNotification(session, "textDocument/didChange", {
        textDocument: { uri, version: doc.version },
        contentChanges: [{ text }],
      });
      return;
    }
    const record: LspDocumentRecord = {
      uri,
      relativePath: target.relativePath,
      absolutePath: target.absolutePath,
      version: 1,
      text,
      clients: new Set([ws]),
    };
    session.openDocuments.set(uri, record);
    this.sendRpcNotification(session, "textDocument/didOpen", {
      textDocument: {
        uri,
        languageId: session.target.profile.languageId,
        version: record.version,
        text,
      },
    });
  }

  private async handleChangeDocument(session: LspSessionRecord, ws: ServerWebSocket<LspSocketData>, inputPath: string, text: string): Promise<void> {
    const uri = this.uriForSessionPath(session, inputPath);
    let doc = session.openDocuments.get(uri);
    if (!doc) {
      await this.handleOpenDocument(session, ws, inputPath, text);
      doc = session.openDocuments.get(uri);
      if (!doc) return;
    }
    doc.version += 1;
    doc.text = text;
    doc.clients.add(ws);
    this.sendRpcNotification(session, "textDocument/didChange", {
      textDocument: { uri, version: doc.version },
      contentChanges: [{ text }],
    });
  }

  private async handleCloseDocument(session: LspSessionRecord, ws: ServerWebSocket<LspSocketData>, inputPath: string): Promise<void> {
    const uri = this.uriForSessionPath(session, inputPath);
    const doc = session.openDocuments.get(uri);
    if (!doc) return;
    doc.clients.delete(ws);
    if (doc.clients.size > 0) return;
    session.openDocuments.delete(uri);
    this.sendRpcNotification(session, "textDocument/didClose", {
      textDocument: { uri },
    });
  }

  private async forwardRequest(
    session: LspSessionRecord,
    ws: ServerWebSocket<LspSocketData>,
    inputPath: string,
    requestId: string | null | undefined,
    method: string,
    params: Record<string, unknown>,
    responseType: string,
  ): Promise<void> {
    const uri = this.uriForSessionPath(session, inputPath);
    const doc = session.openDocuments.get(uri);
    if (!doc) {
      this.send(ws, {
        type: "error",
        request_id: normalizeRequestId(requestId),
        error: "Document is not open in the language server session.",
      });
      return;
    }
    const rpcId = ++session.requestSeq;
    session.pendingRequests.set(rpcId, {
      kind: "browser",
      ws,
      requestId: normalizeRequestId(requestId),
      responseType,
    });
    this.sendRpcRequest(session, rpcId, method, params);
  }

  private sendRpcRequest(
    session: LspSessionRecord,
    id: number,
    method: string,
    params: Record<string, unknown>,
  ): void {
    this.sendProcessPayload(session, {
      jsonrpc: "2.0",
      id,
      method,
      params,
    });
  }

  private sendRpcNotification(session: LspSessionRecord, method: string, params: Record<string, unknown>): void {
    this.sendProcessPayload(session, {
      jsonrpc: "2.0",
      method,
      params,
    });
  }

  private sendProcessPayload(session: LspSessionRecord, payload: Record<string, unknown>): void {
    const encoded = JSON.stringify(payload);
    const frame = `Content-Length: ${Buffer.byteLength(encoded, "utf8")}\r\n\r\n${encoded}`;
    session.process.stdin.write(frame);
  }

  private createSession(target: ResolvedLspTarget, owner: LspSessionOwner): LspSessionRecord {
    const process = this.spawnProcess(target);
    const key = sessionKeyFor(target, owner);
    const session: LspSessionRecord = {
      key,
      owner: { token: owner.token, userId: owner.userId, handoffToken: null },
      target,
      process,
      clients: new Set(),
      openDocuments: new Map(),
      requestSeq: 0,
      pendingRequests: new Map(),
      initializePromise: Promise.resolve(),
      initialized: false,
      serverCapabilities: null,
      stdoutBuffer: Buffer.alloc(0),
      idleTimer: null,
      createdAt: new Date().toISOString(),
    };
    if (process.pid) registerProcess(process.pid);
    process.stdout.on("data", (chunk) => this.handleProcessMessage(session, chunk));
    process.stderr.on("data", (chunk) => {
      debugSuppressedError(log, "Language server stderr output.", new Error(toBuffer(chunk).toString("utf8")), {
        sessionKey: session.key,
        profileId: target.profile.id,
      });
    });
    process.on("exit", (code, signal) => {
      if (process.pid) unregisterProcess(process.pid);
      this.sessions.delete(session.key);
      for (const pending of session.pendingRequests.values()) {
        if (pending.kind !== "internal") continue;
        clearTimeout(pending.timeout);
        pending.reject(new Error(`Language server exited${code != null ? ` with code ${code}` : ""}${signal ? ` (${signal})` : ""}.`));
      }
      session.pendingRequests.clear();
      for (const client of session.clients) {
        this.send(client, {
          type: "error",
          error: `Language server exited${code != null ? ` with code ${code}` : ""}${signal ? ` (${signal})` : ""}.`,
        });
      }
    });
    session.initializePromise = this.initializeSession(session);
    return session;
  }

  private async initializeSession(session: LspSessionRecord): Promise<void> {
    const initId = ++session.requestSeq;
    const result = await new Promise<any>((resolve, reject) => {
      const timeout = setTimeout(() => {
        session.pendingRequests.delete(initId);
        reject(new Error("Language server initialize request timed out."));
      }, 15_000);
      session.pendingRequests.set(initId, {
        kind: "internal",
        timeout,
        resolve,
        reject,
      });
      this.sendProcessPayload(session, {
        jsonrpc: "2.0",
        id: initId,
        method: "initialize",
        params: {
          processId: session.process.pid ?? null,
          rootUri: uriForPath(session.target.rootPath),
          rootPath: session.target.rootPath,
          workspaceFolders: [
            {
              uri: uriForPath(session.target.rootPath),
              name: path.basename(session.target.rootPath),
            },
          ],
          initializationOptions: session.target.profile.initializationOptions || {},
          capabilities: {
            textDocument: {
              publishDiagnostics: {},
              hover: {
                contentFormat: ["markdown", "plaintext"],
              },
              completion: {
                completionItem: {
                  snippetSupport: false,
                  documentationFormat: ["markdown", "plaintext"],
                },
              },
              definition: {
                linkSupport: true,
              },
              synchronization: {
                didSave: false,
                willSave: false,
                willSaveWaitUntil: false,
              },
            },
          },
        },
      });
    });
    session.serverCapabilities = result?.capabilities || {};
    session.initialized = true;
    this.sendRpcNotification(session, "initialized", {});
  }

  private ensureSession(target: ResolvedLspTarget, owner: LspSessionOwner): LspSessionRecord {
    const key = sessionKeyFor(target, owner);
    const existing = this.sessions.get(key);
    if (existing) return existing;
    const created = this.createSession(target, owner);
    this.sessions.set(key, created);
    return created;
  }

  private getAttachedSession(ws: ServerWebSocket<LspSocketData>): LspSessionRecord | null {
    const key = String(ws.data.attachedSessionKey || "").trim();
    if (!key) return null;
    return this.sessions.get(key) || null;
  }

  private uriForSessionPath(session: LspSessionRecord, inputPath: string): string {
    return uriForPath(this.resolveDocumentTarget(session, inputPath).absolutePath);
  }

  private resolveDocumentTarget(session: LspSessionRecord, inputPath: string): ResolvedLspTarget {
    const target = resolveLspTargetForPath(inputPath);
    if (!target || !target.available) {
      throw new Error("This file is not available for LSP.");
    }
    if (target.profile.id !== session.target.profile.id || target.rootPath !== session.target.rootPath) {
      throw new Error("This file does not belong to the current LSP session.");
    }
    return target;
  }

  private serializeLocationResult(result: unknown): unknown {
    if (Array.isArray(result)) {
      return result.map((item) => this.serializeLocation(item)).filter(Boolean);
    }
    return this.serializeLocation(result);
  }

  private serializeLocation(value: any): any {
    if (!value || typeof value !== "object") return null;
    const rawUri = String(value.targetUri || value.uri || "").trim();
    if (!rawUri) return null;
    try {
      const parsed = new URL(rawUri);
      const absolutePath = decodeURIComponent(parsed.pathname || "");
      return {
        ...value,
        path: toRelativePath(absolutePath),
      };
    } catch {
      return null;
    }
  }

  private serializeWorkspaceEdit(value: any): any {
    if (!value || typeof value !== "object") return null;
    const changes = value.changes && typeof value.changes === "object" ? value.changes : null;
    const documentChanges = Array.isArray(value.documentChanges) ? value.documentChanges : null;
    return {
      changes: changes ? Object.fromEntries(
        Object.entries(changes)
          .map(([uri, edits]) => {
            const path = this.pathForUri(uri);
            return path ? [path, edits] : null;
          })
          .filter(Boolean) as Array<[string, unknown]>
      ) : null,
      documentChanges: documentChanges ? documentChanges.map((change: any) => {
        if (!change || typeof change !== "object") return null;
        const rawUri = String(change.textDocument?.uri || "").trim();
        const path = this.pathForUri(rawUri);
        if (!path) return null;
        return {
          ...change,
          path,
        };
      }).filter(Boolean) : null,
    };
  }

  private pathForUri(uri: string): string | null {
    const rawUri = String(uri || "").trim();
    if (!rawUri) return null;
    try {
      const parsed = new URL(rawUri);
      const absolutePath = decodeURIComponent(parsed.pathname || "");
      return toRelativePath(absolutePath);
    } catch {
      return null;
    }
  }

  private parseClientMessage(rawMessage: string | Buffer | Uint8Array): EditorClientMessage | null {
    try {
      const text = typeof rawMessage === "string" ? rawMessage : Buffer.from(rawMessage).toString("utf8");
      return JSON.parse(text) as EditorClientMessage;
    } catch (error) {
      debugSuppressedError(log, "LSP client frame was not valid JSON.", error);
      return null;
    }
  }

  private send(ws: ServerWebSocket<LspSocketData>, payload: Record<string, unknown>): void {
    try {
      ws.send(JSON.stringify(payload));
    } catch (error) {
      debugSuppressedError(log, "Failed to send LSP websocket payload to browser.", error, {
        path: ws.data?.path,
        sessionKey: ws.data?.attachedSessionKey,
      });
    }
  }

  private sweepExpiredHandoffs(nowMs = Date.now()): void {
    for (const [token, record] of this.handoffs.entries()) {
      if (!record || record.expiresAt <= nowMs) this.handoffs.delete(token);
    }
  }

  private validateHandoff(owner: LspSessionOwner, relativePath: string): boolean {
    const handoffToken = String(owner?.handoffToken || "").trim();
    if (!handoffToken) return false;
    this.sweepExpiredHandoffs();
    const record = this.handoffs.get(handoffToken);
    if (!record) return false;
    if (record.owner.token !== owner.token || record.owner.userId !== owner.userId || record.relativePath !== relativePath) {
      return false;
    }
    this.handoffs.delete(handoffToken);
    return true;
  }

  private scheduleIdleTimer(session: LspSessionRecord): void {
    if (this.idleTtlMs <= 0) return;
    this.clearIdleTimer(session);
    session.idleTimer = setTimeout(() => {
      if (session.clients.size > 0) return;
      this.sessions.delete(session.key);
      try {
        const pid = session.process.pid ?? null;
        if (pid) {
          unregisterProcess(pid);
          killProcessTree(pid);
        } else {
          session.process.kill("SIGKILL");
        }
      } catch (error) {
        debugSuppressedError(log, "Failed to terminate idle language server session.", error, {
          sessionKey: session.key,
        });
      }
    }, this.idleTtlMs);
  }

  private clearIdleTimer(session: LspSessionRecord): void {
    if (!session.idleTimer) return;
    clearTimeout(session.idleTimer);
    session.idleTimer = null;
  }
}

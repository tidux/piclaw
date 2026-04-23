import { afterEach, describe, expect, test } from "bun:test";
import { chmodSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";

import { LspSessionService } from "../../../src/channels/web/lsp/lsp-session-service.js";
import { LspRuntimePolicy } from "../../../src/channels/web/lsp/lsp-runtime-policy.js";
import { resolveLspTargetForPath } from "../../../src/channels/web/lsp/server-registry.js";

const TEST_WORKSPACE_ROOT = process.env.PICLAW_WORKSPACE || process.cwd();

class FakeLspProcess {
  stdinWrites: string[] = [];
  stdoutListeners: Array<(chunk: string) => void> = [];
  stderrListeners: Array<(chunk: string) => void> = [];
  exitListeners: Array<(code: number | null, signal: NodeJS.Signals | null) => void> = [];
  pid = 43210;

  stdin = {
    write: (chunk: string | Uint8Array) => {
      this.stdinWrites.push(typeof chunk === "string" ? chunk : Buffer.from(chunk).toString("utf8"));
    },
  };

  stdout = {
    on: (_event: "data", listener: (chunk: string) => void) => {
      this.stdoutListeners.push(listener);
    },
  };

  stderr = {
    on: (_event: "data", listener: (chunk: string) => void) => {
      this.stderrListeners.push(listener);
    },
  };

  on(event: "exit", listener: (code: number | null, signal: NodeJS.Signals | null) => void) {
    if (event === "exit") this.exitListeners.push(listener);
  }

  kill(): boolean {
    return true;
  }

  emit(payload: unknown) {
    const text = JSON.stringify(payload);
    const frame = `Content-Length: ${Buffer.byteLength(text, "utf8")}\r\n\r\n${text}`;
    for (const listener of this.stdoutListeners) {
      listener(frame);
    }
  }
}

function createMockWs(data: Record<string, unknown>) {
  const sent: any[] = [];
  const closed: Array<{ code?: number; reason?: string }> = [];
  return {
    data,
    sent,
    closed,
    send(payload: string) {
      sent.push(JSON.parse(payload));
    },
    close: (code?: number, reason?: string) => {
      closed.push({ code, reason });
    },
  };
}

function decodeLastProcessPayload(process: FakeLspProcess) {
  const frame = process.stdinWrites.at(-1) || "";
  const body = frame.split("\r\n\r\n")[1] || "";
  return JSON.parse(body);
}

async function flushMicrotasks() {
  await Promise.resolve();
  await Promise.resolve();
  await new Promise((resolve) => setTimeout(resolve, 0));
}

function createWorkspaceProject(name: string) {
  const root = path.join(TEST_WORKSPACE_ROOT, ".tmp", name);
  rmSync(root, { recursive: true, force: true });
  mkdirSync(path.join(root, "node_modules", ".bin"), { recursive: true });
  mkdirSync(path.join(root, "src"), { recursive: true });
  writeFileSync(path.join(root, "tsconfig.json"), "{}\n");
  writeFileSync(path.join(root, "src", "app.ts"), "export const answer = 42;\n");
  writeFileSync(path.join(root, "src", "other.ts"), "export const other = true;\n");
  writeFileSync(path.join(root, "node_modules", ".bin", "typescript-language-server"), "#!/bin/sh\nexit 0\n");
  chmodSync(path.join(root, "node_modules", ".bin", "typescript-language-server"), 0o755);
  return {
    root,
    relativeFile: path.relative(TEST_WORKSPACE_ROOT, path.join(root, "src", "app.ts")).replaceAll(path.sep, "/"),
    otherFile: path.relative(TEST_WORKSPACE_ROOT, path.join(root, "src", "other.ts")).replaceAll(path.sep, "/"),
  };
}

const createdRoots: string[] = [];

afterEach(() => {
  for (const root of createdRoots.splice(0)) {
    rmSync(root, { recursive: true, force: true });
  }
});

describe("LspSessionService", () => {
  test("reuses a session, forwards diagnostics, and serializes definitions", async () => {
    const project = createWorkspaceProject("lsp-service-reuse");
    createdRoots.push(project.root);
    const target = resolveLspTargetForPath(project.relativeFile);
    expect(target?.available).toBe(true);
    if (!target) throw new Error("Expected LSP target");

    const fakeProcess = new FakeLspProcess();
    let spawnCalls = 0;
    const service = new LspSessionService({
      spawnProcess: () => {
        spawnCalls += 1;
        return fakeProcess as any;
      },
      runtimePolicyConfigPath: null,
    });

    const baseData = {
      kind: "lsp" as const,
      token: "owner-1",
      userId: "user-1",
      path: target.relativePath,
      target,
      attachedSessionKey: null,
    };
    const wsA = createMockWs({ ...baseData });
    const wsB = createMockWs({ ...baseData });

    service.attachClient(wsA as any);
    expect(spawnCalls).toBe(1);
    const initializeRequest = decodeLastProcessPayload(fakeProcess);
    expect(initializeRequest.method).toBe("initialize");
    fakeProcess.emit({
      jsonrpc: "2.0",
      id: initializeRequest.id,
      result: {
        capabilities: {
          hoverProvider: true,
          definitionProvider: true,
          completionProvider: {},
        },
      },
    });
    await flushMicrotasks();
    expect(wsA.sent.some((payload) => payload.type === "ready")).toBe(true);

    service.attachClient(wsB as any);
    expect(spawnCalls).toBe(1);
    expect(service.getSessionInfo({ token: "owner-1", userId: "user-1" }, target.relativePath).connected_clients).toBe(2);

    service.handleMessage(wsA as any, JSON.stringify({
      type: "open_document",
      path: target.relativePath,
      text: "export const answer = 42;\n",
    }));
    await flushMicrotasks();
    expect(decodeLastProcessPayload(fakeProcess).method).toBe("textDocument/didOpen");

    fakeProcess.emit({
      jsonrpc: "2.0",
      method: "textDocument/publishDiagnostics",
      params: {
        uri: `file://${target.absolutePath}`,
        diagnostics: [{
          message: "Example diagnostic",
          range: {
            start: { line: 0, character: 0 },
            end: { line: 0, character: 6 },
          },
          severity: 1,
        }],
      },
    });
    expect(wsA.sent.at(-1)).toMatchObject({ type: "diagnostics", path: target.relativePath });

    service.handleMessage(wsA as any, JSON.stringify({
      type: "definition",
      path: target.relativePath,
      line: 0,
      character: 0,
      request_id: "def-1",
    }));
    await flushMicrotasks();
    const definitionRequest = decodeLastProcessPayload(fakeProcess);
    expect(definitionRequest.method).toBe("textDocument/definition");
    fakeProcess.emit({
      jsonrpc: "2.0",
      id: definitionRequest.id,
      result: [{
        uri: `file://${target.absolutePath}`,
        range: {
          start: { line: 0, character: 7 },
          end: { line: 0, character: 13 },
        },
      }],
    });
    expect(wsA.sent.at(-1)).toEqual({
      type: "definition_result",
      request_id: "def-1",
      result: [{
        uri: `file://${target.absolutePath}`,
        path: target.relativePath,
        range: {
          start: { line: 0, character: 7 },
          end: { line: 0, character: 13 },
        },
      }],
      error: null,
    });

    service.handleMessage(wsA as any, JSON.stringify({
      type: "references",
      path: target.relativePath,
      line: 0,
      character: 0,
      request_id: "refs-1",
    }));
    await flushMicrotasks();
    const referencesRequest = decodeLastProcessPayload(fakeProcess);
    expect(referencesRequest.method).toBe("textDocument/references");
    fakeProcess.emit({
      jsonrpc: "2.0",
      id: referencesRequest.id,
      result: [{
        uri: `file://${target.absolutePath}`,
        range: {
          start: { line: 0, character: 0 },
          end: { line: 0, character: 6 },
        },
      }],
    });
    expect(wsA.sent.at(-1)).toEqual({
      type: "references_result",
      request_id: "refs-1",
      result: [{
        uri: `file://${target.absolutePath}`,
        path: target.relativePath,
        range: {
          start: { line: 0, character: 0 },
          end: { line: 0, character: 6 },
        },
      }],
      error: null,
    });

    service.handleMessage(wsA as any, JSON.stringify({
      type: "rename",
      path: target.relativePath,
      line: 0,
      character: 0,
      new_name: "renamedAnswer",
      request_id: "rename-1",
    }));
    await flushMicrotasks();
    const renameRequest = decodeLastProcessPayload(fakeProcess);
    expect(renameRequest.method).toBe("textDocument/rename");
    expect(renameRequest.params.newName).toBe("renamedAnswer");
    fakeProcess.emit({
      jsonrpc: "2.0",
      id: renameRequest.id,
      result: {
        changes: {
          [`file://${target.absolutePath}`]: [{
            range: {
              start: { line: 0, character: 13 },
              end: { line: 0, character: 19 },
            },
            newText: "renamedAnswer",
          }],
        },
      },
    });
    expect(wsA.sent.at(-1)).toEqual({
      type: "rename_result",
      request_id: "rename-1",
      result: {
        changes: {
          [target.relativePath]: [{
            range: {
              start: { line: 0, character: 13 },
              end: { line: 0, character: 19 },
            },
            newText: "renamedAnswer",
          }],
        },
        documentChanges: null,
      },
      error: null,
    });
  });

  test("rejects requests for files outside the attached LSP session root", async () => {
    const projectA = createWorkspaceProject("lsp-service-a");
    const projectB = createWorkspaceProject("lsp-service-b");
    createdRoots.push(projectA.root, projectB.root);
    const targetA = resolveLspTargetForPath(projectA.relativeFile);
    expect(targetA?.available).toBe(true);
    if (!targetA) throw new Error("Expected LSP target");

    const fakeProcess = new FakeLspProcess();
    const service = new LspSessionService({
      spawnProcess: () => fakeProcess as any,
      runtimePolicyConfigPath: null,
    });

    const ws = createMockWs({
      kind: "lsp",
      token: "owner-1",
      userId: "user-1",
      path: targetA.relativePath,
      target: targetA,
      attachedSessionKey: null,
    });

    service.attachClient(ws as any);
    const initializeRequest = decodeLastProcessPayload(fakeProcess);
    fakeProcess.emit({
      jsonrpc: "2.0",
      id: initializeRequest.id,
      result: { capabilities: {} },
    });
    await flushMicrotasks();

    service.handleMessage(ws as any, JSON.stringify({
      type: "open_document",
      path: projectB.relativeFile,
      text: "export const other = true;\n",
    }));
    await flushMicrotasks();

    expect(ws.sent.some((payload) =>
      payload?.type === "error"
      && payload?.error === "This file does not belong to the current LSP session."
    )).toBe(true);
  });

  test("exposes runtime settings and tears down live sessions when a language is disabled", async () => {
    const project = createWorkspaceProject("lsp-service-disable");
    createdRoots.push(project.root);
    const target = resolveLspTargetForPath(project.relativeFile);
    expect(target?.available).toBe(true);
    if (!target) throw new Error("Expected LSP target");

    const fakeProcess = new FakeLspProcess();
    const service = new LspSessionService({
      spawnProcess: () => fakeProcess as any,
      runtimePolicy: new LspRuntimePolicy(),
    });

    const ws = createMockWs({
      kind: "lsp",
      token: "owner-1",
      userId: "user-1",
      path: target.relativePath,
      target,
      attachedSessionKey: null,
    });

    service.attachClient(ws as any);
    const initializeRequest = decodeLastProcessPayload(fakeProcess);
    fakeProcess.emit({
      jsonrpc: "2.0",
      id: initializeRequest.id,
      result: { capabilities: {} },
    });
    await flushMicrotasks();

    expect(service.getRuntimePolicySettings().agents.editor.languages.typescript.enabled).toBe(true);

    const updated = service.updateRuntimePolicySettings({
      agents: {
        editor: {
          languages: {
            typescript: { enabled: false },
          },
        },
      },
    });
    expect(updated.agents.editor.languages.typescript.enabled).toBe(false);
    expect(ws.closed).toEqual([{ code: 1000, reason: "LSP is disabled for the \"typescript\" language in workspace settings." }]);

    const sessionInfo = service.getSessionInfo({ token: "owner-1", userId: "user-1" }, target.relativePath);
    expect(sessionInfo.enabled).toBe(false);
    expect(sessionInfo.available).toBe(false);
    expect(sessionInfo.unavailable_reason).toBe("LSP is disabled for the \"typescript\" language in workspace settings.");
    expect(sessionInfo.active).toBe(false);
  });

  test("preserves disabled-language failure reasons for websocket and handoff requests", () => {
    const project = createWorkspaceProject("lsp-service-disabled-requests");
    createdRoots.push(project.root);

    const service = new LspSessionService({
      runtimePolicy: new LspRuntimePolicy(),
    });
    service.updateRuntimePolicySettings({
      agents: {
        editor: {
          languages: {
            typescript: { enabled: false },
          },
        },
      },
    });

    const socketResolution = service.resolveSocketDataRequest(
      new Request(`http://localhost/lsp/ws?path=${project.relativeFile}`, {
        headers: { "x-piclaw-lsp-client": "client-token-1234" },
      }),
      true,
    );
    expect(socketResolution.ok).toBe(false);
    if (socketResolution.ok) throw new Error("Expected socket resolution to fail");
    expect(socketResolution.failure).toEqual({
      status: 403,
      error: "LSP is disabled for the \"typescript\" language in workspace settings.",
    });

    const handoffResolution = service.createHandoffRequest(
      new Request(`http://localhost/lsp/handoff?path=${project.relativeFile}`, {
        method: "POST",
        headers: { "x-piclaw-lsp-client": "client-token-1234" },
      }),
      true,
    );
    expect(handoffResolution.ok).toBe(false);
    if (handoffResolution.ok) throw new Error("Expected handoff resolution to fail");
    expect(handoffResolution.failure).toEqual({
      status: 403,
      error: "LSP is disabled for the \"typescript\" language in workspace settings.",
    });
  });

  test("rejects attach when a language is disabled after websocket validation but before open", () => {
    const project = createWorkspaceProject("lsp-service-attach-race");
    createdRoots.push(project.root);
    const target = resolveLspTargetForPath(project.relativeFile);
    expect(target?.available).toBe(true);
    if (!target) throw new Error("Expected LSP target");

    let spawnCalls = 0;
    const service = new LspSessionService({
      spawnProcess: () => {
        spawnCalls += 1;
        return new FakeLspProcess() as any;
      },
      runtimePolicy: new LspRuntimePolicy(),
    });

    const socketResolution = service.resolveSocketDataRequest(
      new Request(`http://localhost/lsp/ws?path=${project.relativeFile}`, {
        headers: { "x-piclaw-lsp-client": "client-token-1234" },
      }),
      true,
    );
    expect(socketResolution.ok).toBe(true);
    if (!socketResolution.ok) throw new Error("Expected websocket resolution to succeed before disable");

    service.updateRuntimePolicySettings({
      agents: {
        editor: {
          languages: {
            typescript: { enabled: false },
          },
        },
      },
    });

    const ws = createMockWs(socketResolution.data);
    service.attachClient(ws as any);

    expect(spawnCalls).toBe(0);
    expect(ws.sent).toContainEqual({
      type: "error",
      error: "LSP is disabled for the \"typescript\" language in workspace settings.",
    });
    expect(ws.closed).toEqual([
      { code: 1000, reason: "LSP is disabled for the \"typescript\" language in workspace settings." },
    ]);
    expect(ws.data.attachedSessionKey).toBeNull();
  });

  test("does not partially enforce a new policy when persistence fails", () => {
    const project = createWorkspaceProject("lsp-service-persist-failure");
    createdRoots.push(project.root);
    const target = resolveLspTargetForPath(project.relativeFile);
    expect(target?.available).toBe(true);
    if (!target) throw new Error("Expected LSP target");

    const badConfigPath = path.join(project.root, ".piclaw", "config.json");
    mkdirSync(badConfigPath, { recursive: true });

    const service = new LspSessionService({
      runtimePolicyConfigPath: badConfigPath,
    });

    expect(() => service.updateRuntimePolicySettings({
      agents: {
        editor: {
          languages: {
            typescript: { enabled: false },
          },
        },
      },
    })).toThrow();

    const info = service.getSessionInfo({ token: "owner-1", userId: "user-1" }, target.relativePath);
    expect(info.enabled).toBe(true);
    expect(info.available).toBe(true);
    expect(info.unavailable_reason).toBeNull();
  });
});

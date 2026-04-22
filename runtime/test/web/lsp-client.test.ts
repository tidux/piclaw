import { afterEach, describe, expect, test } from "bun:test";

import { createLspClientAdapter } from "../../web/src/lsp/lsp-client.js";

class FakeWebSocket {
  static instances: FakeWebSocket[] = [];
  static OPEN = 1;

  url: string;
  readyState = 0;
  sent: any[] = [];
  listeners = new Map<string, Function[]>();

  constructor(url: string) {
    this.url = url;
    FakeWebSocket.instances.push(this);
  }

  addEventListener(type: string, listener: Function) {
    const current = this.listeners.get(type) || [];
    current.push(listener);
    this.listeners.set(type, current);
  }

  send(payload: string) {
    this.sent.push(JSON.parse(payload));
  }

  close() {
    this.readyState = 3;
    this.emit("close", {});
  }

  emit(type: string, event: any) {
    for (const listener of this.listeners.get(type) || []) {
      listener(event);
    }
  }

  open() {
    this.readyState = FakeWebSocket.OPEN;
    this.emit("open", {});
  }

  message(payload: unknown) {
    this.emit("message", { data: JSON.stringify(payload) });
  }
}

const originalWebSocket = globalThis.WebSocket;

afterEach(() => {
  globalThis.WebSocket = originalWebSocket;
  FakeWebSocket.instances = [];
});

describe("createLspClientAdapter", () => {
  test("opens once, upgrades later edits to changes, and exposes capabilities", async () => {
    globalThis.WebSocket = FakeWebSocket as any;
    const statuses: string[] = [];
    const adapter = createLspClientAdapter({
      path: "src/app.ts",
      getSession: async () => ({
        available: true,
        ws_path: "/lsp/ws",
        language_id: "typescript",
      }),
      onStatus: (status: any) => statuses.push(status.state),
    });

    adapter.openDocument("const a = 1;\n");
    await adapter.connect();
    const socket = FakeWebSocket.instances[0];
    expect(socket).toBeDefined();

    socket.open();
    expect(socket.sent).toEqual([
      { type: "open_document", path: "src/app.ts", text: "const a = 1;\n" },
    ]);

    socket.message({
      type: "ready",
      capabilities: {
        completionProvider: {},
        hoverProvider: true,
      },
    });
    expect(adapter.getServerCapabilities()).toEqual({
      completionProvider: {},
      hoverProvider: true,
    });

    adapter.openDocument("const a = 2;\n");
    expect(socket.sent.at(-1)).toEqual({
      type: "change_document",
      path: "src/app.ts",
      text: "const a = 2;\n",
    });
    expect(statuses).toEqual(["checking", "connecting", "connected", "ready"]);
  });

  test("rejects pending requests when the socket closes", async () => {
    globalThis.WebSocket = FakeWebSocket as any;
    const adapter = createLspClientAdapter({
      path: "src/app.ts",
      getSession: async () => ({
        available: true,
        ws_path: "/lsp/ws",
        language_id: "typescript",
      }),
    });

    await adapter.connect();
    const socket = FakeWebSocket.instances[0];
    socket.open();
    socket.message({ type: "ready", capabilities: { definitionProvider: true } });

    const pending = adapter.requestDefinition(0, 0);
    socket.close();

    await expect(pending).rejects.toThrow("LSP connection closed.");
  });

  test("sends v2 references and rename requests through the websocket contract", async () => {
    globalThis.WebSocket = FakeWebSocket as any;
    const adapter = createLspClientAdapter({
      path: "src/app.ts",
      getSession: async () => ({
        available: true,
        ws_path: "/lsp/ws",
        language_id: "typescript",
      }),
    });

    await adapter.connect();
    const socket = FakeWebSocket.instances[0];
    socket.open();
    socket.message({
      type: "ready",
      capabilities: {
        referencesProvider: true,
        renameProvider: true,
      },
    });

    const refsPromise = adapter.requestReferences(1, 2);
    const refsMessage = socket.sent.at(-1);
    expect(refsMessage).toMatchObject({
      type: "references",
      path: "src/app.ts",
      line: 1,
      character: 2,
    });
    socket.message({
      type: "references_result",
      request_id: refsMessage.request_id,
      result: [{ path: "src/app.ts", range: { start: { line: 1, character: 2 }, end: { line: 1, character: 5 } } }],
      error: null,
    });
    await expect(refsPromise).resolves.toEqual([
      { path: "src/app.ts", range: { start: { line: 1, character: 2 }, end: { line: 1, character: 5 } } },
    ]);

    const renamePromise = adapter.requestRename(1, 2, "nextName");
    const renameMessage = socket.sent.at(-1);
    expect(renameMessage).toMatchObject({
      type: "rename",
      path: "src/app.ts",
      line: 1,
      character: 2,
      new_name: "nextName",
    });
    socket.message({
      type: "rename_result",
      request_id: renameMessage.request_id,
      result: { changes: { "src/app.ts": [{ newText: "nextName" }] } },
      error: null,
    });
    await expect(renamePromise).resolves.toEqual({ changes: { "src/app.ts": [{ newText: "nextName" }] } });
  });

  test("surfaces unavailable sessions without creating a websocket", async () => {
    globalThis.WebSocket = FakeWebSocket as any;
    const statuses: string[] = [];
    const adapter = createLspClientAdapter({
      path: "notes.txt",
      getSession: async () => ({
        available: false,
        unavailable_reason: "No curated LSP server profile matches this file type.",
      }),
      onStatus: (status: any) => statuses.push(status.state),
    });

    const session = await adapter.connect();
    expect(session.available).toBe(false);
    expect(FakeWebSocket.instances).toHaveLength(0);
    expect(statuses).toEqual(["checking", "unavailable"]);
  });
});

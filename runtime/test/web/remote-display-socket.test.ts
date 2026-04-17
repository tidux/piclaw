import { afterEach, expect, test } from "bun:test";

import { WebSocketRemoteDisplayBoundary } from "../../web/src/panes/remote-display-socket.js";

const originalWebSocket = globalThis.WebSocket;

afterEach(() => {
  if (originalWebSocket === undefined) {
    delete (globalThis as any).WebSocket;
  } else {
    (globalThis as any).WebSocket = originalWebSocket;
  }
});

test("WebSocketRemoteDisplayBoundary tolerates close races during reconnect and dispose", () => {
  const sockets: ThrowingWebSocket[] = [];

  class ThrowingWebSocket {
    url: string;
    binaryType: BinaryType = "blob";
    listeners = new Map<string, Array<(...args: any[]) => void>>();

    constructor(url: string) {
      this.url = url;
      sockets.push(this);
    }

    addEventListener(type: string, listener: (...args: any[]) => void) {
      const current = this.listeners.get(type) || [];
      current.push(listener);
      this.listeners.set(type, current);
    }

    close() {
      throw new Error("already closing");
    }

    send() {}
  }

  (globalThis as any).WebSocket = ThrowingWebSocket;

  const boundary = new WebSocketRemoteDisplayBoundary({
    url: "wss://example.test/remote-display",
  });

  expect(() => boundary.connect()).not.toThrow();
  expect(() => boundary.connect()).not.toThrow();
  expect(sockets).toHaveLength(2);
  expect(() => boundary.dispose()).not.toThrow();
});

test("WebSocketRemoteDisplayBoundary queues outbound payloads until the socket opens", () => {
  const sockets: FakeWebSocket[] = [];
  const metricSnapshots: Array<{ bytesIn: number; bytesOut: number }> = [];

  class FakeWebSocket {
    static CONNECTING = 0;
    static OPEN = 1;
    static CLOSING = 2;
    static CLOSED = 3;

    url: string;
    binaryType: BinaryType = "blob";
    readyState = FakeWebSocket.CONNECTING;
    listeners = new Map<string, Array<(...args: any[]) => void>>();
    sent: Array<string | ArrayBuffer | ArrayBufferView | Blob> = [];

    constructor(url: string) {
      this.url = url;
      sockets.push(this);
    }

    addEventListener(type: string, listener: (...args: any[]) => void) {
      const current = this.listeners.get(type) || [];
      current.push(listener);
      this.listeners.set(type, current);
    }

    close() {
      this.readyState = FakeWebSocket.CLOSED;
    }

    send(payload: string | ArrayBuffer | ArrayBufferView | Blob) {
      this.sent.push(payload);
    }

    emit(type: string, event: any = {}) {
      for (const listener of this.listeners.get(type) || []) {
        listener(event);
      }
    }
  }

  (globalThis as any).WebSocket = FakeWebSocket;

  const boundary = new WebSocketRemoteDisplayBoundary({
    url: "wss://example.test/remote-display",
    onMetrics: (metrics) => {
      metricSnapshots.push(metrics);
    },
  });

  boundary.connect();
  expect(sockets).toHaveLength(1);

  boundary.send("queued-before-open");
  boundary.sendControl({ kind: "queued-control" });

  expect(sockets[0].sent).toEqual([]);
  expect(boundary.getMetrics()).toEqual({ bytesIn: 0, bytesOut: 0 });

  sockets[0].readyState = FakeWebSocket.OPEN;
  sockets[0].emit("open");

  expect(sockets[0].sent).toEqual([
    "queued-before-open",
    JSON.stringify({ kind: "queued-control" }),
  ]);
  expect(boundary.getMetrics().bytesOut).toBeGreaterThan(0);
  expect(metricSnapshots.at(-1)?.bytesOut).toBe(boundary.getMetrics().bytesOut);
});

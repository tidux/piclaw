import { describe, expect, mock, test } from "bun:test";
import { EventEmitter } from "node:events";

import { WebSocketTcpBridge } from "../../../src/channels/web/remote-display/websocket-tcp-bridge.ts";

class FakeSocket extends EventEmitter {
  writes: Array<string | Buffer> = [];
  destroyed = false;

  write(chunk: string | Buffer) {
    this.writes.push(chunk);
    return true;
  }

  destroy() {
    this.destroyed = true;
  }
}

describe("WebSocketTcpBridge", () => {
  test("bridges binary payloads and handles control messages generically", () => {
    const socket = new FakeSocket();
    const ws = {
      data: { kind: "vnc", targetId: "lab" },
      send: mock(() => {}),
      close: mock(() => {}),
    } as any;

    const bridge = new WebSocketTcpBridge<any, { id: string }>({
      createSocket: () => socket as any,
      onConnect: (client, target) => {
        client.send(JSON.stringify({ type: "connected", target }));
      },
      onError: (client, _target, error) => {
        client.send(JSON.stringify({ type: "error", error: error.message }));
      },
      handleControlMessage: (client, message) => {
        if (message !== '{"type":"ping"}') return false;
        client.send(JSON.stringify({ type: "pong" }));
        return true;
      },
    });

    bridge.attachClient(ws, { id: "lab" });
    socket.emit("connect");
    expect(ws.send).toHaveBeenCalledWith(JSON.stringify({ type: "connected", target: { id: "lab" } }));

    bridge.handleMessage(ws, '{"type":"ping"}');
    expect(ws.send).toHaveBeenCalledWith(JSON.stringify({ type: "pong" }));
    expect(socket.writes).toHaveLength(0);

    bridge.handleMessage(ws, Buffer.from([1, 2, 3]));
    expect(socket.writes).toHaveLength(1);
    expect(Buffer.isBuffer(socket.writes[0])).toBe(true);

    socket.emit("data", Buffer.from([4, 5]));
    expect(ws.send).toHaveBeenCalledWith(Buffer.from([4, 5]));

    socket.emit("error", new Error("boom"));
    expect(ws.send).toHaveBeenCalledWith(JSON.stringify({ type: "error", error: "boom" }));
    expect(ws.close).toHaveBeenCalled();
  });
});

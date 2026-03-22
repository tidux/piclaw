import { describe, expect, test } from "bun:test";
import { zlibSync } from "fflate";

import { VncRemoteDisplayProtocol } from "../../web/src/panes/remote-display-vnc.js";

const encoder = new TextEncoder();
const decoder = new TextDecoder();

function bytes(...values: number[]) {
  return Uint8Array.from(values);
}

function buildServerInit({ width, height, name }: { width: number; height: number; name: string }) {
  const nameBytes = encoder.encode(name);
  const buffer = new ArrayBuffer(24 + nameBytes.length);
  const view = new DataView(buffer);
  view.setUint16(0, width, false);
  view.setUint16(2, height, false);
  view.setUint8(4, 32); // bitsPerPixel
  view.setUint8(5, 24); // depth
  view.setUint8(6, 0); // little-endian
  view.setUint8(7, 1); // true-colour
  view.setUint16(8, 255, false);
  view.setUint16(10, 255, false);
  view.setUint16(12, 255, false);
  view.setUint8(14, 16);
  view.setUint8(15, 8);
  view.setUint8(16, 0);
  view.setUint32(20, nameBytes.length, false);
  const payload = new Uint8Array(buffer);
  payload.set(nameBytes, 24);
  return payload;
}

describe("VncRemoteDisplayProtocol", () => {
  test("negotiates RFB 3.8 and emits generic display-init events", () => {
    const protocol = new VncRemoteDisplayProtocol();

    const version = protocol.receive(encoder.encode("RFB 003.008\n"));
    expect(version.events).toEqual([
      {
        type: "protocol-version",
        protocol: "vnc",
        server: "RFB 003.008",
        client: "RFB 003.008",
      },
    ]);
    expect(decoder.decode(version.outgoing[0])).toBe("RFB 003.008\n");

    const securityTypes = protocol.receive(bytes(1, 1));
    expect(securityTypes.events).toEqual([
      { type: "security-types", protocol: "vnc", types: [1] },
      { type: "security-selected", protocol: "vnc", securityType: 1, label: "None" },
    ]);
    expect(Array.from(securityTypes.outgoing[0])).toEqual([1]);

    const securityResult = protocol.receive(bytes(0, 0, 0, 0));
    expect(securityResult.events).toEqual([
      { type: "security-result", protocol: "vnc", ok: true },
    ]);
    expect(Array.from(securityResult.outgoing[0])).toEqual([1]);

    const serverInit = protocol.receive(buildServerInit({ width: 2, height: 1, name: "Lab Desktop" }));
    expect(serverInit.events).toHaveLength(1);
    expect(serverInit.events[0]).toMatchObject({
      type: "display-init",
      protocol: "vnc",
      width: 2,
      height: 1,
      name: "Lab Desktop",
    });
    expect(serverInit.outgoing).toHaveLength(3);
    expect(serverInit.outgoing[0][0]).toBe(0); // SetPixelFormat
    expect(serverInit.outgoing[1][0]).toBe(2); // SetEncodings
    expect(Array.from(serverInit.outgoing[1].slice(4))).toEqual([
      0, 0, 0, 16, // ZRLE
      0, 0, 0, 5, // Hextile
      0, 0, 0, 2, // RRE
      0, 0, 0, 1, // CopyRect
      0, 0, 0, 0, // Raw
      255, 255, 255, 33, // DesktopSize pseudo-encoding (-223)
    ]);
    expect(serverInit.outgoing[2][0]).toBe(3); // FramebufferUpdateRequest
    expect(protocol.state).toBe("connected");
    expect(protocol.framebufferWidth).toBe(2);
    expect(protocol.framebufferHeight).toBe(1);
    expect(protocol.serverName).toBe("Lab Desktop");
  });

  test("negotiates VNC password auth under RFB 3.8 when a password is configured", () => {
    const protocol = new VncRemoteDisplayProtocol({ password: "cd8a99cd" });

    const version = protocol.receive(encoder.encode("RFB 003.008\n"));
    expect(decoder.decode(version.outgoing[0])).toBe("RFB 003.008\n");

    const securityTypes = protocol.receive(bytes(1, 2));
    expect(securityTypes.events).toEqual([
      { type: "security-types", protocol: "vnc", types: [2] },
      { type: "security-selected", protocol: "vnc", securityType: 2, label: "VNC Authentication" },
    ]);
    expect(Array.from(securityTypes.outgoing[0])).toEqual([2]);

    const challenge = Uint8Array.from([
      0x00, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77,
      0x88, 0x99, 0xaa, 0xbb, 0xcc, 0xdd, 0xee, 0xff,
    ]);
    const authChallenge = protocol.receive(challenge);
    expect(authChallenge.events).toEqual([]);
    expect(Array.from(authChallenge.outgoing[0])).toEqual([
      0xe9, 0xbd, 0x7c, 0x77, 0x80, 0x18, 0x4f, 0x8f,
      0x84, 0x5a, 0x17, 0x35, 0x81, 0xf4, 0xdd, 0xeb,
    ]);

    const securityResult = protocol.receive(bytes(0, 0, 0, 0));
    expect(securityResult.events).toEqual([
      { type: "security-result", protocol: "vnc", ok: true },
    ]);
    expect(Array.from(securityResult.outgoing[0])).toEqual([1]);
  });

  test("requires a password when the server only offers VNC auth", () => {
    const protocol = new VncRemoteDisplayProtocol();
    protocol.receive(encoder.encode("RFB 003.008\n"));
    expect(() => protocol.receive(bytes(1, 2))).toThrow(/password/i);
  });

  test("decodes raw framebuffer updates into generic RGBA rectangles", () => {
    const protocol = new VncRemoteDisplayProtocol();
    protocol.receive(encoder.encode("RFB 003.008\n"));
    protocol.receive(bytes(1, 1));
    protocol.receive(bytes(0, 0, 0, 0));
    protocol.receive(buildServerInit({ width: 1, height: 1, name: "Display" }));

    const framebufferUpdate = protocol.receive(bytes(
      0, 0, 0, 1, // message type, padding, rect count
      0, 0, 0, 0, // x, y
      0, 1, 0, 1, // width, height
      0, 0, 0, 0, // raw encoding
      0x00, 0x00, 0xff, 0x00, // little-endian pixel value => red
    ));

    expect(framebufferUpdate.events).toHaveLength(1);
    expect(framebufferUpdate.events[0]).toMatchObject({
      type: "framebuffer-update",
      protocol: "vnc",
      width: 1,
      height: 1,
    });
    const rects = (framebufferUpdate.events[0] as any).rects;
    expect(rects).toHaveLength(1);
    expect(rects[0]).toMatchObject({ kind: "rgba", x: 0, y: 0, width: 1, height: 1 });
    expect(Array.from(rects[0].rgba)).toEqual([255, 0, 0, 255]);
    expect(framebufferUpdate.outgoing).toHaveLength(1);
    expect(framebufferUpdate.outgoing[0][0]).toBe(3);
  });

  test("parses RRE framebuffer updates", () => {
    const protocol = new VncRemoteDisplayProtocol();
    protocol.receive(encoder.encode("RFB 003.008\n"));
    protocol.receive(bytes(1, 1));
    protocol.receive(bytes(0, 0, 0, 0));
    protocol.receive(buildServerInit({ width: 4, height: 4, name: "Display" }));

    const framebufferUpdate = protocol.receive(bytes(
      0, 0, 0, 1,
      0, 0, 0, 0,
      0, 4, 0, 4,
      0, 0, 0, 2,
      0, 0, 0, 1,
      0xff, 0x00, 0x00, 0x00,
      0x00, 0x00, 0xff, 0x00,
      0, 1, 0, 1,
      0, 2, 0, 2,
    ));

    const rects = (framebufferUpdate.events[0] as any).rects;
    expect(rects).toHaveLength(1);
    expect(rects[0]).toMatchObject({ kind: "rgba", x: 0, y: 0, width: 4, height: 4 });
    const rgba = Array.from(rects[0].rgba);
    const bgPixel = ((0 * 4) + 0) * 4;
    expect(rgba.slice(bgPixel, bgPixel + 4)).toEqual([0, 0, 255, 255]);
    const subrectPixel = ((1 * 4) + 1) * 4;
    expect(rgba.slice(subrectPixel, subrectPixel + 4)).toEqual([255, 0, 0, 255]);
  });

  test("parses CopyRect framebuffer updates", () => {
    const protocol = new VncRemoteDisplayProtocol();
    protocol.receive(encoder.encode("RFB 003.008\n"));
    protocol.receive(bytes(1, 1));
    protocol.receive(bytes(0, 0, 0, 0));
    protocol.receive(buildServerInit({ width: 10, height: 8, name: "Display" }));

    const framebufferUpdate = protocol.receive(bytes(
      0, 0, 0, 1,
      0, 3, 0, 4,
      0, 2, 0, 2,
      0, 0, 0, 1,
      0, 1, 0, 2,
    ));

    const rects = (framebufferUpdate.events[0] as any).rects;
    expect(rects).toHaveLength(1);
    expect(rects[0]).toEqual({ kind: "copy", x: 3, y: 4, width: 2, height: 2, srcX: 1, srcY: 2 });
  });

  test("parses ZRLE framebuffer updates", () => {
    const protocol = new VncRemoteDisplayProtocol();
    protocol.receive(encoder.encode("RFB 003.008\n"));
    protocol.receive(bytes(1, 1));
    protocol.receive(bytes(0, 0, 0, 0));
    protocol.receive(buildServerInit({ width: 2, height: 2, name: "Display" }));

    const zrleTile = bytes(
      0x01,
      0x00, 0x00, 0xff, 0x00,
    );
    const compressed = zlibSync(zrleTile);
    const length = compressed.length;

    const framebufferUpdate = protocol.receive(Uint8Array.from([
      0, 0, 0, 1,
      0, 0, 0, 0,
      0, 2, 0, 2,
      0, 0, 0, 16,
      (length >>> 24) & 0xff,
      (length >>> 16) & 0xff,
      (length >>> 8) & 0xff,
      length & 0xff,
      ...compressed,
    ]));

    const rects = (framebufferUpdate.events[0] as any).rects;
    expect(rects).toHaveLength(1);
    expect(rects[0]).toMatchObject({ kind: "rgba", x: 0, y: 0, width: 2, height: 2 });
    expect(Array.from(rects[0].rgba.slice(0, 4))).toEqual([255, 0, 0, 255]);
  });

  test("parses consecutive ZRLE rectangles on one continuous inflater", () => {
    const decodedQueue = [
      bytes(0x01, 0x00, 0x00, 0xff, 0x00),
      bytes(0x01, 0xff, 0x00, 0x00, 0x00),
    ];
    const protocol = new VncRemoteDisplayProtocol({
      inflateZrle: () => decodedQueue.shift() ?? new Uint8Array(0),
    });
    protocol.receive(encoder.encode("RFB 003.008\n"));
    protocol.receive(bytes(1, 1));
    protocol.receive(bytes(0, 0, 0, 0));
    protocol.receive(buildServerInit({ width: 2, height: 1, name: "Display" }));

    const update1 = protocol.receive(Uint8Array.from([
      0, 0, 0, 1,
      0, 0, 0, 0,
      0, 1, 0, 1,
      0, 0, 0, 16,
      0, 0, 0, 1,
      0x11,
    ]));
    const rects1 = (update1.events[0] as any).rects;
    expect(rects1).toHaveLength(1);
    expect(Array.from(rects1[0].rgba.slice(0, 4))).toEqual([255, 0, 0, 255]);

    const update2 = protocol.receive(Uint8Array.from([
      0, 0, 0, 1,
      0, 1, 0, 0,
      0, 1, 0, 1,
      0, 0, 0, 16,
      0, 0, 0, 1,
      0x22,
    ]));
    const rects2 = (update2.events[0] as any).rects;
    expect(rects2).toHaveLength(1);
    expect(Array.from(rects2[0].rgba.slice(0, 4))).toEqual([0, 0, 255, 255]);
  });

  test("parses Hextile framebuffer updates", () => {
    const protocol = new VncRemoteDisplayProtocol();
    protocol.receive(encoder.encode("RFB 003.008\n"));
    protocol.receive(bytes(1, 1));
    protocol.receive(bytes(0, 0, 0, 0));
    protocol.receive(buildServerInit({ width: 4, height: 4, name: "Display" }));

    const framebufferUpdate = protocol.receive(bytes(
      0, 0, 0, 1,
      0, 0, 0, 0,
      0, 4, 0, 4,
      0, 0, 0, 5,
      0x0e,
      0xff, 0x00, 0x00, 0x00,
      0x00, 0x00, 0xff, 0x00,
      0x01,
      0x11,
      0x11,
    ));

    const rects = (framebufferUpdate.events[0] as any).rects;
    expect(rects).toHaveLength(1);
    expect(rects[0]).toMatchObject({ kind: "rgba", x: 0, y: 0, width: 4, height: 4 });
    const rgba = Array.from(rects[0].rgba);
    expect(rgba.slice(0, 4)).toEqual([0, 0, 255, 255]);
    const centerPixel = ((1 * 4) + 1) * 4;
    expect(rgba.slice(centerPixel, centerPixel + 4)).toEqual([255, 0, 0, 255]);
  });
});

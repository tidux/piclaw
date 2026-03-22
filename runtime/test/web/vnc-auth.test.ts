import { expect, test } from "bun:test";

import { buildVncPasswordAuthResponse, buildVncPasswordKey } from "../../web/src/panes/vnc-auth.js";

test("buildVncPasswordKey reverses bits in the first 8 password bytes", () => {
  expect(Array.from(buildVncPasswordKey("cd8a99cd"))).toEqual([
    0xc6,
    0x26,
    0x1c,
    0x86,
    0x9c,
    0x9c,
    0xc6,
    0x26,
  ]);
});

test("buildVncPasswordAuthResponse matches a known-good VNC auth response", () => {
  const challenge = Uint8Array.from([
    0x00, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77,
    0x88, 0x99, 0xaa, 0xbb, 0xcc, 0xdd, 0xee, 0xff,
  ]);
  expect(Array.from(buildVncPasswordAuthResponse("cd8a99cd", challenge))).toEqual([
    0xe9, 0xbd, 0x7c, 0x77, 0x80, 0x18, 0x4f, 0x8f,
    0x84, 0x5a, 0x17, 0x35, 0x81, 0xf4, 0xdd, 0xeb,
  ]);
});

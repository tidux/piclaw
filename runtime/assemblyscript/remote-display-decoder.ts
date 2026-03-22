// AssemblyScript hot-path decoder for remote-display frame data.
// First target: VNC raw framebuffer pixels -> RGBA bytes.

@inline
function scaleChannel(value: i32, max: i32): u8 {
  if (max <= 0) return 0;
  if (max == 255) return <u8>value;
  let scaled = (value * 255 + (max >> 1)) / max;
  if (scaled < 0) scaled = 0;
  if (scaled > 255) scaled = 255;
  return <u8>scaled;
}

@inline
function readPixelValue(src: Uint8Array, offset: i32, bytesPerPixel: i32, bigEndian: bool): u32 {
  if (bytesPerPixel == 1) {
    return <u32>unchecked(src[offset]);
  }
  if (bytesPerPixel == 2) {
    return bigEndian
      ? (((<u32>unchecked(src[offset])) << 8) | <u32>unchecked(src[offset + 1]))
      : (<u32>unchecked(src[offset]) | ((<u32>unchecked(src[offset + 1])) << 8));
  }
  if (bytesPerPixel == 3) {
    return bigEndian
      ? (((<u32>unchecked(src[offset])) << 16) | ((<u32>unchecked(src[offset + 1])) << 8) | <u32>unchecked(src[offset + 2]))
      : (<u32>unchecked(src[offset]) | ((<u32>unchecked(src[offset + 1])) << 8) | ((<u32>unchecked(src[offset + 2])) << 16));
  }
  return bigEndian
    ? ((((<u32>unchecked(src[offset])) << 24) >>> 0) | ((<u32>unchecked(src[offset + 1])) << 16) | ((<u32>unchecked(src[offset + 2])) << 8) | <u32>unchecked(src[offset + 3])) >>> 0
    : (<u32>unchecked(src[offset]) | ((<u32>unchecked(src[offset + 1])) << 8) | ((<u32>unchecked(src[offset + 2])) << 16) | (((<u32>unchecked(src[offset + 3])) << 24) >>> 0)) >>> 0;
}

/**
 * Decode raw framebuffer bytes into RGBA bytes.
 *
 * Returns an ArrayBuffer with width * height * 4 bytes.
 */
export function decodeRawRectToRgba(
  srcBuffer: ArrayBuffer,
  width: i32,
  height: i32,
  bitsPerPixel: i32,
  bigEndian: bool,
  trueColor: bool,
  redMax: i32,
  greenMax: i32,
  blueMax: i32,
  redShift: i32,
  greenShift: i32,
  blueShift: i32,
): ArrayBuffer {
  if (!trueColor) {
    return new ArrayBuffer(0);
  }

  let bytesPerPixel = bitsPerPixel >> 3;
  if (bytesPerPixel <= 0) bytesPerPixel = 1;

  const pixels = width * height;
  const expected = pixels * bytesPerPixel;
  const src = Uint8Array.wrap(srcBuffer);
  if (src.length < expected) {
    return new ArrayBuffer(0);
  }

  const outBuffer = new ArrayBuffer(pixels * 4);
  const out = Uint8Array.wrap(outBuffer);

  let srcOffset = 0;
  let dstOffset = 0;
  for (let i = 0; i < pixels; i++) {
    const value = readPixelValue(src, srcOffset, bytesPerPixel, bigEndian);
    const red = scaleChannel(<i32>((value >>> redShift) & <u32>redMax), redMax);
    const green = scaleChannel(<i32>((value >>> greenShift) & <u32>greenMax), greenMax);
    const blue = scaleChannel(<i32>((value >>> blueShift) & <u32>blueMax), blueMax);

    out[unchecked(dstOffset)] = red;
    out[unchecked(dstOffset + 1)] = green;
    out[unchecked(dstOffset + 2)] = blue;
    out[unchecked(dstOffset + 3)] = 255;

    srcOffset += bytesPerPixel;
    dstOffset += 4;
  }

  return outBuffer;
}

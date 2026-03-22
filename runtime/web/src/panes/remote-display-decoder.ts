// @ts-nocheck

import * as loader from '@assemblyscript/loader';

const REMOTE_DISPLAY_DECODER_WASM_URL = '/static/js/vendor/remote-display-decoder.wasm';

let wasmDecoderPromise: Promise<((bytes: Uint8Array, width: number, height: number, pixelFormat: any) => Uint8ClampedArray) | null> | null = null;

function normalizeInput(bytes: Uint8Array | ArrayBuffer): ArrayBuffer {
    if (bytes instanceof ArrayBuffer) return bytes;
    if (bytes.byteOffset === 0 && bytes.byteLength === bytes.buffer.byteLength) {
        return bytes.buffer;
    }
    return bytes.slice().buffer;
}

export async function loadRemoteDisplayWasmDecoder() {
    if (wasmDecoderPromise) return wasmDecoderPromise;
    wasmDecoderPromise = (async () => {
        try {
            const response = await fetch(REMOTE_DISPLAY_DECODER_WASM_URL, { credentials: 'same-origin' });
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            const instantiated = typeof loader.instantiateStreaming === 'function'
                ? await loader.instantiateStreaming(response, {})
                : await loader.instantiate(await response.arrayBuffer(), {});
            const exports = instantiated.exports;
            if (typeof exports.decodeRawRectToRgba !== 'function') {
                throw new Error('decodeRawRectToRgba export is missing.');
            }
            return (bytes, width, height, pixelFormat) => {
                const input = normalizeInput(bytes);
                const inputPtr = exports.__pin(exports.__newArrayBuffer(input));
                try {
                    const outputPtr = exports.__pin(exports.decodeRawRectToRgba(
                        inputPtr,
                        width,
                        height,
                        pixelFormat.bitsPerPixel,
                        pixelFormat.bigEndian ? 1 : 0,
                        pixelFormat.trueColor ? 1 : 0,
                        pixelFormat.redMax,
                        pixelFormat.greenMax,
                        pixelFormat.blueMax,
                        pixelFormat.redShift,
                        pixelFormat.greenShift,
                        pixelFormat.blueShift,
                    ));
                    try {
                        const output = exports.__getArrayBuffer(outputPtr);
                        return new Uint8ClampedArray(output);
                    } finally {
                        exports.__unpin(outputPtr);
                    }
                } finally {
                    exports.__unpin(inputPtr);
                    try { exports.__collect?.(); } catch {}
                }
            };
        } catch (error) {
            console.warn('[remote-display] Failed to load AssemblyScript decoder, using JS fallback.', error);
            return null;
        }
    })();
    return wasmDecoderPromise;
}

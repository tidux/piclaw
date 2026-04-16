/**
 * image-processing – registers an image manipulation tool using sharp.
 *
 * Provides resize, crop, convert, optimize, trim, rotate, flip, blur,
 * sharpen, and composite operations on workspace images.
 *
 * Preserves transparency by default. Outputs go to the workspace.
 */
import { Type, type Static } from "@sinclair/typebox";
import type {
  AgentToolResult,
  ExtensionAPI,
  ExtensionFactory,
} from "@mariozechner/pi-coding-agent";
import { existsSync, statSync } from "node:fs";
import { resolve, basename, extname, dirname, join } from "node:path";
import { WORKSPACE_DIR } from "../core/config.js";
import { createLogger, debugSuppressedError } from "../utils/logger.js";

const log = createLogger("extensions.image-processing");

const SUPPORTED_OUTPUT_FORMATS = ["png", "jpeg", "webp", "avif", "tiff", "gif"] as const;
type OutputFormat = typeof SUPPORTED_OUTPUT_FORMATS[number];

const FORMAT_MIME: Record<OutputFormat, string> = {
  png: "image/png",
  jpeg: "image/jpeg",
  webp: "image/webp",
  avif: "image/avif",
  tiff: "image/tiff",
  gif: "image/gif",
};

const FORMAT_EXT: Record<OutputFormat, string> = {
  png: ".png",
  jpeg: ".jpg",
  webp: ".webp",
  avif: ".avif",
  tiff: ".tiff",
  gif: ".gif",
};

// Formats that support transparency
const TRANSPARENCY_FORMATS = new Set<OutputFormat>(["png", "webp", "avif", "tiff", "gif"]);

const ImageProcessSchema = Type.Object({
  action: Type.String({
    description: "Operation: resize | crop | convert | optimize | trim | rotate | flip | blur | sharpen | composite | frames | spritesheet_to_gif | info",
  }),
  input: Type.String({ description: "Input file path (relative to workspace or absolute)." }),
  output: Type.Optional(Type.String({ description: "Output file path. Default: auto-generated next to input." })),
  format: Type.Optional(Type.String({ description: "Output format: png, jpeg, webp, avif, tiff, gif. Default: inferred from output path or input format." })),
  quality: Type.Optional(Type.Integer({ description: "Output quality 1-100. Default: 80 for lossy formats, ignored for PNG.", minimum: 1, maximum: 100 })),
  width: Type.Optional(Type.Integer({ description: "Target width in pixels (for resize/crop).", minimum: 1, maximum: 16384 })),
  height: Type.Optional(Type.Integer({ description: "Target height in pixels (for resize/crop).", minimum: 1, maximum: 16384 })),
  fit: Type.Optional(Type.String({ description: "Resize fit: cover | contain | fill | inside | outside. Default: inside." })),
  left: Type.Optional(Type.Integer({ description: "Crop left offset in pixels.", minimum: 0 })),
  top: Type.Optional(Type.Integer({ description: "Crop top offset in pixels.", minimum: 0 })),
  angle: Type.Optional(Type.Integer({ description: "Rotation angle in degrees (for rotate). Multiples of 90 for lossless." })),
  sigma: Type.Optional(Type.Number({ description: "Blur sigma (for blur) or sharpen sigma (for sharpen). Default: 3 for blur, 1 for sharpen." })),
  overlay: Type.Optional(Type.String({ description: "Overlay image path (for composite)." })),
  gravity: Type.Optional(Type.String({ description: "Overlay gravity: center | north | south | east | west | northeast | northwest | southeast | southwest. Default: southeast." })),
  preserve_transparency: Type.Optional(Type.Boolean({ description: "Preserve transparency. Default: true. Set false to flatten to white background." })),
  overwrite: Type.Optional(Type.Boolean({ description: "Allow overwriting the input file. Default: false. When false, output auto-generates a suffixed filename next to the input." })),
  animated: Type.Optional(Type.Boolean({ description: "Preserve animation frames when processing animated GIFs/WebPs. Default: true for animated inputs." })),
  delay: Type.Optional(Type.Union([Type.Integer({ minimum: 10 }), Type.Array(Type.Integer({ minimum: 10 }))], { description: "Frame delay in ms for GIF output. Single value or per-frame array. Default: 100." })),
  loop: Type.Optional(Type.Integer({ description: "GIF loop count. 0 = infinite. Default: 0.", minimum: 0 })),
  frame_count: Type.Optional(Type.Integer({ description: "Number of frames to split from a spritesheet (for spritesheet_to_gif). Default: auto from width." , minimum: 1 })),
  direction: Type.Optional(Type.String({ description: "Spritesheet direction: horizontal (default) or vertical." })),
});

type ImageProcessParams = Static<typeof ImageProcessSchema>;

function resolveWorkspacePath(input: string): string {
  const trimmed = (input || "").trim();
  if (!trimmed) throw new Error("Empty file path.");
  return resolve(WORKSPACE_DIR, trimmed);
}

function inferFormat(filePath: string): OutputFormat {
  const ext = extname(filePath).toLowerCase().replace(".", "");
  if (ext === "jpg") return "jpeg";
  if (SUPPORTED_OUTPUT_FORMATS.includes(ext as OutputFormat)) return ext as OutputFormat;
  return "png";
}

function buildOutputPath(inputPath: string, format: OutputFormat, suffix = "-processed"): string {
  const dir = dirname(inputPath);
  const base = basename(inputPath, extname(inputPath));
  return join(dir, `${base}${suffix}${FORMAT_EXT[format]}`);
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

async function executeImageProcess(
  _toolCallId: string,
  params: ImageProcessParams,
): Promise<AgentToolResult> {
  const sharp = (await import("sharp")).default;

  const action = (params.action || "").toLowerCase().trim();
  const inputPath = resolveWorkspacePath(params.input);

  if (!existsSync(inputPath)) {
    return {
      content: [{ type: "text", text: `File not found: ${params.input}` }],
      details: { error: "not_found", input: params.input },
    };
  }

  // Info action: return metadata without processing
  if (action === "info") {
    const meta = await sharp(inputPath).metadata();
    const stat = statSync(inputPath);
    const info = {
      width: meta.width,
      height: meta.height,
      format: meta.format,
      channels: meta.channels,
      hasAlpha: meta.hasAlpha,
      space: meta.space,
      density: meta.density,
      size: stat.size,
      sizeFormatted: formatBytes(stat.size),
    };
    return {
      content: [{ type: "text", text: `Image info for ${params.input}:\n${JSON.stringify(info, null, 2)}` }],
      details: { action: "info", input: params.input, ...info },
    };
  }

  // Determine output format and path
  const requestedFormat = params.format?.toLowerCase().trim();
  const outputFormat: OutputFormat = requestedFormat && SUPPORTED_OUTPUT_FORMATS.includes(requestedFormat as OutputFormat)
    ? requestedFormat as OutputFormat
    : params.output
      ? inferFormat(params.output)
      : inferFormat(inputPath);

  const outputPath = params.output
    ? resolveWorkspacePath(params.output)
    : buildOutputPath(inputPath, outputFormat,
        action === "optimize" ? "-optimized"
          : action === "trim" ? "-trimmed"
            : `-${action}`);

  // Safety: refuse to overwrite the input file unless explicitly allowed
  const overwrite = params.overwrite === true;
  if (resolve(outputPath) === resolve(inputPath) && !overwrite) {
    return {
      content: [{ type: "text", text: `Output path is the same as input. Set overwrite=true to replace the original, or use a different output path.` }],
      details: { error: "overwrite_refused", input: params.input, output: params.output },
    };
  }
  // Also refuse to overwrite any existing file unless overwrite is set or the path was auto-generated
  if (params.output && existsSync(outputPath) && !overwrite) {
    return {
      content: [{ type: "text", text: `Output file already exists: ${params.output}. Set overwrite=true to replace it.` }],
      details: { error: "output_exists", output: params.output },
    };
  }

  const preserveTransparency = params.preserve_transparency !== false;
  const quality = params.quality ?? 80;

  // Detect and preserve animation by default
  const inputMeta = action !== "info" ? await sharp(inputPath).metadata() : null;
  const isAnimated = (inputMeta?.pages ?? 1) > 1;
  const shouldAnimate = params.animated !== false && isAnimated;

  // Start the pipeline
  let pipeline = sharp(inputPath, shouldAnimate ? { animated: true } : undefined);

  // If converting to a format that doesn't support transparency, flatten
  if (!preserveTransparency || !TRANSPARENCY_FORMATS.has(outputFormat)) {
    pipeline = pipeline.flatten({ background: { r: 255, g: 255, b: 255 } });
  }

  switch (action) {
    case "resize": {
      if (!params.width && !params.height) {
        return {
          content: [{ type: "text", text: "Resize requires at least width or height." }],
          details: { error: "missing_dimensions" },
        };
      }
      const fit = (params.fit || "inside") as "cover" | "contain" | "fill" | "inside" | "outside";
      pipeline = pipeline.resize(params.width || null, params.height || null, {
        fit,
        withoutEnlargement: fit === "inside",
      });
      break;
    }

    case "crop": {
      if (!params.width || !params.height) {
        return {
          content: [{ type: "text", text: "Crop requires both width and height." }],
          details: { error: "missing_dimensions" },
        };
      }
      pipeline = pipeline.extract({
        left: params.left ?? 0,
        top: params.top ?? 0,
        width: params.width,
        height: params.height,
      });
      break;
    }

    case "convert":
    case "optimize":
      // Format conversion / optimization — just apply the output format settings below
      break;

    case "trim": {
      pipeline = pipeline.trim();
      break;
    }

    case "rotate": {
      const angle = params.angle ?? 90;
      pipeline = pipeline.rotate(angle);
      break;
    }

    case "flip": {
      pipeline = pipeline.flip().flop();
      break;
    }

    case "blur": {
      const sigma = params.sigma ?? 3;
      pipeline = pipeline.blur(sigma);
      break;
    }

    case "sharpen": {
      const sigma = params.sigma ?? 1;
      pipeline = pipeline.sharpen(sigma);
      break;
    }

    case "composite": {
      if (!params.overlay) {
        return {
          content: [{ type: "text", text: "Composite requires an overlay image path." }],
          details: { error: "missing_overlay" },
        };
      }
      const overlayPath = resolveWorkspacePath(params.overlay);
      if (!existsSync(overlayPath)) {
        return {
          content: [{ type: "text", text: `Overlay file not found: ${params.overlay}` }],
          details: { error: "overlay_not_found", overlay: params.overlay },
        };
      }
      const gravity = (params.gravity || "southeast") as
        "center" | "north" | "south" | "east" | "west" | "northeast" | "northwest" | "southeast" | "southwest";
      pipeline = pipeline.composite([{ input: overlayPath, gravity }]);
      break;
    }

    case "frames": {
      // Extract individual frames from an animated GIF/WebP
      const meta = await sharp(inputPath, { animated: true }).metadata();
      const pageCount = meta.pages ?? 1;
      if (pageCount <= 1) {
        return {
          content: [{ type: "text", text: `${params.input} has only 1 frame — nothing to extract.` }],
          details: { action: "frames", input: params.input, pages: 1 },
        };
      }
      const pageHeight = meta.pageHeight ?? meta.height ?? 0;
      const frameDir = params.output ? resolveWorkspacePath(params.output) : buildOutputPath(inputPath, "png", "-frames");
      const { mkdirSync: mkdirSyncFs } = await import("node:fs");
      mkdirSyncFs(frameDir, { recursive: true });
      const extracted: string[] = [];
      for (let i = 0; i < pageCount; i++) {
        const framePath = join(frameDir, `frame-${String(i).padStart(4, "0")}.png`);
        await sharp(inputPath, { animated: true, page: i }).png().toFile(framePath);
        extracted.push(framePath);
      }
      const relDir = frameDir.startsWith(WORKSPACE_DIR) ? frameDir.slice(WORKSPACE_DIR.length + 1) : frameDir;
      return {
        content: [{ type: "text", text: `Extracted ${extracted.length} frames to ${relDir}/` }],
        details: { action: "frames", input: params.input, frameCount: extracted.length, outputDir: relDir },
      };
    }

    case "spritesheet_to_gif": {
      // Assemble a horizontal/vertical spritesheet into an animated GIF
      const meta = await sharp(inputPath).metadata();
      const imgWidth = meta.width ?? 0;
      const imgHeight = meta.height ?? 0;
      const direction = (params.direction || "horizontal").toLowerCase();

      let frameW: number, frameH: number, frameCount: number;
      if (direction === "vertical") {
        frameW = imgWidth;
        frameCount = params.frame_count ?? (params.height ? Math.floor(imgHeight / params.height) : 1);
        frameH = params.height ?? Math.floor(imgHeight / frameCount);
      } else {
        frameH = imgHeight;
        frameCount = params.frame_count ?? (params.width ? Math.floor(imgWidth / params.width) : 1);
        frameW = params.width ?? Math.floor(imgWidth / frameCount);
      }

      if (frameCount < 2) {
        return {
          content: [{ type: "text", text: `Could not split spritesheet into multiple frames. Provide frame_count or frame width/height.` }],
          details: { error: "insufficient_frames", width: imgWidth, height: imgHeight, direction },
        };
      }

      const delay = typeof params.delay === "number" ? params.delay
        : Array.isArray(params.delay) ? params.delay[0] ?? 100
        : 100;
      const perFrameDelay = Array.isArray(params.delay) ? params.delay : Array(frameCount).fill(delay);
      const loopCount = params.loop ?? 0;

      // Extract frames using sharp, then assemble with gifenc
      const { GIFEncoder, quantize, applyPalette } = await import("gifenc");
      const gif = GIFEncoder();

      for (let i = 0; i < frameCount; i++) {
        const left = direction === "horizontal" ? i * frameW : 0;
        const top = direction === "vertical" ? i * frameH : 0;
        const frameRaw = await sharp(inputPath)
          .extract({ left, top, width: frameW, height: frameH })
          .ensureAlpha()
          .raw()
          .toBuffer();
        const rgba = new Uint8Array(frameRaw);
        const palette = quantize(rgba, 256, { format: "rgba4444" });
        const indexed = applyPalette(rgba, palette, "rgba4444");
        gif.writeFrame(indexed, frameW, frameH, {
          palette,
          delay: perFrameDelay[i] ?? delay,
          repeat: i === 0 ? loopCount : undefined,
        });
      }
      gif.finish();

      const gifOutputPath = params.output
        ? resolveWorkspacePath(params.output)
        : buildOutputPath(inputPath, "gif", "-animated");

      // Overwrite check
      const canOverwrite = params.overwrite === true;
      if (params.output && existsSync(gifOutputPath) && !canOverwrite) {
        return {
          content: [{ type: "text", text: `Output file already exists: ${params.output}. Set overwrite=true to replace it.` }],
          details: { error: "output_exists", output: params.output },
        };
      }

      const { writeFileSync: writeFs } = await import("node:fs");
      writeFs(gifOutputPath, Buffer.from(gif.bytes()));

      const gifStat = statSync(gifOutputPath);
      const relOutput = gifOutputPath.startsWith(WORKSPACE_DIR) ? gifOutputPath.slice(WORKSPACE_DIR.length + 1) : gifOutputPath;
      return {
        content: [{ type: "text", text: `Animated GIF created: ${relOutput} (${frameW}x${frameH}, ${frameCount} frames, ${formatBytes(gifStat.size)})` }],
        details: {
          action: "spritesheet_to_gif",
          input: params.input,
          output: relOutput,
          format: "gif",
          width: frameW,
          height: frameH,
          frameCount,
          delay: perFrameDelay.slice(0, frameCount),
          loop: loopCount,
          size: gifStat.size,
          mimeType: "image/gif",
        },
      };
    }

    default:
      return {
        content: [{ type: "text", text: `Unknown action: ${action}. Use: resize, crop, convert, optimize, trim, rotate, flip, blur, sharpen, composite, frames, spritesheet_to_gif, info` }],
        details: { error: "unknown_action", action },
      };
  }

  // Apply output format
  switch (outputFormat) {
    case "jpeg":
      pipeline = pipeline.jpeg({ quality, mozjpeg: true });
      break;
    case "webp":
      pipeline = pipeline.webp({ quality });
      break;
    case "avif":
      pipeline = pipeline.avif({ quality });
      break;
    case "png":
      pipeline = pipeline.png({ compressionLevel: Math.round((100 - quality) / 10) });
      break;
    case "tiff":
      pipeline = pipeline.tiff({ quality });
      break;
    case "gif":
      pipeline = pipeline.gif();
      break;
  }

  await pipeline.toFile(outputPath);

  const outputStat = statSync(outputPath);
  const inputStat = statSync(inputPath);
  const outputMeta = await sharp(outputPath).metadata();
  const savings = inputStat.size - outputStat.size;
  const relativeOutput = outputPath.startsWith(WORKSPACE_DIR)
    ? outputPath.slice(WORKSPACE_DIR.length + 1)
    : outputPath;

  return {
    content: [{ type: "text", text: `${action} complete: ${relativeOutput} (${outputMeta.width}x${outputMeta.height}, ${formatBytes(outputStat.size)}${savings > 0 ? `, saved ${formatBytes(savings)}` : ""})` }],
    details: {
      action,
      input: params.input,
      output: relativeOutput,
      format: outputFormat,
      width: outputMeta.width,
      height: outputMeta.height,
      size: outputStat.size,
      originalSize: inputStat.size,
      savings: savings > 0 ? savings : 0,
      mimeType: FORMAT_MIME[outputFormat],
    },
  };
}

const HINT = [
  "## Image Processing",
  "Use image_process to manipulate workspace images: resize, crop, convert, optimize, trim, rotate, flip, blur, sharpen, composite, frames, spritesheet_to_gif, or get info.",
  "Non-destructive by default: output goes to a new file next to the input. Set overwrite=true to replace the original.",
  "Supports PNG, JPEG, WebP, AVIF, TIFF, GIF. Preserves transparency and animation frames by default.",
  "spritesheet_to_gif converts a horizontal/vertical sprite strip into an animated GIF with configurable delay and loop.",
  "Output quality is configurable (1-100). Use action='info' to inspect image metadata before processing.",
].join("\n");

/** Extension factory that registers image_process. */
export const imageProcessing: ExtensionFactory = (pi: ExtensionAPI) => {
  pi.on("before_agent_start", async (event) => ({
    systemPrompt: `${event.systemPrompt}\n\n${HINT}`,
  }));

  pi.registerTool({
    name: "image_process",
    label: "image_process",
    description:
      "Process workspace images with sharp: resize, crop, convert formats, optimize file size, trim transparent pixels, " +
      "rotate, flip, blur, sharpen, composite/overlay, extract frames from animated GIFs, or assemble a spritesheet into an animated GIF. " +
      "Non-destructive by default (output goes to a new file). " +
      "Supports PNG, JPEG, WebP, AVIF, TIFF, GIF. Preserves transparency and animation frames by default. Output quality is configurable.",
    promptSnippet: "image_process: manipulate workspace images (resize, crop, convert, optimize, trim, rotate, blur, sharpen, composite, frames, spritesheet_to_gif, info).",
    parameters: ImageProcessSchema,
    execute: executeImageProcess,
  });
};

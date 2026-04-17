import { describe, expect, test } from "bun:test";

import { HTML_ATTACHMENT_PREVIEW_SANDBOX } from "../../web/src/components/attachment-preview-modal.ts";
import { getAttachmentPreviewKind, getAttachmentPreviewLabel } from "../../web/src/ui/attachment-preview.js";

describe("attachment preview kind", () => {
  test("classifies ZIP files as archive previews", () => {
    expect(getAttachmentPreviewKind("application/zip", "bundle.zip")).toBe("archive");
    expect(getAttachmentPreviewKind("application/x-zip-compressed", "bundle.zip")).toBe("archive");
    expect(getAttachmentPreviewKind("application/octet-stream", "bundle.zip")).toBe("archive");
  });

  test("returns the ZIP archive preview label", () => {
    expect(getAttachmentPreviewLabel("archive")).toBe("ZIP archive preview");
  });

  test("HTML attachment previews do not run with same-origin iframe privileges", () => {
    expect(HTML_ATTACHMENT_PREVIEW_SANDBOX).toBe("allow-scripts");
    expect(HTML_ATTACHMENT_PREVIEW_SANDBOX.includes("allow-same-origin")).toBe(false);
  });
});

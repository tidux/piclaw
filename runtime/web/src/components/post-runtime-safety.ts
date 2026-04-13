export async function writeClipboardTextBestEffort(
  clipboard: { writeText?: (value: string) => Promise<unknown> } | null | undefined,
  value: string,
): Promise<boolean> {
  try {
    await clipboard?.writeText?.(value);
    return true;
  } catch (_error) {
    return false;
  }
}

export function writeClipboardDataViaExecCommand(
  documentLike: {
    body?: { appendChild?: (node: unknown) => void; removeChild?: (node: unknown) => void };
    createElement?: (tag: string) => any;
    addEventListener?: (type: string, handler: (event: any) => void, capture?: boolean) => void;
    removeEventListener?: (type: string, handler: (event: any) => void, capture?: boolean) => void;
    execCommand?: (command: string) => boolean;
  } | null | undefined,
  payload: { text: string; html?: string | null },
): boolean {
  const text = typeof payload?.text === "string" ? payload.text : "";
  const html = typeof payload?.html === "string" ? payload.html : "";
  if (!documentLike || !text || typeof documentLike.createElement !== "function" || typeof documentLike.execCommand !== "function") {
    return false;
  }

  let host: any = null;
  let copyHandled = false;
  const onCopy = (event: any) => {
    const clipboardData = event?.clipboardData;
    if (!clipboardData || typeof clipboardData.setData !== "function") return;
    clipboardData.setData("text/plain", text);
    if (html) clipboardData.setData("text/html", html);
    if (typeof event.preventDefault === "function") event.preventDefault();
    copyHandled = true;
  };

  try {
    host = documentLike.createElement("textarea");
    host.value = text;
    if (typeof host.setAttribute === "function") host.setAttribute("readonly", "");
    if (host.style) {
      host.style.position = "fixed";
      host.style.opacity = "0";
      host.style.pointerEvents = "none";
    }
    documentLike.body?.appendChild?.(host);
    if (typeof host.select === "function") host.select();
    if (typeof host.setSelectionRange === "function") host.setSelectionRange(0, host.value.length);
    documentLike.addEventListener?.("copy", onCopy, true);
    const commandResult = documentLike.execCommand("copy");
    return Boolean(copyHandled || commandResult);
  } catch {
    return false;
  } finally {
    documentLike.removeEventListener?.("copy", onCopy, true);
    if (host) {
      documentLike.body?.removeChild?.(host);
    }
  }
}

export function readSessionStorageFlagBestEffort(
  storage: { getItem?: (key: string) => string | null } | null | undefined,
  key: string,
): boolean {
  try {
    return Boolean(storage?.getItem?.(key));
  } catch (_error) {
    return false;
  }
}

export function writeSessionStorageFlagBestEffort(
  storage: { setItem?: (key: string, value: string) => void } | null | undefined,
  key: string,
  value: string,
): boolean {
  try {
    storage?.setItem?.(key, value);
    return true;
  } catch (_error) {
    return false;
  }
}

export function resolveLinkPreviewSiteName(siteName: unknown, safeUrl: string | null | undefined): string | null {
  const normalizedSiteName = typeof siteName === 'string' && siteName.trim() ? siteName.trim() : null;
  if (normalizedSiteName) return normalizedSiteName;
  if (!safeUrl) return null;
  try {
    return new URL(safeUrl).hostname;
  } catch (_error) {
    return safeUrl;
  }
}

/**
 * web/http/dispatch-media.ts – Media route dispatch helpers.
 */

import type { WebChannel } from "../web.js";

/**
 * Handle /media routes when the request matches; otherwise return null.
 */
export async function handleMediaRoutes(
  channel: WebChannel,
  req: Request,
  pathname: string
): Promise<Response | null> {
  if (req.method === "POST" && pathname === "/media/upload") {
    return await channel.handleMediaUpload(req);
  }

  if (req.method === "GET" && pathname.startsWith("/media/") && pathname.endsWith("/thumbnail")) {
    const id = channel.parseOptionalInt(pathname.replace("/media/", "").replace("/thumbnail", ""));
    if (!id) return channel.json({ error: "Media not found" }, 404);
    return channel.handleMedia(id, true);
  }

  if (req.method === "GET" && pathname.startsWith("/media/") && pathname.endsWith("/info")) {
    const id = channel.parseOptionalInt(pathname.replace("/media/", "").replace("/info", ""));
    if (!id) return channel.json({ error: "Media not found" }, 404);
    return channel.handleMediaInfo(id);
  }

  if (req.method === "GET" && pathname.startsWith("/media/")) {
    const id = channel.parseOptionalInt(pathname.replace("/media/", ""));
    if (!id) return channel.json({ error: "Media not found" }, 404);
    return channel.handleMedia(id, false);
  }

  return null;
}

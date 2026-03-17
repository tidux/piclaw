/**
 * pdf-viewer-route.ts — Lightweight authenticated PDF viewer route.
 *
 * Serves a same-origin HTML wrapper around the browser's built-in PDF renderer.
 * Supports either:
 *   - ?path=/workspace/file.pdf (workspace file)
 *   - ?media=123 (timeline/media attachment)
 */

import { registerExtensionRoute } from "./extension-routes.js";

const ROUTE_PREFIX = "/pdf-viewer";
const VIEWER_CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "connect-src 'self'",
  "frame-src 'self' blob:",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');

function generatePdfViewerPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>PDF Viewer</title>
<style>
  * { box-sizing: border-box; }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
    background: #1e1e1e;
    color: #e0e0e0;
    font-family: system-ui, -apple-system, sans-serif;
  }
  object {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
    background: #1e1e1e;
  }
  .empty {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: #888;
    font: 14px system-ui, -apple-system, sans-serif;
    padding: 24px;
    text-align: center;
  }
  .fallback {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }
  .fallback-card {
    max-width: 420px;
    text-align: center;
  }
  .fallback-card a {
    color: #7dc3ff;
  }
</style>
</head>
<body>
<script>
(function () {
  'use strict';
  var params = new URLSearchParams(location.search);
  var path = params.get('path') || '';
  var media = params.get('media') || '';
  var explicitName = params.get('name') || '';

  var sourceUrl = '';
  if (path) {
    sourceUrl = '/workspace/raw?path=' + encodeURIComponent(path);
  } else if (/^\d+$/.test(media) && Number(media) > 0) {
    sourceUrl = '/media/' + encodeURIComponent(media);
  }

  if (!sourceUrl) {
    document.body.innerHTML = '<div class="empty">Missing <code>?path=...</code> or <code>?media=...</code> query parameter.</div>';
    return;
  }

  var inferredName = path ? (path.split('/').pop() || 'document.pdf') : ('attachment-' + media + '.pdf');
  var name = explicitName || inferredName;
  var objectUrl = '';

  fetch(sourceUrl)
    .then(function(response) {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return response.blob();
    })
    .then(function(blob) {
      objectUrl = URL.createObjectURL(blob);
      var objectEl = document.createElement('object');
      objectEl.data = objectUrl;
      objectEl.type = 'application/pdf';
      objectEl.setAttribute('aria-label', name);
      objectEl.innerHTML = '<div class="fallback"><div class="fallback-card"><p>PDF preview is unavailable in this browser context.</p><p><a href="' + sourceUrl + '" target="_blank" rel="noopener noreferrer">Open PDF in a new tab</a></p></div></div>';
      document.body.appendChild(objectEl);
    })
    .catch(function() {
      document.body.innerHTML = '<div class="fallback"><div class="fallback-card"><p>Failed to load PDF preview.</p><p><a href="' + sourceUrl + '" target="_blank" rel="noopener noreferrer">Open PDF in a new tab</a></p></div></div>';
    });

  window.addEventListener('beforeunload', function() {
    if (objectUrl) URL.revokeObjectURL(objectUrl);
  });
})();
</script>
</body>
</html>`;
}

function handlePdfViewerRoute(req: Request, pathname: string): Response | null {
  if (req.method !== "GET" && req.method !== "HEAD") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const relative = pathname.replace(/^\/pdf-viewer\/?/, "");
  if (relative && !relative.startsWith("?")) {
    return new Response("Not Found", { status: 404 });
  }

  const headers = {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-cache",
    "X-Frame-Options": "SAMEORIGIN",
    "Content-Security-Policy": VIEWER_CSP,
  };

  if (req.method === "HEAD") {
    return new Response(null, { status: 200, headers });
  }

  return new Response(generatePdfViewerPage(), { status: 200, headers });
}

registerExtensionRoute(ROUTE_PREFIX, handlePdfViewerRoute, import.meta.dir);

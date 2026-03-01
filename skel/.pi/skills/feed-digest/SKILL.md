---
name: feed-digest
description: Build a deduped markdown digest from an RSS/Atom feed index (last N hours) and store links separately.
---

# Feed Digest

Build a deduped markdown digest from RSS/Atom feeds, filtered by a time window.
The script stores:
- Markdown digest (default: `/workspace/notes/feeds-digest.md`)
- Link index as JSON (default: `/workspace/notes/feeds-digest-links.json`)

## Prerequisites

No extra dependencies — uses Bun's built-in `fetch` and `HTMLRewriter`.

## Usage

```bash
/workspace/.pi/skills/feed-digest/run [--hours N] [--simhash N] [--out path] [--links-out path] [--feed-url URL]
```

Defaults:
- `--hours 12`
- `--simhash 8` (Hamming distance threshold for deduplication)
- `--out /workspace/notes/feeds-digest.md`
- `--links-out /workspace/notes/feeds-digest-links.json`
- `--feed-url` from `FEED_INDEX_URL` env var, or `http://localhost:8080/feeds/index.html`

## Environment

- `FEED_INDEX_URL` — URL to an HTML page listing `.xml` feed links (e.g. `https://example.com/feeds/index.html`).
- `FEED_BASE_URL` — Base URL for resolving relative feed paths (defaults to the parent of `FEED_INDEX_URL`).

## Notes

- The feed index page should contain `<a>` tags linking to `.xml` feed files.
- Deduping uses simhash with a configurable Hamming distance threshold.
- The markdown digest omits URLs; fetch links from the JSON index when needed.

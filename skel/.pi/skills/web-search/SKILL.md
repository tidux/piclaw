---
name: web-search
description: Search the web via SearXNG and optionally convert result pages to Markdown.
---

# Web Search

Search the web using a SearXNG instance and optionally fetch pages and convert HTML to Markdown.

## Prerequisites

The script depends on `turndown` and `linkedom`. Install them once:

```bash
cd /workspace && bun add turndown linkedom
```

## Usage

```bash
bun /workspace/.pi/skills/web-search/web-search.ts --query "your query"
```

Fetch top results and convert to Markdown:

```bash
bun /workspace/.pi/skills/web-search/web-search.ts --query "your query" --fetch true --fetch-limit 2
```

## Options

- `--query` (or `--q`) Required search query.
- `--limit` Number of results to return (default 5).
- `--fetch` When true, fetches top results and converts HTML to Markdown.
- `--fetch-limit` How many results to fetch/convert (default 2).
- `--searx-url` Override the SearXNG endpoint (default from `SEARXNG_URL` env var, or `http://localhost:8888/search`).
- `--timeout` Fetch timeout in milliseconds (default 15000).

## Environment

- `SEARXNG_URL` — Base URL for the SearXNG instance (e.g. `http://localhost:8888/search`).

## Notes

- HTML conversion uses turndown + linkedom.
- The converter prefers `<article>`/`<main>` content when available.

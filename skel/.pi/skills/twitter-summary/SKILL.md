---
name: twitter-summary
description: Fetch a user's recent tweets (tweets, replies, retweets) using Playwright + Nitter fallbacks and produce compact JSON summaries.
---

# Twitter Summary

Scrape a public Twitter/X profile via Nitter front-ends and return a compact JSON listing of tweets, replies, and retweets within a time window.

Two scrapers are included:
- `playwright-twitter-summary.ts` — uses Playwright for full browser rendering (more reliable)
- `quick-twitter-summary.ts` — uses linkedom for lightweight HTML parsing (no browser needed)

## Prerequisites

For the Playwright scraper:

```bash
cd /workspace && bun add playwright
bunx playwright install --with-deps
```

For the quick scraper:

```bash
cd /workspace && bun add linkedom
```

## Usage

Using the wrapper script:

```bash
/workspace/.pi/skills/twitter-summary/run <handle> [hours] [output.json]
```

Examples:

```bash
# Fetch last 16 hours for a user
/workspace/.pi/skills/twitter-summary/run example_user 16 /tmp/tweets.json

# Direct Playwright invocation
bun /workspace/.pi/skills/twitter-summary/playwright-twitter-summary.ts --handle=example_user --hours=24

# Quick (no browser) invocation
bun /workspace/.pi/skills/twitter-summary/quick-twitter-summary.ts --handle=example_user --hours=12
```

## Options

Both scripts accept:

- `--handle` (or `--h`) Twitter handle to scrape (without @).
- `--hours` (or `--hrs`) Time window in hours (default 16).
- `--instances` Comma-separated list of Nitter instance URLs.

The quick scraper also accepts:

- `--max` / `--limit` Maximum tweets to return (default 200).

## Output

JSON with `handle`, `instance`, `count`, and `items` array. Each item has:
- `date` — ISO 8601 timestamp
- `type` — `tweet`, `reply`, or `retweet`
- `text` — Tweet content (truncated to 280 chars in quick mode)
- `url` — Link to the tweet on the Nitter instance

## Notes

- The scrapers try several public Nitter instances and use the first that responds.
- Network restrictions or anti-bot protections may affect results.
- Logs are written to stderr; JSON output goes to stdout.

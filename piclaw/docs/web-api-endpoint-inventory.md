# Web API endpoint inventory

_Last updated: 2026-03-16_

This document inventories the current PiClaw web-channel HTTP surface, including
route families, auth/CSRF/rate-limit posture, and the main naming/response-shape
observations from the API audit.

## Guard model

For the main web-channel router (`src/channels/web/request-router-service.ts`),
requests generally pass through this pipeline:

1. origin tracking
2. auth/login rate limiting
3. authentication gate
4. CSRF Origin checks for mutating requests
5. data rate limiting for covered mutating routes
6. route dispatch
7. security headers on the response

### Important exception: remote interop

`/api/remote/*` is routed **before** the main web request-guard pipeline and is
handled by `src/remote/service.ts`.

That is intentional rather than accidental:

- it is feature-flagged (`PICLAW_REMOTE_INTEROP_ENABLED`)
- it uses its **own** nonce/replay protection
- it uses its **own** sliding-window limiters
- it does **not** use the normal web-session auth/cookie model

So it should be treated as a separate API surface, not just another `/agent/*`
or `/workspace/*` route family.

## Public and shell-adjacent routes

| Method | Path | Source | Auth | Notes |
|---|---|---|---|---|
| GET/HEAD | `/`, `/index.html` | `dispatch-shell.ts` | yes when auth enabled | Authenticated app shell; unauthenticated users are redirected/login-gated. |
| GET/HEAD | `/login`, `/login.html` | request guards | public when auth enabled | Login page only; returns 404 when auth is disabled. |
| GET/HEAD | `/manifest.json` | `dispatch-shell.ts` | public | PWA manifest. |
| GET/HEAD | `/favicon.ico` | `dispatch-shell.ts` | public | Agent avatar fallback or static favicon. |
| GET/HEAD | `/apple-touch-icon*.png` | `dispatch-shell.ts` | public | Agent avatar fallback or static icon. |
| GET/HEAD | `/static/...` | `dispatch-shell.ts` | mixed | Login bundle/fonts/images may be public; app bundles remain auth-gated. |
| GET/HEAD | `/docs/...` | `dispatch-shell.ts` | authenticated | Authenticated docs/static docs assets. |
| GET/HEAD | `/avatar/agent` | `dispatch-shell.ts` | public | Agent avatar endpoint. |
| GET/HEAD | `/avatar/user` | `dispatch-shell.ts` | authenticated | Current user avatar endpoint. |
| GET | `/agents` | `dispatch-shell.ts` | authenticated | Agent/branch listing endpoint. Naming is slightly inconsistent with `/agent/*`. |
| GET | `/sse/stream` | `dispatch-shell.ts` | authenticated | SSE stream endpoint; accepts optional `chat_jid` subscription scope. |
| GET | `/terminal/session` | `dispatch-shell.ts` | authenticated | Web terminal session metadata/bootstrap endpoint. |
| WS upgrade | `/terminal/ws` | `web.ts` `handleFetch()` | authenticated + same-origin | WebSocket terminal transport; checked outside the normal request router. |

## Auth routes

| Method | Path | Source | Auth model | Rate limit |
|---|---|---|---|---|
| POST | `/auth/verify` | request guards / auth endpoints | public login verification | auth bucket |
| POST | `/auth/webauthn/login/start` | `dispatch-auth.ts` | public login bootstrap | auth bucket |
| POST | `/auth/webauthn/login/finish` | `dispatch-auth.ts` | public login completion | auth bucket |
| POST | `/auth/webauthn/register/start` | `dispatch-auth.ts` | authenticated TOTP session required for enrol flows | enrol bucket |
| POST | `/auth/webauthn/register/finish` | `dispatch-auth.ts` | authenticated TOTP session required for enrol flows | enrol bucket |
| GET/HEAD | `/auth/webauthn/enrol` | `dispatch-auth.ts` | authenticated TOTP session required | enrol bucket |

## Content/timeline routes

| Method | Path | Source | Auth | CSRF | Data rate limit | Response style |
|---|---|---|---|---|---|---|
| GET | `/timeline` | `dispatch-content.ts` | authenticated | n/a | none | JSON timeline page |
| GET | `/hashtag/:tag` | `dispatch-content.ts` | authenticated | n/a | none | JSON list |
| GET | `/search` | `dispatch-content.ts` | authenticated | n/a | none | JSON search result payload |
| GET | `/thread/:id` | `dispatch-content.ts` | authenticated | n/a | none | JSON thread payload |
| POST | `/post` | `dispatch-content.ts` | authenticated | yes | `data/post` | created interaction |
| POST | `/reply` | `dispatch-content.ts` | authenticated | yes | `data/reply` | created interaction |
| PATCH | `/post/:id` | `dispatch-content.ts` | authenticated | yes | `data/post_update` | updated interaction / status JSON |
| DELETE | `/post/:id` | `dispatch-content.ts` | authenticated | yes | `data/delete_post` | status JSON |
| POST | `/internal/post` | `dispatch-content.ts` | internal secret, not cookie auth | internal-only | no normal data bucket | internal bridge route |

## Agent routes

| Method | Path | Source | Auth | CSRF | Data rate limit | Response style |
|---|---|---|---|---|---|---|
| GET | `/agent/thought` | `dispatch-agent.ts` | authenticated | n/a | none | JSON thought/draft payload |
| POST | `/agent/thought/visibility` | `dispatch-agent.ts` | authenticated | yes | `data/agent_ui` | `{ status: "ok", ... }` |
| POST | `/agent/:id/message` | `dispatch-agent.ts` | authenticated | yes | `data/agent_message` | status / queued / created payload |
| GET | `/agent/status` | `dispatch-agent.ts` | authenticated | n/a | none | JSON status payload |
| GET | `/agent/context` | `dispatch-agent.ts` | authenticated | n/a | none | JSON context usage |
| GET | `/agent/queue-state` | `dispatch-agent.ts` | authenticated | n/a | none | JSON queue state |
| POST | `/agent/queue-remove` | `dispatch-agent.ts` | authenticated | yes | `data/agent_queue` | status JSON |
| POST | `/agent/queue-steer` | `dispatch-agent.ts` | authenticated | yes | `data/agent_queue` | status JSON |
| GET | `/agent/models` | `dispatch-agent.ts` | authenticated | n/a | none | JSON model list/state |
| GET | `/agent/active-chats` | `dispatch-agent.ts` | authenticated | n/a | none | JSON list |
| GET | `/agent/branches` | `dispatch-agent.ts` | authenticated | n/a | none | JSON list |
| POST | `/agent/branch-fork` | `dispatch-agent.ts` | authenticated | yes | `data/agent_branch` | branch metadata JSON |
| POST | `/agent/branch-rename` | `dispatch-agent.ts` | authenticated | yes | `data/agent_branch` | branch metadata/status JSON |
| POST | `/agent/branch-prune` | `dispatch-agent.ts` | authenticated | yes | `data/agent_branch` | status JSON |
| POST | `/agent/peer-message` | `dispatch-agent.ts` | authenticated | yes | `data/agent_peer` | status/queued JSON |
| POST | `/agent/respond` | `dispatch-agent.ts` | authenticated | yes | `data/agent_ui` | `{ status: "ok" }` |
| POST | `/agent/card-action` | `dispatch-agent.ts` | authenticated | yes | `data/agent_ui` | card action result JSON |
| POST | `/agent/side-prompt` | `dispatch-agent.ts` | authenticated | yes | `data/agent_side_prompt` | JSON side-prompt result |
| POST | `/agent/side-prompt/stream` | `dispatch-agent.ts` | authenticated | yes | `data/agent_side_prompt` | SSE-like streamed response |
| POST | `/agent/whitelist` | `dispatch-agent.ts` | authenticated | yes | none | deprecated stub returning 404 |

## Workspace routes

| Method | Path | Source | Auth | CSRF | Data rate limit | Response style |
|---|---|---|---|---|---|---|
| GET | `/workspace/tree` | `dispatch-workspace.ts` | authenticated | n/a | none | JSON tree |
| GET | `/workspace/file` | `dispatch-workspace.ts` | authenticated | n/a | none | text/binary content |
| GET | `/workspace/branch` | `dispatch-workspace.ts` | authenticated | n/a | none | JSON branch metadata |
| PUT | `/workspace/file` | `dispatch-workspace.ts` | authenticated | yes | `data/write` | status JSON |
| DELETE | `/workspace/file` | `dispatch-workspace.ts` | authenticated | yes | `data/write` | status JSON |
| GET | `/workspace/raw` | `dispatch-workspace.ts` | authenticated | n/a | none | raw file response |
| GET | `/workspace/download` | `dispatch-workspace.ts` | authenticated | n/a | none | attachment download |
| POST | `/workspace/attach` | `dispatch-workspace.ts` | authenticated | yes | `data/workspace_attach` | attachment/media JSON |
| POST | `/workspace/upload` | `dispatch-workspace.ts` | authenticated | yes | `data/workspace_upload` | status/attachment JSON |
| POST | `/workspace/file` | `dispatch-workspace.ts` | authenticated | yes | `data/write` | status JSON |
| POST | `/workspace/rename` | `dispatch-workspace.ts` | authenticated | yes | `data/write` | status JSON |
| POST | `/workspace/move` | `dispatch-workspace.ts` | authenticated | yes | `data/write` | status JSON |
| POST | `/workspace/visibility` | `dispatch-workspace.ts` | authenticated | yes | `data/workspace_ui` | `{ status: "ok", visible, show_hidden }` |

## Media routes

| Method | Path | Source | Auth | CSRF | Data rate limit | Response style |
|---|---|---|---|---|---|---|
| POST | `/media/upload` | `dispatch-media.ts` | authenticated | yes | `data/media_upload` | uploaded media JSON |
| GET | `/media/:id/thumbnail` | `dispatch-media.ts` | authenticated | n/a | none | image/binary |
| GET | `/media/:id/info` | `dispatch-media.ts` | authenticated | n/a | none | JSON metadata |
| GET | `/media/:id` | `dispatch-media.ts` | authenticated | n/a | none | binary/media response |

## Remote interop routes

These are **not** handled by the main web request router after guards; they are
handled directly by `src/remote/service.ts`.

| Method | Path | Auth model | Protection model | Response style |
|---|---|---|---|---|
| POST | `/api/remote/pair-request` | remote interop protocol | feature flag + dedicated sliding-window limiter + nonce flow | JSON |
| POST | `/api/remote/pair-confirm` | remote interop protocol | dedicated limiter + nonce flow | JSON |
| POST | `/api/remote/revoke` | remote interop protocol | dedicated limiter + nonce validation | JSON |
| GET | `/api/remote/ping` | remote interop protocol | dedicated limiter + signed request validation | JSON |
| POST | `/api/remote/proposal` | remote interop protocol | dedicated limiter + signed request validation | JSON |
| POST | `/api/remote/execute` | remote interop protocol | dedicated limiter + execute concurrency + signed request validation | JSON/operation result |

## Response format observations

### Dominant pattern
The API is already more consistent than expected:

- errors are usually JSON shaped as `{ error: string }`
- simple mutations usually return a small JSON status payload
- read endpoints usually return raw resource payloads rather than a heavy envelope
- binary/static/media endpoints return direct file/binary responses
- SSE and terminal WebSocket endpoints intentionally use streaming protocols

### Current rough response families

1. **resource reads**
   - plain JSON object/list payloads
   - examples: `/timeline`, `/agent/status`, `/workspace/tree`
2. **simple mutations**
   - `{ status: "ok" }` or `{ status: "ok", ...extraFields }`
   - examples: `/agent/respond`, `/workspace/visibility`
3. **resource-creating mutations**
   - created entity / richer payload rather than a bare status
   - examples: `/post`, `/reply`, `/media/upload`, `/agent/branch-fork`
4. **binary/streaming**
   - raw file/media/SSE/WebSocket

### Inconsistencies worth noting

These are not urgent breakages, but they are visible:

- `/reply` is a verb-style sibling beside noun-style `/post`
- `/agents` sits outside the otherwise dominant `/agent/*` family
- `/workspace/file` multiplexes create/read/update/delete by method, while posts use separate resource/action paths
- some mutations return `{ status: "ok" }`, while others return full resource payloads; both are reasonable, but the style is not formally documented elsewhere

## Security posture observations

### Good news

The dominant main-router posture is solid:

- auth-gated app/API surface by default
- CSRF Origin checks on mutating browser requests
- explicit data rate limiting for the mutating route families audited so far
- SSE chat scoping enforced at the broadcast layer
- terminal websocket upgrade separately auth/origin-checked

### Important caveat

`/api/remote/*` should always be reviewed as a **separate security domain**.
It is not missing guards by accident; it deliberately uses protocol-specific
validation instead of cookie-auth + CSRF.

## Follow-up candidates

1. Decide whether `/agents` should stay as-is or move under `/agent/*` in a future compatibility-preserving cleanup.
2. Decide whether response envelopes should be standardised further, or simply documented as the current lightweight resource-first style.
3. Audit the `extension_ui_*` SSE family end-to-end against current web-client listeners; the server emits them, but the main web SSE client does not currently register listeners for those names.
4. Keep route inventory coverage in tests so newly added mutating endpoints do not skip rate-limit classification.

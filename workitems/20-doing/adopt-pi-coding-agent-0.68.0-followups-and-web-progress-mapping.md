---
id: adopt-pi-coding-agent-0.68.0-followups-and-web-progress-mapping
title: Adopt pi-coding-agent 0.68.0 follow-ups and web progress mapping
status: done
priority: high
created: 2026-04-21
updated: 2026-04-21
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - upstream
  - dependencies
  - runtime
  - web
  - extensions
  - progress
owner: smith
blocked-by: []
---

# Adopt pi-coding-agent 0.68.0 follow-ups and web progress mapping

## Verbatim analysis

Here’s the **Piclaw-focused 0.68.0 impact map**, with emphasis on **web/TUI progress mapping** and **shipping extensions**.

## Executive summary

### Already handled
- **Tool allowlist breaking change**: fixed in Piclaw
- **`/clone` support**: added in Piclaw
- **new `ExtensionUIContext.setWorkingIndicator()` requirement**: compile-level compatibility added in Piclaw web bridge
- **built-in + packaged first-wave progress adoption**: completed in Piclaw for `smart-compaction`, `ssh-core`, `image-processing`, `autoresearch-supervisor`, and `office-tools`

### Automatic upstream wins
- better built-in tool execution context/hook behavior
- better shell-path cwd handling
- provider/session/cache fixes for OpenAI-compatible stacks

### Remaining follow-up outside this implementation pass
- **map `ctx.ui.setWorkingIndicator()` into our web UI**
  - the runtime/web bridge compatibility is present, but richer animated indicator rendering is still a separate product-polish task
  - this is no longer blocking the 0.68.0 implementation closure

---

# 1) Core upstream changes → Piclaw impact

| Upstream 0.68.0 item | Piclaw impact | Status |
|---|---|---|
| `tools` changed from built-in tool objects to **tool-name allowlists** | Broke our session bootstrap/tool factory | **Fixed** |
| `/clone` added upstream | Piclaw parser intercepted slash commands, so upstream `/clone` would not pass through | **Fixed natively in Piclaw** |
| `ctx.ui.setWorkingIndicator()` added | Broke our `ExtensionUIContext` implementation for web | **Fixed, with first-wave extension adoption landed** |
| `before_agent_start.systemPromptOptions` added | New structured input available to extensions | **Adopted where needed (`ssh-core`); otherwise intentionally deferred** |
| `session_shutdown` now includes `reason` and `targetSessionFile` | Useful for smarter teardown/reload/fork behavior | **Adopted where needed (`ssh-core`)** |
| built-in tool wrapping uses extension-runner context path | Better hook/context consistency for built-in tools | **Automatic win** |
| shell-path resolution no longer uses ambient `process.cwd()` | Safer multi-session/worktree behavior | **Automatic win** |

---

# 2) The big one: TUI progress → web UI mapping

## Relevant upstream feature
Upstream added:

- `ctx.ui.setWorkingIndicator(options?)`

That is the correct extension-facing API for:
- animated spinner frames
- static progress indicators
- hidden indicators
- custom coloring/frames

## Current Piclaw state
In Piclaw web bridge:

- `setWorkingMessage()` → forwarded as `extension_ui_working`
- `setStatus()` → forwarded as `extension_ui_status`
- `setWidget()` → forwarded as `extension_ui_widget`
- `setWorkingIndicator()` → **currently no-op**

So today:
- extensions can send a **text working message**
- extensions **cannot** send a structured progress indicator to the web UI

## What this means
Upstream gave us the perfect abstraction, but Piclaw currently only uses it to satisfy types.

## Recommended implementation
### Runtime/web-channel side
Add a dedicated event, e.g.:

- `extension_ui_working_indicator`

Payload:
- `chat_jid`
- `frames: string[] | undefined`
- `interval_ms?: number`
- `visible?: boolean`
- optionally `source`/`key`

### Web client side
Maintain per-chat indicator state:
- active indicator frames
- animation timer
- fallback to default spinner if frames omitted
- hide when frames `[]` or cleared

### UI placement
Best candidates:
- agent status strip
- compose header / active-turn bar
- optional compact status pill near “agent running”

## Why this is worth doing
This would let us expose real structured progress for:
- compaction
- remote SSH/bootstrap work
- long-running image/document processing
- Portainer/Proxmox workflow polling
- autoresearch background activity

---

# 3) Shipping built-in extension impact

These are the built-ins loaded from `runtime/src/extensions/index.ts`.

## Directly impacted or worth upgrading

### `smart-compaction`
**Current behavior**
- uses `ctx.ui.notify(...)`
- no structured working indicator

**Impact**
- ideal candidate for `setWorkingIndicator()`

**Suggested upgrade**
- set indicator while compaction runs
- use different states for:
  - no-op compaction
  - selective extraction
  - LLM summarization
  - completion/fallback

**Value**
- high  
- compaction is exactly the sort of long-ish hidden operation where web users need visible progress

---

### `ssh-core`
**Current behavior**
- uses `ctx.ui.setStatus(...)`
- uses `ctx.ui.notify(...)`
- uses `session_shutdown`
- rewrites system prompt string to reflect remote cwd

**Impact**
- can benefit from:
  - `session_shutdown.reason`
  - `systemPromptOptions`
  - `setWorkingIndicator()`

**Suggested upgrade**
- show connecting/reconnecting indicator in web
- use shutdown reason to distinguish:
  - reload
  - fork
  - quit
  - resume/new-session
- optionally tighten prompt rewrite logic using structured prompt metadata for validation/guardrails

**Value**
- high  
- this is one of our most stateful extensions

---

### `autoresearch-supervisor`
**Current behavior**
- prompt hint injection only
- manages long-running autonomous tasks

**Impact**
- strong candidate for richer status/progress mapping

**Suggested upgrade**
- use working indicator while:
  - launching
  - stopping
  - polling sub-agent status
- optionally expose richer widget/status-panel summary

**Value**
- high

---

### `image-processing`
**Current behavior**
- prompt hint injection
- long-running operations possible

**Impact**
- strong candidate for progress indicator support

**Suggested upgrade**
- show working indicator for:
  - render
  - convert
  - optimize
  - frame extraction
  - spritesheet/GIF generation

**Value**
- medium-high

---

### `open-workspace-file`
**Current behavior**
- browser request tool
- prompt hint injection

**Impact**
- little direct 0.68.0 benefit beyond compatibility

**Suggested upgrade**
- low priority
- maybe use status/working text only if open/popout latency becomes noticeable

---

### `send-adaptive-card`, `send-dashboard-widget`
**Current behavior**
- prompt hint injection
- tool registration

**Impact**
- minimal direct effect
- these are already web-native

**Suggested upgrade**
- low priority
- no urgent 0.68.0 work

---

### `model-control`
**Current behavior**
- prompt hint injection
- model/thinking tools

**Impact**
- upstream keybinding changes are more TUI-facing than web-facing

**Suggested upgrade**
- low priority
- no immediate web benefit

---

### `tool-activation`
**Current behavior**
- prompt hint injection
- active tool management

**Impact**
- directly adjacent to the **tool allowlist** breaking change

**Status**
- already compatible after tool-name migration

**Suggested upgrade**
- none urgent

---

### `internal-tools`
**Current behavior**
- prompt hint injection
- discovery tooling

**Impact**
- no direct 0.68.0 change required
- tool-name allowlist migration is already accounted for indirectly

---

### `keychain-tools`
**Current behavior**
- prompt hint injection
- `tool_result` redaction hook

**Impact**
- benefits from upstream built-in-tool context-path fixes

**Why**
- more consistent built-in tool execution/hook context helps output interception/redaction behavior

**Value**
- medium, mostly automatic

---

### `messages-crud`, `file-attachments`, `runtime-scripts`, `sql-introspect`, `scheduled-tasks`, `workspace-search`, `workspace-memory-bootstrap`, `dream-maintenance`, `exit-process`
**Impact**
- mostly no direct 0.68.0 changes needed
- many append prompt hints in `before_agent_start`, but do not need structured prompt inspection yet

**Value**
- low priority

---

# 4) Shipping packaged integrations impact

These are the packaged wrappers under `runtime/extensions/integrations/*`, mostly delegating to `runtime/src/extensions/*`.

## `ssh`
- low direct impact
- mostly follows `ssh-core` considerations

## `keychain`
- inherits `keychain-tools` behavior
- automatic benefit from built-in tool hook/context fixes

## `proxmox`
**Current behavior**
- prompt hint injection
- workflow tooling

**Impact**
- good candidate for richer progress mapping

**Suggested upgrade**
- show working indicator during:
  - workflow discovery
  - long-running tasks
  - task polling
  - metrics collection/chart prep

**Value**
- medium-high

---

## `portainer`
**Current behavior**
- prompt hint injection
- workflow tooling

**Impact**
- same as Proxmox

**Suggested upgrade**
- show workflow progress / polling / inventory scan state

**Value**
- medium-high

---

## `office-tools` / `office-tools-tool`
**Current behavior**
- custom tools for Office read/write
- potentially long-running conversions

**Impact**
- good candidate for working indicator adoption

**Suggested upgrade**
- show progress for:
  - document parse
  - PPTX/PDF generation
  - renderer invocation

**Value**
- medium

---

## `azure-openai`
**Current behavior**
- provider bootstrap
- uses `session_shutdown`

**Impact**
- can benefit from shutdown metadata
- may inherit upstream OpenAI-compatible/session/cache fixes automatically, depending on provider path used

**Suggested upgrade**
- use `session_shutdown.reason` to distinguish transient teardown from true stop
- optionally expose bootstrap/refresh status to UI

**Value**
- medium

---

## `bun-runner`
**Impact**
- likely good candidate for working indicator during script execution
- otherwise low direct 0.68.0 pressure

---

# 5) New upstream APIs we are **not using yet**

## `before_agent_start.systemPromptOptions`
I checked our extensions: many use `before_agent_start`, but mostly just append static hints.

### Extensions currently using `before_agent_start`
- `bun-runner`
- `workspace-memory-bootstrap`
- `keychain-tools`
- `portainer`
- `send-dashboard-widget`
- `workspace-search`
- `model-control`
- `tool-activation`
- `send-adaptive-card`
- `open-workspace-file`
- `exit-process`
- `ssh`
- `runtime-scripts`
- `messages-crud`
- `file-attachments`
- `image-processing`
- `autoresearch-supervisor`
- `sql-introspect`
- `proxmox`
- `internal-tools`
- `ssh-core`

## Recommendation
Use `systemPromptOptions` only where it adds value:
- `ssh-core` for better cwd-aware prompt mutation validation
- maybe `workspace-memory-bootstrap` / `keychain-tools` for more context-aware hint injection later

For most of our extensions, this is **nice-to-have**, not urgent.

---

## `session_shutdown.reason` / `targetSessionFile`
I checked current usage.

### Extensions currently handling `session_shutdown`
- `ssh-core`
- `azure-openai`

## Recommendation
Adopt the new metadata in both.

### Why it matters
It lets us distinguish:
- user quit
- reload
- resume
- new session
- fork/clone

That opens the door to:
- less destructive teardown
- cache preservation
- smarter reconnect behavior
- better logs/telemetry

---

# 6) Automatic upstream fixes that help Piclaw without new code

## Better built-in tool hook/context behavior
This is a real win for us because we have hook-based extensions around tool results.

### Likely beneficiaries
- `keychain-tools` redaction hook
- packaged `context-mode` tool-output storage/search hook
- any status-hint or tool-result interception around built-ins

## Better shell-path cwd handling
Useful anywhere session cwd can differ from launcher cwd:
- branch/worktree scenarios
- per-session execution contexts
- remote-ish workflows that still run local shell tools

## Provider/session/cache fixes
Potential indirect benefit for:
- `azure-openai`
- custom OpenAI-compatible configurations
- OpenRouter-like deployments
- cache/session-affinity sensitive backends

---

# 7) Prioritized Piclaw follow-up list

## Completed in the 0.68.0 implementation pass
1. **Adopt progress indicator support in `smart-compaction`**
2. **Adopt `session_shutdown.reason` / `targetSessionFile` in `ssh-core`**
3. **Add progress indicator support to `image-processing`**
4. **Add progress indicator support to `office_read` / `office_write`**
5. **Add progress indicator support to `autoresearch-supervisor`**
6. **Confirm structured progress support in `proxmox` / `portainer` workflow polling**

## Remaining product follow-ups (non-blocking for the upstream upgrade)
7. **Implement richer web rendering for `setWorkingIndicator()` frames**
8. **Adopt `session_shutdown.reason` in `azure-openai` if deeper lifecycle UX is desired**
9. optionally show structured indicator state in the status panel widget area
10. selectively adopt `systemPromptOptions` where it reduces brittle prompt logic
11. consider exposing richer fork semantics (`before` vs `at`) in our web/session UX
12. review whether any web export/share surfaces should mirror upstream shortcut/indentation fixes

---

# 8) Recommended implementation shape for web progress

## Minimal version
- add SSE/browser event for working-indicator state
- support:
  - default spinner
  - hidden
  - static single-frame glyph
  - animated custom frames

## Better version
- unify:
  - `setStatus`
  - `setWorkingMessage`
  - `setWorkingIndicator`
  - `setWidget`
into one extension status model per chat/turn

## Best first adopters
- `smart-compaction`
- `ssh-core`
- `proxmox`
- `portainer`
- `image-processing`

---

## Closure

The upstream 0.68.0 implementation follow-up is closed for Piclaw runtime/extensions. Remaining work is optional UI polish or separate Azure-specific lifecycle hardening.

If you want, I can still turn the remaining web-indicator rendering work into a dedicated **workitem/spec** with:
- event schema
- runtime/web implementation steps
- web client animation/state model
- test plan for richer `setWorkingIndicator()` rendering.

## Follow-up tickets

- [Audit core Pi 0.68.0 runtime and web surfaces](audit-core-pi-0.68.0-runtime-and-web-surfaces.md)
- [Map extension working indicator to the web UI](map-extension-working-indicator-to-web-ui.md)
- [Audit built-in extensions for Pi 0.68.0 adoption](audit-built-in-extensions-for-pi-0.68.0-adoption.md)
- [Audit packaged integrations for Pi 0.68.0 adoption](audit-packaged-integrations-for-pi-0.68.0-adoption.md)
- [Adopt `systemPromptOptions` and `session_shutdown` metadata](adopt-systempromptoptions-and-session-shutdown-metadata.md)
- [Capture automatic upstream wins with regression coverage](capture-automatic-upstream-wins-with-regression-coverage.md)
- [Plan and sequence the Pi 0.68.0 follow-up rollout](plan-and-sequence-pi-0.68.0-follow-up-rollout.md)
- [Specify the web progress and extension status model](specify-web-progress-and-extension-status-model.md)
- [Audit and improve Azure extensions after Pi 0.68.0](audit-and-improve-azure-extensions-after-pi-0.68.0.md)

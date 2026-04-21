---
id: specify-web-progress-and-extension-status-model
title: Specify the web progress and extension status model
status: done
priority: medium
created: 2026-04-21
updated: 2026-04-21
estimate: M
superseded-by:
  - workitems/20-doing/implement-extension-status-path-a-lifecycle-reset-and-render-location.md
  - workitems/20-doing/implement-extension-status-path-b-unified-per-chat-reducer.md
risk: medium
tags:
  - work-item
  - kanban
  - web
  - status
  - progress
  - spec
owner: smith
blocked-by: []
---

# Specify the web progress and extension status model

## Summary

Piclaw currently transports several extension UI concepts independently:

- `setStatus`
- `setWorkingMessage`
- `setWidget`
- `notify`
- browser `custom` requests

Pi 0.68.0 adds pressure to formalize this model because `setWorkingIndicator()` is now part of the upstream extension UI contract.

This ticket defines the **spec** for a coherent web-side extension status model, whether or not we implement the entire model in the first pass.

## Problem Statement

Today we have transport, but not a clear product model:
- some extension UI events are rendered
- some are just forwarded as browser events
- some are no-ops
- state ownership across chat switches and turn lifecycle is implicit

## Acceptance Criteria

- [x] Define the authoritative event/state model for extension UI status in web.
- [x] Specify minimal vs unified implementations.
- [x] Define lifecycle semantics for chat switch, turn end, error, and reconnect.
- [x] Define how indicators, status text, working messages, and widgets coexist.
- [x] Provide an adoption checklist for extensions.

## Specification

### Current-state audit

Today the web runtime exposes four distinct extension UI streams:

| Surface | Runtime event | Current web behavior | Durability today |
|---|---|---|---|
| `setStatus(key, text)` | `extension_ui_status` | forwarded to browser events, not modeled as first-class compose/status state | ephemeral / effectively ignored in main shell |
| `setWorkingMessage(message)` | `extension_ui_working` | updates per-chat working state shown near the compose/status area | ephemeral |
| `setWorkingIndicator(options?)` | `extension_ui_working_indicator` | updates per-chat indicator state | ephemeral |
| `setWidget(key, content, options)` | `extension_ui_widget` | either status-panel widget state or browser-only event | mixed |
| `notify(message, type)` | `extension_ui_notify` | toast only | ephemeral |
| `custom(...)` | `extension_ui_request` | explicit browser action / modal flow | request/response |

The missing product definition is not transport. It is **ownership and precedence**.

## Authoritative model

### Unit of ownership

The authoritative model should be **per chat**, with two scopes inside that chat:

1. **Turn-scoped transient state**
   - cleared automatically when the active turn completes, errors, is aborted, or the client intentionally resets previews
   - includes:
     - working message
     - working indicator
     - transient status text
2. **Chat-scoped durable state**
   - survives beyond a single turn until explicitly replaced or removed
   - includes:
     - status-panel widgets
     - durable extension panels keyed by widget key/surface

So the answer to “per chat, per active turn, or both?” is:
- **both**, but nested under one **per-chat** model
- transient fields are tied to the active turn lifecycle
- durable widget/panel fields are tied to explicit extension ownership

### Proposed state shape

```ts
interface ExtensionStatusByChat {
  chatJid: string;
  turn: {
    turnId: string | null;
    statusText: { key: string | null; text: string | null };
    workingMessage: string | null;
    workingIndicator: {
      mode: 'default' | 'custom' | 'hidden';
      frames: string[];
      intervalMs: number | null;
    } | null;
    updatedAt: number | null;
  };
  widgets: Map<string, {
    surface: 'status-panel' | 'browser-only' | 'unknown';
    content: unknown[];
    remove?: boolean;
    updatedAt: number;
  }>;
}
```

### Legacy event mapping into the model

| Legacy API | Maps to | Scope |
|---|---|---|
| `setStatus(key, text)` | `turn.statusText` | transient by default |
| `setWorkingMessage(message)` | `turn.workingMessage` | transient |
| `setWorkingIndicator(options?)` | `turn.workingIndicator` | transient |
| `setWidget(key, ..., { surface: 'status-panel' })` | `widgets[key]` | durable |
| `setWidget(key, ..., other/no surface)` | browser/event-only widget pathway | extension-defined |
| `notify(...)` | toast only, never stored as durable status | ephemeral |

This keeps current APIs working while defining a future unified reducer.

## Minimal version

The minimal implementation remains:
- add SSE/browser event for working-indicator state
- support:
  - default spinner
  - hidden
  - static single-frame glyph
  - animated custom frames

But it should now be explicitly specified as a **subset of the unified model**:
- only `turn.workingIndicator` is first-class
- `setWorkingMessage()` continues to drive `turn.workingMessage`
- no attempt is made yet to give `setStatus()` equal rendering weight

## Better version

Unify:
- `setStatus`
- `setWorkingMessage`
- `setWorkingIndicator`
- `setWidget`

into one extension status model per chat, with transient turn-scoped substate and durable widget substate.

## Lifecycle semantics

### Chat switch
- the UI must render only the target chat’s extension-status state
- transient state from the previously viewed chat must disappear immediately from the shell
- durable widget state for other chats may remain cached off-screen but must not leak visually
- switching to a chat with no known state should render a clean empty status surface

### Turn start
- a new active turn may inherit existing durable widgets
- transient turn state starts empty unless explicit replay/restore arrives
- first incoming extension event for the turn populates transient state

### Turn end / error / abort
- clear transient turn state:
  - working message
  - working indicator
  - transient status text
- keep durable status-panel widgets unless the widget event explicitly removes them
- toasts remain historical/ephemeral only

### Reconnect / replay
- transient state should be treated as **best-effort**, not authoritative across reconnects, unless the server later adds explicit replay fields
- durable widgets may be rehydrated from later widget events or explicit refresh calls
- therefore the current recommended rule is:
  - reconnect clears transient extension turn state
  - reconnect may preserve/refresh durable panel state through explicit widget refresh channels

### Long-running extension states across turns
- if an extension wants state to persist beyond the active turn, it must use a durable widget/panel contract
- plain `setStatus`, `setWorkingMessage`, and `setWorkingIndicator` should **not** implicitly persist across turns

## Rendering model

### Primary render location
- the main render location for transient extension progress should be the existing compose/status strip area
- status-panel widgets remain their own dedicated durable surface
- browser `custom` requests remain modal/interactive and are not part of the passive status strip

### Compact vs expanded mode
- compact shell:
  - indicator + one-line title/message
- expanded shell:
  - optional detail text or richer widget content when the surface is a status panel

### Precedence

Recommended precedence for the main transient strip:

1. explicit durable widget on `status-panel` surface, if it is the intended primary surface for the current task
2. working message + indicator
3. transient status text
4. no extension status UI

Practical rule:
- widgets do **not** automatically suppress the working strip unless the widget surface is explicitly the active status-panel surface for that flow
- working indicator and working message should coexist
- `setStatus()` should be secondary text, not a competing mini-pane

### Accessibility and motion reduction
- animated custom indicators must honor reduced-motion preferences
- when reduced motion is enabled:
  - multi-frame custom indicators collapse to first frame
  - default spinner becomes static or minimally animated
- text equivalents must remain visible through working message/status text
- hidden indicator mode must not remove the only textual progress cue unless the extension intentionally wants silent background work

## Surface classification

### Ephemeral only
- `notify`
- `extension_ui_error` toast presentation
- request/timeout prompts

### Transient per-turn
- `setStatus`
- `setWorkingMessage`
- `setWorkingIndicator`

### Durable per-chat
- `setWidget(..., { surface: 'status-panel' })`

## Extension adoption checklist

Extensions should follow these rules:

- use `setWorkingMessage()` for human-readable progress text
- use `setWorkingIndicator()` for animation/state, not as the only progress signal
- use `setStatus()` only for concise secondary status, not verbose narrative text
- use `setWidget(..., { surface: 'status-panel' })` for durable or interactive progress surfaces
- clear or replace durable widgets explicitly when the task completes
- assume transient progress state will clear on turn completion, error, abort, chat switch, and reconnect
- do not rely on toast notifications as durable status

## Implementation checklist

### Path A — minimal but correct
- [ ] keep `extension_ui_working_indicator` as a dedicated event
- [ ] ensure per-chat transient state is reset on chat switch
- [ ] ensure transient extension state is reset on turn end/error/abort/reconnect
- [ ] render indicator + working message in one consistent location
- [ ] keep `setStatus()` non-primary until unified rendering is implemented

### Path B — unified model
- [ ] add one reducer/store for per-chat extension status
- [ ] map `setStatus`, `setWorkingMessage`, `setWorkingIndicator`, and widgets into it
- [ ] define explicit durable widget removal semantics
- [ ] add restore/reconnect semantics for any future replay payload
- [ ] add tests for precedence and multi-surface coexistence

## Open decisions intentionally deferred

- whether `setStatus()` should ever be promoted to the same visual priority as `setWorkingMessage()`
- whether non-status-panel widgets should participate in durable replay
- whether the server should embed extension transient state into `/agent/status` for reconnect restoration
- whether turn-scoped extension state should be keyed by explicit extension source in addition to chat/turn

## Core surfaces to include in the spec
- `runtime/src/channels/web/theming/ui-bridge.ts`
- `runtime/src/channels/web/sse/sse.ts`
- `runtime/web/src/ui/extension-ui-events.ts`
- `runtime/web/src/ui/app-sse-events.ts`
- any state orchestration or sidepanel/status-panel reducer involved

## Extensions to use as design drivers
- `smart-compaction`
- `ssh-core`
- `proxmox`
- `portainer`
- `image-processing`
- `autoresearch-supervisor`
- `office-tools`

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [ ] Routing matrix test
  - [x] Interaction scenario test
  - [x] Pane / viewer contract test
  - [ ] Real-browser smoke test

### Deliverables
- [x] spec markdown in this ticket and/or linked design note
- [x] implementation checklist
- [x] test checklist for the runtime and web layers

## Update History

- 2026-04-21 — expanded this ticket from a prompt stub into a concrete product/runtime spec
  - defined per-chat authoritative model with transient turn state + durable widget state
  - specified lifecycle semantics for chat switch, turn completion/error/abort, and reconnect
  - documented rendering precedence and extension adoption rules
  - aligned the spec with current runtime/web surfaces:
    - `runtime/src/channels/web/theming/ui-bridge.ts`
    - `runtime/src/channels/web/sse/sse.ts`
    - `runtime/web/src/ui/app-extension-ui-sse.ts`
    - `runtime/web/src/ui/app-extension-status.ts`
    - `runtime/web/src/ui/app-sse-events.ts`

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Docs and notes updated with links to ticket
- [ ] Follow-up tickets created for deferred scope
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Links

- Parent: `workitems/40-review/adopt-pi-coding-agent-0.68.0-followups-and-web-progress-mapping.md`
- Related: `workitems/30-done/map-extension-working-indicator-to-web-ui.md`
- Implementation Path A: `workitems/20-doing/implement-extension-status-path-a-lifecycle-reset-and-render-location.md`
- Implementation Path B: `workitems/20-doing/implement-extension-status-path-b-unified-per-chat-reducer.md`

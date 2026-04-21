---
id: implement-extension-status-path-b-unified-per-chat-reducer
title: "Impl: extension status Path B — unified per-chat reducer"
status: doing
priority: medium
created: 2026-04-21
updated: 2026-04-21
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web
  - status
  - progress
  - extensions
  - path-b
owner: smith
blocked-by:
  - implement-extension-status-path-a-lifecycle-reset-and-render-location
---

# Impl: extension status Path B — unified per-chat reducer

## Summary

Build the full extension status model defined in the spec: a single per-chat
store that owns all extension UI state, with transient turn-scoped and durable
chat-scoped tiers properly separated, and lifecycle transitions driven by the
reducer rather than ad-hoc event handling.

Spec: `workitems/30-done/specify-web-progress-and-extension-status-model.md`
Prerequisite: Path A (`implement-extension-status-path-a-lifecycle-reset-and-render-location`)

## State shape to implement

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

## Acceptance Criteria

- [ ] A single `ExtensionStatusByChat` reducer/store exists, keyed by chat JID.
- [ ] All four APIs feed into it: `setStatus`, `setWorkingMessage`, `setWorkingIndicator`, `setWidget`.
- [ ] Transient turn state is stored under `turn` and cleared on the same lifecycle events as Path A.
- [ ] Durable widgets are stored under `widgets`, keyed by widget key.
- [ ] Durable widget removal is handled: a widget event with `remove: true` deletes the entry from `widgets`.
- [ ] Rendering precedence is enforced by the reducer output, not ad-hoc in components:
  1. active durable `status-panel` widget
  2. working message + indicator
  3. transient status text
  4. nothing
- [ ] Chat switch swaps the active store slice without clearing durable widgets.
- [ ] Reduced-motion preference: animated custom indicators collapse to first frame; default spinner is minimally animated.
- [ ] Reconnect clears transient turn state; preserves durable widget state.
- [ ] The render location introduced in Path A remains the single location.
- [ ] `setStatus()` is rendered as secondary text within the turn tier.
- [ ] No regressions on existing extension UX.

## Key files

- `runtime/web/src/ui/extension-ui-events.ts`
- `runtime/web/src/ui/app-sse-events.ts`
- `runtime/web/src/ui/app-extension-status.ts` — likely the new reducer home
- `runtime/src/channels/web/sse/sse.ts`
- `runtime/src/channels/web/theming/ui-bridge.ts`

## Implementation Checklist

- [ ] Define `ExtensionStatusByChat` type (can live in `app-extension-status.ts` or a new `extension-status-model.ts`).
- [ ] Implement reducer: handle `setStatus`, `setWorkingMessage`, `setWorkingIndicator`, `setWidget`, `remove` widget.
- [ ] Wire all four SSE events into the reducer dispatch.
- [ ] Implement chat-switch action: swap active slice, preserve durable widgets off-screen.
- [ ] Implement turn-end/error/abort/reconnect actions: clear `turn` substate only.
- [ ] Implement precedence logic: derive `activeStatusView` from reducer output.
- [ ] Wire `activeStatusView` into the single render location established by Path A.
- [ ] Implement reduced-motion frame collapse.
- [ ] Add/update tests.
- [ ] Typecheck clean.

## Deferred scope (explicitly out)

- Whether `setStatus()` should ever be promoted to the same visual priority as `setWorkingMessage()`.
- Whether non-status-panel widgets should participate in durable replay across reconnects.
- Whether the server should embed extension transient state into `/agent/status` for reconnect restoration.
- Whether turn-scoped extension state should be keyed by explicit extension source.

## Test Plan

- [ ] State-machine / invariant test: reducer produces correct output for each action type
- [ ] State-machine / invariant test: transient state cleared; durable state preserved on each lifecycle transition
- [ ] State-machine / invariant test: `remove: true` widget action removes key from store
- [ ] Interaction scenario test: two concurrent extension events (indicator + status) coexist correctly
- [ ] Interaction scenario test: precedence — active status-panel widget suppresses working strip correctly
- [ ] Pane / viewer contract test: reduced-motion collapses animated frames
- [ ] Restore / reconnect test: turn state cleared, widgets preserved after reconnect
- [ ] Real-browser smoke test: proxmox or autoresearch shows/clears progress end-to-end

## Definition of Done

- [ ] `ExtensionStatusByChat` type defined and exported
- [ ] All four APIs (`setStatus`, `setWorkingMessage`, `setWorkingIndicator`, `setWidget`) wired into the reducer
- [ ] Durable widget removal (`remove: true`) working correctly
- [ ] Rendering precedence enforced by reducer output, not by ad-hoc component logic
- [ ] Reduced-motion frame collapse verified
- [ ] Reconnect clears transient turn state; durable widgets preserved
- [ ] All acceptance criteria satisfied and verified
- [ ] Tests added or updated — passing locally
- [ ] Type check clean
- [ ] Docs updated to describe the new per-chat extension status model
- [ ] Operational impact assessed
- [ ] Deferred scope items documented as follow-up tickets
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Updates

### 2026-04-21
- Created from spec ticket `specify-web-progress-and-extension-status-model`.
- Blocked on Path A completion; Path A establishes the render location and
  lifecycle reset correctness that Path B's reducer assumes.
- Quality: ★★★☆☆ 7/10

## Links

- Spec: `workitems/30-done/specify-web-progress-and-extension-status-model.md`
- Prerequisite: `workitems/20-doing/implement-extension-status-path-a-lifecycle-reset-and-render-location.md`

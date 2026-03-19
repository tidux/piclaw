---
id: timeline-launched-floating-generative-widget-pane
title: Prototype a timeline-launched floating generative widget pane
status: next
priority: medium
created: 2026-03-19
updated: 2026-03-19
target_release: next
estimate: M
risk: high
tags:
  - work-item
  - kanban
  - web
  - ui
  - timeline
  - floating-pane
  - generative-ui
owner: pi
---

# Prototype a timeline-launched floating generative widget pane

## Summary

Build a piclaw-native proof of concept for generative widgets that:

- are launched from a timeline message or card,
- open in a **floating pane / shell-owned overlay surface**,
- can be **dismissed by the user** without mutating timeline history,
- and can be reopened from the originating timeline item.

This should **not** be a direct port of `pi-generative-ui`'s macOS-native
Glimpse/WKWebView model.

For v1, the goal is to prove a safe and useful interaction model inside
piclaw's browser UI while preserving the current product contract:

- timeline history remains the source of truth,
- Adaptive Cards remain the preferred structured chat UI,
- and substantial visual widgets live in a bounded, explicitly opened surface.

## Acceptance Criteria

- [ ] A timeline message or card can expose an explicit user action to open a generated widget.
- [ ] Opening the widget shows a **floating pane / overlay** in the current web session.
- [ ] The floating pane can be dismissed by the user without deleting or altering the originating timeline item.
- [ ] The originating timeline item remains a stable reopen point after dismissal.
- [ ] V1 renders a bounded widget artifact (SVG and/or sandboxed HTML) rather than raw unsandboxed live DOM execution in the main timeline.
- [ ] Widget ownership/context is clear: the pane indicates which message/card launched it.
- [ ] Reload/reconnect behavior is defined for v1 (e.g. pane closes on reload but timeline launch affordance remains; or pane state is restored if intentionally persisted).
- [ ] Security boundaries are explicit for v1 (sandboxing, allowed capabilities, script policy, asset loading policy).

## Implementation Paths

### Path A — shell-owned floating widget surface launched from timeline (recommended)
1. Introduce a timeline-native launch affordance, likely from a dedicated content block or Adaptive Card action.
2. Add a shell-owned floating pane / overlay component mounted from `web/src/app.ts`.
3. Render widget artifacts in a bounded host, preferably a sandboxed iframe or similarly isolated container.
4. Keep the originating message as the durable history anchor and reopen affordance.
5. Support explicit dismiss/close controls in the floating surface.

**Pros:**
- matches the user-facing product model
- keeps history as the durable source of truth
- avoids forcing a new general pane-placement abstraction in v1
- can reuse existing shell patterns for dismissible surfaces

**Cons:**
- introduces a new shell-owned surface type
- requires careful widget security boundaries

### Path B — generalize the pane system with a new `floating` placement
1. Extend `PanePlacement` beyond `tabs | dock`.
2. Teach `PaneRegistry` and host shell to mount and manage floating pane instances.
3. Route generated widgets through that generalized pane system.

**Pros:**
- cleaner long-term abstraction if more floating surfaces are expected
- reuses pane lifecycle ideas consistently

**Cons:**
- current pane model only supports `tabs` and `dock`
- much broader architectural change than needed for the first experiment
- risks delaying the actual widget PoC behind host-model work

## Recommended Path

Path A — start with a **shell-owned floating widget surface** launched from the timeline.

This satisfies the product intent quickly and safely:
- open from history,
- dismiss without losing the launch point,
- and keep the experiment bounded.

If the pattern proves useful, a later follow-up can decide whether it should be
promoted into a generalized `floating` pane placement.

## Test Plan

- [ ] Add focused web tests for launch affordance visibility and click behavior.
- [ ] Add focused web tests for open → dismiss → reopen behavior.
- [ ] Validate that dismissing the floating pane does not mutate or remove the originating timeline entry.
- [ ] Validate current-chat scoping so a widget launched in one chat/session does not bleed into another.
- [ ] Validate safe fallback behavior when the widget artifact fails to load or is rejected by policy.
- [ ] Validate mobile/narrow-layout behavior for the floating surface.
- [ ] Run `bun run build:web` from `/workspace/piclaw/piclaw` if implementation proceeds.
- [ ] Run `bun run quality` from `/workspace/piclaw/piclaw` if implementation proceeds.

## Definition of Done

- [ ] Timeline launch affordance exists for the chosen v1 widget artifact.
- [ ] Floating pane / overlay opens in the current web session.
- [ ] User can dismiss and reopen the widget cleanly.
- [ ] Security boundary for widget rendering is documented and enforced for v1.
- [ ] Regression coverage exists for launch/dismiss/reopen behavior.
- [ ] Any deferred scope (e.g. generalized pane placement, richer callbacks, live streaming widgets) is split into follow-up tickets.
- [ ] Update history records implementation and validation evidence.

## Updates

### 2026-03-19
- Created as the follow-up to `pi-generative-ui-integration-evaluation` after ruling out direct timeline integration.
- Refined with explicit user direction: make the experiment a **floating pane** that can be dismissed from the timeline flow.
- Chosen v1 framing is a **shell-owned floating surface launched from history**, not a direct port of the macOS-native Glimpse model.
- Noted important architectural constraint: the current pane contract in `web/src/panes/pane-types.ts` only supports `tabs` and `dock`, so a generalized floating-pane placement would be a broader follow-up rather than the first slice.
- Quality: ★★★☆☆ 6/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 1)

## Notes

- Reuse existing shell patterns where possible:
  - dismissible floating/overlay chrome similar in spirit to `web/src/components/btw-panel.ts`
  - close affordances similar to `web/src/components/image-modal.ts`
- Keep v1 artifact support intentionally narrow:
  - SVG
  - sandboxed HTML
  - no unrestricted arbitrary third-party script execution in the main DOM
- The timeline item should remain the canonical receipt / launch point even when the floating pane is closed.
- Adaptive Cards are still the preferred path for compact structured in-chat decisions; this ticket is specifically for richer visual widgets that benefit from a separate transient surface.

## Links

- `kanban/50-done/pi-generative-ui-integration-evaluation.md`
- `piclaw/piclaw/web/src/app.ts`
- `piclaw/piclaw/web/src/components/post.ts`
- `piclaw/piclaw/web/src/components/btw-panel.ts`
- `piclaw/piclaw/web/src/components/image-modal.ts`
- `piclaw/piclaw/web/src/panes/pane-types.ts`
- `piclaw/piclaw/web/src/panes/pane-registry.ts`
- `piclaw/piclaw/src/extensions/send-adaptive-card.ts`
- `piclaw/docs/extension-ui-contract.md`
- `piclaw/docs/web-pane-extensions.md`

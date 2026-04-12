---
id: make-tree-command-render-expandable-session-tree-widget
title: Make /tree render an expandable session-tree widget in the timeline
status: review
created: 2026-04-11
updated: 2026-04-12
priority: medium
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web
  - ui
  - widget
  - sessions
  - tree
  - commands
owner: pi
---

# Make /tree render an expandable session-tree widget in the timeline

## Summary

Upgrade the `/tree` command so the web experience can render the current session
hierarchy as a custom timeline widget instead of only returning compact plain
text.

The widget should show the session/message tree visually, support expand/collapse
for branches, highlight the active leaf, and remain embedded as a durable
reopenable timeline artifact.

Non-web channels can keep the existing text fallback in v1.

## Problem Statement

Today `/tree` returns a compact textual dump from:

- `runtime/src/agent-control/handlers/tree.ts`

That is useful for scripting and fallback channels, but it is hard to scan once
sessions branch heavily:

- depth is hard to read in plain text
- active-vs-inactive branches are easy to miss
- labels, summaries, compactions, and model changes are noisy in a linear dump
- large trees need pagination instead of visual exploration

Piclaw already has timeline widget infrastructure, so `/tree` is a strong fit
for a richer web-native tree browser.

## Desired Behavior

- In the web UI, running `/tree` posts a custom timeline widget that renders the
  current session tree.
- The widget is visually hierarchical and expandable/collapsible.
- The active leaf/current branch is clearly highlighted.
- Nodes expose at least:
  - entry id
  - entry type / short summary
  - current label (if any)
  - active-state marker
- The widget remains bounded to the timeline/widget surface rather than opening
  an editor or a separate route by default.
- Non-web channels keep the current text output in v1.

## V1 scope

- web-only rich widget output for `/tree`
- existing text output retained as fallback for non-web clients
- read-only expand/collapse tree exploration
- active-node highlighting
- compact node summaries using existing tree-entry description logic where
  possible
- session-local widget behavior compatible with the current timeline widget
  model

## Non-goals

- no drag/drop tree editing in v1
- no branch mutation actions inside the widget in v1
- no full graph visualization or force-layout rendering
- no replacement of the existing text fallback for WhatsApp/CLI-like channels
- no attempt to load arbitrarily huge trees without sensible truncation or
  lazy-expansion rules

## Acceptance Criteria

- [ ] `/tree` produces a custom timeline widget in the web UI.
- [ ] The widget renders the current session tree hierarchically.
- [ ] Branches can be expanded/collapsed.
- [ ] The active leaf/current branch is visually highlighted.
- [ ] Labels and notable entry types (message, compaction, summary, model
      change, thinking change) are represented clearly.
- [ ] Non-web channels still receive a sensible plain-text fallback.
- [ ] Large trees have a bounded rendering strategy (initial collapse, cap, or
      lazy expansion) so the widget remains usable.
- [ ] Focused regression coverage exists for widget payload generation and web
      rendering behavior.

## Implementation Paths

### Path A — `/tree` emits a server-owned timeline widget payload (recommended)
1. Reuse the existing tree-walk logic from `handleTree(...)` to build a
   structured tree payload.
2. Add a web-aware response path that emits a custom timeline widget for `/tree`.
3. Render the widget with inline HTML/CSS/JS using the current timeline widget
   infrastructure.
4. Keep the existing text response for non-web channels.

**Pros:**
- narrow feature slice
- keeps `/tree` command semantics intact
- leverages existing widget/timeline patterns
- easy to preserve fallback behavior

**Cons:**
- requires a clean command result split between widget-capable and fallback
  channels
- tree payload shape needs to be stabilized

### Path B — keep `/tree` textual and add a separate `/tree-widget` command

This is simpler operationally, but weaker product UX and likely unnecessary if
we can branch by channel cleanly.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [x] Real-browser smoke test
- [ ] Existing tests to rerun are listed
  - [ ] `runtime/test/agent-control/agent-control-handlers.test.ts`
  - [ ] `runtime/test/agent-control/parser.test.ts`
  - [ ] existing web widget/timeline rendering tests
- [ ] New regression coverage to add is listed
  - [ ] `/tree` returns widget-capable payload for web
  - [ ] `/tree` keeps text fallback for non-web
  - [ ] widget tree data preserves hierarchy and active-node marking
  - [ ] expand/collapse rendering works in the web client
- [ ] Real-browser smoke pass required? If yes, record the surface
  - [ ] run `/tree` in web → widget appears → expand/collapse branches

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Tests added or updated — passing locally
- [ ] Type check clean
- [ ] Docs and notes updated with links to ticket
- [ ] Operational impact assessed
- [ ] Follow-up tickets created for deferred scope
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Updates

### 2026-04-12
- Lane change: `00-inbox` → `40-review`.
- `/tree` now posts a generated session-tree widget in the web timeline instead of plain text for the web path, while keeping the existing navigation behavior and non-web fallback semantics in the handler.
- The shipped widget flow now uses live `/agent/session-tree` data, iterative tree flattening for deep histories, compact one-line rows, sidebar detail, theme-tinted tags, and an in-widget search/filter box.
- Implementation touched the server command path, web session-tree endpoint, generated-widget plumbing, floating widget pane rendering, post rendering, and the dedicated `session-tree-widget` component.
- Pending review focus: final user verification of the widget UX and any remaining scope mismatch against the original “expandable” wording.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 1, test: 1, deps: 2, risk: 2)

### 2026-04-11
- Created from user request to make `/tree` render an expandable visual session
  tree as a custom timeline widget.
- Recommended first slice: web widget + non-web text fallback.

## Notes

- The existing command already contains useful summary/label/type logic in
  `runtime/src/agent-control/handlers/tree.ts`; prefer reusing that instead of
  inventing a second tree-description path.
- A future follow-up could add click-to-navigate or per-node actions, but the
  first slice should prioritize read-only inspection.

## Links

- `runtime/src/agent-control/handlers/tree.ts`
- `runtime/src/agent-control/agent-control-handlers.ts`
- `runtime/web/src/ui/generated-widget.ts`
- `workitems/20-doing/timeline-launched-floating-generative-widget-pane.md`

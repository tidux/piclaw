---
id: editor-diff-view
title: Add a diff view in the editor
status: doing
priority: medium
created: 2026-03-13
updated: 2026-04-08
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web-ui
  - editor
  - diff
owner: pi
---

# Add a diff view in the editor

## Summary

Add a narrow v1 diff view to the web editor so users can compare the current
unsaved text buffer against the last saved/on-disk version of the same file
without leaving the existing editor surface.

The goal for v1 is not a full Git-style compare system. It is a practical,
editor-local review aid for answering one question quickly:

- “What did I change in this file since the last save?”

## Problem Statement

Today the editor tracks dirty state and the saved baseline internally, but there
is no built-in way to inspect those changes visually inside the editor.

That means users who want to review edits must either:
- rely on memory,
- save and inspect externally,
- or wait for a broader file-vs-file / Git compare flow that is much bigger than
  this immediate need.

## V1 scope decision

For the first implementation slice, lock the ticket to:

- **comparison source:** current buffer vs last saved/on-disk content for the same file
- **surface:** generic web editor only
- **file types:** text files already handled by the generic editor
- **layout:** side-by-side diff inside the existing editor surface
- **editing rule:** current-buffer side remains editable; saved baseline side is read-only
- **entry point:** editor tab context menu action such as `Compare to Saved`
- **exit path:** close/toggle the diff view and return to the normal editor view without losing unsaved state

## Out of scope for v1

- file-vs-file comparison
- file-vs-git comparison
- commit history / blame integration
- binary or rich document diffing
- merge/conflict-resolution UI
- diff support for non-editor viewers
- inline + side-by-side mode choice in the first slice

## Desired Behavior

- A dirty text-editor tab exposes a `Compare to Saved` action.
- Opening that action shows a side-by-side diff in the existing editor surface.
- The left/right roles are explicit and stable:
  - saved/on-disk baseline is read-only
  - current buffer is editable
- Unsaved edits remain intact while the diff is open.
- Closing the diff returns to the normal editor view for the same file.
- Non-diff editor tabs keep existing behavior.

## Acceptance Criteria

- [ ] Dirty text files in the generic web editor can open a diff view.
- [ ] V1 comparison source is explicitly limited to **current buffer vs saved/on-disk content for the same file**.
- [ ] The open affordance for v1 is defined and implemented as an editor-tab context-menu action.
- [ ] The diff renders inside the existing editor surface rather than requiring an external page/tool.
- [ ] Saved baseline content is read-only while the current-buffer side remains editable.
- [ ] Closing/toggling the diff returns to normal editor mode without losing unsaved state.
- [ ] Normal editor behavior for non-diff tabs remains unchanged.
- [ ] Minimal regression coverage exists for open, render, edit-preservation, and close behavior.

## Implementation Paths

### Path A — editor-owned diff mode inside the existing generic editor (recommended)
1. Extend the generic editor implementation so it can switch between normal mode and a diff sub-mode for the current file.
2. Use the editor's already-tracked saved baseline (`initialContent`) as the read-only compare source.
3. Add a tab context-menu action (`Compare to Saved`) for eligible dirty text tabs.
4. Render a side-by-side compare layout inside the existing editor host.
5. Preserve the editable current buffer and restore normal single-editor mode on close.

**Pros:**
- narrowest v1 scope
- reuses existing dirty-state and saved-baseline logic already present in the editor
- avoids introducing a new pane type just for one compare source
- keeps lifecycle/state inside the editor extension where the source of truth already lives

**Cons:**
- makes the generic editor extension more complex
- may need careful layout handling for narrow screens

### Path B — separate diff pane / tab type
1. Add a dedicated diff pane mode or new pane extension.
2. Open a second pane instance specifically for comparison.
3. Route editor tabs into that pane when the user asks to compare.

**Pros:**
- cleaner long-term abstraction if many diff modes are expected
- could grow more naturally into file-vs-file or git-backed comparisons later

**Cons:**
- significantly larger v1 surface area
- adds pane-model complexity before the compare source is even proven useful
- risks over-designing the first implementation

## Recommended Path

Path A — implement a narrow editor-owned `Compare to Saved` mode first.

This matches the actual immediate need, lines up with the current editor's
saved-baseline tracking, and keeps the first slice small enough to validate
quickly.

## Likely implementation surfaces

- `runtime/extensions/viewers/editor/editor-extension.ts`
  - current generic editor implementation
  - already tracks `initialContent`, dirty state, save flow, and host lifecycle
- `runtime/web/src/panes/editor-loader.ts`
  - lazy loader / pane contract surface for the generic editor
- `runtime/web/src/components/tab-strip.ts`
  - likely home for the `Compare to Saved` context-menu action
- `runtime/web/src/panes/tab-store.ts`
  - if the diff-open state needs to be tracked at the tab level rather than fully inside the editor extension

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| The editor extension becomes too complex for a narrow feature | medium | keep v1 limited to one comparison source and one layout |
| Unsaved state could be lost when toggling in/out of diff mode | high | keep the current buffer authoritative; use the saved baseline as read-only input only |
| Diff UI may be awkward on narrow screens | medium | keep v1 desktop-first and define a simple narrow fallback before widening scope |
| Future git/file-vs-file needs could pressure the design | low | treat v1 as a deliberately narrow compare mode, not the final diff architecture |

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [ ] Existing tests to rerun are listed:
  - [ ] editor-pane / editor-extension tests
  - [ ] tab-strip context-menu tests
- [ ] New regression coverage to add is listed:
  - [ ] dirty text tab exposes `Compare to Saved`
  - [ ] diff opens using current buffer vs saved baseline
  - [ ] baseline side is read-only
  - [ ] editing remains possible on the current-buffer side
  - [ ] closing diff restores normal editor mode without losing unsaved edits
  - [ ] non-dirty or unsupported tabs do not expose the action
- [ ] Real-browser smoke pass required? If yes, record the surface:
  - [ ] generic text editor tab with unsaved edits

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

### 2026-04-08
- Lane change: `10-next` → `20-doing` by implementation start.
- Implemented the narrow v1 `Compare to Saved` flow in the generic editor.
- Current implementation shape:
  - tab context-menu action for eligible dirty generic-editor tabs
  - editor-owned side-by-side diff using CodeMirror `MergeView`
  - saved baseline on the left, editable current buffer on the right
  - theme-tinted diff styling using the active PiClaw color scheme
  - tab-level diff-open state with host-transfer support for pane popout/reattach
  - popout overflow can hide an active diff
- Validation completed locally:
  - `PICLAW_DB_IN_MEMORY=1 bun test runtime/test/web/tab-compare-saved.test.ts runtime/test/web/app-pane-state.test.ts runtime/test/web/app-pane-mode-render.test.ts runtime/test/web/app-main-render-composition.test.ts runtime/test/web/app-main-shell-composition.test.ts`
  - `bun run typecheck`
  - `bun run build:web`
- Remaining optional follow-up: a manual real-browser smoke pass on one dirty text tab to confirm the final visual feel.

### 2026-04-06
- Refinement pass completed to make the ticket execution-ready for a narrow v1.
- Locked the comparison model to **current buffer vs saved/on-disk content for the same file**.
- Locked the initial affordance to an editor-tab context-menu action (`Compare to Saved`).
- Chose a side-by-side in-editor diff with read-only saved baseline and editable current buffer as the recommended first slice.
- Mapped likely implementation surfaces to the actual current codebase (`editor-extension.ts`, `editor-loader.ts`, `tab-strip.ts`).
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)
- Gap: the remaining open design choice is whether diff-open state lives entirely inside the editor extension or needs explicit tab-store state.

### 2026-04-06
- Board quality review: added the missing readiness score and confirmed this ticket still needs refinement before returning to active implementation.
- Quality: ★★★☆☆ 5/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 0)
- Gap: the v1 comparison source, open affordance, and minimal validation plan still need to be narrowed explicitly.

### 2026-03-28
- Lane retained: `10-next` via web next-card decision.
- Next-lane outcome recorded from the adaptive-card submission: **Keep in Next**.
- The ticket remains under-refined for `doing`: the v1 comparison model, UI affordance, and minimal validation path still need to be narrowed before implementation should resume.
- Recommended refinement target for the next pickup: lock v1 to a single comparison source (preferably current buffer vs saved file) and define the minimal open/render/close behavior and test plan.

### 2026-03-22
- Lane change: `10-next` → `20-doing` by user direction.
- Promoted for active implementation/refinement.
- Immediate next step is to narrow the v1 comparison model (for example current buffer vs saved file first) before broadening to git/file-vs-file comparisons.

### 2026-03-13
- Added from request to track an editor diff view.

## Notes

- V1 should stay intentionally narrow and prove usefulness before broadening into Git or file-vs-file compare modes.
- The generic editor already tracks a saved baseline and dirty state, which makes this a better first compare source than any broader repository-aware diff flow.
- If the feature proves valuable, follow-up tickets can cover:
  - file-vs-file comparison
  - git-backed compare
  - inline diff mode
  - better narrow/mobile layout treatment

## Links

- `runtime/web/src/panes/editor-loader.ts`
- `runtime/extensions/viewers/editor/editor-extension.ts`
- `runtime/web/src/components/tab-strip.ts`
- `runtime/web/src/panes/tab-store.ts`

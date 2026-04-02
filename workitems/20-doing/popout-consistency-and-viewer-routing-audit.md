---
id: popout-consistency-and-viewer-routing-audit
title: Ensure pop-out consistency and backend routing across all editors and viewers
status: doing
priority: high
created: 2026-04-01
updated: 2026-04-01
target_release: next
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - web-ui
  - panes
  - tabs
  - windows
  - viewers
  - routing
owner: pi
---

# Ensure pop-out consistency and backend routing across all editors and viewers

## Summary

The current pane/tab pop-out model works, but the behavior is not yet fully
uniform across all editor and viewer surfaces.

Some surfaces use the generic pane pop-out path, some have explicit standalone
viewer routes, and some rely on backend HTTP routes with viewer-specific
contracts. This ticket tracks the work needed to make those behaviors explicit,
consistent, and testable across the full editor/viewer matrix.

The goal is not just “can it open in a new window,” but:
- consistent user-facing pop-out affordances
- correct viewer/editor selection for each file type
- predictable standalone routing behavior
- backend route availability for packaged/repo installs
- clean fallback rules when a pane uses the generic pop-out shell vs a
  dedicated standalone route

## Problem Statement

Today the pop-out capability is spread across multiple layers:
- pane registry resolution
- tab-strip `Open in Window`
- standalone fallback URL generation
- backend HTTP routes for dedicated viewers
- viewer/editor-specific packaged assets and runtime assumptions

That creates a few risks:
- some pane types may be pop-out capable only through the generic shell, while
  others also have direct standalone routes
- route coverage can drift from pane coverage
- packaged/repo installs can accidentally omit vendored viewer assets or route
  dependencies
- behavior may differ between editor/viewer types without an explicit contract
- future viewers may ship without clear pop-out or routing expectations

## Scope

### In scope
- audit pop-out behavior across all registered editor/viewer pane types
- define the intended routing model per pane/viewer type
- align generic pane pop-out vs dedicated standalone route behavior
- verify backend route coverage for dedicated viewers
- verify packaged/repo-install asset coverage where viewer routes depend on
  vendored assets
- add focused tests for routing/pop-out consistency where missing
- document the contract in code and/or workitems

### Out of scope
- redesigning the pane architecture from scratch
- implementing drag/drop docking or new layout systems
- expanding into non-pane chat-branch window behavior except where routing
  utilities are shared

## Current Known Surfaces

### Registered tab panes
- editor
- workspace preview
- workspace markdown preview
- office viewer
- CSV viewer
- PDF viewer
- image viewer
- video viewer
- Draw.io
- mindmap
- kanban
- VNC
- terminal tab

### Current consistency gaps to audit
- which pane types rely only on the generic pane pop-out shell
- which pane types also expose dedicated standalone viewer routes
- whether the direct standalone route matrix matches the pane registry matrix
- whether viewer-specific backend routes are packaged and available in repo
  installs, including Windows Bun URL installs

## Desired Contract

For each editor/viewer surface, the project should answer explicitly:

1. Can it open via the shared generic pane pop-out path?
2. Does it also support a dedicated standalone route?
3. If both exist, which path is preferred and why?
4. What backend route/assets must exist for it to work in packaged installs?
5. What live behavior should be preserved across detach/reattach?

## Acceptance Criteria

- [ ] Every registered editor/viewer pane is inventoried in this ticket or a
      linked implementation note.
- [ ] Every inventoried pane has an explicit pop-out contract:
      generic shell, dedicated route, or both.
- [ ] Dedicated standalone routes are verified for the viewers that need them.
- [ ] Generic pane-popout fallback behavior is verified for pane types without
      dedicated routes.
- [ ] Packaged/repo-install route and asset requirements are verified for all
      viewer types that depend on vendored assets.
- [ ] Missing consistency gaps are fixed or spun out as follow-up tickets.
- [ ] Focused regression coverage exists for the shipped routing decisions.

## Suggested Work Slices

### Slice 1 — inventory and contract table
- enumerate every registered tab pane
- record whether it uses generic pop-out, dedicated route, or both
- identify missing or inconsistent cases

### Slice 2 — routing and packaging audit
- verify backend HTTP routes for viewer-specific standalone surfaces
- verify packaged asset/runtime dependencies for those routes
- verify repo-install behavior where vendored viewers are involved

### Slice 3 — consistency fixes
- align viewer/editor behavior where the current UX is inconsistent
- add missing routing helpers or explicit non-support decisions
- document preferred path per surface

### Slice 4 — test coverage and docs
- add/update focused tests around standalone route resolution and pop-out
  fallback behavior
- document the final contract in code comments and/or workitems

## Test Plan

### Code-level audit/tests
- [ ] pane registry inventory vs standalone route inventory
- [ ] `getStandaloneTabUrl(...)` coverage for supported dedicated viewers
- [ ] generic `handlePopOutPane` / `popOutPaneAction` path coverage for all
      remaining pane types
- [ ] packaged route/asset checks for vendored viewers (Draw.io, Office, etc.)

### Live/browser validation
- [ ] generic editor
- [ ] Draw.io
- [ ] image viewer
- [ ] CSV viewer
- [ ] Office viewer
- [ ] PDF viewer
- [ ] video viewer
- [ ] mindmap
- [ ] kanban
- [ ] VNC
- [ ] terminal tab

## Links

- `workitems/20-doing/live-tab-and-pane-popout-regression-sweep.md`
- `workitems/20-doing/live-pane-detach-reattach-migration.md`
- `workitems/50-done/allow-any-editor-tab-to-open-in-a-standalone-pop-out-window.md`
- `runtime/web/src/components/tab-strip.ts`
- `runtime/web/src/ui/app-window-actions.ts`
- `runtime/web/src/ui/app-branch-pane-lifecycle-actions.ts`
- `runtime/web/src/ui/app-shell-bootstrap.ts`
- `runtime/web/src/panes/index.ts`
- `runtime/extensions/viewers/drawio-editor/index.ts`

## Updates

### 2026-04-02
- Added a focused contract regression test at
  `runtime/test/web/pane-popout-contracts.test.ts` to pin the current
  generic-shell-only pop-out contract for:
  - `demo/sample-video.webm` → `video-viewer`
  - `demo/roadmap.mindmap.yaml` → `mindmap-editor`
  - `demo/board.kanban.md` → `kanban-editor`
  - `piclaw://terminal` → `terminal-tab`
- The test also asserts `getStandaloneTabUrl(..., { hasPopOutTab: true })`
  returns `null` for those surfaces, so they keep using the shared pane-popout
  plumbing instead of drifting onto dedicated standalone helpers by accident.
- Live verification now matches that contract for video, mindmap, and kanban.
- Terminal remains the exception: the UI contract is correct, but live
  instrumentation still shows a second `/terminal/ws` socket after `Open in
  Window`, so the transport/session preservation part is still incomplete.

### 2026-04-01
- Created to track the broader consistency pass requested after the Draw.io
  fixes and the resumed tab/pane live regression sweep.
- Initial known gap: some pane types have dedicated standalone route helpers,
  while others appear to rely only on the generic pane pop-out shell. This
  ticket exists to make that split explicit and correct across all editors and
  viewers.

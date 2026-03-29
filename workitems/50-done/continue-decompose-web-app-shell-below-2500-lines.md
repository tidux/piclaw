---
id: continue-decompose-web-app-shell-below-2500-lines
title: Continue decomposing the web app shell below 2500 lines
status: done
priority: medium
created: 2026-03-29
updated: 2026-03-29
completed: 2026-03-29
estimate: XL
risk: medium
tags:
  - work-item
  - kanban
  - refactor
  - web-ui
  - quality
owner: pi
blocked-by: []
---

# Continue decomposing the web app shell below 2500 lines

## Summary

`runtime/web/src/app.ts` has now been reduced to about 2997 lines, but it still owns a large amount of authenticated shell orchestration, load/refresh flow control, status/bootstrap glue, and remaining widget/pane coordination. The next tranche should aim for a meaningfully larger reduction than the threshold-crossing pass and peel off bigger behavior clusters without changing UX semantics or payload contracts.

## Acceptance Criteria

- [x] Extract multiple additional coherent typed seams from `runtime/web/src/app.ts`.
- [x] Reduce `runtime/web/src/app.ts` below 2500 lines.
- [x] Preserve existing web shell behavior and payload shapes.
- [x] Add focused tests for each new seam.
- [x] Pass focused web tests, `bun run build:web`, `bun run lint`, `bun run typecheck`, and `bun run check:stale-dist`.

## Implementation Paths

### Path A — Bootstrap/load orchestration decomposition
Target the remaining authenticated bootstrap, loadAgents/loadBranches, profile/status refresh, and connection/reload orchestration so `app.ts` becomes a thinner shell coordinator.

### Path B — Larger UI orchestration seams
Extract broader remaining widget/pane/action clusters, especially areas that still mix follow-up, floating-widget, status-pane, and branch/pane lifecycle decisions inline.

## Test Plan

- [x] Add focused tests under `runtime/test/web/` for each newly extracted helper.
- [x] Run focused web tests covering the new helper plus the current app-shell seam suite.
- [x] Run `bun run build:web`.
- [x] Run `bun run lint`.
- [x] Run `bun run typecheck`.
- [x] Run `bun run check:stale-dist`.

## Definition of Done

- [x] New seam(s) are landed on `main`.
- [x] `runtime/web/src/app.ts` is below 2500 lines.
- [x] Validation evidence is recorded in `## Updates`.
- [x] Remaining post-tranche seams are explicitly listed.

## Updates

### 2026-03-29
- Lane change: `20-doing` → `50-done` after a larger follow-up tranche reduced `runtime/web/src/app.ts` below the ticket threshold and cleared the focused validation gate.
- Completion evidence:
  - extracted typed helpers: `app-main-shell-render.ts`, `app-pane-mode-render.ts`, `app-sse-events.ts`, `app-status-refresh-orchestration.ts`
  - `runtime/web/src/app.ts` reduced from about `2997` lines to `2420` lines
  - focused web validation: `125 pass, 0 fail`
  - `bun run build:web`, `bun run lint`, `bun run typecheck`, and `bun run check:stale-dist` all passed
- Follow-up explicitly opened at `workitems/20-doing/continue-decompose-web-app-shell-toward-500-lines.md` to keep pushing toward the long-term target instead of treating 2500 as the end state.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

### 2026-03-29
- Created immediately after `workitems/50-done/continue-decompose-web-app-shell-below-3k-lines.md` succeeded, because the shell is now under 3000 lines but still large enough to justify another dedicated tranche.
- New target: push `runtime/web/src/app.ts` from about `2997` lines to below `2500` lines with a more impactful reduction than the prior pass.
- Starting point already includes the latest typed seams:
  - `app-auth-bootstrap.ts`
  - `app-floating-widget-followup.ts`
  - `app-connection-lifecycle.ts`
  - `app-agent-panel-toggle.ts`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Implementation Paths Considered (historical)

- Path A paid off by extracting more bootstrap/status orchestration and helping remove another large chunk of shell glue.
- Path B delivered the biggest reduction in this tranche: render/SSE/status orchestration extraction removed a larger contiguous section from `app.ts` than the earlier helper-only passes.

## Notes

Likely next seams:
- remaining authenticated bootstrap/load orchestration
- remaining branch/pane lifecycle glue
- any residual floating-widget/status-pane routing still embedded in `app.ts`

## Links

- `workitems/50-done/continue-decompose-web-app-shell-below-3k-lines.md`
- `workitems/20-doing/continue-decompose-web-app-shell-toward-500-lines.md`
- `workitems/50-done/continue-decompose-web-app-shell.md`
- `runtime/web/src/app.ts`
- `workitems/20-doing/split-web-styles-monolith.md`
- `workitems/20-doing/codebase-quality-cleanup-2026.md`

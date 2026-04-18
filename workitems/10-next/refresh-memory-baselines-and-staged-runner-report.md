---
id: refresh-memory-baselines-and-staged-runner-report
title: Refresh memory baselines and staged runner report
status: next
priority: low
created: 2026-04-18
updated: 2026-04-18
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - memory
  - performance
  - reporting
  - test-infra
owner: smith
blocked-by: []
---

# Refresh memory baselines and staged runner report

## Summary

The technical runtime-RAM tranche is landed and measured, but the reporting layer was explicitly deferred by user request so the implementation cleanup could finish first.

This ticket captures the deferred non-blocking reporting work:
- refresh the controlled staged test runner report
- update the memory baseline history/log
- regenerate any charts that should reflect the latest post-reload measurements

## Acceptance Criteria

- [ ] The controlled staged test runner report is refreshed against the current runtime.
- [ ] `docs/performance/memory-footprint-history.md` is updated with the latest trustworthy post-reload measurement.
- [ ] Any derived chart/image artifacts that depend on the memory history are regenerated.
- [ ] The updated reporting artifacts are internally consistent with the recorded measurements.

## Implementation Paths

### Path A — Refresh measurement docs
- append the latest trustworthy live-service snapshot to `docs/performance/memory-footprint-history.md`
- call out the matching commit and dirty/clean state clearly

### Path B — Refresh staged runner evidence
- run the controlled staged test path needed for the report refresh
- store or reference the new report artifact location

### Path C — Rebuild derived visuals
- regenerate the memory-progress chart/assets if the history changes
- avoid touching unrelated performance notes

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [ ] State-machine / invariant test
  - [ ] Routing matrix test
  - [ ] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [x] Existing tests to rerun are listed
- [ ] New regression coverage to add is listed
- [ ] Real-browser smoke pass required? If yes, record the surface

### Existing tests to rerun
- whatever focused report-generation or chart-generation checks are relevant
- `bunx tsc --noEmit -p runtime/tsconfig.json` if any TypeScript reporting scripts change

### New regression coverage to add
- only if the reporting scripts themselves change

## Definition of Done

- [ ] Report refreshed
- [ ] Memory history updated
- [ ] Derived charts regenerated if needed
- [ ] Ticket front matter updated

## Updates

### 2026-04-18
- Created as a deferred follow-up because the user explicitly said not to worry about reporting while closing out the runtime-RAM implementation tranche.
- Parent implementation ticket closed after the technical work landed, tests passed, and the post-reload resident-memory remeasurement confirmed the runtime win.

## Links

- Parent ticket: `workitems/50-done/runtime-ram-optimization-opportunities-2026-04-17.md`
- Memory history: `docs/performance/memory-footprint-history.md`
- Controlled runner: `runtime/scripts/controlled-test-runner.ts`
- Chart template: `docs/performance/memory-progress.template.json`

---
id: plan-and-sequence-pi-0.68.0-follow-up-rollout
title: Plan and sequence the Pi 0.68.0 follow-up rollout
status: done
priority: medium
created: 2026-04-21
updated: 2026-04-21
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - planning
  - rollout
  - upstream
owner: smith
blocked-by: []
---

# Plan and sequence the Pi 0.68.0 follow-up rollout

## Summary

The follow-up list from the 0.68.0 audit is already clear. This ticket turns it into a delivery sequence with explicit P1/P2/P3 boundaries so we can land useful product improvements without mixing architecture, extension upgrades, and regression work into one oversized batch.

## Input priority list

### P1 — should do
1. implement web support for `setWorkingIndicator()`
2. adopt it in `smart-compaction`
3. adopt `session_shutdown.reason` in `ssh-core`
4. adopt `session_shutdown.reason` in `azure-openai`
5. add progress indicator support to `proxmox` / `portainer` workflow polling

### P2 — good product improvements
6. add progress indicators to `image-processing`
7. add progress indicators to `office_read` / `office_write`
8. add progress indicators to `autoresearch-supervisor`
9. optionally show structured indicator state in the status panel widget area

### P3 — cleanup / polish
10. selectively adopt `systemPromptOptions` where it reduces brittle prompt logic
11. consider exposing richer fork semantics (`before` vs `at`) in our web/session UX
12. review whether any web export/share surfaces should mirror upstream shortcut/indentation fixes

## Acceptance Criteria

- [x] Produce a recommended delivery order with explicit dependencies.
- [x] Separate must-have implementation work from audit-only and polish work.
- [x] Identify which tickets can be parallelized.
- [x] Identify which tickets should be gated on the web indicator plumbing.
- [x] Record a minimal ship path and a fuller product-improvement path.

## Recommended sequencing

### Phase 1
- core audit ticket
- web working-indicator plumbing
- web progress/status model spec
- **Status:** done

### Phase 2
- built-in extension first adopters:
  - `smart-compaction`
  - `ssh-core`
- **Status:** done

### Phase 3
- packaged integrations first adopters:
  - `proxmox`
  - `portainer`
  - Azure lifecycle improvements
- **Status:** done for `proxmox` / `portainer`; Azure remains tracked in its dedicated audit ticket

### Phase 4
- second-wave adopters:
  - `image-processing`
  - `office-tools`
  - `autoresearch-supervisor`
- **Status:** done in this pass

### Phase 5
- optional polish:
  - `systemPromptOptions`
  - richer web fork semantics
  - export/share follow-ups
- **Status:** deferred/non-blocking

## Deliverables

- ordered checklist with dependency notes
- recommended grouping into reviewable PRs/commits
- links to the concrete workitems in each phase

## Test Plan

- No special test execution required for the planning artifact itself.
- Validation is board hygiene and dependency clarity.

## Definition of Done

- [x] All acceptance criteria satisfied and verified
- [x] Docs and notes updated with links to ticket
- [x] Follow-up tickets created for deferred scope
- [x] Update history complete with evidence
- [x] Ticket front matter updated

## Update history

- 2026-04-21: Reconciled the rollout sequence against the implementation state after landing built-in and packaged progress adoptions.
- 2026-04-21: Marked Phases 1–4 complete for the 0.68.0 upstream implementation scope.
- 2026-04-21: Left only optional polish items deferred because they are not required for the upstream upgrade closure.

## Evidence

- `runtime/test/workitems/upstream-068-audit-summary.md`
- `workitems/20-doing/audit-core-pi-0.68.0-runtime-and-web-surfaces.md`
- `workitems/20-doing/audit-built-in-extensions-for-pi-0.68.0-adoption.md`
- `workitems/20-doing/audit-packaged-integrations-for-pi-0.68.0-adoption.md`

## Links

- Parent: `workitems/20-doing/adopt-pi-coding-agent-0.68.0-followups-and-web-progress-mapping.md`

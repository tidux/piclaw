---
id: audit-retained-session-memory-after-cache-cap
title: Audit retained session memory after cache-cap tranche
status: next
priority: high
created: 2026-04-18
updated: 2026-04-18
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - memory
  - performance
  - runtime
  - sessions
owner: smith
blocked-by: []
---

# Audit retained session memory after cache-cap tranche

## Summary

The first runtime-RAM tranche is now landed and measured.

After restart and settle, the runtime now sits around **276 MB RSS / 275 MB PSS** with **2 cached main sessions** instead of the earlier observed **6-session** reload shape. The next step is to rank what remains inside those retained sessions and identify the biggest remaining per-session contributors.

This ticket should focus on retained live state, not startup-path work:
- session tree/context retention
- resource-loader retained state
- extension/module retained state
- diagnostic buffers
- heap/external contributors that scale with cached sessions

## Acceptance Criteria

- [ ] The biggest retained-memory contributors for a steady-state 1-chat and 2-chat runtime are identified with evidence.
- [ ] At least one ranked breakdown is recorded for:
  - heap-retained state
  - external/native memory
  - session-count-scaled state
- [ ] Any clear next fixes are either implemented in this ticket or split into narrower follow-up tickets.
- [ ] The investigation distinguishes between:
  - unavoidable base runtime cost
  - per-session retained cost
  - temporary measurement noise / transient load
- [ ] A before/after measurement is recorded if a concrete retained-state reduction lands.

## Implementation Paths

### Path A — Rank retained contributors
- capture steady-state snapshots with 1 active chat and 2 active chats
- inspect session-owned objects and long-lived service state
- compare heap/external deltas against runtime counters

### Path B — Check session-scaled retention points
- inspect session tree/context retention
- inspect resource loader / extension caches
- inspect retained tool or diagnostic payloads that survive past a turn

### Path C — Split precise fixes
- if the audit exposes one dominant retained contributor, split a focused implementation ticket instead of overloading this audit ticket

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [ ] Routing matrix test
  - [ ] Interaction scenario test
  - [x] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [x] Existing tests to rerun are listed
- [ ] New regression coverage to add is listed
- [ ] Real-browser smoke pass required? If yes, record the surface

### Existing tests to rerun
- `runtime/test/agent-pool/agent-pool.test.ts`
- `runtime/test/agent-pool/session-manager.test.ts`
- `runtime/test/channels/web/system-metrics.test.ts`
- `bunx tsc --noEmit -p runtime/tsconfig.json`

### New regression coverage to add
- add only if the audit lands a concrete retained-state fix

## Definition of Done

- [ ] Ranked retained-memory findings recorded with evidence
- [ ] Any concrete retained-state fix validated with tests
- [ ] Type check clean
- [ ] Docs/notes updated with links to the findings
- [ ] Follow-up tickets created for anything deferred
- [ ] Ticket front matter updated

## Updates

### 2026-04-18
- Created as a follow-up to `runtime-ram-optimization-opportunities-2026-04-17` after the cache-cap/lightweight-prewarm tranche landed and the post-reload measurement showed the process settling near **276 MB RSS / 275 MB PSS** with **2 cached main sessions**.
- Scope intentionally excludes the reporting/chart refresh work; this ticket is about finding the next retained-state technical win.

## Links

- Parent ticket: `workitems/50-done/runtime-ram-optimization-opportunities-2026-04-17.md`
- RAM audit note: `notes/audits/piclaw-ram-audit-2026-04-17.md`
- Session manager: `runtime/src/agent-pool/session-manager.ts`
- System metrics endpoint: `runtime/src/channels/web/agent/system-metrics.ts`
- Memory history: `docs/performance/memory-footprint-history.md`

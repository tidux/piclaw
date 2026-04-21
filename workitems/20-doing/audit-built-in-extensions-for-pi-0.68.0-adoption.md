---
id: audit-built-in-extensions-for-pi-0.68.0-adoption
title: Audit built-in extensions for Pi 0.68.0 adoption
status: done
priority: high
created: 2026-04-21
updated: 2026-04-21
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - extensions
  - upstream
  - runtime
  - audit
owner: smith
blocked-by: []
---

# Audit built-in extensions for Pi 0.68.0 adoption

## Summary

Piclaw’s built-in extensions are where most of the product value from upstream 0.68.0 can be realized. This ticket audits every built-in extension loaded from `runtime/src/extensions/index.ts`, classifies impact, and lands the first wave of upgrades.

## Audit set

### High-value adopters
- `runtime/src/extensions/smart-compaction.ts`
- `runtime/src/extensions/ssh-core.ts`
- `runtime/src/extensions/autoresearch-supervisor.ts`
- `runtime/src/extensions/image-processing.ts`

### Medium / automatic-benefit extensions
- `runtime/src/extensions/keychain-tools.ts`
- `runtime/src/extensions/tool-activation.ts`
- `runtime/src/extensions/internal-tools.ts`
- `runtime/src/extensions/model-control.ts`

### Low-priority / confirm-no-change extensions
- `runtime/src/extensions/messages-crud.ts`
- `runtime/src/extensions/file-attachments.ts`
- `runtime/src/extensions/runtime-scripts.ts`
- `runtime/src/extensions/sql-introspect.ts`
- `runtime/src/extensions/scheduled-tasks.ts`
- `runtime/src/extensions/workspace-search.ts`
- `runtime/src/extensions/workspace-memory-bootstrap.ts`
- `runtime/src/extensions/dream-maintenance.ts`
- `runtime/src/extensions/send-adaptive-card.ts`
- `runtime/src/extensions/send-dashboard-widget.ts`
- `runtime/src/extensions/open-workspace-file.ts`
- `runtime/src/extensions/exit-process.ts`
- `runtime/src/extensions/ui-theme.ts`

## Acceptance Criteria

- [x] Every built-in extension is classified as:
  - [x] upgrade now
  - [x] audit only
  - [x] no action
- [x] `smart-compaction` adopts structured progress indication.
- [x] `ssh-core` adopts improved shutdown metadata handling and progress/status behavior.
- [x] `autoresearch-supervisor` and `image-processing` are explicitly evaluated for progress/status adoption.
- [x] Hook-driven extensions are checked against upstream built-in tool context-path fixes.
- [x] Tests are added or updated for each extension changed in code.

## Detailed changes to make

### 1. `smart-compaction`
- add `setWorkingIndicator()` states for:
  - no-op compaction
  - selective extraction
  - LLM summarization
  - fallback/completion
- keep `notify()` only for important transitions/errors
- confirm behavior during abort/cancel paths

### 2. `ssh-core`
- adopt `session_shutdown.reason` / `targetSessionFile`
- add structured working indicator for connect/reconnect flows
- review string-based prompt mutation and decide if `systemPromptOptions` adds safety
- verify remote/local tool wrappers still honor session cwd and tool hooks

### 3. `autoresearch-supervisor`
- determine where launch/stop/poll phases should emit working indicator state
- consider status-panel/widget linkage for longer runs

### 4. `image-processing`
- determine which long-running operations should surface progress
- ensure status is bounded and not noisy for quick operations

### 5. Hook-driven extensions
Audit these specifically for upstream automatic wins:
- `keychain-tools`
- `file-attachments`
- any built-in tool post-processing path

## Spec for classification

For each extension, record:
- current upstream-facing hooks used
- whether it benefits from `setWorkingIndicator()`
- whether it benefits from `systemPromptOptions`
- whether it benefits from `session_shutdown` metadata
- required tests
- decision: implement now vs follow-up

## Implementation Paths

### Path A — Classification and the top two upgrades
- audit all built-ins
- implement `smart-compaction` + `ssh-core`
- file follow-ups for the rest

### Path B — Full first-wave adoption
- audit all built-ins
- implement `smart-compaction`, `ssh-core`, `autoresearch-supervisor`, `image-processing`

### Preferred
- Path A if we want tighter review; Path B if the web indicator plumbing already exists

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [ ] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [x] Pane / viewer contract test
  - [ ] Real-browser smoke test

### Existing tests to inspect or extend
- `runtime/test/extensions/extensions-keychain-tools.test.ts`
- `runtime/test/extensions/ssh-core.test.ts`
- any smart-compaction tests / session compaction tests
- autoresearch extension tests if present
- image-processing tests already in runtime

### New tests likely needed
- smart-compaction progress state tests
- ssh-core shutdown-reason tests
- indicator emission tests for long-running built-in extensions

## Definition of Done

- [x] All acceptance criteria satisfied and verified
- [x] Tests added or updated — passing locally
- [x] Type check clean
- [x] Docs and notes updated with links to ticket
- [x] Operational impact assessed
- [x] Follow-up tickets created for deferred scope
- [x] Update history complete with evidence
- [x] Ticket front matter updated

## Update history

- 2026-04-21: Confirmed `smart-compaction` and `ssh-core` upstream adoptions were already landed.
- 2026-04-21: Added bounded working-indicator adoption for `image-processing` and `autoresearch-supervisor`.
- 2026-04-21: Revalidated hook-driven built-ins against the 0.68.0 context-path/tool-context changes; no extra runtime changes required.
- 2026-04-21: Added/ran focused regression coverage in `runtime/test/extensions/upstream-068-builtins-and-integrations.test.ts` plus existing built-in extension suites.

## Evidence

- `runtime/test/workitems/upstream-068-audit-summary.md`
- `runtime/test/extensions/upstream-068-builtins-and-integrations.test.ts`
- `runtime/test/extensions/image-processing.test.ts`
- `runtime/test/extensions/ssh-core.test.ts`
- `runtime/test/extensions/smart-compaction.test.ts`

## Links

- Parent: `workitems/20-doing/adopt-pi-coding-agent-0.68.0-followups-and-web-progress-mapping.md`

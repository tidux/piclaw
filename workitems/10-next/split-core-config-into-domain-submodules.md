---
id: split-core-config-into-domain-submodules
title: Split core/config into domain submodules
status: next
priority: medium
created: 2026-04-13
updated: 2026-04-13
target_release: later
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - quality
  - config
  - refactor
  - runtime
owner: pi
blocked-by: []
---

# Split core/config into domain submodules

## Summary

Reduce `runtime/src/core/config.ts` below the quality umbrella's oversized-file
threshold by extracting coherent config parsing/building logic into a small set
of domain-focused submodules without changing the external config contract.

The current file remains one of the smaller oversized files left in the quality
umbrella, which makes it a good next structural slice: bounded, non-UI, and
directly tied to the umbrella completion criterion that no source file should
exceed 800 lines.

## Problem Statement

`runtime/src/core/config.ts` is still oversized and mixes several concerns:

- environment reading/defaulting
- typed config construction
- domain-specific config sections
- validation/normalization helpers
- outward-facing config exports

That makes the config surface harder to scan and keeps the umbrella's `src >
800 lines` criterion open even though many larger refactors have already landed.

## Desired Behavior

- `runtime/src/core/config.ts` becomes a thin coordinator/entrypoint.
- Domain-specific config parsing/building lives in nearby focused modules.
- The exported config contract remains compatible with existing callers.
- Tests continue to cover current config behavior with no behavioral regressions.
- The main `core/config.ts` file falls below 800 lines.

## Suggested extraction seams

Potential seams to evaluate:

1. **Environment parsing helpers**
   - env bool/int/path parsing
   - normalization/default helpers
2. **Web/runtime config sections**
   - HTTP/web limits
   - auth/session-related config
   - workspace/runtime-path config
3. **Feature/integration config sections**
   - scheduler/background settings
   - remote/interop settings
   - extension-related config seams

The goal is not to maximize abstraction, only to separate clearly cohesive
blocks.

## Acceptance Criteria

- [ ] `runtime/src/core/config.ts` is reduced below 800 lines.
- [ ] Extracted helpers/modules are organized by coherent config concern rather
      than arbitrary splitting.
- [ ] Public config exports and caller behavior remain compatible.
- [ ] Existing config tests are updated or rerun successfully.
- [ ] Type check passes.
- [ ] The ticket update records the final extraction boundaries and validation
      commands.

## Implementation Paths

### Path A — thin coordinator + focused config helpers (recommended)
1. Keep `core/config.ts` as the main import surface.
2. Extract cohesive parsing/building groups into a few adjacent modules.
3. Re-export or compose from the main file so callers do not need churn.
4. Validate behavior with existing config/runtime tests.

**Pros:**
- bounded refactor
- low product risk
- directly improves umbrella completion metrics

**Cons:**
- requires discipline to avoid over-splitting tiny helpers

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [ ] Existing tests to rerun are listed.
- [ ] New regression coverage to add is listed.
- [ ] Real-browser smoke pass required? If yes, record the surface.

### Likely validation
- rerun `core/config`-related tests
- rerun any touched runtime config consumer tests
- `bun run typecheck`
- targeted build/lint if needed

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

### 2026-04-13
- Created as the next concrete structural quality slice after confirming the runtime/server logging cleanup ticket is already done.
- Chosen because `runtime/src/core/config.ts` remains just above the umbrella threshold while being much more bounded than the larger web/UI monoliths.
- This is intended as a low-drama refactor that advances the umbrella's `no file in src exceeds 800 lines` criterion without opening new product scope.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

Prefer extraction by coherent config concern, not by mechanical line-count
sharding.

## Links

- `workitems/20-doing/codebase-quality-cleanup-2026.md`
- `runtime/src/core/config.ts`
- `workitems/50-done/add-tests-core-config-and-keychain.md`
- `workitems/50-done/extract-typed-config-objects.md`

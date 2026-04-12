---
id: add-note-recall-guidance-and-retrieval-preflight
title: Add note-recall guidance and retrieval preflight for memory_query
status: next
priority: high
created: 2026-04-12
updated: 2026-04-12
target_release: next
estimate: M
risk: high
tags:
  - work-item
  - kanban
  - memory
  - search
  - prompt
  - retrieval
  - orchestration
owner: pi
---

# Add note-recall guidance and retrieval preflight for memory_query

## Summary

Make note-memory retrieval reliably used by the model instead of merely being
available.

This ticket updates prompt/bootstrap guidance and, if selected in the first
implementation slice, adds a bounded retrieval preflight for recall-style
prompts so `memory_query` is consulted automatically before the model answers.

## Acceptance Criteria

- [ ] Prompt/bootstrap guidance explicitly tells the model to prefer `memory_query` for note recall.
- [ ] Guidance still preserves `MEMORY.md` / `notes/index.md` as the startup memory map.
- [ ] Guidance clearly distinguishes when to use `memory_query` vs `search_workspace`.
- [ ] If preflight is enabled, it only triggers on bounded recall-style prompts.
- [ ] Preflight attaches only a small top-K set of retrieved note chunks.
- [ ] Preflight degrades gracefully when retrieval is unavailable or empty.
- [ ] Tests pin guidance content and preflight trigger rules.
- [ ] Latency/over-trigger risk is documented and bounded.

## Implementation Paths

### Path A — prompt guidance only (safe first step)
1. Update bootstrap/system guidance.
2. Prefer `memory_query` for note recall tasks.
3. Let the model invoke tools itself.

**Pros:**
- low risk
- easy to land and test
- no extra orchestration complexity

**Cons:**
- does not fully ensure usage

### Path B — prompt guidance + bounded retrieval preflight (recommended target)
1. Update bootstrap/system guidance.
2. Add a bounded preflight for recall-style prompts.
3. Inject top-K note chunks into the turn context before answering.
4. Let the model still use `memory_get` or other tools as needed.

**Pros:**
- best match to the stated goal of ensuring note FTS gets used
- reduces model tool-choice burden

**Cons:**
- orchestration complexity
- latency and false-positive trigger risk if not tuned carefully

## Recommended Path

Use Path B eventually, but only after the chunked lexical subsystem is stable.
If the first landing needs to be safer, start with Path A and keep this ticket
open for the preflight tranche.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [ ] Existing tests to rerun are listed.
- [ ] New regression coverage to add is listed.
- [ ] Real-browser smoke pass required? If yes, record the surface.

### Existing tests to rerun
- [ ] bootstrap/prompt memory tests
- [ ] orchestration tests for agent turn setup if preflight is added there

### New regression coverage to add
- [ ] prompt/bootstrap tests proving note-recall guidance prefers `memory_query`
- [ ] preflight trigger tests for recall-style prompts
- [ ] preflight non-trigger tests for unrelated prompts
- [ ] top-K boundedness tests
- [ ] graceful-empty / retrieval-failure tests
- [ ] orchestration tests proving preflight context does not replace normal startup memory

## Definition of Done

- [ ] Guidance is updated and tested.
- [ ] If preflight is included, trigger rules are explicit and regression-tested.
- [ ] Retrieval preflight remains bounded in scope and cost.
- [ ] Failure/empty cases are safe.
- [ ] Update history records final guidance/preflight decisions and evidence.

## Updates

### 2026-04-12
- Split out from `build-note-memory-query-with-chunked-fts-ranking` as the “ensure usage” slice.
- Captures the key requirement that retrieval should be reliably used by the model, not merely exposed as another tool.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- Guidance alone may still underperform the user goal; preflight is likely the true end state.
- Keep this bounded and explicit to avoid turning every user turn into a search-heavy path.

## Links

- `workitems/10-next/build-note-memory-query-with-chunked-fts-ranking.md`
- `workitems/10-next/expose-memory-query-and-memory-get.md`
- `runtime/src/extensions/workspace-memory-bootstrap.ts`

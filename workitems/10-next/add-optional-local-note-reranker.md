---
id: add-optional-local-note-reranker
title: Add optional small local reranker seam for note-memory retrieval
status: next
priority: medium
created: 2026-04-12
updated: 2026-04-12
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - memory
  - search
  - reranker
  - local-model
owner: pi
---

# Add optional small local reranker seam for note-memory retrieval

## Summary

Add a feature-flagged local reranker seam for note-memory retrieval so the
lexical candidate set can be optionally reranked by a small local model later,
without making model availability a requirement for the first retrieval slice.

This ticket is intentionally optional and should land after the lexical system
is already useful.

## Acceptance Criteria

- [ ] A feature flag or config gate exists for local reranking.
- [ ] The reranker operates only on a bounded top-N candidate set.
- [ ] The lexical retrieval path remains the default and works fully without the reranker.
- [ ] Unavailable model/runtime conditions degrade gracefully to lexical ranking.
- [ ] Tests pin enabled/disabled/unavailable behavior.
- [ ] The seam is generic enough to swap implementations later.
- [ ] Operational notes document resource/latency expectations.

## Implementation Paths

### Path A — abstract reranker interface + no-op fallback (recommended)
1. Add a small reranker interface.
2. Add a no-op lexical fallback implementation.
3. Add one optional local-model-backed implementation behind a flag.

**Pros:**
- clean seam
- safe default behavior
- easy to test disabled/unavailable states

**Cons:**
- defers choosing the exact local model/runtime

### Path B — hardwire one local reranker implementation first
1. Pick a specific runtime/model.
2. Integrate directly into note retrieval.

**Pros:**
- faster path to end-to-end local reranking

**Cons:**
- more coupling
- harder to change later
- riskier before lexical retrieval is stable

## Recommended Path

Use Path A.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [ ] Routing matrix test
  - [ ] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [ ] Existing tests to rerun are listed.
- [ ] New regression coverage to add is listed.
- [ ] Real-browser smoke pass required? If yes, record the surface.

### Existing tests to rerun
- [ ] note-memory ranking tests
- [ ] retrieval tool contract tests if score metadata changes after reranking

### New regression coverage to add
- [ ] flag-disabled tests
- [ ] model-unavailable fallback tests
- [ ] top-N bound tests
- [ ] rerank hook interface tests
- [ ] score/explain metadata tests when reranker is enabled

## Definition of Done

- [ ] Reranker seam exists and is documented.
- [ ] Default lexical-only path remains unchanged and tested.
- [ ] Enabled/disabled/unavailable states are deterministic.
- [ ] Update history records chosen interface and fallback evidence.

## Updates

### 2026-04-12
- Split out from `build-note-memory-query-with-chunked-fts-ranking` as the optional local-model enhancement slice.
- Kept intentionally non-blocking so the first retrieval landing remains embedding-free and operationally simple.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- This should improve ranking quality later, not become a prerequisite for getting useful note retrieval in place.
- Prefer an interface seam over hardwiring a specific local runtime too early.

## Links

- `workitems/10-next/build-note-memory-query-with-chunked-fts-ranking.md`
- `workitems/10-next/implement-memory-ranking-priors-and-fusion.md`

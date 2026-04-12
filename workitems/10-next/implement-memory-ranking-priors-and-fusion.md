---
id: implement-memory-ranking-priors-and-fusion
title: Implement memory-tier priors, hybrid lexical scoring, and rank fusion for note retrieval
status: next
priority: high
created: 2026-04-12
updated: 2026-04-12
target_release: next
estimate: L
risk: high
tags:
  - work-item
  - kanban
  - memory
  - search
  - ranking
  - scoring
owner: pi
---

# Implement memory-tier priors, hybrid lexical scoring, and rank fusion for note retrieval

## Summary

Implement the ranking layer that makes note-memory retrieval behave like PiClaw
memory instead of plain BM25 over note chunks.

This ticket covers:
- memory-tier priors
- note-kind priors
- heading/title/path boosts
- recency boosts for daily notes
- exact-match bonuses
- deterministic reranking heuristics
- rank fusion / blended scoring across lexical candidate lists
- explain/debug metadata for why a result ranked where it did

## Acceptance Criteria

- [ ] Ranking uses more than raw FTS5 BM25.
- [ ] Memory-tier priors are implemented for canonical memory files.
- [ ] Note-kind priors are implemented and documented.
- [ ] Heading/title/path matches influence ranking explicitly.
- [ ] Recent daily notes can receive a recency-aware boost.
- [ ] Exact phrase / exact token matches can outrank weak broad matches.
- [ ] The ranking approach is deterministic.
- [ ] Rank fusion or weighted score blending is implemented and covered by tests.
- [ ] Results expose enough explain metadata to debug ranking decisions.
- [ ] Heuristic reranking improves candidate quality without requiring a model.

## Implementation Paths

### Path A — weighted lexical scoring + deterministic rerank (recommended)
1. Build multiple lexical candidate lists/signals.
2. Blend or fuse them deterministically.
3. Apply explicit reranking heuristics to the top-N.
4. Return signal traces for tests/debugging.

**Pros:**
- explainable
- easy to test
- no model dependency
- matches the first-slice goal

**Cons:**
- more tuning work than plain BM25

### Path B — minimal priors only
1. Keep BM25 dominant.
2. Add a few path/recency boosts.

**Pros:**
- faster to land

**Cons:**
- likely underdelivers on the main goal
- weaker distinction between curated memory and generic notes

## Recommended Path

Use Path A.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [ ] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [ ] Existing tests to rerun are listed.
- [ ] New regression coverage to add is listed.
- [ ] Real-browser smoke pass required? If yes, record the surface.

### Existing tests to rerun
- [ ] note-memory query tests from the retrieval API ticket
- [ ] workspace/bootstrap tests if note-kind priors share classification helpers

### New regression coverage to add
- [ ] ranking tests that prove canonical memory files outrank weaker generic matches
- [ ] ranking tests for preference/project/feedback note-kind priors
- [ ] recency-bias tests for daily notes
- [ ] exact-match bonus tests
- [ ] deterministic fusion tests over multiple candidate lists
- [ ] explain-metadata snapshot tests for representative queries
- [ ] heuristic rerank tests for close-score cases

## Definition of Done

- [ ] Ranking rules are implemented and documented.
- [ ] Signal weights/priors are explicit in code/tests rather than implicit magic.
- [ ] Ranking behavior is deterministic and regression-tested.
- [ ] Explain metadata is stable enough for debugging and future UI use.
- [ ] Update history records scoring decisions and test evidence.

## Updates

### 2026-04-12
- Split out from `build-note-memory-query-with-chunked-fts-ranking` as the ranking-quality slice.
- Locked the first implementation to deterministic lexical ranking plus priors/fusion/reranking heuristics, with no mandatory model dependency.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- Keep the first scoring model explainable; opaque tuning would make retrieval trust harder.
- Priors must improve recall quality without making the system ignore strong evidence in non-memory notes.

## Links

- `workitems/10-next/build-note-memory-query-with-chunked-fts-ranking.md`
- `workitems/10-next/add-note-chunk-index-and-schema.md`
- `workitems/10-next/expose-memory-query-and-memory-get.md`
- `notes/memory/MEMORY.md`
- `notes/memory/current-state.md`
- `notes/memory/recent-context.md`

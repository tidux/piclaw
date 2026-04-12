---
id: expose-memory-query-and-memory-get
title: Expose memory_query and memory_get for note-memory retrieval
status: next
priority: high
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
  - retrieval
  - tools
owner: pi
---

# Expose memory_query and memory_get for note-memory retrieval

## Summary

Add a purpose-built note-memory tool surface so the model can retrieve notes by
section/chunk rather than relying on generic file-oriented `search_workspace`
plus ad hoc follow-up reads.

This ticket defines and implements:
- `memory_query`
- `memory_get`
- stable result formats
- explain/debug metadata needed for ranking and verification

It assumes the note chunk index/schema exists or lands in parallel.

## Acceptance Criteria

- [ ] `memory_query` is registered as an agent tool.
- [ ] `memory_get` is registered as an agent tool.
- [ ] `memory_query` returns ranked chunk-level note results, not generic file rows.
- [ ] Each `memory_query` result includes path, heading context, line range, note kind, snippet, score, and ranking signal metadata.
- [ ] `memory_get` can retrieve by `chunk_id`.
- [ ] `memory_get` can retrieve by path + line range or equivalent stable selector.
- [ ] Tool output is concise enough for agent use but rich enough for debugging.
- [ ] Failure modes are explicit and deterministic (not found, stale index, invalid selector, etc.).
- [ ] Tests pin the tool contracts and fallback behavior.

## Implementation Paths

### Path A — dedicated extension + dedicated retrieval module (recommended)
1. Add retrieval functions in a note-memory module.
2. Add an extension that registers `memory_query` and `memory_get`.
3. Return structured `details` payloads and concise text summaries.

**Pros:**
- clean, explicit contract for the model
- easy to document and test
- keeps generic workspace search untouched

**Cons:**
- new tool surface to maintain

### Path B — add note mode to `search_workspace`
1. Add a `mode=notes` or chunked mode.
2. Use one tool with dual semantics.

**Pros:**
- fewer user-visible tools

**Cons:**
- worse affordance for the model
- harder to enforce a note-first retrieval contract
- muddier result semantics

## Recommended Path

Use Path A.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [ ] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [x] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [ ] Existing tests to rerun are listed.
- [ ] New regression coverage to add is listed.
- [ ] Real-browser smoke pass required? If yes, record the surface.

### Existing tests to rerun
- [ ] `runtime/test/agent-pool/agent-pool-tools.test.ts`
- [ ] tool activation / extension registration tests if the new tools are builtin extensions

### New regression coverage to add
- [ ] `memory_query` contract tests with ranked chunk results
- [ ] `memory_query` empty-state / invalid-query tests
- [ ] `memory_get` retrieval by `chunk_id`
- [ ] `memory_get` retrieval by path + line range or equivalent selector
- [ ] result-format tests that pin signal/explain metadata fields
- [ ] regression tests that ensure generic `search_workspace` still behaves unchanged

## Definition of Done

- [ ] `memory_query` and `memory_get` are documented, registered, and tested.
- [ ] Result schemas are stable enough for prompt guidance and future UI/debug use.
- [ ] Tool summaries are concise and usable by the model.
- [ ] Structured details payloads contain enough data for inspection and future widgets.
- [ ] Update history records the final contract and test evidence.

## Updates

### 2026-04-12
- Split out from `build-note-memory-query-with-chunked-fts-ranking` as the note-memory retrieval API slice.
- Locked the intent to dedicated `memory_query` / `memory_get` tools rather than overloading `search_workspace`.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- Keep room for future UI affordances, but do not make a UI dependency part of the first contract.
- Returning `why` / signal metadata is important for tuning ranking later.

## Links

- `workitems/10-next/build-note-memory-query-with-chunked-fts-ranking.md`
- `workitems/10-next/add-note-chunk-index-and-schema.md`
- `runtime/src/extensions/workspace-search.ts`

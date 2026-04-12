---
id: add-note-chunk-index-and-schema
title: Add note chunk index, schema, and incremental refresh for note memory
status: next
priority: high
created: 2026-04-12
updated: 2026-04-12
target_release: next
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - memory
  - search
  - fts
  - notes
  - schema
owner: pi
---

# Add note chunk index, schema, and incremental refresh for note memory

## Summary

Build the storage and indexing foundation for note-memory retrieval.

This ticket covers the chunk parser, note-chunk schema, section-aware FTS5
index, note-kind classification, and incremental refresh/stale-marking behavior
for `notes/`.

It does **not** cover the final retrieval tool surface (`memory_query` /
`memory_get`) or the full ranking layer; those are separate follow-up tickets.

## Acceptance Criteria

- [ ] A dedicated note-chunk storage schema exists in SQLite.
- [ ] Notes under `notes/` are indexed as chunks rather than only whole files.
- [ ] Chunking preserves heading ancestry and line ranges.
- [ ] Oversized sections are split further by paragraph blocks.
- [ ] Fenced code blocks are never split mid-block.
- [ ] Each chunk stores note metadata including path, title, heading path, note kind, and timestamps.
- [ ] A dedicated FTS5 table exists for note chunks.
- [ ] Index refresh is incremental for normal note edits.
- [ ] Note add/edit/delete flows mark the note-memory index stale or refresh affected files only.
- [ ] Automated tests pin chunk parsing, metadata derivation, and refresh behavior.

## Implementation Paths

### Path A — dedicated `memory-search` module with its own schema (recommended)
1. Add a dedicated note-memory indexing module.
2. Add note chunk tables + FTS table.
3. Implement markdown-aware chunk parsing and note-kind classification.
4. Add stale tracking / incremental refresh helpers for `notes/`.

**Pros:**
- keeps note-memory logic separate from generic workspace search
- easiest to tune and test independently
- clean base for follow-up retrieval tools

**Cons:**
- duplicates some indexing patterns already present in workspace search until shared extraction happens

### Path B — extend generic workspace search internals
1. Reuse `workspace-search.ts` internals.
2. Add chunk mode for notes only.
3. Share refresh/staleness behavior directly.

**Pros:**
- less immediate duplication

**Cons:**
- higher risk of muddying generic file search responsibilities
- harder to evolve note-specific semantics cleanly

## Recommended Path

Use Path A.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [ ] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [ ] Existing tests to rerun are listed.
- [ ] New regression coverage to add is listed.
- [ ] Real-browser smoke pass required? If yes, record the surface.

### Existing tests to rerun
- [ ] workspace-search indexing tests under `runtime/test/`
- [ ] bootstrap tests touching note-memory files if shared helpers move

### New regression coverage to add
- [ ] chunk parser tests for headings / subheadings / heading ancestry
- [ ] chunk parser tests for oversized section splitting
- [ ] chunk parser tests for fenced code block preservation
- [ ] note-kind classification tests for `notes/memory/*`, `notes/preferences/*`, `notes/daily/*`, and generic topic notes
- [ ] incremental refresh tests for note add/edit/delete
- [ ] stale-marking tests for affected note paths only

## Definition of Done

- [ ] Schema/migration lands cleanly.
- [ ] Chunk parser is implemented and covered by tests.
- [ ] Incremental refresh behavior is defined and tested.
- [ ] Note metadata fields are stable enough for retrieval/ranking follow-ups.
- [ ] No regression to generic `search_workspace` behavior.
- [ ] Update history includes schema and test evidence.

## Updates

### 2026-04-12
- Split out from `build-note-memory-query-with-chunked-fts-ranking` as the storage/indexing foundation slice.
- Scope intentionally limited to chunk parsing, schema, note classification, and incremental refresh so later retrieval/ranking tickets can build on a stable base.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- Keep line ranges stable and deterministic; later `memory_get` depends on them.
- Prefer reusable metadata derivation over hardcoded path checks scattered across retrieval code.

## Links

- `workitems/10-next/build-note-memory-query-with-chunked-fts-ranking.md`
- `runtime/src/workspace-search.ts`
- `runtime/src/extensions/workspace-memory-bootstrap.ts`
- `notes/memory/MEMORY.md`

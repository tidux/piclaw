---
id: build-note-memory-query-with-chunked-fts-ranking
title: Build note-memory retrieval with chunked FTS, ranking, and memory_query / memory_get
status: next
priority: high
created: 2026-04-12
updated: 2026-04-12
target_release: next
estimate: XL
risk: high
tags:
  - work-item
  - kanban
  - memory
  - search
  - fts
  - notes
  - retrieval
  - local-model
owner: pi
---

# Build note-memory retrieval with chunked FTS, ranking, and memory_query / memory_get

## Summary

Implement a notes-first retrieval subsystem that lets the model reliably use
workspace FTS across the memory corpus, especially `notes/`, without depending
on embeddings or external retrieval services.

The current setup is good at:
- compact startup context via `notes/memory/MEMORY.md`
- curated durable memory via `current-state.md`, `recent-context.md`, `user.md`, `feedback.md`, `project.md`, and `reference.md`
- generic file-level `search_workspace` over notes + skills

But it is still weak at the exact problem the user wants solved:
- retrieving the best note sections rather than whole files
- ranking matches according to the memory hierarchy instead of pure BM25 alone
- making note recall reliable for the model instead of optional
- giving the model a narrow, purpose-built retrieval surface instead of generic file search

This ticket defines and implements a QMD-inspired but PiClaw-native retrieval
layer with the following properties:
- chunked note index
- section-aware FTS5
- context hierarchy
- hybrid lexical scoring
- memory-tier priors
- rank fusion
- reranking heuristics
- `memory_query` / `memory_get`
- optional small local reranker behind a feature flag

## Problem Statement

Today, the model can use notes, but only inconsistently.

Current behavior depends on the model remembering to:
1. consult startup memory files
2. call `search_workspace`
3. interpret whole-file snippets
4. follow up with `read`

That yields acceptable results for exact strings and filenames, but weaker
results for:
- section-level recall
- daily-note recall across many days
- preference / project / feedback lookups
- “what did we decide about X?” style queries
- note recall when the model does not proactively choose the search tool

The goal is to make note retrieval a first-class memory subsystem rather than a
best-effort side effect of generic workspace search.

## Goals

### Primary goals

- Ensure the model can leverage FTS effectively across the workspace, at least `notes/`.
- Improve retrieval granularity from whole-file matches to section/chunk matches.
- Rank note results according to PiClaw memory structure, not only lexical score.
- Expose a minimal retrieval API tailored to note memory: `memory_query` and `memory_get`.
- Preserve the existing curated memory bootstrap (`MEMORY.md`, `notes/index.md`) as the startup layer.

### Secondary goals

- Keep the first implementation fully local and embedding-free.
- Reuse existing SQLite/FTS5 infrastructure where practical.
- Leave a clean seam for an optional small local reranker later.
- Avoid replacing `search_workspace`; instead, add a purpose-built memory layer beside it.

## Non-goals

- Replacing Dream / AutoDream memory maintenance.
- Replacing `search_workspace` for generic repo or skill lookups.
- Indexing the full message database into this note subsystem in the first slice.
- Adding mandatory embeddings or vector search in the first slice.
- Solving all semantic retrieval problems before lexical/chunked recall is solid.

## Target capability set

The finished subsystem should attain all of the following:

- [ ] Chunked FTS
- [ ] Context hierarchy
- [ ] Rank fusion
- [ ] Priors
- [ ] Reranking heuristics
- [ ] Optional small local reranker
- [ ] Chunked note index
- [ ] Section-aware FTS5
- [ ] Memory-tier priors
- [ ] Hybrid lexical scoring
- [ ] `memory_query`
- [ ] `memory_get`

## Proposed retrieval model

### 1. Indexed unit: note chunks

Do not search whole note files as the primary unit.

Index note chunks with preserved section metadata.

Each chunk should store at minimum:
- `chunk_id`
- `path`
- `title`
- `heading_path`
- `line_start`
- `line_end`
- `content`
- `note_kind`
- `mtime_ms`
- `size_bytes`
- `day` (for daily notes, optional)
- `tags_json` (optional if cheaply derivable)

Recommended `note_kind` values:
- `memory-index`
- `memory-state`
- `memory-recent`
- `memory-user`
- `memory-feedback`
- `memory-project`
- `memory-reference`
- `preference`
- `daily`
- `topic`
- `other`

### 2. Chunking strategy

Chunk notes by Markdown structure.

Rules:
- split on heading boundaries first
- preserve heading ancestry as `heading_path`
- keep small sections whole
- split oversized sections further by paragraph blocks
- never split inside fenced code blocks
- preserve line ranges for follow-up reads

Example:
- `notes/memory/project.md#Mobile viewport rollback`
- `notes/preferences/agent.md#Agent Preferences`
- `notes/daily/2026-04-10.md#Release work`

### 3. Section-aware FTS5

Create a dedicated FTS table for note chunks.

Suggested searchable fields:
- chunk content
- title
- heading path
- path
- note kind

This should support:
- snippet generation from chunk content
- heading/path-aware boosts
- file-to-section drill-down via `memory_get`

### 4. Context hierarchy

Encode PiClaw’s existing memory hierarchy directly into ranking and result presentation.

Context levels to preserve:
- startup memory index (`MEMORY.md`)
- compact memory summaries (`current-state.md`, `recent-context.md`)
- durable preference/project/reference memory
- daily notes
- topic notes / reference notes

Results should report both the file path and the effective memory tier.

### 5. Hybrid lexical scoring

The first slice should remain lexical, but richer than plain BM25.

Candidate scoring signals:
- FTS5 BM25 score
- exact phrase match bonus
- heading match bonus
- title/path match bonus
- note-kind prior
- memory-tier prior
- recency bonus (especially for daily notes)
- startup-memory boost for canonical files
- optional current-topic / current-chat lexical overlap bonus

### 6. Rank fusion

Use a transparent fusion model over multiple lexical candidate lists, for example:
- content FTS results
- heading/title/path-biased results
- exact-match-biased results
- recent-daily biased results

Implementation can use either:
- reciprocal-rank fusion, or
- weighted score blending plus final sort

The chosen method must be explainable in tool output/tests.

### 7. Reranking heuristics

Before any local model reranker exists, rerank top candidates using deterministic heuristics.

Examples:
- promote exact section-heading matches
- promote preference/project/feedback memory for policy-style questions
- promote recent daily notes for “recent / yesterday / last week” queries
- demote stale or generic notes when a strong memory-tier hit exists
- prefer shorter, tighter chunks when scores are otherwise close

### 8. Optional small local reranker

Add a feature-flagged seam for a tiny local reranker later.

Requirements:
- optional, off by default in the first landing
- bounded to top-N candidate chunks only
- must degrade gracefully when no local model/runtime is available
- must not be required for the lexical first slice to be useful

### 9. Retrieval tool surface

#### `memory_query`
Returns ranked note chunks, not generic file rows.

Expected output fields:
- `chunk_id`
- `path`
- `heading_path`
- `line_start`
- `line_end`
- `note_kind`
- `snippet`
- `score`
- `signals` / `why`

#### `memory_get`
Fetches the full chunk or surrounding note section by:
- `chunk_id`
- path + heading
- path + line range

This lets the model do:
1. `memory_query`
2. `memory_get` for the best candidates
3. answer using retrieved evidence

## First implementation slice (recommended)

Implement the lexical/chunked subsystem first.

### Slice A — chunked note retrieval core
- note chunk parser/indexer
- note chunk FTS table
- memory-tier metadata
- `memory_query`
- `memory_get`
- deterministic ranking priors + reranking heuristics
- incremental refresh / stale marking

### Slice B — retrieval preflight
After Slice A is stable, add automatic retrieval preflight for note-recall prompts.

Examples of likely triggers:
- “what did we say about ...”
- “do you remember ...”
- “check notes for ...”
- “what was the plan for ...”
- “what did I prefer about ...”

### Slice C — optional local reranker
- feature flag
- top-N rerank only
- metrics / test coverage for fallback behavior

## Recommended architecture

### Suggested runtime files

Likely new/changed surfaces:
- `runtime/src/workspace-search.ts` — either extended carefully or left generic while a new memory-specific module is introduced
- `runtime/src/memory-search.ts` — recommended dedicated module for chunked note indexing/search
- `runtime/src/extensions/workspace-search.ts` — keep generic `search_workspace`
- `runtime/src/extensions/memory-search.ts` — recommended new extension exposing `memory_query` / `memory_get`
- `runtime/src/extensions/workspace-memory-bootstrap.ts` — update retrieval policy guidance
- `runtime/src/db/*` — schema/migration support for chunk tables and FTS
- note write/edit paths — mark note-memory index stale on changes under `notes/`

### Suggested tables

```text
note_chunks
- chunk_id TEXT PRIMARY KEY
- path TEXT NOT NULL
- title TEXT
- heading_path TEXT
- line_start INTEGER NOT NULL
- line_end INTEGER NOT NULL
- note_kind TEXT NOT NULL
- day TEXT
- tags_json TEXT
- content TEXT NOT NULL
- mtime_ms INTEGER NOT NULL
- size_bytes INTEGER NOT NULL
- indexed_at TEXT NOT NULL

note_chunks_fts
- content
- title
- heading_path
- path
- note_kind
```

Optional metadata table if needed:

```text
note_index_status
- scope
- state
- last_indexed_at
- last_error
- indexed_chunk_count
- updated_at
```

## Acceptance Criteria

### Core retrieval
- [ ] Notes under `notes/` are indexed as chunks rather than only whole files.
- [ ] Chunking preserves heading ancestry and line ranges.
- [ ] Oversized sections are split further without breaking fenced code blocks.
- [ ] A dedicated section-aware FTS5 index exists for note chunks.
- [ ] `memory_query` returns ranked chunk results with snippet, note path, heading context, line range, and score.
- [ ] `memory_get` returns the selected chunk or surrounding section reliably.

### Ranking and context
- [ ] Ranking uses more than raw BM25 alone.
- [ ] Memory-tier priors are implemented and documented.
- [ ] Recent daily notes can receive a recency-aware boost.
- [ ] Heading/title/path matches influence ranking explicitly.
- [ ] The chosen fusion/scoring approach is deterministic and explainable in tests.
- [ ] Results expose enough signal metadata for debugging why a chunk ranked highly.

### Integration
- [ ] `search_workspace` remains available for generic workspace lookups.
- [ ] The startup memory bootstrap still uses `MEMORY.md` / `notes/index.md` as the first-layer map.
- [ ] The system prompt / retrieval guidance tells the model to prefer `memory_query` for note recall.
- [ ] Note edits mark the note-memory index stale or refresh incrementally.

### Optional/local reranker seam
- [ ] A feature-flagged hook exists for an optional small local reranker.
- [ ] The system behaves correctly when the reranker is disabled or unavailable.
- [ ] The first release is still useful without the reranker.

### Operational quality
- [ ] Index refresh cost is bounded and incremental for normal note edits.
- [ ] Retrieval works on the existing workspace note hierarchy without migration of human-authored note paths.
- [ ] Failure modes degrade to deterministic lexical results rather than no results.
- [ ] Documentation / notes clearly explain the memory-query retrieval model.

## Implementation Paths

### Path A — dedicated note-memory subsystem beside `search_workspace` (recommended)
1. Keep `search_workspace` generic and file-oriented.
2. Introduce a dedicated note-memory indexer + query module.
3. Add `memory_query` / `memory_get` as purpose-built note tools.
4. Add prompt/bootstrap guidance that prefers these tools for note recall.

**Pros:**
- clear separation of responsibilities
- easiest to tune note-specific ranking/priors
- lower risk of regressing generic workspace search
- cleaner future seam for optional reranker

**Cons:**
- additional schema/module/tool surface
- some duplicated indexing logic unless extracted cleanly

### Path B — extend `search_workspace` into a dual-mode chunked search system
1. Refactor `search_workspace` internals to support file-level and chunk-level indexing.
2. Add note-specific query modes on top.
3. Reuse the existing extension/tool registration path.

**Pros:**
- fewer distinct modules in the short term
- shared indexing foundation

**Cons:**
- muddier tool semantics
- higher regression risk for generic workspace search
- may make note-specific ranking harder to reason about

### Path C — umbrella ticket plus smaller ready slices
Split this umbrella into execution tickets after the design is locked:
1. chunk parser + schema
2. `memory_query` / `memory_get`
3. ranking priors + fusion
4. prompt/preflight integration
5. optional local reranker

**Pros:**
- safer delivery
- easier test isolation
- better board visibility

**Cons:**
- more coordination overhead

## Recommended Path

Use **Path A** for architecture and **Path C** for execution.

That means this ticket should guide implementation as a refined umbrella, but
actual coding may still be split into smaller tickets once the schema and first
slice boundaries are confirmed.

## Execution tickets split out

1. **Add chunked note indexing schema and parser**
   - `workitems/10-next/add-note-chunk-index-and-schema.md`
2. **Expose `memory_query` and `memory_get`**
   - `workitems/10-next/expose-memory-query-and-memory-get.md`
3. **Implement memory-tier priors and hybrid lexical scoring**
   - `workitems/10-next/implement-memory-ranking-priors-and-fusion.md`
4. **Add note-recall prompt/bootstrap guidance and optional retrieval preflight**
   - `workitems/10-next/add-note-recall-guidance-and-retrieval-preflight.md`
5. **Add optional small local reranker seam**
   - `workitems/10-next/add-optional-local-note-reranker.md`

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
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
- [ ] workspace-search tests under `runtime/test/` touching index refresh / workspace service behavior
- [ ] message / search-related tests if shared FTS helpers are touched
- [ ] startup/bootstrap tests touching `workspace-memory-bootstrap`

### New regression coverage to add
- [ ] Chunk parser tests for headings, paragraph splits, and fenced code preservation
- [ ] Schema/index refresh tests for note add/edit/delete flows
- [ ] `memory_query` ranking tests that pin memory-tier priors
- [ ] `memory_query` result-format tests that include score/signal metadata
- [ ] `memory_get` retrieval tests by chunk id and line range
- [ ] Deterministic fusion tests for ties / mixed signal cases
- [ ] Prompt/bootstrap tests asserting note-recall guidance favors `memory_query`
- [ ] Optional reranker fallback tests proving lexical behavior stays correct when disabled

### Regression classes and why they apply
- **Bug replay / known-regression test**
  - this work is explicitly motivated by unreliable note recall and weak section-level retrieval
- **State-machine / invariant test**
  - indexing freshness, stale marking, and incremental refresh need invariants
- **Routing matrix test**
  - tool behavior must distinguish note-only retrieval from generic workspace search cleanly
- **Interaction scenario test**
  - multi-step `memory_query` → `memory_get` retrieval should be pinned as a supported agent workflow
- **Pane / viewer contract test**
  - if result rows gain links/open-file affordances later, retrieval contracts must stay stable across UI surfaces

## Definition of Done

- [ ] Note chunk schema and parser are implemented or explicitly split into a child ticket with this umbrella updated.
- [ ] `memory_query` and `memory_get` contract is finalized and documented.
- [ ] Section-aware chunk retrieval is covered by automated tests.
- [ ] Memory-tier priors and hybrid lexical scoring are implemented and validated.
- [ ] Retrieval guidance is updated so the model prefers note-memory search for recall tasks.
- [ ] Operational freshness/staleness behavior is defined and tested.
- [ ] Optional reranker seam is defined, even if left disabled for the first landing.
- [ ] Follow-up tickets exist for any deferred scope.
- [ ] Update history records the chosen architecture, schema decisions, and test evidence.
- [ ] Ticket is refined enough to drive implementation without re-discovering the problem statement.

## Updates

### 2026-04-12
- Split the umbrella into five execution tickets in `10-next/`:
  - `add-note-chunk-index-and-schema`
  - `expose-memory-query-and-memory-get`
  - `implement-memory-ranking-priors-and-fusion`
  - `add-note-recall-guidance-and-retrieval-preflight`
  - `add-optional-local-note-reranker`
- The umbrella now serves as the architectural parent and rollout map rather than the smallest executable slice.
- Recommended `doing` order:
  1. chunk index + schema
  2. retrieval tools
  3. ranking priors + fusion
  4. guidance / preflight
  5. optional reranker
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)
- Gap: decide whether the first active implementation ticket should be promoted now or after one more refinement pass on schema details.

### 2026-04-12
- Created from request to ensure the model can leverage FTS across the workspace, especially `notes/`, using a PiClaw-native memory retrieval layer rather than generic file search alone.
- Locked the target capability set to: chunked FTS, context hierarchy, rank fusion, priors, reranking heuristics, optional small local reranker, chunked note index, section-aware FTS5, memory-tier priors, hybrid lexical scoring, and `memory_query` / `memory_get`.
- Chosen planning direction:
  - architecture: dedicated note-memory subsystem beside `search_workspace`
  - rollout: lexical/chunked first, optional local reranker later
  - preserve Dream/bootstrap memory as the canonical startup layer
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)
- Gap: confirm whether this should stay as one umbrella in `10-next/` or be split immediately into execution tickets before entering `20-doing/`.

## Notes

- This work is deliberately inspired by the useful parts of QMD, but should remain PiClaw-native and note-hierarchy-aware.
- The first slice should be embedding-free and fully local.
- The most important success criterion is not just retrieval quality in theory; it is that the model actually uses the retrieval path reliably.
- Automatic retrieval preflight is likely worthwhile, but should be staged after the chunked lexical subsystem is proven.
- Prefer a new note-memory module over overloading `search_workspace` until/unless shared extraction naturally emerges.

## Links

- `workitems/10-next/add-note-chunk-index-and-schema.md`
- `workitems/10-next/expose-memory-query-and-memory-get.md`
- `workitems/10-next/implement-memory-ranking-priors-and-fusion.md`
- `workitems/10-next/add-note-recall-guidance-and-retrieval-preflight.md`
- `workitems/10-next/add-optional-local-note-reranker.md`
- `runtime/src/workspace-search.ts`
- `runtime/src/extensions/workspace-search.ts`
- `runtime/src/extensions/workspace-memory-bootstrap.ts`
- `notes/memory/MEMORY.md`
- `notes/index.md`
- `../tmp/qmd-vs-piclaw-memory-assessment-2026-04-12.md`
- `workitems/regression-test-planning-reference.md`

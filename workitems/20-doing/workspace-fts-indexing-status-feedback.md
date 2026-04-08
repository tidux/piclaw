---
id: workspace-fts-indexing-status-feedback
title: Add workspace FTS indexing status and feedback in the UI
status: doing
priority: medium
created: 2026-03-12
updated: 2026-04-08
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web-ui
  - workspace
  - search
  - fts
owner: pi
---

# Add workspace FTS indexing status and feedback in the UI

## Summary

Expose workspace full-text indexing state clearly so users can tell whether
search results are fresh, incomplete, or still being indexed.

## Current Behavior

- There is no dedicated UI for workspace FTS search yet beyond the `/fts` / `/search` command path and the `search_workspace` tool.
- The search icon in chat is for SQLite/chat search, not workspace FTS search.
- Workspace FTS indexing is currently **search-triggered**, not background-driven:
  - `searchWorkspace()` defaults `refresh=true`
  - indexing runs synchronously as part of the search request
  - no web-facing status endpoint currently exposes indexing progress, freshness, or failure state
- Indexed content currently comes from `notes/` and `.pi/skills/` by default (`scope: notes | skills | all`).
- Incremental refresh skips unchanged files by `mtime_ms` + `size_bytes`, drops oversized files, and removes deleted files within scanned roots.
- Missing or partial search results can look like search failure rather than indexing lag because the UI has no explicit indexing/freshness surface.

## Desired Behavior

- The workspace explorer header shows the current indexing state.
- Explicit states should include:
  - never indexed
  - indexing
  - ready
  - stale
  - failed
- When workspace FTS search gains a dedicated UI, search results that may be incomplete should show a small inline warning rather than a heavy status panel.
- A visible refresh/reindex action should exist in the UI, with exact placement still to be finalised.
- The workspace FTS search UX itself still needs to be defined; this ticket should capture both the status feedback requirement and that open UX-design step.
- Copy should stay plain and user-facing rather than operator-heavy or overly technical.
- Status should be accurate enough to support troubleshooting without requiring logs or SQL inspection.

## Acceptance Criteria

- [ ] Workspace explorer header exposes a clear indexing state.
- [ ] Supported states include: never indexed, indexing, ready, stale, and failed.
- [ ] The backend exposes a small status snapshot for workspace FTS indexing (at minimum current state, last successful index time, and scope/root coverage).
- [ ] A visible refresh/reindex action exists and shows visible state changes while running.
- [ ] Failure/stale states are distinguishable from "no matches found".
- [ ] Search surfaces show a small inline warning when results may be incomplete due to indexing state. *(May ship after the initial status endpoint if dedicated workspace-search UI is still absent.)*
- [ ] Status text stays plain and user-facing.
- [ ] No regressions in existing workspace search behavior.

## Relevant Areas

- `runtime/src/workspace-search.ts`
- `runtime/src/db/connection.ts`
- `runtime/src/channels/web/workspace/service.ts`
- `runtime/src/channels/web/handlers/workspace.ts`
- `runtime/web/src/components/workspace-explorer.ts`
- `runtime/web/src/api.ts`
- any workspace search / indexing / tree-cache status surfaces already available

## Notes

- This is primarily a state-visibility and feedback task, not a search-algorithm rewrite.
- There is currently no dedicated workspace FTS UI beyond the `/fts` / `/search` command path, so part of this ticket is defining the user-facing search/status UX rather than just adding a badge to an existing screen.
- The chat search icon currently maps to SQLite/chat search and should not be treated as the workspace FTS entry point.
- Status belongs in the workspace explorer header.
- Search-result incompleteness should use a small inline warning, not a large status treatment.
- A visible refresh/reindex control is in scope, but its exact location can be decided during implementation.
- Prefer plain user-facing copy such as "Indexing workspace…" over operator-oriented phrasing.
- If indexing internals do not currently expose enough state, add the smallest reliable status surface first.

## Refinement notes — 2026-03-31

### Actual current FTS lifecycle
- Indexing currently lives in `runtime/src/workspace-search.ts` and is invoked from:
  - the `search_workspace` tool
  - the `/search` workspace command handler
- There is **no background index worker** and no startup preload pass.
- The default search path is:
  1. user/tool issues a workspace search
  2. `refresh !== false` triggers `indexWorkspace(...)`
  3. roots are scanned (`notes/`, `.pi/skills/`, or both)
  4. unchanged files are skipped using `mtime_ms` + `size_bytes`
  5. changed files are re-read and reinserted into `workspace_fts`
  6. deleted files inside scanned roots are removed from `workspace_files` + `workspace_fts`
  7. the FTS query runs; if FTS parsing fails, a weaker `LIKE` fallback is attempted
- Persisted metadata exists only at the file level today:
  - `workspace_files(path, mtime_ms, size_bytes, indexed_at)`
  - `workspace_fts(content, path, mtime_ms, size_bytes)`
- There is currently **no persisted run-level status** such as:
  - indexing in progress
  - last failure
  - stale file count
  - last full-scope scan summary

### Implication for this ticket
The requested states (`never indexed`, `indexing`, `ready`, `stale`, `failed`) are **not all derivable today** from the existing backend alone. To implement the UI honestly, Piclaw first needs a minimal backend status model / endpoint rather than only front-end copy changes.

### Recommended MVP shape
1. Add a backend workspace-search status snapshot endpoint/service.
2. Track a minimal lifecycle record per scope (`notes`, `skills`, `all`):
   - `state`
   - `last_indexed_at`
   - `last_error`
   - indexed file count / scanned root count
3. Mark `indexing` only while an active refresh is running.
4. Treat `never indexed` as no recorded successful index for the requested scope.
5. Treat `stale` conservatively at first (for example explicit invalidation or known tree mutations) rather than pretending we can cheaply know perfect freshness for all files.
6. Expose the snapshot in the workspace explorer header first; keep richer search-result warnings as a second slice if needed.

### Tighter implementation plan (MVP)

#### Slice 1 — backend status seam
Add a small status model next to `workspace-search.ts` rather than trying to infer everything in the UI.

Target output shape:

```ts
{
  scope: "notes" | "skills" | "all",
  state: "never_indexed" | "indexing" | "ready" | "stale" | "failed",
  last_indexed_at: string | null,
  last_error: string | null,
  indexed_file_count: number,
  roots: string[],
}
```

Planned behavior:
- `never_indexed`: no successful index has been recorded for the requested scope
- `indexing`: an active refresh for that scope is currently running
- `ready`: last refresh succeeded and the scope is not currently marked stale
- `failed`: most recent refresh ended with an error
- `stale`: explicit invalidation after workspace mutations or known path changes

Implementation notes:
- prefer a tiny persisted table (or similarly durable DB-backed state) over ephemeral process memory so status survives restart
- do **not** introduce a background worker in v1
- update status only around existing search-triggered indexing calls

#### Slice 2 — endpoint + API helper
Add a read endpoint and a refresh action surface for the web client.

Proposed endpoints:
- `GET /workspace/index-status?scope=all|notes|skills`
- `POST /workspace/reindex` with `{ scope }`

Rules:
- `GET` returns the snapshot only
- `POST` triggers the same existing indexing path intentionally, then returns the updated snapshot
- keep search behavior unchanged; this is a status/control seam, not a search rewrite

#### Slice 3 — workspace explorer header UI
Add a compact status chip + refresh control in `workspace-explorer.ts`.

V1 UI behavior:
- show one compact status row in the explorer header
- user-facing copy examples:
  - `Workspace index not built yet`
  - `Indexing workspace…`
  - `Workspace index ready`
  - `Workspace index may be stale`
  - `Workspace index failed`
- show a refresh/reindex action beside the status
- avoid large panels, timestamps everywhere, or operator jargon in v1

#### Slice 4 — explicit stale invalidation
Mark status stale on obvious workspace mutations handled by the explorer/API layer:
- create file
- rename file
- move entry
- upload file
- delete file
- write/update file

V1 rule:
- stale is a conservative flag meaning "the last successful index may no longer reflect current workspace contents"
- a successful reindex clears stale back to ready

#### Slice 5 — search warning follow-up (optional second pass)
If a dedicated workspace-search UI lands later, add a small inline warning there when status is stale/indexing/failed.

This should **not** block the header-status MVP.

### Suggested implementation order
1. backend status record + helpers
2. `GET /workspace/index-status`
3. `POST /workspace/reindex`
4. web API helpers
5. workspace explorer header status chip
6. stale invalidation wiring on known workspace mutations
7. optional search-result warning follow-up

### Test plan refinement

#### Backend
- [ ] `never_indexed` is returned before any successful refresh
- [ ] `indexing` is visible while refresh is in progress
- [ ] successful refresh records `ready` + `last_indexed_at`
- [ ] failed refresh records `failed` + `last_error`
- [ ] workspace mutations mark affected scope/status as stale
- [ ] reindex clears stale back to ready on success

#### Web/API
- [ ] API helper returns the status snapshot cleanly
- [ ] refresh action triggers reindex and updates status state in the UI
- [ ] explorer header copy changes correctly across all v1 states
- [ ] no regression in existing workspace tree/file flows

#### Next → doing regression plan (2026-04-08)
- [ ] Existing tests to rerun:
  - workspace search/indexing tests under `runtime/test/*workspace*`
  - workspace web handler/service tests under `runtime/test/channels/web/*workspace*`
  - web build smoke/tests if the explorer header UI changes
- [ ] New regression coverage to add:
  - backend status snapshot test covering `never_indexed → indexing → ready/failed`
  - interaction scenario test for manual reindex from the explorer header updating visible status
  - restore/reconnect test confirming persisted status remains truthful after reload/restart and does not regress to a misleading ready state
- [ ] Which regression classes from `workitems/regression-test-planning-reference.md` apply:
  - State-machine / invariant test — status lifecycle transitions and stale/ready clearing rules
  - Interaction scenario test — refresh button and header state/copy updates
  - Restore / reconnect matrix test — persisted status survives restart/reload without lying about freshness
- [ ] Whether a real-browser smoke pass is required:
  - probably not for MVP if covered by existing web component/service tests; add a narrow browser smoke only if header refresh behavior depends on real browser timing or reconnect behavior

> Which regression classes does this ticket risk, and which tests will pin them?
>
> It risks state-lifecycle drift, misleading UI feedback during manual reindex, and stale status after reload/restart. Pin those with a backend lifecycle test, a workspace-explorer interaction test, and a restore/reconnect persistence test.

### Out of scope for v1
- background indexing daemon
- perfect freshness detection across every workspace path without an explicit invalidation signal
- dedicated workspace-search page/pane redesign
- per-directory or per-file progress bars
- broad search UX overhaul beyond the header status + manual reindex control

## Updates

### 2026-04-08
- Lane change: `10-next` → `20-doing`.
- Selected as the implementation slice to pick up next because it is bounded, already refined to an MVP, and exercises both backend status seams and a compact web UI surface without the broader risk of a large UX umbrella or per-chat extension manager.
- Added the required regression-plan entry for the `next → doing` transition.

### 2026-04-06
- Board quality review: added the missing readiness score after the backend-status MVP shape and implementation order were captured.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 1)
- Gap: the remaining work is mostly execution; stale invalidation and the persisted status seam are the main unresolved implementation details.

### 2026-03-31
- Refined against the actual current implementation rather than the original desired UX alone.
- Verified current lifecycle in `runtime/src/workspace-search.ts`:
  - indexing is synchronous and search-triggered (`refresh=true` by default)
  - default roots are `notes/` and `.pi/skills/`
  - file freshness is tracked only via `workspace_files(mtime_ms, size_bytes, indexed_at)`
  - there is no background worker, no web status endpoint, and no persisted run-level failure/progress model yet
- Tightened the ticket into a concrete MVP plan:
  - add a small backend status snapshot / lifecycle seam
  - expose `GET /workspace/index-status` and `POST /workspace/reindex`
  - show a compact status chip + refresh control in the workspace explorer header
  - treat stale as explicit conservative invalidation rather than pretending perfect freshness detection
- Kept richer search-result warnings and broader workspace-search UX redesign out of the first slice.

### 2026-03-28
- Lane retained: `10-next` via web next-card decision.
- Next-lane outcome recorded from the adaptive-card submission: **Keep in Next**.
- The requirement is clear, but the ticket still includes open UX-definition work and was not promoted into active WIP in this pass.

### 2026-03-12
- Added to track missing UI feedback for workspace full-text indexing status and freshness.
- Refined from 5-question pass:
  - placement should be in the workspace header
  - explicit states should include never indexed, indexing, ready, stale, and failed
  - incomplete-result messaging should be a small warning
  - refresh/reindex should be visible in the UI
  - copy should stay plain and user-facing
- Added important scope clarification:
  - there is no dedicated workspace FTS UI yet beyond `/fts`
  - the chat search icon is for SQLite/chat search, not workspace FTS
  - the user-facing workspace FTS UX still needs to be defined

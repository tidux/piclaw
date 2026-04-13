---
id: normalize-browser-logging-policy-and-web-console-usage
title: Normalize browser logging policy and web console usage
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
  - logging
  - web
  - browser
  - error-handling
owner: pi
blocked-by: []
---

# Normalize browser logging policy and web console usage

## Summary

Define and apply a consistent browser-side logging policy for `runtime/web/src`
so the web client does not rely on ad hoc `console.warn(...)`,
`console.error(...)`, and `console.debug(...)` patterns spread across many
components.

This is a follow-up to `enforce-centralized-logging-for-suppressed-errors`,
which standardized the runtime/server-side suppressed-error policy but did not
attempt to fully normalize browser/client logging.

## Problem Statement

The runtime/server cleanup tranche is done, but the web client still has many
mixed logging styles:

- direct `console.warn(...)` / `console.error(...)` / `console.debug(...)`
- inconsistent message shapes and context payloads
- browser-only catch-and-continue paths with no shared policy
- a few intentionally ignored browser-policy failures that should be documented
  explicitly

That makes browser-side diagnostics noisier and less predictable than the now
standardized runtime-side logging path.

## Desired Behavior

- Browser-side logging has a small, explicit policy.
- Similar web/client failure classes log at the same level consistently.
- Best-effort browser failures use a shared helper or documented convention
  instead of ad hoc `console.*` calls.
- Intentionally ignored browser-policy failures are documented and narrowly
  justified.
- Developer-facing browser diagnostics remain useful without turning routine
  expected conditions into noisy errors.

## Initial scope

Focus this slice on `runtime/web/src/**` and nearby browser-owned surfaces.

Priority targets identified during audit:

- `runtime/web/src/components/post.ts`
- `runtime/web/src/components/workspace-explorer.ts`
- `runtime/web/src/ui/use-editor-state.ts`
- `runtime/web/src/ui/app-agent-status-orchestration.ts`
- `runtime/web/src/ui/app-agent-panel-toggle.ts`
- `runtime/web/src/panes/pane-registry.ts`
- `runtime/web/src/markdown.ts`

## Out of scope

- replacing CLI-facing `console.*` output in `runtime/src/cli.ts`
- redesigning runtime/server logging again
- changing log transport/collection infrastructure
- removing every browser-side `console.*` call regardless of usefulness

## Acceptance Criteria

- [ ] A browser/client logging policy is documented for the main web app.
- [ ] A small shared helper or equivalent convention exists for browser-side
      best-effort logging where reuse makes sense.
- [ ] Priority web surfaces with ad hoc `console.*` usage are normalized to the
      chosen policy.
- [ ] Any remaining intentional direct `console.*` uses are justified in notes
      or comments.
- [ ] Intentionally ignored browser-policy failures (for example autoplay or
      clipboard edge cases) are documented and kept narrow.
- [ ] Focused regression coverage or test adjustments exist where helper/API
      behavior changes.

## Implementation Paths

### Path A — Small browser logging helper + targeted normalization (recommended)
1. Define a lightweight web/client logging helper or conventions module.
2. Classify common browser-side cases:
   - expected best-effort fallback
   - recoverable UX degradation
   - actionable UI failure
3. Convert the highest-churn web call sites first.
4. Leave justified direct `console.*` calls only where a helper adds no value.

**Pros:**
- small, bounded quality pass
- keeps browser code readable
- aligns client behavior with the cleaned-up runtime policy

**Cons:**
- requires care not to over-engineer a full frontend logging framework

### Path B — Document-only policy, keep raw `console.*`
1. Write a policy note.
2. Fix only the worst offenders.

**Pros:** lower immediate code churn

**Cons:** less consistent and easier to regress

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
- focused unit tests for any new helper
- rerun affected web-component tests for touched surfaces
- `bun run typecheck`
- lint / existing quality checks if touched files are covered

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
- Created as the explicit follow-up after confirming `enforce-centralized-logging-for-suppressed-errors` was done for runtime/server code but did not fully normalize browser/client logging.
- Audit examples at creation time included direct `console.*` usage in:
  - `runtime/web/src/components/post.ts`
  - `runtime/web/src/components/workspace-explorer.ts`
  - `runtime/web/src/ui/use-editor-state.ts`
  - `runtime/web/src/ui/app-agent-status-orchestration.ts`
  - `runtime/web/src/ui/app-agent-panel-toggle.ts`
- Also noted a browser-side catch/comment case in:
  - `runtime/web/src/panes/pane-registry.ts`
- Quality: ★★★☆☆ 7/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 1)

## Notes

This ticket should stay focused on browser/client consistency. It is not meant
to reopen the completed runtime/server logging cleanup.

## Links

- `workitems/50-done/enforce-centralized-logging-for-suppressed-errors.md`
- `workitems/20-doing/codebase-quality-cleanup-2026.md`
- `runtime/src/utils/logger.ts`
- `runtime/web/src/components/post.ts`
- `runtime/web/src/components/workspace-explorer.ts`
- `runtime/web/src/ui/use-editor-state.ts`
- `runtime/web/src/ui/app-agent-status-orchestration.ts`
- `runtime/web/src/ui/app-agent-panel-toggle.ts`
- `runtime/web/src/panes/pane-registry.ts`
- `runtime/web/src/markdown.ts`

---
id: overhaul-and-simplify-ci-process
title: Overhaul and simplify the CI process
status: done
priority: high
created: 2026-03-30
updated: 2026-04-02
completed: 2026-04-02
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - ci
  - github-actions
  - quality
  - tooling
owner: pi
blocked-by: []
---

# Overhaul and simplify the CI process

## Summary

Piclaw’s current validation surface mixes Bun scripts, Make targets, audit
flows, and GitHub Actions shell snippets. That makes CI harder to reason about
than it should be, increases the chance that local success does not match CI
success, and slows down maintenance whenever new checks are added or refactored.

This ticket tracks a deliberate simplification pass so that:

- canonical validation entry points are explicit
- local developer workflows and CI workflows use the same commands where practical
- duplicated inline workflow logic is reduced
- packaging / release smoke checks stay aligned with the authoritative container runtime

## Acceptance Criteria

- [x] The repo has a clearly documented canonical CI command set (for example: fast checks, full quality, release/publish validation).
- [x] GitHub Actions workflow steps are simplified to use those canonical commands instead of ad-hoc duplicated shell logic where practical.
- [x] Redundant or overlapping CI checks are identified and either removed or intentionally justified.
- [x] The resulting CI flow is easier to understand from workflow files and docs.
- [x] Local developer validation and CI validation are materially closer after the change.
- [x] Any follow-up work that is too large for this tranche is split into explicit linked tickets.

## Implementation Paths

### Path A — Collapse onto a small canonical command surface (recommended)
- Define a small set of repo-owned commands that represent the supported validation tiers.
- Update GitHub Actions to call those commands directly.
- Remove duplicated per-workflow shell logic unless a workflow truly needs special behavior.

### Path B — Keep current commands but document the mapping better
- Leave most workflow structure intact.
- Improve docs and comments so the current complexity is at least explainable.

Why Path B is weaker:
- it preserves accidental complexity
- it does less to prevent future drift between local and CI behavior

## Test Plan

- [x] Inventory the current GitHub workflows and note which commands they run.
- [x] Identify overlap between CI commands, local `make` targets, and `package.json` scripts.
- [x] Propose or implement a smaller canonical command surface.
- [x] Validate the resulting commands locally.
- [x] If workflows change, verify the YAML remains syntactically valid and references real commands.

## Definition of Done

- [x] CI entry points are smaller and clearer than before.
- [x] Workflow logic and local validation commands are aligned.
- [x] Documentation reflects the real supported CI contract.
- [x] Follow-up complexity is tracked explicitly instead of left implicit.

## Updates

### 2026-04-02
- Lane change: `40-review` → `50-done` by user direction after confirming the first CI simplification tranche and explicit publish follow-up were sufficient for closeout.
- Acceptance criteria and definition-of-done checklist marked complete based on the canonical CI command surface, workflow simplification, documentation updates, and recorded YAML/local validation evidence already captured below.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

### 2026-03-30
- Lane change: `20-doing` → `40-review` during board cleanup because the first CI simplification tranche is now implemented on `main`.
- Tranche delivered for review:
  - added canonical repo-owned CI entry points: `bun run ci:fast`, `make ci-fast`, `bun run ci:publish-smoke`, `make publish-smoke`
  - simplified `.github/workflows/ci.yml` to install dependencies and call `make ci-fast`
  - simplified `.github/workflows/publish.yml` so both AMD64 and ARM64 smoke checks call `make publish-smoke` instead of duplicating the shell-script wrapper block inline
  - updated `docs/development.md` and `docs/release.md` so local/release guidance references the same repo-owned commands
- Validation evidence for this tranche:
  - `bun run ci:fast` → exit `0`
  - YAML syntax parsed successfully for `.github/workflows/ci.yml` and `.github/workflows/publish.yml`
  - `make -n publish-smoke IMAGE_REF=test PLATFORM=linux/amd64 EXPECTED_BUN_VERSION=1 EXPECTED_RESTIC_VERSION=1` expands to the canonical repo-owned smoke command as intended
  - full local `make publish-smoke ...` execution remains environment-limited in this container because `docker` is not available here, so runtime coverage for the smoke itself remains delegated to GitHub runners / Docker-capable environments
- Remaining publish-specific scope has been split into follow-up ticket `workitems/20-doing/refine-publish-workflow-boundaries-and-cleanup.md` so this ticket can be reviewed as a completed simplification tranche rather than stay open-ended.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-30
- First CI simplification tranche landed on branch `feature/ci-process-simplification` and was later recovered onto `main` during branch cleanup.
- Added canonical repo-owned CI entry points:
  - `bun run ci:fast`
  - `make ci-fast`
  - `bun run ci:publish-smoke`
  - `make publish-smoke`
- Simplified workflow usage:
  - `.github/workflows/ci.yml` now installs dependencies and calls `make ci-fast`
  - `.github/workflows/publish.yml` now calls `make publish-smoke` for both AMD64 and ARM64 image smoke checks instead of duplicating the shell-script wrapper block inline
- Updated docs so developer/release guidance references the same repo-owned commands.
- Validation evidence for this tranche:
  - `bun run ci:fast` → exit `0`
  - YAML syntax parsed successfully for `.github/workflows/ci.yml` and `.github/workflows/publish.yml`
  - `make -n publish-smoke IMAGE_REF=test PLATFORM=linux/amd64 EXPECTED_BUN_VERSION=1 EXPECTED_RESTIC_VERSION=1` expands to the canonical repo-owned smoke command as intended
  - full local `make publish-smoke ...` execution is still environment-limited in this container because `docker` is not available here, so runtime coverage for the smoke itself remains delegated to GitHub runners / Docker-capable environments
- Remaining likely follow-up: decide whether the version-resolution and publish cleanup/pruning logic should remain in workflow-local shell/github-script form or move behind additional repo-owned wrappers.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-30
- Created directly in `20-doing` to track the CI simplification work requested in chat.
- First-pass workflow inventory on current `main`:
  - `.github/workflows/ci.yml` installs dependencies, then runs `check:silent-swallows`, `check:structured-logging`, and `make build-web` as separate inline workflow steps
  - `.github/workflows/publish.yml` already delegates the image smoke test to `scripts/docker/publish-smoke-test.sh`, but still duplicates the same step wrapper in the AMD64 and ARM64 jobs
- Immediate simplification targets for this tranche:
  - add a canonical fast CI command so `ci.yml` stops spelling out the same sequence inline
  - add a canonical publish-smoke entry point so `publish.yml` can call a repo-owned command instead of repeated shell blocks
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

## Notes

- Likely related surfaces:
  - `.github/workflows/ci.yml`
  - `.github/workflows/publish.yml`
  - `scripts/docker/publish-smoke-test.sh`
  - `package.json`
  - `Makefile`
  - `docs/development.md`
  - `docs/release.md`
- Keep container/runtime install assumptions explicit:
  - Supervisor-managed runtime in the container
  - global Bun root under `/usr/local/lib/bun`

## Links

- `.github/workflows/ci.yml`
- `.github/workflows/publish.yml`
- `scripts/docker/publish-smoke-test.sh`
- `package.json`
- `Makefile`
- `README.md`

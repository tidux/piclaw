---
id: evaluate-pi-agent-teams
title: Evaluate `tmustier/pi-agent-teams`
status: inbox
priority: medium
created: 2026-04-08
updated: 2026-04-08
target_release: later
estimate: M
risk: low
tags:
  - work-item
  - kanban
  - research
  - pi
  - multi-agent
  - upstream-review
owner: pi
---

# Evaluate `tmustier/pi-agent-teams`

## Summary

Review `https://github.com/tmustier/pi-agent-teams` and determine whether it
contains ideas, abstractions, or implementation patterns worth adopting in
PiClaw.

This is an evaluation/research ticket first, not an implementation commitment.

## Questions to answer

- What problem is `pi-agent-teams` trying to solve?
- Is it primarily:
  - orchestration,
  - delegation,
  - structured collaboration,
  - UI affordances,
  - prompt/runtime conventions,
  - or packaging/integration work?
- Which parts are generally useful to PiClaw versus specific to that project?
- Does it overlap with existing PiClaw work around:
  - side prompts,
  - queued follow-ups,
  - autoresearch,
  - inter-instance IPC,
  - mailbox-style async collaboration,
  - future multi-agent/team flows?
- What other comparable extensions, repos, or design patterns exist in the same space?
- Are there recurring patterns across those comparable efforts that PiClaw should adopt directly?
- Are there clean upstreamable ideas that should become separate PiClaw tickets?
- Are there risks or mismatches that make adoption undesirable?

## Rough Acceptance Criteria

- [ ] The repository is reviewed for architecture, goals, and notable patterns.
- [ ] Comparable extensions / repos / design patterns are identified.
- [ ] Useful vs non-useful ideas are separated clearly.
- [ ] Overlap with current PiClaw direction is documented.
- [ ] Follow-up implementation/refinement tickets are created if warranted.

## Implementation Paths

### Path A — focused design/architecture review (recommended)
1. Read the repo docs and structure first.
2. Identify the underlying model and intended use cases.
3. Search for comparable extensions, repos, or prior art in the same design space.
4. Compare the patterns against current PiClaw primitives and roadmap directions.
5. Split any worthwhile adoption ideas into narrow follow-up tickets.

**Pros:**
- keeps evaluation separate from implementation hype
- helps avoid vague “port this repo” thinking
- produces actionable follow-up tickets instead of one fuzzy bucket

**Cons:**
- no product change lands until later follow-up work

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
- [ ] New regression coverage to add is listed if follow-up implementation tickets are created.
- [ ] Real-browser smoke pass required? If yes, record the surface.

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

### 2026-04-08
- Created from request to evaluate `tmustier/pi-agent-teams` for ideas potentially worth adopting in PiClaw.
- Scope expanded to also search for comparable extensions, repos, and recurring design patterns in the same space.
- Kept in `00-inbox` pending repository review and comparison against current PiClaw direction.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- Prefer extracting concrete ideas and follow-up tickets rather than treating this as a repo-porting exercise.
- Compare especially against current PiClaw work on multi-agent, side-prompt, and async collaboration patterns.
- The comparison set should include both Pi-adjacent extensions and broader multi-agent orchestration patterns if they illuminate the design space.

## Links

- `https://github.com/tmustier/pi-agent-teams`
- `workitems/00-inbox/mailbox-system-for-inter-instance-ipc.md`
- `workitems/00-inbox/evaluate-pi-boomerang.md`

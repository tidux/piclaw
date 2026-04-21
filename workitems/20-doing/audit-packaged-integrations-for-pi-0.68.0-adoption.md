---
id: audit-packaged-integrations-for-pi-0.68.0-adoption
title: Audit packaged integrations for Pi 0.68.0 adoption
status: done
priority: high
created: 2026-04-21
updated: 2026-04-21
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - integrations
  - upstream
  - packaged-extensions
  - audit
owner: smith
blocked-by: []
---

# Audit packaged integrations for Pi 0.68.0 adoption

## Summary

Piclaw ships several packaged integrations under `runtime/extensions/integrations/*`. Most delegate to `runtime/src/extensions/*`, but they are still product surfaces with their own registration, resources, and status expectations.

This ticket audits the packaged layer and the delegated runtime behavior together.

## Integrations to audit

- `runtime/extensions/integrations/ssh/index.ts`
- `runtime/extensions/integrations/ssh-core/` (packaged skill/runtime surface as applicable)
- `runtime/extensions/integrations/keychain/index.ts`
- `runtime/extensions/integrations/proxmox/index.ts`
- `runtime/extensions/integrations/portainer/index.ts`
- `runtime/extensions/integrations/office-tools/index.ts`
- `runtime/extensions/integrations/office-tools-tool/index.ts`
- `runtime/extensions/integrations/azure-openai.ts`
- `runtime/extensions/integrations/azure-openai-images.ts`
- `runtime/extensions/integrations/bun-runner/`
- `runtime/extensions/integrations/context-mode.ts`

## Acceptance Criteria

- [x] Every packaged integration is audited for 0.68.0 impact and classified.
- [x] Progress/status adoption opportunities are recorded for each long-running integration.
- [x] Delegation boundaries between packaged wrappers and `runtime/src/extensions/*` are explicit.
- [x] Packaging/resource registration still behaves correctly after the upstream bump.
- [x] Follow-up implementation tickets exist for any high-value product changes not done here.

## Detailed changes to make

### 1. `proxmox`
- audit workflow/tooling phases for indicator support
- define where to emit progress during:
  - discovery
  - workflow execution
  - task polling
  - metrics collection/chart generation
- verify skills packaging remains correct

### 2. `portainer`
- same audit as `proxmox`
- add explicit progress/status plan for inventory scans and long workflow calls

### 3. `office-tools` / `office-tools-tool`
- identify long-running phases in document read/write/render flows
- spec indicator states for parse, transform, generation, and export
- ensure tool status hints remain coherent with indicator/state behavior

### 4. `bun-runner`
- audit whether scripts should expose working indicator state during long runs
- verify no conflict between bash/tool-output previews and richer UI status

### 5. `context-mode`
- verify upstream tool-hook context-path fixes improve the stored-output pipeline as expected
- add regression coverage if assumptions are currently implicit

### 6. `ssh` / `keychain`
- confirm packaged wrappers remain thin and correct after the upstream bump
- ensure no wrapper-specific follow-up is being missed because the runtime implementation changed underneath

### 7. `azure-openai` / `azure-openai-images`
- keep this ticket at classification depth only
- deep improvement work is tracked in the dedicated Azure audit ticket

## Core changes to consider while auditing

- packaged resource discovery / `resources_discover` handling
- packaged skill path registration
- wrapper → runtime delegation boundaries
- status/progress event usage from packaged integrations into the web channel

## Spec for each packaged integration review

For each integration, record:
- packaged entrypoint(s)
- runtime delegate(s)
- hooks used (`before_agent_start`, `session_shutdown`, `tool_result`, etc.)
- long-running phases
- progress/status opportunity
- tests to add/update
- decision: implement here vs track in follow-up

## Implementation Paths

### Path A — Audit and classify only
- no runtime code changes except small clarifying fixes

### Path B — Audit plus first-wave adoptions
- `proxmox`
- `portainer`
- `office-tools`
- `bun-runner`

### Preferred
- Path A if web indicator plumbing is not merged yet; Path B once it exists

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [ ] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [x] Pane / viewer contract test
  - [ ] Real-browser smoke test

### Candidate tests to inspect or add
- `runtime/test/extensions/azure-openai-*.test.ts`
- `runtime/test/proxmox/client.test.ts`
- `runtime/test/portainer/client.test.ts`
- office tool tests if present
- tool-output/context-mode tests

## Definition of Done

- [x] All acceptance criteria satisfied and verified
- [x] Tests added or updated — passing locally
- [x] Type check clean
- [x] Docs and notes updated with links to ticket
- [x] Operational impact assessed
- [x] Follow-up tickets created for deferred scope
- [x] Update history complete with evidence
- [x] Ticket front matter updated

## Update history

- 2026-04-21: Re-audited packaged wrappers for `ssh`, `keychain`, `context-mode`, `bun-runner`, `office-tools`, `proxmox`, and `portainer` against the 0.68.0 runtime surface.
- 2026-04-21: Confirmed `proxmox` and `portainer` already expose structured working-indicator state for long workflows.
- 2026-04-21: Added bounded working-indicator adoption for `office-tools` / `office-tools-tool` read/write flows.
- 2026-04-21: Confirmed `bun-runner` remains intentionally separate from `bash` and does not need a 0.68.0-specific API change.
- 2026-04-21: Added/ran focused packaged integration regression coverage in `runtime/test/extensions/upstream-068-builtins-and-integrations.test.ts` and existing office/bun-runner suites.

## Evidence

- `runtime/test/workitems/upstream-068-audit-summary.md`
- `runtime/test/extensions/upstream-068-builtins-and-integrations.test.ts`
- `runtime/test/extensions/extensions-bun-runner.test.ts`
- `runtime/test/extensions/extensions-office-tools.test.ts`
- `runtime/test/extensions/office-tools-tool.test.ts`

## Links

- Parent: `workitems/20-doing/adopt-pi-coding-agent-0.68.0-followups-and-web-progress-mapping.md`
- Related: `workitems/20-doing/audit-and-improve-azure-extensions-after-pi-0.68.0.md`

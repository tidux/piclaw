---
id: infra-tool-streaming-and-session-runtime-v2
title: Add v2 streaming and session runtime primitives for infra tools
status: inbox
priority: high
created: 2026-04-05
updated: 2026-04-12
target_release: v2.0.0
estimate: XL
risk: high
tags:
  - work-item
  - kanban
  - runtime
  - streaming
  - sessions
  - proxmox
  - portainer
  - infra
owner: pi
---

# Add v2 streaming and session runtime primitives for infra tools

## Summary

Defer streaming and interactive infra-tool work to the v2 line and implement it as a runtime capability project rather than as one-off tool-specific hacks.

The current request/response tool model is good enough for:

- discovery
- compact capability inspection
- intent-based recommendation
- bounded non-interactive operations

But it is not a good fit for the remaining high-priority infra surfaces that need long-lived transport, incremental output, or interactive attach/session semantics.

This ticket tracks the v2 runtime work needed to unlock:

- Proxmox console / VNC / SPICE / serial session orchestration
- Portainer interactive exec / attach
- Portainer follow-mode logs / stats / events
- future long-lived infra event streams without bespoke per-tool transports

Explicit non-scope for this ticket:

- Proxmox bounded provisioning/media/storage workflows already shipped in v1 (`vm.create`, `lxc.create`, `storage.create`, `storage.download_url`, `vm.iso.attach`, `vm.iso.detach`, `vm.disk.resize`, `vm.disk.detach`, `vm.disk.remove`)
- Portainer bounded day-2 request/response workflows that already fit the current native tool model

## Acceptance Criteria

- A reusable runtime-level streaming/session primitive exists for agent tools.
- The primitive supports:
  - long-lived sessions
  - incremental output delivery
  - cancellation / abort
  - timeout handling
  - cleanup on disconnect / process restart
- The primitive is tool-agnostic and does not hardcode Proxmox- or Portainer-specific transport logic.
- The runtime contract clearly distinguishes:
  - bounded request/response tools
  - long-lived streaming sessions
  - interactive attach/session flows
- At least one pilot integration is implemented end-to-end for validation.
- Follow-up implementation slices for these unlocked surfaces are explicitly captured:
  - Proxmox console/session flows
  - Portainer interactive exec/attach
  - Portainer streaming logs/stats/events
- Documentation explains when tools should use:
  - `request`
  - `workflow`
  - `recommend`
  - streaming/session runtime primitives
- Documentation explicitly distinguishes already-shipped bounded provisioning/media flows from deferred streaming/session flows

## Implementation Paths

### Path A — Generic stream/session runtime channel (recommended)
1. Add a runtime-owned stream/session abstraction with lifecycle IDs, output frames, completion state, and cancellation.
2. Support multiple transport backends behind one contract:
   - websocket
   - HTTP streaming / SSE where appropriate
   - hijacked raw stream bridge when needed
3. Expose a small tool-facing API so tool implementations can open, publish to, and close sessions.
4. Pilot with one real infra flow, then layer Proxmox and Portainer on top.

Pros:
- one reusable primitive for all future streaming features
- avoids duplicate ad-hoc implementations
- matches the remaining infra backlog shape

Cons:
- larger runtime design and test surface
- higher up-front complexity

### Path B — Narrow infra-specific streaming adapters first
1. Implement one Proxmox session transport and one Portainer streaming transport directly.
2. Wrap them in tool-specific code.
3. Generalize only after both are proven.

Pros:
- faster first demo
- narrower initial code changes

Cons:
- high risk of duplicated lifecycle logic
- likely to create two near-duplicate abstractions that must be unified later

### Path C — Hybrid pilot with generic session core + protocol adapters
1. Build a minimal generic session core:
   - session IDs
   - lifecycle
   - output frames
   - cancel
2. Keep protocol bridging in adapters per backend.
3. Expand the core only after a Proxmox and Portainer pilot validate the shape.

Pros:
- lower risk than Path B
- smaller first slice than fully generalized Path A

Cons:
- still needs careful contract design to avoid partial abstraction drift

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [x] Restore / reconnect matrix test
  - [x] Pane / viewer contract test
  - [x] Real-browser smoke test
- [x] Existing tests to rerun are listed
- [x] New regression coverage to add is listed
- [x] Real-browser smoke pass required? If yes, record the surface

### Existing tests to rerun
- `bun run typecheck`
- `bun run lint`
- full runtime test suite
- SSE / live-session / agent-pool / reconnect related tests
- infra tool extension tests for `ssh`, `proxmox`, and `portainer`

### New regression coverage to add
- session lifecycle invariant tests:
  - create
  - attach
  - publish output
  - complete
  - cancel
  - cleanup
- reconnect / restore tests for active streaming sessions
- abort / timeout / orphan-cleanup tests
- routing tests proving request/response tools and streaming/session tools stay separated
- browser smoke tests for at least one live interactive session surface

### Real-browser smoke surface
- browser-validated live session surface for one pilot integration
- reconnect / resume behavior after refresh
- explicit cancel / close behavior

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

### 2026-04-05
- Created to explicitly defer streaming/session runtime work to the v2 line instead of trying to force it into the current request/response-only model.
- Scope includes the remaining high-priority blocked infra capabilities: Proxmox console/session flows and Portainer interactive exec plus follow-mode logs/stats/events.
- Explicitly does not cover the Proxmox v1 provisioning/media/storage slice, because that is already shipped in the native tool surface.
- Recommended implementation path: Path A (generic stream/session runtime channel) with Path C as the fallback if a smaller pilot is needed.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)
- Evidence: current discoverability and high-priority gap review completed in native `proxmox` / `portainer` tool work on 2026-04-05.
+
+### 2026-04-05 (later update)
+- Reconfirmed this is a true v2/runtime-primitives item after shipping the bounded Proxmox v1 provisioning/media/storage workflows in the native tool surface.
+- Shipped in v1 and therefore out of scope here:
+  - `vm.create`
+  - `lxc.create`
+  - `storage.create`
+  - `storage.download_url`
+  - `vm.iso.attach`
+  - `vm.iso.detach`
+  - `vm.disk.resize`
+  - `vm.disk.detach`
+  - `vm.disk.remove`
+- The remaining blocked work is now cleanly concentrated on streaming/session and broader transfer primitives rather than bounded request/response workflows.

## Notes

- This ticket intentionally treats streaming as a runtime/platform feature, not a Proxmox-only or Portainer-only backlog item.
- Request/response workflows should remain the default for low-context, bounded operations.
- The v2 runtime should keep the current compact discovery pattern intact and add streaming only where the transport truly requires it.
- File/blob transfer support may become a related follow-up, but it is not required for the initial streaming/session milestone.

## Links

- `workitems/regression-test-planning-reference.md`
- `runtime/src/extensions/proxmox.ts`
- `runtime/src/extensions/portainer.ts`
- `runtime/src/proxmox/client.ts`
- `runtime/src/portainer/client.ts`
- `reports/proxmox-portainer-gap-matrix-2026-04-05.md`

---
id: runtime-ram-optimization-opportunities-2026-04-17
title: "Runtime RAM optimization opportunities and execution plan"
status: done
priority: high
created: 2026-04-17
updated: 2026-04-18
tags:
  - work-item
  - kanban
  - memory
  - performance
  - runtime
  - test-infra
owner: smith
blocked-by: []
---

# Runtime RAM optimization opportunities and execution plan

## Summary

Track the active RAM-reduction work for Piclaw runtime and tests.

Current instrumentation shows that the biggest live-footprint issue is not web optional-service startup anymore; it is retained agent-session state. The most likely high-return levers are startup warmup count, main-session cache policy, prewarm behavior, shared session-bootstrap inputs, and per-session retained context/resource state.

## Current findings

### Verified
- `/agent/system-metrics` now exposes:
  - `process_memory`
  - `process_rss_series_bytes`
  - `process_heap_used_series_bytes`
  - `runtime_memory`
- controlled staged test runner is now the default `bun run test` path
- terminal/VNC/remote web services are lazily constructed
- shared session-bootstrap inputs are memoized in `runtime/src/agent-pool/session.ts`

### Current live shape
- idle runtime memory is dominated by cached main sessions rather than side sessions
- representative live counters after the 2026-04-18 post-reload settle pass:
  - `cached_main_sessions`: 2
  - `cached_side_sessions`: 0
  - `active_chats`: 2
  - `prewarm_cooldowns`: 0
- startup warmup policy currently prewarms:
  - `web:default`
  - recent-chat warmup uses the lightweight path and does not materialize live runtimes

## Optimization opportunities

### 1. Reduce startup warmup fan-out
- Lower recent warmup count from 5 to 0 or 1
- Optionally gate recent warmup behind explicit activity / low-memory mode
- Re-measure idle RSS/PSS after settle

### 2. Add a hard cap / LRU budget for cached main sessions
- Keep only the hottest 1–2 main sessions resident
- Evict oldest idle non-streaming sessions immediately when above budget
- Keep current safety exemptions for streaming / bash / compaction

### 3. Make prewarm cheaper than full runtime creation
- Split prewarm into lightweight metadata/index warming vs full session runtime materialization
- Avoid `getOrCreate()` for recent-chat prewarm where possible

### 4. Continue memoizing or sharing immutable session-bootstrap inputs
- bundled extension path resolution
- node_modules lookup / symlink setup
- channel-specific prompt appendix helpers
- resource-loader static inputs that are identical across sessions

### 5. Trim per-session retained state
- inspect session tree/context retention
- inspect resource loader / extension retention
- inspect diagnostic buffers and large external memory contributors
- rank heap/external contributors after session-count reductions

### 6. Revisit session TTL defaults after cache-cap work lands
- main idle TTL is currently 3 minutes
- side idle TTL is currently 1 minute
- cleanup interval is currently 30 seconds
- shorten only after budget/cap changes are in place

### 7. Keep test runner staged and tune stage shape
- use controlled runner reports to pick stage sizes that avoid heap growth spikes
- compare memory across representative suites after runtime changes

## Recommended execution order

1. startup warmup reduction
2. main-session cache cap / LRU eviction
3. lightweight prewarm design
4. per-session retained-state audit using the new telemetry
5. TTL retuning
6. broader staged test memory comparison

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [ ] Interaction scenario test
  - [x] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- Which regression classes does this ticket risk, and which tests will pin them?
  - Session-cache, warmup, and eviction changes risk state/lifecycle regressions; cover with `AgentSessionManager` invariants and reconnect/startup behavior checks.
  - Startup warmup reductions risk restore/reconnect drift for active/default chats; pin with startup/system-metrics/runtime-memory checks plus targeted session lifecycle tests.
  - No real-browser smoke is required unless changes start affecting browser-owned reconnect behavior directly.
- [x] Existing tests to rerun are listed
- [x] New regression coverage to add is listed
- [ ] Real-browser smoke pass required? If yes, record the surface

### Existing tests to rerun
- `runtime/test/agent-pool/session-manager.test.ts`
- `runtime/test/channels/web/system-metrics.test.ts`
- `runtime/test/channels/web/core/web-channel-constructor-wiring-factory.test.ts`
- `runtime/test/channels/web/server-lifecycle-gateway-service.test.ts`
- `runtime/test/remote/remote-interop.test.ts`

### New regression coverage to add
- [x] startup warmup-count regression test
- [x] main-session cache-cap/LRU eviction test
- [x] lightweight-prewarm behavior test
- [x] runtime-memory snapshot assertion for warmup/cached-session counts

## Definition of Done

- [x] RAM opportunities are all recorded with rationale
- [x] highest-return tranche lands with tests
- [x] idle RSS/PSS is re-measured after reload
- [x] controlled staged test report work is explicitly deferred into a follow-up ticket per user request
- [x] follow-up tickets are split out for deferred work if needed

## Updates

### 2026-04-17
- Captured the current ranked RAM optimization opportunities after landing memory telemetry and staged test execution.
- Confirmed the dominant live factor is retained main sessions, not side sessions and not optional web services.
- Recorded the intended execution order so follow-up work stays evidence-driven.
- Added startup warmup env controls via `PICLAW_STARTUP_WARM_DEFAULT_CHAT` and `PICLAW_STARTUP_WARMUP_RECENT_LIMIT` so aggressive recent-chat prewarm can stay disabled or be tuned per deployment.
- Added a main-session cache cap/LRU-style eviction path with `PICLAW_MAIN_SESSION_POOL_MAX_SIZE` / `PICLAW_SESSION_POOL_MAX_SIZE` (default 2), evicting the oldest idle non-streaming main sessions when the pool grows beyond budget.
- Added regression coverage for env-backed startup warmup parsing and capped main-session eviction behavior.
- Switched recent-chat background warmup to a lightweight path that primes session directories and extension-resolution caches without materializing a live `AgentSessionRuntime`.
- Kept explicit/priority warmup and deferred-branch realization on the full-runtime path so forked branches still realize their seed eagerly when requested.
- Added regression coverage proving lightweight recent prewarm does not increase cached-main-session counts while explicit warmup still does.
- Lowered the default memory-pressure entry threshold from 512 MB to 384 MB so the aggressive main-session trim path activates sooner on the crash-prone VM before RSS reaches the earlier OOM-adjacent range.
- Added regression coverage proving the default pressure path now trims cached main sessions at ~400 MB RSS even without explicit `PICLAW_MAIN_SESSION_PRESSURE_*` env overrides.
- Removed the Linux-only HUD gate for the RSS row so Windows and macOS now show the existing `process.memoryUsage().rss` resident-memory equivalent, while Linux still prefers `VmRSS` when available.
- Added HUD regression coverage for cross-platform RSS visibility and RSS-value selection.
- Re-measured the post-reload idle/steady-state footprint after a managed restart (`MainPID 92967`, started `2026-04-18 08:21:22 WEST`) using three local `/agent/system-metrics` samples plus `/proc/$PID/status` and `/proc/$PID/smaps_rollup`.
- Reconstructed the pre-reload baseline artifact from the previously recorded chat values after the original generated file was cleaned during a later web-only fix; restored it to `runtime/generated/post-reload-baseline-2026-04-18.json` for repeatable comparison.
- Post-reload steady state averaged ~`276.0 MB` process RSS, ~`276.2 MB` VmRSS, ~`274.7 MB` PSS, and ~`296.4 MB` `memory.current`; the direct `/proc` snapshot landed at `283.3 MB` VmRSS / `281.8 MB` PSS with `17` threads.
- Compared with the pre-reload baseline (`312.9 MB` RSS / `313.3 MB` VmRSS / `311.2 MB` PSS / `1.09 GB` `memory.current`), the new runtime is down by roughly `36–37 MB` of resident memory even while carrying two cached chats (`web:default` + the active measurement chat) instead of one.
- Confirmed the hot-session budget now settles at `2` cached main sessions instead of the previous reload shape of `6`, which is the main concrete runtime-memory win from this tranche.
- Split the deferred remainder into dedicated follow-up tickets:
  - `workitems/10-next/audit-retained-session-memory-after-cache-cap.md`
  - `workitems/10-next/retune-session-ttl-and-pressure-defaults.md`
  - `workitems/10-next/refresh-memory-baselines-and-staged-runner-report.md`
- Closed this parent ticket after the user explicitly de-scoped the reporting refresh from the current tranche and requested the remaining non-reporting cleanup be committed separately.

## Links

- RAM audit note: `notes/audits/piclaw-ram-audit-2026-04-17.md`
- Controlled runner: `runtime/scripts/controlled-test-runner.ts`
- System metrics endpoint: `runtime/src/channels/web/agent/system-metrics.ts`
- Session cache manager: `runtime/src/agent-pool/session-manager.ts`
- Session bootstrap memoization: `runtime/src/agent-pool/session.ts`
- Follow-up: `workitems/10-next/audit-retained-session-memory-after-cache-cap.md`
- Follow-up: `workitems/10-next/retune-session-ttl-and-pressure-defaults.md`
- Follow-up: `workitems/10-next/refresh-memory-baselines-and-staged-runner-report.md`

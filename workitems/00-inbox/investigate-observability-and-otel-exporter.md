---
id: investigate-observability-and-otel-exporter
title: Investigate further instrumentation/observability including an OTel exporter
status: inbox
created: 2026-04-15
updated: 2026-04-15
priority: medium
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - observability
  - performance
  - architecture
owner:
origin: "https://github.com/rcarmo/piclaw/pull/42"
---

# Investigate further instrumentation/observability including an OTel exporter

## Summary

PR #42 landed correlated `Server-Timing` headers and a client-side
`window.__PICLAW_PERF__` trace/request store. This gives us per-request
backend timing and browser-visible latency correlation.

The next step is to evaluate whether we should extend this into a more
structured observability surface — potentially including an OpenTelemetry
exporter — so traces, metrics, and spans can be consumed by external
tooling (Grafana, Jaeger, Prometheus, etc.).

## Questions to Answer

1. **Is the current `Server-Timing` + `x-request-id` approach sufficient
   for day-to-day performance debugging?** If yes, OTel may be
   over-engineering for a single-user app.

2. **What would an OTel exporter cover that the current approach doesn't?**
   - Distributed tracing across agent runs (model calls, tool execution,
     extension lifecycle)
   - Structured metrics (request rate, error rate, P50/P95 latencies)
   - Span-level detail for multi-step agent turns

3. **What's the bundle/runtime cost?** OTel SDK is non-trivial. Bun
   compatibility with `@opentelemetry/*` packages needs validation.

4. **Where would traces go?** Options:
   - OTLP exporter → Grafana Cloud / self-hosted Tempo
   - Console/file exporter for local debugging
   - SQLite-backed local store (reuse existing DB)

## Possible Approaches

### A — Extend current approach (lightweight)
- Add `Server-Timing` to more paths (agent message handling, tool
  execution, extension lifecycle)
- Add structured timing to the agent run orchestrator
- Keep `window.__PICLAW_PERF__` as the primary browser-side surface
- No external dependency

### B — OTel SDK integration (full)
- Add `@opentelemetry/sdk-node` or `@opentelemetry/sdk-trace-web`
- Instrument HTTP server, agent runs, tool calls, DB queries
- Export via OTLP to configurable endpoint
- Gated behind `PICLAW_OTEL_ENDPOINT` env var (off by default)

### C — Hybrid (recommended starting point)
- Keep `Server-Timing` for request-level timing (already landed)
- Add lightweight span tracking for agent turns and tool calls
- Export to OTLP only when configured; otherwise local-only
- Use the existing `createLogger` structured logging as the span
  annotation layer

## Acceptance Criteria

- [ ] Decision documented on approach (A, B, or C)
- [ ] If OTel: Bun compatibility validated
- [ ] If OTel: exporter gated behind env var, off by default
- [ ] Agent run and tool call timing visible in the chosen surface
- [ ] No measurable performance regression on hot paths

## Links

- PR #42: `Server-Timing` + `x-request-id` + `app-perf-tracing`
- `runtime/src/channels/web/http/server-timing.ts`
- `runtime/web/src/ui/app-perf-tracing.ts`
- `runtime/src/agent-pool/run-agent-orchestrator.ts` (agent turn timing)
- `runtime/src/agent-pool/turn-coordinator.ts` (tool call tracking)

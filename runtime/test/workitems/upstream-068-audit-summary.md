# Pi 0.68.0 upstream follow-up audit summary

## Scope closed in this pass

### Core runtime/web surfaces
- Tool-name allowlist semantics already landed with regression coverage in the agent-pool/tool-activation suite.
- `/clone` support already landed in `baeb8606` and remains covered by agent-control handler/parser tests.
- Web `ExtensionUIContext` support for `setWorkingIndicator()` is already wired and exercised by web/tool-status regressions plus extension progress tests.
- Piclaw-owned runtime boundaries touched by the bump are now concretely represented by:
  - `runtime/src/agent-pool/tool-factory.ts`
  - `runtime/src/extensions/tool-activation.ts`
  - `runtime/src/agent-control/{command-parsers,command-registry,handlers/session}.ts`
  - `runtime/src/channels/web/theming/ui-bridge.ts`
  - `runtime/web/src/ui/{extension-ui-events,app-extension-ui-sse,app-sse-events}.ts`

### Built-in extensions
- `smart-compaction` now uses structured working indicator + message states.
- `ssh-core` now uses session shutdown metadata and progress UI.
- `image-processing` now emits bounded working indicator/message state for longer operations and clears it on completion/failure.
- `autoresearch-supervisor` start/stop flows now expose working indicator/message state and clear it on completion/failure.
- Hook-driven extensions were rechecked for upstream automatic wins; no further product changes were required in this pass.

### Packaged integrations
- `proxmox` and `portainer` already emit working indicator state around long workflow phases.
- `office-tools` / `office-tools-tool` now expose working indicator/message state for read/write/generate/export phases.
- `bun-runner` remains intentionally separate from `bash`; no unification or extra progress surface was required for the 0.68.0 adoption pass.
- `context-mode`, `ssh`, and `keychain` packaged wrappers remain thin delegates; no wrapper-specific compatibility gap was found.

## Deferred/non-blocking follow-ups
- No additional blocking upstream-compatibility gaps were found.
- Richer widget/status-panel visualization for long-running tools remains optional product polish, not required for 0.68.0 compatibility.
- `azure-openai` deeper lifecycle improvements remain tracked separately.

## Evidence
- `runtime/test/extensions/upstream-068-builtins-and-integrations.test.ts`
- `runtime/test/extensions/extensions-bun-runner.test.ts`
- `runtime/test/extensions/extensions-office-tools.test.ts`
- `runtime/test/extensions/image-processing.test.ts`
- `runtime/test/extensions/ssh-core.test.ts`
- `runtime/test/extensions/smart-compaction.test.ts`

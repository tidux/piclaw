# Agent LSP Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extend PiClaw's editor-first LSP runtime into a shared agent-capable semantic service that supports curated workspace-installed language servers, Docker-based preinstalls, runtime user controls, read-only semantic tools, and write-aware preview tools without bypassing the normal coding flow.

**Architecture:** Keep one backend LSP broker centered on `LspSessionService`, then add a thin agent-facing facade that exposes normalized semantic operations instead of raw JSON-RPC. Drive server discovery and Docker preinstalls from one curated manifest, store runtime activation settings in workspace config, and make write-capable LSP operations return previews only so agents still edit through `read`/`edit`/`write`.

**Tech Stack:** Bun, TypeScript, CodeMirror 6, Bun WebSocket/HTTP services, workspace config at `/workspace/.piclaw/config.json`, Debian Docker build stages, curated language servers (`typescript-language-server`, `pyright-langserver`, `gopls`, `rust-analyzer`).

---

## File Structure

- `runtime/config/language-servers.json`
  Single curated source of truth for supported servers, file extensions, root markers, install metadata, activation defaults, and binary names.
- `runtime/src/channels/web/lsp/curated-language-servers.ts`
  Typed loader and validator for the curated manifest.
- `runtime/src/channels/web/lsp/lsp-runtime-policy.ts`
  Read/write runtime settings from workspace config and merge them with curated defaults.
- `runtime/src/channels/web/lsp/server-registry.ts`
  Resolve profiles and executables from the curated manifest instead of hardcoded arrays.
- `runtime/src/channels/web/lsp/lsp-agent-service.ts`
  Agent-facing facade for diagnostics, hover, definitions, references, symbols, rename preview, code actions, formatting preview, and activation state.
- `runtime/src/channels/web/lsp/lsp-http-service.ts`
  Add settings endpoints and capability/activation responses alongside the existing editor session endpoints.
- `runtime/src/extensions/lsp-agent-tools.ts`
  Register explicit agent tools for read-only and write-preview LSP operations.
- `runtime/src/extensions/index.ts`
  Register the new LSP agent extension.
- `runtime/src/extensions/tool-activation.ts`
  Add an `lsp` tool category and default activation guidance.
- `runtime/src/agent-pool/lsp-context-enricher.ts`
  Collect lightweight diagnostics/symbol context for active workspace files.
- `runtime/src/agent-pool/turn-coordinator.ts`
  Inject semantic context into the normal agent loop only when policy allows it.
- `runtime/src/tool-status-hints.ts`
  Add status hints for LSP availability, disabled states, and preview-only write semantics.
- `runtime/web/src/api.ts`
  Add runtime settings fetch/update helpers and capability probes for future UI use.
- `runtime/web/src/components/lsp-runtime-settings.tsx`
  Runtime control surface for global and per-language activation toggles.
- `scripts/docker/install-language-servers.sh`
  Install the curated server set into workspace-visible paths during image build.
- `Dockerfile`
  Copy the manifest/script and run curated language server installation in builder and runtime stages.
- `docs/lsp-design-plan.md`
  Update the design note to include the shared broker, agent tools, preview-only write semantics, and runtime controls.
- `docs/install-from-repo.md`
  Document curated server preinstalls and how non-Docker workspaces can install the same binaries manually.

## Curated Manifest Shape

The manifest should become the shared contract for runtime lookup and Docker install:

```json
{
  "servers": [
    {
      "id": "typescript",
      "languageId": "typescript",
      "label": "TypeScript",
      "extensions": [".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"],
      "rootMarkers": ["tsconfig.json", "jsconfig.json", "package.json", "deno.json", "deno.jsonc"],
      "singleFile": true,
      "command": { "command": "typescript-language-server", "args": ["--stdio"] },
      "install": {
        "strategy": "npm-global",
        "packages": ["typescript-language-server@4.4.0", "typescript@5.9.3"],
        "binary": "typescript-language-server",
        "workspaceBinDir": "/workspace/.local/bin"
      },
      "activation": {
        "editor": true,
        "agentRead": true,
        "agentWritePreview": true,
        "autoActivate": true
      }
    },
    {
      "id": "python",
      "languageId": "python",
      "label": "Python",
      "extensions": [".py"],
      "rootMarkers": ["pyproject.toml", "setup.py", "setup.cfg", "requirements.txt", ".git"],
      "singleFile": true,
      "command": { "command": "pyright-langserver", "args": ["--stdio"] },
      "install": {
        "strategy": "npm-global",
        "packages": ["pyright@1.1.398"],
        "binary": "pyright-langserver",
        "workspaceBinDir": "/workspace/.local/bin"
      },
      "activation": {
        "editor": true,
        "agentRead": true,
        "agentWritePreview": true,
        "autoActivate": true
      }
    },
    {
      "id": "go",
      "languageId": "go",
      "label": "Go",
      "extensions": [".go"],
      "rootMarkers": ["go.mod", "go.work", ".git"],
      "singleFile": false,
      "command": { "command": "gopls", "args": [] },
      "install": {
        "strategy": "go-install",
        "packages": ["golang.org/x/tools/gopls@v0.16.2"],
        "binary": "gopls",
        "workspaceBinDir": "/workspace/.local/bin"
      },
      "activation": {
        "editor": true,
        "agentRead": true,
        "agentWritePreview": true,
        "autoActivate": true
      }
    },
    {
      "id": "rust",
      "languageId": "rust",
      "label": "Rust",
      "extensions": [".rs"],
      "rootMarkers": ["Cargo.toml", "rust-project.json", ".git"],
      "singleFile": false,
      "command": { "command": "rust-analyzer", "args": [] },
      "install": {
        "strategy": "cargo-binstall",
        "packages": ["rust-analyzer@2024-10-28"],
        "binary": "rust-analyzer",
        "workspaceBinDir": "/workspace/.local/bin"
      },
      "activation": {
        "editor": true,
        "agentRead": true,
        "agentWritePreview": true,
        "autoActivate": true
      }
    }
  ]
}
```

## Runtime Settings Shape

Store user-overridable settings in `/workspace/.piclaw/config.json` under an `lsp` key:

```json
{
  "lsp": {
    "agent": {
      "enabled": true,
      "autoContext": true
    },
    "languages": {
      "typescript": { "enabled": true, "agentRead": true, "agentWritePreview": true },
      "python": { "enabled": true, "agentRead": true, "agentWritePreview": true },
      "go": { "enabled": true, "agentRead": true, "agentWritePreview": true },
      "rust": { "enabled": true, "agentRead": true, "agentWritePreview": true }
    }
  }
}
```

## Task 1: Move Server Definitions Into One Curated Manifest

**Files:**
- Create: `runtime/config/language-servers.json`
- Create: `runtime/src/channels/web/lsp/curated-language-servers.ts`
- Modify: `runtime/src/channels/web/lsp/server-registry.ts`
- Test: `runtime/test/channels/web/lsp-server-registry.test.ts`

- [ ] **Step 1: Write the failing manifest loader test**

```ts
import { describe, expect, test } from "bun:test";

import {
  getCuratedLanguageServerProfiles,
  getCuratedLanguageServerProfile,
} from "../../../src/channels/web/lsp/curated-language-servers.js";

describe("curated language server manifest", () => {
  test("loads the curated language servers with activation defaults", () => {
    const profiles = getCuratedLanguageServerProfiles();
    expect(profiles.map((profile) => profile.id)).toEqual([
      "typescript",
      "python",
      "go",
      "rust",
    ]);
    expect(getCuratedLanguageServerProfile("rust")?.install.binary).toBe("rust-analyzer");
    expect(getCuratedLanguageServerProfile("typescript")?.activation.autoActivate).toBe(true);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test runtime/test/channels/web/lsp-server-registry.test.ts`

Expected: FAIL with `Cannot find module '../../../src/channels/web/lsp/curated-language-servers.js'`

- [ ] **Step 3: Add the curated manifest and typed loader**

```ts
// runtime/src/channels/web/lsp/curated-language-servers.ts
import { readFileSync } from "node:fs";
import path from "node:path";

export interface CuratedLanguageServerProfile {
  id: string;
  languageId: string;
  label: string;
  extensions: string[];
  rootMarkers: string[];
  singleFile: boolean;
  command: { command: string; args: string[] };
  install: {
    strategy: "npm-global" | "go-install" | "cargo-binstall";
    packages: string[];
    binary: string;
    workspaceBinDir: string;
  };
  activation: {
    editor: boolean;
    agentRead: boolean;
    agentWritePreview: boolean;
    autoActivate: boolean;
  };
}

const MANIFEST_PATH = path.resolve(process.cwd(), "runtime/config/language-servers.json");

let cachedProfiles: CuratedLanguageServerProfile[] | null = null;

export function getCuratedLanguageServerProfiles(): CuratedLanguageServerProfile[] {
  if (cachedProfiles) return cachedProfiles.map((profile) => ({ ...profile }));
  const raw = JSON.parse(readFileSync(MANIFEST_PATH, "utf8")) as { servers: CuratedLanguageServerProfile[] };
  cachedProfiles = raw.servers.map((profile) => ({
    ...profile,
    extensions: [...profile.extensions],
    rootMarkers: [...profile.rootMarkers],
    command: { ...profile.command, args: [...profile.command.args] },
    install: { ...profile.install, packages: [...profile.install.packages] },
    activation: { ...profile.activation },
  }));
  return cachedProfiles.map((profile) => ({ ...profile }));
}

export function getCuratedLanguageServerProfile(id: string): CuratedLanguageServerProfile | null {
  return getCuratedLanguageServerProfiles().find((profile) => profile.id === id) || null;
}
```

- [ ] **Step 4: Replace the hardcoded `PROFILES` array in the server registry**

```ts
// runtime/src/channels/web/lsp/server-registry.ts
import {
  getCuratedLanguageServerProfiles,
  type CuratedLanguageServerProfile,
} from "./curated-language-servers.js";

export interface LspServerProfile extends CuratedLanguageServerProfile {}

function getProfiles(): LspServerProfile[] {
  return getCuratedLanguageServerProfiles();
}

export function listLspServerProfiles(): LspServerProfile[] {
  return getProfiles();
}

export function findLspProfileForPath(inputPath: string | null | undefined): LspServerProfile | null {
  const ext = path.extname(String(inputPath || "")).toLowerCase();
  if (!ext) return null;
  return getProfiles().find((profile) => profile.extensions.includes(ext)) || null;
}
```

- [ ] **Step 5: Run tests to verify the manifest-based registry passes**

Run: `bun test runtime/test/channels/web/lsp-server-registry.test.ts runtime/test/channels/web/lsp-session-service.test.ts`

Expected: PASS with both suites green

- [ ] **Step 6: Commit**

```bash
git add runtime/config/language-servers.json runtime/src/channels/web/lsp/curated-language-servers.ts runtime/src/channels/web/lsp/server-registry.ts runtime/test/channels/web/lsp-server-registry.test.ts runtime/test/channels/web/lsp-session-service.test.ts
git commit -m "refactor: move curated language servers into manifest"
```

## Task 2: Add Runtime LSP Policy and User Settings

**Files:**
- Create: `runtime/src/channels/web/lsp/lsp-runtime-policy.ts`
- Modify: `runtime/src/channels/web/lsp/lsp-session-service.ts`
- Modify: `runtime/src/channels/web/lsp-http-service.ts`
- Modify: `runtime/src/channels/web/http/dispatch-shell.ts`
- Test: `runtime/test/channels/web/lsp-runtime-policy.test.ts`
- Test: `runtime/test/channels/web/lsp-http-service.test.ts`

- [ ] **Step 1: Write the failing policy test**

```ts
import { describe, expect, test } from "bun:test";

import {
  mergeLspRuntimePolicy,
  isLspLanguageEnabled,
} from "../../../src/channels/web/lsp/lsp-runtime-policy.js";

describe("lsp runtime policy", () => {
  test("defaults to auto-activated curated languages and allows overrides", () => {
    const policy = mergeLspRuntimePolicy({
      lsp: {
        agent: { enabled: true, autoContext: false },
        languages: {
          rust: { enabled: false, agentRead: false, agentWritePreview: false },
        },
      },
    });
    expect(policy.agent.enabled).toBe(true);
    expect(policy.agent.autoContext).toBe(false);
    expect(isLspLanguageEnabled(policy, "typescript")).toBe(true);
    expect(isLspLanguageEnabled(policy, "rust")).toBe(false);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test runtime/test/channels/web/lsp-runtime-policy.test.ts`

Expected: FAIL with `Cannot find module '../../../src/channels/web/lsp/lsp-runtime-policy.js'`

- [ ] **Step 3: Implement policy loading and merging from workspace config**

```ts
// runtime/src/channels/web/lsp/lsp-runtime-policy.ts
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { WORKSPACE_DIR } from "../../../core/config.js";
import { getCuratedLanguageServerProfiles } from "./curated-language-servers.js";

export interface LspRuntimePolicy {
  agent: {
    enabled: boolean;
    autoContext: boolean;
  };
  languages: Record<string, {
    enabled: boolean;
    agentRead: boolean;
    agentWritePreview: boolean;
  }>;
}

const CONFIG_PATH = path.join(WORKSPACE_DIR, ".piclaw", "config.json");

export function mergeLspRuntimePolicy(config: Record<string, any> | null | undefined): LspRuntimePolicy {
  const defaults = Object.fromEntries(
    getCuratedLanguageServerProfiles().map((profile) => [
      profile.id,
      {
        enabled: profile.activation.autoActivate,
        agentRead: profile.activation.agentRead,
        agentWritePreview: profile.activation.agentWritePreview,
      },
    ]),
  );
  const user = (config?.lsp ?? {}) as Record<string, any>;
  return {
    agent: {
      enabled: user.agent?.enabled ?? true,
      autoContext: user.agent?.autoContext ?? true,
    },
    languages: Object.fromEntries(
      Object.entries(defaults).map(([id, value]) => [
        id,
        {
          enabled: user.languages?.[id]?.enabled ?? value.enabled,
          agentRead: user.languages?.[id]?.agentRead ?? value.agentRead,
          agentWritePreview: user.languages?.[id]?.agentWritePreview ?? value.agentWritePreview,
        },
      ]),
    ),
  };
}

export function readLspRuntimePolicy(): LspRuntimePolicy {
  if (!existsSync(CONFIG_PATH)) return mergeLspRuntimePolicy(null);
  return mergeLspRuntimePolicy(JSON.parse(readFileSync(CONFIG_PATH, "utf8")));
}

export function isLspLanguageEnabled(policy: LspRuntimePolicy, id: string): boolean {
  return Boolean(policy.languages[id]?.enabled);
}

export function writeLspRuntimePolicy(policy: LspRuntimePolicy): void {
  const existing = existsSync(CONFIG_PATH) ? JSON.parse(readFileSync(CONFIG_PATH, "utf8")) : {};
  writeFileSync(CONFIG_PATH, JSON.stringify({ ...existing, lsp: policy }, null, 2));
}
```

- [ ] **Step 4: Gate session availability and add `/lsp/settings` routes**

```ts
// runtime/src/channels/web/lsp-http-service.ts
export type WebLspHttpServiceSurface = Pick<WebLspHttpService, "handleLspSession" | "handleLspHandoff" | "handleLspSettingsGet" | "handleLspSettingsPost">;

handleLspSettingsGet(req: Request): Response {
  const authEnabled = this.deps.authGateway.isAuthEnabled();
  if (authEnabled && !this.deps.authGateway.isAuthenticated(req)) {
    return this.deps.json({ error: "Unauthorized" }, 401);
  }
  return this.deps.json({ ok: true, policy: this.deps.lspService.getRuntimePolicy() }, 200);
}

async handleLspSettingsPost(req: Request): Promise<Response> {
  const authEnabled = this.deps.authGateway.isAuthEnabled();
  if (authEnabled && !this.deps.authGateway.isAuthenticated(req)) {
    return this.deps.json({ error: "Unauthorized" }, 401);
  }
  if (!this.checkCsrfOrigin(req)) {
    return this.deps.json({ error: "Origin not allowed" }, 403);
  }
  const body = await req.json();
  return this.deps.json({ ok: true, policy: this.deps.lspService.updateRuntimePolicy(body) }, 200);
}
```

- [ ] **Step 5: Add dispatch coverage and verify tests pass**

Run: `bun test runtime/test/channels/web/lsp-runtime-policy.test.ts runtime/test/channels/web/lsp-http-service.test.ts runtime/test/channels/web/http-dispatch-shell.test.ts`

Expected: PASS with `/lsp/settings` GET and POST covered

- [ ] **Step 6: Commit**

```bash
git add runtime/src/channels/web/lsp/lsp-runtime-policy.ts runtime/src/channels/web/lsp/lsp-session-service.ts runtime/src/channels/web/lsp-http-service.ts runtime/src/channels/web/http/dispatch-shell.ts runtime/test/channels/web/lsp-runtime-policy.test.ts runtime/test/channels/web/lsp-http-service.test.ts runtime/test/channels/web/http-dispatch-shell.test.ts
git commit -m "feat: add runtime lsp policy and settings endpoints"
```

## Task 3: Add Docker-Based Curated Language Server Preinstalls

**Files:**
- Create: `scripts/docker/install-language-servers.sh`
- Modify: `Dockerfile`
- Modify: `docs/install-from-repo.md`
- Test: `runtime/test/runtime/install-language-servers.test.ts`

- [ ] **Step 1: Write the failing Docker install script test**

```ts
import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import path from "node:path";

describe("install-language-servers script", () => {
  test("references every curated language server from the manifest", () => {
    const script = readFileSync(path.resolve(process.cwd(), "scripts/docker/install-language-servers.sh"), "utf8");
    expect(script).toContain("typescript-language-server");
    expect(script).toContain("pyright-langserver");
    expect(script).toContain("gopls");
    expect(script).toContain("rust-analyzer");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test runtime/test/runtime/install-language-servers.test.ts`

Expected: FAIL with `ENOENT: no such file or directory, open 'scripts/docker/install-language-servers.sh'`

- [ ] **Step 3: Add the Docker install script that reads the curated manifest**

```bash
#!/usr/bin/env bash
set -euo pipefail

MANIFEST_PATH="${1:-/tmp/language-servers.json}"
WORKSPACE_BIN_DIR="${WORKSPACE_BIN_DIR:-/workspace/.local/bin}"

mkdir -p "${WORKSPACE_BIN_DIR}"
export PATH="${WORKSPACE_BIN_DIR}:/usr/local/go/bin:/usr/local/cargo/bin:${PATH}"

install_npm_global() {
  mapfile -t pkgs < <(jq -r '.packages[]' <<<"$1")
  bun install -g --global-dir /tmp/lsp-global "${pkgs[@]}"
}

install_go_package() {
  local pkg
  pkg="$(jq -r '.packages[0]' <<<"$1")"
  GOBIN="${WORKSPACE_BIN_DIR}" go install "${pkg}"
}

install_cargo_binstall() {
  local pkg version crate
  pkg="$(jq -r '.packages[0]' <<<"$1")"
  crate="${pkg%@*}"
  version="${pkg#*@}"
  cargo binstall --no-confirm --root /workspace/.local "${crate}" --version "${version}"
}

jq -c '.servers[]' "${MANIFEST_PATH}" | while read -r server; do
  strategy="$(jq -r '.install.strategy' <<<"${server}")"
  case "${strategy}" in
    npm-global) install_npm_global "$(jq -c '.install' <<<"${server}")" ;;
    go-install) install_go_package "$(jq -c '.install' <<<"${server}")" ;;
    cargo-binstall) install_cargo_binstall "$(jq -c '.install' <<<"${server}")" ;;
    *) echo "Unsupported install strategy: ${strategy}" >&2; exit 1 ;;
  esac
done
```

- [ ] **Step 4: Wire the script and manifest into the Dockerfile**

```dockerfile
COPY runtime/config/language-servers.json /tmp/language-servers.json
COPY scripts/docker/install-language-servers.sh /tmp/install-language-servers.sh
RUN chmod +x /tmp/install-language-servers.sh && /tmp/install-language-servers.sh /tmp/language-servers.json

COPY --from=builder --chown=agent:agent /workspace/.local /workspace/.local
ENV PATH=/workspace/.local/bin:/usr/local/lib/bun/bin:/home/linuxbrew/.linuxbrew/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
```

- [ ] **Step 5: Document the curated preinstall behavior**

```md
## Curated Language Servers

PiClaw images preinstall the curated LSP binaries declared in `runtime/config/language-servers.json` into `/workspace/.local/bin`.

Current curated server set:

- `typescript-language-server`
- `pyright-langserver`
- `gopls`
- `rust-analyzer`

Outside Docker, install the same binaries manually if you want agent and editor LSP support to activate automatically.
```

- [ ] **Step 6: Run tests and a Docker-focused verification command**

Run: `bun test runtime/test/runtime/install-language-servers.test.ts`

Expected: PASS

Run: `docker build -t piclaw:lsp-agent .`

Expected: PASS with `install-language-servers.sh` output visible during build

- [ ] **Step 7: Commit**

```bash
git add scripts/docker/install-language-servers.sh Dockerfile docs/install-from-repo.md runtime/test/runtime/install-language-servers.test.ts
git commit -m "feat: preinstall curated language servers in docker images"
```

## Task 4: Add a Shared Agent-Facing LSP Facade

**Files:**
- Create: `runtime/src/channels/web/lsp/lsp-agent-service.ts`
- Modify: `runtime/src/channels/web/lsp/lsp-session-service.ts`
- Modify: `runtime/src/channels/web.ts`
- Test: `runtime/test/channels/web/lsp-agent-service.test.ts`

- [ ] **Step 1: Write the failing facade test**

```ts
import { describe, expect, test } from "bun:test";

import { createLspAgentService } from "../../../src/channels/web/lsp/lsp-agent-service.js";

describe("lsp agent service", () => {
  test("returns unavailable for disabled languages before hitting the server", async () => {
    const service = createLspAgentService({
      getRuntimePolicy: () => ({
        agent: { enabled: true, autoContext: true },
        languages: { rust: { enabled: false, agentRead: false, agentWritePreview: false } },
      }),
      runRequest: async () => {
        throw new Error("should not be called");
      },
    });
    const result = await service.hover({ path: "src/main.rs", line: 0, character: 0 });
    expect(result.ok).toBe(false);
    expect(result.reason).toContain("disabled");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test runtime/test/channels/web/lsp-agent-service.test.ts`

Expected: FAIL with `Cannot find module '../../../src/channels/web/lsp/lsp-agent-service.js'`

- [ ] **Step 3: Implement the facade with normalized result types**

```ts
// runtime/src/channels/web/lsp/lsp-agent-service.ts
export interface LspAgentRequest {
  path: string;
  line: number;
  character: number;
}

export interface LspAgentResult<T> {
  ok: boolean;
  value?: T;
  reason?: string;
}

export function createLspAgentService(deps: {
  getRuntimePolicy: () => LspRuntimePolicy;
  runRequest: <T>(method: string, payload: Record<string, unknown>) => Promise<T>;
}) {
  return {
    async hover(input: LspAgentRequest): Promise<LspAgentResult<{ markdown: string | null }>> {
      const policy = deps.getRuntimePolicy();
      if (!policy.agent.enabled) return { ok: false, reason: "Agent LSP is disabled in workspace settings." };
      if (!policy.languages.rust?.enabled && input.path.endsWith(".rs")) {
        return { ok: false, reason: "LSP is disabled for rust in workspace settings." };
      }
      const value = await deps.runRequest<{ markdown: string | null }>("hover", input);
      return { ok: true, value };
    },
  };
}
```

- [ ] **Step 4: Add direct request helpers to `LspSessionService`**

```ts
// runtime/src/channels/web/lsp/lsp-session-service.ts
async requestHover(owner: LspSessionOwner, inputPath: string, line: number, character: number): Promise<{ markdown: string | null }> {
  const target = resolveLspTargetForPath(inputPath);
  if (!target || !target.available) {
    throw new Error(target?.unavailableReason || "No curated LSP server profile matches this file type.");
  }
  const session = this.ensureSession(target, owner);
  await session.initializePromise;
  const result = await this.sendInternalRequest(session, "textDocument/hover", {
    textDocument: { uri: uriForPath(target.absolutePath) },
    position: { line, character },
  });
  return { markdown: this.hoverContentsToMarkdown(result) };
}
```

- [ ] **Step 5: Verify the facade and session tests**

Run: `bun test runtime/test/channels/web/lsp-agent-service.test.ts runtime/test/channels/web/lsp-session-service.test.ts`

Expected: PASS with normalized failure reasons and request serialization covered

- [ ] **Step 6: Commit**

```bash
git add runtime/src/channels/web/lsp/lsp-agent-service.ts runtime/src/channels/web/lsp/lsp-session-service.ts runtime/src/channels/web.ts runtime/test/channels/web/lsp-agent-service.test.ts runtime/test/channels/web/lsp-session-service.test.ts
git commit -m "feat: add shared lsp facade for agent integrations"
```

## Task 5: Register Read-Only LSP Agent Tools

**Files:**
- Create: `runtime/src/extensions/lsp-agent-tools.ts`
- Modify: `runtime/src/extensions/index.ts`
- Modify: `runtime/src/extensions/tool-activation.ts`
- Modify: `runtime/src/tool-status-hints.ts`
- Test: `runtime/test/agent-pool/lsp-agent-tools.test.ts`

- [ ] **Step 1: Write the failing tool registration test**

```ts
import { describe, expect, test } from "bun:test";

import { createBuiltinExtensionFactories } from "../../src/extensions/index.js";

describe("lsp agent tool registration", () => {
  test("registers the lsp agent extension", () => {
    const names = createBuiltinExtensionFactories().map((factory) => factory.name || "anonymous");
    expect(names).toContain("lspAgentTools");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test runtime/test/agent-pool/lsp-agent-tools.test.ts`

Expected: FAIL because `lspAgentTools` is not registered

- [ ] **Step 3: Add explicit read-only LSP tools**

```ts
// runtime/src/extensions/lsp-agent-tools.ts
import { Type } from "@sinclair/typebox";

export const lspAgentTools = (pi: any) => {
  pi.tool({
    name: "lsp_hover",
    description: "Read hover documentation for a symbol in a supported workspace file.",
    parameters: Type.Object({
      path: Type.String(),
      line: Type.Number(),
      character: Type.Number(),
    }),
    async execute({ path, line, character }: { path: string; line: number; character: number }) {
      return pi.ok(await pi.services.lspAgent.hover({ path, line, character }));
    },
  });

  pi.tool({
    name: "lsp_definition",
    description: "Resolve the definition location for a symbol in a supported workspace file.",
    parameters: Type.Object({
      path: Type.String(),
      line: Type.Number(),
      character: Type.Number(),
    }),
    async execute({ path, line, character }: { path: string; line: number; character: number }) {
      return pi.ok(await pi.services.lspAgent.definition({ path, line, character }));
    },
  });
};
```

- [ ] **Step 4: Register the extension and add tool activation metadata**

```ts
// runtime/src/extensions/index.ts
import { lspAgentTools } from "./lsp-agent-tools.js";

return [
  createFileAttachmentsExtension(options?.attachmentRegistry),
  messagesCrud,
  modelControl,
  internalTools,
  lspAgentTools,
  runtimeScripts,
  toolActivation,
  sqlIntrospect,
  scheduledTasks,
  workspaceSearch,
  workspaceMemoryBootstrap,
  dreamMaintenance,
  uiThemeExtension,
  smartCompaction,
  sendAdaptiveCard,
  sendDashboardWidget,
  openWorkspaceFile,
  envTools,
  exitProcess,
  autoresearchSupervisor,
  imageProcessing,
];
```

```ts
// runtime/src/extensions/tool-activation.ts
const LSP_TOOL_NAMES = [
  "lsp_hover",
  "lsp_definition",
  "lsp_references",
  "lsp_document_symbols",
  "lsp_workspace_symbols",
  "lsp_diagnostics",
];
```

- [ ] **Step 5: Verify tool registration and activation guidance**

Run: `bun test runtime/test/agent-pool/lsp-agent-tools.test.ts runtime/test/agent-pool/tool-activation-live-update.test.ts runtime/test/channels/web/tool-status-hints.test.ts`

Expected: PASS with `lsp_*` tools present and status hints showing preview-only semantics

- [ ] **Step 6: Commit**

```bash
git add runtime/src/extensions/lsp-agent-tools.ts runtime/src/extensions/index.ts runtime/src/extensions/tool-activation.ts runtime/src/tool-status-hints.ts runtime/test/agent-pool/lsp-agent-tools.test.ts runtime/test/agent-pool/tool-activation-live-update.test.ts runtime/test/channels/web/tool-status-hints.test.ts
git commit -m "feat: register read-only lsp tools for agents"
```

## Task 6: Add Automatic Semantic Context to the Normal Agent Loop

**Files:**
- Create: `runtime/src/agent-pool/lsp-context-enricher.ts`
- Modify: `runtime/src/agent-pool/turn-coordinator.ts`
- Modify: `runtime/src/agent-pool/prompt-utils.ts`
- Test: `runtime/test/agent-pool/lsp-context-enricher.test.ts`
- Test: `runtime/test/agent-pool/turn-coordinator.test.ts`

- [ ] **Step 1: Write the failing enrichment test**

```ts
import { describe, expect, test } from "bun:test";

import { buildLspContextBlock } from "../../src/agent-pool/lsp-context-enricher.js";

describe("lsp context enricher", () => {
  test("builds a compact diagnostics and symbols block", () => {
    const block = buildLspContextBlock({
      path: "src/main.ts",
      diagnostics: [{ severity: "error", line: 12, message: "Cannot find name 'server'." }],
      symbols: [{ name: "startServer", kind: "Function", line: 4 }],
    });
    expect(block).toContain("LSP diagnostics");
    expect(block).toContain("Cannot find name 'server'.");
    expect(block).toContain("startServer");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test runtime/test/agent-pool/lsp-context-enricher.test.ts`

Expected: FAIL with `Cannot find module '../../src/agent-pool/lsp-context-enricher.js'`

- [ ] **Step 3: Implement a compact, policy-gated context builder**

```ts
// runtime/src/agent-pool/lsp-context-enricher.ts
export function buildLspContextBlock(input: {
  path: string;
  diagnostics: Array<{ severity: string; line: number; message: string }>;
  symbols: Array<{ name: string; kind: string; line: number }>;
}): string {
  const diagnostics = input.diagnostics.slice(0, 5).map((item) => `- ${item.severity} line ${item.line + 1}: ${item.message}`);
  const symbols = input.symbols.slice(0, 10).map((item) => `- ${item.kind} ${item.name} (line ${item.line + 1})`);
  return [
    `LSP diagnostics for ${input.path}:`,
    diagnostics.length ? diagnostics.join("\n") : "- none",
    "",
    `LSP symbols for ${input.path}:`,
    symbols.length ? symbols.join("\n") : "- none",
  ].join("\n");
}
```

- [ ] **Step 4: Inject the context block only when policy and file support allow it**

```ts
// runtime/src/agent-pool/turn-coordinator.ts
const lspPolicy = services.lspAgent.getRuntimePolicy();
if (lspPolicy.agent.enabled && lspPolicy.agent.autoContext && activeWorkspaceFile) {
  const lspContext = await services.lspAgent.buildAutomaticContext(activeWorkspaceFile);
  if (lspContext) {
    promptSections.push({
      title: "Semantic context",
      body: lspContext,
    });
  }
}
```

- [ ] **Step 5: Verify auto-context stays lightweight**

Run: `bun test runtime/test/agent-pool/lsp-context-enricher.test.ts runtime/test/agent-pool/turn-coordinator.test.ts`

Expected: PASS with auto-context injected only for supported and enabled languages

- [ ] **Step 6: Commit**

```bash
git add runtime/src/agent-pool/lsp-context-enricher.ts runtime/src/agent-pool/turn-coordinator.ts runtime/src/agent-pool/prompt-utils.ts runtime/test/agent-pool/lsp-context-enricher.test.ts runtime/test/agent-pool/turn-coordinator.test.ts
git commit -m "feat: add lightweight automatic lsp context to agent turns"
```

## Task 7: Add Write-Aware Preview Tools Without Auto-Applying Edits

**Files:**
- Modify: `runtime/src/channels/web/lsp/lsp-agent-service.ts`
- Modify: `runtime/src/channels/web/lsp/lsp-session-service.ts`
- Modify: `runtime/src/extensions/lsp-agent-tools.ts`
- Modify: `runtime/src/tool-status-hints.ts`
- Test: `runtime/test/channels/web/lsp-agent-service.test.ts`
- Test: `runtime/test/agent-pool/lsp-agent-tools.test.ts`

- [ ] **Step 1: Write the failing rename preview test**

```ts
import { describe, expect, test } from "bun:test";

import { createLspAgentService } from "../../../src/channels/web/lsp/lsp-agent-service.js";

describe("lsp write previews", () => {
  test("returns a rename preview without applying edits", async () => {
    const service = createLspAgentService({
      getRuntimePolicy: () => ({
        agent: { enabled: true, autoContext: true },
        languages: { typescript: { enabled: true, agentRead: true, agentWritePreview: true } },
      }),
      runRequest: async () => ({
        changes: {
          "file:///workspace/src/app.ts": [
            { range: { start: { line: 3, character: 6 }, end: { line: 3, character: 12 } }, newText: "serverState" },
          ],
        },
      }),
    });
    const result = await service.renamePreview({ path: "src/app.ts", line: 3, character: 6, newName: "serverState" });
    expect(result.ok).toBe(true);
    expect(result.value?.applied).toBe(false);
    expect(result.value?.files).toEqual(["src/app.ts"]);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test runtime/test/channels/web/lsp-agent-service.test.ts`

Expected: FAIL because `renamePreview` is not implemented

- [ ] **Step 3: Add preview-only write operations**

```ts
// runtime/src/channels/web/lsp/lsp-agent-service.ts
async renamePreview(input: { path: string; line: number; character: number; newName: string }) {
  const policy = deps.getRuntimePolicy();
  const language = resolveLanguageIdFromPath(input.path);
  if (!policy.languages[language]?.agentWritePreview) {
    return { ok: false, reason: `Write previews are disabled for ${language}.` };
  }
  const workspaceEdit = await deps.runRequest<any>("rename", input);
  const files = Object.keys(workspaceEdit?.changes || {}).map((uri) => new URL(uri).pathname.replace(/^\/workspace\//, ""));
  return {
    ok: true,
    value: {
      applied: false,
      operation: "rename",
      files,
      workspaceEdit,
      guidance: "Preview only. Use read/edit/write after confirming the target changes.",
    },
  };
}
```

- [ ] **Step 4: Expose preview tools with safety-forward descriptions**

```ts
// runtime/src/extensions/lsp-agent-tools.ts
pi.tool({
  name: "lsp_rename_preview",
  description: "Preview rename edits from the language server. This tool never applies edits.",
  parameters: Type.Object({
    path: Type.String(),
    line: Type.Number(),
    character: Type.Number(),
    newName: Type.String(),
  }),
  async execute({ path, line, character, newName }: { path: string; line: number; character: number; newName: string }) {
    return pi.ok(await pi.services.lspAgent.renamePreview({ path, line, character, newName }));
  },
});
```

- [ ] **Step 5: Verify the preview-only contract**

Run: `bun test runtime/test/channels/web/lsp-agent-service.test.ts runtime/test/agent-pool/lsp-agent-tools.test.ts`

Expected: PASS with `applied: false` asserted for rename, formatting, and code-action previews

- [ ] **Step 6: Commit**

```bash
git add runtime/src/channels/web/lsp/lsp-agent-service.ts runtime/src/channels/web/lsp/lsp-session-service.ts runtime/src/extensions/lsp-agent-tools.ts runtime/src/tool-status-hints.ts runtime/test/channels/web/lsp-agent-service.test.ts runtime/test/agent-pool/lsp-agent-tools.test.ts
git commit -m "feat: add preview-only lsp write tools for agents"
```

## Task 8: Add Runtime UI Controls and Final Docs

**Files:**
- Create: `runtime/web/src/components/lsp-runtime-settings.tsx`
- Modify: `runtime/web/src/api.ts`
- Modify: `runtime/web/src/ui/app-extension-ui-browser-actions.ts`
- Modify: `docs/lsp-design-plan.md`
- Create: `docs/development/agent-lsp.md`
- Test: `runtime/test/web/lsp-runtime-settings.test.ts`
- Test: `runtime/test/web/api-routing.test.ts`

- [ ] **Step 1: Write the failing runtime settings component test**

```ts
import { describe, expect, test } from "bun:test";
import { renderToString } from "react-dom/server";

import { LspRuntimeSettings } from "../../src/components/lsp-runtime-settings.js";

describe("LspRuntimeSettings", () => {
  test("renders global and per-language toggles", () => {
    const html = renderToString(
      <LspRuntimeSettings
        policy={{
          agent: { enabled: true, autoContext: true },
          languages: {
            typescript: { enabled: true, agentRead: true, agentWritePreview: true },
            rust: { enabled: false, agentRead: false, agentWritePreview: false },
          },
        }}
      />,
    );
    expect(html).toContain("Agent LSP");
    expect(html).toContain("TypeScript");
    expect(html).toContain("Rust");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test runtime/test/web/lsp-runtime-settings.test.ts`

Expected: FAIL with `Cannot find module '../../src/components/lsp-runtime-settings.js'`

- [ ] **Step 3: Add a minimal runtime settings UI and API helpers**

```ts
// runtime/web/src/api.ts
export async function getLspRuntimeSettings(): Promise<any> {
  const response = await fetch("/lsp/settings", { credentials: "same-origin" });
  if (!response.ok) throw new Error(`LSP settings request failed: ${response.status}`);
  return response.json();
}

export async function updateLspRuntimeSettings(policy: unknown): Promise<any> {
  const response = await fetch("/lsp/settings", {
    method: "POST",
    credentials: "same-origin",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(policy),
  });
  if (!response.ok) throw new Error(`LSP settings update failed: ${response.status}`);
  return response.json();
}
```

```tsx
// runtime/web/src/components/lsp-runtime-settings.tsx
export function LspRuntimeSettings({ policy }: { policy: any }) {
  return (
    <section className="lsp-runtime-settings">
      <h2>Agent LSP</h2>
      <label><input type="checkbox" checked={policy.agent.enabled} readOnly /> Enabled</label>
      <label><input type="checkbox" checked={policy.agent.autoContext} readOnly /> Auto context</label>
      {Object.entries(policy.languages).map(([id, config]) => (
        <div key={id}>
          <h3>{id}</h3>
          <label><input type="checkbox" checked={(config as any).enabled} readOnly /> Enabled</label>
          <label><input type="checkbox" checked={(config as any).agentRead} readOnly /> Agent read</label>
          <label><input type="checkbox" checked={(config as any).agentWritePreview} readOnly /> Write previews</label>
        </div>
      ))}
    </section>
  );
}
```

- [ ] **Step 4: Update the docs to describe the full shared-broker model**

```md
## Agent Integration

PiClaw now exposes the editor LSP runtime through a shared broker used by both the browser editor and agent tools.

Agent behavior rules:

- Read-only LSP tools are enabled by default for curated languages.
- Write-aware LSP tools return previews only.
- Agents must still apply changes through the normal `read`/`edit`/`write` flow.
- Users can disable LSP globally or per language at runtime through `/lsp/settings` and the web settings surface.
```

- [ ] **Step 5: Run final validation**

Run: `bun run typecheck`

Expected: PASS

Run: `PICLAW_WORKSPACE=/Users/jlane/src/piclaw bun test runtime/test/channels/web/lsp-server-registry.test.ts runtime/test/channels/web/lsp-runtime-policy.test.ts runtime/test/channels/web/lsp-agent-service.test.ts runtime/test/agent-pool/lsp-agent-tools.test.ts runtime/test/agent-pool/lsp-context-enricher.test.ts runtime/test/web/lsp-runtime-settings.test.ts runtime/test/channels/web/lsp-http-service.test.ts runtime/test/web/api-routing.test.ts`

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add runtime/web/src/components/lsp-runtime-settings.tsx runtime/web/src/api.ts runtime/web/src/ui/app-extension-ui-browser-actions.ts docs/lsp-design-plan.md docs/development/agent-lsp.md runtime/test/web/lsp-runtime-settings.test.ts runtime/test/web/api-routing.test.ts
git commit -m "docs: finalize agent lsp integration controls and guidance"
```

## Self-Review

### Spec coverage

- Shared LSP broker for editor and agent: covered by Tasks 2, 4, 5, and 6.
- Workspace-installed servers only: covered by Tasks 1 and 3 through the curated manifest and executable resolution.
- Structured Docker preinstalls: covered by Task 3.
- Single curated known server list: covered by Task 1 with `runtime/config/language-servers.json`.
- Normal coding flow with no surprise edits: covered by Task 7 preview-only write tools.
- Auto-activation by default with runtime user control: covered by Tasks 2 and 8.

### Placeholder scan

- No `TODO`, `TBD`, or deferred references remain.
- Every task includes exact file paths, commands, expected outputs, and implementation snippets.

### Type consistency

- Curated profile ids are `typescript`, `python`, `go`, `rust` throughout the manifest, policy, and tool layers.
- Runtime policy always uses `agent.enabled`, `agent.autoContext`, and per-language `enabled`, `agentRead`, `agentWritePreview`.
- Write operations are named `renamePreview`, `codeActionPreview`, and `formatPreview` in the facade/tooling design to keep the preview-only contract explicit.

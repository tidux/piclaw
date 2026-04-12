/**
 * agent-pool/session.ts – pi-agent session creation and directory management.
 *
 * Handles the setup of per-chat agent sessions:
 *   - Creates the session directory under SESSIONS_DIR for each chat JID.
 *   - Configures the resource loader with workspace extensions and skills.
 *   - Uses SessionManager.continueRecent() to resume from the most recent
 *     session tree leaf (conversation context persistence).
 *
 * Consumers:
 *   - agent-pool.ts calls createDefaultSession() to initialise or replace
 *     the agent session for a chat.
 *   - ensureSessionDir() is also used by agent-control/handlers/session.ts.
 */

import { mkdirSync, existsSync } from "fs";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";
import {
  type AgentSessionRuntime,
  type CreateAgentSessionRuntimeFactory,
  type ExtensionFactory,
  createAgentSessionFromServices,
  createAgentSessionRuntime,
  createAgentSessionServices,
  getAgentDir,
  SessionManager,
  type AuthStorage,
  type ModelRegistry,
  type SettingsManager,
} from "@mariozechner/pi-coding-agent";

import { SESSIONS_DIR, WORKSPACE_DIR } from "../core/config.js";
import { buildChannelSystemPromptAppendix } from "../channels/formatting.js";
import { detectChannel } from "../router.js";
import { builtinExtensionFactories } from "../extensions/index.js";
import { bindImmediateToolActivation } from "./tool-activation-live-update.js";
import { ensureExtensionNodeModulesLink } from "./session-node-modules-link.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

type AgentSessionCreateOptions = {
  tools: NonNullable<NonNullable<Parameters<typeof createAgentSessionFromServices>[0]>["tools"]>;
  extensionFactories?: ExtensionFactory[];
};

/**
 * Bundled extension paths that are loaded when their activation env vars
 * are present.  The files live inside the piclaw package tree so that
 * node_modules resolution (for @mariozechner/pi-ai internals etc.) works.
 *
 * Because bun may hoist dependencies, we create a node_modules symlink
 * next to the extensions directory pointing to the nearest real
 * node_modules so that jiti's fallback resolution finds packages like
 * @mariozechner/pi-ai/dist/providers/*.
 */
const EXTENSIONS_DIR = resolve(__dirname, "../../extensions");

const OPTIONAL_EXTENSIONS: { path: string; envGate?: string }[] = [
  { path: resolve(EXTENSIONS_DIR, "integrations", "azure-openai.ts"), envGate: "AOAI_BASE_URL" },
  { path: resolve(EXTENSIONS_DIR, "integrations", "context-mode.ts") },
  { path: resolve(EXTENSIONS_DIR, "integrations", "bun-runner", "index.ts") },
  { path: resolve(EXTENSIONS_DIR, "integrations", "keychain", "index.ts") },
  { path: resolve(EXTENSIONS_DIR, "integrations", "ssh", "index.ts") },
  { path: resolve(EXTENSIONS_DIR, "integrations", "proxmox", "index.ts") },
  { path: resolve(EXTENSIONS_DIR, "integrations", "portainer", "index.ts") },
  { path: resolve(EXTENSIONS_DIR, "browser", "cdp-browser", "index.ts") },
  { path: resolve(EXTENSIONS_DIR, "platform", "windows", "powershell", "index.ts") },
  { path: resolve(EXTENSIONS_DIR, "platform", "windows", "win-ui", "index.ts") },
  { path: resolve(EXTENSIONS_DIR, "viewers", "office-viewer", "index.ts") },
  { path: resolve(EXTENSIONS_DIR, "integrations", "office-tools", "index.ts") },
  { path: resolve(EXTENSIONS_DIR, "viewers", "drawio-editor", "index.ts") },
  { path: resolve(EXTENSIONS_DIR, "experimental", "m365", "index.ts"), envGate: "PICLAW_ENABLE_M365_EXPERIMENTAL" },
];

const PACKAGED_EXTENSION_ENTRIES = [
  { packageName: "pi-mcp-adapter", entry: "index.ts" },
] as const;

/** Walk up from startDir looking for a node_modules that contains @mariozechner/pi-ai. */
function findNodeModules(startDir: string): string | null {
  let dir = startDir;
  for (let i = 0; i < 10; i++) {
    const candidate = join(dir, "node_modules");
    if (existsSync(join(candidate, "@mariozechner", "pi-ai"))) return candidate;
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return null;
}

function resolvePackagedExtensionEntries(nodeModulesDir: string | null): string[] {
  if (!nodeModulesDir) return [];

  const resolved: string[] = [];
  for (const candidate of PACKAGED_EXTENSION_ENTRIES) {
    const entryPath = join(nodeModulesDir, candidate.packageName, candidate.entry);
    if (existsSync(entryPath)) {
      resolved.push(entryPath);
    }
  }
  return resolved;
}

function getBundledExtensionPaths(): string[] {
  const nodeModulesDir = findNodeModules(EXTENSIONS_DIR);
  const paths = OPTIONAL_EXTENSIONS
    .filter(({ envGate }) => !envGate || !!process.env[envGate])
    .map(({ path }) => path);
  paths.push(...resolvePackagedExtensionEntries(nodeModulesDir));
  if (paths.length === 0) return paths;

  // Ensure a node_modules symlink exists next to the extensions dir
  // so jiti can resolve deep package imports.
  ensureExtensionNodeModulesLink(EXTENSIONS_DIR, nodeModulesDir);
  return paths;
}

/** Ensure the session directory exists for a chat and return its path. */
export function ensureSessionDir(chatJid: string): string {
  const chatSessionDir = join(SESSIONS_DIR, sanitiseJid(chatJid));
  mkdirSync(chatSessionDir, { recursive: true });
  return chatSessionDir;
}

/** Ensure a named auxiliary session directory exists for a chat and return its path. */
export function ensureNamedSessionDir(chatJid: string, name: string): string {
  const dir = join(SESSIONS_DIR, `${sanitiseJid(chatJid)}__${sanitiseJid(name)}`);
  mkdirSync(dir, { recursive: true });
  return dir;
}

/**
 * Create a fully-configured pi-agent session for the given chat.
 * Loads workspace resources (AGENTS.md, skills, extensions, prompt templates)
 * and resumes the most recent session tree.
 */
export async function createSessionInDir(
  sessionDir: string,
  options: {
    authStorage: AuthStorage;
    modelRegistry: ModelRegistry;
    settingsManager: SettingsManager;
    tools: NonNullable<AgentSessionCreateOptions["tools"]>;
    extensionFactories?: ExtensionFactory[];
    chatJid?: string;
  }
): Promise<AgentSessionRuntime> {
  const channelSystemPromptAppendix = buildChannelSystemPromptAppendix(
    options.chatJid ? detectChannel(options.chatJid) : null,
  );

  const createRuntime: CreateAgentSessionRuntimeFactory = async ({ cwd, sessionManager, sessionStartEvent }) => {
    const services = await createAgentSessionServices({
      cwd,
      agentDir: getAgentDir(),
      authStorage: options.authStorage,
      modelRegistry: options.modelRegistry,
      settingsManager: options.settingsManager,
      resourceLoaderOptions: {
        extensionFactories: [...builtinExtensionFactories, ...(options.extensionFactories ?? [])],
        additionalExtensionPaths: getBundledExtensionPaths(),
        ...(channelSystemPromptAppendix
          ? {
              appendSystemPromptOverride: (base: string[]) => [...base, channelSystemPromptAppendix],
            }
          : {}),
      },
    });

    return {
      ...(await createAgentSessionFromServices({
        services,
        sessionManager,
        sessionStartEvent,
        tools: options.tools,
      })),
      services,
      diagnostics: services.diagnostics,
    };
  };

  const runtime = await createAgentSessionRuntime(createRuntime, {
    cwd: WORKSPACE_DIR,
    agentDir: getAgentDir(),
    sessionManager: SessionManager.continueRecent(WORKSPACE_DIR, sessionDir),
  });

  bindImmediateToolActivation(runtime.session as any);
  return runtime;
}

export async function createDefaultSession(
  chatJid: string,
  options: {
    authStorage: AuthStorage;
    modelRegistry: ModelRegistry;
    settingsManager: SettingsManager;
    tools: NonNullable<AgentSessionCreateOptions["tools"]>;
    extensionFactories?: ExtensionFactory[];
  }
): Promise<AgentSessionRuntime> {
  const chatSessionDir = ensureSessionDir(chatJid);
  return createSessionInDir(chatSessionDir, {
    ...options,
    chatJid,
  });
}

/** Replace characters that are unsafe for filesystem paths. */
export function sanitiseJid(jid: string): string {
  return jid.replace(/[^a-zA-Z0-9._-]/g, "_");
}

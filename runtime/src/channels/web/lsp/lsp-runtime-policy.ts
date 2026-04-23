import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import { PICLAW_CONFIG_PATH } from "../../../core/config.js";
import { listLspServerProfiles, type LspServerProfile } from "./server-registry.js";

export interface LspLanguageRuntimePolicy {
  enabled: boolean;
}

export interface LspRuntimePolicySettings {
  agents: {
    editor: {
      languages: Record<string, LspLanguageRuntimePolicy>;
    };
  };
}

export interface LspRuntimePolicyUpdate {
  agents?: {
    editor?: {
      languages?: Record<string, Partial<LspLanguageRuntimePolicy>>;
    };
  };
}

export interface LspRuntimePolicyOptions {
  configPath?: string | null;
  profiles?: readonly LspServerProfile[];
}

interface LspRuntimePolicyStoredConfig {
  web?: {
    lsp?: LspRuntimePolicyUpdate;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

const SETTINGS_TOP_LEVEL_KEYS = new Set(["agents"]);
const AGENT_KEYS = new Set(["editor"]);
const EDITOR_KEYS = new Set(["languages"]);
const LANGUAGE_KEYS = new Set(["enabled"]);
const EDITOR_AGENT_ID = "editor";

export function getDefaultLspRuntimePolicySettings(
  profiles: readonly Pick<LspServerProfile, "languageId">[] = listLspServerProfiles(),
): LspRuntimePolicySettings {
  return {
    agents: {
      editor: {
        languages: Object.fromEntries(
          profiles.map((profile) => [profile.languageId, { enabled: true }]),
        ),
      },
    },
  };
}

export function getLspLanguageDisabledReason(languageId: string): string {
  return `LSP is disabled for the "${languageId}" language in workspace settings.`;
}

export class LspRuntimePolicyValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LspRuntimePolicyValidationError";
  }
}

export class LspRuntimePolicy {
  private readonly configPath: string | null;
  private readonly defaultSettings: LspRuntimePolicySettings;
  private readonly knownLanguageIds: Set<string>;
  private overrides: LspRuntimePolicyUpdate;

  constructor(options: LspRuntimePolicyOptions = {}) {
    this.configPath = options.configPath === undefined ? null : options.configPath;
    this.defaultSettings = getDefaultLspRuntimePolicySettings(options.profiles);
    this.knownLanguageIds = new Set(Object.keys(this.defaultSettings.agents.editor.languages));
    this.overrides = this.loadOverrides();
  }

  getSettings(): LspRuntimePolicySettings {
    return mergeLspRuntimePolicySettings(this.defaultSettings, this.overrides);
  }

  isLanguageEnabled(languageId: string | null | undefined): boolean {
    const normalized = String(languageId || "").trim();
    if (!normalized || !this.knownLanguageIds.has(normalized)) return true;
    return this.getSettings().agents.editor.languages[normalized]?.enabled !== false;
  }

  updateSettings(update: unknown): LspRuntimePolicySettings {
    const validatedUpdate = validateLspRuntimePolicyUpdate(update, this.knownLanguageIds);
    const mergedSettings = mergeLspRuntimePolicySettings(this.defaultSettings, this.overrides, validatedUpdate);
    const nextOverrides = diffLspRuntimePolicySettings(this.defaultSettings, mergedSettings);
    this.persistOverrides(nextOverrides);
    this.overrides = nextOverrides;
    return mergedSettings;
  }

  private loadOverrides(): LspRuntimePolicyUpdate {
    if (!this.configPath) return {};
    try {
      const raw = readFileSync(this.configPath, "utf8");
      const parsed = JSON.parse(raw) as LspRuntimePolicyStoredConfig;
      const stored = parsed?.web?.lsp;
      if (!stored) return {};
      return sanitizeStoredLspRuntimePolicyUpdate(stored, this.knownLanguageIds);
    } catch {
      return {};
    }
  }

  private persistOverrides(nextOverrides: LspRuntimePolicyUpdate): void {
    if (!this.configPath) return;
    const config = this.readExistingConfig();
    const nextConfig: LspRuntimePolicyStoredConfig = isPlainObject(config) ? { ...config } : {};
    const hasOverrides = hasAnyLspRuntimePolicyOverride(nextOverrides);
    const existingWeb = isPlainObject(nextConfig.web) ? { ...nextConfig.web } : {};
    const staleLanguages = getStalePersistedLanguageEntries(existingWeb.lsp, this.knownLanguageIds);

    if (hasOverrides) {
      existingWeb.lsp = mergeOverridesWithStaleLanguages(nextOverrides, staleLanguages);
      nextConfig.web = existingWeb;
    } else if ("web" in nextConfig) {
      delete existingWeb.lsp;
      if (Object.keys(existingWeb).length > 0) {
        nextConfig.web = existingWeb;
      } else {
        delete nextConfig.web;
      }
    }

    mkdirSync(path.dirname(this.configPath), { recursive: true });
    writeFileSync(this.configPath, `${JSON.stringify(nextConfig, null, 2)}\n`, "utf8");
  }

  private readExistingConfig(): LspRuntimePolicyStoredConfig {
    if (!this.configPath) return {};
    try {
      const parsed = JSON.parse(readFileSync(this.configPath, "utf8")) as unknown;
      return validateSharedConfigShape(parsed);
    } catch (error: any) {
      if (error?.code === "ENOENT") return {};
      throw error;
    }
  }
}

export function getDefaultLspRuntimePolicyConfigPath(): string {
  return PICLAW_CONFIG_PATH;
}

export function mergeLspRuntimePolicySettings(
  defaults: LspRuntimePolicySettings,
  ...updates: Array<LspRuntimePolicyUpdate | null | undefined>
): LspRuntimePolicySettings {
  const merged: LspRuntimePolicySettings = {
    agents: {
      editor: {
        languages: Object.fromEntries(
          Object.entries(defaults.agents.editor.languages).map(([languageId, policy]) => [
            languageId,
            { enabled: policy.enabled !== false },
          ]),
        ),
      },
    },
  };

  for (const update of updates) {
    const languages = update?.agents?.editor?.languages;
    if (!languages || !isPlainObject(languages)) continue;
    for (const [languageId, value] of Object.entries(languages)) {
      if (!isPlainObject(value) || typeof value.enabled !== "boolean") continue;
      if (!merged.agents.editor.languages[languageId]) continue;
      merged.agents.editor.languages[languageId] = { enabled: value.enabled };
    }
  }

  return merged;
}

export function diffLspRuntimePolicySettings(
  defaults: LspRuntimePolicySettings,
  settings: LspRuntimePolicySettings,
): LspRuntimePolicyUpdate {
  const languages: Record<string, Partial<LspLanguageRuntimePolicy>> = {};
  for (const [languageId, policy] of Object.entries(settings.agents.editor.languages)) {
    const defaultEnabled = defaults.agents.editor.languages[languageId]?.enabled !== false;
    if (policy.enabled !== defaultEnabled) {
      languages[languageId] = { enabled: policy.enabled };
    }
  }
  if (Object.keys(languages).length === 0) return {};
  return {
    agents: {
      editor: {
        languages,
      },
    },
  };
}

export function validateLspRuntimePolicyUpdate(
  input: unknown,
  knownLanguageIds: ReadonlySet<string>,
): LspRuntimePolicyUpdate {
  if (!isPlainObject(input)) {
    throw new LspRuntimePolicyValidationError("LSP settings update must be an object.");
  }

  for (const key of Object.keys(input)) {
    if (!SETTINGS_TOP_LEVEL_KEYS.has(key)) {
      throw new LspRuntimePolicyValidationError(`Unknown LSP settings key "${key}".`);
    }
  }

  const agents = input.agents;
  if (agents === undefined) return {};
  if (!isPlainObject(agents)) {
    throw new LspRuntimePolicyValidationError("LSP settings agents must be an object.");
  }
  for (const key of Object.keys(agents)) {
    if (!AGENT_KEYS.has(key)) {
      throw new LspRuntimePolicyValidationError(`Unknown LSP settings agent "${key}".`);
    }
  }

  const editor = agents[EDITOR_AGENT_ID];
  if (editor === undefined) return {};
  if (!isPlainObject(editor)) {
    throw new LspRuntimePolicyValidationError("LSP editor settings must be an object.");
  }
  for (const key of Object.keys(editor)) {
    if (!EDITOR_KEYS.has(key)) {
      throw new LspRuntimePolicyValidationError(`Unknown LSP editor settings key "${key}".`);
    }
  }

  const rawLanguages = editor.languages;
  if (rawLanguages === undefined) return {};
  if (!isPlainObject(rawLanguages)) {
    throw new LspRuntimePolicyValidationError("LSP language settings must be an object.");
  }

  const languages: Record<string, Partial<LspLanguageRuntimePolicy>> = {};
  for (const [languageId, value] of Object.entries(rawLanguages)) {
    if (!knownLanguageIds.has(languageId)) {
      throw new LspRuntimePolicyValidationError(`Unknown LSP language "${languageId}".`);
    }
    if (!isPlainObject(value)) {
      throw new LspRuntimePolicyValidationError(`LSP settings for language "${languageId}" must be an object.`);
    }
    for (const key of Object.keys(value)) {
      if (!LANGUAGE_KEYS.has(key)) {
        throw new LspRuntimePolicyValidationError(
          `Unknown LSP language setting "${key}" for "${languageId}".`,
        );
      }
    }
    if (value.enabled !== undefined && typeof value.enabled !== "boolean") {
      throw new LspRuntimePolicyValidationError(`LSP language setting "enabled" for "${languageId}" must be a boolean.`);
    }
    if (typeof value.enabled === "boolean") {
      languages[languageId] = { enabled: value.enabled };
    }
  }

  if (Object.keys(languages).length === 0) return {};
  return {
    agents: {
      editor: {
        languages,
      },
    },
  };
}

function sanitizeStoredLspRuntimePolicyUpdate(
  input: unknown,
  knownLanguageIds: ReadonlySet<string>,
): LspRuntimePolicyUpdate {
  if (!isPlainObject(input)) return {};
  const agents = input.agents;
  if (!isPlainObject(agents)) return {};
  const editor = agents[EDITOR_AGENT_ID];
  if (!isPlainObject(editor)) return {};
  const rawLanguages = editor.languages;
  if (!isPlainObject(rawLanguages)) return {};

  const languages: Record<string, Partial<LspLanguageRuntimePolicy>> = {};
  for (const [languageId, value] of Object.entries(rawLanguages)) {
    if (!knownLanguageIds.has(languageId) || !isPlainObject(value)) continue;
    if (typeof value.enabled === "boolean") {
      languages[languageId] = { enabled: value.enabled };
    }
  }

  if (Object.keys(languages).length === 0) return {};
  return {
    agents: {
      editor: {
        languages,
      },
    },
  };
}

function validateSharedConfigShape(input: unknown): LspRuntimePolicyStoredConfig {
  if (!isPlainObject(input)) {
    throw new LspRuntimePolicyValidationError("Shared Piclaw config must be a JSON object.");
  }
  if ("web" in input && input.web !== undefined && !isPlainObject(input.web)) {
    throw new LspRuntimePolicyValidationError('Shared Piclaw config key "web" must be an object.');
  }
  if (isPlainObject(input.web) && "lsp" in input.web && input.web.lsp !== undefined && !isPlainObject(input.web.lsp)) {
    throw new LspRuntimePolicyValidationError('Shared Piclaw config key "web.lsp" must be an object.');
  }
  return input as LspRuntimePolicyStoredConfig;
}

function getStalePersistedLanguageEntries(
  lspConfig: unknown,
  knownLanguageIds: ReadonlySet<string>,
): Record<string, unknown> {
  if (!isPlainObject(lspConfig)) return {};
  const agents = lspConfig.agents;
  if (!isPlainObject(agents)) return {};
  const editor = agents[EDITOR_AGENT_ID];
  if (!isPlainObject(editor)) return {};
  const languages = editor.languages;
  if (!isPlainObject(languages)) return {};

  const staleEntries: Record<string, unknown> = {};
  for (const [languageId, value] of Object.entries(languages)) {
    if (knownLanguageIds.has(languageId)) continue;
    staleEntries[languageId] = value;
  }
  return staleEntries;
}

function mergeOverridesWithStaleLanguages(
  overrides: LspRuntimePolicyUpdate,
  staleLanguages: Record<string, unknown>,
): LspRuntimePolicyUpdate {
  const knownLanguages = overrides.agents?.editor?.languages || {};
  const mergedLanguages = Object.keys(staleLanguages).length > 0
    ? { ...staleLanguages, ...knownLanguages }
    : knownLanguages;

  return {
    agents: {
      editor: {
        languages: mergedLanguages,
      },
    },
  };
}

function hasAnyLspRuntimePolicyOverride(overrides: LspRuntimePolicyUpdate): boolean {
  return Object.keys(overrides.agents?.editor?.languages || {}).length > 0;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

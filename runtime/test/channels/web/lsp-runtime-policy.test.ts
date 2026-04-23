import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

import { createTempWorkspace } from "../../helpers.js";
import {
  LspRuntimePolicy,
  LspRuntimePolicyValidationError,
  diffLspRuntimePolicySettings,
  getDefaultLspRuntimePolicySettings,
  mergeLspRuntimePolicySettings,
} from "../../../src/channels/web/lsp/lsp-runtime-policy.js";

describe("LspRuntimePolicy", () => {
  test("merges curated defaults with sparse overrides", () => {
    const defaults = getDefaultLspRuntimePolicySettings([
      { languageId: "typescript" },
      { languageId: "python" },
    ] as any);

    const merged = mergeLspRuntimePolicySettings(defaults, {
      agents: {
        editor: {
          languages: {
            typescript: { enabled: false },
          },
        },
      },
    });

    expect(merged).toEqual({
      agents: {
        editor: {
          languages: {
            typescript: { enabled: false },
            python: { enabled: true },
          },
        },
      },
    });

    expect(diffLspRuntimePolicySettings(defaults, merged)).toEqual({
      agents: {
        editor: {
          languages: {
            typescript: { enabled: false },
          },
        },
      },
    });
  });

  test("persists sparse overrides without expanded defaults", () => {
    const workspace = createTempWorkspace("piclaw-lsp-policy-");
    const configPath = path.join(workspace.workspace, ".piclaw", "config.json");

    try {
      const policy = new LspRuntimePolicy({ configPath });
      policy.updateSettings({
        agents: {
          editor: {
            languages: {
              typescript: { enabled: false },
            },
          },
        },
      });

      expect(JSON.parse(readFileSync(configPath, "utf8"))).toEqual({
        web: {
          lsp: {
            agents: {
              editor: {
                languages: {
                  typescript: { enabled: false },
                },
              },
            },
          },
        },
      });
    } finally {
      workspace.cleanup();
    }
  });

  test("rejects unknown top-level, agent, language, and language-setting keys", () => {
    const policy = new LspRuntimePolicy();

    expect(() => policy.updateSettings({ unknown: true })).toThrow(LspRuntimePolicyValidationError);
    expect(() => policy.updateSettings({ agents: { unknown: {} } })).toThrow(LspRuntimePolicyValidationError);
    expect(() => policy.updateSettings({
      agents: {
        editor: {
          languages: {
            unknown: { enabled: false },
          },
        },
      },
    })).toThrow(LspRuntimePolicyValidationError);
    expect(() => policy.updateSettings({
      agents: {
        editor: {
          languages: {
            typescript: { unsupported: true },
          },
        },
      },
    })).toThrow(LspRuntimePolicyValidationError);
  });

  test("supports hermetic in-memory operation when configPath is null", () => {
    const workspace = createTempWorkspace("piclaw-lsp-policy-null-");
    const configPath = path.join(workspace.workspace, ".piclaw", "config.json");

    try {
      const policy = new LspRuntimePolicy({ configPath: null });
      const updated = policy.updateSettings({
        agents: {
          editor: {
            languages: {
              typescript: { enabled: false },
            },
          },
        },
      });

      expect(updated.agents.editor.languages.typescript.enabled).toBe(false);
      expect(existsSync(configPath)).toBe(false);
    } finally {
      workspace.cleanup();
    }
  });

  test("loads valid persisted overrides even when config also contains stale language ids", () => {
    const workspace = createTempWorkspace("piclaw-lsp-policy-stale-");
    const configPath = path.join(workspace.workspace, ".piclaw", "config.json");

    try {
      mkdirSync(path.dirname(configPath), { recursive: true });
      writeFileSync(configPath, `${JSON.stringify({
        web: {
          lsp: {
            agents: {
              editor: {
                languages: {
                  typescript: { enabled: false },
                  stale_language: { enabled: false },
                },
              },
            },
          },
        },
      }, null, 2)}\n`, "utf8");

      const policy = new LspRuntimePolicy({ configPath });
      expect(policy.getSettings().agents.editor.languages.typescript.enabled).toBe(false);
      expect(policy.isLanguageEnabled("typescript")).toBe(false);
      expect(policy.isLanguageEnabled("python")).toBe(true);
    } finally {
      workspace.cleanup();
    }
  });

  test("preserves stale persisted language entries across successful updates", () => {
    const workspace = createTempWorkspace("piclaw-lsp-policy-preserve-stale-");
    const configPath = path.join(workspace.workspace, ".piclaw", "config.json");

    try {
      mkdirSync(path.dirname(configPath), { recursive: true });
      writeFileSync(configPath, `${JSON.stringify({
        web: {
          lsp: {
            agents: {
              editor: {
                languages: {
                  typescript: { enabled: false },
                  stale_language: { enabled: false, note: "keep-me" },
                },
              },
            },
          },
        },
      }, null, 2)}\n`, "utf8");

      const policy = new LspRuntimePolicy({ configPath });
      policy.updateSettings({
        agents: {
          editor: {
            languages: {
              python: { enabled: false },
            },
          },
        },
      });

      expect(JSON.parse(readFileSync(configPath, "utf8"))).toEqual({
        web: {
          lsp: {
            agents: {
              editor: {
                languages: {
                  stale_language: { enabled: false, note: "keep-me" },
                  typescript: { enabled: false },
                  python: { enabled: false },
                },
              },
            },
          },
        },
      });
    } finally {
      workspace.cleanup();
    }
  });

  test("does not mutate in-memory policy when persistence fails", () => {
    const workspace = createTempWorkspace("piclaw-lsp-policy-atomic-");
    const configPath = path.join(workspace.workspace, ".piclaw", "config.json");

    try {
      mkdirSync(configPath, { recursive: true });
      const policy = new LspRuntimePolicy({ configPath });

      expect(() => policy.updateSettings({
        agents: {
          editor: {
            languages: {
              typescript: { enabled: false },
            },
          },
        },
      })).toThrow();

      expect(policy.getSettings().agents.editor.languages.typescript.enabled).toBe(true);
      expect(policy.isLanguageEnabled("typescript")).toBe(true);
    } finally {
      workspace.cleanup();
    }
  });

  test("fails safely on malformed shared config instead of overwriting it", () => {
    const workspace = createTempWorkspace("piclaw-lsp-policy-malformed-");
    const configPath = path.join(workspace.workspace, ".piclaw", "config.json");
    const malformed = "{ not valid json\n";

    try {
      mkdirSync(path.dirname(configPath), { recursive: true });
      writeFileSync(configPath, malformed, "utf8");

      const policy = new LspRuntimePolicy({ configPath });
      expect(() => policy.updateSettings({
        agents: {
          editor: {
            languages: {
              typescript: { enabled: false },
            },
          },
        },
      })).toThrow(SyntaxError);
      expect(readFileSync(configPath, "utf8")).toBe(malformed);
      expect(policy.getSettings().agents.editor.languages.typescript.enabled).toBe(true);
    } finally {
      workspace.cleanup();
    }
  });

  test("fails safely on parseable but structurally invalid shared config", () => {
    const workspace = createTempWorkspace("piclaw-lsp-policy-invalid-shape-");
    const configPath = path.join(workspace.workspace, ".piclaw", "config.json");

    try {
      mkdirSync(path.dirname(configPath), { recursive: true });

      writeFileSync(configPath, `${JSON.stringify({ web: [] })}\n`, "utf8");
      const policyWithInvalidWeb = new LspRuntimePolicy({ configPath });
      expect(() => policyWithInvalidWeb.updateSettings({
        agents: {
          editor: {
            languages: {
              typescript: { enabled: false },
            },
          },
        },
      })).toThrow(LspRuntimePolicyValidationError);
      expect(readFileSync(configPath, "utf8")).toBe(`${JSON.stringify({ web: [] })}\n`);

      writeFileSync(configPath, `${JSON.stringify({ web: { lsp: [] } })}\n`, "utf8");
      const policyWithInvalidLsp = new LspRuntimePolicy({ configPath });
      expect(() => policyWithInvalidLsp.updateSettings({
        agents: {
          editor: {
            languages: {
              typescript: { enabled: false },
            },
          },
        },
      })).toThrow(LspRuntimePolicyValidationError);
      expect(readFileSync(configPath, "utf8")).toBe(`${JSON.stringify({ web: { lsp: [] } })}\n`);
    } finally {
      workspace.cleanup();
    }
  });
});

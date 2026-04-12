import { expect, test } from "bun:test";

import type { AgentSessionRuntime } from "@mariozechner/pi-coding-agent";
import { AgentRuntimeFacade } from "../../src/agent-pool/runtime-facade.js";

function createRuntime(session: any): AgentSessionRuntime {
  return {
    session,
    cwd: "/workspace",
    diagnostics: [],
    services: {} as any,
    modelFallbackMessage: undefined,
    newSession: async () => ({ cancelled: false }),
    switchSession: async () => ({ cancelled: false }),
    fork: async () => ({ cancelled: false }),
    importFromJsonl: async () => ({ cancelled: false }),
    dispose: async () => {},
  } as any;
}

function createFacade(overrides: Partial<ConstructorParameters<typeof AgentRuntimeFacade>[0]> = {}) {
  const pool = new Map<string, { runtime: any; lastUsed: number }>();
  const warnings: string[] = [];
  const errors: string[] = [];
  const cleared: string[] = [];

  const facade = new AgentRuntimeFacade({
    pool,
    getOrCreateRuntime: async (chatJid) => {
      const entry = pool.get(chatJid);
      if (!entry) throw new Error(`Missing session for ${chatJid}`);
      return entry.runtime;
    },
    modelRegistry: {
      getAll: () => [],
      getAvailable: () => [],
      registerProvider: () => {},
    } as any,
    authStorage: { get: () => null } as any,
    clearAttachments: (chatJid) => cleared.push(chatJid),
    refreshRuntime: async () => {},
    onWarn: (message) => warnings.push(message),
    onError: (message) => errors.push(message),
    ...overrides,
  });

  return { facade, pool, warnings, errors, cleared };
}

test("AgentRuntimeFacade reports available models and context usage", async () => {
  let refreshCalls = 0;
  const session = {
    model: { provider: "openai", id: "gpt-test", reasoning: true },
    thinkingLevel: "high",
    getContextUsage: () => ({ tokens: 10, contextWindow: 100, percent: 10 }),
    modelRegistry: {
      refresh: () => { refreshCalls += 1; },
      getAvailable: () => [
        { provider: "openai", id: "gpt-test", name: "GPT Test", contextWindow: 128000, reasoning: true },
        { provider: "anthropic", id: "claude-test", name: "Claude Test", contextWindow: 200000, reasoning: true },
      ],
    },
  };

  const fixture = createFacade();
  fixture.pool.set("web:default", { runtime: createRuntime(session), lastUsed: Date.now() });

  const available = await fixture.facade.getAvailableModels("web:default");
  expect(refreshCalls).toBe(1);
  expect(available.current).toBe("openai/gpt-test");
  expect(available.models).toEqual(["openai/gpt-test", "anthropic/claude-test"]);
  expect(available.model_options).toEqual([
    {
      label: "openai/gpt-test",
      provider: "openai",
      id: "gpt-test",
      name: "GPT Test",
      context_window: 128000,
      reasoning: true,
    },
    {
      label: "anthropic/claude-test",
      provider: "anthropic",
      id: "claude-test",
      name: "Claude Test",
      context_window: 200000,
      reasoning: true,
    },
  ]);
  expect(available.thinking_level).toBe("high");
  expect(available.supports_thinking).toBe(true);
  expect(fixture.facade.getContextUsageForChat("web:default")).toEqual({
    tokens: 10,
    contextWindow: 100,
    percent: 10,
  });
});

test("AgentRuntimeFacade removes one queued follow-up and replays the remaining queue", async () => {
  const prompts: Array<{ text: string; behavior: string }> = [];
  const session = {
    isStreaming: true,
    getFollowUpMessages: () => ["first", "second", "third"],
    clearQueue: () => ({ steering: ["keep steer"], followUp: ["first", "second", "third"] }),
    prompt: async (text: string, options?: { streamingBehavior?: string }) => {
      prompts.push({ text, behavior: options?.streamingBehavior ?? "" });
    },
  };

  const fixture = createFacade();
  fixture.pool.set("web:default", { runtime: createRuntime(session), lastUsed: Date.now() });

  await expect(fixture.facade.removeQueuedFollowupMessage("web:default", "second")).resolves.toBe(true);
  expect(prompts).toEqual([
    { text: "keep steer", behavior: "steer" },
    { text: "first", behavior: "followUp" },
    { text: "third", behavior: "followUp" },
  ]);
});

test("AgentRuntimeFacade normalizes session-tree user prompts for display while keeping raw detail", () => {
  const session = {
    sessionManager: {
      getLeafId: () => "m1",
      getTree: () => [
        {
          label: null,
          children: [],
          entry: {
            id: "m1",
            parentId: null,
            type: "message",
            timestamp: "2026-04-12T22:24:55Z",
            message: {
              role: "user",
              content: [
                {
                  type: "text",
                  text: [
                    "Channel: web",
                    "",
                    "Formatting:",
                    "Markdown is allowed.",
                    "",
                    "Rui Carmo @ 2026-04-12T22:24:55Z:",
                    "  show a normalized preview.",
                  ].join("\n"),
                },
              ],
            },
          },
        },
      ],
    },
  };

  const fixture = createFacade();
  fixture.pool.set("web:default", { runtime: createRuntime(session), lastUsed: Date.now() });

  const tree = fixture.facade.getSessionTreeForChat("web:default");
  expect(tree?.nodes).toHaveLength(1);
  expect(tree?.nodes[0]).toMatchObject({
    id: "m1",
    role: "user",
    detail: "Rui Carmo (2026-04-12T22:24:55Z): show a normalized preview.",
    previewText: "show a normalized preview.",
  });
  expect((tree?.nodes[0] as any).rawDetail).toContain("Channel: web");
});

test("AgentRuntimeFacade leaves legacy XML session-tree entries unnormalized", () => {
  const session = {
    sessionManager: {
      getLeafId: () => "m1",
      getTree: () => [
        {
          label: null,
          children: [],
          entry: {
            id: "m1",
            parentId: null,
            type: "message",
            timestamp: "2026-04-12T22:24:55Z",
            message: {
              role: "user",
              content: [{ type: "text", text: '<messages channel="web"><message sender="You" time="2026-04-12T22:24:55Z">hello</message></messages>' }],
            },
          },
        },
      ],
    },
  };

  const fixture = createFacade();
  fixture.pool.set("web:default", { runtime: createRuntime(session), lastUsed: Date.now() });

  const tree = fixture.facade.getSessionTreeForChat("web:default");
  expect((tree?.nodes[0] as any).detail).toContain('<messages channel="web">');
  expect((tree?.nodes[0] as any).previewText).toBeUndefined();
  expect((tree?.nodes[0] as any).rawDetail).toBeUndefined();
});

test("AgentRuntimeFacade clears attachments around slash commands", async () => {
  const session = { marker: true };
  const fixture = createFacade({
    executeSlashCommandFn: async (incomingSession, chatJid, rawText) => ({
      ok: incomingSession === session,
      chatJid,
      rawText,
    } as any),
  });
  fixture.pool.set("web:default", { runtime: createRuntime(session), lastUsed: Date.now() });

  const result = await fixture.facade.applySlashCommand("web:default", "/tasks");
  expect(result).toEqual({ ok: true, chatJid: "web:default", rawText: "/tasks" });
  expect(fixture.cleared).toEqual(["web:default", "web:default"]);
});

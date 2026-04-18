import { afterEach, expect, test } from "bun:test";
import { mkdtempSync, rmSync, truncateSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { DEFAULT_COMPACTION_SETTINGS } from "@mariozechner/pi-coding-agent";
import { SessionManager } from "@mariozechner/pi-coding-agent";
import type { AgentSessionRuntime } from "@mariozechner/pi-coding-agent";

import { ensureSessionDir } from "../../src/agent-pool/session.js";
import { getAttachmentRegistry } from "../../src/agent-pool/attachments.js";
import { AgentTurnCoordinator } from "../../src/agent-pool/turn-coordinator.js";
import { runAgentPrompt } from "../../src/agent-pool/run-agent-orchestrator.js";
import { setEnv } from "../helpers.js";

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

const tempLogsDirs: string[] = [];

function createTestLogsDir(): string {
  const logsDir = mkdtempSync(join(tmpdir(), "piclaw-run-agent-logs-"));
  tempLogsDirs.push(logsDir);
  return logsDir;
}

afterEach(() => {
  while (tempLogsDirs.length > 0) {
    const logsDir = tempLogsDirs.pop();
    if (!logsDir) continue;
    rmSync(logsDir, { recursive: true, force: true });
  }
});

function createAssistantMessage(text: string) {
  return {
    role: "assistant",
    content: [{ type: "text", text }],
    provider: "openai",
    model: "gpt-test",
    usage: {
      input: 1,
      output: 1,
      cacheRead: 0,
      cacheWrite: 0,
      totalTokens: 2,
      cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, total: 0 },
    },
    stopReason: "stop",
    timestamp: Date.now(),
  } as const;
}

test("runAgentPrompt aggregates deltas and returns pending attachments", async () => {
  const attachments = getAttachmentRegistry();
  attachments.clear("web:default");

  class StubSession {
    private listeners: Array<(event: any) => void> = [];
    sessionManager = { getLeafId: () => "leaf-1" };
    isStreaming = false;
    isCompacting = false;
    isRetrying = false;
    subscribe(listener: (event: any) => void) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((entry) => entry !== listener);
      };
    }
    async prompt() {
      attachments.register("web:default", {
        id: 1,
        name: "out.txt",
        contentType: "text/plain",
        size: 3,
        kind: "file",
        sourcePath: "/tmp/out.txt",
      });
      for (const listener of this.listeners) {
        listener({ type: "message_update", assistantMessageEvent: { type: "text_delta", delta: "hello" } });
        listener({ type: "message_update", assistantMessageEvent: { type: "text_delta", delta: " world" } });
      }
    }
    async abort() {}
  }

  const session = new StubSession();
  const forkStates: Array<string | null> = [];
  const turnCoordinator = new AgentTurnCoordinator({
    takeAttachments: (chatJid) => attachments.take(chatJid),
    touchSession: () => {},
    recordMessageUsage: () => {},
  });

  const result = await runAgentPrompt("test", "web:default", { timeoutMs: 0 }, {
    getOrCreateRuntime: async () => createRuntime(session) as any,
    turnCoordinator,
    clearAttachments: (chatJid) => attachments.clear(chatJid),
    takeAttachments: (chatJid) => attachments.take(chatJid),
    logsDir: createTestLogsDir(),
    setActiveForkBaseLeaf: (_chatJid, leafId) => {
      forkStates.push(leafId);
    },
    clearActiveForkBaseLeaf: () => {
      forkStates.push(null);
    },
  });

  expect(result.status).toBe("success");
  expect(result.result).toBe("hello world");
  expect(result.attachments).toHaveLength(1);
  expect(forkStates).toEqual(["leaf-1", null]);
});

test("runAgentPrompt auto-compacts before prompting when estimated context exceeds the threshold", async () => {
  const calls: string[] = [];

  class StubSession {
    private listeners: Array<(event: any) => void> = [];
    sessionManager = {
      getLeafId: () => "leaf-1",
      buildSessionContext: () => ({
        messages: [
          { role: "user", content: "x".repeat(200) },
        ],
      }),
    };
    settingsManager = {
      getCompactionSettings: () => ({
        ...DEFAULT_COMPACTION_SETTINGS,
        enabled: true,
        reserveTokens: 10,
      }),
    };
    model = { contextWindow: 20, provider: "test", id: "model" };
    isStreaming = false;
    isCompacting = false;
    isRetrying = false;
    subscribe(listener: (event: any) => void) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((entry) => entry !== listener);
      };
    }
    async compact() {
      calls.push("compact");
    }
    async prompt() {
      calls.push("prompt");
      for (const listener of this.listeners) {
        listener({ type: "message_update", assistantMessageEvent: { type: "text_delta", delta: "done" } });
      }
    }
    async abort() {}
  }

  const session = new StubSession();
  const turnCoordinator = new AgentTurnCoordinator({
    takeAttachments: () => [],
    touchSession: () => {},
    recordMessageUsage: () => {},
  });

  const result = await runAgentPrompt("test", "web:default", { timeoutMs: 0 }, {
    getOrCreateRuntime: async () => createRuntime(session) as any,
    turnCoordinator,
    clearAttachments: () => {},
    takeAttachments: () => [],
    logsDir: createTestLogsDir(),
    setActiveForkBaseLeaf: () => {},
    clearActiveForkBaseLeaf: () => {},
  });

  expect(result.status).toBe("success");
  expect(calls).toEqual(["compact", "prompt"]);
});

test("runAgentPrompt skips pre-prompt auto-compaction when it is disabled", async () => {
  const calls: string[] = [];

  class StubSession {
    private listeners: Array<(event: any) => void> = [];
    sessionManager = {
      getLeafId: () => "leaf-1",
      buildSessionContext: () => ({
        messages: [
          { role: "user", content: "x".repeat(200) },
        ],
      }),
    };
    settingsManager = {
      getCompactionSettings: () => ({
        ...DEFAULT_COMPACTION_SETTINGS,
        enabled: false,
        reserveTokens: 10,
      }),
    };
    model = { contextWindow: 20, provider: "test", id: "model" };
    isStreaming = false;
    isCompacting = false;
    isRetrying = false;
    subscribe(listener: (event: any) => void) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((entry) => entry !== listener);
      };
    }
    async compact() {
      calls.push("compact");
    }
    async prompt() {
      calls.push("prompt");
      for (const listener of this.listeners) {
        listener({ type: "message_update", assistantMessageEvent: { type: "text_delta", delta: "done" } });
      }
    }
    async abort() {}
  }

  const session = new StubSession();
  const turnCoordinator = new AgentTurnCoordinator({
    takeAttachments: () => [],
    touchSession: () => {},
    recordMessageUsage: () => {},
  });

  const result = await runAgentPrompt("test", "web:default", { timeoutMs: 0 }, {
    getOrCreateRuntime: async () => createRuntime(session) as any,
    turnCoordinator,
    clearAttachments: () => {},
    takeAttachments: () => [],
    logsDir: createTestLogsDir(),
    setActiveForkBaseLeaf: () => {},
    clearActiveForkBaseLeaf: () => {},
  });

  expect(result.status).toBe("success");
  expect(calls).toEqual(["prompt"]);
});

test("runAgentPrompt prompts the rotated runtime session after auto-rotation swaps objects", async () => {
  const workspaceBase = mkdtempSync(join(tmpdir(), "piclaw-run-agent-rotate-"));
  const restoreEnv = setEnv({
    PICLAW_WORKSPACE: workspaceBase,
    PICLAW_STORE: join(workspaceBase, "store"),
    PICLAW_DATA: join(workspaceBase, "data"),
    PICLAW_SESSION_AUTO_ROTATE: "1",
    PICLAW_SESSION_MAX_SIZE_MB: "1",
  });

  class SessionBeforeRotate {
    sessionManager: SessionManager;
    sessionFile: string | undefined;
    sessionName = "Before rotate";
    model = { provider: "openai", id: "gpt-test", reasoning: true } as const;
    isStreaming = false;
    isCompacting = false;
    isRetrying = false;
    pendingMessageCount = 0;
    promptCalls = 0;

    constructor() {
      const sessionDir = ensureSessionDir("web:default");
      this.sessionManager = SessionManager.create(workspaceBase, sessionDir);
      this.sessionManager.appendMessage({ role: "user", content: "rotate me", timestamp: Date.now() } as const);
      this.sessionManager.appendMessage(createAssistantMessage("pre-rotation context"));
      this.sessionFile = this.sessionManager.getSessionFile();
      truncateSync(this.sessionFile!, 2 * 1024 * 1024);
    }

    subscribe() {
      return () => {};
    }

    async compact() {
      const firstKeptEntryId = this.sessionManager.getEntries()[0]?.id ?? "root";
      this.sessionManager.appendCompaction("rotation summary", firstKeptEntryId, 100);
      this.sessionFile = this.sessionManager.getSessionFile();
      return { summary: "rotation summary", firstKeptEntryId, tokensBefore: 100 };
    }

    async prompt() {
      this.promptCalls += 1;
      throw new Error("stale session should not be prompted after auto-rotation");
    }

    async abort() {}
  }

  class SessionAfterRotate {
    private listeners: Array<(event: any) => void> = [];
    sessionManager: SessionManager;
    sessionFile: string | undefined;
    sessionName = "After rotate";
    model = { provider: "openai", id: "gpt-test", reasoning: true } as const;
    isStreaming = false;
    isCompacting = false;
    isRetrying = false;
    pendingMessageCount = 0;
    promptCalls = 0;

    constructor(sessionManager: SessionManager) {
      this.sessionManager = sessionManager;
      this.sessionFile = sessionManager.getSessionFile();
    }

    subscribe(listener: (event: any) => void) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((entry) => entry !== listener);
      };
    }

    async prompt() {
      this.promptCalls += 1;
      for (const listener of this.listeners) {
        listener({ type: "message_update", assistantMessageEvent: { type: "text_delta", delta: "rotated ok" } });
      }
    }

    async abort() {}
  }

  try {
    const oldSession = new SessionBeforeRotate();
    let activeSession: SessionBeforeRotate | SessionAfterRotate = oldSession;
    const runtime = {
      get session() {
        return activeSession;
      },
      cwd: workspaceBase,
      diagnostics: [],
      services: {} as any,
      modelFallbackMessage: undefined,
      newSession: async (options?: { parentSession?: string; setup?: (sessionManager: SessionManager) => Promise<void> | void }) => {
        const manager = SessionManager.create(workspaceBase, ensureSessionDir("web:default"));
        manager.newSession({ parentSession: options?.parentSession });
        if (options?.setup) {
          await options.setup(manager);
        }
        activeSession = new SessionAfterRotate(manager);
        return { cancelled: false };
      },
      switchSession: async () => ({ cancelled: false }),
      fork: async () => ({ cancelled: false }),
      importFromJsonl: async () => ({ cancelled: false }),
      dispose: async () => {},
    } as AgentSessionRuntime;

    const forkStates: Array<string | null> = [];
    const turnCoordinator = new AgentTurnCoordinator({
      takeAttachments: () => [],
      touchSession: () => {},
      recordMessageUsage: () => {},
    });

    const result = await runAgentPrompt("test", "web:default", { timeoutMs: 0 }, {
      getOrCreateRuntime: async () => runtime as any,
      turnCoordinator,
      clearAttachments: () => {},
      takeAttachments: () => [],
      logsDir: createTestLogsDir(),
      setActiveForkBaseLeaf: (_chatJid, leafId) => {
        forkStates.push(leafId);
      },
      clearActiveForkBaseLeaf: () => {
        forkStates.push(null);
      },
    });

    expect(result.status).toBe("success");
    expect(result.result).toBe("rotated ok");
    expect(oldSession.promptCalls).toBe(0);
    expect((activeSession as SessionAfterRotate).promptCalls).toBe(1);
    expect(forkStates).toHaveLength(2);
    expect(forkStates.at(-1)).toBe(null);
  } finally {
    restoreEnv();
    rmSync(workspaceBase, { recursive: true, force: true });
  }
});

test("runAgentPrompt retries a recoverable interrupted turn and returns one final success", async () => {
  const restoreEnv = setEnv({
    PICLAW_TURN_AUTO_RECOVERY_ENABLED: "1",
    PICLAW_TURN_AUTO_RECOVERY_MAX_ATTEMPTS: "2",
    PICLAW_TURN_AUTO_RECOVERY_TOTAL_BUDGET_MS: "30000",
  });

  class StubSession {
    private listeners: Array<(event: any) => void> = [];
    sessionManager = { getLeafId: () => "leaf-1" };
    isStreaming = false;
    isCompacting = false;
    isRetrying = false;
    promptCalls = 0;
    subscribe(listener: (event: any) => void) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((entry) => entry !== listener);
      };
    }
    async prompt() {
      this.promptCalls += 1;
      if (this.promptCalls === 1) {
        for (const listener of this.listeners) {
          listener({ type: "message_update", assistantMessageEvent: { type: "text_delta", delta: "partial draft" } });
          listener({
            type: "message_end",
            message: {
              role: "assistant",
              stopReason: "error",
              errorMessage: "Response ended with an error before finalization",
              content: [],
            },
          });
        }
        return;
      }
      for (const listener of this.listeners) {
        listener({ type: "message_update", assistantMessageEvent: { type: "text_delta", delta: "recovered answer" } });
      }
    }
    async abort() {}
  }

  try {
    const session = new StubSession();
    const recoveryEvents: string[] = [];
    const turnCoordinator = new AgentTurnCoordinator({
      takeAttachments: () => [],
      touchSession: () => {},
      recordMessageUsage: () => {},
    });

    const result = await runAgentPrompt("hello", "web:default", {
      timeoutMs: 0,
      onEvent: (event) => {
        if (event.type === "recovery_start" || event.type === "recovery_end") {
          recoveryEvents.push(String(event.type));
        }
      },
    }, {
      getOrCreateRuntime: async () => createRuntime(session) as any,
      turnCoordinator,
      clearAttachments: () => {},
      takeAttachments: () => [],
      logsDir: createTestLogsDir(),
      setActiveForkBaseLeaf: () => {},
      clearActiveForkBaseLeaf: () => {},
    });

    expect(result.status).toBe("success");
    expect(result.result).toBe("recovered answer");
    expect(result.recovery?.recovered).toBe(true);
    expect(result.recovery?.attemptsUsed).toBe(1);
    expect(session.promptCalls).toBe(2);
    expect(recoveryEvents).toEqual(["recovery_start", "recovery_end"]);
  } finally {
    restoreEnv();
  }
});

test("runAgentPrompt recovers a timeout-before-finalization when compaction was in progress", async () => {
  const restoreEnv = setEnv({
    PICLAW_TURN_AUTO_RECOVERY_ENABLED: "1",
    PICLAW_TURN_AUTO_RECOVERY_MAX_ATTEMPTS: "2",
    PICLAW_TURN_AUTO_RECOVERY_TOTAL_BUDGET_MS: "30000",
  });

  class StubSession {
    private listeners: Array<(event: any) => void> = [];
    sessionManager = { getLeafId: () => "leaf-1" };
    isStreaming = false;
    isCompacting = false;
    isRetrying = false;
    promptCalls = 0;
    compactCalls = 0;
    subscribe(listener: (event: any) => void) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((entry) => entry !== listener);
      };
    }
    async compact() {
      this.compactCalls += 1;
    }
    async prompt() {
      this.promptCalls += 1;
      if (this.promptCalls === 1) {
        for (const listener of this.listeners) {
          listener({ type: "compaction_start", reason: "overflow" });
          listener({ type: "message_update", assistantMessageEvent: { type: "text_delta", delta: "draft during compaction" } });
          listener({
            type: "message_end",
            message: {
              role: "assistant",
              stopReason: "error",
              errorMessage: "Response timed out before finalization",
              content: [],
            },
          });
        }
        return;
      }
      for (const listener of this.listeners) {
        listener({ type: "message_update", assistantMessageEvent: { type: "text_delta", delta: "recovered after compaction" } });
      }
    }
    async abort() {}
  }

  try {
    const session = new StubSession();
    const recoveryStarts: Array<{ classifier?: string; strategy?: string }> = [];
    const turnCoordinator = new AgentTurnCoordinator({
      takeAttachments: () => [],
      touchSession: () => {},
      recordMessageUsage: () => {},
    });

    const result = await runAgentPrompt("hello", "web:default", {
      timeoutMs: 0,
      onEvent: (event) => {
        if (event.type === "recovery_start") {
          recoveryStarts.push({
            classifier: (event as any).classifier,
            strategy: (event as any).strategy,
          });
        }
      },
    }, {
      getOrCreateRuntime: async () => createRuntime(session) as any,
      turnCoordinator,
      clearAttachments: () => {},
      takeAttachments: () => [],
      logsDir: createTestLogsDir(),
      setActiveForkBaseLeaf: () => {},
      clearActiveForkBaseLeaf: () => {},
    });

    expect(result.status).toBe("success");
    expect(result.result).toBe("recovered after compaction");
    expect(result.recovery).toEqual(expect.objectContaining({
      attemptsUsed: 1,
      recovered: true,
      exhausted: false,
      lastClassifier: "context_pressure",
      strategyHistory: ["compact_then_retry"],
    }));
    expect(session.promptCalls).toBe(2);
    expect(session.compactCalls).toBe(1);
    expect(recoveryStarts).toEqual([{ classifier: "context_pressure", strategy: "compact_then_retry" }]);
  } finally {
    restoreEnv();
  }
});

test("runAgentPrompt does not auto-retry after tool activity occurred", async () => {
  const restoreEnv = setEnv({
    PICLAW_TURN_AUTO_RECOVERY_ENABLED: "1",
    PICLAW_TURN_AUTO_RECOVERY_MAX_ATTEMPTS: "2",
    PICLAW_TURN_AUTO_RECOVERY_TOTAL_BUDGET_MS: "30000",
  });

  class StubSession {
    private listeners: Array<(event: any) => void> = [];
    sessionManager = { getLeafId: () => "leaf-1" };
    isStreaming = false;
    isCompacting = false;
    isRetrying = false;
    promptCalls = 0;
    subscribe(listener: (event: any) => void) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((entry) => entry !== listener);
      };
    }
    async prompt() {
      this.promptCalls += 1;
      for (const listener of this.listeners) {
        listener({ type: "tool_execution_start", toolCallId: "tool-1", toolName: "write_file", args: { path: "x" } });
        listener({ type: "message_end", message: { role: "assistant", stopReason: "error", errorMessage: "Timed out after 5s", content: [] } });
      }
    }
    async abort() {}
  }

  try {
    const session = new StubSession();
    const turnCoordinator = new AgentTurnCoordinator({
      takeAttachments: () => [],
      touchSession: () => {},
      recordMessageUsage: () => {},
    });

    const result = await runAgentPrompt("hello", "web:default", { timeoutMs: 0 }, {
      getOrCreateRuntime: async () => createRuntime(session) as any,
      turnCoordinator,
      clearAttachments: () => {},
      takeAttachments: () => [],
      logsDir: createTestLogsDir(),
      setActiveForkBaseLeaf: () => {},
      clearActiveForkBaseLeaf: () => {},
    });

    expect(result.status).toBe("error");
    expect(result.error).toContain("Timed out after 5s");
    expect(session.promptCalls).toBe(1);
  } finally {
    restoreEnv();
  }
});

test("runAgentPrompt surfaces provider error instead of returning null result", async () => {
  class StubSession {
    private listeners: Array<(event: any) => void> = [];
    sessionManager = { getLeafId: () => "leaf-1" };
    isStreaming = false;
    isCompacting = false;
    isRetrying = false;
    subscribe(listener: (event: any) => void) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((entry) => entry !== listener);
      };
    }
    async prompt() {
      for (const listener of this.listeners) {
        listener({
          type: "message_end",
          message: {
            role: "assistant",
            stopReason: "error",
            errorMessage:
              'Error: 400 {"type":"error","error":{"type":"invalid_request_error","message":"You\'re out of extra usage."},"request_id":"req_abc123"}',
            content: [],
          },
        });
      }
    }
    async abort() {}
  }

  const session = new StubSession();
  const turnCoordinator = new AgentTurnCoordinator({
    takeAttachments: () => [],
    touchSession: () => {},
    recordMessageUsage: () => {},
  });

  const result = await runAgentPrompt("hello", "web:default", { timeoutMs: 0 }, {
    getOrCreateRuntime: async () => createRuntime(session) as any,
    turnCoordinator,
    clearAttachments: () => {},
    takeAttachments: () => [],
    logsDir: createTestLogsDir(),
    setActiveForkBaseLeaf: () => {},
    clearActiveForkBaseLeaf: () => {},
  });

  expect(result.status).toBe("error");
  expect(result.error).toContain("invalid_request_error");
  expect(result.error).toContain("extra usage");
  expect(result.result).toBeNull();
});

test("runAgentPrompt surfaces latent session state errors when no final text is emitted", async () => {
  class StubSession {
    private listeners: Array<(event: any) => void> = [];
    sessionManager = { getLeafId: () => "leaf-1" };
    agent = { state: { errorMessage: "Error: HTTP 429 Too Many Requests (rate limit exceeded)" } };
    isStreaming = false;
    isCompacting = false;
    isRetrying = false;
    subscribe(listener: (event: any) => void) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((entry) => entry !== listener);
      };
    }
    async prompt() {
      for (const listener of this.listeners) {
        listener({
          type: "message_end",
          message: {
            role: "assistant",
            content: [],
          },
        });
      }
    }
    async abort() {}
  }

  const session = new StubSession();
  const turnCoordinator = new AgentTurnCoordinator({
    takeAttachments: () => [],
    touchSession: () => {},
    recordMessageUsage: () => {},
  });

  const result = await runAgentPrompt("hello", "web:default", { timeoutMs: 0 }, {
    getOrCreateRuntime: async () => createRuntime(session) as any,
    turnCoordinator,
    clearAttachments: () => {},
    takeAttachments: () => [],
    logsDir: createTestLogsDir(),
    setActiveForkBaseLeaf: () => {},
    clearActiveForkBaseLeaf: () => {},
  });

  expect(result.status).toBe("error");
  expect(result.error).toContain("429");
  expect(result.error).toContain("rate limit");
  expect(result.result).toBeNull();
});

test("runAgentPrompt ignores commentary-only aborted output", async () => {
  class StubSession {
    private listeners: Array<(event: any) => void> = [];
    sessionManager = { getLeafId: () => "leaf-1" };
    isStreaming = false;
    isCompacting = false;
    isRetrying = false;
    subscribe(listener: (event: any) => void) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((entry) => entry !== listener);
      };
    }
    async prompt() {
      for (const listener of this.listeners) {
        listener({
          type: "message_update",
          assistantMessageEvent: {
            type: "text_start",
            contentIndex: 0,
            partial: { content: [{ type: "text", textSignature: JSON.stringify({ v: 1, id: "msg_c", phase: "commentary" }) }] },
          },
        });
        listener({
          type: "message_update",
          assistantMessageEvent: {
            type: "text_delta",
            delta: "progress update",
            contentIndex: 0,
            partial: { content: [{ type: "text", textSignature: JSON.stringify({ v: 1, id: "msg_c", phase: "commentary" }) }] },
          },
        });
        listener({
          type: "message_end",
          message: {
            role: "assistant",
            content: [{ type: "text", text: "progress update", textSignature: JSON.stringify({ v: 1, id: "msg_c", phase: "commentary" }) }],
          },
        });
      }
    }
    async abort() {}
  }

  const session = new StubSession();
  const turnCoordinator = new AgentTurnCoordinator({
    takeAttachments: () => [],
    touchSession: () => {},
    recordMessageUsage: () => {},
  });

  const result = await runAgentPrompt("test", "web:default", { timeoutMs: 0 }, {
    getOrCreateRuntime: async () => createRuntime(session) as any,
    turnCoordinator,
    clearAttachments: () => {},
    takeAttachments: () => [],
    logsDir: createTestLogsDir(),
    setActiveForkBaseLeaf: () => {},
    clearActiveForkBaseLeaf: () => {},
  });

  expect(result.status).toBe("success");
  expect(result.result).toBeNull();
  expect(result.attachments).toBeUndefined();
});

test("runAgentPrompt disarms the prompt timeout as soon as prompt() resolves", async () => {
  let abortCalls = 0;

  class StubSession {
    private listeners: Array<(event: any) => void> = [];
    sessionManager = { getLeafId: () => "leaf-1" };
    isStreaming = true;
    isCompacting = false;
    isRetrying = false;
    subscribe(listener: (event: any) => void) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((entry) => entry !== listener);
      };
    }
    async prompt() {
      for (const listener of this.listeners) {
        listener({ type: "message_update", assistantMessageEvent: { type: "text_delta", delta: "done" } });
      }
      setTimeout(() => {
        this.isStreaming = false;
      }, 5);
    }
    async abort() {
      abortCalls += 1;
    }
  }

  const session = new StubSession();
  const turnCoordinator = new AgentTurnCoordinator({
    takeAttachments: () => [],
    touchSession: () => {},
    recordMessageUsage: () => {},
  });

  let timeoutState: ReturnType<typeof turnCoordinator.startPromptTimeout> | null = null;
  const originalStartPromptTimeout = turnCoordinator.startPromptTimeout.bind(turnCoordinator);
  turnCoordinator.startPromptTimeout = ((...args: any[]) => {
    timeoutState = originalStartPromptTimeout(...args);
    return timeoutState!;
  }) as any;

  const result = await runAgentPrompt("test", "web:default", { timeoutMs: 50 }, {
    getOrCreateRuntime: async () => createRuntime(session) as any,
    turnCoordinator,
    clearAttachments: () => {},
    takeAttachments: () => [],
    logsDir: createTestLogsDir(),
    setActiveForkBaseLeaf: () => {},
    clearActiveForkBaseLeaf: () => {},
    onInfo: (message) => {
      if (message !== "session.prompt() resolved" || !timeoutState) return;
      queueMicrotask(async () => {
        if (timeoutState?.completedRef.value) return;
        timeoutState.timedOutRef.value = true;
        await session.abort();
      });
    },
  });

  await Bun.sleep(20);

  expect(result.status).toBe("success");
  expect(result.result).toBe("done");
  expect(timeoutState?.completedRef.value).toBe(true);
  expect(abortCalls).toBe(0);
});

test("runAgentPrompt ignores a queued late-timeout callback after prompt completion", async () => {
  let abortCalls = 0;

  class StubSession {
    private listeners: Array<(event: any) => void> = [];
    sessionManager = { getLeafId: () => "leaf-1" };
    isStreaming = false;
    isCompacting = false;
    isRetrying = false;
    subscribe(listener: (event: any) => void) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((entry) => entry !== listener);
      };
    }
    async prompt() {
      for (const listener of this.listeners) {
        listener({ type: "message_update", assistantMessageEvent: { type: "text_delta", delta: "done" } });
      }
    }
    async abort() {
      abortCalls += 1;
    }
  }

  const session = new StubSession();
  const turnCoordinator = new AgentTurnCoordinator({
    takeAttachments: () => [],
    touchSession: () => {},
    recordMessageUsage: () => {},
  });

  const originalStartPromptTimeout = turnCoordinator.startPromptTimeout.bind(turnCoordinator);
  const originalClearTimeout = globalThis.clearTimeout;
  turnCoordinator.startPromptTimeout = ((_session: any, _chatJid: string, _timeoutMs: number) => {
    const state = originalStartPromptTimeout(_session, _chatJid, 0);
    return { ...state, timeoutId: 1 as any };
  }) as any;

  globalThis.clearTimeout = ((_: any) => {
    queueMicrotask(async () => {
      const state = (turnCoordinator.startPromptTimeout as any).lastState;
      if (!state || state.completedRef.value) return;
      state.timedOutRef.value = true;
      await session.abort();
    });
  }) as any;

  const wrappedStartPromptTimeout = turnCoordinator.startPromptTimeout;
  turnCoordinator.startPromptTimeout = ((...args: any[]) => {
    const state = (wrappedStartPromptTimeout as any)(...args);
    (turnCoordinator.startPromptTimeout as any).lastState = state;
    return state;
  }) as any;

  try {
    const result = await runAgentPrompt("test", "web:default", { timeoutMs: 1 }, {
      getOrCreateRuntime: async () => createRuntime(session) as any,
      turnCoordinator,
      clearAttachments: () => {},
      takeAttachments: () => [],
      logsDir: createTestLogsDir(),
      setActiveForkBaseLeaf: () => {},
      clearActiveForkBaseLeaf: () => {},
    });

    await Bun.sleep(0);

    expect(result.status).toBe("success");
    expect(result.result).toBe("done");
    expect(abortCalls).toBe(0);
  } finally {
    globalThis.clearTimeout = originalClearTimeout;
  }
});

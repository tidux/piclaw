import { describe, expect, test } from "bun:test";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { AuthStorage, ModelRegistry, SettingsManager, getAgentDir } from "@mariozechner/pi-coding-agent";
import "../helpers.js";
import { createSessionInDir } from "../../src/agent-pool/session.ts";

describe("bundled pi-mcp-adapter integration", () => {
  test("registers the mcp proxy tool and slash commands for piclaw sessions", async () => {
    const authStorage = AuthStorage.create();
    const modelRegistry = ModelRegistry.inMemory(authStorage);
    const settingsManager = SettingsManager.create("/workspace", getAgentDir());
    const tempRoot = mkdtempSync(join(tmpdir(), "piclaw-mcp-adapter-"));
    const sessionDir = join(tempRoot, "session");

    try {
      const runtime = await createSessionInDir(sessionDir, {
        authStorage,
        modelRegistry,
        settingsManager,
        tools: [],
      });

      const session: any = runtime.session;
      expect(session._toolRegistry.has("mcp")).toBe(true);
      const tool = session._toolRegistry.get("mcp");
      expect(typeof tool?.description).toBe("string");
      expect(tool.description).toContain("MCP");

      expect(typeof session.extensionRunner?.getCommand).toBe("function");
      expect(session.extensionRunner.getCommand("mcp")).toBeTruthy();
      expect(session.extensionRunner.getCommand("mcp-auth")).toBeTruthy();

      session.dispose?.();
    } finally {
      rmSync(tempRoot, { recursive: true, force: true });
    }
  });
});

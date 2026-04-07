import { afterEach, expect, test } from "bun:test";
import { existsSync } from "fs";
import { join } from "path";

import { createTempWorkspace, importFresh, setEnv } from "./helpers.js";

let restoreEnv: (() => void) | null = null;

afterEach(() => {
  restoreEnv?.();
  restoreEnv = null;
});

test("runDreamAgentTurn materializes memory files after the model pass", async () => {
  const ws = createTempWorkspace("piclaw-dream-agent-turn-");
  restoreEnv = setEnv({
    PICLAW_WORKSPACE: ws.workspace,
    PICLAW_STORE: ws.store,
    PICLAW_DATA: ws.data,
  });

  const db = await importFresh<typeof import("../src/db.js")>("../src/db.js");
  db.initDatabase();
  const dream = await importFresh<typeof import("../src/dream.js")>("../src/dream.js");
  const result = await dream.runDreamAgentTurn({
    chatJid: "web:default",
    days: 2,
    mode: "auto",
    agentPool: {
      runAgent: async () => ({ status: "success", result: "AutoDream complete." }),
      disposeChatSession: async () => {},
    } as any,
  });

  expect(result.skipped).toBe(false);
  expect(existsSync(join(ws.workspace, "notes", "memory", "MEMORY.md"))).toBe(true);
  expect(existsSync(join(ws.workspace, "notes", "memory", "current-state.md"))).toBe(true);
  expect(existsSync(join(ws.workspace, "notes", "memory", "recent-context.md"))).toBe(true);
  expect(result.result).toContain("Memory refreshed after Dream: yes");

  ws.cleanup();
});

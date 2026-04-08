import { describe, expect, test } from "bun:test";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { createTempWorkspace } from "../helpers.js";

describe("runtime startup helpers", () => {
  test("initializeRuntimeEnvironment seeds workspace skel files for direct installs", () => {
    const ws = createTempWorkspace("piclaw-startup-");

    try {
      const run = Bun.spawnSync({
        cmd: [
          "bun",
          "-e",
          'import { initializeRuntimeEnvironment } from "./src/runtime/startup.js"; initializeRuntimeEnvironment({ loadTimestamps() {}, loadChats() {} });',
        ],
        cwd: "/workspace/piclaw/runtime",
        env: {
          ...process.env,
          PICLAW_WORKSPACE: ws.workspace,
          PICLAW_STORE: ws.store,
          PICLAW_DATA: ws.data,
          PICLAW_DB_IN_MEMORY: "1",
        },
      });
      expect(run.exitCode, run.stderr.toString() || run.stdout.toString()).toBe(0);

      expect(existsSync(join(ws.workspace, "AGENTS.md"))).toBe(true);
      expect(existsSync(join(ws.workspace, ".piclaw", "README.md"))).toBe(true);
      expect(existsSync(join(ws.workspace, ".piclaw", "config.json.example"))).toBe(true);
      expect(existsSync(join(ws.workspace, ".pi", "mcp.json.example"))).toBe(true);
      expect(existsSync(join(ws.workspace, "notes", "index.md"))).toBe(true);
      expect(existsSync(join(ws.workspace, "notes", "memory", "README.md"))).toBe(true);
      expect(existsSync(join(ws.workspace, ".pi", "skills"))).toBe(true);
    } finally {
      ws.cleanup();
    }
  });

  test("queueStartupResumePendingIpc writes a resume_pending task", () => {
    const ws = createTempWorkspace("piclaw-startup-");

    try {
      const run = Bun.spawnSync({
        cmd: [
          "bun",
          "-e",
          'import { queueStartupResumePendingIpc } from "./src/runtime/startup.js"; queueStartupResumePendingIpc();',
        ],
        cwd: "/workspace/piclaw/runtime",
        env: {
          ...process.env,
          PICLAW_WORKSPACE: ws.workspace,
          PICLAW_STORE: ws.store,
          PICLAW_DATA: ws.data,
          PICLAW_DB_IN_MEMORY: "1",
        },
      });
      expect(run.exitCode).toBe(0);

      const tasksDir = join(ws.data, "ipc", "tasks");
      const files = readdirSync(tasksDir).filter((file) => file.startsWith("resume_pending_"));
      expect(files).toHaveLength(1);

      const payload = JSON.parse(readFileSync(join(tasksDir, files[0]), "utf-8"));
      expect(payload).toEqual({ type: "resume_pending", chatJid: "all", reason: "startup" });
    } finally {
      ws.cleanup();
    }
  });

  test("queueStartupResumePendingIpc always queues a fresh startup resume task", () => {
    const ws = createTempWorkspace("piclaw-startup-");

    try {
      const tasksDir = join(ws.data, "ipc", "tasks");
      mkdirSync(tasksDir, { recursive: true });
      writeFileSync(
        join(tasksDir, "resume_pending_existing.json"),
        JSON.stringify({ type: "resume_pending", chatJid: "all", reason: "reload" })
      );

      const run = Bun.spawnSync({
        cmd: [
          "bun",
          "-e",
          'import { queueStartupResumePendingIpc } from "./src/runtime/startup.js"; queueStartupResumePendingIpc();',
        ],
        cwd: "/workspace/piclaw/runtime",
        env: {
          ...process.env,
          PICLAW_WORKSPACE: ws.workspace,
          PICLAW_STORE: ws.store,
          PICLAW_DATA: ws.data,
          PICLAW_DB_IN_MEMORY: "1",
        },
      });
      expect(run.exitCode).toBe(0);

      const files = readdirSync(tasksDir)
        .filter((file) => file.startsWith("resume_pending_"))
        .sort();
      expect(files.length).toBe(2);
      expect(files).toContain("resume_pending_existing.json");
      expect(files.some((file) => file !== "resume_pending_existing.json")).toBe(true);
    } finally {
      ws.cleanup();
    }
  });
});

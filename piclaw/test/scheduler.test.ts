import { afterEach, expect, test } from "bun:test";
import { getTestWorkspace, setEnv } from "./helpers.js";

let restoreEnv: (() => void) | null = null;

afterEach(() => {
  restoreEnv?.();
  restoreEnv = null;
});

test("computeNextRun handles cron and interval", async () => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const scheduler = await import("../src/task-scheduler.js");

  const cronNext = scheduler.computeNextRun("cron", "*/5 * * * *");
  expect(cronNext).not.toBeNull();

  const intervalNext = scheduler.computeNextRun("interval", "1000");
  expect(intervalNext).not.toBeNull();

  const onceNext = scheduler.computeNextRun("once", "2020-01-01T00:00:00.000Z");
  expect(onceNext).toBeNull();
});

test("runScheduledTask logs run and updates task", async () => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const db = await import("../src/db.js");
  db.initDatabase();

  const scheduler = await import("../src/task-scheduler.js");

  const taskId = `task-${Date.now()}`;
  db.createTask({
    id: taskId,
    chat_jid: "web:default",
    prompt: "say hi",
    schedule_type: "interval",
    schedule_value: "60000",
    next_run: new Date(Date.now() - 1000).toISOString(),
    status: "active",
    created_at: new Date().toISOString(),
  });

  const sent: string[] = [];
  const deps = {
    queue: { enqueueTask: (_id: string, fn: () => Promise<void>) => fn() } as any,
    agentPool: {
      runAgent: async () => ({ status: "success", result: "Hello" }),
    } as any,
    sendMessage: async (_jid: string, text: string) => {
      sent.push(text);
    },
  };

  const task = db.getTaskById(taskId)!;
  await scheduler.runScheduledTask(task, deps as any);

  const updated = db.getTaskById(taskId)!;
  expect(updated.last_run).not.toBeNull();
  expect(updated.last_result).toContain("Hello");
  expect(sent.length).toBe(1);

  const logs = db.getTaskRunLogs(taskId);
  expect(logs.length).toBe(1);
  expect(logs[0].status).toBe("success");
});

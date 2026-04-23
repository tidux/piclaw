/**
 * test/cli-post.test.ts – Tests for the CLI --post switch.
 *
 * Exercises `piclaw --post <chat_jid> <message>` via handleCliOptions()
 * in a temp workspace, verifying direct Markdown message insertion.
 */

import { afterAll, expect, test } from "bun:test";
import { createTempWorkspace, importFresh, setEnv } from "./helpers.js";

const ws = createTempWorkspace("piclaw-cli-post-");
const restore = setEnv({
  PICLAW_WORKSPACE: ws.workspace,
  PICLAW_STORE: ws.store,
  PICLAW_DATA: ws.data,
});

const { handleCliOptions } = await importFresh<typeof import("../src/cli.js")>("../src/cli.js");
const { getDb } = await importFresh<typeof import("../src/db.js")>("../src/db.js");

afterAll(() => {
  restore();
  ws.cleanup();
});

test("cli --post stores a web-agent message in the target chat", async () => {
  const logs: string[] = [];
  const originalLog = console.log;
  console.log = (...args: any[]) => {
    logs.push(args.map(String).join(" "));
  };

  try {
    const handled = await handleCliOptions(["--post", "web:chat:test-github", "## Digest\n\n- one\n- two"]);
    expect(handled).toBe(true);
  } finally {
    console.log = originalLog;
  }

  const row = getDb()
    .prepare(
      `SELECT chat_jid, sender, sender_name, content, is_bot_message
         FROM messages
        WHERE chat_jid = 'web:chat:test-github'
        ORDER BY rowid DESC
        LIMIT 1`,
    )
    .get() as Record<string, unknown> | undefined;

  expect(row).toBeDefined();
  expect(row?.chat_jid).toBe("web:chat:test-github");
  expect(row?.sender).toBe("web-agent");
  expect(row?.sender_name).toBe("Smith");
  expect(row?.content).toBe("## Digest\n\n- one\n- two");
  expect(row?.is_bot_message).toBe(1);
  expect(logs.some((line) => line.includes("Posted message"))).toBe(true);
});

test("cli --post rejects empty content", async () => {
  const errors: string[] = [];
  const originalError = console.error;
  console.error = (...args: any[]) => {
    errors.push(args.map(String).join(" "));
  };

  try {
    const handled = await handleCliOptions(["--post", "web:chat:test-github", "   "]);
    expect(handled).toBe(true);
  } finally {
    console.error = originalError;
  }

  expect(errors.some((line) => line.includes("Message content is required for --post."))).toBe(true);
});

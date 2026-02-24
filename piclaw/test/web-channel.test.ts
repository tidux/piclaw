import { expect, test, afterEach } from "bun:test";
import { getTestWorkspace, setEnv } from "./helpers.js";

let restoreEnv: (() => void) | null = null;

afterEach(() => {
  restoreEnv?.();
  restoreEnv = null;
});

test("web channel timeline and search endpoints", async () => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const db = await import("../src/db.js");
  db.initDatabase();
  db.storeChatMetadata("web:default", new Date().toISOString(), "Web");

  const makeMessage = (content: string, timestamp: string) => ({
    id: `msg-${Math.random()}`,
    chat_jid: "web:default",
    sender: "user",
    sender_name: "User",
    content,
    timestamp,
    is_from_me: false,
    is_bot_message: false,
  });

  db.storeMessage(makeMessage("hello #world", "2024-01-01T00:00:00.000Z"));
  db.storeMessage(makeMessage("another message", "2024-01-01T00:01:00.000Z"));
  db.storeMessage(makeMessage("#world hello", "2024-01-01T00:02:00.000Z"));

  const webMod = await import("../src/channels/web.js");
  const web = new (webMod.WebChannel as any)({
    queue: { enqueue: () => {} },
    agentPool: { runAgent: async () => ({ status: "success", result: "ok" }) },
  });

  const timelineRes = await (web as any).handleRequest(new Request("http://test/timeline?limit=2"));
  const timelineJson = await timelineRes.json();
  expect(timelineJson.posts.length).toBe(2);

  const searchRes = await (web as any).handleRequest(new Request("http://test/search?q=hello&limit=10&offset=0"));
  const searchJson = await searchRes.json();
  expect(searchJson.results.length).toBe(2);

  const hashtagRes = await (web as any).handleRequest(new Request("http://test/hashtag/world?limit=10&offset=0"));
  const hashtagJson = await hashtagRes.json();
  expect(hashtagJson.posts.length).toBe(2);
});

test("web channel can create a post", async () => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const db = await import("../src/db.js");
  db.initDatabase();
  db.storeChatMetadata("web:default", new Date().toISOString(), "Web");

  const webMod = await import("../src/channels/web.js");
  const web = new (webMod.WebChannel as any)({
    queue: { enqueue: () => {} },
    agentPool: { runAgent: async () => ({ status: "success", result: "ok" }) },
  });

  const req = new Request("http://test/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: "hi" }),
  });

  const res = await (web as any).handleRequest(req);
  expect(res.status).toBe(201);
  const json = await res.json();
  expect(json.data.content).toBe("hi");
});

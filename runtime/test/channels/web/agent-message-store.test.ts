import { describe, expect, test } from "bun:test";

import { storeAgentTurn } from "../../../src/channels/web/messaging/agent-message-store.js";

describe("agent message store", () => {
  test("dispatches Web Push for terminal persisted replies", async () => {
    const interaction = {
      id: 101,
      chat_jid: "web:default",
      timestamp: "2026-04-14T22:10:00.000Z",
      data: {
        content: "Final reply",
      },
    } as any;

    const deliveries: any[] = [];
    const emitter = {
      response(payload: any) {
        deliveries.push({ type: "response", payload });
      },
    } as any;

    const pushCalls: any[] = [];
    const ok = storeAgentTurn({
      consumeQueuedFollowupPlaceholder: () => null,
      replaceQueuedFollowupPlaceholder: () => null,
      broadcastEvent: () => {},
      storeMessage: () => interaction,
    } as any, emitter, {
      chatJid: "web:default",
      text: "Final reply",
      attachments: [],
      channelName: "web" as any,
      isTerminalAgentReply: true,
      dispatchWebPushNotification: async (payload) => {
        pushCalls.push(payload);
      },
    });

    expect(ok).toBe(true);
    expect(deliveries).toHaveLength(1);
    await Promise.resolve();
    expect(pushCalls).toEqual([interaction]);
  });

  test("does not dispatch Web Push for non-terminal replies", async () => {
    const interaction = {
      id: 102,
      chat_jid: "web:default",
      timestamp: "2026-04-14T22:11:00.000Z",
      data: {
        content: "Intermediate reply",
      },
    } as any;

    const pushCalls: any[] = [];
    const ok = storeAgentTurn({
      consumeQueuedFollowupPlaceholder: () => null,
      replaceQueuedFollowupPlaceholder: () => null,
      broadcastEvent: () => {},
      storeMessage: () => interaction,
    } as any, {
      response: () => {},
    } as any, {
      chatJid: "web:default",
      text: "Intermediate reply",
      attachments: [],
      channelName: "web" as any,
      isTerminalAgentReply: false,
      dispatchWebPushNotification: async (payload) => {
        pushCalls.push(payload);
      },
    });

    expect(ok).toBe(true);
    await Promise.resolve();
    expect(pushCalls).toEqual([]);
  });
});

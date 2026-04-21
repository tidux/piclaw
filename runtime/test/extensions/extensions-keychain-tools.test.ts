/**
 * test/extensions/extensions-keychain-tools.test.ts – Tests for keychain-tools extension.
 */

import { beforeEach, afterEach, describe, expect, test } from "bun:test";
import { createTempWorkspace, importFresh, setEnv } from "../helpers.js";
import { createFakeExtensionApi } from "./fake-extension-api.js";

describe("keychain-tools extension", () => {
  let ws: ReturnType<typeof createTempWorkspace>;
  let restoreEnv: (() => void) | null = null;

  beforeEach(async () => {
    ws = createTempWorkspace("piclaw-keychain-tools-");
    restoreEnv = setEnv({
      PICLAW_WORKSPACE: ws.workspace,
      PICLAW_STORE: ws.store,
      PICLAW_DATA: ws.data,
      PICLAW_KEYCHAIN_KEY: "test-keychain-tools",
    });

    const db = await importFresh<typeof import("../src/db.js")>("../src/db.js");
    db.initDatabase();
    const keychain = await importFresh<typeof import("../src/secure/keychain.js")>("../src/secure/keychain.js");
    await keychain.setKeychainEntry({
      name: "ssh/piclaw",
      type: "secret",
      secret: "PRIVATE_KEY_DATA",
      username: "git",
    });
  });

  afterEach(() => {
    restoreEnv?.();
    restoreEnv = null;
    ws.cleanup();
  });

  async function registerKeychainExtension() {
    const { keychainTools } = await importFresh<typeof import("../src/extensions/keychain-tools.js")>(
      "../src/extensions/keychain-tools.js",
    );
    const fake = createFakeExtensionApi();
    keychainTools(fake.api);
    return fake;
  }

  async function getTool() {
    const fake = await registerKeychainExtension();
    return fake.tools.get("keychain");
  }

  test("lists keychain entries", async () => {
    const tool = await getTool();
    const result = await tool.execute("k1", { action: "list" });
    expect(result.content[0].text).toContain("Keychain entries");
    expect(result.content[0].text).toContain("ssh/piclaw");
    expect(result.details.count).toBe(1);
  });

  test("retrieves secret and username fields", async () => {
    const tool = await getTool();

    const secretResult = await tool.execute("k2", { action: "get", name: "ssh/piclaw" });
    expect(secretResult.content[0].text).toBe("PRIVATE_KEY_DATA");

    const userResult = await tool.execute("k3", { action: "get", name: "ssh/piclaw", field: "username" });
    expect(userResult.content[0].text).toBe("git");
  });

  test("sets a keychain entry and can read it back", async () => {
    const tool = await getTool();

    const setResult = await tool.execute("k4", {
      action: "set",
      name: "proxmox/piclaw",
      type: "token",
      secret: "tok_123",
      username: "root@pam!piclaw",
    });
    expect(setResult.content[0].text).toContain("Stored keychain entry proxmox/piclaw (token).");

    const secretResult = await tool.execute("k5", { action: "get", name: "proxmox/piclaw" });
    expect(secretResult.content[0].text).toBe("tok_123");

    const userResult = await tool.execute("k6", { action: "get", name: "proxmox/piclaw", field: "username" });
    expect(userResult.content[0].text).toBe("root@pam!piclaw");
  });

  test("deletes a keychain entry", async () => {
    const tool = await getTool();

    const removed = await tool.execute("k7", { action: "delete", name: "ssh/piclaw" });
    expect(removed.content[0].text).toContain("Deleted keychain entry ssh/piclaw.");

    const missing = await tool.execute("k8", { action: "delete", name: "ssh/piclaw" });
    expect(missing.content[0].text).toContain("Keychain entry not found: ssh/piclaw");
  });

  test("before_agent_start includes env and integration profile hints", async () => {
    const db = await importFresh<typeof import("../src/db.js")>("../src/db.js");
    const keychain = await importFresh<typeof import("../src/secure/keychain.js")>("../src/secure/keychain.js");
    db.initDatabase();
    await keychain.setKeychainEntry({
      name: "STRIPE_KEY",
      type: "token",
      secret: "stripe-secret",
    });
    await keychain.setKeychainEntry({
      name: "proxmox/lab",
      type: "secret",
      secret: "token-secret",
      username: "root@pam!lab",
    });
    await keychain.setKeychainEntry({
      name: "portainer/relay",
      type: "secret",
      secret: "portainer-token",
      username: "https://portainer.example.com:9443",
    });

    const fake = await registerKeychainExtension();
    const beforeAgentStart = fake.handlers.find((entry) => entry.event === "before_agent_start")?.handler;
    const result = await beforeAgentStart?.({ systemPrompt: "base prompt" });
    expect(result?.systemPrompt).toContain("$STRIPE_KEY");
    expect(result?.systemPrompt).toContain("ssh/piclaw");
    expect(result?.systemPrompt).toContain("proxmox/lab");
    expect(result?.systemPrompt).toContain("portainer/relay");
  });

  test("tool_result redacts sensitive values but leaves non-sensitive secret-type identifiers alone", async () => {
    const db = await importFresh<typeof import("../src/db.js")>("../src/db.js");
    const keychain = await importFresh<typeof import("../src/secure/keychain.js")>("../src/secure/keychain.js");
    db.initDatabase();
    await keychain.setKeychainEntry({
      name: "STRIPE_KEY",
      type: "token",
      secret: "stripe-secret",
    });
    await keychain.setKeychainEntry({
      name: "restic/azure-account-name",
      type: "secret",
      secret: "piclawstorage",
    });

    const fake = await registerKeychainExtension();
    const toolResult = fake.handlers.find((entry) => entry.event === "tool_result")?.handler;
    const result = await toolResult?.({
      toolName: "bash",
      content: [{ type: "text", text: "value=stripe-secret account=piclawstorage" }],
      details: { nested: "stripe-secret", account: "piclawstorage" },
      input: {},
      isError: false,
      toolCallId: "tool-1",
      type: "tool_result",
    });

    expect(result?.content?.[0]?.text).toBe("value=[REDACTED] account=piclawstorage");
    expect(result?.details).toEqual({ nested: "[REDACTED]", account: "piclawstorage" });

    const keychainPassthrough = await toolResult?.({
      toolName: "keychain",
      content: [{ type: "text", text: "stripe-secret" }],
      details: { nested: "stripe-secret" },
      input: {},
      isError: false,
      toolCallId: "tool-2",
      type: "tool_result",
    });
    expect(keychainPassthrough).toBeUndefined();
  });

  test("set/delete actions validate required fields", async () => {
    const tool = await getTool();

    const missingNameSet = await tool.execute("k9", { action: "set", secret: "abc" });
    expect(missingNameSet.content[0].text).toContain("Provide name for action=set");

    const missingSecret = await tool.execute("k10", { action: "set", name: "foo/bar" });
    expect(missingSecret.content[0].text).toContain("Provide secret for action=set");

    const missingNameDelete = await tool.execute("k11", { action: "delete" });
    expect(missingNameDelete.content[0].text).toContain("Provide name for action=delete");
  });
});

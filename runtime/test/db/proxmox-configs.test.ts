import { expect, test } from "bun:test";

import "../helpers.js";
import { importFresh, withTempWorkspaceEnv } from "../helpers.js";

type DbModule = typeof import("../../src/db.js");

test("stores, updates, lists, and deletes per-chat Proxmox configs", async () => {
  await withTempWorkspaceEnv("piclaw-chat-proxmox-", {}, async () => {
    const db = await importFresh<DbModule>("../src/db.js");
    db.initDatabase();

    try {
      const first = db.upsertProxmoxConfig({
        chat_jid: "web:default",
        base_url: "https://proxmox-a:8006/api2/json",
        api_token_keychain: "proxmox/a",
        allow_insecure_tls: true,
      });
      const second = db.upsertProxmoxConfig({
        chat_jid: "web:other",
        base_url: "https://proxmox-b:8006/api2/json",
        api_token_keychain: "proxmox/b",
        allow_insecure_tls: false,
      });

      expect(first.base_url).toBe("https://proxmox-a:8006/api2/json");
      expect(second.allow_insecure_tls).toBe(false);
      expect(db.getProxmoxConfig("web:default")?.api_token_keychain).toBe("proxmox/a");

      const updated = db.upsertProxmoxConfig({
        chat_jid: "web:default",
        base_url: "https://proxmox-c:8006/api2/json",
        api_token_keychain: "proxmox/c",
        allow_insecure_tls: false,
      });
      expect(updated.base_url).toBe("https://proxmox-c:8006/api2/json");
      expect(updated.allow_insecure_tls).toBe(false);

      expect(db.listProxmoxConfigs().map((entry) => entry.chat_jid).sort()).toEqual(["web:default", "web:other"]);
      expect(db.deleteProxmoxConfig("web:other")).toBe(true);
      expect(db.deleteProxmoxConfig("web:other")).toBe(false);
      expect(db.getProxmoxConfig("web:other")).toBeNull();
    } finally {
      try {
        db.getDb().close();
      } catch {
        // ignore close races in tests
      }
    }
  });
});

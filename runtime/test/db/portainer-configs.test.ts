import { expect, test } from "bun:test";

import "../helpers.js";
import { importFresh, withTempWorkspaceEnv } from "../helpers.js";

type DbModule = typeof import("../../src/db.js");

test("stores, updates, lists, and deletes per-chat Portainer configs", async () => {
  await withTempWorkspaceEnv("piclaw-chat-portainer-", {}, async () => {
    const db = await importFresh<DbModule>("../src/db.js");
    db.initDatabase();

    try {
      const first = db.upsertPortainerConfig({
        chat_jid: "web:default",
        base_url: "https://portainer-a:9443",
        api_token_keychain: "portainer/a",
        allow_insecure_tls: true,
      });
      const second = db.upsertPortainerConfig({
        chat_jid: "web:other",
        base_url: "https://portainer-b:9443",
        api_token_keychain: "portainer/b",
        allow_insecure_tls: false,
      });

      expect(first.base_url).toBe("https://portainer-a:9443");
      expect(second.allow_insecure_tls).toBe(false);
      expect(db.getPortainerConfig("web:default")?.api_token_keychain).toBe("portainer/a");

      const updated = db.upsertPortainerConfig({
        chat_jid: "web:default",
        base_url: "https://portainer-c:9443",
        api_token_keychain: "portainer/c",
        allow_insecure_tls: false,
      });
      expect(updated.base_url).toBe("https://portainer-c:9443");
      expect(updated.allow_insecure_tls).toBe(false);

      expect(db.listPortainerConfigs().map((entry) => entry.chat_jid).sort()).toEqual(["web:default", "web:other"]);
      expect(db.deletePortainerConfig("web:other")).toBe(true);
      expect(db.deletePortainerConfig("web:other")).toBe(false);
      expect(db.getPortainerConfig("web:other")).toBeNull();
    } finally {
      try {
        db.getDb().close();
      } catch {
        // ignore close races in tests
      }
    }
  });
});

import { getDb } from "./connection.js";
function normalizeBoolean(value) {
    if (typeof value === "boolean")
        return value;
    if (typeof value === "number")
        return value !== 0;
    if (typeof value === "string") {
        const raw = value.trim().toLowerCase();
        if (["1", "true", "yes", "on"].includes(raw))
            return true;
        if (["0", "false", "no", "off"].includes(raw))
            return false;
    }
    return true;
}
export function getPortainerConfig(chatJid) {
    const db = getDb();
    const row = db.prepare(`SELECT chat_jid, base_url, api_token_keychain, allow_insecure_tls, created_at, updated_at
       FROM portainer_configs
      WHERE chat_jid = ?`).get(chatJid);
    if (!row)
        return null;
    return {
        ...row,
        allow_insecure_tls: normalizeBoolean(row.allow_insecure_tls),
    };
}
export function upsertPortainerConfig(config) {
    const db = getDb();
    const now = new Date().toISOString();
    db.prepare(`INSERT INTO portainer_configs (
        chat_jid, base_url, api_token_keychain, allow_insecure_tls, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(chat_jid) DO UPDATE SET
        base_url = excluded.base_url,
        api_token_keychain = excluded.api_token_keychain,
        allow_insecure_tls = excluded.allow_insecure_tls,
        updated_at = excluded.updated_at`).run(config.chat_jid, config.base_url, config.api_token_keychain, config.allow_insecure_tls ? 1 : 0, now, now);
    return getPortainerConfig(config.chat_jid);
}
export function deletePortainerConfig(chatJid) {
    const db = getDb();
    const result = db.prepare("DELETE FROM portainer_configs WHERE chat_jid = ?").run(chatJid);
    return result.changes > 0;
}
export function listPortainerConfigs() {
    const db = getDb();
    const rows = db.prepare(`SELECT chat_jid, base_url, api_token_keychain, allow_insecure_tls, created_at, updated_at
       FROM portainer_configs
      ORDER BY updated_at DESC, chat_jid ASC`).all();
    return rows.map((row) => ({
        ...row,
        allow_insecure_tls: normalizeBoolean(row.allow_insecure_tls),
    }));
}

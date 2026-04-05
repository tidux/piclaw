import { deletePortainerConfig, getPortainerConfig, upsertPortainerConfig, } from "../db.js";
import { discoverPortainerInstances, requestPortainerApi, resolvePortainerAuth, runPortainerWorkflow, } from "./client.js";
export function getStoredPortainerConfig(chatJid) {
    return getPortainerConfig(chatJid);
}
export async function setStoredPortainerConfig(chatJid, config) {
    let apiTokenKeychain = config.api_token_keychain.trim();
    let baseUrl = config.base_url.trim();
    if (!apiTokenKeychain || !baseUrl) {
        const discovery = await discoverPortainerInstances();
        const candidate = discovery.default_candidate;
        if (candidate) {
            if (!apiTokenKeychain)
                apiTokenKeychain = candidate.api_token_keychain;
            if (!baseUrl && candidate.base_url)
                baseUrl = candidate.base_url;
        }
    }
    if (!apiTokenKeychain) {
        throw new Error("Portainer api_token_keychain is required and no discoverable default was found.");
    }
    if (!baseUrl) {
        const auth = await resolvePortainerAuth(apiTokenKeychain);
        baseUrl = auth.base_url?.trim() || "";
    }
    if (!baseUrl) {
        throw new Error(`Portainer base_url is required; ${apiTokenKeychain} did not provide a base URL fallback.`);
    }
    return {
        config: upsertPortainerConfig({
            chat_jid: chatJid,
            ...config,
            base_url: baseUrl,
            api_token_keychain: apiTokenKeychain,
        }),
        apply_timing: "immediate",
    };
}
export async function clearStoredPortainerConfig(chatJid) {
    return {
        deleted: deletePortainerConfig(chatJid),
        apply_timing: "immediate",
    };
}
function getRequiredPortainerConfig(chatJid) {
    const config = getPortainerConfig(chatJid);
    if (!config) {
        throw new Error(`No Portainer config stored for ${chatJid}. Use portainer action=set first.`);
    }
    return config;
}
export async function requestStoredPortainerApi(chatJid, input) {
    const config = getRequiredPortainerConfig(chatJid);
    const method = input.method.trim().toUpperCase();
    if (!["GET", "POST", "PUT", "DELETE"].includes(method)) {
        throw new Error(`Unsupported Portainer API method: ${input.method}`);
    }
    const response = await requestPortainerApi(config, {
        method: method,
        path: input.path,
        ...(input.query !== undefined ? { query: input.query } : {}),
        ...(input.body !== undefined ? { body: input.body } : {}),
        ...(input.body_mode ? { body_mode: input.body_mode } : {}),
        ...(input.headers ? { headers: input.headers } : {}),
    });
    return {
        status: response.status,
        method: response.method,
        path: response.path,
        body: response.body,
    };
}
export async function runStoredPortainerWorkflow(chatJid, input) {
    return runPortainerWorkflow(getRequiredPortainerConfig(chatJid), input);
}

import { deleteProxmoxConfig, getProxmoxConfig, upsertProxmoxConfig, } from "../db.js";
import { discoverProxmoxInstances, requestProxmoxApi, runProxmoxWorkflow, } from "./client.js";
export function getStoredProxmoxConfig(chatJid) {
    return getProxmoxConfig(chatJid);
}
export async function setStoredProxmoxConfig(chatJid, config) {
    let baseUrl = config.base_url.trim();
    let apiTokenKeychain = config.api_token_keychain.trim();
    if (!baseUrl || !apiTokenKeychain) {
        const discovery = await discoverProxmoxInstances();
        const candidate = discovery.default_candidate;
        if (candidate) {
            if (!baseUrl && candidate.base_url)
                baseUrl = candidate.base_url;
            if (!apiTokenKeychain)
                apiTokenKeychain = candidate.api_token_keychain;
        }
    }
    if (!baseUrl) {
        throw new Error("Proxmox base_url is required and no discoverable default was found.");
    }
    if (!apiTokenKeychain) {
        throw new Error("Proxmox api_token_keychain is required and no discoverable default was found.");
    }
    return {
        config: upsertProxmoxConfig({
            chat_jid: chatJid,
            ...config,
            base_url: baseUrl,
            api_token_keychain: apiTokenKeychain,
        }),
        apply_timing: "immediate",
    };
}
export async function clearStoredProxmoxConfig(chatJid) {
    return {
        deleted: deleteProxmoxConfig(chatJid),
        apply_timing: "immediate",
    };
}
function getRequiredProxmoxConfig(chatJid) {
    const config = getProxmoxConfig(chatJid);
    if (!config) {
        throw new Error(`No Proxmox config stored for ${chatJid}. Use proxmox action=set first.`);
    }
    return config;
}
export async function requestStoredProxmoxApi(chatJid, input) {
    const config = getRequiredProxmoxConfig(chatJid);
    const method = input.method.trim().toUpperCase();
    if (![
        "GET",
        "POST",
        "PUT",
        "DELETE",
    ].includes(method)) {
        throw new Error(`Unsupported Proxmox API method: ${input.method}`);
    }
    const response = await requestProxmoxApi(config, {
        method: method,
        path: input.path,
        ...(input.query !== undefined ? { query: input.query } : {}),
        ...(input.body !== undefined ? { body: input.body } : {}),
        ...(input.body_mode ? { body_mode: input.body_mode } : {}),
    });
    return {
        status: response.status,
        method: response.method,
        path: response.path,
        body: response.body,
    };
}
export async function runStoredProxmoxWorkflow(chatJid, input) {
    return runProxmoxWorkflow(getRequiredProxmoxConfig(chatJid), input);
}

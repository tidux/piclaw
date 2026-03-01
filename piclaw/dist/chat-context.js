import { AsyncLocalStorage } from "async_hooks";
const storage = new AsyncLocalStorage();
function setEnv(chatJid, channel) {
    const prevChat = process.env.PICLAW_CHAT_JID;
    const prevChannel = process.env.PICLAW_CHANNEL;
    process.env.PICLAW_CHAT_JID = chatJid;
    process.env.PICLAW_CHANNEL = channel;
    return () => {
        if (prevChat === undefined)
            delete process.env.PICLAW_CHAT_JID;
        else
            process.env.PICLAW_CHAT_JID = prevChat;
        if (prevChannel === undefined)
            delete process.env.PICLAW_CHANNEL;
        else
            process.env.PICLAW_CHANNEL = prevChannel;
    };
}
export async function withChatContext(chatJid, channel, fn) {
    const restore = setEnv(chatJid, channel);
    try {
        return await storage.run({ chatJid, channel }, fn);
    }
    finally {
        restore();
    }
}
export function getChatContext() {
    return storage.getStore() ?? null;
}
export function getChatJid(defaultValue = "web:default") {
    return storage.getStore()?.chatJid ?? process.env.PICLAW_CHAT_JID ?? defaultValue;
}
export function getChatChannel(defaultValue = "web") {
    return storage.getStore()?.channel ?? process.env.PICLAW_CHANNEL ?? defaultValue;
}

/**
 * channels/web/content-endpoints.ts – timeline/search/thread/thought endpoint helpers.
 */
import { getHashtagResponse, getSearchResponse, getThreadResponse, getTimelineResponse, } from "../timeline-service.js";
import { appendServerTiming, measureSync } from "../http/server-timing.js";
/** Return the timeline response for the requested web chat (defaults to the main web chat). */
export function handleTimelineRequest(limit, before, chatJid, ctx) {
    const { result, durationMs } = measureSync(() => getTimelineResponse(chatJid || ctx.defaultChatJid, limit, before));
    return appendServerTiming(ctx.json(result.body, result.status), {
        name: "timeline",
        durationMs,
    });
}
/** Return posts for a hashtag in the requested web chat (defaults to the main web chat). */
export function handleHashtagRequest(tag, limit, offset, chatJid, ctx) {
    const { result, durationMs } = measureSync(() => getHashtagResponse(chatJid || ctx.defaultChatJid, tag, limit, offset));
    return appendServerTiming(ctx.json(result.body, result.status), {
        name: "hashtag",
        durationMs,
    });
}
/** Return search results for a query in the requested web chat (defaults to the main web chat). */
export function handleSearchRequest(query, limit, offset, chatJid, searchScope, rootChatJid, ctx) {
    const normalizedScope = searchScope === "root" || searchScope === "all" ? searchScope : "current";
    const { result, durationMs } = measureSync(() => getSearchResponse(chatJid || ctx.defaultChatJid, query, limit, offset, normalizedScope, rootChatJid || null));
    return appendServerTiming(ctx.json(result.body, result.status), {
        name: "search",
        durationMs,
    });
}
/** Return a thread payload rooted at the provided interaction id. */
export function handleThreadRequest(id, chatJid, ctx) {
    const { result, durationMs } = measureSync(() => getThreadResponse(chatJid || ctx.defaultChatJid, id));
    return appendServerTiming(ctx.json(result.body, result.status), {
        name: "thread",
        durationMs,
    });
}
/** Return persisted thought/draft buffer text for a streamed model turn. */
export function handleThoughtRequest(panel, turnId, ctx) {
    const { result, durationMs } = measureSync(() => {
        if (!turnId)
            return ctx.json({ error: "Missing turn_id" }, 400);
        const normalized = panel === "draft" ? "draft" : "thought";
        const buffer = ctx.getBuffer(turnId, normalized);
        if (!buffer)
            return ctx.json({ error: "Thought not found" }, 404);
        return ctx.json({ text: buffer.text, total_lines: buffer.totalLines }, 200);
    });
    return appendServerTiming(result, {
        name: "thought",
        durationMs,
    });
}

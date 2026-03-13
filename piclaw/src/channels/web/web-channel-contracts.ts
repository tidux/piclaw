/**
 * web/web-channel-contracts.ts – Structural channel contracts for web handler modules.
 *
 * We use this shared loose type to avoid importing `web.ts` from handler/dispatch
 * layers, which creates static circular edges during dependency audit. This keeps
 * behavior and runtime coupling unchanged.
 */

export type WebChannelLike = any;

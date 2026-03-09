/**
 * web/http/dispatch-auth.ts – WebAuthn/TOTP auth route dispatch helpers.
 */

import type { WebChannel } from "../web.js";
import type { RouteFlags } from "./route-flags.js";

/**
 * Handle auth routes when the request matches; otherwise return null.
 */
export async function handleAuthRoutes(
  channel: WebChannel,
  req: Request,
  flags: RouteFlags
): Promise<Response | null> {
  if (flags.isWebauthnEnrollPage) {
    if (!channel.isTotpSession(req)) {
      if (flags.isGetOrHead) {
        return channel.redirectToLogin();
      }
      return channel.json({ error: "TOTP session required" }, 401);
    }
    return await channel.handleWebauthnEnrollPage(req);
  }

  if (flags.isWebauthnLoginStart) {
    return await channel.handleWebauthnLoginStart(req);
  }

  if (flags.isWebauthnLoginFinish) {
    return await channel.handleWebauthnLoginFinish(req);
  }

  if (flags.isWebauthnRegisterStart) {
    return await channel.handleWebauthnRegisterStart(req);
  }

  if (flags.isWebauthnRegisterFinish) {
    return await channel.handleWebauthnRegisterFinish(req);
  }

  return null;
}

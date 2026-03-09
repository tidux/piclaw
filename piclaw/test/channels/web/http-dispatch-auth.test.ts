import { describe, expect, test } from "bun:test";
import { handleAuthRoutes } from "../../../src/channels/web/http/dispatch-auth.js";
import type { RouteFlags } from "../../../src/channels/web/http/route-flags.js";

function baseFlags(): RouteFlags {
  return {
    isGetOrHead: false,
    isLoginPage: false,
    isAuthVerify: false,
    isWebauthnLoginStart: false,
    isWebauthnLoginFinish: false,
    isWebauthnRegisterStart: false,
    isWebauthnRegisterFinish: false,
    isWebauthnEnrollPage: false,
    isInternalPost: false,
    isInternalPatch: false,
    isIndex: false,
    isManifest: false,
    isFavicon: false,
    isAppleIcon: false,
    isStaticAsset: false,
    isPublicStatic: false,
    isDocsAsset: false,
    isAvatar: false,
    isMutating: false,
    isAuthEndpoint: false,
  };
}

describe("web http auth dispatch", () => {
  test("returns null when no auth route matches", async () => {
    const channel = {} as any;
    const req = new Request("https://example.com/agents", { method: "GET" });
    const response = await handleAuthRoutes(channel, req, baseFlags());
    expect(response).toBeNull();
  });

  test("enrol route requires TOTP session", async () => {
    const channel = {
      isTotpSession: () => false,
      redirectToLogin: () => new Response(null, { status: 302 }),
      json: (_payload: unknown, status: number) => new Response(null, { status }),
      handleWebauthnEnrollPage: async () => new Response("ok"),
    } as any;

    const getReq = new Request("https://example.com/auth/webauthn/enrol", { method: "GET" });
    const getFlags = { ...baseFlags(), isWebauthnEnrollPage: true, isGetOrHead: true };
    expect((await handleAuthRoutes(channel, getReq, getFlags))?.status).toBe(302);

    const postReq = new Request("https://example.com/auth/webauthn/enrol", { method: "POST" });
    const postFlags = { ...baseFlags(), isWebauthnEnrollPage: true, isGetOrHead: false };
    expect((await handleAuthRoutes(channel, postReq, postFlags))?.status).toBe(401);
  });

  test("dispatches webauthn start/finish routes", async () => {
    const channel = {
      isTotpSession: () => true,
      redirectToLogin: () => new Response(null, { status: 302 }),
      json: (_payload: unknown, status: number) => new Response(null, { status }),
      handleWebauthnEnrollPage: async () => new Response("enrol"),
      handleWebauthnLoginStart: async () => new Response("login-start"),
      handleWebauthnLoginFinish: async () => new Response("login-finish"),
      handleWebauthnRegisterStart: async () => new Response("register-start"),
      handleWebauthnRegisterFinish: async () => new Response("register-finish"),
    } as any;

    const req = new Request("https://example.com/auth/webauthn", { method: "POST" });

    expect(await (await handleAuthRoutes(channel, req, { ...baseFlags(), isWebauthnEnrollPage: true }))?.text()).toBe("enrol");
    expect(await (await handleAuthRoutes(channel, req, { ...baseFlags(), isWebauthnLoginStart: true }))?.text()).toBe("login-start");
    expect(await (await handleAuthRoutes(channel, req, { ...baseFlags(), isWebauthnLoginFinish: true }))?.text()).toBe("login-finish");
    expect(await (await handleAuthRoutes(channel, req, { ...baseFlags(), isWebauthnRegisterStart: true }))?.text()).toBe("register-start");
    expect(await (await handleAuthRoutes(channel, req, { ...baseFlags(), isWebauthnRegisterFinish: true }))?.text()).toBe("register-finish");
  });
});

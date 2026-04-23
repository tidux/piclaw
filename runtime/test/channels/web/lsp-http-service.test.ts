import { describe, expect, test } from "bun:test";

import { WebLspHttpService, type WebLspHttpServiceDeps } from "../../../src/channels/web/lsp-http-service.js";

function json(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function createRequest(path: string, init: RequestInit = {}): Request {
  return new Request(`http://localhost${path}`, {
    headers: {
      origin: "http://localhost",
      host: "localhost",
      ...(init.headers || {}),
    },
    ...init,
  });
}

function createFixture(overrides: Partial<WebLspHttpServiceDeps> = {}) {
  const state = {
    resolveCalls: [] as boolean[],
    sessionInfoCalls: [] as Array<string | null | undefined>,
    handoffCalls: [] as boolean[],
    settingsUpdates: [] as unknown[],
  };
  const owner = { kind: "lsp" as const, token: "lsp-token", userId: "user-1", path: "src/app.ts", target: {} as any };

  const deps: WebLspHttpServiceDeps = {
    json,
    authGateway: {
      isAuthEnabled: () => false,
      isAuthenticated: () => true,
    },
    lspService: {
      resolveOwnerFromRequest: (_req, allowUnauthenticated = false) => {
        state.resolveCalls.push(allowUnauthenticated);
        return owner;
      },
      getSessionInfo: (_owner, inputPath) => {
        state.sessionInfoCalls.push(inputPath);
        return { enabled: true, available: true, ws_path: "/lsp/ws", path: inputPath };
      },
      getRuntimePolicySettings: () => ({
        agents: {
          editor: {
            languages: {
              typescript: { enabled: true },
            },
          },
        },
      }),
      updateRuntimePolicySettings: (payload) => {
        state.settingsUpdates.push(payload);
        return payload;
      },
      createHandoffRequest: (_req, allowUnauthenticated = false) => {
        state.handoffCalls.push(allowUnauthenticated);
        return {
          ok: true,
          handoff: { token: "handoff-1", expires_at: "2026-04-22T00:00:00.000Z" },
        };
      },
    },
    ...overrides,
  };

  return {
    state,
    owner,
    service: new WebLspHttpService(deps),
  };
}

describe("web LSP HTTP service", () => {
  test("returns session info for authenticated or anonymous-enabled requests", async () => {
    const fixture = createFixture();
    const response = fixture.service.handleLspSession(createRequest("/lsp/session?path=src/app.ts"));
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      enabled: true,
      available: true,
      ws_path: "/lsp/ws",
      path: "src/app.ts",
    });
    expect(fixture.state.resolveCalls).toEqual([true]);
    expect(fixture.state.sessionInfoCalls).toEqual(["src/app.ts"]);
  });

  test("preserves auth and csrf checks for handoff", async () => {
    const unauthenticated = createFixture({
      authGateway: {
        isAuthEnabled: () => true,
        isAuthenticated: () => false,
      },
    });
    expect((await unauthenticated.service.handleLspHandoff(createRequest("/lsp/handoff?path=src/app.ts", { method: "POST" }))).status).toBe(401);

    const csrfBlocked = createFixture({
      checkCsrfOrigin: () => false,
    });
    expect((await csrfBlocked.service.handleLspHandoff(createRequest("/lsp/handoff?path=src/app.ts", { method: "POST" }))).status).toBe(403);

    const fixture = createFixture();
    const response = await fixture.service.handleLspHandoff(createRequest("/lsp/handoff?path=src/app.ts", { method: "POST" }));
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      ok: true,
      handoff: { token: "handoff-1", expires_at: "2026-04-22T00:00:00.000Z" },
    });
    expect(fixture.state.handoffCalls).toEqual([true]);
  });

  test("serves and updates LSP settings with auth and csrf enforcement", async () => {
    const fixture = createFixture();

    const getResponse = fixture.service.handleLspGetSettings(createRequest("/lsp/settings", { method: "GET" }));
    expect(getResponse.status).toBe(200);
    expect(await getResponse.json()).toEqual({
      agents: {
        editor: {
          languages: {
            typescript: { enabled: true },
          },
        },
      },
    });
    expect(fixture.state.resolveCalls).toEqual([]);

    const postResponse = await fixture.service.handleLspUpdateSettings(createRequest("/lsp/settings", {
      method: "POST",
      body: JSON.stringify({
        agents: {
          editor: {
            languages: {
              typescript: { enabled: false },
            },
          },
        },
      }),
      headers: {
        "content-type": "application/json",
      },
    }));
    expect(postResponse.status).toBe(200);
    expect(await postResponse.json()).toEqual({
      agents: {
        editor: {
          languages: {
            typescript: { enabled: false },
          },
        },
      },
    });
    expect(fixture.state.settingsUpdates).toEqual([{
      agents: {
        editor: {
          languages: {
            typescript: { enabled: false },
          },
        },
      },
    }]);

    const csrfBlocked = createFixture({ checkCsrfOrigin: () => false });
    expect((await csrfBlocked.service.handleLspUpdateSettings(createRequest("/lsp/settings", {
      method: "POST",
      body: JSON.stringify({}),
      headers: { "content-type": "application/json" },
    }))).status).toBe(403);
  });

  test("allows auth-disabled GET /lsp/settings without resolving an owner token", async () => {
    const fixture = createFixture({
      lspService: {
        resolveOwnerFromRequest: (_req, allowUnauthenticated = false) => {
          fixture.state.resolveCalls.push(allowUnauthenticated);
          return null;
        },
        getSessionInfo: () => ({}),
        getRuntimePolicySettings: () => ({ ok: true }),
        updateRuntimePolicySettings: (payload) => payload,
        createHandoffRequest: () => ({ ok: false, failure: { status: 409, error: "unused" } }),
      },
    });

    const response = fixture.service.handleLspGetSettings(createRequest("/lsp/settings", { method: "GET" }));
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(fixture.state.resolveCalls).toEqual([]);
  });

  test("preserves disabled-language handoff failures", async () => {
    const base = createFixture();
    const fixture = createFixture({
      lspService: {
        resolveOwnerFromRequest: () => base.owner,
        getSessionInfo: () => ({}),
        getRuntimePolicySettings: () => ({}),
        updateRuntimePolicySettings: (payload) => payload,
        createHandoffRequest: () => ({
          ok: false,
          failure: {
            status: 403,
            error: "LSP is disabled for the \"typescript\" language in workspace settings.",
          },
        }),
      },
    });

    const response = await fixture.service.handleLspHandoff(createRequest("/lsp/handoff?path=src/app.ts", { method: "POST" }));
    expect(response.status).toBe(403);
    expect(await response.json()).toEqual({
      error: "LSP is disabled for the \"typescript\" language in workspace settings.",
    });
  });
});

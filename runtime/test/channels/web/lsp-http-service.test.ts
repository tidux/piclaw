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
      createHandoffFromRequest: (_req, allowUnauthenticated = false) => {
        state.handoffCalls.push(allowUnauthenticated);
        return { token: "handoff-1", expires_at: "2026-04-22T00:00:00.000Z" };
      },
    },
    ...overrides,
  };

  return {
    state,
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
});

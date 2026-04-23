import { checkCsrfOrigin as defaultCheckCsrfOrigin } from "./http/security.js";
import { parseJsonObjectRequest } from "./json-body.js";

interface JsonResponder {
  json(payload: unknown, status?: number): Response;
}

interface AuthGatewayLike {
  isAuthEnabled(): boolean;
  isAuthenticated(req: Request): boolean;
}

interface LspOwnerLike {
  token: string;
  userId: string;
}

interface LspHandoffLike {
  token: string;
  expires_at: string;
}

interface LspFailureLike {
  status: number;
  error: string;
}

interface LspHandoffResolutionLike {
  ok: boolean;
  handoff?: LspHandoffLike;
  failure?: LspFailureLike;
}

interface LspServiceLike {
  resolveOwnerFromRequest(req: Request, allowUnauthenticated?: boolean): LspOwnerLike | null;
  getSessionInfo(owner: LspOwnerLike, inputPath: string | null | undefined): unknown;
  getRuntimePolicySettings(): unknown;
  updateRuntimePolicySettings(update: unknown): unknown;
  createHandoffRequest(req: Request, allowUnauthenticated?: boolean): LspHandoffResolutionLike;
}

export interface WebLspHttpServiceDeps extends JsonResponder {
  authGateway: AuthGatewayLike;
  lspService: LspServiceLike;
  checkCsrfOrigin?: (req: Request) => boolean;
}

export interface WebLspHttpChannel extends JsonResponder {
  authGateway: AuthGatewayLike;
  lspService: LspServiceLike;
}

export type WebLspHttpServiceSurface = Pick<
  WebLspHttpService,
  "handleLspSession" | "handleLspHandoff" | "handleLspGetSettings" | "handleLspUpdateSettings"
>;

export function createWebLspHttpService(channel: WebLspHttpChannel): WebLspHttpService {
  return new WebLspHttpService({
    json: (payload, status = 200) => channel.json(payload, status),
    authGateway: channel.authGateway,
    lspService: channel.lspService,
  });
}

export class WebLspHttpService {
  constructor(private readonly deps: WebLspHttpServiceDeps) {}

  handleLspSession(req: Request): Response {
    const authEnabled = this.deps.authGateway.isAuthEnabled();
    if (authEnabled && !this.deps.authGateway.isAuthenticated(req)) {
      return this.deps.json({ error: "Unauthorized" }, 401);
    }
    const owner = this.deps.lspService.resolveOwnerFromRequest(req, !authEnabled);
    if (!owner) {
      return this.deps.json({ error: "Unauthorized" }, 401);
    }
    const inputPath = new URL(req.url).searchParams.get("path")?.trim() || null;
    return this.deps.json(this.deps.lspService.getSessionInfo(owner, inputPath), 200);
  }

  async handleLspHandoff(req: Request): Promise<Response> {
    const authEnabled = this.deps.authGateway.isAuthEnabled();
    if (authEnabled && !this.deps.authGateway.isAuthenticated(req)) {
      return this.deps.json({ error: "Unauthorized" }, 401);
    }
    if (!this.checkCsrfOrigin(req)) {
      return this.deps.json({ error: "Origin not allowed" }, 403);
    }
    const resolution = this.deps.lspService.createHandoffRequest(req, !authEnabled);
    if (!resolution.ok || !resolution.handoff) {
      return this.deps.json(
        { error: resolution.failure?.error || "No live LSP session is available to transfer." },
        resolution.failure?.status || 409,
      );
    }
    return this.deps.json({ ok: true, handoff: resolution.handoff }, 200);
  }

  handleLspGetSettings(req: Request): Response {
    const authEnabled = this.deps.authGateway.isAuthEnabled();
    if (authEnabled && !this.deps.authGateway.isAuthenticated(req)) {
      return this.deps.json({ error: "Unauthorized" }, 401);
    }
    return this.deps.json(this.deps.lspService.getRuntimePolicySettings(), 200);
  }

  async handleLspUpdateSettings(req: Request): Promise<Response> {
    const authEnabled = this.deps.authGateway.isAuthEnabled();
    if (authEnabled && !this.deps.authGateway.isAuthenticated(req)) {
      return this.deps.json({ error: "Unauthorized" }, 401);
    }
    if (!this.checkCsrfOrigin(req)) {
      return this.deps.json({ error: "Origin not allowed" }, 403);
    }
    const body = await parseJsonObjectRequest(req);
    if (!body.ok) {
      return this.deps.json({ error: body.error }, 400);
    }
    try {
      return this.deps.json(this.deps.lspService.updateRuntimePolicySettings(body.payload), 200);
    } catch (error) {
      return this.deps.json(
        { error: error instanceof Error ? error.message : "Invalid LSP settings update." },
        400,
      );
    }
  }

  private checkCsrfOrigin(req: Request): boolean {
    return (this.deps.checkCsrfOrigin ?? defaultCheckCsrfOrigin)(req);
  }
}

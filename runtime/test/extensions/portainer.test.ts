import { afterEach, expect, test } from "bun:test";

import { createFakeExtensionApi } from "./fake-extension-api.ts";
import { portainerTool, setPortainerToolHandlers } from "../../src/extensions/portainer.js";

afterEach(() => {
  setPortainerToolHandlers(null);
});

test("portainer registers a normalized tool name", () => {
  const fake = createFakeExtensionApi();

  portainerTool(fake.api);

  expect(fake.tools.has("portainer")).toBe(true);
});

test("portainer set stores config through registered handlers", async () => {
  let seen: any = null;
  setPortainerToolHandlers({
    get: () => null,
    async set(chatJid, config) {
      seen = { chatJid, config };
      return {
        apply_timing: "immediate",
        config: {
          chat_jid: chatJid,
          ...config,
          created_at: "2026-04-05T00:00:00.000Z",
          updated_at: "2026-04-05T00:00:00.000Z",
        },
      };
    },
    async clear() {
      return { deleted: false, apply_timing: "immediate" };
    },
    async request() {
      throw new Error("unexpected");
    },
    async workflow() {
      throw new Error("unexpected");
    },
  });

  const fake = createFakeExtensionApi();
  portainerTool(fake.api);
  const tool = fake.tools.get("portainer");

  const result = await tool.execute("tool-1", {
    action: "set",
    base_url: "https://portainer.example.com:9443",
    api_token_keychain: "portainer/relay",
    allow_insecure_tls: false,
  });

  expect(seen).toEqual({
    chatJid: "web:default",
    config: {
      base_url: "https://portainer.example.com:9443",
      api_token_keychain: "portainer/relay",
      allow_insecure_tls: false,
    },
  });
  expect(result.details.apply_timing).toBe("immediate");
  expect(result.content[0].text).toContain("Stored Portainer config");
});

test("portainer request delegates through registered handlers", async () => {
  let seen: any = null;
  setPortainerToolHandlers({
    get: () => null,
    async set() {
      throw new Error("unexpected");
    },
    async clear() {
      return { deleted: false, apply_timing: "immediate" };
    },
    async request(chatJid, input) {
      seen = { chatJid, input };
      return {
        status: 200,
        method: input.method,
        path: "/api/endpoints",
        body: [{ Id: 2, Name: "diskstation" }],
      };
    },
    async workflow() {
      throw new Error("unexpected");
    },
  });

  const fake = createFakeExtensionApi();
  portainerTool(fake.api);
  const tool = fake.tools.get("portainer");

  const result = await tool.execute("tool-2", {
    action: "request",
    method: "get",
    path: "api/endpoints",
  });

  expect(seen).toEqual({
    chatJid: "web:default",
    input: {
      method: "GET",
      path: "api/endpoints",
    },
  });
  expect(result.details.response).toEqual({
    status: 200,
    method: "GET",
    path: "/api/endpoints",
    body: [{ Id: 2, Name: "diskstation" }],
  });
  expect(result.content[0].text).toContain("HTTP 200");
  expect(result.content[0].text).toContain("Response preview");
  expect(result.content[0].text).toContain("diskstation");
});

test("portainer workflow delegates through registered handlers", async () => {
  let seen: any = null;
  setPortainerToolHandlers({
    get: () => null,
    async set() {
      throw new Error("unexpected");
    },
    async clear() {
      return { deleted: false, apply_timing: "immediate" };
    },
    async request() {
      throw new Error("unexpected");
    },
    async workflow(chatJid, input) {
      seen = { chatJid, input };
      return {
        workflow: input.workflow,
        result: [{ Id: 2, Name: "diskstation" }],
      };
    },
  });

  const fake = createFakeExtensionApi();
  portainerTool(fake.api);
  const tool = fake.tools.get("portainer");

  const result = await tool.execute("tool-3", {
    action: "workflow",
    workflow: "endpoint.list",
  });

  expect(seen).toEqual({
    chatJid: "web:default",
    input: {
      workflow: "endpoint.list",
    },
  });
  expect(result.details.response).toEqual({
    workflow: "endpoint.list",
    result: [{ Id: 2, Name: "diskstation" }],
  });
  expect(result.content[0].text).toContain("(1 items)");
  expect(result.content[0].text).toContain("Result preview");
  expect(result.content[0].text).toContain("diskstation");
});

test("portainer capabilities and workflow_help are available without handlers", async () => {
  const fake = createFakeExtensionApi();
  portainerTool(fake.api);
  const tool = fake.tools.get("portainer");

  const contract = await tool.execute("tool-contract", { action: "contract" });
  expect(contract.details.actions).toContain("request_help");
  expect(contract.details.request_contract.required_fields).toContain("path");
  expect(contract.details.request_contract.response_shape.body_access_path).toBe("details.response.body");
  expect(Array.isArray(contract.details.request_contract.examples)).toBe(true);
  expect(contract.content[0].text).toContain("discover");

  const requestHelp = await tool.execute("tool-request-help", { action: "request_help" });
  expect(requestHelp.details.request_contract.optional_fields).toContain("headers");
  expect(requestHelp.details.request_contract.inventory_patterns[0].steps[0]).toContain("/api/endpoints");
  expect(requestHelp.content[0].text).toContain("path is required");

  const capabilities = await tool.execute("tool-cap", { action: "capabilities" });
  expect(capabilities.details.workflow_count).toBeGreaterThan(10);
  expect(capabilities.details.workflow_families).toContain("container");
  expect(capabilities.details.actions).toContain("recommend");
  expect(capabilities.details.actions).toContain("request_help");
  expect(capabilities.details.include_workflows).toBe(false);
  expect(capabilities.details.workflows).toBeUndefined();

  const family = await tool.execute("tool-cap-family", { action: "capabilities", category: "container" });
  expect(family.details.category).toBe("container");
  expect(family.details.include_workflows).toBe(true);
  expect(family.details.matching_workflow_count).toBeGreaterThan(5);

  const help = await tool.execute("tool-help", { action: "workflow_help", workflow: "image.update_check", include_examples: true });
  expect(help.details.canonical_workflow).toBe("image.update_check");
  expect(help.details.runtime_workflow).toBe("image.update_check");
  expect(help.details.recommended_for).toContain("update planning");
  expect(help.details.guidance.length).toBeGreaterThan(0);
  expect(Array.isArray(help.details.examples)).toBe(true);
  expect(help.content[0].text).toContain("Compare local and remote image digests");

  const recommend = await tool.execute("tool-recommend", { action: "recommend", intent: "refresh a stack-managed workload" });
  expect(recommend.details.recommendation_count).toBeGreaterThan(0);
  expect(recommend.details.recommendations[0].workflow).toBe("stack.pull_and_update");
});

test("portainer get reports missing config for the current session", async () => {
  setPortainerToolHandlers({
    get: () => null,
    async set() {
      throw new Error("unexpected");
    },
    async clear() {
      return { deleted: false, apply_timing: "immediate" };
    },
    async request() {
      throw new Error("unexpected");
    },
    async workflow() {
      throw new Error("unexpected");
    },
  });

  const fake = createFakeExtensionApi();
  portainerTool(fake.api);
  const tool = fake.tools.get("portainer");

  const result = await tool.execute("tool-4", { action: "get" });

  expect(result.details.configured).toBe(false);
  expect(result.content[0].text).toContain("No Portainer config stored");
});

test("portainer set can delegate discovery-friendly empty inputs", async () => {
  let seen: any = null;
  setPortainerToolHandlers({
    get: () => null,
    async set(chatJid, config) {
      seen = { chatJid, config };
      return {
        apply_timing: "immediate",
        config: {
          chat_jid: chatJid,
          base_url: "https://portainer.example.com:9443",
          api_token_keychain: "portainer/relay",
          allow_insecure_tls: true,
          created_at: "2026-04-05T00:00:00.000Z",
          updated_at: "2026-04-05T00:00:00.000Z",
        },
      };
    },
    async clear() {
      return { deleted: false, apply_timing: "immediate" };
    },
    async request() {
      throw new Error("unexpected");
    },
    async workflow() {
      throw new Error("unexpected");
    },
  });

  const fake = createFakeExtensionApi();
  portainerTool(fake.api);
  const tool = fake.tools.get("portainer");

  await tool.execute("tool-5", { action: "set" });
  expect(seen).toEqual({
    chatJid: "web:default",
    config: {
      base_url: "",
      api_token_keychain: "",
      allow_insecure_tls: true,
    },
  });
});

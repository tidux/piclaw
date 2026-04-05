import { afterEach, expect, test } from "bun:test";

import { createFakeExtensionApi } from "./fake-extension-api.ts";
import { proxmoxTool, setProxmoxToolHandlers } from "../../src/extensions/proxmox.js";

afterEach(() => {
  setProxmoxToolHandlers(null);
});

test("proxmox registers a normalized tool name", () => {
  const fake = createFakeExtensionApi();

  proxmoxTool(fake.api);

  expect(fake.tools.has("proxmox")).toBe(true);
});

test("proxmox set stores config through registered handlers", async () => {
  let seen: any = null;
  setProxmoxToolHandlers({
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
  proxmoxTool(fake.api);
  const tool = fake.tools.get("proxmox");

  const result = await tool.execute("tool-1", {
    action: "set",
    base_url: "https://proxmox.example.com:8006/api2/json",
    api_token_keychain: "proxmox/piclaw-management-token",
    allow_insecure_tls: false,
  });

  expect(seen).toEqual({
    chatJid: "web:default",
    config: {
      base_url: "https://proxmox.example.com:8006/api2/json",
      api_token_keychain: "proxmox/piclaw-management-token",
      allow_insecure_tls: false,
    },
  });
  expect(result.details.apply_timing).toBe("immediate");
  expect(result.content[0].text).toContain("Stored Proxmox config");
});

test("proxmox request delegates through registered handlers", async () => {
  let seen: any = null;
  setProxmoxToolHandlers({
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
        path: "/cluster/resources",
        body: { data: [{ vmid: 117 }] },
      };
    },
    async workflow() {
      throw new Error("unexpected");
    },
  });

  const fake = createFakeExtensionApi();
  proxmoxTool(fake.api);
  const tool = fake.tools.get("proxmox");

  const result = await tool.execute("tool-2", {
    action: "request",
    method: "get",
    path: "cluster/resources",
    query: { type: "vm" },
  });

  expect(seen).toEqual({
    chatJid: "web:default",
    input: {
      method: "GET",
      path: "cluster/resources",
      query: { type: "vm" },
    },
  });
  expect(result.details.response).toEqual({
    status: 200,
    method: "GET",
    path: "/cluster/resources",
    body: { data: [{ vmid: 117 }] },
  });
  expect(result.content[0].text).toContain("HTTP 200");
});

test("proxmox workflow delegates through registered handlers", async () => {
  let seen: any = null;
  setProxmoxToolHandlers({
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
        vmid: input.vmid,
        node: "pve",
        result: { status: "running", qmpstatus: "running" },
      };
    },
  });

  const fake = createFakeExtensionApi();
  proxmoxTool(fake.api);
  const tool = fake.tools.get("proxmox");

  const result = await tool.execute("tool-3", {
    action: "workflow",
    workflow: "vm.create",
    vmid: 117,
    node: "pve",
    name: "vm117",
    memory: 4096,
    slot: "ide2",
    iso_volume: "local:iso/debian.iso",
    config: { scsi0: "local-lvm:32" },
    timeout_ms: 1000,
    poll_ms: 250,
  });

  expect(seen).toEqual({
    chatJid: "web:default",
    input: {
      workflow: "vm.create",
      vmid: 117,
      node: "pve",
      name: "vm117",
      memory: 4096,
      slot: "ide2",
      iso_volume: "local:iso/debian.iso",
      config: { scsi0: "local-lvm:32" },
      timeout_ms: 1000,
      poll_ms: 250,
    },
  });
  expect(result.details.response).toEqual({
    workflow: "vm.create",
    vmid: 117,
    node: "pve",
    result: { status: "running", qmpstatus: "running" },
  });
  expect(result.content[0].text).toContain("workflow vm.create");
});

test("proxmox capabilities and workflow_help are available without handlers", async () => {
  const fake = createFakeExtensionApi();
  proxmoxTool(fake.api);
  const tool = fake.tools.get("proxmox");

  const capabilities = await tool.execute("tool-cap", { action: "capabilities" });
  expect(capabilities.details.workflow_count).toBeGreaterThan(10);
  expect(capabilities.details.workflow_families).toContain("vm");
  expect(capabilities.details.actions).toContain("recommend");
  expect(capabilities.details.include_workflows).toBe(false);
  expect(capabilities.details.workflows).toBeUndefined();

  const family = await tool.execute("tool-cap-family", { action: "capabilities", category: "vm" });
  expect(family.details.category).toBe("vm");
  expect(family.details.include_workflows).toBe(true);
  expect(family.details.matching_workflow_count).toBeGreaterThan(8);

  const help = await tool.execute("tool-help", { action: "workflow_help", workflow: "vm.template.create", include_examples: true });
  expect(help.details.canonical_workflow).toBe("vm.template.create");
  expect(help.details.runtime_workflow).toBe("vm.template.create");
  expect(help.details.recommended_for).toContain("golden image preparation");
  expect(help.details.guidance.length).toBeGreaterThan(0);
  expect(Array.isArray(help.details.examples)).toBe(true);
  expect(help.content[0].text).toContain("Mark a VM as a template");

  const recommend = await tool.execute("tool-recommend", { action: "recommend", intent: "restore a VM from backup" });
  expect(recommend.details.recommendation_count).toBeGreaterThan(0);
  expect(recommend.details.recommendations[0].workflow).toBe("backup.restore");

  const provisionRecommend = await tool.execute("tool-recommend-2", { action: "recommend", category: "storage", intent: "download an ISO" });
  expect(provisionRecommend.details.recommendation_count).toBeGreaterThan(0);
  expect(provisionRecommend.details.recommendations[0].workflow).toBe("storage.download_url");
});

test("proxmox metrics workflow forwards charting parameters", async () => {
  let seen: any = null;
  setProxmoxToolHandlers({
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
        vmid: input.vmid,
        node: "pve",
        result: {
          source: "rrddata",
          scope: "vm",
          timeframe: "day",
          cf: "AVERAGE",
          metrics: ["cpu"],
          points: [{ time: 1, cpu: 0.5 }],
        },
      };
    },
  });

  const fake = createFakeExtensionApi();
  proxmoxTool(fake.api);
  const tool = fake.tools.get("proxmox");

  const result = await tool.execute("tool-5", {
    action: "workflow",
    workflow: "metrics.vm",
    vmid: 117,
    timeframe: "day",
    cf: "average",
    metric: "cpu",
  });

  expect(seen).toEqual({
    chatJid: "web:default",
    input: {
      workflow: "metrics.vm",
      vmid: 117,
      timeframe: "day",
      cf: "average",
      metric: "cpu",
    },
  });
  expect(result.content[0].text).toContain("(1 points)");
});

test("proxmox get reports missing config for the current session", async () => {
  setProxmoxToolHandlers({
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
  proxmoxTool(fake.api);
  const tool = fake.tools.get("proxmox");

  const result = await tool.execute("tool-4", { action: "get" });

  expect(result.details.configured).toBe(false);
  expect(result.content[0].text).toContain("No Proxmox config stored");
});

test("proxmox set can delegate discovery-friendly empty inputs", async () => {
  let seen: any = null;
  setProxmoxToolHandlers({
    get: () => null,
    async set(chatJid, config) {
      seen = { chatJid, config };
      return {
        apply_timing: "immediate",
        config: {
          chat_jid: chatJid,
          base_url: "https://192.168.1.10:8006/api2/json",
          api_token_keychain: "proxmox/piclaw-management-token",
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
  proxmoxTool(fake.api);
  const tool = fake.tools.get("proxmox");

  await tool.execute("tool-6", { action: "set" });
  expect(seen).toEqual({
    chatJid: "web:default",
    config: {
      base_url: "",
      api_token_keychain: "",
      allow_insecure_tls: true,
    },
  });
});

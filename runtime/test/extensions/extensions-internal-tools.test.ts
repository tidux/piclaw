/**
 * test/extensions/extensions-internal-tools.test.ts – Tests for internal-tools extension.
 */

import { describe, expect, test } from "bun:test";
import "../helpers.js";
import { createFakeExtensionApi } from "./fake-extension-api.js";

describe("internal-tools extension", () => {
  test("registers list_internal_tools tool", async () => {
    const { internalTools } = await import("../../src/extensions/internal-tools.js");
    const fake = createFakeExtensionApi({ allTools: [] });
    internalTools(fake.api);

    const tool = fake.tools.get("list_internal_tools");
    expect(tool).toBeDefined();
    expect(tool.name).toBe("list_internal_tools");
  });

  test("lists tools with brief descriptions and query filter", async () => {
    const { internalTools } = await import("../../src/extensions/internal-tools.js");
    const fake = createFakeExtensionApi({
      allTools: [
        { name: "bash", description: "Run a shell command and return output." },
        { name: "messages", description: "Search, retrieve, add, or delete messages." },
        { name: "list_internal_tools", description: "List available internal tools." },
      ],
      activeTools: ["bash", "list_internal_tools"],
    });
    internalTools(fake.api);

    const tool = fake.tools.get("list_internal_tools");
    const all = await tool.execute("t1", {});
    expect(all.content[0].text).toContain("Available tools:");
    // bash line now uses summary from capability registry and includes metadata
    expect(all.content[0].text).toContain("bash");
    expect(all.content[0].text).toContain("[active]");
    expect(all.content[0].text).toContain("{core}");
    expect(all.content[0].text).toContain("[mutating, standard, default]");

    const filtered = await tool.execute("t2", { query: "search" });
    expect(filtered.content[0].text).toContain("filtered");
    expect(filtered.content[0].text).toContain("messages");
    expect(filtered.content[0].text).toContain("{data}");
    expect(filtered.content[0].text).not.toContain("• bash —");
  });

  test("includes parameter schemas when requested", async () => {
    const { internalTools } = await import("../../src/extensions/internal-tools.js");
    const fake = createFakeExtensionApi({ allTools: [
      {
        name: "read",
        description: "Read a file.",
        parameters: { type: "object", properties: { path: { type: "string" } } },
      },
    ] });
    internalTools(fake.api);

    const tool = fake.tools.get("list_internal_tools");
    const result = await tool.execute("t3", { include_parameters: true });
    expect(result.details.count).toBe(1);
    expect(result.details.tools[0].parameters).toBeDefined();
    expect(result.details.tools[0].toolsets).toEqual(["core"]);
    expect(result.details.tools[0].active).toBe(false);
  });

  test("details include capability metadata fields", async () => {
    const { internalTools } = await import("../../src/extensions/internal-tools.js");
    const fake = createFakeExtensionApi({
      allTools: [
        { name: "bash", description: "Run a shell command." },
        { name: "read", description: "Read a file." },
        { name: "proxmox", description: "Proxmox API." },
      ],
      activeTools: ["bash", "read"],
    });
    internalTools(fake.api);

    const tool = fake.tools.get("list_internal_tools");
    const result = await tool.execute("t4", {});
    const tools = result.details.tools;

    // bash: mutating, standard, default
    const bashTool = tools.find((t: any) => t.name === "bash");
    expect(bashTool.kind).toBe("mutating");
    expect(bashTool.weight).toBe("standard");
    expect(bashTool.activation).toBe("default");
    expect(bashTool.summary).toContain("shell");

    // read: read-only, lightweight, default
    const readTool = tools.find((t: any) => t.name === "read");
    expect(readTool.kind).toBe("read-only");
    expect(readTool.weight).toBe("lightweight");
    expect(readTool.activation).toBe("default");

    // proxmox: mixed, standard, on-demand
    const proxmoxTool = tools.find((t: any) => t.name === "proxmox");
    expect(proxmoxTool.kind).toBe("mixed");
    expect(proxmoxTool.weight).toBe("standard");
    expect(proxmoxTool.activation).toBe("on-demand");
  });

  test("unknown tools get sensible default capabilities", async () => {
    const { internalTools } = await import("../../src/extensions/internal-tools.js");
    const fake = createFakeExtensionApi({
      allTools: [
        { name: "custom_tool_xyz", description: "A custom tool." },
      ],
    });
    internalTools(fake.api);

    const tool = fake.tools.get("list_internal_tools");
    const result = await tool.execute("t5", {});
    const custom = result.details.tools[0];
    expect(custom.kind).toBe("mixed");
    expect(custom.weight).toBe("standard");
    expect(custom.activation).toBe("on-demand");
    expect(custom.summary).toBeTruthy();
  });
});

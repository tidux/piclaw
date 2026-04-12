/**
 * test/extensions/tool-capabilities.test.ts – Tests for tool capability registry.
 */

import { describe, expect, test } from "bun:test";
import { getToolCapability } from "../../src/extensions/tool-capabilities.js";
import { TOOLSETS } from "../../src/extensions/tool-activation.js";

describe("tool-capabilities registry", () => {
  test("known tools return specific metadata", () => {
    const bash = getToolCapability("bash");
    expect(bash.kind).toBe("mutating");
    expect(bash.weight).toBe("standard");
    expect(bash.summary).toBeTruthy();

    const read = getToolCapability("read");
    expect(read.kind).toBe("read-only");
    expect(read.weight).toBe("lightweight");

    const messages = getToolCapability("messages");
    expect(messages.kind).toBe("mixed");

    const exitProcess = getToolCapability("exit_process");
    expect(exitProcess.kind).toBe("mutating");
    expect(exitProcess.weight).toBe("lightweight");
  });

  test("unknown tools get sensible defaults", () => {
    const unknown = getToolCapability("totally_unknown_tool_xyz");
    expect(unknown.kind).toBe("mixed");
    expect(unknown.weight).toBe("standard");
    expect(unknown.summary).toBeTruthy();
  });

  test("all tools in TOOLSETS have capability entries", () => {
    const missing: string[] = [];
    for (const toolset of TOOLSETS) {
      for (const name of toolset.toolNames) {
        const cap = getToolCapability(name);
        if (cap.summary === "No capability summary available.") {
          missing.push(name);
        }
      }
    }
    expect(missing).toEqual([]);
  });
});

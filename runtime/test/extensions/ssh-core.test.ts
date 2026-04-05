import { describe, expect, test } from "bun:test";
import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

import sshCoreExtension, {
  applyLiveSshConfig,
  hasLiveChatSshSession,
  parseSshFlag,
  parseSshPort,
  parseStrictHostKeyCheckingMode,
  registerLiveChatSshSession,
  resolveRemoteTarget,
  setSshConnectionResolverForTests,
  unregisterLiveChatSshSession,
} from "../../extensions/integrations/ssh-core/index.ts";

type FakeState = {
  tools: Map<string, any>;
  flags: Map<string, any>;
};

function createFakeApi(): { api: ExtensionAPI; state: FakeState } {
  const state: FakeState = {
    tools: new Map<string, any>(),
    flags: new Map<string, any>(),
  };

  const api: ExtensionAPI = {
    on() {},
    registerTool(tool: any) {
      state.tools.set(tool.name, tool);
    },
    registerCommand() {},
    registerShortcut() {},
    registerFlag(name: string, options: any) {
      state.flags.set(name, options);
    },
    getFlag() { return undefined; },
    registerMessageRenderer() {},
    sendMessage() {},
    sendUserMessage() {},
    appendEntry() {},
    setSessionName() {},
    getSessionName() { return undefined; },
    setLabel() {},
    exec: async () => ({ exitCode: 0, stdout: "", stderr: "" }),
    getActiveTools: () => [],
    getAllTools: () => [],
    setActiveTools() {},
    getCommands: () => [],
    setModel: async () => true,
    getThinkingLevel: () => "off" as any,
    setThinkingLevel() {},
    registerProvider() {},
    unregisterProvider() {},
  } as unknown as ExtensionAPI;

  return { api, state };
}

describe("ssh-core helpers", () => {
  test("parseSshFlag handles remote host and explicit remote path", () => {
    expect(parseSshFlag("user@example.com")).toEqual({ remote: "user@example.com" });
    expect(parseSshFlag("user@example.com:/srv/app")).toEqual({ remote: "user@example.com", remotePath: "/srv/app" });
    expect(parseSshFlag("host:~/repo")).toEqual({ remote: "host", remotePath: "~/repo" });
  });

  test("resolveRemoteTarget uses username fallback when target omits it", () => {
    expect(resolveRemoteTarget("example.com:/srv/app", "alice")).toEqual({
      sshTarget: "alice@example.com",
      remotePath: "/srv/app",
    });
  });

  test("parseSshPort and host key mode validate inputs", () => {
    expect(parseSshPort(undefined)).toBe(22);
    expect(parseSshPort("2222")).toBe(2222);
    expect(parseStrictHostKeyCheckingMode(undefined)).toBe("yes");
    expect(parseStrictHostKeyCheckingMode("accept-new")).toBe("accept-new");
    expect(() => parseSshPort("0")).toThrow();
    expect(() => parseStrictHostKeyCheckingMode("maybe")).toThrow();
  });
});

describe("ssh-core live state", () => {
  test("applies SSH config immediately for a registered live chat session", async () => {
    setSshConnectionResolverForTests(async (_rawTarget, localCwd, localHome, port) => ({
      sshTarget: "agent@example.com",
      port,
      remoteCwd: "/srv/project",
      remoteHome: "/home/agent",
      localCwd,
      localHome,
      privateKeyPath: "/tmp/test-key",
      controlPath: "/tmp/test-control",
      strictHostKeyChecking: "yes",
      tempDir: "/tmp/piclaw-ssh-test",
    }) as any);

    await registerLiveChatSshSession("web:default", { localCwd: "/workspace", localHome: "/home/agent" });
    expect(hasLiveChatSshSession("web:default")).toBe(true);

    const connection = await applyLiveSshConfig("web:default", {
      target: "agent@example.com:/srv/project",
      port: 22,
      privateKeyKeychain: "ssh-prod",
      strictHostKeyChecking: "yes",
    });

    expect(connection.remoteCwd).toBe("/srv/project");

    await unregisterLiveChatSshSession("web:default");
    setSshConnectionResolverForTests(null);
    expect(hasLiveChatSshSession("web:default")).toBe(false);
  });
});

describe("ssh-core extension registration", () => {
  test("registers core tool overrides and SSH flags", () => {
    const fake = createFakeApi();

    sshCoreExtension(fake.api);

    expect(Array.from(fake.state.tools.keys())).toEqual(["read", "write", "edit", "bash"]);
    expect(fake.state.flags.has("ssh")).toBe(true);
    expect(fake.state.flags.has("ssh-port")).toBe(true);
    expect(fake.state.flags.has("p")).toBe(true);
    expect(fake.state.flags.has("ssh-keychain")).toBe(true);
    expect(fake.state.flags.has("ssh-known-hosts-keychain")).toBe(true);
    expect(fake.state.flags.has("ssh-strict-host-key-checking")).toBe(true);
  });
});

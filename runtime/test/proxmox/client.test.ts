import { afterEach, expect, test } from "bun:test";

import "../helpers.js";
import { closeDbQuietly, importFresh, withTempWorkspaceEnv } from "../helpers.js";

type DbModule = typeof import("../../src/db.js");
type KeychainModule = typeof import("../../src/secure/keychain.js");
type ProxmoxClientModule = typeof import("../../src/proxmox/client.js");

async function withProxmoxContext(
  run: (ctx: {
    db: DbModule;
    keychain: KeychainModule;
    proxmox: ProxmoxClientModule;
  }) => Promise<void>,
): Promise<void> {
  await withTempWorkspaceEnv("piclaw-proxmox-", { PICLAW_KEYCHAIN_KEY: "test-key" }, async () => {
    const db = await importFresh<DbModule>("../src/db.js");
    db.initDatabase();
    const keychain = await importFresh<KeychainModule>("../src/secure/keychain.js");
    const proxmox = await importFresh<ProxmoxClientModule>("../src/proxmox/client.js");

    try {
      await run({ db, keychain, proxmox });
    } finally {
      proxmox.setProxmoxCurlExecutorForTests(null);
      keychain.setKeyMaterialProviderForTests(null);
      closeDbQuietly(db);
    }
  });
}

afterEach(async () => {
  // each helper resets module state explicitly
});

test("resolveProxmoxToken supports username+secret keychain entries and encoded secret fallbacks", async () => {
  await withProxmoxContext(async ({ keychain, proxmox }) => {
    await keychain.setKeychainEntry({
      name: "proxmox/direct",
      type: "secret",
      secret: "token-secret",
      username: "root@pam!piclaw",
    });
    await keychain.setKeychainEntry({
      name: "proxmox/json",
      type: "secret",
      secret: JSON.stringify({ username: "root@pam!json", secret: "json-secret" }),
    });
    await keychain.setKeychainEntry({
      name: "proxmox/equals",
      type: "secret",
      secret: "root@pam!equals=equals-secret",
    });

    expect(await proxmox.resolveProxmoxToken("proxmox/direct")).toEqual({
      username: "root@pam!piclaw",
      secret: "token-secret",
    });
    expect(await proxmox.resolveProxmoxToken("proxmox/json")).toEqual({
      username: "root@pam!json",
      secret: "json-secret",
    });
    expect(await proxmox.resolveProxmoxToken("proxmox/equals")).toEqual({
      username: "root@pam!equals",
      secret: "equals-secret",
    });
  });
});

test("guest agent exec injects env-style keychain entries and redacts output", async () => {
  await withProxmoxContext(async ({ keychain, proxmox }) => {
    await keychain.setKeychainEntry({
      name: "proxmox/direct",
      type: "secret",
      secret: "token-secret",
      username: "root@pam!piclaw",
    });
    await keychain.setKeychainEntry({
      name: "STRIPE_KEY",
      type: "token",
      secret: "stripe-secret",
    });

    let seenExecBody: URLSearchParams | null = null;
    proxmox.setProxmoxCurlExecutorForTests(async (command) => {
      const url = command[command.length - 1] || "";
      if (url.endsWith("/nodes/pve2/qemu/117/agent/exec")) {
        const bodyIndex = command.findIndex((entry) => entry === "--data-raw");
        seenExecBody = new URLSearchParams(bodyIndex >= 0 ? command[bodyIndex + 1] || "" : "");
        return { exitCode: 0, stdout: '{"data":123}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve2/qemu/117/agent/exec-status?pid=123")) {
        return { exitCode: 0, stdout: '{"data":{"exited":true,"exitcode":0,"out-data":"c3RyaXBlLXNlY3JldA==","err-data":""}}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      throw new Error(`unexpected url ${url}`);
    });

    const client = new proxmox.ProxmoxClient({
      base_url: "https://proxmox.example.com:8006/api2/json",
      api_token_keychain: "proxmox/direct",
      allow_insecure_tls: true,
    });

    await expect(client.execVmAgentCommand("pve2", 117, {
      command: "sh",
      command_args: ["-lc", 'printf %s "$STRIPE_KEY"'],
      timeoutMs: 1000,
      pollMs: 1,
    })).resolves.toMatchObject({
      pid: 123,
      exitcode: 0,
      out_data: "[REDACTED:STRIPE_KEY]",
      err_data: "",
      raw: {
        exited: true,
        exitcode: 0,
        "out-data": "[REDACTED]",
      },
    });

    expect(seenExecBody?.getAll("command")).toEqual([
      "sh",
      "-lc",
      `exec 'sh' '-lc' 'printf %s "$STRIPE_KEY"'`,
    ]);
    expect(seenExecBody?.getAll("env")).toEqual(["STRIPE_KEY=stripe-secret"]);
  });
});

test("guest agent exec supports PowerShell wrappers", async () => {
  await withProxmoxContext(async ({ keychain, proxmox }) => {
    await keychain.setKeychainEntry({
      name: "proxmox/direct",
      type: "secret",
      secret: "token-secret",
      username: "root@pam!piclaw",
    });
    await keychain.setKeychainEntry({
      name: "STRIPE_KEY",
      type: "token",
      secret: "stripe-secret",
    });

    let seenExecBody: URLSearchParams | null = null;
    proxmox.setProxmoxCurlExecutorForTests(async (command) => {
      const url = command[command.length - 1] || "";
      if (url.endsWith("/nodes/pve2/qemu/117/agent/exec")) {
        const bodyIndex = command.findIndex((entry) => entry === "--data-raw");
        seenExecBody = new URLSearchParams(bodyIndex >= 0 ? command[bodyIndex + 1] || "" : "");
        return { exitCode: 0, stdout: '{"data":123}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve2/qemu/117/agent/exec-status?pid=123")) {
        return { exitCode: 0, stdout: '{"data":{"exited":true,"exitcode":0,"out-data":"b2s=","err-data":""}}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      throw new Error(`unexpected url ${url}`);
    });

    const client = new proxmox.ProxmoxClient({
      base_url: "https://proxmox.example.com:8006/api2/json",
      api_token_keychain: "proxmox/direct",
      allow_insecure_tls: true,
    });

    await client.execVmAgentCommand("pve2", 117, {
      command: "Write-Output",
      command_args: ["$env:STRIPE_KEY"],
      shell_family: "powershell",
      timeoutMs: 1000,
      pollMs: 1,
    });

    expect(seenExecBody?.getAll("command")).toEqual([
      "powershell",
      "-NoProfile",
      "-Command",
      "$ErrorActionPreference = 'Stop'; & 'Write-Output' '$env:STRIPE_KEY'; if ($null -ne $LASTEXITCODE) { exit $LASTEXITCODE }",
    ]);
    expect(seenExecBody?.getAll("env")).toEqual(["STRIPE_KEY=stripe-secret"]);
  });
});

test("guest agent exec handles numeric exited flags and plain-text output", async () => {
  await withProxmoxContext(async ({ keychain, proxmox }) => {
    await keychain.setKeychainEntry({
      name: "proxmox/direct",
      type: "secret",
      secret: "token-secret",
      username: "root@pam!piclaw",
    });
    await keychain.setKeychainEntry({
      name: "STRIPE_KEY",
      type: "token",
      secret: "stripe-secret",
    });

    proxmox.setProxmoxCurlExecutorForTests(async (command) => {
      const url = command[command.length - 1] || "";
      if (url.endsWith("/nodes/pve2/qemu/117/agent/exec")) {
        return { exitCode: 0, stdout: '{"data":{"pid":123}}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve2/qemu/117/agent/exec-status?pid=123")) {
        return { exitCode: 0, stdout: '{"data":{"exited":1,"exitcode":0,"out-data":"stripe-secret","err-data":""}}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      throw new Error(`unexpected url ${url}`);
    });

    const client = new proxmox.ProxmoxClient({
      base_url: "https://proxmox.example.com:8006/api2/json",
      api_token_keychain: "proxmox/direct",
      allow_insecure_tls: true,
    });

    await expect(client.execVmAgentCommand("pve2", 117, {
      command: "sh",
      timeoutMs: 1000,
      pollMs: 1,
    })).resolves.toMatchObject({
      pid: 123,
      exitcode: 0,
      out_data: "[REDACTED:STRIPE_KEY]",
      err_data: "",
      raw: {
        exited: 1,
        exitcode: 0,
        "out-data": "[REDACTED]",
      },
    });
  });
});

test("requestProxmoxApi redacts secret values in HTTP error bodies", async () => {
  await withProxmoxContext(async ({ keychain, proxmox }) => {
    await keychain.setKeychainEntry({
      name: "proxmox/direct",
      type: "secret",
      secret: "token-secret",
      username: "root@pam!piclaw",
    });
    await keychain.setKeychainEntry({
      name: "STRIPE_KEY",
      type: "token",
      secret: "stripe-secret",
    });

    proxmox.setProxmoxCurlExecutorForTests(async () => ({
      exitCode: 0,
      stdout: '{"errors":"stripe-secret"}\n__PICLAW_PROXMOX_STATUS__:500',
      stderr: "",
    }));

    await expect(proxmox.requestProxmoxApi(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { method: "GET", path: "/cluster/status" },
    )).rejects.toThrow("[REDACTED:STRIPE_KEY]");
  });
});

test("discoverProxmoxInstances finds the default token-backed instance", async () => {
  await withProxmoxContext(async ({ keychain, proxmox }) => {
    await keychain.setKeychainEntry({
      name: "proxmox/piclaw-management-token",
      type: "secret",
      secret: "token-secret",
      username: "root@pam!piclaw",
    });

    const discovery = await proxmox.discoverProxmoxInstances();
    expect(discovery.default_candidate).toEqual({
      source: "default-keychain",
      base_url: "https://192.168.1.10:8006/api2/json",
      api_token_keychain: "proxmox/piclaw-management-token",
      allow_insecure_tls: true,
    });
    expect(discovery.candidates.length).toBe(1);
  });
});

test("requestProxmoxApi builds curl requests for query params and form/json bodies", async () => {
  await withProxmoxContext(async ({ keychain, proxmox }) => {
    await keychain.setKeychainEntry({
      name: "proxmox/direct",
      type: "secret",
      secret: "token-secret",
      username: "root@pam!piclaw",
    });

    const seen: string[][] = [];
    proxmox.setProxmoxCurlExecutorForTests(async (command) => {
      seen.push(command);
      return {
        exitCode: 0,
        stdout: '{"data":{"ok":true}}\n__PICLAW_PROXMOX_STATUS__:200',
        stderr: "",
      };
    });

    const formResponse = await proxmox.requestProxmoxApi(
      {
        base_url: "https://proxmox.example.com:8006/api2/json",
        api_token_keychain: "proxmox/direct",
        allow_insecure_tls: true,
      },
      {
        method: "POST",
        path: "nodes/pve/qemu/117/status/start",
        query: { skiplock: true },
        body: { vmid: 117, tags: ["prod", "lab"] },
        body_mode: "form",
      },
    );

    expect(formResponse).toEqual({
      status: 200,
      body: { data: { ok: true } },
      raw_body: '{"data":{"ok":true}}',
      path: "/nodes/pve/qemu/117/status/start",
      method: "POST",
    });
    expect(seen[0]).toContain("--connect-timeout");
    expect(seen[0]).toContain("--max-time");
    expect(seen[0]).toContain("-k");
    expect(seen[0]).toContain("Authorization: PVEAPIToken=root@pam!piclaw=token-secret");
    expect(seen[0]).toContain("vmid=117&tags=prod&tags=lab");
    expect(seen[0].at(-1)).toBe("https://proxmox.example.com:8006/api2/json/nodes/pve/qemu/117/status/start?skiplock=true");

    const jsonResponse = await proxmox.requestProxmoxApi(
      {
        base_url: "https://proxmox.example.com:8006/api2/json/",
        api_token_keychain: "proxmox/direct",
        allow_insecure_tls: false,
      },
      {
        method: "PUT",
        path: "/nodes/pve/qemu/117/config",
        body: { memory: 4096 },
        body_mode: "json",
      },
    );

    expect(jsonResponse.status).toBe(200);
    expect(seen[1]).not.toContain("-k");
    expect(seen[1]).toContain("Content-Type: application/json");
    expect(seen[1]).toContain('{"memory":4096}');
  });
});

test("requestProxmoxApi times out hanging curl executions", async () => {
  await withProxmoxContext(async ({ keychain, proxmox }) => {
    await keychain.setKeychainEntry({
      name: "proxmox/direct",
      type: "secret",
      secret: "token-secret",
      username: "root@pam!piclaw",
    });

    proxmox.setProxmoxCurlExecutorForTests(async () => await new Promise<never>(() => {}));

    await expect(proxmox.requestProxmoxApi(
      {
        base_url: "https://proxmox.example.com:8006/api2/json",
        api_token_keychain: "proxmox/direct",
        allow_insecure_tls: true,
      },
      {
        method: "GET",
        path: "/cluster/status",
        timeout_ms: 25,
      },
    )).rejects.toThrow("timed out after 1000ms");
  });
});

test("runProxmoxWorkflow reuses the request client for vm.start orchestration", async () => {
  await withProxmoxContext(async ({ keychain, proxmox }) => {
    await keychain.setKeychainEntry({
      name: "proxmox/direct",
      type: "secret",
      secret: "token-secret",
      username: "root@pam!piclaw",
    });

    const seenUrls: string[] = [];
    const responses = [
      '{"data":[{"type":"qemu","vmid":117,"node":"pve","name":"vm117","status":"stopped"}]}\n__PICLAW_PROXMOX_STATUS__:200',
      '{"data":{"name":"vm117","status":"stopped","qmpstatus":"stopped","uptime":0,"agent":1}}\n__PICLAW_PROXMOX_STATUS__:200',
      '{"data":"UPID:pve:00000001"}\n__PICLAW_PROXMOX_STATUS__:200',
      '{"data":{"status":"stopped","exitstatus":"OK"}}\n__PICLAW_PROXMOX_STATUS__:200',
      '{"data":{"name":"vm117","status":"running","qmpstatus":"running","uptime":42,"agent":1}}\n__PICLAW_PROXMOX_STATUS__:200',
    ];

    proxmox.setProxmoxCurlExecutorForTests(async (command) => {
      seenUrls.push(command.at(-1) || "");
      return {
        exitCode: 0,
        stdout: responses.shift() || '{"data":null}\n__PICLAW_PROXMOX_STATUS__:200',
        stderr: "",
      };
    });

    const result = await proxmox.runProxmoxWorkflow(
      {
        base_url: "https://proxmox.example.com:8006/api2/json",
        api_token_keychain: "proxmox/direct",
        allow_insecure_tls: true,
      },
      {
        workflow: "vm.start",
        vmid: 117,
        timeout_ms: 5_000,
        poll_ms: 1,
      },
    );

    expect(result).toEqual({
      workflow: "vm.start",
      vmid: 117,
      node: "pve",
      result: {
        name: "vm117",
        vmid: 117,
        node: "pve",
        status: "running",
        qmpstatus: "running",
        uptime: 42,
        agent: 1,
      },
    });
    expect(seenUrls).toEqual([
      "https://proxmox.example.com:8006/api2/json/cluster/resources?type=vm",
      "https://proxmox.example.com:8006/api2/json/nodes/pve/qemu/117/status/current",
      "https://proxmox.example.com:8006/api2/json/nodes/pve/qemu/117/status/start",
      "https://proxmox.example.com:8006/api2/json/nodes/pve/tasks/UPID%3Apve%3A00000001/status",
      "https://proxmox.example.com:8006/api2/json/nodes/pve/qemu/117/status/current",
    ]);
  });
});

test("runProxmoxWorkflow supports vm.ip and filters loopback addresses", async () => {
  await withProxmoxContext(async ({ keychain, proxmox }) => {
    await keychain.setKeychainEntry({
      name: "proxmox/direct",
      type: "secret",
      secret: "token-secret",
      username: "root@pam!piclaw",
    });

    proxmox.setProxmoxCurlExecutorForTests(async (command) => ({
      exitCode: 0,
      stdout: command.at(-1)?.includes("cluster/resources")
        ? '{"data":[{"type":"qemu","vmid":117,"node":"pve"}]}\n__PICLAW_PROXMOX_STATUS__:200'
        : '{"data":{"result":[{"ip-addresses":[{"ip-address-type":"ipv4","ip-address":"127.0.0.1"},{"ip-address-type":"ipv4","ip-address":"10.0.0.5"},{"ip-address-type":"ipv6","ip-address":"fe80::1"},{"ip-address-type":"ipv6","ip-address":"::1"}]}]}}\n__PICLAW_PROXMOX_STATUS__:200',
      stderr: "",
    }));

    const result = await proxmox.runProxmoxWorkflow(
      {
        base_url: "https://proxmox.example.com:8006/api2/json",
        api_token_keychain: "proxmox/direct",
        allow_insecure_tls: true,
      },
      {
        workflow: "vm.ip",
        vmid: 117,
      },
    );

    expect(result).toEqual({
      workflow: "vm.ip",
      vmid: 117,
      node: "pve",
      result: {
        source: "qemu-guest-agent",
        addresses: ["10.0.0.5", "fe80::1"],
      },
    });
  });
});

test("runProxmoxWorkflow supports metrics.vm with metric filtering for charting", async () => {
  await withProxmoxContext(async ({ keychain, proxmox }) => {
    await keychain.setKeychainEntry({
      name: "proxmox/direct",
      type: "secret",
      secret: "token-secret",
      username: "root@pam!piclaw",
    });

    proxmox.setProxmoxCurlExecutorForTests(async (command) => ({
      exitCode: 0,
      stdout: command.at(-1)?.includes("cluster/resources")
        ? '{"data":[{"type":"qemu","vmid":117,"node":"pve"}]}\n__PICLAW_PROXMOX_STATUS__:200'
        : '{"data":[{"time":1,"cpu":0.1,"mem":100},{"time":2,"cpu":0.2,"mem":200}]}\n__PICLAW_PROXMOX_STATUS__:200',
      stderr: "",
    }));

    const result = await proxmox.runProxmoxWorkflow(
      {
        base_url: "https://proxmox.example.com:8006/api2/json",
        api_token_keychain: "proxmox/direct",
        allow_insecure_tls: true,
      },
      {
        workflow: "metrics.vm",
        vmid: 117,
        timeframe: "day",
        cf: "max",
        metric: "cpu",
      },
    );

    expect(result).toEqual({
      workflow: "metrics.vm",
      vmid: 117,
      node: "pve",
      result: {
        source: "rrddata",
        scope: "vm",
        timeframe: "day",
        cf: "MAX",
        metrics: ["cpu"],
        points: [
          { time: 1, cpu: 0.1 },
          { time: 2, cpu: 0.2 },
        ],
      },
    });
  });
});

test("runProxmoxWorkflow supports metrics.storage", async () => {
  await withProxmoxContext(async ({ keychain, proxmox }) => {
    await keychain.setKeychainEntry({
      name: "proxmox/direct",
      type: "secret",
      secret: "token-secret",
      username: "root@pam!piclaw",
    });

    proxmox.setProxmoxCurlExecutorForTests(async () => ({
      exitCode: 0,
      stdout: '{"data":[{"time":1,"disk":12,"diskused":9}]}\n__PICLAW_PROXMOX_STATUS__:200',
      stderr: "",
    }));

    const result = await proxmox.runProxmoxWorkflow(
      {
        base_url: "https://proxmox.example.com:8006/api2/json",
        api_token_keychain: "proxmox/direct",
        allow_insecure_tls: true,
      },
      {
        workflow: "metrics.storage",
        node: "pve",
        storage: "local-zfs",
        timeframe: "week",
        metrics: ["diskused"],
      },
    );

    expect(result).toEqual({
      workflow: "metrics.storage",
      node: "pve",
      result: {
        storage: "local-zfs",
        source: "rrddata",
        scope: "storage",
        timeframe: "week",
        cf: "AVERAGE",
        metrics: ["diskused"],
        points: [{ time: 1, diskused: 9 }],
      },
    });
  });
});

test("runProxmoxWorkflow supports LXC, node/storage, and task inspection workflows", async () => {
  await withProxmoxContext(async ({ keychain, proxmox }) => {
    await keychain.setKeychainEntry({
      name: "proxmox/direct",
      type: "secret",
      secret: "token-secret",
      username: "root@pam!piclaw",
    });

    proxmox.setProxmoxCurlExecutorForTests(async (command) => {
      const url = command.at(-1) || "";
      if (url.endsWith("/cluster/resources?type=vm")) {
        return { exitCode: 0, stdout: '{"data":[{"type":"lxc","vmid":201,"node":"pve","name":"ct201","status":"running"}]}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/lxc/201/status/current")) {
        return { exitCode: 0, stdout: '{"data":{"name":"ct201","status":"running","uptime":99}}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/lxc/201/config")) {
        return { exitCode: 0, stdout: '{"data":{"hostname":"ct201","memory":512}}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/lxc/201/interfaces")) {
        return { exitCode: 0, stdout: '{"data":[{"name":"eth0","inet":"10.0.0.20/24","inet6":"fe80::20/64"}]}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/cluster/resources?type=node")) {
        return { exitCode: 0, stdout: '{"data":[{"type":"node","node":"pve","status":"online"}]}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/status")) {
        return { exitCode: 0, stdout: '{"data":{"cpu":0.2,"memory":{"used":10}}}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/storage")) {
        return { exitCode: 0, stdout: '{"data":[{"storage":"local-zfs","type":"zfspool"}]}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/storage/local-zfs/status")) {
        return { exitCode: 0, stdout: '{"data":{"storage":"local-zfs","active":1}}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/storage/local-zfs/content")) {
        return { exitCode: 0, stdout: '{"data":[{"volid":"local-zfs:vm-117-disk-0","format":"raw"}]}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/tasks?limit=10")) {
        return { exitCode: 0, stdout: '{"data":[{"upid":"UPID:pve:1","type":"vzdump"}]}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/tasks/UPID%3Apve%3A1/status")) {
        return { exitCode: 0, stdout: '{"data":{"status":"stopped","exitstatus":"OK"}}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/tasks/UPID%3Apve%3A1/log")) {
        return { exitCode: 0, stdout: '{"data":[{"n":1,"t":"log line"}]}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      throw new Error(`unexpected url ${url}`);
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "lxc.inspect", vmid: 201 },
    )).resolves.toEqual({
      workflow: "lxc.inspect",
      vmid: 201,
      node: "pve",
      result: {
        status: { name: "ct201", vmid: 201, node: "pve", status: "running", qmpstatus: null, uptime: 99, agent: null },
        config: { hostname: "ct201", memory: 512 },
      },
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "lxc.ip", vmid: 201 },
    )).resolves.toEqual({
      workflow: "lxc.ip",
      vmid: 201,
      node: "pve",
      result: { source: "lxc-interfaces", addresses: ["10.0.0.20", "fe80::20"] },
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "node.list" },
    )).resolves.toEqual({ workflow: "node.list", result: [{ type: "node", node: "pve", status: "online" }] });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "storage.content.list", node: "pve", storage: "local-zfs" },
    )).resolves.toEqual({
      workflow: "storage.content.list",
      node: "pve",
      result: { storage: "local-zfs", content: [{ volid: "local-zfs:vm-117-disk-0", format: "raw" }] },
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "task.list", node: "pve", limit: 10 },
    )).resolves.toEqual({ workflow: "task.list", node: "pve", result: [{ upid: "UPID:pve:1", type: "vzdump" }] });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "task.log", node: "pve", upid: "UPID:pve:1" },
    )).resolves.toEqual({ workflow: "task.log", node: "pve", result: [{ n: 1, t: "log line" }] });
  });
});

test("runProxmoxWorkflow supports node log and maintenance workflows", async () => {
  await withProxmoxContext(async ({ keychain, proxmox }) => {
    await keychain.setKeychainEntry({
      name: "proxmox/direct",
      type: "secret",
      secret: "token-secret",
      username: "root@pam!piclaw",
    });

    proxmox.setProxmoxCurlExecutorForTests(async (command) => {
      const url = command.at(-1) || "";
      const method = command.includes("-X") ? command[command.indexOf("-X") + 1] : "GET";
      if (url.endsWith("/nodes/pve/syslog?limit=50")) {
        return { exitCode: 0, stdout: '{"data":[{"n":1,"t":"syslog line"}]}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/status") && method === "POST") {
        return { exitCode: 0, stdout: '{"data":"UPID:pve:nodepower"}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      throw new Error(`unexpected url ${url} method ${method}`);
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "node.log", node: "pve", lines: 50 },
    )).resolves.toEqual({ workflow: "node.log", node: "pve", result: [{ n: 1, t: "syslog line" }] });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "node.reboot", node: "pve" },
    )).resolves.toEqual({ workflow: "node.reboot", node: "pve", result: { command: "reboot", upid: "UPID:pve:nodepower", wait_supported: false } });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "node.shutdown", node: "pve" },
    )).resolves.toEqual({ workflow: "node.shutdown", node: "pve", result: { command: "shutdown", upid: "UPID:pve:nodepower", wait_supported: false } });
  });
});

test("runProxmoxWorkflow supports provisioning, ISO/media, and disk workflows", async () => {
  await withProxmoxContext(async ({ keychain, proxmox }) => {
    await keychain.setKeychainEntry({
      name: "proxmox/direct",
      type: "secret",
      secret: "token-secret",
      username: "root@pam!piclaw",
    });

    let vmVisible = false;
    let lxcVisible = false;
    const vmConfig: Record<string, unknown> = { name: "vm117", scsi0: "local-lvm:vm-117-disk-0,size=32G" };

    proxmox.setProxmoxCurlExecutorForTests(async (command) => {
      const url = command.at(-1) || "";
      const method = command.includes("-X") ? command[command.indexOf("-X") + 1] : "GET";
      const body = command.includes("--data-raw") ? command[command.indexOf("--data-raw") + 1] : "";
      if (url.endsWith("/nodes/pve/qemu") && method === "POST") {
        vmVisible = true;
        return { exitCode: 0, stdout: '{"data":"UPID:pve:createvm"}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/lxc") && method === "POST") {
        lxcVisible = true;
        return { exitCode: 0, stdout: '{"data":"UPID:pve:createlxc"}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/cluster/resources?type=vm")) {
        const entries: any[] = [];
        if (vmVisible) entries.push({ type: "qemu", vmid: 117, node: "pve", name: "vm117", status: "stopped" });
        if (lxcVisible) entries.push({ type: "lxc", vmid: 201, node: "pve", name: "ct201", status: "stopped" });
        return { exitCode: 0, stdout: `${JSON.stringify({ data: entries })}\n__PICLAW_PROXMOX_STATUS__:200`, stderr: "" };
      }
      if (url.endsWith("/nodes/pve/tasks/UPID%3Apve%3Acreatevm/status") || url.endsWith("/nodes/pve/tasks/UPID%3Apve%3Acreatelxc/status") || url.endsWith("/nodes/pve/tasks/UPID%3Apve%3Aattachiso/status") || url.endsWith("/nodes/pve/tasks/UPID%3Apve%3Adetachiso/status") || url.endsWith("/nodes/pve/tasks/UPID%3Apve%3Aunlinkdisk/status") || url.endsWith("/nodes/pve/tasks/UPID%3Apve%3Adownloadiso/status")) {
        return { exitCode: 0, stdout: '{"data":{"status":"stopped","exitstatus":"OK"}}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/qemu/117/config") && method === "GET") {
        return { exitCode: 0, stdout: `${JSON.stringify({ data: vmConfig })}\n__PICLAW_PROXMOX_STATUS__:200`, stderr: "" };
      }
      if (url.endsWith("/nodes/pve/qemu/117/config") && method === "PUT") {
        if (body.includes("ide2=local%3Aiso%2Fdebian-12.iso%2Cmedia%3Dcdrom")) {
          vmConfig.ide2 = "local:iso/debian-12.iso,media=cdrom";
          return { exitCode: 0, stdout: '{"data":"UPID:pve:attachiso"}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
        }
        if (body.includes("delete=ide2")) {
          delete vmConfig.ide2;
          return { exitCode: 0, stdout: '{"data":"UPID:pve:detachiso"}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
        }
        if (body.includes("delete=scsi0")) {
          delete vmConfig.scsi0;
          return { exitCode: 0, stdout: '{"data":null}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
        }
      }
      if (url.endsWith("/nodes/pve/qemu/117/unlink") && method === "PUT") {
        delete vmConfig.scsi0;
        return { exitCode: 0, stdout: '{"data":"UPID:pve:unlinkdisk"}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/qemu/117/resize") && method === "PUT") {
        vmConfig.scsi0 = "local-lvm:vm-117-disk-0,size=42G";
        return { exitCode: 0, stdout: '{"data":null}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/storage") && method === "POST") {
        return { exitCode: 0, stdout: '{"data":null}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/storage/local/download-url") && method === "POST") {
        return { exitCode: 0, stdout: '{"data":"UPID:pve:downloadiso"}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/storage/local/content?content=iso")) {
        return { exitCode: 0, stdout: '{"data":[{"volid":"local:iso/debian-12.iso","content":"iso"}]}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      throw new Error(`unexpected url ${url} method ${method} body ${body}`);
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "vm.create", node: "pve", vmid: 117, name: "vm117", memory: 4096, config: { scsi0: "local-lvm:32" }, iso_volume: "local:iso/debian-12.iso", slot: "ide2" },
    )).resolves.toEqual({
      workflow: "vm.create",
      vmid: 117,
      node: "pve",
      result: {
        upid: "UPID:pve:createvm",
        task: { status: "stopped", exitstatus: "OK" },
        vm: { type: "qemu", vmid: 117, node: "pve", name: "vm117", status: "stopped" },
      },
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "lxc.create", node: "pve", vmid: 201, hostname: "ct201", ostemplate: "local:vztmpl/debian-12.tar.zst", rootfs: "local-lvm:8" },
    )).resolves.toEqual({
      workflow: "lxc.create",
      vmid: 201,
      node: "pve",
      result: {
        upid: "UPID:pve:createlxc",
        task: { status: "stopped", exitstatus: "OK" },
        vm: { type: "lxc", vmid: 201, node: "pve", name: "ct201", status: "stopped" },
      },
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "storage.create", storage: "iso-store", storage_type: "dir", config: { path: "/srv/pve/iso", content: "iso" } },
    )).resolves.toEqual({
      workflow: "storage.create",
      result: { storage: "iso-store", type: "dir", created: true },
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "storage.download_url", node: "pve", storage: "local", download_url: "https://example.com/debian-12.iso", filename: "debian-12.iso", content: "iso", verify_certificates: false },
    )).resolves.toEqual({
      workflow: "storage.download_url",
      node: "pve",
      result: {
        upid: "UPID:pve:downloadiso",
        task: { status: "stopped", exitstatus: "OK" },
        storage: "local",
        content_type: "iso",
        filename: "debian-12.iso",
        file: { volid: "local:iso/debian-12.iso", content: "iso" },
      },
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "vm.iso.attach", vmid: 117, node: "pve", slot: "ide2", iso_volume: "local:iso/debian-12.iso" },
    )).resolves.toEqual({
      workflow: "vm.iso.attach",
      vmid: 117,
      node: "pve",
      result: {
        upid: "UPID:pve:attachiso",
        task: { status: "stopped", exitstatus: "OK" },
        config: { name: "vm117", scsi0: "local-lvm:vm-117-disk-0,size=32G", ide2: "local:iso/debian-12.iso,media=cdrom" },
      },
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "vm.iso.detach", vmid: 117, node: "pve", slot: "ide2" },
    )).resolves.toEqual({
      workflow: "vm.iso.detach",
      vmid: 117,
      node: "pve",
      result: {
        upid: "UPID:pve:detachiso",
        task: { status: "stopped", exitstatus: "OK" },
        config: { name: "vm117", scsi0: "local-lvm:vm-117-disk-0,size=32G" },
      },
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "vm.disk.resize", vmid: 117, node: "pve", disk: "scsi0", size: "42G" },
    )).resolves.toEqual({
      workflow: "vm.disk.resize",
      vmid: 117,
      node: "pve",
      result: { result: null, config: { name: "vm117", scsi0: "local-lvm:vm-117-disk-0,size=42G" } },
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "vm.disk.detach", vmid: 117, node: "pve", disk: "scsi0" },
    )).resolves.toEqual({
      workflow: "vm.disk.detach",
      vmid: 117,
      node: "pve",
      result: {
        upid: null,
        task: null,
        config: { name: "vm117" },
      },
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "vm.disk.remove", vmid: 117, node: "pve", disk: "scsi0", force: true },
    )).resolves.toEqual({
      workflow: "vm.disk.remove",
      vmid: 117,
      node: "pve",
      result: {
        upid: "UPID:pve:unlinkdisk",
        task: { status: "stopped", exitstatus: "OK" },
        config: { name: "vm117" },
      },
    });
  });
});

test("runProxmoxWorkflow supports snapshots, clone, template, migration, backup, cluster status, and guest-agent workflows", async () => {
  await withProxmoxContext(async ({ keychain, proxmox }) => {
    await keychain.setKeychainEntry({
      name: "proxmox/direct",
      type: "secret",
      secret: "token-secret",
      username: "root@pam!piclaw",
    });

    let cloneVisible = false;
    let migrated = false;
    let restored = false;
    proxmox.setProxmoxCurlExecutorForTests(async (command) => {
      const url = command.at(-1) || "";
      if (url.endsWith("/cluster/status")) {
        return { exitCode: 0, stdout: '{"data":[{"type":"cluster","name":"lab"},{"type":"node","name":"pve"}]}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/cluster/resources?type=vm")) {
        return {
          exitCode: 0,
          stdout: restored
            ? '{"data":[{"type":"qemu","vmid":117,"node":"pve2","name":"vm117-restored","status":"stopped"},{"type":"qemu","vmid":900,"node":"pve2","name":"clone900","status":"stopped"}]}\n__PICLAW_PROXMOX_STATUS__:200'
            : migrated
              ? '{"data":[{"type":"qemu","vmid":117,"node":"pve2","name":"vm117","status":"running"},{"type":"qemu","vmid":900,"node":"pve2","name":"clone900","status":"stopped"}]}\n__PICLAW_PROXMOX_STATUS__:200'
              : cloneVisible
                ? '{"data":[{"type":"qemu","vmid":117,"node":"pve","name":"vm117","status":"running"},{"type":"qemu","vmid":900,"node":"pve2","name":"clone900","status":"stopped"}]}\n__PICLAW_PROXMOX_STATUS__:200'
                : '{"data":[{"type":"qemu","vmid":117,"node":"pve","name":"vm117","status":"running"}]}\n__PICLAW_PROXMOX_STATUS__:200',
          stderr: "",
        };
      }
      if (url.endsWith("/nodes/pve/qemu/117/snapshot")) {
        if (command.includes("-X") && command[command.indexOf("-X") + 1] === "GET") {
          return { exitCode: 0, stdout: '{"data":[{"name":"snap1"}]}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
        }
        return { exitCode: 0, stdout: '{"data":"UPID:pve:snapcreate"}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/qemu/117/snapshot/snap1/rollback")) {
        return { exitCode: 0, stdout: '{"data":"UPID:pve:snaprollback"}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/qemu/117/snapshot/snap1")) {
        return { exitCode: 0, stdout: '{"data":"UPID:pve:snapdelete"}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/qemu/117/clone")) {
        cloneVisible = true;
        return { exitCode: 0, stdout: '{"data":"UPID:pve:clone"}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve2/qemu/117/template")) {
        return { exitCode: 0, stdout: '{"data":"UPID:pve:template"}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/qemu/117/migrate")) {
        migrated = true;
        return { exitCode: 0, stdout: '{"data":"UPID:pve:migrate"}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/vzdump")) {
        return { exitCode: 0, stdout: '{"data":"UPID:pve:backup"}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve2/storage/backup-store/content")) {
        restored = true;
        return { exitCode: 0, stdout: '{"data":"UPID:pve:restore"}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve/storage/backup-store/content?content=backup")) {
        return { exitCode: 0, stdout: '{"data":[{"volid":"backup-store:backup/vzdump-qemu-117.vma.zst"}]}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.includes("/nodes/pve/tasks/UPID%3Apve%3A") || url.includes("/nodes/pve2/tasks/UPID%3Apve%3A") || url.includes("/nodes/pve/tasks/UPID%3Apve%3Asnap") || url.includes("/nodes/pve/tasks/UPID%3Apve%3Atemplate")) {
        return { exitCode: 0, stdout: '{"data":{"status":"stopped","exitstatus":"OK"}}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve2/qemu/117/agent/get-osinfo")) {
        return { exitCode: 0, stdout: '{"data":{"name":"Debian"}}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve2/qemu/117/agent/get-fsinfo")) {
        return { exitCode: 0, stdout: '{"data":{"result":[{"mountpoint":"/"}]}}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve2/qemu/117/agent/get-users")) {
        return { exitCode: 0, stdout: '{"data":{"result":[{"user":"root"}]}}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve2/qemu/117/agent/exec")) {
        return { exitCode: 0, stdout: '{"data":123}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      if (url.endsWith("/nodes/pve2/qemu/117/agent/exec-status?pid=123")) {
        return { exitCode: 0, stdout: '{"data":{"exited":true,"exitcode":0,"out-data":"b2s=","err-data":""}}\n__PICLAW_PROXMOX_STATUS__:200', stderr: "" };
      }
      throw new Error(`unexpected url ${url}`);
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "cluster.status" },
    )).resolves.toEqual({ workflow: "cluster.status", result: [{ type: "cluster", name: "lab" }, { type: "node", name: "pve" }] });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "vm.snapshot.list", vmid: 117 },
    )).resolves.toEqual({ workflow: "vm.snapshot.list", vmid: 117, node: "pve", result: [{ name: "snap1" }] });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "vm.snapshot.create", vmid: 117, snapshot_name: "snap1", description: "before change" },
    )).resolves.toEqual({
      workflow: "vm.snapshot.create",
      vmid: 117,
      node: "pve",
      result: { snapname: "snap1", upid: "UPID:pve:snapcreate", task: { status: "stopped", exitstatus: "OK" } },
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "vm.clone", vmid: 117, newid: 900, target_node: "pve2", full: true },
    )).resolves.toEqual({
      workflow: "vm.clone",
      vmid: 117,
      node: "pve",
      result: {
        upid: "UPID:pve:clone",
        task: { status: "stopped", exitstatus: "OK" },
        vm: { type: "qemu", vmid: 900, node: "pve2", name: "clone900", status: "stopped" },
      },
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "vm.migrate", vmid: 117, target_node: "pve2", online: true },
    )).resolves.toEqual({
      workflow: "vm.migrate",
      vmid: 117,
      node: "pve",
      result: {
        upid: "UPID:pve:migrate",
        task: { status: "stopped", exitstatus: "OK" },
        vm: { type: "qemu", vmid: 117, node: "pve2", name: "vm117", status: "running" },
      },
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "backup.list", node: "pve", storage: "backup-store" },
    )).resolves.toEqual({
      workflow: "backup.list",
      node: "pve",
      result: { storage: "backup-store", backups: [{ volid: "backup-store:backup/vzdump-qemu-117.vma.zst" }] },
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "backup.create", node: "pve", vmid: 117, storage: "backup-store", mode: "snapshot", compress: "zstd" },
    )).resolves.toEqual({
      workflow: "backup.create",
      vmid: 117,
      node: "pve",
      result: { vmid: 117, storage: "backup-store", upid: "UPID:pve:backup", task: { status: "stopped", exitstatus: "OK" } },
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "backup.restore", node: "pve2", storage: "backup-store", backup_volid: "backup-store:backup/vzdump-qemu-117.vma.zst", vmid: 117, target_storage: "local-zfs" },
    )).resolves.toEqual({
      workflow: "backup.restore",
      vmid: 117,
      node: "pve2",
      result: {
        vmid: 117,
        source_storage: "backup-store",
        archive: "backup-store:backup/vzdump-qemu-117.vma.zst",
        target_storage: "local-zfs",
        upid: "UPID:pve:restore",
        task: { status: "stopped", exitstatus: "OK" },
        vm: { type: "qemu", vmid: 117, node: "pve2", name: "vm117-restored", status: "stopped" },
      },
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "vm.template.create", vmid: 117 },
    )).resolves.toEqual({
      workflow: "vm.template.create",
      vmid: 117,
      node: "pve2",
      result: { upid: "UPID:pve:template", task: { status: "stopped", exitstatus: "OK" } },
    });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "vm.agent.osinfo", vmid: 117 },
    )).resolves.toEqual({ workflow: "vm.agent.osinfo", vmid: 117, node: "pve2", result: { name: "Debian" } });

    await expect(proxmox.runProxmoxWorkflow(
      { base_url: "https://proxmox.example.com:8006/api2/json", api_token_keychain: "proxmox/direct", allow_insecure_tls: true },
      { workflow: "vm.agent.exec", vmid: 117, command: "echo", command_args: ["ok"] },
    )).resolves.toEqual({
      workflow: "vm.agent.exec",
      vmid: 117,
      node: "pve2",
      result: {
        pid: 123,
        exitcode: 0,
        out_data: "ok",
        err_data: "",
        raw: { exited: true, exitcode: 0, "out-data": "b2s=", "err-data": "" },
      },
    });
  });
});

import { expect, test } from "bun:test";

import "../helpers.js";
import { importFresh, withTempWorkspaceEnv } from "../helpers.js";

type DbModule = typeof import("../../src/db.js");
type KeychainModule = typeof import("../../src/secure/keychain.js");
type PortainerClientModule = typeof import("../../src/portainer/client.js");

async function withPortainerContext(
  run: (ctx: {
    db: DbModule;
    keychain: KeychainModule;
    portainer: PortainerClientModule;
  }) => Promise<void>,
): Promise<void> {
  await withTempWorkspaceEnv("piclaw-portainer-", { PICLAW_KEYCHAIN_KEY: "test-key" }, async () => {
    const db = await importFresh<DbModule>("../src/db.js");
    db.initDatabase();
    const keychain = await importFresh<KeychainModule>("../src/secure/keychain.js");
    const portainer = await importFresh<PortainerClientModule>("../src/portainer/client.js");

    try {
      await run({ db, keychain, portainer });
    } finally {
      portainer.setPortainerRequestExecutorForTests(null);
      keychain.setKeyMaterialProviderForTests(null);
      try {
        db.getDb().close();
      } catch {
        // ignore test cleanup close races
      }
    }
  });
}

test("resolvePortainerAuth supports current keychain layout", async () => {
  await withPortainerContext(async ({ keychain, portainer }) => {
    await keychain.setKeychainEntry({
      name: "portainer/relay",
      type: "secret",
      username: "https://portainer.example.com:9443",
      secret: "portainer-token",
    });

    expect(await portainer.resolvePortainerAuth("portainer/relay")).toEqual({
      base_url: "https://portainer.example.com:9443",
      token: "portainer-token",
    });
  });
});

test("requestPortainerApi builds requests with X-API-Key auth", async () => {
  await withPortainerContext(async ({ keychain, portainer }) => {
    await keychain.setKeychainEntry({
      name: "portainer/relay",
      type: "secret",
      username: "https://portainer.example.com:9443",
      secret: "portainer-token",
    });

    let seen: any = null;
    portainer.setPortainerRequestExecutorForTests(async (input) => {
      seen = input;
      return {
        status: 200,
        statusText: "OK",
        bodyText: '[{"Id":2,"Name":"diskstation"}]',
      };
    });

    const result = await portainer.requestPortainerApi(
      {
        base_url: "https://portainer.example.com:9443",
        api_token_keychain: "portainer/relay",
        allow_insecure_tls: true,
      },
      {
        method: "GET",
        path: "/api/endpoints",
      },
    );

    expect(result).toEqual({
      status: 200,
      body: [{ Id: 2, Name: "diskstation" }],
      raw_body: '[{"Id":2,"Name":"diskstation"}]',
      path: "/api/endpoints",
      method: "GET",
    });
    expect(seen.url).toBe("https://portainer.example.com:9443/api/endpoints");
    expect(seen.headers["X-API-Key"]).toBe("portainer-token");
    expect(seen.allowInsecureTls).toBe(true);
  });
});

test("discoverPortainerInstances finds the default relay instance", async () => {
  await withPortainerContext(async ({ keychain, portainer }) => {
    await keychain.setKeychainEntry({
      name: "portainer/relay",
      type: "secret",
      username: "https://portainer.example.com:9443",
      secret: "portainer-token",
    });

    const discovery = await portainer.discoverPortainerInstances();
    expect(discovery.default_candidate).toEqual({
      source: "default-keychain",
      base_url: "https://portainer.example.com:9443",
      api_token_keychain: "portainer/relay",
      allow_insecure_tls: true,
    });
    expect(discovery.candidates.length).toBe(1);
  });
});

test("runPortainerWorkflow supports endpoint inventory and unmanaged container listing", async () => {
  await withPortainerContext(async ({ keychain, portainer }) => {
    await keychain.setKeychainEntry({
      name: "portainer/relay",
      type: "secret",
      username: "https://portainer.example.com:9443",
      secret: "portainer-token",
    });

    const calls: string[] = [];
    portainer.setPortainerRequestExecutorForTests(async (input) => {
      calls.push(input.url);
      if (input.url.endsWith("/api/endpoints")) {
        return { status: 200, statusText: "OK", bodyText: '[{"Id":2,"Name":"diskstation"}]' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/json?all=1")) {
        return {
          status: 200,
          statusText: "OK",
          bodyText: '[{"Id":"abc","Names":["/gitea"],"Image":"gitea/gitea:latest","State":"running","Status":"Up","Ports":[{"PublicPort":3000,"PrivatePort":3000,"Type":"tcp"}]}]',
        };
      }
      if (input.url.endsWith("/api/stacks")) {
        return { status: 200, statusText: "OK", bodyText: '[{"Id":59,"Name":"utilities","EndpointId":2}]' };
      }
      if (input.url.endsWith("/api/stacks/59/file")) {
        return { status: 200, statusText: "OK", bodyText: '{"StackFileContent":"services:\\n  microbin:\\n    container_name: microbin\\n"}' };
      }
      throw new Error(`unexpected url ${input.url}`);
    });

    const endpoints = await portainer.runPortainerWorkflow(
      {
        base_url: "https://portainer.example.com:9443",
        api_token_keychain: "portainer/relay",
        allow_insecure_tls: true,
      },
      { workflow: "endpoint.list" },
    );
    expect(endpoints).toEqual({
      workflow: "endpoint.list",
      result: [{ Id: 2, Name: "diskstation" }],
    });

    const containers = await portainer.runPortainerWorkflow(
      {
        base_url: "https://portainer.example.com:9443",
        api_token_keychain: "portainer/relay",
        allow_insecure_tls: true,
      },
      { workflow: "container.list", endpoint_id: 2, unmanaged: true },
    );
    expect(containers).toEqual({
      workflow: "container.list",
      result: [{
        id: "abc",
        name: "gitea",
        image: "gitea/gitea:latest",
        state: "running",
        status: "Up",
        ports: "3000->3000/tcp",
        stack: null,
      }],
    });
    expect(calls).toEqual([
      "https://portainer.example.com:9443/api/endpoints",
      "https://portainer.example.com:9443/api/endpoints/2/docker/containers/json?all=1",
      "https://portainer.example.com:9443/api/stacks",
      "https://portainer.example.com:9443/api/stacks/59/file",
    ]);
  });
});

test("runPortainerWorkflow supports container.compose and stack.create_standalone", async () => {
  await withPortainerContext(async ({ keychain, portainer }) => {
    await keychain.setKeychainEntry({
      name: "portainer/relay",
      type: "secret",
      username: "https://portainer.example.com:9443",
      secret: "portainer-token",
    });

    const seenBodies: Array<string | undefined> = [];
    portainer.setPortainerRequestExecutorForTests(async (input) => {
      seenBodies.push(input.body);
      if (input.url.endsWith("/api/endpoints/2/docker/containers/json?all=1")) {
        return {
          status: 200,
          statusText: "OK",
          bodyText: '[{"Id":"abc123","Names":["/xmind"],"Image":"ghcr.io/rcarmo/docker-xmind:latest","State":"running","Status":"Up"}]',
        };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/abc123/json")) {
        return {
          status: 200,
          statusText: "OK",
          bodyText: '{"Name":"/xmind","Config":{"Image":"ghcr.io/rcarmo/docker-xmind:latest","Env":["A=1"],"Hostname":"xmind"},"HostConfig":{"RestartPolicy":{"Name":"unless-stopped"},"Binds":["/data:/data"],"PortBindings":{"8080/tcp":[{"HostPort":"8082","HostIp":"0.0.0.0"}]}}}',
        };
      }
      if (input.url.includes("/api/stacks/create/standalone/string?endpointId=2")) {
        return {
          status: 200,
          statusText: "OK",
          bodyText: '{"Id":61,"Name":"docs"}',
        };
      }
      throw new Error(`unexpected url ${input.url}`);
    });

    const compose = await portainer.runPortainerWorkflow(
      {
        base_url: "https://portainer.example.com:9443",
        api_token_keychain: "portainer/relay",
        allow_insecure_tls: true,
      },
      { workflow: "container.compose", endpoint_id: 2, name: "xmind" },
    );
    expect(compose).toEqual({
      workflow: "container.compose",
      result: {
        id: "abc123",
        compose: [
          "services:",
          "  xmind:",
          "    container_name: xmind",
          "    image: ghcr.io/rcarmo/docker-xmind:latest",
          "    restart: unless-stopped",
          "    ports:",
          '      - "8082:8080"',
          "    volumes:",
          '      - "/data:/data"',
          "    environment:",
          '      - "A=1"',
          "",
        ].join("\n"),
      },
    });

    const create = await portainer.runPortainerWorkflow(
      {
        base_url: "https://portainer.example.com:9443",
        api_token_keychain: "portainer/relay",
        allow_insecure_tls: true,
      },
      {
        workflow: "stack.create_standalone",
        endpoint_id: 2,
        stack_name: "docs",
        stack_file_content: "services:\n  xmind:\n    image: example/xmind:latest\n",
      },
    );
    expect(create).toEqual({
      workflow: "stack.create_standalone",
      result: { Id: 61, Name: "docs" },
    });
    expect(seenBodies.at(-1)).toContain('"Name":"docs"');
  });
});

test("runPortainerWorkflow supports logs, mounts, ping, image prune, and volume inspection", async () => {
  await withPortainerContext(async ({ keychain, portainer }) => {
    await keychain.setKeychainEntry({
      name: "portainer/relay",
      type: "secret",
      username: "https://portainer.example.com:9443",
      secret: "portainer-token",
    });

    portainer.setPortainerRequestExecutorForTests(async (input) => {
      if (input.url.endsWith("/api/endpoints/2/docker/_ping")) {
        return { status: 200, statusText: "OK", bodyText: "OK" };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/json?all=1")) {
        return { status: 200, statusText: "OK", bodyText: '[{"Id":"abc123","Names":["/gitea"],"Image":"gitea/gitea:latest","State":"running","Status":"Up"}]' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/abc123/logs?stdout=true&stderr=true&tail=50&timestamps=true")) {
        return { status: 200, statusText: "OK", bodyText: "2026-04-05T00:00:00Z log line" };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/abc123/json")) {
        return { status: 200, statusText: "OK", bodyText: '{"Mounts":[{"Type":"bind","Source":"/srv/gitea","Destination":"/data"}]}' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/images/prune?filters=%7B%22dangling%22%3A%5B%22false%22%5D%7D")) {
        return { status: 200, statusText: "OK", bodyText: '{"ImagesDeleted":[{"Deleted":"unused:latest"}],"SpaceReclaimed":123}' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/volumes")) {
        return { status: 200, statusText: "OK", bodyText: '{"Volumes":[{"Name":"gitea-data"}]}' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/volumes/gitea-data")) {
        return { status: 200, statusText: "OK", bodyText: '{"Name":"gitea-data","Mountpoint":"/volume1/docker/gitea"}' };
      }
      throw new Error(`unexpected url ${input.url}`);
    });

    await expect(portainer.runPortainerWorkflow(
      {
        base_url: "https://portainer.example.com:9443",
        api_token_keychain: "portainer/relay",
        allow_insecure_tls: true,
      },
      { workflow: "endpoint.ping", endpoint_id: 2 },
    )).resolves.toEqual({
      workflow: "endpoint.ping",
      result: { endpoint_id: 2, ok: true, response: "OK" },
    });

    await expect(portainer.runPortainerWorkflow(
      {
        base_url: "https://portainer.example.com:9443",
        api_token_keychain: "portainer/relay",
        allow_insecure_tls: true,
      },
      { workflow: "container.logs", endpoint_id: 2, name: "gitea", tail: 50, timestamps: true },
    )).resolves.toEqual({
      workflow: "container.logs",
      result: { id: "abc123", logs: "2026-04-05T00:00:00Z log line" },
    });

    await expect(portainer.runPortainerWorkflow(
      {
        base_url: "https://portainer.example.com:9443",
        api_token_keychain: "portainer/relay",
        allow_insecure_tls: true,
      },
      { workflow: "container.mounts", endpoint_id: 2, name: "gitea" },
    )).resolves.toEqual({
      workflow: "container.mounts",
      result: { id: "abc123", mounts: [{ Type: "bind", Source: "/srv/gitea", Destination: "/data" }] },
    });

    await expect(portainer.runPortainerWorkflow(
      {
        base_url: "https://portainer.example.com:9443",
        api_token_keychain: "portainer/relay",
        allow_insecure_tls: true,
      },
      { workflow: "image.prune", endpoint_id: 2, all_unused: true },
    )).resolves.toEqual({
      workflow: "image.prune",
      result: { ImagesDeleted: [{ Deleted: "unused:latest" }], SpaceReclaimed: 123 },
    });

    await expect(portainer.runPortainerWorkflow(
      {
        base_url: "https://portainer.example.com:9443",
        api_token_keychain: "portainer/relay",
        allow_insecure_tls: true,
      },
      { workflow: "volume.list", endpoint_id: 2 },
    )).resolves.toEqual({
      workflow: "volume.list",
      result: [{ Name: "gitea-data" }],
    });

    await expect(portainer.runPortainerWorkflow(
      {
        base_url: "https://portainer.example.com:9443",
        api_token_keychain: "portainer/relay",
        allow_insecure_tls: true,
      },
      { workflow: "volume.inspect", endpoint_id: 2, volume_name: "gitea-data" },
    )).resolves.toEqual({
      workflow: "volume.inspect",
      result: { Name: "gitea-data", Mountpoint: "/volume1/docker/gitea" },
    });
  });
});

test("runPortainerWorkflow supports in-place standalone container upgrades", async () => {
  await withPortainerContext(async ({ keychain, portainer }) => {
    await keychain.setKeychainEntry({
      name: "portainer/relay",
      type: "secret",
      username: "https://portainer.example.com:9443",
      secret: "portainer-token",
    });

    const seen: Array<{ url: string; method: string; body?: string }> = [];
    portainer.setPortainerRequestExecutorForTests(async (input) => {
      seen.push({ url: input.url, method: input.method, body: input.body });
      if (input.url.endsWith("/api/endpoints/2/docker/containers/json?all=1")) {
        return { status: 200, statusText: "OK", bodyText: '[{"Id":"abc123","Names":["/gitea"],"Image":"gitea/gitea:1.22","State":"running","Status":"Up"}]' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/abc123/json")) {
        return {
          status: 200,
          statusText: "OK",
          bodyText: '{"Name":"/gitea","Config":{"Image":"gitea/gitea:1.22","Env":["USER_UID=1000"],"Hostname":"gitea","Labels":{"app":"gitea"}},"HostConfig":{"RestartPolicy":{"Name":"unless-stopped"},"Binds":["/srv/gitea:/data"],"PortBindings":{"3000/tcp":[{"HostPort":"3000","HostIp":"0.0.0.0"}]},"NetworkMode":"bridge"},"Mounts":[{"Type":"bind","Source":"/srv/gitea","Destination":"/data","RW":true}],"NetworkSettings":{"Networks":{"bridge":{"Aliases":["gitea"]}}}}',
        };
      }
      if (input.url.endsWith("/api/stacks")) {
        return { status: 200, statusText: "OK", bodyText: '[]' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/images/create?fromImage=gitea%2Fgitea&tag=1.23")) {
        return { status: 200, statusText: "OK", bodyText: 'pulled' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/abc123/stop?t=20")) {
        return { status: 204, statusText: "No Content", bodyText: '' };
      }
      if (input.url.includes("/api/endpoints/2/docker/containers/abc123/rename?name=gitea-backup-")) {
        return { status: 204, statusText: "No Content", bodyText: '' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/create?name=gitea")) {
        return { status: 201, statusText: "Created", bodyText: '{"Id":"def456"}' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/def456/start")) {
        return { status: 204, statusText: "No Content", bodyText: '' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/abc123")) {
        return { status: 204, statusText: "No Content", bodyText: '' };
      }
      throw new Error(`unexpected url ${input.url}`);
    });

    await expect(portainer.runPortainerWorkflow(
      {
        base_url: "https://portainer.example.com:9443",
        api_token_keychain: "portainer/relay",
        allow_insecure_tls: true,
      },
      { workflow: "container.upgrade", endpoint_id: 2, name: "gitea", image: "gitea/gitea:1.23", timeout_sec: 20 },
    )).resolves.toMatchObject({
      workflow: "container.upgrade",
      result: {
        ok: true,
        endpoint_id: 2,
        name: "gitea",
        old_id: "abc123",
        new_id: "def456",
        current_image: "gitea/gitea:1.22",
        target_image: "gitea/gitea:1.23",
        pull_output: "pulled",
        previous_container_deleted: true,
      },
    });

    const createCall = seen.find((entry) => entry.url.endsWith("/api/endpoints/2/docker/containers/create?name=gitea"));
    expect(createCall).toBeTruthy();
    expect(JSON.parse(createCall!.body || "{}")).toMatchObject({
      Image: "gitea/gitea:1.23",
      Env: ["USER_UID=1000"],
      HostConfig: {
        Binds: ["/srv/gitea:/data"],
        RestartPolicy: { Name: "unless-stopped" },
      },
      NetworkingConfig: {
        EndpointsConfig: {
          bridge: { Aliases: ["gitea"] },
        },
      },
    });
  });
});

test("runPortainerWorkflow rolls standalone container upgrades back when the new container fails to start", async () => {
  await withPortainerContext(async ({ keychain, portainer }) => {
    await keychain.setKeychainEntry({
      name: "portainer/relay",
      type: "secret",
      username: "https://portainer.example.com:9443",
      secret: "portainer-token",
    });

    const seenUrls: string[] = [];
    portainer.setPortainerRequestExecutorForTests(async (input) => {
      seenUrls.push(input.url);
      if (input.url.endsWith("/api/endpoints/2/docker/containers/json?all=1")) {
        return { status: 200, statusText: "OK", bodyText: '[{"Id":"abc123","Names":["/gitea"],"Image":"gitea/gitea:1.22","State":"running","Status":"Up"}]' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/abc123/json")) {
        return {
          status: 200,
          statusText: "OK",
          bodyText: '{"Name":"/gitea","Config":{"Image":"gitea/gitea:1.22","Hostname":"gitea"},"HostConfig":{"RestartPolicy":{"Name":"unless-stopped"}},"NetworkSettings":{"Networks":{"bridge":{"Aliases":["gitea"]}}}}',
        };
      }
      if (input.url.endsWith("/api/stacks")) {
        return { status: 200, statusText: "OK", bodyText: '[]' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/images/create?fromImage=gitea%2Fgitea&tag=1.23")) {
        return { status: 200, statusText: "OK", bodyText: 'pulled' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/abc123/stop?t=15")) {
        return { status: 204, statusText: "No Content", bodyText: '' };
      }
      if (input.url.includes("/api/endpoints/2/docker/containers/abc123/rename?name=gitea-backup-")) {
        return { status: 204, statusText: "No Content", bodyText: '' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/create?name=gitea")) {
        return { status: 201, statusText: "Created", bodyText: '{"Id":"def456"}' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/def456/start")) {
        return { status: 500, statusText: "Internal Server Error", bodyText: 'boom' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/def456?force=true&v=true")) {
        return { status: 204, statusText: "No Content", bodyText: '' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/abc123/rename?name=gitea")) {
        return { status: 204, statusText: "No Content", bodyText: '' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/abc123/start")) {
        return { status: 204, statusText: "No Content", bodyText: '' };
      }
      throw new Error(`unexpected url ${input.url}`);
    });

    await expect(portainer.runPortainerWorkflow(
      {
        base_url: "https://portainer.example.com:9443",
        api_token_keychain: "portainer/relay",
        allow_insecure_tls: true,
      },
      { workflow: "container.upgrade", endpoint_id: 2, name: "gitea", image: "gitea/gitea:1.23", timeout_sec: 15 },
    )).rejects.toThrow("Failed to upgrade container gitea on endpoint 2");

    expect(seenUrls).toEqual(expect.arrayContaining([
      "https://portainer.example.com:9443/api/endpoints/2/docker/containers/def456?force=true&v=true",
      "https://portainer.example.com:9443/api/endpoints/2/docker/containers/abc123/rename?name=gitea",
      "https://portainer.example.com:9443/api/endpoints/2/docker/containers/abc123/start",
    ]));
  });
});

test("runPortainerWorkflow rejects in-place upgrades for stack-managed containers", async () => {
  await withPortainerContext(async ({ keychain, portainer }) => {
    await keychain.setKeychainEntry({
      name: "portainer/relay",
      type: "secret",
      username: "https://portainer.example.com:9443",
      secret: "portainer-token",
    });

    portainer.setPortainerRequestExecutorForTests(async (input) => {
      if (input.url.endsWith("/api/endpoints/2/docker/containers/json?all=1")) {
        return { status: 200, statusText: "OK", bodyText: '[{"Id":"abc123","Names":["/gitea"],"Image":"gitea/gitea:1.22","State":"running","Status":"Up"}]' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/abc123/json")) {
        return { status: 200, statusText: "OK", bodyText: '{"Name":"/gitea","Config":{"Image":"gitea/gitea:1.22","Hostname":"gitea"}}' };
      }
      if (input.url.endsWith("/api/stacks")) {
        return { status: 200, statusText: "OK", bodyText: '[{"Id":59,"Name":"management","EndpointId":2}]' };
      }
      if (input.url.endsWith("/api/stacks/59/file")) {
        return { status: 200, statusText: "OK", bodyText: '{"StackFileContent":"services:\\n  gitea:\\n    container_name: gitea\\n"}' };
      }
      throw new Error(`unexpected url ${input.url}`);
    });

    await expect(portainer.runPortainerWorkflow(
      {
        base_url: "https://portainer.example.com:9443",
        api_token_keychain: "portainer/relay",
        allow_insecure_tls: true,
      },
      { workflow: "container.upgrade", endpoint_id: 2, name: "gitea", image: "gitea/gitea:1.23" },
    )).rejects.toThrow("use stack.update instead");
  });
});

test("runPortainerWorkflow supports resolvers, docker host inspection, and network workflows", async () => {
  await withPortainerContext(async ({ keychain, portainer }) => {
    await keychain.setKeychainEntry({
      name: "portainer/relay",
      type: "secret",
      username: "https://portainer.example.com:9443",
      secret: "portainer-token",
    });

    portainer.setPortainerRequestExecutorForTests(async (input) => {
      if (input.url.endsWith("/api/endpoints")) {
        return { status: 200, statusText: "OK", bodyText: '[{"Id":2,"Name":"diskstation","URL":"tcp://diskstation"}]' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/info")) {
        return { status: 200, statusText: "OK", bodyText: '{"ServerVersion":"27.0.0"}' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/version")) {
        return { status: 200, statusText: "OK", bodyText: '{"Version":"27.0.0"}' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/system/df")) {
        return { status: 200, statusText: "OK", bodyText: '{"LayersSize":123}' };
      }
      if (input.url.endsWith("/api/stacks")) {
        return { status: 200, statusText: "OK", bodyText: '[{"Id":59,"Name":"utilities","EndpointId":2}]' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/json?all=1")) {
        return { status: 200, statusText: "OK", bodyText: '[{"Id":"abc123","Names":["/gitea"],"Image":"gitea/gitea:latest","State":"running","Status":"Up"}]' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/networks")) {
        return { status: 200, statusText: "OK", bodyText: '[{"Id":"net1","Name":"bridge"}]' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/networks/net1")) {
        return { status: 200, statusText: "OK", bodyText: '{"Id":"net1","Name":"bridge","Driver":"bridge"}' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/networks/create")) {
        return { status: 201, statusText: "Created", bodyText: '{"Id":"net2","Warning":""}' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/networks/net1") && input.method === "DELETE") {
        return { status: 204, statusText: "No Content", bodyText: '' };
      }
      throw new Error(`unexpected url ${input.url}`);
    });

    await expect(portainer.runPortainerWorkflow(
      { base_url: "https://portainer.example.com:9443", api_token_keychain: "portainer/relay", allow_insecure_tls: true },
      { workflow: "endpoint.resolve", name: "diskstation" },
    )).resolves.toEqual({ workflow: "endpoint.resolve", result: { Id: 2, Name: "diskstation", URL: "tcp://diskstation" } });

    await expect(portainer.runPortainerWorkflow(
      { base_url: "https://portainer.example.com:9443", api_token_keychain: "portainer/relay", allow_insecure_tls: true },
      { workflow: "stack.resolve", endpoint_id: 2, stack_name: "utilities" },
    )).resolves.toEqual({ workflow: "stack.resolve", result: { Id: 59, Name: "utilities", EndpointId: 2 } });

    await expect(portainer.runPortainerWorkflow(
      { base_url: "https://portainer.example.com:9443", api_token_keychain: "portainer/relay", allow_insecure_tls: true },
      { workflow: "container.resolve", endpoint_id: 2, name: "gitea" },
    )).resolves.toEqual({
      workflow: "container.resolve",
      result: { id: "abc123", name: "gitea", image: "gitea/gitea:latest", state: "running", status: "Up", stack: null },
    });

    await expect(portainer.runPortainerWorkflow(
      { base_url: "https://portainer.example.com:9443", api_token_keychain: "portainer/relay", allow_insecure_tls: true },
      { workflow: "endpoint.docker_info", endpoint_id: 2 },
    )).resolves.toEqual({ workflow: "endpoint.docker_info", result: { ServerVersion: "27.0.0" } });

    await expect(portainer.runPortainerWorkflow(
      { base_url: "https://portainer.example.com:9443", api_token_keychain: "portainer/relay", allow_insecure_tls: true },
      { workflow: "network.create", endpoint_id: 2, name: "frontend", driver: "bridge", attachable: true },
    )).resolves.toEqual({ workflow: "network.create", result: { Id: "net2", Warning: "" } });

    await expect(portainer.runPortainerWorkflow(
      { base_url: "https://portainer.example.com:9443", api_token_keychain: "portainer/relay", allow_insecure_tls: true },
      { workflow: "network.delete", endpoint_id: 2, name: "bridge" },
    )).resolves.toEqual({ workflow: "network.delete", result: { ok: true, endpoint_id: 2, id: "net1", name: "bridge" } });
  });
});

test("runPortainerWorkflow supports stack pull-and-update, bounded container exec, and second-tier maintenance workflows", async () => {
  await withPortainerContext(async ({ keychain, portainer }) => {
    await keychain.setKeychainEntry({
      name: "portainer/relay",
      type: "secret",
      username: "https://portainer.example.com:9443",
      secret: "portainer-token",
    });

    let seenUpdateBody = "";
    portainer.setPortainerRequestExecutorForTests(async (input) => {
      if (input.url.endsWith("/api/stacks")) {
        return { status: 200, statusText: "OK", bodyText: '[{"Id":59,"Name":"utilities","EndpointId":2}]' };
      }
      if (input.url.endsWith("/api/stacks/59/file")) {
        return { status: 200, statusText: "OK", bodyText: '{"StackFileContent":"services:\\n  app:\\n    image: example/app:latest\\n"}' };
      }
      if (input.url.endsWith("/api/stacks/59?endpointId=2")) {
        seenUpdateBody = input.body || "";
        return { status: 200, statusText: "OK", bodyText: '{"Id":59,"Name":"utilities"}' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/json?all=1")) {
        return {
          status: 200,
          statusText: "OK",
          bodyText: '[{"Id":"abc123","Names":["/gitea"],"Image":"gitea/gitea:latest","State":"running","Status":"Up"},{"Id":"def456","Names":["/registry"],"Image":"registry:2","State":"running","Status":"Up"}]',
        };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/abc123/exec")) {
        return { status: 201, statusText: "Created", bodyText: '{"Id":"exec1"}' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/exec/exec1/start")) {
        return { status: 200, statusText: "OK", bodyText: 'hello\n' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/exec/exec1/json")) {
        return { status: 200, statusText: "OK", bodyText: '{"ExitCode":0,"Running":false}' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/volumes/create")) {
        return { status: 201, statusText: "Created", bodyText: '{"Name":"data-vol"}' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/volumes/data-vol") && input.method === "DELETE") {
        return { status: 204, statusText: "No Content", bodyText: '' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/volumes/prune")) {
        return { status: 200, statusText: "OK", bodyText: '{"VolumesDeleted":["old-vol"],"SpaceReclaimed":321}' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/images/gitea%2Fgitea%3Alatest/json")) {
        return { status: 200, statusText: "OK", bodyText: '{"Id":"sha256:local","RepoDigests":["gitea/gitea@sha256:abc"]}' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/distribution/gitea%2Fgitea%3Alatest/json")) {
        return { status: 200, statusText: "OK", bodyText: '{"Descriptor":{"digest":"sha256:def"}}' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/abc123/json")) {
        return {
          status: 200,
          statusText: "OK",
          bodyText: '{"Name":"/gitea","Config":{"Image":"gitea/gitea:latest","Hostname":"gitea"},"HostConfig":{"RestartPolicy":{"Name":"unless-stopped"}},"NetworkSettings":{"Networks":{"bridge":{"Aliases":["gitea"]}}}}',
        };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/def456/json")) {
        return {
          status: 200,
          statusText: "OK",
          bodyText: '{"Name":"/registry","Config":{"Image":"registry:2","Hostname":"registry"},"HostConfig":{"RestartPolicy":{"Name":"always"}},"NetworkSettings":{"Networks":{"bridge":{"Aliases":["registry"]}}}}',
        };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/images/create?fromImage=gitea%2Fgitea&tag=latest")) {
        return { status: 200, statusText: "OK", bodyText: 'pulled gitea' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/images/create?fromImage=registry&tag=2")) {
        return { status: 200, statusText: "OK", bodyText: 'pulled registry' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/abc123/stop?t=20")) {
        return { status: 204, statusText: "No Content", bodyText: '' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/def456/stop?t=20")) {
        return { status: 204, statusText: "No Content", bodyText: '' };
      }
      if (input.url.includes("/api/endpoints/2/docker/containers/abc123/rename?name=gitea-backup-")) {
        return { status: 204, statusText: "No Content", bodyText: '' };
      }
      if (input.url.includes("/api/endpoints/2/docker/containers/def456/rename?name=registry-backup-")) {
        return { status: 204, statusText: "No Content", bodyText: '' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/create?name=gitea")) {
        return { status: 201, statusText: "Created", bodyText: '{"Id":"newgitea"}' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/create?name=registry")) {
        return { status: 201, statusText: "Created", bodyText: '{"Id":"newregistry"}' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/newgitea/start")) {
        return { status: 204, statusText: "No Content", bodyText: '' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/newregistry/start")) {
        return { status: 204, statusText: "No Content", bodyText: '' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/abc123")) {
        return { status: 204, statusText: "No Content", bodyText: '' };
      }
      if (input.url.endsWith("/api/endpoints/2/docker/containers/def456")) {
        return { status: 204, statusText: "No Content", bodyText: '' };
      }
      throw new Error(`unexpected url ${input.url}`);
    });

    await expect(portainer.runPortainerWorkflow(
      { base_url: "https://portainer.example.com:9443", api_token_keychain: "portainer/relay", allow_insecure_tls: true },
      { workflow: "stack.pull_and_update", endpoint_id: 2, stack_name: "utilities" },
    )).resolves.toEqual({ workflow: "stack.pull_and_update", result: { Id: 59, Name: "utilities" } });
    expect(seenUpdateBody).toContain('"pullImage":true');

    await expect(portainer.runPortainerWorkflow(
      { base_url: "https://portainer.example.com:9443", api_token_keychain: "portainer/relay", allow_insecure_tls: true },
      { workflow: "container.exec", endpoint_id: 2, name: "gitea", command: "echo", command_args: ["hello"] },
    )).resolves.toEqual({
      workflow: "container.exec",
      result: { exec_id: "exec1", output: "hello", inspect: { ExitCode: 0, Running: false } },
    });

    await expect(portainer.runPortainerWorkflow(
      { base_url: "https://portainer.example.com:9443", api_token_keychain: "portainer/relay", allow_insecure_tls: true },
      { workflow: "volume.create", endpoint_id: 2, volume_name: "data-vol", driver: "local" },
    )).resolves.toEqual({ workflow: "volume.create", result: { Name: "data-vol" } });

    await expect(portainer.runPortainerWorkflow(
      { base_url: "https://portainer.example.com:9443", api_token_keychain: "portainer/relay", allow_insecure_tls: true },
      { workflow: "volume.delete", endpoint_id: 2, volume_name: "data-vol" },
    )).resolves.toEqual({ workflow: "volume.delete", result: { ok: true, endpoint_id: 2, volume_name: "data-vol" } });

    await expect(portainer.runPortainerWorkflow(
      { base_url: "https://portainer.example.com:9443", api_token_keychain: "portainer/relay", allow_insecure_tls: true },
      { workflow: "volume.prune", endpoint_id: 2 },
    )).resolves.toEqual({ workflow: "volume.prune", result: { VolumesDeleted: ["old-vol"], SpaceReclaimed: 321 } });

    await expect(portainer.runPortainerWorkflow(
      { base_url: "https://portainer.example.com:9443", api_token_keychain: "portainer/relay", allow_insecure_tls: true },
      { workflow: "image.update_check", endpoint_id: 2, image: "gitea/gitea:latest" },
    )).resolves.toEqual({
      workflow: "image.update_check",
      result: {
        image: "gitea/gitea:latest",
        local_id: "sha256:local",
        local_repo_digests: ["gitea/gitea@sha256:abc"],
        remote_digest: "sha256:def",
        up_to_date: false,
        remote: { Descriptor: { digest: "sha256:def" } },
      },
    });

    await expect(portainer.runPortainerWorkflow(
      { base_url: "https://portainer.example.com:9443", api_token_keychain: "portainer/relay", allow_insecure_tls: true },
      { workflow: "container.upgrade_many", endpoint_id: 2, names: ["gitea", "registry"], timeout_sec: 20 },
    )).resolves.toMatchObject({
      workflow: "container.upgrade_many",
      result: {
        endpoint_id: 2,
        total: 2,
        upgraded: 2,
        failed: 0,
        ok: true,
      },
    });
  });
});

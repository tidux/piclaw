import { describe, expect, test } from "bun:test";

import keychainExtension from "../../extensions/integrations/keychain/index.ts";
import portainerExtension from "../../extensions/integrations/portainer/index.ts";
import proxmoxExtension from "../../extensions/integrations/proxmox/index.ts";
import sshExtension from "../../extensions/integrations/ssh/index.ts";
import { createFakeExtensionApi } from "./fake-extension-api.js";

describe("packaged integration tool extensions", () => {
  test("keychain packaged extension registers keychain", () => {
    const fake = createFakeExtensionApi();
    keychainExtension(fake.api);
    expect(fake.tools.has("keychain")).toBe(true);
  });

  test("ssh packaged extension registers ssh", () => {
    const fake = createFakeExtensionApi();
    sshExtension(fake.api);
    expect(fake.tools.has("ssh")).toBe(true);
  });

  test("proxmox packaged extension registers proxmox", () => {
    const fake = createFakeExtensionApi();
    proxmoxExtension(fake.api);
    expect(fake.tools.has("proxmox")).toBe(true);
  });

  test("portainer packaged extension registers portainer", () => {
    const fake = createFakeExtensionApi();
    portainerExtension(fake.api);
    expect(fake.tools.has("portainer")).toBe(true);
  });
});

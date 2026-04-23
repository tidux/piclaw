import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const DOCKERFILE = resolve(import.meta.dir, "../../..", "Dockerfile");

test("Dockerfile pins and verifies the Tailscale install artifact", () => {
  const dockerfile = readFileSync(DOCKERFILE, "utf8");

  expect(dockerfile).toContain('ARG TAILSCALE_VERSION="1.96.4"');
  expect(dockerfile.match(/ARG TAILSCALE_VERSION="1\.96\.4"/g)?.length).toBe(2);
  expect(dockerfile).toContain('tailscale_pkg="tailscale_${TAILSCALE_VERSION}_${tailscale_arch}.tgz"');
  expect(dockerfile).toContain('curl -fsSL "${tailscale_url}.sha256" -o "$tailscale_tmp/tailscale.tgz.sha256"');
  expect(dockerfile).toContain('sha256sum -c -');
  expect(dockerfile).toContain('/usr/local/bin/tailscaled');
  expect(dockerfile).not.toContain('https://tailscale.com/install.sh | sh');
});

test("Dockerfile exposes Bun for Node-based language server wrappers", () => {
  const dockerfile = readFileSync(DOCKERFILE, "utf8");

  expect(dockerfile).toContain("ln -sf /usr/local/lib/bun/bin/bun /usr/local/bin/node");
});

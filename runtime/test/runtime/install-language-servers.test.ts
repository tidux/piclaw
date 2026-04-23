import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const INSTALL_SCRIPT_PATH = resolve(import.meta.dir, "../../../scripts/docker/install-language-servers.sh");
const MANIFEST_PATH = resolve(import.meta.dir, "../../../runtime/config/language-servers.json");

test("install-language-servers consumes the curated manifest and supports the current server set", () => {
  const script = readFileSync(INSTALL_SCRIPT_PATH, "utf8");
  const manifest = readFileSync(MANIFEST_PATH, "utf8");

  expect(manifest).toContain('"id": "typescript"');
  expect(manifest).toContain('"id": "python"');
  expect(manifest).toContain('"id": "go"');
  expect(manifest).toContain('"id": "rust"');

  expect(script).toContain("jq -c '.servers[]'");
  expect(script).toContain(".install.strategy");
  expect(script).toContain(".install.brewFormula");
  expect(script).toContain(".install.binary");
  expect(script).toContain(".install.packages");
  expect(script).toContain("install_brew_formula_if_available");
  expect(script).toContain("brew");
  expect(script).toContain("patch_bun_wrapper");
  expect(script).toContain("env bun");
  expect(script).toContain("chmod -R a+rX");

  expect(manifest).toContain('"binary": "typescript-language-server"');
  expect(manifest).toContain('"binary": "pyright-langserver"');
  expect(manifest).toContain('"binary": "gopls"');
  expect(manifest).toContain('"binary": "rust-analyzer"');

  expect(manifest).toContain('"brewFormula": "typescript-language-server"');
  expect(manifest).toContain('"brewFormula": "pyright"');
  expect(manifest).toContain('"brewFormula": "gopls"');
  expect(manifest).toContain('"brewFormula": "rust-analyzer"');

  expect(manifest).toContain('"strategy": "npm-global"');
  expect(manifest).toContain('"strategy": "go-install"');
  expect(manifest).toContain('"strategy": "system-copy"');
});

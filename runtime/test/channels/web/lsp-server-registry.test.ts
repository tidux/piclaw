import { describe, expect, test } from "bun:test";

import {
  getCuratedLanguageServerProfile,
  getCuratedLanguageServerProfiles,
} from "../../../src/channels/web/lsp/curated-language-servers.js";
import { listLspServerProfiles } from "../../../src/channels/web/lsp/server-registry.js";

describe("curated language server manifest", () => {
  test("loads the curated language servers with install metadata and activation defaults", () => {
    const profiles = getCuratedLanguageServerProfiles();

    expect(profiles.map((profile) => profile.id)).toEqual([
      "typescript",
      "python",
      "go",
      "rust",
    ]);
    expect(getCuratedLanguageServerProfile("rust")?.install.binary).toBe("rust-analyzer");
    expect(getCuratedLanguageServerProfile("typescript")?.activation.autoActivate).toBe(true);
  });

  test("server registry exposes the curated manifest profiles", () => {
    const profiles = listLspServerProfiles();

    expect(profiles.map((profile) => profile.languageId)).toEqual([
      "typescript",
      "python",
      "go",
      "rust",
    ]);
    expect(profiles.find((profile) => profile.languageId === "python")?.command.command).toBe("pyright-langserver");
  });
});

import { afterEach, describe, expect, test } from "bun:test";
import { writeFileSync } from "fs";
import { join } from "path";

import "../helpers.js";
import { createTempWorkspace } from "../helpers.js";
import { readEnvFile } from "../../src/core/env.js";

const originalCwd = process.cwd();

afterEach(() => {
  process.chdir(originalCwd);
});

describe("readEnvFile", () => {
  test("returns an empty object when .env is missing", () => {
    const workspace = createTempWorkspace("piclaw-env-missing-");
    try {
      process.chdir(workspace.workspace);
      expect(readEnvFile(["PICLAW_WEB_PORT"])).toEqual({});
    } finally {
      workspace.cleanup();
    }
  });

  test("reads only requested keys, trims whitespace, and strips surrounding quotes", () => {
    const workspace = createTempWorkspace("piclaw-env-parse-");
    try {
      process.chdir(workspace.workspace);
      writeFileSync(
        join(workspace.workspace, ".env"),
        [
          "# comment line",
          " PICLAW_ASSISTANT_NAME = \" Smith \" ",
          "PICLAW_WEB_PORT='8081'",
          "PICLAW_TRUST_PROXY = true",
          "UNREQUESTED_KEY=ignore-me",
          "MALFORMED_LINE",
          "EMPTY_VALUE=",
          "PICLAW_USER_NAME=''",
        ].join("\n"),
        "utf8",
      );

      expect(
        readEnvFile([
          "PICLAW_ASSISTANT_NAME",
          "PICLAW_WEB_PORT",
          "PICLAW_TRUST_PROXY",
          "PICLAW_USER_NAME",
          "EMPTY_VALUE",
        ]),
      ).toEqual({
        PICLAW_ASSISTANT_NAME: " Smith ",
        PICLAW_WEB_PORT: "8081",
        PICLAW_TRUST_PROXY: "true",
      });
    } finally {
      workspace.cleanup();
    }
  });
});

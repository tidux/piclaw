import { expect, test } from "bun:test";

import { importFresh } from "./helpers.js";

test("dream token defaults and auto gate follow nightly cadence", async () => {
  const dream = await importFresh<typeof import("../src/dream.js")>("../src/dream.js");

  expect(dream.parseDreamPromptToken("dream")).toEqual({ matched: true, mode: "manual", days: 7 });
  expect(dream.parseDreamPromptToken("auto dream")).toEqual({ matched: true, mode: "auto", days: 2 });
  expect(dream.parseDreamPromptToken("auto dream 5")).toEqual({ matched: true, mode: "auto", days: 5 });

  expect(dream.shouldRunAutoDream(null, null)).toEqual({ ok: true, reason: null });
  expect(dream.shouldRunAutoDream("2026-04-06T23:22:39.203Z", 0)).toEqual({ ok: false, reason: "No sessions since last consolidation." });
  expect(dream.shouldRunAutoDream("2026-04-06T23:22:39.203Z", 1)).toEqual({ ok: true, reason: null });
});

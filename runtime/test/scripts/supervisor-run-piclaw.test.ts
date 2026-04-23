import { expect, test } from "bun:test";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { join, resolve } from "node:path";
import { tmpdir } from "node:os";

import { waitFor } from "../helpers.js";

const REPO_ROOT = resolve(import.meta.dir, "../../..");
const RUN_SCRIPT = resolve(REPO_ROOT, "supervisor", "run-piclaw.sh");
const SUPERVISOR_CONF = resolve(REPO_ROOT, "supervisor", "conf.d", "piclaw.conf");
const TEST_SHELL = process.env.SHELL || "bash";

function processExists(pid: number): boolean {
  const probe = Bun.spawnSync([TEST_SHELL, "-lc", `kill -0 ${pid}`], { stdout: "pipe", stderr: "pipe" });
  return probe.exitCode === 0;
}

test("supervisor idle wrapper terminates its tail child on SIGTERM", async () => {
  const tempHome = mkdtempSync(join(tmpdir(), "piclaw-supervisor-home-"));
  const proc = Bun.spawn([TEST_SHELL, RUN_SCRIPT], {
    cwd: REPO_ROOT,
    env: {
      ...process.env,
      HOME: tempHome,
      PICLAW_AUTOSTART: "0",
    },
    stdout: "pipe",
    stderr: "pipe",
  });

  let childPid = 0;

  try {
    await waitFor(() => {
      const result = Bun.spawnSync([TEST_SHELL, "-lc", `ps -o pid= --ppid ${proc.pid} | head -n 1`], {
        stdout: "pipe",
        stderr: "pipe",
      });
      const value = result.stdout.toString().trim();
      childPid = value ? Number(value) : 0;
      return childPid > 0;
    }, 5000, 100);

    expect(processExists(childPid)).toBe(true);

    proc.kill("SIGTERM");
    const exitCode = await proc.exited;
    expect(exitCode).toBe(0);

    await Bun.sleep(150);
    expect(processExists(childPid)).toBe(false);
  } finally {
    if (!proc.killed) {
      proc.kill("SIGKILL");
      await proc.exited.catch((error) => {
        console.debug("[supervisor-run-piclaw.test] Ignoring exit wait failure during forced cleanup.", error);
      });
    }
    rmSync(tempHome, { recursive: true, force: true });
  }
});

test("supervisor config stops and kills the full process group", () => {
  const conf = readFileSync(SUPERVISOR_CONF, "utf8");
  expect(conf).toContain("stopasgroup=true");
  expect(conf).toContain("killasgroup=true");
});

test("supervisor launcher keeps workspace language servers on PATH", () => {
  const runScript = readFileSync(RUN_SCRIPT, "utf8");
  const conf = readFileSync(SUPERVISOR_CONF, "utf8");

  expect(runScript).toContain("/workspace/.local/bin");
  expect(conf).toContain("/workspace/.local/bin");
});

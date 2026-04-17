import { expect, test } from "bun:test";

import { importFresh } from "../helpers.js";

const SCRIPT_PATH = "../skills/operator/proxmox-management/proxmox-move-vm-via-backup-restore.ts";

test("runProxmoxMoveVmViaBackupRestore deletes the source only after a successful restore", async () => {
  const mod = await importFresh<typeof import("../../skills/operator/proxmox-management/proxmox-move-vm-via-backup-restore.ts")>(SCRIPT_PATH);
  const apiCalls: string[] = [];
  const taskWaits: string[] = [];

  const result = await mod.runProxmoxMoveVmViaBackupRestore({
    env: {
      PVE_SOURCE_NODE: "pve-source",
      PVE_VMID: "117",
      PVE_TARGET_NODE: "pve-target",
      PVE_TARGET_STORAGE: "fast-ssd",
      PVE_DELETE_SOURCE: "1",
    },
    getTokenImpl: () => ({ username: "user@pam!token", secret: "secret" }),
    apiImpl: async (_base, _token, path, init) => {
      apiCalls.push(`${init?.method ?? "GET"} ${path}`);
      switch (`${init?.method ?? "GET"} ${path}`) {
        case "GET /nodes/pve-source/qemu/117/config":
          return { data: { name: "source-vm" } };
        case "POST /nodes/pve-source/vzdump":
          return { data: "UPID:backup" };
        case "GET /nodes/pve-source/storage/backup/content?content=backup":
          return { data: [{ volid: "backup:backup/vzdump-qemu-117-2026_04_17-00_00_00.vma.zst", ctime: 123 }] };
        case "POST /nodes/pve-target/qemu":
          return { data: "UPID:restore" };
        case "DELETE /nodes/pve-source/qemu/117?purge=1&destroy-unreferenced-disks=1":
          return { data: "UPID:delete" };
        case "GET /nodes/pve-target/qemu/117/config":
          return { data: { name: "source-vm" } };
        default:
          throw new Error(`unexpected api call: ${init?.method ?? "GET"} ${path}`);
      }
    },
    waitTaskImpl: async (_base, _token, node, upid) => {
      taskWaits.push(`${node}:${upid}`);
      return { status: "stopped", exitstatus: "OK" };
    },
  });

  expect(apiCalls).toEqual([
    "GET /nodes/pve-source/qemu/117/config",
    "POST /nodes/pve-source/vzdump",
    "GET /nodes/pve-source/storage/backup/content?content=backup",
    "POST /nodes/pve-target/qemu",
    "DELETE /nodes/pve-source/qemu/117?purge=1&destroy-unreferenced-disks=1",
    "GET /nodes/pve-target/qemu/117/config",
  ]);
  expect(taskWaits).toEqual([
    "pve-source:UPID:backup",
    "pve-target:UPID:restore",
    "pve-source:UPID:delete",
  ]);
  expect(result.deleted_source).toEqual({ status: "stopped", exitstatus: "OK" });
});

test("runProxmoxMoveVmViaBackupRestore keeps the source VM when restore fails", async () => {
  const mod = await importFresh<typeof import("../../skills/operator/proxmox-management/proxmox-move-vm-via-backup-restore.ts")>(SCRIPT_PATH);
  const apiCalls: string[] = [];

  await expect(
    mod.runProxmoxMoveVmViaBackupRestore({
      env: {
        PVE_SOURCE_NODE: "pve-source",
        PVE_VMID: "117",
        PVE_TARGET_NODE: "pve-target",
        PVE_TARGET_STORAGE: "fast-ssd",
        PVE_DELETE_SOURCE: "1",
      },
      getTokenImpl: () => ({ username: "user@pam!token", secret: "secret" }),
      apiImpl: async (_base, _token, path, init) => {
        apiCalls.push(`${init?.method ?? "GET"} ${path}`);
        switch (`${init?.method ?? "GET"} ${path}`) {
          case "GET /nodes/pve-source/qemu/117/config":
            return { data: { name: "source-vm" } };
          case "POST /nodes/pve-source/vzdump":
            return { data: "UPID:backup" };
          case "GET /nodes/pve-source/storage/backup/content?content=backup":
            return { data: [{ volid: "backup:backup/vzdump-qemu-117-2026_04_17-00_00_00.vma.zst", ctime: 123 }] };
          case "POST /nodes/pve-target/qemu":
            return { data: "UPID:restore" };
          default:
            throw new Error(`unexpected api call: ${init?.method ?? "GET"} ${path}`);
        }
      },
      waitTaskImpl: async (_base, _token, node, upid) => {
        if (node === "pve-target" && upid === "UPID:restore") {
          return { status: "stopped", exitstatus: "ERROR" };
        }
        return { status: "stopped", exitstatus: "OK" };
      },
    }),
  ).rejects.toThrow("restore failed: ERROR");

  expect(apiCalls).toEqual([
    "GET /nodes/pve-source/qemu/117/config",
    "POST /nodes/pve-source/vzdump",
    "GET /nodes/pve-source/storage/backup/content?content=backup",
    "POST /nodes/pve-target/qemu",
  ]);
  expect(apiCalls.some((call) => call.startsWith("DELETE "))).toBe(false);
});

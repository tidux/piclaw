import { registerToolStatusHintProvider } from "../tool-status-hints.js";
import { getSshStatusHintTarget } from "./ssh.js";

const PI_LOCAL_STATUS_ICON_SVG = `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M4.95 4.95h10.57V12H12v3.52H8.48v3.53H4.95zm3.53 3.53V12H12V8.48z"></path><path d="M15.52 12h3.52v7.05h-3.52z"></path></svg>`;
const BASH_STATUS_ICON_SVG = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3.5" y="5" width="17" height="14" rx="2"></rect><path d="M7.5 10l2.5 2-2.5 2"></path><path d="M12.5 15H16"></path></svg>`;

function readTrimmedString(...values: unknown[]): string | null {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return null;
}

function resolveLocalExecutionPath(record: Record<string, unknown> | null): string {
  return readTrimmedString(record?.cwd) || process.cwd();
}

registerToolStatusHintProvider({
  id: "local_core_tools",
  buildHints: ({ chatJid, toolName, args, payload }) => {
    if (!["read", "write", "edit", "bash"].includes(toolName)) return null;
    if (getSshStatusHintTarget(chatJid, payload)) return null;

    const record = args && typeof args === "object" ? args as Record<string, unknown> : null;
    if (toolName === "bash") {
      const label = resolveLocalExecutionPath(record);
      return {
        key: "bash",
        icon_svg: BASH_STATUS_ICON_SVG,
        label,
        title: `Local shell • ${label}`,
        kind: "service",
      };
    }

    const path = readTrimmedString(record?.path);
    if (!path) return null;

    const titlePrefix = toolName === "read"
      ? "Local read"
      : toolName === "write"
        ? "Local write"
        : "Local edit";

    return {
      key: toolName,
      icon_svg: PI_LOCAL_STATUS_ICON_SVG,
      label: path,
      title: `${titlePrefix} • ${path}`,
      kind: "file",
    };
  },
});

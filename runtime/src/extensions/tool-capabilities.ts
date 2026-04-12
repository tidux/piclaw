/**
 * tool-capabilities – compact capability metadata for internal tool discovery.
 *
 * Each entry describes a tool's behavioral profile so that list_internal_tools
 * can return actionable summaries without dumping full schemas.
 */

export type ToolKind = "read-only" | "mutating" | "mixed";
export type ToolWeight = "lightweight" | "standard" | "heavy";
export type ToolActivation = "default" | "on-demand";

export interface ToolCapability {
  /** Behavioral kind: read-only (no side-effects), mutating (writes/deletes), mixed (both). */
  kind: ToolKind;
  /** Execution weight hint: lightweight (fast, small output), standard, heavy (slow or large). */
  weight: ToolWeight;
  /** One-line capability summary for progressive discovery. */
  summary: string;
}

/**
 * Capability registry for known internal tools.
 *
 * Tools not in this map get a sensible default via `getToolCapability()`.
 */
const TOOL_CAPABILITIES: Record<string, ToolCapability> = {
  // core
  read:                   { kind: "read-only",  weight: "lightweight", summary: "Read file contents (text or image)." },
  bash:                   { kind: "mutating",   weight: "standard",    summary: "Execute a shell command; returns stdout/stderr." },
  powershell:             { kind: "mutating",   weight: "standard",    summary: "Execute a PowerShell command (Windows)." },
  edit:                   { kind: "mutating",   weight: "lightweight", summary: "Replace exact text in a file." },
  write:                  { kind: "mutating",   weight: "lightweight", summary: "Write content to a file (creates or overwrites)." },

  // discovery
  list_internal_tools:    { kind: "read-only",  weight: "lightweight", summary: "Discover available tools with capability metadata." },
  activate_tools:         { kind: "mutating",   weight: "lightweight", summary: "Enable tools for the current session." },
  reset_active_tools:     { kind: "mutating",   weight: "lightweight", summary: "Restore default active tool set." },

  // attachments
  attach_file:            { kind: "read-only",  weight: "lightweight", summary: "Attach a workspace file for user download." },
  read_attachment:        { kind: "read-only",  weight: "lightweight", summary: "Read an uploaded attachment by id." },
  export_attachment:      { kind: "mutating",   weight: "lightweight", summary: "Save an attachment to workspace for shell tools." },

  // model control
  get_model_state:        { kind: "read-only",  weight: "lightweight", summary: "Show current model and thinking level." },
  list_models:            { kind: "read-only",  weight: "lightweight", summary: "List available models." },
  switch_model:           { kind: "mutating",   weight: "lightweight", summary: "Change the active model." },
  switch_thinking:        { kind: "mutating",   weight: "lightweight", summary: "Change the thinking level." },

  // data
  messages:               { kind: "mixed",      weight: "standard",    summary: "Search, retrieve, add, post, or delete chat messages." },
  introspect_sql:         { kind: "read-only",  weight: "standard",    summary: "Read-only SQLite introspection (SELECT/PRAGMA only)." },
  keychain:               { kind: "mixed",      weight: "lightweight", summary: "List/get/set/delete secure keychain entries." },

  // workspace
  search_workspace:       { kind: "read-only",  weight: "standard",    summary: "Full-text search across workspace files." },
  open_drawio_editor:     { kind: "mutating",   weight: "standard",    summary: "Open a draw.io diagram in the web editor." },
  open_office_viewer:     { kind: "read-only",  weight: "standard",    summary: "Open an Office document in the viewer pane." },
  office_read:            { kind: "read-only",  weight: "standard",    summary: "Extract text/data from Office documents." },
  office_write:           { kind: "mutating",   weight: "heavy",       summary: "Create or modify Office documents." },
  open_workspace_file:    { kind: "read-only",  weight: "lightweight", summary: "Open a file in the web UI editor or popout." },

  // automation
  schedule_task:          { kind: "mutating",   weight: "standard",    summary: "Schedule a task to run later or on a recurring basis." },
  bun_run:                { kind: "mutating",   weight: "standard",    summary: "Execute a Bun script directly without a shell." },
  exec_batch:             { kind: "mutating",   weight: "heavy",       summary: "Run multiple commands in a batch." },
  search_tool_output:     { kind: "read-only",  weight: "lightweight", summary: "Search stored tool output by handle and query." },

  // remote
  ssh:                    { kind: "mixed",      weight: "standard",    summary: "Inspect or change the SSH profile; run remote commands." },
  proxmox:                { kind: "mixed",      weight: "standard",    summary: "Proxmox API: discover, workflows, and ad-hoc requests." },
  portainer:              { kind: "mixed",      weight: "standard",    summary: "Portainer API: discover, workflows, and ad-hoc requests." },

  // browser
  cdp_browser:            { kind: "mixed",      weight: "heavy",       summary: "Browser automation via Chrome DevTools Protocol." },

  // ui
  send_adaptive_card:     { kind: "mutating",   weight: "lightweight", summary: "Post an Adaptive Card to the web timeline." },
  send_dashboard_widget:  { kind: "mutating",   weight: "standard",    summary: "Post an interactive HTML widget to the timeline." },

  // experiments
  start_autoresearch:     { kind: "mutating",   weight: "heavy",       summary: "Launch an autonomous experiment loop in a sub-agent." },
  stop_autoresearch:      { kind: "mutating",   weight: "standard",    summary: "Stop the autoresearch sub-agent and generate a report." },
  autoresearch_status:    { kind: "read-only",  weight: "lightweight", summary: "Check autoresearch progress." },

  // lifecycle
  exit_process:           { kind: "mutating",   weight: "lightweight", summary: "Gracefully terminate piclaw for supervisor restart." },
};

const DEFAULT_CAPABILITY: ToolCapability = {
  kind: "mixed",
  weight: "standard",
  summary: "No capability summary available.",
};

/** Look up capability metadata for a tool. Returns a sensible default for unknown tools. */
export function getToolCapability(toolName: string): ToolCapability {
  return TOOL_CAPABILITIES[toolName] ?? DEFAULT_CAPABILITY;
}

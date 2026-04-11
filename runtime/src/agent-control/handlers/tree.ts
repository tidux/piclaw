/**
 * agent-control/handlers/tree.ts – Handler for the /tree command.
 *
 * Renders the session message tree in a compact text format, supporting
 * head/tail modes, pagination, summarisation, and label display.
 *
 * Consumers: agent-control-handlers.ts dispatches to this handler.
 */

import type { AgentSession } from "@mariozechner/pi-coding-agent";
import type { AgentControlCommand, AgentControlResult } from "../agent-control-types.js";
import { extractTextFromContent, formatCompactNumber, truncateText } from "../agent-control-helpers.js";

type TreeCommand = Extract<AgentControlCommand, { type: "tree" }>;
type LabelCommand = Extract<AgentControlCommand, { type: "label" }>;
type LabelsCommand = Extract<AgentControlCommand, { type: "labels" }>;
type SessionTreeNode = ReturnType<AgentSession["sessionManager"]["getTree"]>[number];
type SessionTreeEntry = SessionTreeNode["entry"];

function getToolCallName(content: unknown): string | null {
  if (!Array.isArray(content)) return null;
  for (const block of content) {
    if (!block || typeof block !== "object") continue;
    const candidate = block as { type?: unknown; name?: unknown };
    if (candidate.type === "toolCall" && typeof candidate.name === "string") {
      return candidate.name;
    }
  }
  return null;
}

function getEntryMeta(entry: SessionTreeEntry): Record<string, unknown> {
  const meta: Record<string, unknown> = {};
  if (entry.type !== "message") return meta;
  const msg = (entry.message && typeof entry.message === "object")
    ? (entry.message as unknown as Record<string, unknown>)
    : {};
  const role = typeof msg.role === "string" ? msg.role : null;
  if (role) meta.role = role;

  // Tool name for toolResult or toolCall
  if (role === "toolResult" && typeof msg.toolName === "string") {
    meta.toolName = msg.toolName;
  }
  const toolCallName = getToolCallName(msg.content);
  if (toolCallName) meta.toolName = toolCallName;

  // Content length
  const text = extractTextFromContent(msg.content);
  if (text) meta.contentLength = text.length;

  // Thinking flag
  const thinking = (msg as any).thinking;
  if (thinking) {
    const thinkingText = typeof thinking === "string" ? thinking : extractTextFromContent(thinking);
    if (thinkingText && thinkingText.length > 0) {
      meta.hasThinking = true;
      meta.thinkingLength = thinkingText.length;
    }
  }

  // Tool result output size
  if (role === "toolResult") {
    meta.contentLength = text ? text.length : 0;
  }

  return meta;
}

function describeEntry(entry: SessionTreeEntry): string {
  switch (entry.type) {
    case "message": {
      const msg = (entry.message && typeof entry.message === "object")
        ? (entry.message as unknown as Record<string, unknown>)
        : {};
      const role = typeof msg.role === "string" ? msg.role : "message";
      if (role === "toolResult") {
        const toolName = typeof msg.toolName === "string" ? msg.toolName : "tool";
        return `toolResult: ${toolName}`;
      }
      const content = msg.content;
      const text = extractTextFromContent(content);
      if (text) {
        return `${role}: "${truncateText(text, 80)}"`;
      }
      const toolCallName = getToolCallName(content);
      if (toolCallName) return `${role}: [tool ${toolCallName}]`;
      return role;
    }
    case "compaction":
      return `[compaction: ${formatCompactNumber(entry.tokensBefore)} tokens]`;
    case "branch_summary":
      return `[branch summary from ${entry.fromId}]`;
    case "thinking_level_change":
      return `[thinking ${entry.thinkingLevel}]`;
    case "model_change":
      return `[model ${entry.provider}/${entry.modelId}]`;
    case "custom":
      return `[custom ${entry.customType}]`;
    case "custom_message":
      return `[custom message ${entry.customType}]`;
    case "label":
      return `[label ${entry.label || "clear"}]`;
    case "session_info":
      return `[session name ${entry.name || "none"}]`;
  }
  return "[entry]";
}

/** Handle /tree: render the session message tree in text format. */
export async function handleTree(session: AgentSession, command: TreeCommand): Promise<AgentControlResult> {
  const sessionManager = session.sessionManager;
  const leafId = sessionManager.getLeafId();

  if (!command.targetId) {
    const roots = sessionManager.getTree();
    if (roots.length === 0) {
      return { status: "success", message: "Tree is empty." };
    }

    // Only return the widget block; the widget fetches live data from the API.
    const widgetBlock = {
      type: "generated_widget",
      widget_id: `session-tree-${Date.now()}`,
      title: "Session Tree",
      subtitle: `${roots.length > 0 ? 'Interactive session tree viewer' : 'Empty'}`,
      description: "",
      open_label: "Open tree viewer",
      auto_open: true,
      capabilities: ["interactive"],
      artifact: {
        kind: "session_tree",
        tree: { leafId },
      },
    };
    return { status: "success", message: "", contentBlocks: [widgetBlock] };
  }

  const options = {
    summarize: command.summarize ?? false,
    customInstructions: command.customInstructions,
    replaceInstructions: command.replaceInstructions,
    label: command.label,
  };

  try {
    const result = await session.navigateTree(command.targetId, options);
    if (result.cancelled) {
      return { status: "error", message: "Tree navigation cancelled." };
    }
    if (result.aborted) {
      return { status: "error", message: "Tree navigation aborted." };
    }
    if (result.editorText) {
      return {
        status: "success",
        message: `Navigation complete. Selected text:\n${result.editorText}`,
      };
    }
    return { status: "success", message: "Navigation complete." };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { status: "error", message };
  }
}

/** Handle /label: set or clear a label on a specific entry. */
export async function handleLabel(session: AgentSession, command: LabelCommand): Promise<AgentControlResult> {
  if (!command.targetId) {
    return { status: "error", message: "Usage: /label <entryId> <label|clear>" };
  }
  const rawLabel = command.label?.trim();
  const label = rawLabel && !["clear", "none", "off"].includes(rawLabel.toLowerCase()) ? rawLabel : "";
  session.sessionManager.appendLabelChange(command.targetId.trim(), label);
  return {
    status: "success",
    message: label ? `Label set on ${command.targetId}: ${label}` : `Label cleared on ${command.targetId}.`,
  };
}

/** Handle /labels: list all currently labeled entries. */
export async function handleLabels(session: AgentSession, _command: LabelsCommand): Promise<AgentControlResult> {
  const roots = session.sessionManager.getTree();
  const labels: Array<{ id: string; label: string; summary: string }> = [];

  const describeLabelEntry = (entry: SessionTreeEntry): string => {
    if (entry.type === "message") {
      const msg = (entry.message && typeof entry.message === "object")
        ? (entry.message as unknown as Record<string, unknown>)
        : {};
      const role = typeof msg.role === "string" ? msg.role : "message";
      const text = extractTextFromContent(msg.content);
      if (text) return `${role}: "${truncateText(text, 60)}"`;
      return role;
    }
    return `[${entry.type}]`;
  };

  const walk = (node: SessionTreeNode) => {
    if (node.label) {
      labels.push({ id: node.entry.id, label: node.label, summary: describeLabelEntry(node.entry) });
    }
    for (const child of node.children || []) {
      walk(child);
    }
  };

  for (const root of roots) walk(root);

  if (labels.length === 0) {
    return { status: "success", message: "No labels set." };
  }

  const lines = ["Labels:", ...labels.map((item) => `• ${item.id} [${item.label}] ${item.summary}`)];
  return { status: "success", message: lines.join("\n") };
}

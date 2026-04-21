/**
 * agent-pool/tool-factory.ts – Creates the default built-in tool set for agent sessions.
 *
 * Keeps tool construction separate from AgentPool orchestration so the pool can
 * compose a focused factory instead of owning direct SDK tool wiring.
 */
import { createBashToolDefinition } from "@mariozechner/pi-coding-agent";
/**
 * Creates the default built-in tool set for agent sessions.
 * On Windows, bash is omitted so the PowerShell extension can provide the active shell tool.
 */
export class AgentToolFactory {
    options;
    constructor(options) {
        this.options = options;
    }
    createDefaultTools() {
        const { platform = process.platform } = this.options;
        return [
            "read",
            ...(platform === "win32" ? [] : ["bash"]),
            "edit",
            "write",
        ];
    }
    /**
     * Returns custom ToolDefinitions that override the built-in tools.
     * The bash tool definition uses tracked operations for keychain env injection.
     */
    createCustomToolOverrides() {
        const { workspaceDir, bashOperations, platform = process.platform } = this.options;
        if (platform === "win32" || !bashOperations)
            return [];
        return [createBashToolDefinition(workspaceDir, { operations: bashOperations })];
    }
}

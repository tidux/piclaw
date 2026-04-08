# MCP via pi-mcp-adapter

PiClaw ships [`pi-mcp-adapter`](https://github.com/nicobailon/pi-mcp-adapter) so you can use external MCP servers without exposing every MCP tool directly in the base prompt.

## What ships

- bundled `pi-mcp-adapter` dependency
- automatic extension loading in PiClaw sessions
- project-local starter config at `.pi/mcp.json.example`
- workspace skill guidance under `.pi/skills/mcp-adapter/`

The adapter exposes one primary proxy tool:

```text
mcp({ ... })
```

and slash commands such as:

```text
/mcp
/mcp tools
/mcp reconnect
/mcp-auth <server>
```

## Config locations

### Preferred project-local config

```text
/workspace/.pi/mcp.json
```

Create it from the starter example:

```bash
cp /workspace/.pi/mcp.json.example /workspace/.pi/mcp.json
```

### Global Pi config

The adapter also supports Pi's global MCP config:

```text
/config/.pi/agent/mcp.json
```

In PiClaw, prefer the project-local file when the server configuration belongs to the current workspace.

## Minimal example

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "bunx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "."
      ],
      "lifecycle": "lazy"
    }
  }
}
```

## Typical flow

1. Create `.pi/mcp.json`
2. Add one or more MCP servers
3. Restart PiClaw or reload the session
4. Discover tools with:
   - `mcp({})`
   - `mcp({ search: "..." })`
   - `/mcp`
5. Call tools through the proxy:

```text
mcp({ tool: "filesystem_read_file", args: "{\"path\":\"./README.md\"}" })
```

`args` must be a JSON string.

## Notes

- `pi-mcp-adapter` does not require `mcp-cli`.
- MCP servers are lazy by default, so they do not connect until first use.
- Keep large MCP servers behind the proxy unless you intentionally want `directTools`.
- If you want some MCP tools to appear as first-class Pi tools, use the adapter's `directTools` config.

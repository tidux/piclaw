# PiClaw Editor LSP Design Plan

## Summary

PiClaw adds editor-first LSP support as a dedicated backend service plus CodeMirror integration seam, rather than embedding protocol logic directly into the pane or coupling it to agent workflows.

This design fits the existing runtime because PiClaw already has:

- Authenticated HTTP and WebSocket services
- Long-lived per-user browser sessions
- Packaged runtime extensions
- Pane-based editor mounting
- Existing session-oriented browser services like terminal and VNC

## Product Scope

### V1

Editor essentials only:

- Diagnostics
- Hover
- Go to definition
- Completion

Server model:

- PiClaw discovers and runs workspace-installed language servers
- PiClaw does not install servers automatically

Initial curated language matrix:

- TypeScript via `typescript-language-server --stdio`
- Python via `pyright-langserver --stdio`
- Go via `gopls`
- Rust via `rust-analyzer`

### V2

Added on top of the same transport and session model:

- Find references
- Rename symbol

## Backend Architecture

### LSP Session Service

The backend owns LSP session lifecycle in a dedicated service.

Responsibilities:

- Resolve the authenticated browser user/session that owns an editor connection
- Map workspace files to curated language-server profiles
- Start or reuse language-server processes keyed by workspace root, user/session, and language profile
- Speak stdio JSON-RPC to language-server processes
- Translate PiClaw browser messages into LSP requests and notifications
- Route server responses and notifications back to the correct editor client

Session lifecycle:

- One PiClaw-managed LSP session per `(workspace root, owner, language profile)`
- Sessions are reused across files within the same root/profile
- Idle sessions expire after a grace period
- All child processes are tracked and terminated on shutdown

### Server Discovery

PiClaw uses a curated registry instead of guessing arbitrary executables from `PATH`.

Each profile defines:

- Language id
- File extensions
- Project-root markers
- Command and args
- Whether single-file fallback is allowed
- Initialization defaults

Resolution rules:

- Resolve the file relative to the workspace
- Find the nearest supported project root
- Prefer workspace-local executables when available
- Fall back to global `PATH`
- Return a non-blocking unavailable state when no matching server is available

## Web API and Transport

PiClaw exposes authenticated LSP endpoints analogous to terminal/VNC.

HTTP:

- `GET /lsp/session`
- `POST /lsp/handoff`

WebSocket:

- `WS /lsp/ws`

Browser message contract:

- `open_document`
- `change_document`
- `close_document`
- `completion`
- `hover`
- `definition`
- `references`
- `rename`

Server-pushed or response messages:

- `session`
- `ready`
- `error`
- `diagnostics`
- `completion_result`
- `hover_result`
- `definition_result`
- `references_result`
- `rename_result`

PiClaw owns this browser contract so the frontend never speaks raw LSP framing directly.

## Editor Integration

The existing CodeMirror pane remains the editor surface.

Editor responsibilities:

- Detect whether the current file has curated LSP support
- Create a browser-side LSP adapter
- Open/change/close documents in sync with editor lifecycle
- Render diagnostics through CodeMirror lint state
- Use hover tooltips for hover requests
- Use completion overrides for completion requests
- Jump to definitions and references through the existing pane/tab event flow
- Surface lightweight LSP status in the editor footer

Behavioral goals:

- LSP is additive, not a replacement for the editor
- Save/search/vim/whitespace/conflict monitoring still work normally
- Missing or broken LSP degrades to plain editing
- Cross-file navigation opens editor tabs with restored cursor position

## V2 Interaction Design

### Find References

- Triggered from the editor with `Shift+F12`
- Requests `textDocument/references`
- Uses the first result for immediate navigation
- Reports result count in editor status text
- Reuses the existing custom `editor:open-tab` event for cross-file jumps

### Rename Symbol

- Triggered from the editor with `F2`
- Prompts for a new symbol name
- Requests `textDocument/rename`
- Applies returned workspace edits across files
- Persists changed files through the existing workspace file API
- Refreshes the active editor content and LSP document state after applying edits

## Public Types and Interfaces

Key backend types:

- `LspServerProfile`
- `ResolvedLspTarget`
- `LspSessionOwner`
- `LspSocketData`
- `LspSessionInfo`
- `LspSessionService`

Key frontend pieces:

- Browser-side `createLspClientAdapter(...)`
- CodeMirror diagnostics mapping
- Editor capability gating based on server-advertised capabilities

## Out of Scope

Still intentionally out of scope:

- Code actions
- Formatting on save
- Workspace symbols/global symbol search
- Agent/tool-driven LSP access
- Automatic server installation/bootstrap

These can be layered onto the same session and transport model later.

## Validation Strategy

Backend/session coverage:

- Starts the right server for supported file types
- Reuses sessions within the same root
- Rejects files outside the current session root
- Serializes definitions, references, and workspace edits into PiClaw-friendly payloads

Transport/API coverage:

- Authenticated session probing and handoff
- WebSocket upgrade routing
- Ownership and CSRF checks

Frontend coverage:

- Pane/tab event routing for editor-driven navigation
- LSP client adapter request and reconnect behavior
- Editor contract stability

Manual validation targets:

- Open a TypeScript/Python/Go/Rust file and confirm diagnostics update after edits
- Trigger completion and hover in a supported file
- Use `F12` for definitions
- Use `Shift+F12` for references
- Use `F2` for rename across one or more files
- Confirm unsupported files still behave like normal non-LSP editor tabs

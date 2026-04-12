---
id: dynamic-slash-command-autocomplete
title: Dynamic slash command autocomplete from registered commands and extensions
status: next
created: 2026-04-10
updated: 2026-04-12
tags:
  - work-item
  - kanban
  - web
  - ux
  - extensions
  - compose-box
owner: pi
origin: "https://github.com/rcarmo/piclaw/issues/18"
---

# Dynamic slash command autocomplete from registered commands and extensions

## Summary

The compose-box slash command autocomplete list is currently hardcoded in
`compose-box.ts`. Extension-registered commands work but do not appear in
the autocomplete dropdown, creating a discoverability gap.

Issue #18 highlights this with a small patch that adds two more hardcoded
entries. The real fix is to source the autocomplete list dynamically from
the server's registered command set (core + extensions).

This pairs naturally with the `/extensions` per-chat management workitem
in `10-next` — once extensions can be toggled per chat, the autocomplete
should reflect the active command surface.

## Origin

- GitHub issue: https://github.com/rcarmo/piclaw/issues/18 (item 4)
- External patch: `05-web-update-autocomplete.patch`
- Repo: https://github.com/aliceisjustplaying/piclaw-customizations

## Acceptance Criteria

- [ ] The compose-box autocomplete list is sourced from a backend endpoint
      or SSE-delivered registry, not hardcoded.
- [ ] Extension-registered commands appear in autocomplete.
- [ ] Commands removed by per-chat extension toggles disappear from autocomplete.
- [ ] The hardcoded `SLASH_COMMANDS` list becomes a fallback or is removed.
- [ ] No regression in autocomplete speed or UX.

## Implementation Paths

### Path A — Backend /agent/commands endpoint (recommended)
Add a `GET /agent/commands` endpoint that returns the current session's
registered commands with name + description. The compose-box fetches on
mount or listens for a command-registry SSE event.

### Path B — SSE push on session bind
Include the command list in the session-ready SSE payload. Simpler but
less responsive to mid-session extension changes.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Interaction scenario test
- [ ] Unit test: endpoint returns core + extension commands
- [ ] Unit test: toggling an extension removes its commands from the list
- [ ] Frontend test: autocomplete renders dynamic entries

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Tests added or updated — passing locally
- [ ] Type check clean
- [ ] Docs and notes updated with links to ticket
- [ ] Operational impact assessed
- [ ] Follow-up tickets created for deferred scope
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Updates

### 2026-04-10
- Created from GitHub issue #18 triage. The hardcoded-entry patch is
  rejected but the underlying need is strong and self-contained.
- Related: `add-per-chat-extensions-command-and-card` in 10-next.

## Notes

## Links

- https://github.com/rcarmo/piclaw/issues/18
- `workitems/10-next/add-per-chat-extensions-command-and-card.md`
- `runtime/web/src/components/compose-box.ts`
- `runtime/src/agent-pool/slash-command.ts`
- `runtime/src/agent-control/command-parsers.ts`

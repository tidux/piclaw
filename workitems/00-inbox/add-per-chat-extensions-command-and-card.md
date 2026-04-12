---
id: add-per-chat-extensions-command-and-card
title: Add per-chat /extensions command and adaptive-card extension manager
status: inbox
priority: medium
created: 2026-03-31
updated: 2026-04-12
target_release: next
estimate: L
risk: high
tags:
  - work-item
  - kanban
  - extensions
  - web
  - adaptive-cards
  - chat-state
  - session
  - ux
owner: pi
blocked-by: []
---

# Add per-chat /extensions command and adaptive-card extension manager

## Summary

Add a web-only `/extensions` command that opens an Adaptive Card for managing
which extensions are active for the **current chat**.

The card should present loaded extensions in grouped sections with a responsive
**two-column desktop / one-column narrow-screen** layout, allow whole-extension
on/off toggles, apply changes immediately by rebinding the current chat
session, and persist the resolved enabled-extension set in the DB per chat.

Future child/sub-agents launched from that chat should inherit the updated set
by default, but already-running child workflows must remain untouched.

## Why

Piclaw currently loads built-in and packaged extensions into sessions, but there
is no user-facing way to inspect or change the active extension set per chat.
That makes it hard to:

- trim tool/command surface area for a specific conversation
- isolate experimental/bundled/workspace-local extensions
- prepare a chat for a focused workflow like autoresearch or future sub-agents
- understand which extensions are actually active in the current session

## Refinement decisions (2026-03-31)

| Topic | Decision |
|---|---|
| Scope | Per-chat/session extension profile |
| New-chat default | Inherit from the most recently used chat |
| Grouping | Custom grouped presentation |
| Group template | Core, Optional bundled, Experimental, Workspace-local, Operator/admin |
| Core toggle rule | Some core extensions may still be disableable |
| Child behavior | Future child/sub-agents inherit by default |
| Running child behavior | Already-running child workflows are untouched |
| Apply timing | Apply immediately and rebind the current chat session |
| Conflict handling | Auto-correct selection |
| Conflict UX | Apply, then re-render the card with a summary |
| Row detail | Name + description + group + dependency badges |
| Toggle granularity | Whole extension only |
| Persistence | DB per chat |
| Stored profile shape | Explicit enabled-extension list |
| Dependency model | Prefer dynamic inference from the live extension mechanism |
| Unavailable extensions | Show disabled with a reason |
| Channel scope | Web-only for v1 |
| Non-web behavior | Plain fallback message only |
| Bulk actions | None in v1 |
| Rebind failure | Roll back automatically and show an error summary |
| Discovery refresh | `/commands` and tool availability update immediately after rebind |
| Timeline persistence | Card updates in place only; no separate receipt message |
| Inventory source | Only extensions that successfully loaded for this runtime build |
| Permissions | Any user in the current web chat may use it in v1 |

## Desired Behavior

- A user in a web chat runs `/extensions`.
- Piclaw opens an Adaptive Card showing the current chat's extension set.
- Extensions are shown in grouped sections.
- Desktop layout uses two columns; narrow/mobile collapses to one column.
- Each extension row shows:
  - name
  - one-line description
  - group
  - dependency badges
- Toggling is whole-extension only.
- On submit:
  1. Piclaw computes the resolved set using dependency-aware auto-correction.
  2. The new enabled-extension list is persisted for that chat.
  3. The current chat session is rebound/recreated safely.
  4. If rebind succeeds, the card re-renders with a summary of applied changes.
  5. If rebind fails, Piclaw rolls back to the previous set and re-renders the card with an error summary.
- Future child/sub-agents launched from that chat inherit the updated set by default.
- Already-running child workflows are left alone.
- `/commands` and extension-driven tool discovery reflect the new active set immediately.

## Acceptance Criteria

- [ ] `/extensions` exists and is routed as a web-capable slash command.
- [ ] The current chat has a persisted enabled-extension list in the DB.
- [ ] New chats inherit the resolved extension set from the most recently used chat.
- [ ] The card shows grouped extension rows with:
  - [ ] name
  - [ ] one-line description
  - [ ] group label
  - [ ] dependency badges
- [ ] The card uses two columns on desktop and one column on narrow/mobile layouts.
- [ ] Unavailable extensions are shown disabled with a reason.
- [ ] Submit applies dependency-aware auto-correction and re-renders the card with a summary.
- [ ] The current chat session is rebound/recreated immediately after apply.
- [ ] Rebind failure rolls back automatically to the prior extension set.
- [ ] Future child/sub-agents inherit the chat's resolved extension set by default.
- [ ] Already-running child/sub-agent workflows are not modified.
- [ ] `/commands` and tool availability reflect the updated active set immediately.
- [ ] No extra timeline receipt message is posted; the card updates in place only.

## Non-goals

- No non-web management UX in v1.
- No per-tool/per-command toggles in v1.
- No bulk enable/disable actions in v1.
- No requirement to rebind already-running child/sub-agent workflows.
- No broad extension-marketplace or install/uninstall flow.
- No guarantee that dynamic dependency inference is perfect for all future extensions without fallback metadata.

## Likely hook points / implementation surfaces

### 1. Extension inventory + load path
Current built-in extension registry and packaged-extension path live here:
- `runtime/src/extensions/index.ts`
- `runtime/src/agent-pool/session.ts`

Important current behavior:
- `builtinExtensionFactories` are passed into `DefaultResourceLoader`
- packaged/runtime extensions are loaded through `additionalExtensionPaths`
- `getBundledExtensionPaths()` already gates some packaged extensions by env

This is the most likely place to add:
- stable extension identifiers
- grouping/source classification
- inventory of successfully loaded extensions for the current runtime build

### 2. Per-chat session creation / rebinding
The main session lifecycle runs through:
- `runtime/src/agent-pool/session-manager.ts`
- `runtime/src/agent-pool/session.ts`
- `runtime/src/agent-pool/service-factory.ts`

Likely changes:
- pass a per-chat enabled-extension set into session creation
- add a safe “recreate/rebind current session with new extension set” path
- ensure child-session creation inherits the chat's resolved set by default

### 3. Slash command routing
Existing slash-command handling runs through:
- `runtime/src/agent-pool/slash-command.ts`
- `runtime/src/agent-control/command-parsers.ts`
- `runtime/src/agent-control/handlers/*`

Likely choices:
- either add `/extensions` as an agent-control command with explicit web card behavior
- or register it as an extension command, then bridge it into web Adaptive Card handling

Given the per-chat persistence + session-rebind behavior, a core/server-side command path is likely simpler than treating this as a normal prompt-driven extension command.

### 4. Web card submit + card update flow
Relevant existing card/UI patterns live around:
- `runtime/src/channels/web/handlers/*`
- `runtime/src/channels/web/cards/*`
- `runtime/src/channels/web.ts`
- `runtime/web/src/components/post.ts`
- `runtime/web/src/app.ts`

Likely work:
- add a dedicated adaptive-card action handler for `/extensions`
- render/update the card in place after apply or rollback
- support responsive grouped layout within the current web card runtime

### 5. Extension UI/session bridge
Current extension UI bridge exists here:
- `runtime/src/channels/web/theming/ui-bridge.ts`

This is relevant if the implementation wants to reuse extension UI plumbing, but the `/extensions` flow may still fit better as a direct server-owned adaptive-card feature rather than routing through `ExtensionUIContext`.

### 6. Persistence layer
Per-chat persistence likely needs a DB-backed home. Existing chat identity/state surfaces include:
- `runtime/src/db/connection.ts`
- `runtime/src/db/chat-branches.ts`

Likely implementation need:
- add a small chat-extension-profile table or chat-branch-attached extension state
- store explicit enabled-extension IDs by chat JID / branch
- support inheritance when creating a new chat from the most recently used chat

## DB schema + endpoint draft

### Suggested DB table

```sql
CREATE TABLE IF NOT EXISTS chat_extension_profiles (
  chat_jid TEXT PRIMARY KEY,
  enabled_extensions_json TEXT NOT NULL,
  revision INTEGER NOT NULL DEFAULT 1,
  inherited_from_chat_jid TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_chat_extension_profiles_updated_at
  ON chat_extension_profiles(updated_at);
```

### Row semantics

- `chat_jid`
  - chat/session identifier owning the extension profile
- `enabled_extensions_json`
  - sorted JSON array of resolved enabled extension ids
- `revision`
  - optimistic concurrency / stale card submit protection
- `inherited_from_chat_jid`
  - provenance for new-chat inheritance
- `created_at`, `updated_at`
  - audit/debug timestamps

### Suggested runtime shape

```ts
type ChatExtensionProfileSnapshot = {
  chat_jid: string;
  revision: number;
  enabled_extension_ids: string[];
  inherited_from_chat_jid: string | null;
  inventory: ExtensionInventoryItem[];
};

type ApplyExtensionsResult = {
  ok: boolean;
  chat_jid: string;
  revision: number;
  previous_enabled_extension_ids: string[];
  requested_enabled_extension_ids: string[];
  resolved_enabled_extension_ids: string[];
  summary: {
    enabled: string[];
    disabled: string[];
    auto_disabled: Array<{ id: string; reason: string }>;
    unavailable: Array<{ id: string; reason: string }>;
    rollback: boolean;
  };
  inventory: ExtensionInventoryItem[];
  error?: {
    code: string;
    message: string;
  };
};
```

### Suggested endpoints

#### `GET /chat/extensions?chat_jid=<jid>`
Returns the current persisted per-chat extension profile plus live inventory for card rendering.

#### `POST /chat/extensions/apply`
Request body:

```json
{
  "chat_jid": "web:foobar",
  "revision": 4,
  "enabled_extension_ids": ["messages", "model-control", "workspace-search"]
}
```

Behavior:
1. load current profile
2. derive live extension inventory from currently loaded runtime extensions
3. resolve availability + inferred dependencies
4. auto-correct requested set
5. persist resolved set
6. rebind/recreate current chat session
7. rollback to previous set if rebind fails

### New-chat inheritance rule

When a new chat is created:
1. find the most recently used chat with an extension profile
2. copy its resolved enabled extension set
3. create a new `chat_extension_profiles` row for the new chat
4. record `inherited_from_chat_jid`

## Key implementation risks

- The current extension mechanism may not expose enough metadata to infer dependencies cleanly.
- Built-in factories and packaged extension paths use different loading shapes.
- Session rebinding must not break chat continuity or leave partially applied command/tool state.
- Child/sub-agent inheritance needs a clear default handoff path even if future sub-agent systems differ from today’s autoresearch implementation.
- Adaptive Card responsive layout may require host/runtime support validation if dual-column structure pushes current card rendering assumptions.

## Recommended implementation path

### Path A — inventory + per-chat persistence + direct web card (recommended)
1. Build a first-class extension inventory surface from the current runtime load path.
2. Add per-chat DB persistence for explicit enabled-extension IDs.
3. Add a safe session rebind/recreate path using that persisted set.
4. Add `/extensions` as a server-owned web Adaptive Card flow.
5. Layer in dependency inference + auto-correction.
6. Add new-chat inheritance from the most recently used chat.

**Pros:** clear ownership, easier transactional rollback, simpler web UX control.

**Cons:** requires touching session creation + persistence + web card plumbing.

### Path B — extension-command-first approach
1. Implement `/extensions` as an extension command.
2. Reuse extension UI bridge infrastructure to drive selection.
3. Bolt chat persistence + rebind behavior onto that flow.

**Pros:** more aligned with “extensions manage extensions” conceptually.

**Cons:** likely awkward because the feature is really runtime/session infrastructure, not just another extension.

## Test Plan

### Backend / lifecycle
- [ ] Per-chat enabled-extension set persists and reloads across restart.
- [ ] New chats inherit the most recently used chat's resolved extension set.
- [ ] Session rebind applies the new extension set for the current chat.
- [ ] Rebind failure rolls back to the prior set.
- [ ] Future child/sub-agents inherit the chat's resolved extension set by default.
- [ ] Already-running child workflows are left unchanged.

### Dependency handling
- [ ] Auto-correction removes dependent extensions when required inputs are disabled.
- [ ] Auto-correction summary is returned deterministically.
- [ ] Unavailable extensions are represented with disabled state + reason.

### Web / Adaptive Card
- [ ] `/extensions` opens a card in web chats.
- [ ] Card renders grouped rows with expected metadata.
- [ ] Desktop layout uses two columns; narrow/mobile collapses to one column.
- [ ] Submit updates the card in place on success.
- [ ] Submit updates the card in place with rollback/error summary on failure.
- [ ] No extra receipt message is posted.

### Discovery surfaces
- [ ] `/commands` output changes immediately after apply.
- [ ] Tool/command availability matches the resolved extension set after rebind.

## Definition of Done

- [ ] Per-chat extension profile exists and persists in DB.
- [ ] `/extensions` adaptive-card flow works in web.
- [ ] Session rebind and rollback semantics are implemented.
- [ ] Dependency-aware auto-correction is implemented.
- [ ] New-chat inheritance works.
- [ ] Discovery surfaces update immediately after apply.
- [ ] Tests cover persistence, rebind, dependency handling, and card behavior.
- [ ] Ticket history records the implementation evidence and moved files/surfaces.

## Updates

### 2026-04-06
- Board quality review: added the missing readiness score for the current refined shape.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)
- Gap: the runtime dependency-inference/rebind seam is well sketched but not yet proven enough to count dependencies as fully mapped.

### 2026-03-31
- Created from feature-refinement pass for per-chat extension selection.
- Initial implementation recommendation: treat this as runtime/session infrastructure plus a server-owned web Adaptive Card flow, not just as another extension command.
- Primary open technical unknown is whether dynamic dependency inference from the current extension mechanism is strong enough on its own or will need fallback metadata for some extensions.

## Links

- `runtime/src/extensions/index.ts`
- `runtime/src/agent-pool/session.ts`
- `runtime/src/agent-pool/session-manager.ts`
- `runtime/src/agent-pool/slash-command.ts`
- `runtime/src/channels/web/theming/ui-bridge.ts`
- `runtime/src/db/chat-branches.ts`
- `runtime/src/db/connection.ts`
- `runtime/src/channels/web/handlers/`
- `runtime/web/src/app.ts`
- `runtime/web/src/components/post.ts`
- `workitems/50-done/autoresearch-sub-agent-supervisor.md`

# Regression test planning reference for tickets entering `20-doing`

Use this reference whenever a ticket moves from `10-next/` to `20-doing/`.

The goal is to reduce UX regressions during refactors by choosing the right
kind of regression coverage up front, not after a bug report arrives.

## Why this exists

Recent piclaw regressions have clustered around:

- chat/session routing drift
- queue and turn-state desynchronization
- reload/reconnect/restore behavior
- event-ordering bugs across multi-step interactions
- pane pop-out / detach / reattach lifecycle bugs
- contract drift during refactors

These failures are usually not caused by a single pure helper returning the
wrong value. They are more often caused by cross-layer behavior changing while
all local unit tests still pass.

## Required lane-change question

Before moving a ticket to `20-doing/`, answer this in the ticket's `## Test Plan`:

> Which regression classes does this ticket risk, and which tests will pin them?

Record the answer explicitly. If none apply, say why.

## Regression classes to consider

### 1. Bug replay / known-regression test

Use when:
- the ticket fixes a user-reported bug
- the failure already happened before
- the work touches an area with a known historical regression

Add:
- a named regression test that reproduces the reported bug path
- the workitem path / bug ID in the test or update notes

Examples:
- queue item removal causing message loss
- first click after upload failing to add a file pill
- adaptive-card submission jumping to `web:default`

### 2. State-machine / invariant test

Use when the ticket changes:
- queue behavior
- streaming / active-turn behavior
- recovery / replay logic
- multi-step submission lifecycles
- session ownership / branch state

Pin invariants such as:
- FIFO ordering
- no message exists in neither queue nor timeline
- thread root remains stable across retry/replay
- only explicit steering affects the active turn early

### 3. Routing matrix test

Use when the ticket affects:
- chat/session resolution
- thread ownership
- branch routing
- peer-message routing
- adaptive-card submission routing
- same-chat control-command behavior

Test combinations like:
- correct `chat_jid`
- missing `chat_jid`
- wrong `chat_jid`
- thread present / absent
- non-web chat sources

Pin the rule that valid source metadata must win over silent fallback.

### 4. Interaction scenario test

Use when the ticket changes UI event ordering or optimistic state.

Best for:
- explorer/compose interactions
- cancel vs steer controls
- selection/preview/attach flows
- multi-click timing paths

These should simulate real user sequences, for example:
- upload → first click → preview + pill
- queued item → cancel → removed, not steered
- selected row after programmatic selection → first explicit click follows normal action path

### 5. Restore / reconnect matrix test

Use when the ticket affects persisted or reconnect-sensitive UI state.

Best for:
- reload behavior
- SSE reconnect behavior
- restart recovery
- resumed session state
- layout-scoped browser preferences

Test transitions like:
1. initial state
2. user action
3. reload / reconnect / restart
4. restored UI state

Pin that:
- backend truth remains authoritative
- browser-local state only affects local dismissal/polish
- stale state does not leak across chats, sessions, or layouts

### 6. Pane / viewer contract test

Use when the ticket affects editor/viewer routing or pop-out behavior.

Pin:
- pane registry resolution
- standalone route vs generic pop-out behavior
- title expectations
- detach / reattach support
- live transfer vs reopen semantics

These tests protect against drift during refactors even when the UI still loads.

### 7. Real-browser smoke test

Use when the ticket changes true browser lifecycle behavior that unit tests
cannot reliably model.

Best for:
- popup creation timing
- detached-window ownership
- close-time reattach behavior
- WebSocket transfer preservation
- Safari / browser-specific behavior

Keep these narrow and intentional. Prefer a small stable smoke pack over broad,
fragile end-to-end coverage.

## Suggested minimum by change type

| Change type | Minimum regression coverage to plan before `doing` |
|---|---|
| Bug fix | Bug replay test |
| Behavior-preserving refactor in risky area | Existing suite + at least one invariant / routing / contract test for touched behavior |
| Queue / recovery / session lifecycle change | State-machine or restore/reconnect test |
| Routing / chat ownership / thread change | Routing matrix test |
| UI interaction change | Interaction scenario test |
| Pop-out / detach / viewer routing change | Pane/viewer contract test + browser smoke note if lifecycle-sensitive |
| Docs/config only | State why no regression test is needed |

## `next → doing` checklist addition

When moving a ticket to `20-doing/`, make sure its `## Test Plan` includes:

- [ ] Existing tests to rerun
- [ ] New regression coverage to add
- [ ] Which regression classes from this reference apply
- [ ] Whether a real-browser smoke pass is required

## Review gate follow-through

When moving `doing → review`, verify that the planned regression coverage was
actually added or consciously waived with a written reason in `## Updates`.

That means a refactor ticket should not only say "all tests pass" — it should
also show that the ticket pinned the user-visible behavior most likely to drift.

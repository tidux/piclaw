import { expect, test } from 'bun:test';

import { handleAppSseEvent, type HandleAppSseEventDependencies } from '../../web/src/ui/app-sse-events.js';

function applyUpdate<T>(current: T, next: T | ((prev: T) => T)): T {
  return typeof next === 'function' ? (next as (prev: T) => T)(current) : next;
}

function createDeps() {
  let extensionPanels = new Map<string, any>();
  let pendingPanelActions = new Set<string>(['panel-a:run', 'autoresearch:stop']);
  let followupQueueItems: Array<{ row_id: string; content?: string }> = [
    { row_id: 'row-1', content: 'first' },
    { row_id: 'row-2', content: 'second' },
  ];
  const toastCalls: Array<[string, string | null | undefined, string | undefined, number | undefined]> = [];
  const clearQueueCalls: number[] = [];
  let refreshQueueCalls = 0;

  const deps: HandleAppSseEventDependencies = {
    currentChatJid: 'chat:alpha',
    updateAgentProfile: () => undefined,
    updateUserProfile: () => undefined,

    currentTurnIdRef: { current: null },
    activeChatJidRef: { current: 'chat:alpha' },
    pendingRequestRef: { current: null },
    draftBufferRef: { current: '' },
    thoughtBufferRef: { current: '' },
    steerQueuedTurnIdRef: { current: null },
    thoughtExpandedRef: { current: false },
    draftExpandedRef: { current: false },
    draftThrottleRef: { current: 0 },
    thoughtThrottleRef: { current: 0 },
    viewStateRef: { current: { currentHashtag: null, searchQuery: null, searchOpen: false } },
    followupQueueItemsRef: { current: followupQueueItems },
    dismissedQueueRowIdsRef: { current: new Set<string | number>() },
    scrollToBottomRef: { current: null },
    hasMoreRef: { current: false },
    loadMoreRef: { current: null },
    lastAgentResponseRef: { current: null },
    wasAgentActiveRef: { current: false },

    setActiveTurn: () => undefined,
    applyLiveGeneratedWidgetUpdate: () => undefined,
    setFloatingWidget: () => undefined,
    clearLastActivityFlag: () => undefined,
    handleUiVersionDrift: () => false,
    setAgentStatus: () => undefined,
    setAgentDraft: () => undefined,
    setAgentPlan: () => undefined,
    setAgentThought: () => undefined,
    setPendingRequest: () => undefined,
    clearAgentRunState: () => undefined,
    getAgentStatus: async () => null,
    noteAgentActivity: () => undefined,
    showLastActivity: () => undefined,
    refreshTimeline: () => undefined,
    refreshModelAndQueueState: () => undefined,
    refreshActiveChatAgents: () => undefined,
    refreshCurrentChatBranches: () => undefined,
    notifyForFinalResponse: () => undefined,
    setContextUsage: () => undefined,
    refreshContextUsage: () => undefined,
    refreshQueueState: () => {
      refreshQueueCalls += 1;
    },
    setFollowupQueueItems: (next) => {
      followupQueueItems = applyUpdate(followupQueueItems, next);
      deps.followupQueueItemsRef.current = followupQueueItems;
    },
    clearQueuedSteerStateIfStale: (remainingQueueCount) => {
      clearQueueCalls.push(remainingQueueCount);
    },
    setSteerQueuedTurnId: () => undefined,
    applyModelState: () => undefined,
    getAgentContext: async () => null,
    setExtensionStatusPanels: (next) => {
      extensionPanels = applyUpdate(extensionPanels, next);
    },
    setPendingExtensionPanelActions: (next) => {
      pendingPanelActions = applyUpdate(pendingPanelActions, next);
    },
    refreshActiveEditorFromWorkspace: () => undefined,
    showIntentToast: (title, detail, kind, durationMs) => {
      toastCalls.push([title, detail, kind, durationMs]);
    },
    removeStalledPost: () => undefined,
    setPosts: () => undefined,
    preserveTimelineScrollTop: (mutate) => mutate(),
  };

  return {
    deps,
    getExtensionPanels: () => extensionPanels,
    getPendingPanelActions: () => pendingPanelActions,
    getFollowupQueueItems: () => followupQueueItems,
    getToastCalls: () => toastCalls,
    getClearQueueCalls: () => clearQueueCalls,
    getRefreshQueueCalls: () => refreshQueueCalls,
  };
}

test('handleAppSseEvent routes status-panel widget events and clears finished pending actions', () => {
  const state = createDeps();

  handleAppSseEvent('extension_ui_widget', {
    key: 'panel-a',
    chat_jid: 'chat:alpha',
    options: { surface: 'status-panel' },
    content: [{ type: 'status_panel', panel: { state: 'done', title: 'Complete' } }],
  }, state.deps);

  expect(state.getExtensionPanels().get('panel-a')).toEqual({ state: 'done', title: 'Complete' });
  expect(Array.from(state.getPendingPanelActions())).toEqual(['autoresearch:stop']);
});

test('handleAppSseEvent removes followup rows on removal events and schedules queue refresh', () => {
  const state = createDeps();

  handleAppSseEvent('agent_followup_removed', {
    chat_jid: 'chat:alpha',
    row_id: 'row-1',
  }, state.deps);

  expect(state.deps.dismissedQueueRowIdsRef.current.has('row-1')).toBe(true);
  expect(state.getFollowupQueueItems().map((item) => item.row_id)).toEqual(['row-2']);
  expect(state.getClearQueueCalls()).toEqual([1]);
  expect(state.getRefreshQueueCalls()).toBe(1);
});

test('handleAppSseEvent maps extension notify events into intent toasts', () => {
  const state = createDeps();

  handleAppSseEvent('extension_ui_notify', {
    chat_jid: 'chat:alpha',
    message: 'Widget synced',
    type: 'success',
  }, state.deps);

  expect(state.getToastCalls()).toEqual([
    ['Widget synced', null, 'success', undefined],
  ]);
});

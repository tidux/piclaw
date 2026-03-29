import { expect, test } from 'bun:test';

import {
  refreshAutoresearchStatusForChat,
  refreshContextUsageForChat,
  refreshCurrentView,
  refreshModelAndQueueState,
  refreshQueueStateForChat,
} from '../../web/src/ui/app-status-refresh-orchestration.js';

type QueueRow = { row_id: string; content?: string };

test('refreshQueueStateForChat keeps only newest non-dismissed queue rows', async () => {
  const queueRefreshGenRef = { current: 0 };
  const activeChatJidRef = { current: 'chat:alpha' };
  const dismissedQueueRowIdsRef = { current: new Set<string | number>(['row-dismissed']) };
  const clearCounts: number[] = [];

  let queueRows: QueueRow[] = [{ row_id: 'row-old' }];
  refreshQueueStateForChat<QueueRow>({
    currentChatJid: 'chat:alpha',
    queueRefreshGenRef,
    activeChatJidRef,
    dismissedQueueRowIdsRef,
    getAgentQueueState: async () => ({
      items: [
        { row_id: 'row-dismissed', content: 'hidden' },
        { row_id: 'row-visible', content: 'keep' },
      ],
    }),
    setFollowupQueueItems: (next) => {
      queueRows = typeof next === 'function' ? next(queueRows) : next;
    },
    clearQueuedSteerStateIfStale: (remainingQueueCount) => {
      clearCounts.push(remainingQueueCount);
    },
  });

  await Promise.resolve();

  expect(queueRows).toEqual([{ row_id: 'row-visible', content: 'keep' }]);
  expect(clearCounts).toEqual([]);
});

test('refreshQueueStateForChat drops stale refresh generations and clears queue on empty payload', async () => {
  const queueRefreshGenRef = { current: 0 };
  const activeChatJidRef = { current: 'chat:alpha' };
  const dismissedQueueRowIdsRef = { current: new Set<string | number>(['row-dismissed']) };
  const clearCounts: number[] = [];

  let resolvePayload: ((value: { items: QueueRow[] }) => void) | null = null;
  let queueRows: QueueRow[] = [{ row_id: 'row-old' }];

  refreshQueueStateForChat<QueueRow>({
    currentChatJid: 'chat:alpha',
    queueRefreshGenRef,
    activeChatJidRef,
    dismissedQueueRowIdsRef,
    getAgentQueueState: () => new Promise((resolve) => {
      resolvePayload = resolve;
    }),
    setFollowupQueueItems: (next) => {
      queueRows = typeof next === 'function' ? next(queueRows) : next;
    },
    clearQueuedSteerStateIfStale: (remainingQueueCount) => {
      clearCounts.push(remainingQueueCount);
    },
  });

  // Simulate a newer refresh issued before this request resolves.
  queueRefreshGenRef.current += 1;
  resolvePayload?.({ items: [{ row_id: 'row-new' }] });
  await Promise.resolve();
  expect(queueRows).toEqual([{ row_id: 'row-old' }]);

  // Now run a non-stale refresh with no rows.
  refreshQueueStateForChat<QueueRow>({
    currentChatJid: 'chat:alpha',
    queueRefreshGenRef,
    activeChatJidRef,
    dismissedQueueRowIdsRef,
    getAgentQueueState: async () => ({ items: [] }),
    setFollowupQueueItems: (next) => {
      queueRows = typeof next === 'function' ? next(queueRows) : next;
    },
    clearQueuedSteerStateIfStale: (remainingQueueCount) => {
      clearCounts.push(remainingQueueCount);
    },
  });

  await Promise.resolve();

  expect(queueRows).toEqual([]);
  expect(dismissedQueueRowIdsRef.current.size).toBe(0);
  expect(clearCounts[clearCounts.length - 1]).toBe(0);
});

test('refreshContextUsageForChat ignores stale chat responses', async () => {
  const activeChatJidRef = { current: 'chat:alpha' };
  let contextState: any = null;

  const pending = refreshContextUsageForChat({
    currentChatJid: 'chat:alpha',
    activeChatJidRef,
    getAgentContext: async () => ({ usage: 42 }),
    setContextUsage: (next) => {
      contextState = typeof next === 'function' ? next(contextState) : next;
    },
  });

  activeChatJidRef.current = 'chat:beta';
  await pending;

  expect(contextState).toBeNull();
});

test('refreshAutoresearchStatusForChat updates panels and clears autoresearch pending actions', async () => {
  const activeChatJidRef = { current: 'chat:alpha' };
  let panelState = new Map<string, any>();
  let pendingActions = new Set<string>(['autoresearch:stop', 'custom:keep']);

  await refreshAutoresearchStatusForChat({
    currentChatJid: 'chat:alpha',
    activeChatJidRef,
    getAutoresearchStatus: async () => ({
      key: 'autoresearch',
      content: [{ type: 'status_panel', panel: { state: 'running', title: 'Auto' } }],
    }),
    setExtensionStatusPanels: (next) => {
      panelState = typeof next === 'function' ? next(panelState) : next;
    },
    setPendingExtensionPanelActions: (next) => {
      pendingActions = typeof next === 'function' ? next(pendingActions) : next;
    },
  });

  expect(panelState.get('autoresearch')).toEqual({ state: 'running', title: 'Auto' });
  expect(Array.from(pendingActions)).toEqual(['custom:keep']);
});

test('refreshCurrentView refreshes timeline only on main view and always refreshes model/queue bundle', () => {
  let timelineCalls = 0;
  let bundleCalls = 0;

  refreshCurrentView({
    viewStateRef: { current: { currentHashtag: null, searchQuery: null, searchOpen: false } },
    refreshTimeline: () => { timelineCalls += 1; },
    refreshModelAndQueueState: () => { bundleCalls += 1; },
  });

  refreshCurrentView({
    viewStateRef: { current: { currentHashtag: 'tag', searchQuery: null, searchOpen: false } },
    refreshTimeline: () => { timelineCalls += 1; },
    refreshModelAndQueueState: () => { bundleCalls += 1; },
  });

  expect(timelineCalls).toBe(1);
  expect(bundleCalls).toBe(2);

  const calls: string[] = [];
  refreshModelAndQueueState({
    refreshModelState: () => calls.push('model'),
    refreshActiveChatAgents: () => calls.push('active'),
    refreshCurrentChatBranches: () => calls.push('branches'),
    refreshQueueState: () => calls.push('queue'),
    refreshContextUsage: () => calls.push('context'),
    refreshAutoresearchStatus: () => calls.push('autoresearch'),
  });
  expect(calls).toEqual(['model', 'active', 'branches', 'queue', 'context', 'autoresearch']);
});

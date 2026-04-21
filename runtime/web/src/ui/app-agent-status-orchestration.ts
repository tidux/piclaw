import {
  readAgentTurnId,
  resolveAgentPreviewRestoreState,
  shouldKeepExistingPreview,
} from './app-agent-status-refresh.js';
import { isMainTimelineView } from './app-realtime-timeline.js';
import { parseStatusLastEventAt } from './status-duration.js';

interface RefBox<T> {
  current: T;
}

type StateSetter<T> = (next: T | ((prev: T) => T)) => void;

export interface RefreshAgentStatusForChatOptions {
  currentChatJid: string;
  getAgentStatus: (chatJid: string) => Promise<any>;
  activeChatJidRef: RefBox<string>;
  wasAgentActiveRef: RefBox<boolean>;
  viewStateRef: RefBox<Record<string, unknown> | null | undefined>;
  refreshTimeline: () => Promise<void> | void;
  clearAgentRunState: () => void;
  agentStatusRef: RefBox<any>;
  pendingRequestRef: RefBox<any>;
  thoughtBufferRef: RefBox<string>;
  draftBufferRef: RefBox<string>;
  setAgentStatus: StateSetter<any>;
  setAgentDraft: StateSetter<any>;
  setAgentPlan: StateSetter<any>;
  setAgentThought: StateSetter<any>;
  setPendingRequest: StateSetter<any>;
  setActiveTurn: (turnId: string | null | undefined) => void;
  noteAgentActivity: (options?: Record<string, unknown>) => void;
  clearLastActivityFlag: () => void;
}

/** Refresh active agent status for the current chat while guarding against stale chat responses. */
export async function refreshAgentStatusForChat(options: RefreshAgentStatusForChatOptions): Promise<any> {
  const {
    currentChatJid,
    getAgentStatus,
    activeChatJidRef,
    wasAgentActiveRef,
    viewStateRef,
    refreshTimeline,
    clearAgentRunState,
    agentStatusRef,
    pendingRequestRef,
    thoughtBufferRef,
    draftBufferRef,
    setAgentStatus,
    setAgentDraft,
    setAgentPlan,
    setAgentThought,
    setPendingRequest,
    setActiveTurn,
    noteAgentActivity,
    clearLastActivityFlag,
  } = options;

  const targetChatJid = currentChatJid;

  try {
    const response = await getAgentStatus(targetChatJid);
    if (activeChatJidRef.current !== targetChatJid) {
      return null;
    }

    if (!response || response.status !== 'active' || !response.data) {
      if (wasAgentActiveRef.current && isMainTimelineView(viewStateRef.current)) {
        void refreshTimeline();
      }

      wasAgentActiveRef.current = false;
      clearAgentRunState();
      agentStatusRef.current = null;
      setAgentStatus(null);
      setAgentDraft({ text: '', totalLines: 0 });
      setAgentPlan('');
      setAgentThought({ text: '', totalLines: 0 });
      setPendingRequest(null);
      pendingRequestRef.current = null;
      return response ?? null;
    }

    wasAgentActiveRef.current = true;
    const payload = response.data;
    agentStatusRef.current = payload;

    const activeTurn = readAgentTurnId(payload);
    if (activeTurn) setActiveTurn(activeTurn);

    noteAgentActivity({
      running: true,
      clearSilence: true,
      atMs: parseStatusLastEventAt(payload) ?? Date.now(),
    });
    clearLastActivityFlag();
    setAgentStatus(payload);

    const thoughtRestore = resolveAgentPreviewRestoreState(response.thought);
    if (thoughtRestore) {
      setAgentThought((prev) => {
        if (shouldKeepExistingPreview(prev, thoughtRestore.text)) return prev;
        thoughtBufferRef.current = thoughtRestore.text;
        return thoughtRestore;
      });
    }

    const draftRestore = resolveAgentPreviewRestoreState(response.draft);
    if (draftRestore) {
      setAgentDraft((prev) => {
        if (shouldKeepExistingPreview(prev, draftRestore.text)) return prev;
        draftBufferRef.current = draftRestore.text;
        return draftRestore;
      });
    }

    return response;
  } catch (error) {
    console.warn('Failed to fetch agent status:', error);
    return null;
  }
}

export interface ReconcileSilentTurnOptions {
  isAgentRunningRef: RefBox<boolean>;
  pendingRequestRef: RefBox<any>;
  currentTurnIdRef: RefBox<string | null>;
  silentRecoveryRef: RefBox<{ inFlight: boolean; lastAttemptAt: number; turnId: string | null }>;
  silenceRefreshMs: number;
  viewStateRef: RefBox<Record<string, unknown> | null | undefined>;
  refreshTimeline: () => Promise<void>;
  refreshQueueState: () => Promise<void>;
  refreshAgentStatus: () => Promise<any>;
  now?: () => number;
}

/** Re-sync timeline/queue/status after quiet SSE periods while throttling duplicate probes. */
export async function reconcileSilentTurn(options: ReconcileSilentTurnOptions): Promise<any> {
  const {
    isAgentRunningRef,
    pendingRequestRef,
    currentTurnIdRef,
    silentRecoveryRef,
    silenceRefreshMs,
    viewStateRef,
    refreshTimeline,
    refreshQueueState,
    refreshAgentStatus,
    now = () => Date.now(),
  } = options;

  if (!isAgentRunningRef.current) return null;
  if (pendingRequestRef.current) return null;

  const activeTurnId = currentTurnIdRef.current || null;
  const probe = silentRecoveryRef.current;
  const currentNow = now();

  if (probe.inFlight) return null;
  if (probe.turnId === activeTurnId && currentNow - probe.lastAttemptAt < silenceRefreshMs) {
    return null;
  }

  probe.inFlight = true;
  probe.lastAttemptAt = currentNow;
  probe.turnId = activeTurnId;

  try {
    if (isMainTimelineView(viewStateRef.current)) {
      await refreshTimeline();
    }
    await refreshQueueState();
    return await refreshAgentStatus();
  } finally {
    probe.inFlight = false;
  }
}

export interface RunSilenceWatchdogTickOptions {
  isAgentRunningRef: RefBox<boolean>;
  pendingRequestRef: RefBox<any>;
  lastAgentEventRef: RefBox<number | null>;
  lastSilenceNoticeRef: RefBox<number>;
  agentStatusRef: RefBox<any>;
  silenceWarningMs: number;
  silenceFinalizeMs: number;
  silenceRefreshMs: number;
  isCompactionStatus: (status: any) => boolean;
  setAgentStatus: StateSetter<any>;
  reconcileSilentTurn: () => Promise<unknown> | unknown;
  now?: () => number;
}

/** Run one silence-watchdog evaluation tick and trigger quiet-period re-sync when needed. */
export function runSilenceWatchdogTick(options: RunSilenceWatchdogTickOptions): void {
  const {
    isAgentRunningRef,
    pendingRequestRef,
    lastAgentEventRef,
    lastSilenceNoticeRef,
    agentStatusRef,
    silenceWarningMs,
    silenceFinalizeMs,
    silenceRefreshMs,
    isCompactionStatus,
    setAgentStatus,
    reconcileSilentTurn,
    now = () => Date.now(),
  } = options;

  if (!isAgentRunningRef.current) return;
  if (pendingRequestRef.current) return;

  const lastEvent = lastAgentEventRef.current;
  if (!lastEvent) return;

  const currentNow = now();
  const silenceMs = currentNow - lastEvent;
  const compactionActive = isCompactionStatus(agentStatusRef.current);

  if (silenceMs >= silenceFinalizeMs) {
    if (!compactionActive) {
      setAgentStatus({
        type: 'waiting',
        title: 'Re-syncing after a quiet period…',
      });
    }
    void reconcileSilentTurn();
    return;
  }

  if (silenceMs >= silenceWarningMs && currentNow - lastSilenceNoticeRef.current >= silenceRefreshMs) {
    if (!compactionActive) {
      const seconds = Math.floor(silenceMs / 1000);
      setAgentStatus({
        type: 'waiting',
        title: `Waiting for model… No events for ${seconds}s`,
      });
    }
    lastSilenceNoticeRef.current = currentNow;
    void reconcileSilentTurn();
  }
}

export interface FinalizeStalledResponseOptions {
  isAgentRunningRef: RefBox<boolean>;
  lastSilenceNoticeRef: RefBox<number>;
  lastAgentEventRef: RefBox<number | null>;
  currentTurnIdRef: RefBox<string | null>;
  thoughtExpandedRef: RefBox<boolean>;
  draftExpandedRef: RefBox<boolean>;
  draftBufferRef: RefBox<string>;
  thoughtBufferRef: RefBox<string>;
  pendingRequestRef: RefBox<any>;
  lastAgentResponseRef: RefBox<any>;
  stalledPostIdRef: RefBox<string | number | null>;
  scrollToBottomRef: RefBox<(() => void) | null>;
  setCurrentTurnId: (value: string | null) => void;
  setAgentDraft: StateSetter<any>;
  setAgentPlan: StateSetter<any>;
  setAgentThought: StateSetter<any>;
  setPendingRequest: StateSetter<any>;
  setAgentStatus: StateSetter<any>;
  setPosts: StateSetter<any[] | null>;
  dedupePosts: (posts: any[]) => any[];
  now?: () => number;
  nowIso?: () => string;
}

/** Finalize a stalled run by either surfacing an error status or appending a local warning post. */
export function finalizeStalledResponse(options: FinalizeStalledResponseOptions): void {
  const {
    isAgentRunningRef,
    lastSilenceNoticeRef,
    lastAgentEventRef,
    currentTurnIdRef,
    thoughtExpandedRef,
    draftExpandedRef,
    draftBufferRef,
    thoughtBufferRef,
    pendingRequestRef,
    lastAgentResponseRef,
    stalledPostIdRef,
    scrollToBottomRef,
    setCurrentTurnId,
    setAgentDraft,
    setAgentPlan,
    setAgentThought,
    setPendingRequest,
    setAgentStatus,
    setPosts,
    dedupePosts,
    now = () => Date.now(),
    nowIso = () => new Date().toISOString(),
  } = options;

  if (!isAgentRunningRef.current) return;

  isAgentRunningRef.current = false;
  lastSilenceNoticeRef.current = 0;
  lastAgentEventRef.current = null;
  currentTurnIdRef.current = null;
  setCurrentTurnId(null);
  thoughtExpandedRef.current = false;
  draftExpandedRef.current = false;

  const partial = (draftBufferRef.current || '').trim();
  draftBufferRef.current = '';
  thoughtBufferRef.current = '';
  setAgentDraft({ text: '', totalLines: 0 });
  setAgentPlan('');
  setAgentThought({ text: '', totalLines: 0 });
  setPendingRequest(null);
  pendingRequestRef.current = null;
  lastAgentResponseRef.current = null;

  if (!partial) {
    setAgentStatus({ type: 'error', title: 'Response stalled - No content received' });
    return;
  }

  const warning = '\n\n⚠️ Response may be incomplete - the model stopped responding';
  const content = `${partial}${warning}`;
  const id = now();
  const timestamp = nowIso();
  const localPost = {
    id,
    timestamp,
    data: {
      type: 'agent_response',
      content,
      agent_id: 'default',
      is_local_stall: true,
    },
  };

  stalledPostIdRef.current = id;
  setPosts((prev) => (prev ? dedupePosts([...prev, localPost]) : [localPost]));
  scrollToBottomRef.current?.();
  setAgentStatus(null);
}

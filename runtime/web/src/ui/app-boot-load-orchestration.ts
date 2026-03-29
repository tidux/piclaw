interface RefBox<T> {
  current: T;
}

type RafLike = (callback: () => void) => void;

export interface ApplyStoredSidebarWidthOptions {
  readStoredNumber: (key: string, fallback?: number | null) => number | null;
  sidebarWidthRef: RefBox<number>;
  shellElement: HTMLElement | null;
  minWidth?: number;
  maxWidth?: number;
  fallbackWidth?: number;
}

/** Read and apply persisted sidebar width to shell CSS vars. */
export function applyStoredSidebarWidth(options: ApplyStoredSidebarWidthOptions): number {
  const {
    readStoredNumber,
    sidebarWidthRef,
    shellElement,
    minWidth = 160,
    maxWidth = 600,
    fallbackWidth = 280,
  } = options;

  const saved = readStoredNumber('sidebarWidth', null);
  const resolved = Number.isFinite(saved)
    ? Math.min(Math.max(Number(saved), minWidth), maxWidth)
    : fallbackWidth;

  sidebarWidthRef.current = resolved;
  if (shellElement) {
    shellElement.style.setProperty('--sidebar-width', `${resolved}px`);
  }

  return resolved;
}

export interface RunTimelineLoadFlowOptions {
  currentHashtag: string | null;
  searchQuery: string | null;
  searchScope: string;
  currentChatJid: string;
  currentRootChatJid: string;
  loadPosts: (hashtag?: string | null) => Promise<void>;
  searchPosts: (
    query: string,
    limit: number,
    offset: number,
    chatJid: string,
    scope: string,
    rootChatJid: string,
  ) => Promise<{ results?: any[] }>;
  setPosts: (next: any[] | null) => void;
  setHasMore: (next: boolean) => void;
  scrollToBottom: () => void;
  isCancelled: () => boolean;
  scheduleRaf?: RafLike;
  scheduleTimeout?: (callback: () => void, delayMs: number) => void;
}

/**
 * Run the timeline load/search flow for the current view state.
 * The caller owns cancellation and provides `isCancelled` checks.
 */
export async function runTimelineLoadFlow(options: RunTimelineLoadFlowOptions): Promise<void> {
  const {
    currentHashtag,
    searchQuery,
    searchScope,
    currentChatJid,
    currentRootChatJid,
    loadPosts,
    searchPosts,
    setPosts,
    setHasMore,
    scrollToBottom,
    isCancelled,
    scheduleRaf = (callback) => requestAnimationFrame(callback),
    scheduleTimeout = (callback, delayMs) => {
      setTimeout(callback, delayMs);
    },
  } = options;

  const safeScrollToBottom = () => {
    if (isCancelled()) return;
    scheduleRaf(() => {
      if (isCancelled()) return;
      scheduleTimeout(() => {
        if (isCancelled()) return;
        scrollToBottom();
      }, 0);
    });
  };

  if (currentHashtag) {
    await loadPosts(currentHashtag);
    return;
  }

  if (searchQuery) {
    try {
      const result = await searchPosts(searchQuery, 50, 0, currentChatJid, searchScope, currentRootChatJid);
      if (isCancelled()) return;
      setPosts(Array.isArray(result?.results) ? result.results : []);
      setHasMore(false);
    } catch (error) {
      if (isCancelled()) return;
      console.error('Failed to search:', error);
      setPosts([]);
      setHasMore(false);
    }
    return;
  }

  try {
    await loadPosts();
    safeScrollToBottom();
  } catch (error) {
    if (isCancelled()) return;
    console.error('Failed to load timeline:', error);
  }
}

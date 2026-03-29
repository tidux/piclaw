import { buildChatWindowUrl } from './chat-window.js';

interface RefBox<T> {
  current: T;
}

interface PaneTransferInstanceLike {
  preparePopoutTransfer?: () => Promise<Record<string, string> | null> | Record<string, string> | null;
}

export interface NavigateToSelectedBranchOptions {
  hasWindow?: boolean;
  nextChatJid: unknown;
  currentChatJid: string;
  chatOnlyMode?: boolean;
  currentHref: string;
  navigate?: (url: string) => void;
}

/** Navigate to a selected branch from the branch picker when it differs from the current chat. */
export function navigateToSelectedBranch(options: NavigateToSelectedBranchOptions): boolean {
  const {
    hasWindow = typeof window !== 'undefined',
    nextChatJid,
    currentChatJid,
    chatOnlyMode,
    currentHref,
    navigate,
  } = options;

  if (!hasWindow) return false;
  const normalized = typeof nextChatJid === 'string' ? nextChatJid.trim() : '';
  if (!normalized || normalized === currentChatJid) return false;
  const url = buildChatWindowUrl(currentHref, normalized, { chatOnly: chatOnlyMode });
  navigate?.(url);
  return true;
}

export interface ResolvePanePopoutTransferOptions {
  panePath: string;
  tabStripActiveId: string | null;
  editorInstanceRef: RefBox<PaneTransferInstanceLike | null>;
  dockInstanceRef: RefBox<PaneTransferInstanceLike | null>;
  terminalTabPath: string;
}

/** Resolve optional popout transfer payload from the active editor/dock source pane instance. */
export async function resolvePanePopoutTransfer(options: ResolvePanePopoutTransferOptions): Promise<Record<string, string> | null> {
  const {
    panePath,
    tabStripActiveId,
    editorInstanceRef,
    dockInstanceRef,
    terminalTabPath,
  } = options;

  const activePath = typeof tabStripActiveId === 'string' ? tabStripActiveId.trim() : '';
  const sourceInstance = activePath === panePath
    ? editorInstanceRef.current
    : (panePath === terminalTabPath ? dockInstanceRef.current : null);

  if (typeof sourceInstance?.preparePopoutTransfer !== 'function') {
    return null;
  }

  return await sourceInstance.preparePopoutTransfer();
}

export interface CloseTransferredPaneSourceOptions {
  panePath: string;
  terminalTabPath: string;
  dockVisible: boolean;
  resolveTab: (path: string) => { dirty?: boolean } | null | undefined;
  closeTab: (path: string) => void;
  setDockVisible: (visible: boolean) => void;
}

/** Close local pane source after a successful transfer when safe (clean tab or visible dock). */
export function closeTransferredPaneSource(options: CloseTransferredPaneSourceOptions): void {
  const {
    panePath,
    terminalTabPath,
    dockVisible,
    resolveTab,
    closeTab,
    setDockVisible,
  } = options;

  const sourceTab = resolveTab(panePath);
  if (sourceTab && !sourceTab.dirty) {
    closeTab(panePath);
    return;
  }

  if (panePath === terminalTabPath && dockVisible) {
    setDockVisible(false);
  }
}

export interface ApplyStoredPaneLayoutOptions {
  hasWindow?: boolean;
  editorOpen: boolean;
  shellElement: HTMLElement | null;
  editorWidthRef: RefBox<number>;
  dockHeightRef: RefBox<number>;
  sidebarWidthRef: RefBox<number>;
  readStoredNumber: (key: string, fallback?: number | null) => number | null;
}

/** Apply persisted editor/dock layout vars onto the shell element once editor mode is active. */
export function applyStoredPaneLayout(options: ApplyStoredPaneLayoutOptions): void {
  const {
    hasWindow = typeof window !== 'undefined',
    editorOpen,
    shellElement,
    editorWidthRef,
    dockHeightRef,
    sidebarWidthRef,
    readStoredNumber,
  } = options;

  if (!editorOpen || !hasWindow || !shellElement) return;

  if (!editorWidthRef.current) {
    const stored = readStoredNumber('editorWidth', null);
    const fallback = sidebarWidthRef.current || 280;
    editorWidthRef.current = Number.isFinite(stored) ? Number(stored) : fallback;
  }
  shellElement.style.setProperty('--editor-width', `${editorWidthRef.current}px`);

  if (!dockHeightRef.current) {
    const stored = readStoredNumber('dockHeight', null);
    dockHeightRef.current = Number.isFinite(stored) ? Number(stored) : 200;
  }
  shellElement.style.setProperty('--dock-height', `${dockHeightRef.current}px`);
}

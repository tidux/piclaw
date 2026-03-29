import { expect, test } from 'bun:test';

import {
  applyStoredPaneLayout,
  closeTransferredPaneSource,
  navigateToSelectedBranch,
  resolvePanePopoutTransfer,
} from '../../web/src/ui/app-branch-pane-orchestration.js';

test('navigateToSelectedBranch ignores same/blank chats and navigates when selection changes', () => {
  const calls: string[] = [];

  expect(navigateToSelectedBranch({
    hasWindow: true,
    nextChatJid: 'web:main',
    currentChatJid: 'web:main',
    chatOnlyMode: true,
    currentHref: 'https://example.test/?chat_jid=web%3Amain',
    navigate: (url) => calls.push(url),
  })).toBe(false);

  expect(navigateToSelectedBranch({
    hasWindow: true,
    nextChatJid: ' web:branch ',
    currentChatJid: 'web:main',
    chatOnlyMode: true,
    currentHref: 'https://example.test/?chat_jid=web%3Amain',
    navigate: (url) => calls.push(url),
  })).toBe(true);

  expect(calls).toHaveLength(1);
  expect(calls[0]).toContain('chat_jid=web%3Abranch');
});

test('resolvePanePopoutTransfer uses active editor transfer first, then dock terminal transfer', async () => {
  const editorTransfer = async () => ({ cursor: '10' });
  const dockTransfer = async () => ({ cwd: '/workspace' });

  await expect(resolvePanePopoutTransfer({
    panePath: '/workspace/readme.md',
    tabStripActiveId: '/workspace/readme.md',
    editorInstanceRef: { current: { preparePopoutTransfer: editorTransfer } },
    dockInstanceRef: { current: { preparePopoutTransfer: dockTransfer } },
    terminalTabPath: '/__terminal__',
  })).resolves.toEqual({ cursor: '10' });

  await expect(resolvePanePopoutTransfer({
    panePath: '/__terminal__',
    tabStripActiveId: '/workspace/readme.md',
    editorInstanceRef: { current: { preparePopoutTransfer: editorTransfer } },
    dockInstanceRef: { current: { preparePopoutTransfer: dockTransfer } },
    terminalTabPath: '/__terminal__',
  })).resolves.toEqual({ cwd: '/workspace' });
});

test('closeTransferredPaneSource closes clean tabs and falls back to hiding dock for terminal', () => {
  const closed: string[] = [];
  const dockVisibility: boolean[] = [];

  closeTransferredPaneSource({
    panePath: '/workspace/a.md',
    terminalTabPath: '/__terminal__',
    dockVisible: true,
    resolveTab: () => ({ dirty: false }),
    closeTab: (path) => closed.push(path),
    setDockVisible: (next) => dockVisibility.push(next),
  });

  closeTransferredPaneSource({
    panePath: '/__terminal__',
    terminalTabPath: '/__terminal__',
    dockVisible: true,
    resolveTab: () => null,
    closeTab: (path) => closed.push(path),
    setDockVisible: (next) => dockVisibility.push(next),
  });

  expect(closed).toEqual(['/workspace/a.md']);
  expect(dockVisibility).toEqual([false]);
});

test('applyStoredPaneLayout hydrates editor/dock css vars from storage fallback rules', () => {
  const styleCalls: Array<[string, string]> = [];
  const shell = {
    style: {
      setProperty: (key: string, value: string) => styleCalls.push([key, value]),
    },
  } as unknown as HTMLElement;

  const editorWidthRef = { current: 0 };
  const dockHeightRef = { current: 0 };
  const sidebarWidthRef = { current: 320 };

  applyStoredPaneLayout({
    hasWindow: true,
    editorOpen: true,
    shellElement: shell,
    editorWidthRef,
    dockHeightRef,
    sidebarWidthRef,
    readStoredNumber: (key) => {
      if (key === 'editorWidth') return null;
      if (key === 'dockHeight') return 250;
      return null;
    },
  });

  expect(editorWidthRef.current).toBe(320);
  expect(dockHeightRef.current).toBe(250);
  expect(styleCalls).toEqual([
    ['--editor-width', '320px'],
    ['--dock-height', '250px'],
  ]);
});

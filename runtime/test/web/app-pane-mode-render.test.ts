import { expect, test } from 'bun:test';

import {
  renderBranchLoaderMode,
  renderPanePopoutMode,
  resolveAppShellRenderMode,
  resolveBranchLoaderHeading,
} from '../../web/src/ui/app-pane-mode-render.js';

test('resolveAppShellRenderMode prioritizes branch-loader mode over pane popout', () => {
  expect(resolveAppShellRenderMode({ branchLoaderMode: true, panePopoutMode: true })).toBe('branch-loader');
  expect(resolveAppShellRenderMode({ branchLoaderMode: false, panePopoutMode: true })).toBe('pane-popout');
  expect(resolveAppShellRenderMode({ branchLoaderMode: false, panePopoutMode: false })).toBe('main');
});

test('resolveBranchLoaderHeading reflects error state copy', () => {
  expect(resolveBranchLoaderHeading('error')).toBe('Could not open branch window');
  expect(resolveBranchLoaderHeading('running')).toBe('Opening branch…');
});

test('renderBranchLoaderMode includes the branch-loader message body', () => {
  const vnode = renderBranchLoaderMode({ status: 'running', message: 'Preparing branch' });
  const serialized = JSON.stringify(vnode);
  expect(serialized).toContain('Opening branch…');
  expect(serialized).toContain('Preparing branch');
});

test('renderPanePopoutMode renders fallback copy when no pane is mounted', () => {
  const vnode = renderPanePopoutMode({
    appShellRef: { current: null },
    editorOpen: false,
    hidePanePopoutControls: false,
    panePopoutHasMenuActions: false,
    panePopoutTitle: 'Pane',
    tabStripTabs: [],
    tabStripActiveId: null,
    handleTabActivate: () => undefined,
    previewTabs: new Set(),
    handleTabTogglePreview: () => undefined,
    editorContainerRef: { current: null },
    getPaneContent: () => '',
    panePopoutPath: null,
  });

  expect(JSON.stringify(vnode)).toContain('No pane path provided.');
});

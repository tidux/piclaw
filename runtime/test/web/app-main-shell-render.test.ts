import { expect, test } from 'bun:test';

import { buildMainShellClassName } from '../../web/src/ui/app-main-shell-render.js';

test('buildMainShellClassName composes workspace/editor/chat/zen modifiers', () => {
  expect(buildMainShellClassName({
    workspaceOpen: true,
    editorOpen: false,
    chatOnlyMode: false,
    zenMode: false,
  })).toBe('app-shell');

  expect(buildMainShellClassName({
    workspaceOpen: false,
    editorOpen: true,
    chatOnlyMode: true,
    zenMode: true,
  })).toBe('app-shell workspace-collapsed editor-open chat-only zen-mode');
});

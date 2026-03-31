import { expect, test } from 'bun:test';

import {
  claimPaneLiveTransfer,
  clearPaneLiveTransferForPath,
  registerPaneLiveTransfer,
} from '../../web/src/panes/pane-live-transfer.js';

function createWindowLike() {
  return {} as any;
}

test('registerPaneLiveTransfer only accepts panes with a live moveHost capability', () => {
  const runtimeWindow = createWindowLike();
  expect(registerPaneLiveTransfer({
    panePath: '/workspace/notes.md',
    paneInstanceId: 'pane-inst-1',
    paneWindowId: 'pane-win-1',
    instance: { getContent: () => '# Draft', isDirty: () => true, focus: () => undefined, dispose: () => undefined } as any,
  }, runtimeWindow)).toBe(false);
});

test('claimPaneLiveTransfer moves the registered pane instance and releases the source host', async () => {
  const runtimeWindow = createWindowLike();
  const moveCalls: any[] = [];
  const releaseCalls: string[] = [];
  const instance = {
    moveHost: async (container: HTMLElement, context: any) => {
      moveCalls.push({ container, context });
      return true;
    },
  } as any;

  expect(registerPaneLiveTransfer({
    panePath: '/workspace/notes.md',
    paneInstanceId: 'pane-inst-1',
    paneWindowId: 'pane-win-1',
    instance,
    releaseSourceHost: () => releaseCalls.push('released'),
  }, runtimeWindow)).toBe(true);

  const container = { id: 'target' } as any as HTMLElement;
  await expect(claimPaneLiveTransfer(runtimeWindow, {
    panePath: '/workspace/notes.md',
    paneInstanceId: 'pane-inst-1',
    paneWindowId: 'pane-win-1',
  }, container, {
    path: '/workspace/notes.md',
    hostMode: 'popout',
    transferState: { kind: 'editor' },
  })).resolves.toBe(instance);

  expect(moveCalls).toEqual([
    {
      container,
      context: {
        path: '/workspace/notes.md',
        hostMode: 'popout',
        transferState: { kind: 'editor' },
      },
    },
  ]);
  expect(releaseCalls).toEqual(['released']);

  await expect(claimPaneLiveTransfer(runtimeWindow, {
    panePath: '/workspace/notes.md',
    paneInstanceId: 'pane-inst-1',
    paneWindowId: 'pane-win-1',
  }, container, {
    path: '/workspace/notes.md',
    hostMode: 'popout',
    transferState: null,
  })).resolves.toBeNull();
});

test('clearPaneLiveTransferForPath removes stale live transfer registrations', async () => {
  const runtimeWindow = createWindowLike();
  registerPaneLiveTransfer({
    panePath: '/workspace/notes.md',
    paneInstanceId: 'pane-inst-1',
    paneWindowId: 'pane-win-1',
    instance: { moveHost: () => true } as any,
  }, runtimeWindow);

  clearPaneLiveTransferForPath('/workspace/notes.md', runtimeWindow);

  await expect(claimPaneLiveTransfer(runtimeWindow, {
    panePath: '/workspace/notes.md',
    paneInstanceId: 'pane-inst-1',
    paneWindowId: 'pane-win-1',
  }, {} as any, {
    path: '/workspace/notes.md',
    hostMode: 'popout',
    transferState: null,
  })).resolves.toBeNull();
});

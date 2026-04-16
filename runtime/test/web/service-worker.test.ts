import { afterAll, beforeAll, expect, test } from 'bun:test';

type RegisteredHandler = (event: any) => void;

const handlers = new Map<string, RegisteredHandler>();

const workerSelf = {
  addEventListener(type: string, handler: RegisteredHandler) {
    handlers.set(type, handler);
  },
  skipWaiting: async () => {},
  clients: {
    matchAll: async () => [],
    openWindow: async (_url: string) => {},
    claim: async () => {},
  },
  registration: {
    showNotification: async () => {},
  },
  location: {
    origin: 'https://example.com',
  },
};

beforeAll(async () => {
  (globalThis as any).self = workerSelf;
  await import('../../web/static/sw.js');
});

afterAll(() => {
  delete (globalThis as any).self;
});

test('service worker reuses an existing root app tab for relative notification targets', async () => {
  let focused = false;
  let navigatedTo = '';
  let openedTo = '';

  workerSelf.clients.matchAll = async () => [{
    url: 'https://example.com/',
    focus: async () => {
      focused = true;
    },
    navigate: async (url: string) => {
      navigatedTo = url;
    },
  }];
  workerSelf.clients.openWindow = async (url: string) => {
    openedTo = url;
  };

  let pending: Promise<unknown> | null = null;
  handlers.get('notificationclick')?.({
    notification: {
      close() {},
      data: { url: '/?chat_jid=web%3Adefault#msg-42' },
    },
    waitUntil(promise: Promise<unknown>) {
      pending = promise;
    },
  });

  await pending;

  expect(focused).toBe(true);
  expect(navigatedTo).toBe('https://example.com/?chat_jid=web%3Adefault#msg-42');
  expect(openedTo).toBe('');
});

test('service worker opens an absolute notification URL when no client matches', async () => {
  let openedTo = '';

  workerSelf.clients.matchAll = async () => [];
  workerSelf.clients.openWindow = async (url: string) => {
    openedTo = url;
  };

  let pending: Promise<unknown> | null = null;
  handlers.get('notificationclick')?.({
    notification: {
      close() {},
      data: { url: '/?chat_jid=web%3Aother' },
    },
    waitUntil(promise: Promise<unknown>) {
      pending = promise;
    },
  });

  await pending;

  expect(openedTo).toBe('https://example.com/?chat_jid=web%3Aother');
});

test('service worker hides notification source markers by default', async () => {
  let shownTitle = '';

  workerSelf.registration.showNotification = async (title: string) => {
    shownTitle = title;
  };

  let pending: Promise<unknown> | null = null;
  handlers.get('push')?.({
    data: {
      json() {
        return {
          title: 'PiClaw reply',
          body: 'Reply body',
          sourceLabel: 'Web Push',
        };
      },
    },
    waitUntil(promise: Promise<unknown>) {
      pending = promise;
    },
  });

  await pending;

  expect(shownTitle).toBe('PiClaw reply');
});

import { expect, test } from 'bun:test';

import {
  closeBtwPanelSession,
  handleBtwInterceptCommand,
  injectBtwSession,
  runBtwPromptSession,
} from '../../web/src/ui/app-btw-orchestration.js';

test('closeBtwPanelSession aborts active controller and clears session', () => {
  const controller = new AbortController();
  const sessions: any[] = [];

  closeBtwPanelSession({
    btwAbortRef: { current: controller },
    setBtwSession: (next) => sessions.push(next),
  });

  expect(controller.signal.aborted).toBe(true);
  expect(sessions).toEqual([null]);
});

test('runBtwPromptSession streams deltas and stores final result', async () => {
  let sessionState: any = null;
  const setBtwSession = (next: any) => {
    sessionState = typeof next === 'function' ? next(sessionState) : next;
  };

  const ok = await runBtwPromptSession({
    question: 'What changed?',
    currentChatJid: 'web:main',
    resolveBtwChatJid: (chatJid) => `${chatJid}:btw`,
    showIntentToast: () => undefined,
    btwAbortRef: { current: null },
    setBtwSession,
    streamSidePrompt: async (_prompt, options) => {
      (options as any).onEvent?.('side_prompt_start');
      (options as any).onThinkingDelta?.('thinking...');
      (options as any).onTextDelta?.('answer...');
      return { result: 'final answer', thinking: 'final thinking', model: 'gpt-test' };
    },
  });

  expect(ok).toBe(true);
  expect(sessionState).toMatchObject({
    question: 'What changed?',
    answer: 'final answer',
    thinking: 'final thinking',
    status: 'success',
    model: 'gpt-test',
    error: null,
  });
});

test('handleBtwInterceptCommand routes help/clear/ask directives', async () => {
  const calls: string[] = [];

  const help = await handleBtwInterceptCommand({
    content: '/btw help',
    parseBtwCommand: () => ({ type: 'help' }),
    closeBtwPanel: () => calls.push('close'),
    runBtwPrompt: async () => {
      calls.push('ask');
      return true;
    },
    showIntentToast: (title) => calls.push(`toast:${title}`),
  });

  const clear = await handleBtwInterceptCommand({
    content: '/btw clear',
    parseBtwCommand: () => ({ type: 'clear' }),
    closeBtwPanel: () => calls.push('close'),
    runBtwPrompt: async () => true,
    showIntentToast: (title) => calls.push(`toast:${title}`),
  });

  const ask = await handleBtwInterceptCommand({
    content: '/btw who?',
    parseBtwCommand: () => ({ type: 'ask', question: 'who?' }),
    closeBtwPanel: () => undefined,
    runBtwPrompt: async (question) => {
      calls.push(`ask:${String(question)}`);
      return true;
    },
    showIntentToast: () => undefined,
  });

  expect(help).toBe(true);
  expect(clear).toBe(true);
  expect(ask).toBe(true);
  expect(calls).toContain('toast:BTW usage');
  expect(calls).toContain('close');
  expect(calls).toContain('ask:who?');
});

test('injectBtwSession sends summary and shows queued toast copy when queued', async () => {
  const toasts: Array<[string, string | null | undefined]> = [];
  const responses: any[] = [];

  const ok = await injectBtwSession({
    btwSession: { question: 'q', answer: 'a' },
    buildBtwInjectionText: () => 'summary',
    isComposeBoxAgentActive: true,
    currentChatJid: 'web:chat',
    sendAgentMessage: async () => ({ queued: 'followup' }),
    handleMessageResponse: (response) => responses.push(response),
    showIntentToast: (title, detail) => toasts.push([title, detail]),
  });

  expect(ok).toBe(true);
  expect(responses).toEqual([{ queued: 'followup' }]);
  expect(toasts[0]?.[0]).toBe('BTW queued');
});

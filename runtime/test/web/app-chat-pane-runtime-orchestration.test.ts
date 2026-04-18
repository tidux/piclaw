import { expect, test } from 'bun:test';

import { formatAgentReplyNotificationBody } from '../../web/src/ui/app-chat-pane-runtime-orchestration.js';

test('formatAgentReplyNotificationBody truncates text replies for local notifications', () => {
  expect(formatAgentReplyNotificationBody({
    data: {
      content: '  hello   from   PiClaw  ',
    },
  })).toBe('hello from PiClaw');
});

test('formatAgentReplyNotificationBody falls back for attachment-only replies', () => {
  expect(formatAgentReplyNotificationBody({
    data: {
      content: '',
      content_blocks: [{ type: 'file', media_id: 42 }],
    },
  })).toBe('Sent an attachment.');
});

test('formatAgentReplyNotificationBody returns an empty string when nothing is present', () => {
  expect(formatAgentReplyNotificationBody({
    data: {},
  })).toBe('');
});

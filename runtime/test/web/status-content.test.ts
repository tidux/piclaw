import { expect, test } from 'bun:test';

import { resolveAgentStatusContent, resolveStatusActivityAgeLabel, shouldTickStatusActivityAge } from '../../web/src/components/status.ts';

test('resolveAgentStatusContent preserves the last visible tool activity label without inlining age text', () => {
  expect(resolveAgentStatusContent({ type: 'tool_call', title: 'bash', last_activity: true, last_event_at: '2026-04-22T06:00:00.000Z' })).toBe('Recent activity: Running: bash');
  expect(resolveAgentStatusContent({ type: 'tool_status', title: 'bash', status: 'Working...', last_activity: true, last_event_at: '2026-04-22T06:00:00.000Z' })).toBe('Recent activity: bash: Working...');
});

test('resolveStatusActivityAgeLabel formats the activity age for recent activity and tool output meta rows', () => {
  expect(resolveStatusActivityAgeLabel({ type: 'tool_call', last_event_at: '2026-04-22T06:00:00.000Z' }, Date.parse('2026-04-22T06:00:05.000Z'))).toBe('5s ago');
  expect(resolveStatusActivityAgeLabel({ type: 'tool_status', last_event_at: '2026-04-22T06:00:00.000Z' }, Date.parse('2026-04-22T06:02:03.000Z'))).toBe('2m 3s ago');
  expect(resolveStatusActivityAgeLabel({ last_activity: true, last_event_at: '2026-04-22T06:00:00.000Z' }, Date.parse('2026-04-22T06:00:09.000Z'))).toBe('9s ago');
});

test('shouldTickStatusActivityAge opts live tool statuses into clock updates', () => {
  expect(shouldTickStatusActivityAge({ type: 'tool_call', last_event_at: '2026-04-22T06:00:00.000Z' })).toBe(true);
  expect(shouldTickStatusActivityAge({ type: 'tool_status', started_at: '2026-04-22T06:00:00.000Z' })).toBe(true);
  expect(shouldTickStatusActivityAge({ last_activity: true, last_event_at: '2026-04-22T06:00:00.000Z' })).toBe(true);
  expect(shouldTickStatusActivityAge({ type: 'tool_status' })).toBe(false);
  expect(shouldTickStatusActivityAge({ type: 'intent', last_event_at: '2026-04-22T06:00:00.000Z' })).toBe(false);
});

test('resolveAgentStatusContent falls back to generic last-activity copy when no prior status is available', () => {
  expect(resolveAgentStatusContent({ type: 'active', last_activity: true, last_event_at: '2026-04-22T06:00:00.000Z' })).toBe('Last activity');
  expect(resolveStatusActivityAgeLabel({}, Date.parse('2026-04-22T06:00:09.000Z'))).toBeNull();
  expect(resolveStatusActivityAgeLabel({ type: 'intent', last_event_at: '2026-04-22T06:00:00.000Z' }, Date.parse('2026-04-22T06:00:09.000Z'))).toBeNull();
});

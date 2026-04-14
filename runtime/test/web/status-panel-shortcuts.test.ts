import { expect, test } from 'bun:test';

import { resolveAgentStatusEscapeCollapseKey } from '../../web/src/components/status.ts';

test('resolveAgentStatusEscapeCollapseKey prefers the most recently expanded thought-like panel', () => {
  expect(resolveAgentStatusEscapeCollapseKey(new Set())).toBeNull();
  expect(resolveAgentStatusEscapeCollapseKey(new Set(['autoresearch']))).toBeNull();
  expect(resolveAgentStatusEscapeCollapseKey(new Set(['thought']))).toBe('thought');
  expect(resolveAgentStatusEscapeCollapseKey(new Set(['thought', 'draft']))).toBe('draft');
  expect(resolveAgentStatusEscapeCollapseKey(new Set(['autoresearch', 'thought']))).toBe('thought');
  expect(resolveAgentStatusEscapeCollapseKey(new Set(['draft', 'autoresearch']))).toBe('draft');
});

import { expect, test } from 'bun:test';

import {
  appendUniqueStringRef,
  normalizeComposeRefs,
  removeStringRef,
} from '../../web/src/ui/app-shell-ref-utils.js';

test('appendUniqueStringRef trims values and preserves identity for duplicates/invalid inputs', () => {
  const initial = ['a.md'];

  const appended = appendUniqueStringRef(initial, ' b.md ');
  expect(appended).toEqual(['a.md', 'b.md']);

  const duplicate = appendUniqueStringRef(appended, 'b.md');
  expect(duplicate).toBe(appended);

  const invalid = appendUniqueStringRef(appended, '   ');
  expect(invalid).toBe(appended);
});

test('removeStringRef removes existing refs and keeps identity on misses', () => {
  const initial = ['a.md', 'b.md'];

  const removed = removeStringRef(initial, ' b.md ');
  expect(removed).toEqual(['a.md']);

  const miss = removeStringRef(initial, 'missing.md');
  expect(miss).toBe(initial);
});

test('normalizeComposeRefs returns trimmed unique refs in insertion order', () => {
  expect(normalizeComposeRefs([' /a ', '/a', '', ' /b ', null, '/c'])).toEqual(['/a', '/b', '/c']);
  expect(normalizeComposeRefs(null)).toEqual([]);
});

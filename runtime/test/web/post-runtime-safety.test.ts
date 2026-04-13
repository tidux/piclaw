import { expect, test } from 'bun:test';
import { writeClipboardDataViaExecCommand } from '../../web/src/components/post-runtime-safety.ts';

test('writeClipboardDataViaExecCommand writes plain text and html through copy event', () => {
  const calls: Array<{ type: string; value: string }> = [];
  let copyHandler: ((event: any) => void) | null = null;
  const host = {
    value: '',
    style: {},
    setAttribute: () => {},
    select: () => {},
    setSelectionRange: () => {},
  };

  const documentLike = {
    body: {
      appendChild: () => {},
      removeChild: () => {},
    },
    createElement: () => host,
    addEventListener: (_type: string, handler: (event: any) => void) => {
      copyHandler = handler;
    },
    removeEventListener: () => {
      copyHandler = null;
    },
    execCommand: (command: string) => {
      expect(command).toBe('copy');
      copyHandler?.({
        clipboardData: {
          setData: (type: string, value: string) => calls.push({ type, value }),
        },
        preventDefault: () => {},
      });
      return true;
    },
  };

  const ok = writeClipboardDataViaExecCommand(documentLike as any, {
    text: 'hello',
    html: '<p>hello</p>',
  });

  expect(ok).toBe(true);
  expect(calls).toEqual([
    { type: 'text/plain', value: 'hello' },
    { type: 'text/html', value: '<p>hello</p>' },
  ]);
});

test('writeClipboardDataViaExecCommand returns false without a usable document', () => {
  expect(writeClipboardDataViaExecCommand(null as any, { text: 'hello', html: '<p>hello</p>' })).toBe(false);
});

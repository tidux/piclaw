import { expect, test } from 'bun:test';

import {
  readViewportHeight,
  shouldUseStandaloneMobileViewportFix,
  syncStandaloneMobileViewport,
} from '../../web/src/ui/mobile-viewport.js';

test('shouldUseStandaloneMobileViewportFix enables for standalone mobile and iPhone browser runtimes', () => {
  expect(shouldUseStandaloneMobileViewportFix({
    navigator: {
      standalone: true,
      userAgent: 'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X)',
      maxTouchPoints: 5,
    },
    window: {
      matchMedia: () => ({ matches: true }),
    },
  })).toBe(true);

  expect(shouldUseStandaloneMobileViewportFix({
    navigator: {
      standalone: false,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)',
      maxTouchPoints: 5,
    },
    window: {
      matchMedia: (query: string) => ({ matches: query.includes('pointer') }),
    },
  })).toBe(true);

  expect(shouldUseStandaloneMobileViewportFix({
    navigator: {
      standalone: false,
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0)',
      maxTouchPoints: 0,
    },
    window: {
      matchMedia: () => ({ matches: false }),
    },
  })).toBe(false);
});

test('readViewportHeight prefers visualViewport by default', () => {
  expect(readViewportHeight({
    window: {
      visualViewport: { height: 612.4 },
      innerHeight: 900,
    },
  })).toBe(612);

  expect(readViewportHeight({
    window: {
      innerHeight: 844,
    },
  })).toBe(844);
});

test('readViewportHeight adds offsetTop when keyboard is active', () => {
  expect(readViewportHeight({
    window: {
      visualViewport: { height: 500.2, offsetTop: 188.1 },
      innerHeight: 900,
    },
  }, { keyboardActive: true })).toBe(688);
});

test('readViewportHeight uses screen.height in PWA portrait mode', () => {
  // iPhone 15: visualViewport reports 785, but screen.height is 852
  expect(readViewportHeight({
    window: {
      visualViewport: { height: 785 },
      innerHeight: 785,
      innerWidth: 393,
      screen: { height: 852, width: 393 },
    },
  }, { isPWA: true })).toBe(852);
});

test('readViewportHeight skips screen.height override in landscape', () => {
  // landscape: innerHeight < innerWidth → not portrait
  expect(readViewportHeight({
    window: {
      visualViewport: { height: 393 },
      innerHeight: 393,
      innerWidth: 852,
      screen: { height: 852, width: 393 },
    },
  }, { isPWA: true })).toBe(393);
});

test('syncStandaloneMobileViewport uses screen.height in PWA portrait mode', () => {
  const cssVars = new Map<string, string>();

  const height = syncStandaloneMobileViewport({
    navigator: {
      standalone: true,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)',
      maxTouchPoints: 5,
    },
    window: {
      matchMedia: () => ({ matches: true }),
      visualViewport: { height: 785 },
      innerHeight: 785,
      innerWidth: 393,
      screen: { height: 852, width: 393 },
    },
    document: {
      documentElement: {
        style: {
          setProperty: (name: string, value: string) => cssVars.set(name, value),
        },
      },
      activeElement: { tagName: 'DIV' },
    },
  });

  expect(height).toBe(852);
  expect(cssVars.get('--app-height')).toBe('852px');
});

test('syncStandaloneMobileViewport uses visualViewport+offsetTop when keyboard is active', () => {
  const cssVars = new Map<string, string>();

  const height = syncStandaloneMobileViewport({
    navigator: {
      standalone: true,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)',
      maxTouchPoints: 5,
    },
    window: {
      matchMedia: () => ({ matches: true }),
      visualViewport: { height: 512.2, offsetTop: 146.4 },
      innerHeight: 844,
      innerWidth: 393,
      screen: { height: 852, width: 393 },
    },
    document: {
      documentElement: {
        style: {
          setProperty: (name: string, value: string) => cssVars.set(name, value),
        },
      },
      activeElement: { tagName: 'TEXTAREA' },
    },
  });

  expect(height).toBe(659);
  expect(cssVars.get('--app-height')).toBe('659px');
});

test('syncStandaloneMobileViewport can reset page scroll when requested', () => {
  const cssVars = new Map<string, string>();
  const windowScrolls: Array<[number, number]> = [];
  const scrollingElement = { scrollTop: 91, scrollLeft: 17 };
  const documentElement = {
    scrollTop: 33,
    scrollLeft: 8,
    style: {
      setProperty: (name: string, value: string) => cssVars.set(name, value),
    },
  };
  const body = { scrollTop: 19, scrollLeft: 7 };

  syncStandaloneMobileViewport({
    navigator: {
      standalone: true,
      userAgent: 'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X)',
      maxTouchPoints: 5,
    },
    window: {
      matchMedia: () => ({ matches: true }),
      visualViewport: { height: 701.9 },
      innerHeight: 900,
      innerWidth: 600,
      screen: { height: 1024, width: 768 },
      scrollTo: (x: number, y: number) => windowScrolls.push([x, y]),
    },
    document: {
      documentElement,
      body,
      scrollingElement,
    },
  }, { resetScroll: true });

  expect(windowScrolls).toEqual([[0, 0]]);
  expect(scrollingElement.scrollTop).toBe(0);
  expect(body.scrollTop).toBe(0);
});

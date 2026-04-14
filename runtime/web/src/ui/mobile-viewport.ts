// @ts-nocheck

import { isMobileBrowserMode, isStandaloneWebAppMode } from './chat-window.js';

function isIOSMobileRuntime(runtime = {}) {
  const nav = runtime.navigator ?? (typeof navigator !== 'undefined' ? navigator : null);
  if (!nav) return false;
  const userAgent = String(nav.userAgent || '');
  if (/iPad|iPhone|iPod/i.test(userAgent)) return true;
  return nav.platform === 'MacIntel' && Number(nav.maxTouchPoints || 0) > 1;
}

export function shouldUseStandaloneMobileViewportFix(runtime = {}) {
  if (!isMobileBrowserMode(runtime)) return false;
  return isStandaloneWebAppMode(runtime) || isIOSMobileRuntime(runtime);
}

function isTextEntryFocused(doc) {
  const active = doc?.activeElement;
  if (!active) return false;
  if (active.isContentEditable) return true;
  const tagName = String(active.tagName || '').toLowerCase();
  if (tagName === 'textarea') return true;
  if (tagName !== 'input') return false;
  const type = String(active.type || 'text').toLowerCase();
  return !['button', 'checkbox', 'color', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'].includes(type);
}

function scrollWindowToTopBestEffort(win) {
  try {
    if (typeof win?.scrollTo === 'function') {
      win.scrollTo(0, 0);
    }
    return true;
  } catch {
    return false;
  }
}

function resetDocumentScrollRootsBestEffort(doc) {
  try {
    if (doc?.scrollingElement) {
      doc.scrollingElement.scrollTop = 0;
      doc.scrollingElement.scrollLeft = 0;
    }
    if (doc?.documentElement) {
      doc.documentElement.scrollTop = 0;
      doc.documentElement.scrollLeft = 0;
    }
    if (doc?.body) {
      doc.body.scrollTop = 0;
      doc.body.scrollLeft = 0;
    }
    return true;
  } catch {
    return false;
  }
}

/**
 * Read the viewport height for keyboard-open scenarios.
 * Uses visualViewport.height + offsetTop when available.
 * Falls back to innerHeight.
 */
export function readViewportHeight(runtime = {}, options = {}) {
  const win = runtime.window ?? (typeof window !== 'undefined' ? window : null);
  if (!win) return null;

  const visualViewportHeight = Number(win.visualViewport?.height || 0);
  const visualViewportOffsetTop = Number(win.visualViewport?.offsetTop || 0);

  if (options.keyboardActive && visualViewportHeight > 0) {
    const total = visualViewportHeight + Math.max(0, visualViewportOffsetTop);
    return Number.isFinite(total) && total > 0 ? Math.round(total) : null;
  }

  if (Number.isFinite(visualViewportHeight) && visualViewportHeight > 0) {
    return Math.round(visualViewportHeight);
  }
  const innerHeight = Number(win.innerHeight || 0);
  if (Number.isFinite(innerHeight) && innerHeight > 0) {
    return Math.round(innerHeight);
  }
  return null;
}

/**
 * Sync the --app-height CSS variable for mobile layout.
 *
 * The core layout uses `height: 100%` which inherits from body's
 * `position: fixed; inset: 0` — this fills the entire viewport correctly
 * on all devices including iOS with viewport-fit=cover.
 *
 * --app-height is ONLY set when the virtual keyboard is open, to shrink
 * the layout to the visible area above the keyboard. When the keyboard
 * is closed, --app-height is removed so CSS `height: 100%` takes over.
 */
export function syncStandaloneMobileViewport(runtime = {}, options = {}) {
  if (!shouldUseStandaloneMobileViewportFix(runtime)) {
    return null;
  }

  const win = runtime.window ?? (typeof window !== 'undefined' ? window : null);
  const doc = runtime.document ?? (typeof document !== 'undefined' ? document : null);
  if (!win || !doc?.documentElement) {
    return null;
  }

  const keyboardActive = isTextEntryFocused(doc);

  if (keyboardActive) {
    const height = readViewportHeight({ window: win }, { keyboardActive: true });
    if (height && height > 0) {
      doc.documentElement.style.setProperty('--app-height', `${height}px`);
    }
    return height;
  }

  // Keyboard not open: remove --app-height so CSS height: 100% fills the
  // full viewport via body's position: fixed; inset: 0.
  doc.documentElement.style.removeProperty('--app-height');

  if (options.resetScroll === true) {
    scrollWindowToTopBestEffort(win);
    resetDocumentScrollRootsBestEffort(doc);
  }

  return null;
}

export function installStandaloneMobileViewportFix(runtime = {}) {
  if (!shouldUseStandaloneMobileViewportFix(runtime)) {
    return () => {};
  }

  const win = runtime.window ?? (typeof window !== 'undefined' ? window : null);
  const doc = runtime.document ?? (typeof document !== 'undefined' ? document : null);
  if (!win || !doc) {
    return () => {};
  }

  let rafId = 0;
  const timers = new Set();

  const clearScheduled = () => {
    if (rafId) {
      win.cancelAnimationFrame?.(rafId);
      rafId = 0;
    }
    for (const timer of timers) {
      win.clearTimeout?.(timer);
    }
    timers.clear();
  };

  const runSync = () => {
    rafId = 0;
    syncStandaloneMobileViewport({ window: win, document: doc, navigator: win.navigator });
  };

  const scheduleSync = () => {
    if (rafId) {
      win.cancelAnimationFrame?.(rafId);
    }
    rafId = win.requestAnimationFrame?.(runSync) ?? 0;
  };

  const scheduleSettledSync = () => {
    scheduleSync();
    for (const delay of [50, 150, 300, 500, 800, 1200]) {
      const timer = win.setTimeout?.(() => {
        timers.delete(timer);
        scheduleSync();
      }, delay);
      if (timer != null) {
        timers.add(timer);
      }
    }
  };

  const handleVisibility = () => {
    if (doc.visibilityState && doc.visibilityState !== 'visible') return;
    scheduleSettledSync();
  };

  const handleOrientationChange = () => {
    for (const delay of [100, 300]) {
      const timer = win.setTimeout?.(() => {
        timers.delete(timer);
        scheduleSync();
      }, delay);
      if (timer != null) timers.add(timer);
    }
  };

  const viewport = win.visualViewport;
  scheduleSettledSync();
  win.addEventListener('focus', scheduleSettledSync);
  win.addEventListener('pageshow', scheduleSettledSync);
  win.addEventListener('resize', scheduleSettledSync);
  win.addEventListener('orientationchange', handleOrientationChange);
  doc.addEventListener('visibilitychange', handleVisibility);
  doc.addEventListener('focusin', scheduleSettledSync, true);
  doc.addEventListener('focusout', scheduleSettledSync, true);
  viewport?.addEventListener?.('resize', scheduleSettledSync);
  viewport?.addEventListener?.('scroll', scheduleSettledSync);

  return () => {
    clearScheduled();
    win.removeEventListener('focus', scheduleSettledSync);
    win.removeEventListener('pageshow', scheduleSettledSync);
    win.removeEventListener('resize', scheduleSettledSync);
    win.removeEventListener('orientationchange', handleOrientationChange);
    doc.removeEventListener('visibilitychange', handleVisibility);
    doc.removeEventListener('focusin', scheduleSettledSync, true);
    doc.removeEventListener('focusout', scheduleSettledSync, true);
    viewport?.removeEventListener?.('resize', scheduleSettledSync);
    viewport?.removeEventListener?.('scroll', scheduleSettledSync);
  };
}

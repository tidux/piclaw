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
 * Compute the correct viewport height for --app-height.
 *
 * On iOS PWA/standalone mode in portrait, both innerHeight and
 * visualViewport.height are reported too short (iOS incorrectly subtracts
 * safe-area-inset-top). This leaves a gap at the bottom.
 *
 * The fix: in PWA portrait mode without keyboard, use screen.height directly.
 * screen.height is the physical screen height in CSS pixels and is not
 * affected by the iOS viewport bug.
 *
 * When the keyboard is open, use visualViewport.height + offsetTop.
 */
export function readViewportHeight(runtime = {}, options = {}) {
  const win = runtime.window ?? (typeof window !== 'undefined' ? window : null);
  if (!win) return null;

  const visualViewportHeight = Number(win.visualViewport?.height || 0);
  const visualViewportOffsetTop = Number(win.visualViewport?.offsetTop || 0);
  const innerHeight = Number(win.innerHeight || 0);

  // Keyboard open: use visualViewport height + offsetTop for the visible area
  if (options.keyboardActive && visualViewportHeight > 0) {
    const total = visualViewportHeight + Math.max(0, visualViewportOffsetTop);
    return Number.isFinite(total) && total > 0 ? Math.round(total) : null;
  }

  // PWA portrait mode: use screen.height directly to sidestep the iOS bug
  // where innerHeight/visualViewport.height are reported too short.
  const isPWA = options.isPWA === true;
  const isPortrait = innerHeight > Number(win.innerWidth || 0);
  if (isPWA && isPortrait) {
    const screenHeight = Number(win.screen?.height || 0);
    if (Number.isFinite(screenHeight) && screenHeight > 0) {
      return Math.round(screenHeight);
    }
  }

  // Default: prefer visualViewport, fall back to innerHeight
  if (Number.isFinite(visualViewportHeight) && visualViewportHeight > 0) {
    return Math.round(visualViewportHeight);
  }
  if (Number.isFinite(innerHeight) && innerHeight > 0) {
    return Math.round(innerHeight);
  }
  return null;
}

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
  const isPWA = isStandaloneWebAppMode(runtime);
  const height = readViewportHeight(
    { window: win },
    { keyboardActive, isPWA },
  );
  if (height && height > 0) {
    doc.documentElement.style.setProperty('--app-height', `${height}px`);
  }

  if (options.resetScroll === true) {
    scrollWindowToTopBestEffort(win);
    resetDocumentScrollRootsBestEffort(doc);
  }

  return height;
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
    // Stagger retries because iOS doesn't always have safe-area env values
    // ready at launch. Cover fast and slow devices.
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
    // iOS recalculates everything on rotation; stagger to catch it
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
    viewport?.removeEventListener?.('resize', scheduleSettledSync);
    viewport?.removeEventListener?.('scroll', scheduleSettledSync);
  };
}

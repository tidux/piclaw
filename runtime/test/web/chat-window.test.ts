import { expect, test } from "bun:test";

import {
  buildBranchLoaderUrl,
  buildChatWindowUrl,
  buildPanePopoutUrl,
  closeProvisionalChatWindow,
  describeBranchOpenError,
  getChatWindowOpenOptions,
  getChatWindowTarget,
  getPaneWindowOpenOptions,
  getPaneWindowTarget,
  isMobileBrowserMode,
  isStandaloneWebAppMode,
  navigateProvisionalChatWindow,
  openProvisionalChatWindow,
  primeProvisionalChatWindow,
} from "../../web/src/ui/chat-window.js";

test("isStandaloneWebAppMode detects iOS standalone mode", () => {
  expect(isStandaloneWebAppMode({ navigator: { standalone: true } })).toBe(true);
});

test("isStandaloneWebAppMode detects standalone display modes", () => {
  expect(isStandaloneWebAppMode({
    window: {
      matchMedia: (query: string) => ({ matches: query === '(display-mode: standalone)' }),
    },
  })).toBe(true);
});

test("isStandaloneWebAppMode stays false for regular browser tabs", () => {
  expect(isStandaloneWebAppMode({
    navigator: { standalone: false },
    window: { matchMedia: () => ({ matches: false }) },
  })).toBe(false);
});

test("isMobileBrowserMode detects mobile browsers", () => {
  expect(isMobileBrowserMode({
    navigator: { userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)", maxTouchPoints: 5 },
    window: { matchMedia: () => ({ matches: true }) },
  })).toBe(true);
});

test("isMobileBrowserMode stays false for desktop browsers", () => {
  expect(isMobileBrowserMode({
    navigator: { userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0)", maxTouchPoints: 0 },
    window: { matchMedia: () => ({ matches: false }) },
  })).toBe(false);
});

test("getChatWindowOpenOptions returns popup settings for desktop browser tabs", () => {
  expect(getChatWindowOpenOptions("web:research", {
    navigator: { userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0)", maxTouchPoints: 0, standalone: false },
    window: { matchMedia: () => ({ matches: false }) },
  })).toEqual({
    target: "piclaw-chat-web-research",
    features: "popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",
    mode: "popup",
  });
});

test("getChatWindowOpenOptions returns new-tab behavior for mobile browser tabs", () => {
  expect(getChatWindowOpenOptions("web:research", {
    navigator: { userAgent: "Mozilla/5.0 (Linux; Android 14)", maxTouchPoints: 5, standalone: false },
    window: { matchMedia: (query: string) => ({ matches: query === '(pointer: coarse)' }) },
  })).toEqual({
    target: "_blank",
    features: undefined,
    mode: "tab",
  });
});

test("getChatWindowOpenOptions disables opening in standalone mode", () => {
  expect(getChatWindowOpenOptions("web:research", {
    navigator: { standalone: true },
  })).toBeNull();
});

test("getPaneWindowOpenOptions returns popup settings for desktop browser tabs", () => {
  expect(getPaneWindowOpenOptions("piclaw://terminal", {
    navigator: { userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0)", maxTouchPoints: 0, standalone: false },
    window: { matchMedia: () => ({ matches: false }) },
  })).toEqual({
    target: "piclaw-pane-piclaw-terminal",
    features: "popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",
    mode: "popup",
  });
});


test("openProvisionalChatWindow opens about:blank synchronously with popup features", () => {
  const calls: any[] = [];
  const handle = { location: { replace: () => {} }, document: { title: "", body: { innerHTML: "" } }, close: () => {} };
  const result = openProvisionalChatWindow(
    { target: "piclaw-chat-web-research", features: "popup=yes", mode: "popup" },
    { window: { open: (...args: any[]) => { calls.push(args); return handle; } } },
  );
  expect(result).toBe(handle);
  expect(calls).toEqual([["about:blank", "piclaw-chat-web-research", "popup=yes"]]);
});

test("openProvisionalChatWindow opens about:blank in a new tab on mobile", () => {
  const calls: any[] = [];
  const handle = { location: { replace: () => {} }, document: { title: "", body: { innerHTML: "" } }, close: () => {} };
  const result = openProvisionalChatWindow(
    { target: "_blank", features: undefined, mode: "tab" },
    { window: { open: (...args: any[]) => { calls.push(args); return handle; } } },
  );
  expect(result).toBe(handle);
  expect(calls).toEqual([["about:blank", "_blank"]]);
});

test("prime/navigate/close provisional chat window are safe helper operations", () => {
  const calls: string[] = [];
  const handle: any = {
    location: { replace: (url: string) => calls.push(`replace:${url}`) },
    document: { title: "", body: { innerHTML: "" } },
    close: () => calls.push("close"),
  };

  primeProvisionalChatWindow(handle, { title: "Opening branch…", message: "Preparing…" });
  expect(handle.document.title).toBe("Opening branch…");
  expect(handle.document.body.innerHTML).toContain("Preparing…");

  navigateProvisionalChatWindow(handle, "https://example.com/chat");
  closeProvisionalChatWindow(handle);
  expect(calls).toEqual(["replace:https://example.com/chat", "close"]);
});

test("buildChatWindowUrl preserves origin/path and adds branch params", () => {
  const url = buildChatWindowUrl("https://example.com/app?foo=1", "web:research");
  const parsed = new URL(url);

  expect(parsed.origin).toBe("https://example.com");
  expect(parsed.pathname).toBe("/app");
  expect(parsed.searchParams.get("foo")).toBe("1");
  expect(parsed.searchParams.get("chat_jid")).toBe("web:research");
  expect(parsed.searchParams.get("chat_only")).toBe("1");
});

test("buildChatWindowUrl clears pane popout params from inherited URLs", () => {
  const url = buildChatWindowUrl("https://example.com/app?pane_popout=1&pane_path=piclaw://terminal&pane_label=Terminal", "web:research");
  const parsed = new URL(url);

  expect(parsed.searchParams.get("chat_jid")).toBe("web:research");
  expect(parsed.searchParams.get("pane_popout")).toBeNull();
  expect(parsed.searchParams.get("pane_path")).toBeNull();
  expect(parsed.searchParams.get("pane_label")).toBeNull();
});

test("buildChatWindowUrl can omit chat_only when explicitly requested", () => {
  const url = buildChatWindowUrl("https://example.com/", "web:default", { chatOnly: false });
  const parsed = new URL(url);

  expect(parsed.searchParams.get("chat_jid")).toBe("web:default");
  expect(parsed.searchParams.get("chat_only")).toBeNull();
});

test("buildBranchLoaderUrl preserves origin/path and adds loader params", () => {
  const url = buildBranchLoaderUrl("https://example.com/app?foo=1", "web:research");
  const parsed = new URL(url);

  expect(parsed.origin).toBe("https://example.com");
  expect(parsed.pathname).toBe("/app");
  expect(parsed.searchParams.get("foo")).toBe("1");
  expect(parsed.searchParams.get("branch_loader")).toBe("1");
  expect(parsed.searchParams.get("branch_source_chat_jid")).toBe("web:research");
  expect(parsed.searchParams.get("chat_only")).toBe("1");
  expect(parsed.searchParams.get("chat_jid")).toBeNull();
});

test("buildBranchLoaderUrl clears inherited chat and pane params", () => {
  const url = buildBranchLoaderUrl("https://example.com/app?chat_jid=web:default&pane_popout=1&pane_path=piclaw://vnc/lab&pane_label=Lab", "web:research");
  const parsed = new URL(url);

  expect(parsed.searchParams.get("branch_loader")).toBe("1");
  expect(parsed.searchParams.get("branch_source_chat_jid")).toBe("web:research");
  expect(parsed.searchParams.get("chat_jid")).toBeNull();
  expect(parsed.searchParams.get("pane_popout")).toBeNull();
  expect(parsed.searchParams.get("pane_path")).toBeNull();
  expect(parsed.searchParams.get("pane_label")).toBeNull();
});

test("buildPanePopoutUrl preserves origin/path and adds pane params", () => {
  const url = buildPanePopoutUrl("https://example.com/app?foo=1&chat_only=1", "piclaw://terminal", {
    label: "Terminal",
    chatJid: "web:default",
  });
  const parsed = new URL(url);

  expect(parsed.origin).toBe("https://example.com");
  expect(parsed.pathname).toBe("/app");
  expect(parsed.searchParams.get("foo")).toBe("1");
  expect(parsed.searchParams.get("pane_popout")).toBe("1");
  expect(parsed.searchParams.get("pane_path")).toBe("piclaw://terminal");
  expect(parsed.searchParams.get("pane_label")).toBe("Terminal");
  expect(parsed.searchParams.get("chat_jid")).toBe("web:default");
  expect(parsed.searchParams.get("chat_only")).toBeNull();
  expect(parsed.searchParams.get("branch_loader")).toBeNull();
});

test("buildPanePopoutUrl clears stale inherited pane labels when omitted", () => {
  const url = buildPanePopoutUrl("https://example.com/app?pane_label=Old+Label&branch_loader=1&branch_source_chat_jid=web:default", "piclaw://vnc/lab");
  const parsed = new URL(url);

  expect(parsed.searchParams.get("pane_popout")).toBe("1");
  expect(parsed.searchParams.get("pane_path")).toBe("piclaw://vnc/lab");
  expect(parsed.searchParams.get("pane_label")).toBeNull();
  expect(parsed.searchParams.get("branch_loader")).toBeNull();
  expect(parsed.searchParams.get("branch_source_chat_jid")).toBeNull();
});

test("getChatWindowTarget derives a stable safe window name", () => {
  expect(getChatWindowTarget("web:Research/Branch 1")).toBe("piclaw-chat-web-research-branch-1");
});

test("getPaneWindowTarget derives a stable safe window name", () => {
  expect(getPaneWindowTarget("piclaw://vnc/Lab Desktop")).toBe("piclaw-pane-piclaw-vnc-lab-desktop");
});


test("describeBranchOpenError explains stable-boundary failures clearly", () => {
  expect(describeBranchOpenError(new Error("Cannot fork this branch yet because no stable turn boundary is available.")))
    .toContain("stable turn boundary");
});

test("describeBranchOpenError explains generic fork failures cleanly", () => {
  expect(describeBranchOpenError(new Error("Failed to fork branch.")))
    .toBe("PiClaw could not create the new branch. Please try again.");
});

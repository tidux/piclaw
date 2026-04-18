import { html } from '../vendor/preact-htm.js';
import { ComposeBox, QueuedFollowupStack } from '../components/compose-box.js';
import { isLikelySafariBrowser } from './app-pane-runtime-orchestration.js';
import { isEligibleChatSwipeTarget, resetChatSwipeTouchState, resolveAdjacentSwipeChatJid, shouldTriggerTouchChatSwipe } from './chat-swipe-navigation.js';
import { OobePanel } from '../components/oobe-panel.js';
import { BtwPanel } from '../components/btw-panel.js';
import { FloatingWidgetPane } from '../components/floating-widget-pane.js';
import { AttachmentPreviewModal } from '../components/attachment-preview-modal.js';
import { AgentRequestModal, AgentStatus } from '../components/status.js';
import { Timeline } from '../components/timeline.js';
import { WorkspaceExplorer } from '../components/workspace-explorer.js';
import { TabStrip } from '../components/tab-strip.js';
import { MarkdownPreview } from '../components/markdown-preview.js';
import { SystemMetersHud } from '../components/system-meters-hud.js';

export interface MainShellRenderOptions {
  [key: string]: any;
}

export function buildMainShellClassName(options: {
  workspaceOpen: boolean;
  editorOpen: boolean;
  chatOnlyMode: boolean;
  zenMode: boolean;
}): string {
  const { workspaceOpen, editorOpen, chatOnlyMode, zenMode } = options;
  return `app-shell${workspaceOpen ? '' : ' workspace-collapsed'}${editorOpen ? ' editor-open' : ''}${chatOnlyMode ? ' chat-only' : ''}${zenMode ? ' zen-mode' : ''}`;
}

export function extractPostedUserMessageId(response: unknown): number | null {
  const rawId = (response as any)?.user_message?.id ?? (response as any)?.row_id;
  if (rawId === null || rawId === undefined || rawId === '') return null;
  const id = Number(rawId);
  return Number.isFinite(id) ? id : null;
}

export function scrollToPostedTimelineMessage(options: {
  id: string | number;
  scrollToBottom?: () => void;
  getElementById?: (id: string) => HTMLElement | null;
  scheduleRaf?: (callback: () => void) => void;
  scheduleTimeout?: (callback: () => void, delayMs: number) => void;
  maxAttempts?: number;
}): void {
  const {
    id,
    scrollToBottom,
    getElementById = (value) => document.getElementById(value),
    scheduleRaf = (callback) => requestAnimationFrame(callback),
    scheduleTimeout = (callback, delayMs) => { setTimeout(callback, delayMs); },
    maxAttempts = 12,
  } = options;

  const highlight = (el: HTMLElement) => {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('post-highlight');
    scheduleTimeout(() => el.classList.remove('post-highlight'), 2000);
  };

  const tryScroll = (attemptsRemaining: number) => {
    const element = getElementById(`post-${id}`);
    if (element) {
      highlight(element);
      return;
    }
    if (attemptsRemaining <= 0) {
      scrollToBottom?.();
      return;
    }
    scheduleRaf(() => {
      scheduleTimeout(() => tryScroll(attemptsRemaining - 1), 40);
    });
  };

  tryScroll(maxAttempts);
}

export function handleComposePost(options: {
  response?: unknown;
  viewStateRef: { current: Record<string, unknown> | null | undefined };
  scrollToBottom: () => void;
  scrollPostedMessage?: (id: string | number) => void;
}): void {
  const {
    response,
    viewStateRef,
    scrollToBottom,
    scrollPostedMessage = (id) => scrollToPostedTimelineMessage({ id, scrollToBottom }),
  } = options;

  const { searchQuery: sq, searchOpen: so } = viewStateRef.current || {};
  if (sq || so) return;

  const postedMessageId = extractPostedUserMessageId(response);
  if (postedMessageId) {
    scrollPostedMessage(postedMessageId);
    return;
  }

  scrollToBottom();
}

export function renderMainShell(options: MainShellRenderOptions): any {
  const {
    appShellRef,
    workspaceOpen,
    editorOpen,
    chatOnlyMode,
    zenMode,
    isRenameBranchFormOpen,
    closeRenameCurrentBranchForm,
    handleRenameCurrentBranch,
    renameBranchNameDraft,
    renameBranchNameInputRef,
    setRenameBranchNameDraft,
    renameBranchDraftState,
    isRenamingBranch,
    addFileRef,
    openEditor,
    openTerminalTab,
    openVncTab,
    hasDockPanes,
    toggleDock,
    dockVisible,
    handleSplitterMouseDown,
    handleSplitterTouchStart,
    showEditorPaneContainer,
    tabStripTabs,
    tabStripActiveId,
    handleTabActivate,
    handleTabClose,
    handleTabCloseOthers,
    handleTabCloseAll,
    handleTabTogglePin,
    handleTabTogglePreview,
    handleTabToggleDiff,
    handleTabEditSource,
    handleReattachPane,
    previewTabs,
    diffTabs,
    tabPaneOverrides,
    toggleZenMode,
    handlePopOutPane,
    isWebAppMode,
    chatSwipeTouchStateRef,
    chatSwipeWheelStateRef,
    editorContainerRef,
    editorInstanceRef,
    detachedTabs,
    activeDetachedTab,
    detachedDockPane,
    handleDockSplitterMouseDown,
    handleDockSplitterTouchStart,
    TERMINAL_TAB_PATH,
    dockContainerRef,
    handleEditorSplitterMouseDown,
    handleEditorSplitterTouchStart,
    searchQuery,
    isIOSDevice,
    currentBranchRecord,
    currentChatJid,
    currentChatBranches,
    handleBranchPickerChange,
    formatBranchPickerLabel,
    openRenameCurrentBranchForm,
    handlePruneCurrentBranch,
    currentHashtag,
    handleBackToTimeline,
    activeSearchScopeLabel,
    oobePanelState,
    composePrefillRequest,
    handleOobeSetupProvider,
    handleOobeShowModelPicker,
    handleOobeOpenWorkspace,
    handleDismissProviderMissingOobe,
    handleCompleteProviderReadyOobe,
    posts,
    isMainTimelineView,
    hasMore,
    loadMore,
    timelineRef,
    handleHashtagClick,
    addMessageRef,
    scrollToMessage,
    openFileFromPill,
    openTimelineFileFromPill,
    handleDeletePost,
    handleOpenFloatingWidget,
    agents,
    userProfile,
    removingPostIds,
    agentStatus,
    isCompactionStatus,
    agentDraft,
    agentPlan,
    agentThought,
    pendingRequest,
    intentToast,
    currentTurnId,
    steerQueued,
    handlePanelToggle,
    btwSession,
    closeBtwPanel,
    handleBtwRetry,
    handleBtwInject,
    floatingWidget,
    handleCloseFloatingWidget,
    handleFloatingWidgetEvent,
    attachmentPreview,
    setAttachmentPreview,
    extensionStatusPanels,
    pendingExtensionPanelActions,
    handleExtensionPanelAction,
    searchOpen,
    followupQueueItems,
    handleInjectQueuedFollowup,
    handleRemoveQueuedFollowup,
    handleMoveQueuedFollowup,
    viewStateRef,
    loadPosts,
    scrollToBottom,
    searchScope,
    handleSearch,
    handleSearchScopeChange,
    setSearchScope,
    enterSearchMode,
    exitSearchMode,
    fileRefs,
    removeFileRef,
    clearFileRefs,
    setFileRefsFromCompose,
    messageRefs,
    removeMessageRef,
    clearMessageRefs,
    setMessageRefsFromCompose,
    handleCreateSessionFromCompose,
    handleRestoreBranch,
    attachActiveEditorFile,
    followupQueueCount,
    handleBtwIntercept,
    handleMessageResponse,
    handleComposeSubmitError,
    handlePopOutChat,
    isComposeBoxAgentActive,
    activeChatAgents,
    connectionStatus,
    activeModel,
    agentModelsPayload,
    activeModelUsage,
    activeThinkingLevel,
    supportsThinking,
    contextUsage,
    notificationsEnabled,
    notificationPermission,
    handleToggleNotifications,
    setActiveModel,
    applyModelState,
    setPendingRequest,
    pendingRequestRef,
    toggleWorkspace,
  } = options;

  const handleComposeFocus = () => {
    if (isIOSDevice()) return;
    scrollToBottom();
  };

  const handleChatSurfaceBranchSwitch = (direction: 'next' | 'prev') => {
    const nextChatJid = resolveAdjacentSwipeChatJid({
      candidates: activeChatAgents,
      currentChatJid,
      direction,
    });
    if (nextChatJid) {
      handleBranchPickerChange(nextChatJid);
    }
  };

  const handleChatSurfaceTouchStart = (event: any) => {
    const state = chatSwipeTouchStateRef?.current;
    if (!state) return;
    resetChatSwipeTouchState(state);
    if (!isIOSDevice?.()) return;
    if (event?.touches?.length !== 1) return;
    if (!isEligibleChatSwipeTarget(event?.target)) return;
    const touch = event.touches[0];
    if (!touch) return;
    state.active = true;
    state.startX = touch.clientX;
    state.startY = touch.clientY;
    state.lastX = touch.clientX;
    state.lastY = touch.clientY;
    state.startedAt = Date.now();
  };

  const handleChatSurfaceTouchMove = (event: any) => {
    const state = chatSwipeTouchStateRef?.current;
    if (!state?.active || state.cancelled) return;
    const touch = event?.touches?.[0];
    if (!touch) return;
    state.lastX = touch.clientX;
    state.lastY = touch.clientY;
    const dx = state.lastX - state.startX;
    const dy = state.lastY - state.startY;
    if (!state.horizontalLocked) {
      if (Math.abs(dy) > 16 && Math.abs(dy) >= Math.abs(dx)) {
        state.cancelled = true;
        return;
      }
      if (Math.abs(dx) > 12 && Math.abs(dx) > Math.abs(dy) * 1.15) {
        state.horizontalLocked = true;
      }
    }
    if (state.horizontalLocked && event?.cancelable) {
      event.preventDefault();
    }
  };

  const handleChatSurfaceTouchEnd = () => {
    const state = chatSwipeTouchStateRef?.current;
    if (!state?.active) return;
    const dx = state.lastX - state.startX;
    const dy = state.lastY - state.startY;
    const elapsedMs = Date.now() - state.startedAt;
    const shouldNavigate = !state.cancelled && shouldTriggerTouchChatSwipe({ dx, dy, elapsedMs });
    resetChatSwipeTouchState(state);
    if (!shouldNavigate) return;
    handleChatSurfaceBranchSwitch(dx < 0 ? 'next' : 'prev');
  };

  const handleChatSurfaceTouchCancel = () => {
    resetChatSwipeTouchState(chatSwipeTouchStateRef?.current);
  };

  const handleChatSurfaceWheel = (event: any) => {
    const state = chatSwipeWheelStateRef?.current;
    if (!state) return;
    if (isIOSDevice?.()) return;
    if (!isLikelySafariBrowser()) return;
    if (!isEligibleChatSwipeTarget(event?.target)) return;
    const deltaX = Number(event?.deltaX || 0);
    const deltaY = Number(event?.deltaY || 0);
    if (!Number.isFinite(deltaX) || Math.abs(deltaX) < 72) return;
    if (Math.abs(deltaX) <= Math.abs(deltaY) * 1.35) return;
    if (event?.cancelable) event.preventDefault();
    const now = Date.now();
    if (now - state.lastTriggeredAt < 450) return;
    state.lastTriggeredAt = now;
    handleChatSurfaceBranchSwitch(deltaX > 0 ? 'next' : 'prev');
  };

  return html`
    <div class=${buildMainShellClassName({ workspaceOpen, editorOpen, chatOnlyMode, zenMode })} ref=${appShellRef}>
      <${SystemMetersHud} mode="overlay" />
      ${isRenameBranchFormOpen && html`
        <div class="rename-branch-overlay" onPointerDown=${(event: any) => {
          if (event.target === event.currentTarget) {
            closeRenameCurrentBranchForm();
          }
        }}>
          <form
            class="rename-branch-panel"
            onSubmit=${(event: any) => {
              event.preventDefault();
              void handleRenameCurrentBranch(renameBranchNameDraft);
            }}
          >
            <div class="rename-branch-title">Rename branch handle</div>
            <input
              ref=${renameBranchNameInputRef}
              value=${renameBranchNameDraft}
              onInput=${(event: any) => {
                const next = event.currentTarget?.value ?? '';
                setRenameBranchNameDraft(String(next));
              }}
              onKeyDown=${(event: any) => {
                if (event.key === 'Escape') {
                  event.preventDefault();
                  closeRenameCurrentBranchForm();
                }
              }}
              autocomplete="off"
              placeholder="Handle (letters, numbers, - and _ only)"
            />
            <div class=${`rename-branch-help ${renameBranchDraftState.kind || 'info'}`}>
              ${renameBranchDraftState.message}
            </div>
            <div class="rename-branch-actions">
              <button type="submit" class="compose-model-popup-btn primary" disabled=${isRenamingBranch || !renameBranchDraftState.canSubmit}>
                ${isRenamingBranch ? 'Renaming…' : 'Save'}
              </button>
              <button
                type="button"
                class="compose-model-popup-btn"
                onClick=${closeRenameCurrentBranchForm}
                disabled=${isRenamingBranch}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!chatOnlyMode && html`
        <${WorkspaceExplorer}
          onFileSelect=${addFileRef}
          visible=${workspaceOpen}
          active=${workspaceOpen || editorOpen}
          onOpenEditor=${openEditor}
          onOpenTerminalTab=${openTerminalTab}
          onOpenVncTab=${openVncTab}
          onToggleTerminal=${hasDockPanes ? toggleDock : undefined}
          terminalVisible=${Boolean(hasDockPanes && dockVisible)}
        />
        <button
          class=${`workspace-toggle-tab${workspaceOpen ? ' open' : ' closed'}`}
          onClick=${toggleWorkspace}
          title=${workspaceOpen ? 'Hide workspace' : 'Show workspace'}
          aria-label=${workspaceOpen ? 'Hide workspace' : 'Show workspace'}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${handleSplitterMouseDown} onTouchStart=${handleSplitterTouchStart}></div>
      `}
      ${showEditorPaneContainer && html`
        <div class="editor-pane-container">
          ${zenMode && html`<div class="zen-hover-zone"></div>`}
          ${editorOpen && html`
            <${TabStrip}
              tabs=${tabStripTabs}
              activeId=${tabStripActiveId}
              onActivate=${handleTabActivate}
              onClose=${handleTabClose}
              onCloseOthers=${handleTabCloseOthers}
              onCloseAll=${handleTabCloseAll}
              onTogglePin=${handleTabTogglePin}
              onTogglePreview=${handleTabTogglePreview}
              onToggleDiff=${handleTabToggleDiff}
              onEditSource=${handleTabEditSource}
              previewTabs=${previewTabs}
              diffTabs=${diffTabs}
              paneOverrides=${tabPaneOverrides}
              detachedTabs=${detachedTabs}
              onReattachTab=${handleReattachPane}
              onToggleDock=${hasDockPanes ? toggleDock : undefined}
              dockVisible=${hasDockPanes && dockVisible}
              onToggleZen=${toggleZenMode}
              zenMode=${zenMode}
              onPopOutTab=${isWebAppMode ? undefined : handlePopOutPane}
            />
          `}
          ${editorOpen && activeDetachedTab && html`
            <div class="editor-pane-host editor-pane-detached-host">
              <div class="editor-empty-state">
                <div class="editor-empty-state-title">${activeDetachedTab.label || activeDetachedTab.panePath || 'Detached pane'}</div>
                <div class="editor-empty-state-body">This pane is detached into another window.</div>
                <div class="editor-empty-state-actions">
                  <button class="editor-empty-state-button" onClick=${() => handleReattachPane(activeDetachedTab.panePath)}>Reattach here</button>
                </div>
              </div>
            </div>
          `}
          ${editorOpen && !activeDetachedTab && html`<div class="editor-pane-host" ref=${editorContainerRef}></div>`}
          ${editorOpen && !activeDetachedTab && tabStripActiveId && previewTabs.has(tabStripActiveId) && html`
            <${MarkdownPreview}
              getContent=${() => editorInstanceRef.current?.getContent?.()}
              path=${tabStripActiveId}
              onClose=${() => handleTabTogglePreview(tabStripActiveId)}
            />
          `}
          ${hasDockPanes && dockVisible && html`<div class="dock-splitter" onMouseDown=${handleDockSplitterMouseDown} onTouchStart=${handleDockSplitterTouchStart}></div>`}
          ${hasDockPanes && html`<div class=${`dock-panel${dockVisible ? '' : ' hidden'}${editorOpen ? '' : ' standalone'}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!isWebAppMode && !detachedDockPane && html`
                  <button class="dock-panel-action" onClick=${() => handlePopOutPane(TERMINAL_TAB_PATH, 'Terminal')} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                ${detachedDockPane && html`
                  <button class="dock-panel-action" onClick=${() => handleReattachPane(TERMINAL_TAB_PATH)} title="Reattach terminal" aria-label="Reattach terminal">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="11.5" height="11.5" rx="1.5"/>
                      <path d="M5.25 8h5.5"/>
                      <path d="M8 5.25v5.5"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${toggleDock} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="4" y1="4" x2="12" y2="12"/>
                    <line x1="12" y1="4" x2="4" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>
            ${detachedDockPane
              ? html`
                <div class="dock-panel-body dock-panel-body-detached">
                  <div class="editor-empty-state">
                    <div class="editor-empty-state-title">Terminal detached</div>
                    <div class="editor-empty-state-body">The terminal is open in another window.</div>
                    <div class="editor-empty-state-actions">
                      <button class="editor-empty-state-button" onClick=${() => handleReattachPane(TERMINAL_TAB_PATH)}>Reattach here</button>
                    </div>
                  </div>
                </div>
              `
              : html`<div class="dock-panel-body" ref=${dockContainerRef}></div>`}
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${handleEditorSplitterMouseDown} onTouchStart=${handleEditorSplitterTouchStart}></div>
      `}
      <div class="container">
        ${searchQuery && isIOSDevice() && html`<div class="search-results-spacer"></div>`}
        ${chatOnlyMode && html`
          <div class="chat-window-header">
            <div class="chat-window-header-main">
              <span class="chat-window-header-title">
                ${currentBranchRecord?.agent_name ? `@${currentBranchRecord.agent_name}` : currentChatJid}
              </span>
              <span class="chat-window-header-subtitle">${currentBranchRecord?.chat_jid || currentChatJid}</span>
            </div>
            <div class="chat-window-header-actions">
              ${currentChatBranches.length > 1 && html`
                <label class="chat-window-branch-picker-wrap">
                  <span class="chat-window-branch-picker-label">Branch</span>
                  <select
                    class="chat-window-branch-picker"
                    value=${currentChatJid}
                    onChange=${(event: any) => handleBranchPickerChange(event.currentTarget.value)}
                  >
                    ${currentChatBranches.map((branch: any) => html`
                      <option key=${branch.chat_jid} value=${branch.chat_jid}>
                        ${formatBranchPickerLabel(branch, { currentChatJid })}
                      </option>
                    `)}
                  </select>
                </label>
              `}
              ${currentBranchRecord?.chat_jid && html`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${openRenameCurrentBranchForm}
                  title=${isRenamingBranch ? 'Renaming branch…' : 'Rename this branch'}
                  aria-label="Rename this branch"
                  disabled=${isRenamingBranch}
                >
                  ${isRenamingBranch ? 'Renaming…' : 'Rename'}
                </button>
              `}
              ${currentBranchRecord?.chat_jid && currentBranchRecord.chat_jid !== (currentBranchRecord.root_chat_jid || currentBranchRecord.chat_jid) && html`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${handlePruneCurrentBranch}
                  title="Prune this branch agent"
                  aria-label="Prune this branch agent"
                >
                  Prune
                </button>
              `}
              <span class="chat-window-header-badge">Chat only</span>
            </div>
          </div>
        `}
        ${(currentHashtag || searchQuery) && html`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${handleBackToTimeline}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${currentHashtag ? `#${currentHashtag}` : `Search: ${searchQuery} · ${activeSearchScopeLabel}`}</span>
          </div>
        `}
        ${oobePanelState?.kind && oobePanelState.kind !== 'hidden' && html`
          <${OobePanel}
            kind=${oobePanelState.kind}
            onSetupProvider=${handleOobeSetupProvider}
            onShowModelPicker=${handleOobeShowModelPicker}
            onOpenWorkspace=${handleOobeOpenWorkspace}
            onDismiss=${oobePanelState.kind === 'provider-missing' ? handleDismissProviderMissingOobe : handleCompleteProviderReadyOobe}
          />
        `}
        <${Timeline}
          posts=${posts}
          hasMore=${isMainTimelineView ? hasMore : false}
          onLoadMore=${isMainTimelineView ? loadMore : undefined}
          timelineRef=${timelineRef}
          onHashtagClick=${handleHashtagClick}
          onMessageRef=${addMessageRef}
          onScrollToMessage=${scrollToMessage}
          onFileRef=${openTimelineFileFromPill || openFileFromPill}
          onPostClick=${undefined}
          onDeletePost=${handleDeletePost}
          onOpenWidget=${handleOpenFloatingWidget}
          onOpenAttachmentPreview=${setAttachmentPreview}
          emptyMessage=${currentHashtag ? `No posts with #${currentHashtag}` : searchQuery ? `No results for "${searchQuery}"` : undefined}
          agents=${agents}
          user=${userProfile}
          reverse=${isMainTimelineView}
          removingPostIds=${removingPostIds}
          searchQuery=${searchQuery}
          onTouchStart=${handleChatSurfaceTouchStart}
          onTouchMove=${handleChatSurfaceTouchMove}
          onTouchEnd=${handleChatSurfaceTouchEnd}
          onTouchCancel=${handleChatSurfaceTouchCancel}
          onWheel=${handleChatSurfaceWheel}
        />
        <${AgentStatus}
          status=${isCompactionStatus(agentStatus) ? null : agentStatus}
          draft=${agentDraft}
          plan=${agentPlan}
          thought=${agentThought}
          pendingRequest=${pendingRequest}
          intent=${intentToast}
          turnId=${currentTurnId}
          steerQueued=${steerQueued}
          onPanelToggle=${handlePanelToggle}
          showExtensionPanels=${false}
        />
        <${BtwPanel}
          session=${btwSession}
          onClose=${closeBtwPanel}
          onRetry=${handleBtwRetry}
          onInject=${handleBtwInject}
        />
        <${FloatingWidgetPane}
          widget=${floatingWidget}
          onClose=${handleCloseFloatingWidget}
          onWidgetEvent=${handleFloatingWidgetEvent}
        />
        ${attachmentPreview && html`
          <${AttachmentPreviewModal}
            mediaId=${attachmentPreview.mediaId}
            info=${attachmentPreview.info}
            onClose=${() => setAttachmentPreview(null)}
          />
        `}
        <${AgentStatus}
          extensionPanels=${Array.from(extensionStatusPanels.values())}
          pendingPanelActions=${pendingExtensionPanelActions}
          onExtensionPanelAction=${handleExtensionPanelAction}
          turnId=${currentTurnId}
          steerQueued=${steerQueued}
          onPanelToggle=${handlePanelToggle}
          showCorePanels=${false}
        />
        <${QueuedFollowupStack}
          items=${searchOpen ? [] : followupQueueItems}
          onInjectQueuedFollowup=${handleInjectQueuedFollowup}
          onRemoveQueuedFollowup=${handleRemoveQueuedFollowup}
          onMoveQueuedFollowup=${handleMoveQueuedFollowup}
          onOpenFilePill=${openFileFromPill}
        />
        <${ComposeBox}
          onPost=${(response) => {
            handleComposePost({
              response,
              viewStateRef,
              scrollToBottom,
            });
          }}
          onFocus=${handleComposeFocus}
          searchMode=${searchOpen}
          searchScope=${searchScope}
          onSearch=${handleSearch}
          onSearchScopeChange=${handleSearchScopeChange || setSearchScope}
          onEnterSearch=${enterSearchMode}
          onExitSearch=${exitSearchMode}
          fileRefs=${fileRefs}
          onRemoveFileRef=${removeFileRef}
          onClearFileRefs=${clearFileRefs}
          onSetFileRefs=${setFileRefsFromCompose}
          messageRefs=${messageRefs}
          onRemoveMessageRef=${removeMessageRef}
          onClearMessageRefs=${clearMessageRefs}
          onSetMessageRefs=${setMessageRefsFromCompose}
          onSwitchChat=${handleBranchPickerChange}
          onRenameSession=${handleRenameCurrentBranch}
          isRenameSessionInProgress=${isRenamingBranch}
          onCreateSession=${handleCreateSessionFromCompose}
          onDeleteSession=${handlePruneCurrentBranch}
          onRestoreSession=${handleRestoreBranch}
          activeEditorPath=${chatOnlyMode ? null : tabStripActiveId}
          onAttachEditorFile=${chatOnlyMode ? undefined : attachActiveEditorFile}
          onOpenFilePill=${openFileFromPill}
          followupQueueCount=${followupQueueCount}
          followupQueueItems=${followupQueueItems}
          showQueueStack=${false}
          onInjectQueuedFollowup=${handleInjectQueuedFollowup}
          onRemoveQueuedFollowup=${handleRemoveQueuedFollowup}
          onMoveQueuedFollowup=${handleMoveQueuedFollowup}
          onSubmitIntercept=${handleBtwIntercept}
          onMessageResponse=${handleMessageResponse}
          onSubmitError=${handleComposeSubmitError}
          onPopOutChat=${isWebAppMode ? undefined : handlePopOutChat}
          isAgentActive=${isComposeBoxAgentActive}
          activeChatAgents=${activeChatAgents}
          currentChatJid=${currentChatJid}
          connectionStatus=${connectionStatus}
          activeModel=${activeModel}
          agentModelsPayload=${agentModelsPayload}
          modelUsage=${activeModelUsage}
          thinkingLevel=${activeThinkingLevel}
          supportsThinking=${supportsThinking}
          contextUsage=${contextUsage}
          notificationsEnabled=${notificationsEnabled}
          notificationPermission=${notificationPermission}
          onToggleNotifications=${handleToggleNotifications}
          onModelChange=${setActiveModel}
          onModelStateChange=${applyModelState}
          statusNotice=${isCompactionStatus(agentStatus) ? agentStatus : null}
          prefillRequest=${composePrefillRequest}
        />
        <${AgentRequestModal}
          request=${pendingRequest}
          onRespond=${() => {
            setPendingRequest(null);
            pendingRequestRef.current = null;
          }}
        />
      </div>
    </div>
  `;
}

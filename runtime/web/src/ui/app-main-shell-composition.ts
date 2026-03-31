export interface ComposeMainAppShellOptionsInput {
  routing: {
    branchLoaderMode: boolean;
    panePopoutMode: boolean;
    branchLoaderState: any;
  };
  paneRuntime: Record<string, any>;
  splitters: Record<string, any>;
  branchPaneActions: Record<string, any>;
  timelineViewActions: Record<string, any>;
  composeReferenceActions: Record<string, any>;
  sidepanelActions: Record<string, any>;
  shellState: Record<string, any>;
  agentState: Record<string, any>;
  composeState: Record<string, any>;
  modelState: Record<string, any>;
}

export function composeMainAppShellOptions(input: ComposeMainAppShellOptionsInput) {
  const {
    routing,
    paneRuntime,
    splitters,
    branchPaneActions,
    timelineViewActions,
    composeReferenceActions,
    sidepanelActions,
    shellState,
    agentState,
    composeState,
    modelState,
  } = input;

  const panePopoutOptions = {
    appShellRef: shellState.appShellRef,
    editorOpen: shellState.editorOpen,
    hidePanePopoutControls: paneRuntime.hidePanePopoutControls,
    panePopoutHasMenuActions: paneRuntime.panePopoutHasMenuActions,
    panePopoutTitle: paneRuntime.panePopoutTitle,
    tabStripTabs: shellState.tabStripTabs,
    tabStripActiveId: shellState.tabStripActiveId,
    handleTabActivate: shellState.handleTabActivate,
    previewTabs: shellState.previewTabs,
    handleTabTogglePreview: shellState.handleTabTogglePreview,
    editorContainerRef: paneRuntime.editorContainerRef,
    getPaneContent: () => paneRuntime.editorInstanceRef?.current?.getContent?.(),
    panePopoutPath: shellState.panePopoutPath,
  };

  const mainShellOptions = {
    appShellRef: shellState.appShellRef,
    workspaceOpen: shellState.workspaceOpen,
    editorOpen: shellState.editorOpen,
    chatOnlyMode: shellState.chatOnlyMode,
    zenMode: paneRuntime.zenMode,
    isRenameBranchFormOpen: shellState.isRenameBranchFormOpen,
    closeRenameCurrentBranchForm: branchPaneActions.closeRenameCurrentBranchForm,
    handleRenameCurrentBranch: branchPaneActions.handleRenameCurrentBranch,
    renameBranchNameDraft: shellState.renameBranchNameDraft,
    renameBranchNameInputRef: shellState.renameBranchNameInputRef,
    setRenameBranchNameDraft: shellState.setRenameBranchNameDraft,
    renameBranchDraftState: shellState.renameBranchDraftState,
    isRenamingBranch: shellState.isRenamingBranch,
    hasDockPanes: paneRuntime.hasDockPanes,
    toggleDock: paneRuntime.toggleDock,
    dockVisible: paneRuntime.dockVisible,
    showEditorPaneContainer: paneRuntime.showEditorPaneContainer,
    toggleZenMode: paneRuntime.toggleZenMode,
    isWebAppMode: shellState.isWebAppMode,
    editorContainerRef: paneRuntime.editorContainerRef,
    editorInstanceRef: paneRuntime.editorInstanceRef,
    dockContainerRef: paneRuntime.dockContainerRef,
    TERMINAL_TAB_PATH: shellState.TERMINAL_TAB_PATH,
    isIOSDevice: shellState.isIOSDevice,
    currentBranchRecord: shellState.currentBranchRecord,
    currentChatJid: shellState.currentChatJid,
    currentChatBranches: shellState.currentChatBranches,
    formatBranchPickerLabel: shellState.formatBranchPickerLabel,
    activeSearchScopeLabel: shellState.activeSearchScopeLabel,
    currentHashtag: shellState.currentHashtag,
    searchQuery: shellState.searchQuery,
    posts: shellState.posts,
    hasMore: shellState.hasMore,
    loadMore: shellState.loadMore,
    timelineRef: shellState.timelineRef,
    agents: shellState.agents,
    userProfile: shellState.userProfile,
    removingPostIds: shellState.removingPostIds,
    extensionStatusPanels: shellState.extensionStatusPanels,
    pendingExtensionPanelActions: shellState.pendingExtensionPanelActions,
    searchOpen: shellState.searchOpen,
    followupQueueItems: shellState.followupQueueItems,
    viewStateRef: shellState.viewStateRef,
    loadPosts: shellState.loadPosts,
    scrollToBottom: shellState.scrollToBottom,
    searchScope: shellState.searchScope,
    tabStripTabs: shellState.tabStripTabs,
    tabStripActiveId: shellState.tabStripActiveId,
    handleTabActivate: shellState.handleTabActivate,
    previewTabs: shellState.previewTabs,
    handleTabTogglePreview: shellState.handleTabTogglePreview,
    panePopoutPath: shellState.panePopoutPath,
    tabPaneOverrides: shellState.tabPaneOverrides,
    handleTabClose: shellState.handleTabClose,
    handleTabCloseOthers: shellState.handleTabCloseOthers,
    handleTabCloseAll: shellState.handleTabCloseAll,
    handleTabTogglePin: shellState.handleTabTogglePin,
    handleTabEditSource: shellState.handleTabEditSource,
    openEditor: shellState.openEditor,
    openTerminalTab: shellState.openTerminalTab,
    openVncTab: shellState.openVncTab,
    fileRefs: composeState.fileRefs,
    messageRefs: composeState.messageRefs,
    followupQueueCount: composeState.followupQueueCount,
    attachmentPreview: composeState.attachmentPreview,
    setAttachmentPreview: composeState.setAttachmentPreview,
    activeChatAgents: modelState.activeChatAgents,
    connectionStatus: modelState.connectionStatus,
    activeModel: modelState.activeModel,
    activeModelUsage: modelState.activeModelUsage,
    activeThinkingLevel: modelState.activeThinkingLevel,
    supportsThinking: modelState.supportsThinking,
    contextUsage: modelState.contextUsage,
    notificationsEnabled: modelState.notificationsEnabled,
    notificationPermission: modelState.notificationPermission,
    handleToggleNotifications: modelState.handleToggleNotifications,
    setActiveModel: modelState.setActiveModel,
    applyModelState: modelState.applyModelState,
    setPendingRequest: agentState.setPendingRequest,
    pendingRequestRef: agentState.pendingRequestRef,
    ...splitters,
    ...branchPaneActions,
    ...timelineViewActions,
    ...composeReferenceActions,
    ...sidepanelActions,
    ...agentState,
    ...composeState,
    ...modelState,
  };

  return {
    branchLoaderMode: routing.branchLoaderMode,
    panePopoutMode: routing.panePopoutMode,
    branchLoaderState: routing.branchLoaderState,
    panePopoutOptions,
    mainShellOptions,
  };
}

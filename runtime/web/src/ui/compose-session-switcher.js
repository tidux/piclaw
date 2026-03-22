// @ts-nocheck

export function shouldOpenSessionSwitcherFromBlankCompose(event, value, options = {}) {
    if (!event || event.isComposing) return false;
    if (options?.searchMode) return false;
    if (!options?.showSessionSwitcherButton) return false;
    if (event.ctrlKey || event.metaKey || event.altKey) return false;
    if (event.key !== '@') return false;
    return String(value || '') === '';
}

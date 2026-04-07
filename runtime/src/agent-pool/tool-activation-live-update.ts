type LiveToolSnapshotAgent = {
  state?: { tools?: unknown[]; systemPrompt?: string };
  setTools?: (tools: unknown[]) => void;
  setSystemPrompt?: (prompt: string) => void;
  createContextSnapshot?: () => { tools?: unknown[] } & Record<string, unknown>;
};

type LiveToolSession = {
  agent: LiveToolSnapshotAgent;
  _toolRegistry: Map<string, unknown>;
  _baseSystemPrompt: string;
  _rebuildSystemPrompt: (toolNames: string[]) => string;
  setActiveToolsByName?: (toolNames: string[]) => void;
};

const liveToolSnapshotAgents = new WeakSet<object>();
const liveToolSnapshotStates = new WeakMap<object, { tools: unknown[] }>();
const boundImmediateToolActivationSessions = new WeakSet<object>();

function replaceArrayContents<T>(target: T[], next: T[]): void {
  target.splice(0, target.length, ...next);
}

function ensureLiveToolSnapshot(agent: LiveToolSnapshotAgent): { tools: unknown[] } | null {
  if (!agent || typeof agent !== "object") return null;

  const agentObject = agent as object;
  const existing = liveToolSnapshotStates.get(agentObject);
  if (existing) return existing;

  const liveState = {
    tools: Array.isArray(agent.state?.tools) ? agent.state.tools as unknown[] : [],
  };

  if (typeof agent.createContextSnapshot === "function" && !liveToolSnapshotAgents.has(agentObject)) {
    const original = agent.createContextSnapshot.bind(agent);
    agent.createContextSnapshot = () => {
      const snapshot = original();
      return {
        ...snapshot,
        tools: liveState.tools,
      };
    };
    liveToolSnapshotAgents.add(agentObject);
  }

  liveToolSnapshotStates.set(agentObject, liveState);
  return liveState;
}

export function applyActiveToolsImmediately(session: LiveToolSession, toolNames: string[]): void {
  const tools: unknown[] = [];
  const validToolNames: string[] = [];

  for (const name of toolNames) {
    const tool = session._toolRegistry.get(name);
    if (tool) {
      tools.push(tool);
      validToolNames.push(name);
    }
  }

  const liveState = ensureLiveToolSnapshot(session.agent);

  const currentTools = Array.isArray(session.agent?.state?.tools)
    ? session.agent.state.tools as unknown[]
    : undefined;

  if (liveState?.tools) {
    replaceArrayContents(liveState.tools, tools);
  }

  if (currentTools && currentTools !== liveState?.tools) {
    replaceArrayContents(currentTools, tools);
  } else if (!currentTools && typeof session.agent?.setTools === "function") {
    session.agent.setTools(tools);
  }

  session._baseSystemPrompt = session._rebuildSystemPrompt(validToolNames);
  if (session.agent?.state) {
    session.agent.state.systemPrompt = session._baseSystemPrompt;
  }
  if (typeof session.agent?.setSystemPrompt === "function") {
    session.agent.setSystemPrompt(session._baseSystemPrompt);
  }
}

export function bindImmediateToolActivation(session: LiveToolSession): void {
  if (!session || typeof session !== "object") return;
  if (boundImmediateToolActivationSessions.has(session as object)) return;

  const liveState = ensureLiveToolSnapshot(session.agent);

  const original = typeof session.setActiveToolsByName === "function"
    ? session.setActiveToolsByName.bind(session)
    : null;

  session.setActiveToolsByName = (toolNames: string[]) => {
    if (original) {
      original(toolNames);
      const nextTools = Array.isArray(session.agent?.state?.tools)
        ? session.agent.state.tools as unknown[]
        : [];
      if (liveState?.tools) {
        replaceArrayContents(liveState.tools, nextTools);
      }
      return;
    }
    applyActiveToolsImmediately(session, toolNames);
  };

  boundImmediateToolActivationSessions.add(session as object);
}

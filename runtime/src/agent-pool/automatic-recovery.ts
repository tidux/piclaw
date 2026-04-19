/**
 * automatic-recovery.ts – Shared mid-turn recovery policy for agent runs.
 */

import type { AgentRecoveryMetadata } from "./contracts.js";

export interface AutomaticRecoveryConfig {
  enabled: boolean;
  maxAttempts: number;
  totalBudgetMs: number;
}

export type RecoveryStrategy = "retry" | "compact_then_retry";
export type RecoveryClassifier =
  | "disabled"
  | "budget_exhausted"
  | "non_recoverable"
  | "tool_activity"
  | "completed_turn_output"
  | "context_pressure"
  | "transient"
  | "compaction_failure"
  | "unknown";

export interface RecoveryAttemptSnapshot {
  hadToolActivity: boolean;
  hadPartialOutput: boolean;
  hadCompletedTurnOutput?: boolean;
  compactionErrorMessage?: string | null;
  sawCompactionIntent?: boolean;
}

export interface RecoveryDecision {
  recover: boolean;
  classifier: RecoveryClassifier;
  strategy: RecoveryStrategy | null;
  reason: string;
}

const DEFAULT_MAX_ATTEMPTS = 2;
const DEFAULT_TOTAL_BUDGET_MS = 30_000;

function parsePositiveInt(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(String(value || "").trim(), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function parseBoolean(value: string | undefined, fallback: boolean): boolean {
  const normalized = String(value || "").trim().toLowerCase();
  if (!normalized) return fallback;
  if (["1", "true", "yes", "on"].includes(normalized)) return true;
  if (["0", "false", "no", "off"].includes(normalized)) return false;
  return fallback;
}

export const DEFAULT_AUTOMATIC_RECOVERY_CONFIG: Readonly<AutomaticRecoveryConfig> = Object.freeze({
  enabled: true,
  maxAttempts: DEFAULT_MAX_ATTEMPTS,
  totalBudgetMs: DEFAULT_TOTAL_BUDGET_MS,
});

export function getAutomaticRecoveryConfig(): Readonly<AutomaticRecoveryConfig> {
  return Object.freeze({
    enabled: parseBoolean(process.env.PICLAW_TURN_AUTO_RECOVERY_ENABLED, DEFAULT_AUTOMATIC_RECOVERY_CONFIG.enabled),
    maxAttempts: parsePositiveInt(process.env.PICLAW_TURN_AUTO_RECOVERY_MAX_ATTEMPTS, DEFAULT_AUTOMATIC_RECOVERY_CONFIG.maxAttempts),
    totalBudgetMs: parsePositiveInt(process.env.PICLAW_TURN_AUTO_RECOVERY_TOTAL_BUDGET_MS, DEFAULT_AUTOMATIC_RECOVERY_CONFIG.totalBudgetMs),
  });
}

export function isContextPressureFailure(errorText: string | null | undefined): boolean {
  if (!errorText) return false;
  return /context(?: window| length)?|maximum context length|context_length|token limit|too many tokens|prompt too long|reduce (?:the )?length|overflow|out of extra usage|out of usage|request too large/i.test(errorText);
}

export function isTransientFailure(errorText: string | null | undefined): boolean {
  if (!errorText) return false;
  return /timed out|timeout|before finalization|connection error|fetch failed|socket hang up|econnreset|econnrefused|etimedout|enotfound|502|503|504|temporary|temporarily unavailable|try again|rate limit|too many requests|\b429\b|overloaded|server error/i.test(errorText);
}

export function isNonRecoverableFailure(errorText: string | null | undefined): boolean {
  if (!errorText) return false;
  return /authentication failed|credentials may have expired|re-authenticate|unauthorized|\b401\b|\b403\b|invalid.*api.*key|api.*key.*invalid|token.*expired|oauth.*expired|refresh.*token|no model selected|select a model|use \/model|use \/login|model not found|deployment.*not found|policy|safety|blocked by policy|invalid_request_error|malformed|schema|unsupported model|capability mismatch|permission denied|missing required file|file not found/i.test(errorText);
}

export interface RecoveryDecisionInput {
  config: AutomaticRecoveryConfig;
  errorText: string | null | undefined;
  recoveryAttemptsUsed: number;
  elapsedMs: number;
  snapshot: RecoveryAttemptSnapshot;
}

export function formatRecoverySummary(recovery: AgentRecoveryMetadata | null | undefined): string | null {
  if (!recovery) return null;

  const attemptsUsed = Math.max(0, Number(recovery.attemptsUsed) || 0);
  const classifierSuffix = recovery.lastClassifier ? ` (${recovery.lastClassifier})` : "";
  const strategySuffix = Array.isArray(recovery.strategyHistory) && recovery.strategyHistory.length > 0
    ? ` via ${recovery.strategyHistory.join(" → ")}`
    : "";

  if (recovery.recovered) {
    return `Automatic recovery succeeded after ${attemptsUsed} attempt(s)${classifierSuffix}${strategySuffix}.`;
  }
  if (recovery.exhausted) {
    return `Automatic recovery exhausted after ${attemptsUsed} attempt(s)${classifierSuffix}${strategySuffix}.`;
  }
  if (attemptsUsed > 0) {
    return `Automatic recovery used ${attemptsUsed} attempt(s)${classifierSuffix}${strategySuffix}.`;
  }
  return null;
}

export function decideAutomaticRecovery(input: RecoveryDecisionInput): RecoveryDecision {
  const errorText = String(input.errorText || "").trim();

  if (!input.config.enabled) {
    return {
      recover: false,
      classifier: "disabled",
      strategy: null,
      reason: "Automatic turn recovery is disabled.",
    };
  }

  if (input.recoveryAttemptsUsed >= input.config.maxAttempts || input.elapsedMs >= input.config.totalBudgetMs) {
    return {
      recover: false,
      classifier: "budget_exhausted",
      strategy: null,
      reason: "Automatic recovery budget exhausted.",
    };
  }

  if (input.snapshot.hadToolActivity) {
    // Tool activity normally prevents automatic retry because replaying
    // side-effecting tools is unsafe. However, when the failure is clearly
    // context-pressure related (compaction was in progress or the error text
    // indicates context limits), compaction-then-retry is still safe because
    // the retry will compact first and the tools already executed are part of
    // the persisted session history.
    if (isContextPressureFailure(errorText) || input.snapshot.sawCompactionIntent) {
      return {
        recover: true,
        classifier: "context_pressure",
        strategy: "compact_then_retry",
        reason: "Failure looks context-related despite tool activity; compacting before retrying.",
      };
    }
    return {
      recover: false,
      classifier: "tool_activity",
      strategy: null,
      reason: "Automatic recovery skipped because tool activity occurred during the failed run.",
    };
  }

  if (input.snapshot.hadCompletedTurnOutput) {
    return {
      recover: false,
      classifier: "completed_turn_output",
      strategy: null,
      reason: "Automatic recovery skipped because a completed assistant turn was already emitted during the failed run.",
    };
  }

  if (isNonRecoverableFailure(errorText)) {
    return {
      recover: false,
      classifier: "non_recoverable",
      strategy: null,
      reason: "Failure classified as non-recoverable.",
    };
  }

  if (input.snapshot.compactionErrorMessage) {
    if (isTransientFailure(errorText)) {
      return {
        recover: true,
        classifier: "compaction_failure",
        strategy: "retry",
        reason: "Transient compaction failure; retrying without another compaction first.",
      };
    }
    return {
      recover: false,
      classifier: "compaction_failure",
      strategy: null,
      reason: "Compaction failure classified as hard failure for this recovery cycle.",
    };
  }

  if (isContextPressureFailure(errorText) || input.snapshot.sawCompactionIntent) {
    return {
      recover: true,
      classifier: "context_pressure",
      strategy: "compact_then_retry",
      reason: "Failure looks context-related; compacting before retrying.",
    };
  }

  if (isTransientFailure(errorText) || input.snapshot.hadPartialOutput || !errorText) {
    return {
      recover: true,
      classifier: "transient",
      strategy: "retry",
      reason: "Failure looks transient or interrupted mid-turn; retrying before compaction.",
    };
  }

  return {
    recover: true,
    classifier: "unknown",
    strategy: "retry",
    reason: "Unknown mid-turn failure; defaulting to one bounded retry path.",
  };
}

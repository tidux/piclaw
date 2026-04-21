import {
  buildInjectedShellEnv,
  getKeychainEntry,
  listKeychainEntries,
  resolveKeychainPlaceholders,
} from "./keychain.js";

export interface TextRedactor {
  redact(text: string): string;
  maxNeedleLength: number;
  hasReplacements: boolean;
  needles?: string[];
}

export interface StreamingTextRedactor {
  push(text: string): string;
  flush(): string;
}

export type InjectedShellFamily = "posix" | "powershell";

function isImplicitKeychainUnavailableError(error: unknown): boolean {
  if (error instanceof Error) {
    return error.message.includes("Keychain is disabled")
      || error.message.includes("Cannot use a closed database")
      || error.message.includes("no such table: keychain_entries")
      || error.message.includes("operation-specific reason");
  }
  return typeof error === "object" && error !== null && String((error as { name?: unknown }).name || "") === "OperationError";
}

function shellQuote(value: string): string {
  return `'${value.replace(/'/g, `'"'"'`)}'`;
}

function powerShellQuote(value: string): string {
  return `'${value.replace(/'/g, "''")}'`;
}

function shouldRedactSecret(secret: string): boolean {
  return secret.length >= 4 || secret.includes("\n");
}

const SENSITIVE_KEYCHAIN_NAME_PATTERN = /(^|[\/_.-])(token|password|passwd|pass|pat|secret|api[_-]?key|access[_-]?key|private[_-]?key|credential|credentials|cookie|session|oauth|bearer)([\/_.-]|$)/i;

function shouldRedactKeychainEntry(entry: { name: string; type: string; secret: string }): boolean {
  if (!shouldRedactSecret(entry.secret)) return false;
  if (entry.secret.includes("\n")) return true;
  if (entry.type === "token" || entry.type === "password" || entry.type === "basic") return true;
  return SENSITIVE_KEYCHAIN_NAME_PATTERN.test(entry.name);
}

export async function createKeychainOutputRedactor(): Promise<TextRedactor> {
  try {
    const values = new Map<string, string>();
    for (const { name } of listKeychainEntries()) {
      try {
        const entry = await getKeychainEntry(name);
        const secret = entry.secret;
        if (!secret || !shouldRedactKeychainEntry(entry) || values.has(secret)) continue;
        values.set(secret, name);
      } catch (error) {
        if (isImplicitKeychainUnavailableError(error)) continue;
        continue;
      }
    }

    const replacements = [...values.keys()]
      .map((secret) => ({ secret }))
      .sort((a, b) => b.secret.length - a.secret.length);

    if (replacements.length === 0) {
      return {
        redact: (text) => text,
        maxNeedleLength: 0,
        hasReplacements: false,
        needles: [],
      };
    }

    return {
      redact: (text) => {
        let next = text;
        for (const replacement of replacements) {
          next = next.replaceAll(replacement.secret, `[REDACTED]`);
        }
        return next;
      },
      maxNeedleLength: replacements[0]?.secret.length ?? 0,
      hasReplacements: true,
      needles: replacements.map((replacement) => replacement.secret),
    };
  } catch {
    return {
      redact: (text) => text,
      maxNeedleLength: 0,
      hasReplacements: false,
      needles: [],
    };
  }
}

export function createStreamingTextRedactor(redactor: TextRedactor): StreamingTextRedactor {
  if (!redactor.hasReplacements || redactor.maxNeedleLength <= 1) {
    return {
      push: (text) => redactor.redact(text),
      flush: () => "",
    };
  }

  const needles = (redactor.needles ?? []).filter((needle) => needle.length > 1);
  const prefixes = new Set<string>();
  for (const needle of needles) {
    for (let length = 1; length < needle.length; length += 1) {
      prefixes.add(needle.slice(0, length));
    }
  }

  const maxTailLength = redactor.maxNeedleLength - 1;
  let tail = "";

  const longestPotentialPrefixSuffixLength = (text: string): number => {
    if (prefixes.size === 0) {
      return Math.min(text.length, maxTailLength);
    }

    const maxLength = Math.min(text.length, maxTailLength);
    for (let length = maxLength; length > 0; length -= 1) {
      if (prefixes.has(text.slice(text.length - length))) {
        return length;
      }
    }
    return 0;
  };

  return {
    push(text) {
      const raw = `${tail}${text}`;
      const tailKeep = longestPotentialPrefixSuffixLength(raw);
      const emitRaw = raw.slice(0, raw.length - tailKeep);
      tail = raw.slice(raw.length - tailKeep);
      return redactor.redact(emitRaw);
    },
    flush() {
      if (!tail) return "";
      const next = redactor.redact(tail);
      tail = "";
      return next;
    },
  };
}

export async function redactKeychainSecretsInText(text: string): Promise<string> {
  const redactor = await createKeychainOutputRedactor();
  return redactor.redact(text);
}

export async function redactKeychainSecretsInValue(value: unknown): Promise<unknown> {
  const redactor = await createKeychainOutputRedactor();
  const visit = (input: unknown): unknown => {
    if (typeof input === "string") return redactor.redact(input);
    if (Array.isArray(input)) return input.map((entry) => visit(entry));
    if (!input || typeof input !== "object") return input;
    return Object.fromEntries(Object.entries(input as Record<string, unknown>).map(([key, entry]) => [key, visit(entry)]));
  };
  return visit(value);
}

async function resolveInjectedExecParts(command: string, args: string[]): Promise<{ resolvedCommand: string; resolvedArgs: string[]; injectedEnv: Record<string, string> }> {
  const resolvedCommand = await resolveKeychainPlaceholders(command);
  const resolvedArgs = await Promise.all(args.map((value) => resolveKeychainPlaceholders(value)));
  const injectedEnv = await buildInjectedShellEnv({
    includeProcessEnv: false,
    referencedTexts: [command, ...args],
  });
  return { resolvedCommand, resolvedArgs, injectedEnv };
}

export async function buildInjectedExecCommand(
  shellFamily: InjectedShellFamily,
  command: string,
  args: string[] = [],
): Promise<{ command: string; commandArgs: string[]; env: Record<string, string> }> {
  const { resolvedCommand, resolvedArgs, injectedEnv } = await resolveInjectedExecParts(command, args);

  if (shellFamily === "powershell") {
    const lines = [
      "$ErrorActionPreference = 'Stop'",
      `& ${[resolvedCommand, ...resolvedArgs].map(powerShellQuote).join(" ")}`,
      "if ($null -ne $LASTEXITCODE) { exit $LASTEXITCODE }",
    ];
    return {
      command: "powershell",
      commandArgs: ["-NoProfile", "-Command", lines.join("; ")],
      env: injectedEnv,
    };
  }

  const execCommand = `exec ${[resolvedCommand, ...resolvedArgs].map(shellQuote).join(" ")}`;
  return {
    command: "sh",
    commandArgs: ["-lc", execCommand],
    env: injectedEnv,
  };
}

export async function buildInjectedPosixCommand(command: string, args: string[] = []): Promise<{ command: string; commandArgs: string[] }> {
  return buildInjectedExecCommand("posix", command, args);
}

export async function buildInjectedPowerShellCommand(command: string, args: string[] = []): Promise<{ command: string; commandArgs: string[] }> {
  return buildInjectedExecCommand("powershell", command, args);
}

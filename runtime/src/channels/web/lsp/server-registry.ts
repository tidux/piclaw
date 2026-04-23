import { accessSync, constants } from "node:fs";
import path from "node:path";

import { WORKSPACE_DIR } from "../../../core/config.js";
import { resolveWorkspacePath, toRelativePath } from "../workspace/paths.js";
import {
  getCuratedLanguageServerProfiles,
  type CuratedLanguageServerProfile,
} from "./curated-language-servers.js";

export interface LspServerCommandSpec {
  command: string;
  args: string[];
}

export interface LspServerProfile {
  id: string;
  languageId: string;
  label: string;
  extensions: string[];
  rootMarkers: string[];
  singleFile: boolean;
  command: LspServerCommandSpec;
  install: CuratedLanguageServerProfile["install"];
  activation: CuratedLanguageServerProfile["activation"];
  initializationOptions?: Record<string, unknown>;
}

export interface ResolvedLspTarget {
  profile: LspServerProfile;
  relativePath: string;
  absolutePath: string;
  rootPath: string;
  rootRelativePath: string;
  executablePath: string | null;
  available: boolean;
  unavailableReason: string | null;
}

function cloneProfile(profile: CuratedLanguageServerProfile): LspServerProfile {
  return {
    ...profile,
    extensions: [...profile.extensions],
    rootMarkers: [...profile.rootMarkers],
    command: {
      ...profile.command,
      args: [...profile.command.args],
    },
    install: {
      ...profile.install,
      packages: [...profile.install.packages],
    },
    activation: {
      ...profile.activation,
    },
    initializationOptions: profile.initializationOptions ? { ...profile.initializationOptions } : undefined,
  };
}

const WINDOWS_EXECUTABLE_EXTS = [".exe", ".cmd", ".bat"];

function getExecutableCandidates(command: string): string[] {
  if (process.platform !== "win32") return [command];
  const ext = path.extname(command);
  if (ext) return [command];
  return WINDOWS_EXECUTABLE_EXTS.map((suffix) => `${command}${suffix}`);
}

export function listLspServerProfiles(): LspServerProfile[] {
  return getCuratedLanguageServerProfiles().map((profile) => cloneProfile(profile));
}

export function findLspProfileForPath(inputPath: string | null | undefined): LspServerProfile | null {
  const ext = path.extname(String(inputPath || "")).toLowerCase();
  if (!ext) return null;
  return listLspServerProfiles().find((profile) => profile.extensions.includes(ext)) || null;
}

export function findProjectRoot(absPath: string, markers: string[]): string | null {
  let current = path.dirname(absPath);
  const workspaceRoot = path.resolve(WORKSPACE_DIR);
  while (true) {
    for (const marker of markers) {
      try {
        accessSync(path.join(current, marker), constants.F_OK);
        return current;
      } catch {}
    }
    if (current === workspaceRoot) break;
    const parent = path.dirname(current);
    if (!parent || parent === current) break;
    current = parent;
  }
  return null;
}

export function findExecutable(command: string, rootPath?: string | null): string | null {
  const candidates: string[] = [];
  const seen = new Set<string>();

  const pushCandidate = (value: string) => {
    const normalized = path.normalize(value);
    if (seen.has(normalized)) return;
    seen.add(normalized);
    candidates.push(value);
  };

  if (rootPath) {
    for (const candidate of getExecutableCandidates(command)) {
      pushCandidate(path.join(rootPath, "node_modules", ".bin", candidate));
    }
  }
  for (const candidate of getExecutableCandidates(command)) {
    pushCandidate(path.join(WORKSPACE_DIR, "node_modules", ".bin", candidate));
    pushCandidate(path.join(WORKSPACE_DIR, ".local", "bin", candidate));
  }
  const pathEntries = String(process.env.PATH || "").split(path.delimiter).filter(Boolean);
  for (const entry of pathEntries) {
    for (const candidate of getExecutableCandidates(command)) {
      pushCandidate(path.join(entry, candidate));
    }
  }

  for (const candidate of candidates) {
    try {
      accessSync(candidate, constants.X_OK);
      return candidate;
    } catch {}
  }
  return null;
}

export function resolveLspTargetForPath(inputPath: string | null | undefined): ResolvedLspTarget | null {
  const profile = findLspProfileForPath(inputPath);
  if (!profile) return null;

  const absolutePath = resolveWorkspacePath(String(inputPath || ""));
  if (!absolutePath) return null;

  const relativePath = toRelativePath(absolutePath);
  const discoveredRoot = findProjectRoot(absolutePath, profile.rootMarkers);
  const rootPath = discoveredRoot || (profile.singleFile ? path.dirname(absolutePath) : "");
  if (!rootPath) {
    return {
      profile,
      relativePath,
      absolutePath,
      rootPath: "",
      rootRelativePath: "",
      executablePath: null,
      available: false,
      unavailableReason: "No supported project root was found for this file.",
    };
  }

  const rootRelativePath = toRelativePath(rootPath);
  const executablePath = findExecutable(profile.command.command, rootPath);
  return {
    profile,
    relativePath,
    absolutePath,
    rootPath,
    rootRelativePath,
    executablePath,
    available: Boolean(executablePath),
    unavailableReason: executablePath ? null : `Language server executable "${profile.command.command}" was not found in the workspace or PATH.`,
  };
}

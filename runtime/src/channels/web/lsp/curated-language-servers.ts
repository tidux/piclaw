import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

export type CuratedLanguageServerInstallStrategy = "npm-global" | "go-install" | "cargo-binstall" | "system-copy";

export interface CuratedLanguageServerProfile {
  id: string;
  languageId: string;
  label: string;
  extensions: string[];
  rootMarkers: string[];
  singleFile: boolean;
  command: {
    command: string;
    args: string[];
  };
  install: {
    strategy: CuratedLanguageServerInstallStrategy;
    brewFormula?: string;
    packages: string[];
    binary: string;
    workspaceBinDir: string;
  };
  activation: {
    editor: boolean;
    agentRead: boolean;
    agentWritePreview: boolean;
    autoActivate: boolean;
  };
  initializationOptions?: Record<string, unknown>;
}

interface CuratedLanguageServerManifest {
  servers: CuratedLanguageServerProfile[];
}

const MANIFEST_PATH = fileURLToPath(new URL("../../../../config/language-servers.json", import.meta.url));

let cachedProfiles: CuratedLanguageServerProfile[] | null = null;

function cloneCuratedLanguageServerProfile(profile: CuratedLanguageServerProfile): CuratedLanguageServerProfile {
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

export function getCuratedLanguageServerProfiles(): CuratedLanguageServerProfile[] {
  if (!cachedProfiles) {
    const raw = JSON.parse(readFileSync(MANIFEST_PATH, "utf8")) as CuratedLanguageServerManifest;
    cachedProfiles = raw.servers.map((profile) => cloneCuratedLanguageServerProfile(profile));
  }
  return cachedProfiles.map((profile) => cloneCuratedLanguageServerProfile(profile));
}

export function getCuratedLanguageServerProfile(id: string): CuratedLanguageServerProfile | null {
  return getCuratedLanguageServerProfiles().find((profile) => profile.id === id) || null;
}

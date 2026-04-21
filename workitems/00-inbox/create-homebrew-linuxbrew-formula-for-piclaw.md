---
id: create-homebrew-linuxbrew-formula-for-piclaw
title: Create a Homebrew/Linuxbrew formula for YOLO installation of Piclaw
status: inbox
priority: medium
created: 2026-04-21
updated: 2026-04-21
target_release: later
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - packaging
  - homebrew
  - linuxbrew
  - install
  - distribution
owner: pi
blocked-by: []
---

# Create a Homebrew/Linuxbrew formula for YOLO installation of Piclaw

## Summary

Add a Homebrew/Linuxbrew formula so users can install Piclaw with a single
`brew install` command on macOS and Linux, without needing to know about Bun,
Docker, or the GitHub package path.

## Why

The current install paths are:

- Docker (recommended, most explicit)
- `bun add -g github:rcarmo/piclaw` (experimental, requires Bun)
- Build from source (developer path)

None of these are "I saw a cool project, let me try it" one-liners. Homebrew
is that entry point for macOS and Linux users.

## Goal

```bash
brew install rcarmo/tap/piclaw
```

or, if merged into homebrew-core:

```bash
brew install piclaw
```

This should:
1. Install Bun (if not present) or use it as a Homebrew dependency
2. Install Piclaw globally via `bun add -g`
3. Place the `piclaw` binary in PATH
4. Provide a `brew services start piclaw` workflow (optional stretch goal)

## Design decisions to answer

### 1. Tap or homebrew-core?

A personal tap (`rcarmo/homebrew-piclaw` or `rcarmo/tap`) is faster to ship
and easier to maintain. Core requires the project to meet Homebrew's criteria
(notable, stable, no language-ecosystem-native install).

**Recommendation:** personal tap first, core later if demand warrants it.

### 2. Bun as a dependency

Homebrew has a `bun` formula. The Piclaw formula can declare:

```ruby
depends_on "oven-sh/bun/bun"
```

or check for Bun in PATH and fail with a clear error if missing.

Alternatively, the formula can bundle a Bun binary for the target platform.

### 3. Build from source vs package install

Two viable approaches:

**A — bun global install (simpler)**
The formula downloads the tagged `.tgz` or uses `bun add -g github:rcarmo/piclaw@<version>`.
Fast but relies on Bun's package manager.

**B — build from source (more Homebrew-idiomatic)**
Formula downloads the source tarball, runs `bun install && make build-piclaw`,
and installs the resulting binary. Longer but avoids runtime Bun dependency for
install itself.

**Recommendation:** Path A first. The runtime already requires Bun anyway.

### 4. Versioning

Formula should pin to tagged releases (e.g. `v1.8.3`), not `main`.
The `VERSION` file at repo root is authoritative.

### 5. `brew services` support

Piclaw needs persistent storage (`/workspace`) and is typically user-scoped.
A `brew services` plist would be a stretch goal — the user experience for
first-time setup (workspace location, TOTP secret, etc.) needs resolution
before making it a system service.

## Acceptance Criteria

- [ ] A Homebrew formula exists and installs Piclaw on macOS (Intel + Apple Silicon).
- [ ] The same formula works on Linux via Linuxbrew.
- [ ] `brew audit --strict rcarmo/tap/piclaw` passes or known exceptions are documented.
- [ ] Installation places `piclaw` in PATH and `piclaw --version` works.
- [ ] A basic smoke test (`piclaw --help` or equivalent) is documented.
- [ ] The tap/formula repository is published.
- [ ] `docs/install-from-repo.md` or a new `docs/homebrew.md` documents the brew install path.
- [ ] README.md "Other install methods" section includes the brew command.

## Implementation Paths

### Path A — personal tap + bun global install (recommended first)

1. Create `rcarmo/homebrew-piclaw` (or `rcarmo/homebrew-tap`) on GitHub.
2. Write a Ruby formula that:
   - declares `depends_on "oven-sh/bun/bun"` (or checks for Bun)
   - runs `bun add -g github:rcarmo/piclaw@<version>` in `install`
   - links the `piclaw` binary into Homebrew's prefix
3. Publish the tap.
4. Test on macOS arm64 + x86_64 and Linux x86_64.

**Formula skeleton:**

```ruby
class Piclaw < Formula
  desc "Personal pi coding agent assistant — self-hosted AI workspace"
  homepage "https://github.com/rcarmo/piclaw"
  url "https://github.com/rcarmo/piclaw/archive/refs/tags/v1.8.3.tar.gz"
  sha256 "..."
  license "MIT"

  depends_on "oven-sh/bun/bun"

  def install
    system "bun", "install", "--frozen-lockfile"
    system "bun", "run", "build-piclaw"
    bin.install "piclaw" => "piclaw"
  end

  test do
    assert_match "piclaw", shell_output("#{bin}/piclaw --version")
  end
end
```

### Path B — Homebrew core (later, if popularity warrants)

Submit to `homebrew/homebrew-core` once the project meets notability criteria.

## Test Plan

- [ ] `brew install rcarmo/tap/piclaw` completes on macOS arm64
- [ ] `brew install rcarmo/tap/piclaw` completes on macOS x86_64
- [ ] `brew install rcarmo/tap/piclaw` completes on Linux x86_64
- [ ] `piclaw --version` returns the expected version string
- [ ] `brew audit --strict rcarmo/tap/piclaw` output documented

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Formula published in tap
- [ ] Docs updated
- [ ] README updated
- [ ] Ticket front matter updated

## Updates

### 2026-04-21
- Created from user request for a YOLO one-liner install path.
- Recommended path: personal tap + `bun add -g` install first; homebrew-core later.
- Key open decision: whether to build from source or use `bun add -g` in the formula.
- Quality: ★★★☆☆ 6/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 1)

## Links

- https://brew.sh
- https://docs.brew.sh/Formula-Cookbook
- https://docs.brew.sh/Acceptable-Formulae
- `docs/install-from-repo.md`
- `README.md` — Other install methods
- `VERSION`
- `BUN_VERSION`

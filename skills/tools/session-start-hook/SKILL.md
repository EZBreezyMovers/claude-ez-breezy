---
name: session-start-hook
description: Use when setting up a repository for Claude Code on the web for the first time, or when remote sessions are failing because dependencies aren't installed. Creates a SessionStart hook that auto-installs project dependencies at the start of every remote session.
---

# session-start-hook

Automates the creation of `SessionStart` hooks for Claude Code on the web. Analyzes your project's dependencies and generates a shell script that installs everything needed for tests and linters to run cleanly at the start of every remote session.

## What It Does

1. **Analyzes dependencies** — Scans the project for known manifest files and determines the correct package manager(s):
   - `package.json` / `package-lock.json` → `npm`
   - `pyproject.toml` / `requirements.txt` → `pip` or `Poetry`
   - `Cargo.toml` → `cargo`
   - `go.mod` → `go`
   - `Gemfile` → `bundler`

2. **Designs the hook script** — Writes an idempotent, non-interactive shell script tailored to your project.

3. **Creates the hook file** — Places the script at `.claude/hooks/session-start.sh` and sets it executable.

4. **Registers the hook** — Adds or merges the hook entry into `.claude/settings.json` under `SessionStart`.

5. **Validates execution** — Runs the hook directly to confirm dependencies install successfully.

6. **Validates linter** — Runs the project linter against a sample file to confirm it works post-install.

7. **Validates tests** — Runs a single test to confirm the test suite is functional.

8. **Commits and pushes** — Commits the new hook files and pushes to the remote branch.

## Generated Files

| File | Purpose |
|------|---------|
| `.claude/hooks/session-start.sh` | The hook script that installs dependencies |
| `.claude/settings.json` | Registers the hook under `SessionStart` |

## Execution Modes

### Synchronous (default)
The session waits for the hook to finish before starting. Guarantees all dependencies are ready before Claude begins work.

### Async (opt-in)
Add `{"async": true, "asyncTimeout": 300000}` as the first output line of the hook. Session starts immediately while the hook runs in the background.

```bash
#!/bin/bash
set -euo pipefail

echo '{"async": true, "asyncTimeout": 300000}'

npm install
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `$CLAUDE_PROJECT_DIR` | Absolute path to the repository root |
| `$CLAUDE_ENV_FILE` | Path to a file where you can write `export VAR=val` lines to persist env vars |
| `$CLAUDE_CODE_REMOTE` | Set to `"true"` when running in a remote (web) environment |

## Notes

- Written for remote (web) sessions by default. Use `$CLAUDE_CODE_REMOTE` to restrict to web only.
- Prefer `npm install` over `npm ci` — container state is cached after the hook runs.
- Once merged into the default branch, all future Claude Code on the web sessions use the hook automatically.

---
name: keybindings-help
description: Use when the user wants to customize keyboard shortcuts, rebind keys, add chord bindings, or modify ~/.claude/keybindings.json. Examples: "rebind ctrl+s", "add a chord shortcut", "change the submit key", "customize keybindings".
---

# keybindings-help

Guides you through customizing keyboard shortcuts in Claude Code. This skill modifies `~/.claude/keybindings.json` to rebind existing keys, add new shortcuts, or create multi-key chord bindings — all without requiring manual JSON editing.

## What It Does

- **Rebind existing keys** — Change the key assigned to any built-in Claude Code action
- **Add new shortcuts** — Map custom key combinations to actions that currently have no binding
- **Create chord bindings** — Set up multi-step key sequences (e.g., `Ctrl+K` then `Ctrl+S`) for a single action
- **Modify `keybindings.json`** — Directly edits `~/.claude/keybindings.json`, creating the file if it doesn't exist

## When to Use

| You want to... | Use this skill |
|----------------|----------------|
| Change the submit key from Enter to something else | Yes |
| Add a chord shortcut like `Ctrl+K Ctrl+C` | Yes |
| Rebind `Ctrl+S` to a different action | Yes |
| View all available keybinding actions | Yes |
| Reset keybindings to defaults | Yes |

## Keybindings File Location

```
~/.claude/keybindings.json
```

This file is global and applies to all Claude Code sessions on the machine.

## Example Keybindings

### Rebind the submit key

```json
[
  {
    "key": "ctrl+enter",
    "command": "submit"
  }
]
```

### Add a chord binding

```json
[
  {
    "key": "ctrl+k ctrl+s",
    "command": "save"
  }
]
```

### Multiple custom bindings

```json
[
  {
    "key": "ctrl+enter",
    "command": "submit"
  },
  {
    "key": "ctrl+shift+c",
    "command": "cancel"
  },
  {
    "key": "ctrl+k ctrl+n",
    "command": "newSession"
  }
]
```

## Notes

- Changes take effect the next time you start a Claude Code session.
- The `~/.claude/keybindings.json` file is created automatically if it does not exist.
- Chord bindings are two-key sequences entered one after the other (not simultaneously).

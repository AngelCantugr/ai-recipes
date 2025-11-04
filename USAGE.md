# AI Recipes - Usage Guide

Quick reference for using the recipe management system from your terminal.

## Installation

Already done! The recipe manager is integrated into your shell configuration.

## Quick Start

```bash
# List all recipes
recipes

# Browse interactively (with preview)
recb

# Show a specific recipe
recipe show code-exploration

# Copy recipe to clipboard
recipe copy technical-decision

# Quick show + copy
recq code-review
```

## Creating & Managing Recipes

```bash
# Create a new recipe (uses AI)
recipe new api-design-patterns

# Optimize an existing recipe (uses AI)
recipe optimize code-exploration

# Update the catalog
recipe sync

# Edit a recipe manually
recipe edit meeting-prep
```

## Advanced Workflows

### 1. Browse and Use
```bash
# Interactive browser with preview
recb
# Select with Enter, or use Ctrl-Y to copy
```

### 2. Find and Edit
```bash
# Search for recipes about testing
recipe find test

# Edit the one you want
recipe edit test-strategy
```

### 3. Create from Current Context
```bash
# If you're working on something and want to capture it as a recipe
cd /path/to/your/project
recipe-new-here database-migration-strategy
# AI will consider your current project context
```

### 4. Open Entire Recipe Repo
```bash
# Open in your editor (Neovim)
recp
```

## Subagents

The recipe system uses OpenCode subagents:

- **@recipe-writer** - Creates and maintains recipes with consistent structure
- **@catalog-manager** - Keeps CATALOG.md synchronized
- **@prompt-optimizer** - Reviews and improves existing recipes

These are automatically invoked by commands like `recipe new`, `recipe optimize`, and `recipe sync`.

## Tips

1. **Use `recb` for discovery** - The interactive browser helps when you're not sure which recipe you need
2. **Use `recq` for speed** - Show and copy in one command
3. **Use `recipes` regularly** - Quick way to see what's available
4. **Customize freely** - All recipes are templates; adapt them to your needs

## Integration with Other Tools

The recipe manager works well with your existing AI tools:

```bash
# Use with your AI chat tools
recipe show system-design | ai  # Ask Aider about it
recq code-review | copq          # Quick question to Copilot

# Combine with your editor
recipe edit incident-postmortem  # Opens in Neovim
```

## Keyboard Shortcuts

If using fzf in `recb`:
- **Enter**: Show recipe
- **Ctrl-Y**: Copy to clipboard (if configured)
- **Ctrl-E**: Edit in editor (if configured)

## Categories Reference

- 🥗 **appetizers/** - Quick tasks (5-15 min)
- 🍖 **mains/** - Substantial work (30+ min)
  - architecture/
  - code-quality/
  - leadership/
- 🥖 **sides/** - Supporting tasks
- 🍰 **desserts/** - Finishing touches
- 🧂 **ingredients/** - Reusable patterns

## Common Use Cases

### Starting a New Project
```bash
recipe show system-design
recipe show technical-decision
recipe show test-strategy
```

### Code Review Time
```bash
recq code-review
```

### Debugging Production Issue
```bash
recipe show quick-debug
recipe show incident-postmortem
```

### Writing Documentation
```bash
recipe show documentation-generator
recipe show technical-writing
```

## Help Commands

```bash
recipe help         # CLI help
rechelp            # Extended help with workflows
recipe list        # List all recipes
recipe find <q>    # Search recipes
```

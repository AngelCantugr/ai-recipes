# AI Recipes - Quick Start

You now have a command-line tool to manage your AI prompt recipes from anywhere!

## ✅ Setup Complete

The following has been configured:

1. **CLI Tool**: `/bin/recipe` - Main command-line interface
2. **Shell Integration**: `~/.config/zsh/ai-recipes-aliases.zsh` - Aliases and functions
3. **Subagents**: `.opencode/agent/` - AI assistants for recipe management
4. **Documentation**: `AGENTS.md` - Repository guidelines for coding agents

## 🚀 Try It Now

Open a new terminal (or run `source ~/.zshrc`) and try:

```bash
# List all recipes
recipes

# Show a recipe
recipe show code-exploration

# Browse interactively (requires fzf)
recb

# Get help
rechelp
```

## 📚 Common Commands

### Viewing Recipes

```bash
recipes                          # List all available recipes
recipe show <name>               # Display a specific recipe
recipe find <query>              # Search recipes by content
recb                            # Interactive browser with preview
```

### Using Recipes

```bash
recq code-review                # Show and copy to clipboard
recu technical-decision         # Show then open in editor
recipe copy <name>              # Copy to clipboard only
```

### Creating & Managing

```bash
recipe new api-guidelines       # Create new recipe with AI
recipe optimize code-review     # Improve existing recipe with AI
recipe sync                     # Update CATALOG.md with AI
recipe edit meeting-prep        # Manual edit
```

### Quick Access

```bash
rec list                        # Short alias
recp                           # Open entire repo in editor
```

## 🤖 AI Subagents

Three specialized agents help manage recipes:

- **@recipe-writer** - Creates and maintains recipes
- **@catalog-manager** - Syncs CATALOG.md
- **@prompt-optimizer** - Improves recipe quality

These are automatically invoked by `recipe new`, `recipe optimize`, and `recipe sync`.

## 🎯 Integration with Your Workflow

### With Your Existing AI Tools

```bash
# Use with Aider
recipe show system-design | ai

# Use with Copilot
recq code-review  # Copy, then paste in Copilot chat

# Use with OpenCode
recipe new <name>  # Launches OpenCode with subagent
```

### With Your Editor

```bash
# Edit a recipe
recipe edit incident-postmortem

# Open entire repo
recp
```

### With fzf (Interactive Browsing)

```bash
# Browse with live preview
recb
# Use arrow keys, Enter to select, Ctrl-C to cancel
```

## 📂 Recipe Categories

- 🥗 **appetizers/** - Quick tasks (5-15 min)
  - code-exploration, quick-debug, meeting-prep

- 🍖 **mains/** - Major work (30+ min)
  - **architecture/** - system-design, technical-decision, scalability-review
  - **code-quality/** - code-review, refactoring-strategy, test-strategy
  - **leadership/** - technical-strategy, technical-mentoring, incident-postmortem

- 🥖 **sides/** - Supporting tasks
  - documentation-generator, technical-writing, meeting-summary

- 🍰 **desserts/** - Polish & finish
  - pr-polish, final-checklist, retrospective

- 🧂 **ingredients/** - Reusable patterns
  - prompt-patterns, context-templates

## 💡 Pro Tips

1. **Start with `recipes`** to see what's available
2. **Use `recb`** for visual browsing and discovery
3. **Use `recq`** when you know exactly what you need
4. **Customize freely** - all recipes are templates
5. **Create new recipes** when you discover useful prompts

## 🔧 Customization

All configuration is in:
- CLI: `/bin/recipe`
- Shell aliases: `~/.config/zsh/ai-recipes-aliases.zsh`
- Subagents: `.opencode/agent/`

Edit these files to customize behavior.

## 📖 Next Steps

1. Browse existing recipes: `recipes` or `recb`
2. Try using one: `recq code-exploration`
3. Read the full catalog: `cat $AI_RECIPES_DIR/CATALOG.md`
4. Get help anytime: `rechelp`

## ⚡ ADHD-Friendly Features

- **One-command workflows** - `recq` shows and copies in one step
- **Visual browsing** - `recb` with preview reduces decision fatigue
- **Quick access** - No need to navigate to the repo directory
- **Context switching** - Use recipes from anywhere
- **Clear categories** - Food metaphor makes organization intuitive

---

Happy cooking with AI! 🍳

For detailed help: `rechelp`
For all commands: `recipe help`

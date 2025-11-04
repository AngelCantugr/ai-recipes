# Recipe CLI Tool

Command-line interface for managing AI prompt recipes.

## Quick Setup

Add to your shell configuration (already done if using zsh with ai-recipes-aliases.zsh):

```bash
export PATH="$PATH:$HOME/GitRepositories/angelcantugr/ai-recipes/bin"
```

Or create a symlink:

```bash
ln -s ~/GitRepositories/angelcantugr/ai-recipes/bin/recipe /usr/local/bin/recipe
```

## Usage

See full help:
```bash
recipe help
```

Quick commands:
```bash
recipe list                    # List all recipes
recipe show code-exploration   # Display a recipe
recipe find debug              # Search recipes
recipe copy technical-decision # Copy to clipboard
```

## Features

- List and browse all recipes
- Search by content or name
- Copy recipes to clipboard (macOS)
- Edit recipes in your preferred editor
- Launch OpenCode subagents for AI-assisted recipe management

## Integration

Works seamlessly with:
- OpenCode subagent system (@recipe-writer, @catalog-manager, @prompt-optimizer)
- Your shell aliases and functions (see ~/.config/zsh/ai-recipes-aliases.zsh)
- fzf for interactive browsing
- bat for syntax-highlighted display

# Integration Guide 🔌

Multiple ways to integrate AI Recipes with your favorite AI tools and workflows.

## Quick Start

**Choose your integration method**:
- 🔧 [Shell CLI](#shell-cli) - Simple, works everywhere
- 🚀 [MCP Server](#mcp-server) - Powerful, works with Claude Desktop/Code
- 🤖 [GitHub Copilot CLI](#github-copilot-cli) - Direct integration with Copilot
- ⚡ [Shell Functions](#shell-functions) - Quick aliases and functions

---

## Shell CLI

The simplest way to access recipes from your terminal.

### Setup

```bash
# Add to PATH
export PATH="$PATH:/path/to/ai-recipes/bin"

# Or create symlink
ln -s /path/to/ai-recipes/bin/recipe /usr/local/bin/recipe
```

### Usage

```bash
# List all recipes
recipe list

# Show a specific recipe
recipe show code-exploration

# Search for recipes
recipe find debugging

# Copy to clipboard
recipe copy one-pager

# View documentation
recipe docs fundamentals

# Get a random recipe for inspiration
recipe random
```

### Integration with AI Tools

```bash
# Pipe directly to GitHub Copilot
recipe show system-design | gh copilot explain

# Use with Claude Code (if you have it in PATH)
recipe show code-review | claude-code --stdin

# Copy and paste manually
recipe show design-document | pbcopy  # macOS
recipe show design-document | xclip -selection clipboard  # Linux
```

### Advanced Usage

```bash
# Find and use in one command
recipe show $(recipe list mains | fzf | awk '{print $1}')

# Create custom wrapper
function ai-review() {
    local code_file="$1"
    recipe show code-review
    echo "---"
    cat "$code_file"
}

# Batch process
for recipe in code-exploration quick-debug meeting-prep; do
    echo "=== $recipe ==="
    recipe show $recipe
done
```

---

## MCP Server

Model Context Protocol server for Claude Desktop, Claude Code, and other MCP-compatible tools.

### What is MCP?

MCP (Model Context Protocol) lets AI applications access external data sources and tools. The AI Recipes MCP server exposes all recipes and documentation as tools and resources that Claude can access directly.

### Setup

#### 1. Install Dependencies

```bash
cd /path/to/ai-recipes/mcp-server
npm install
```

#### 2. Configure Claude Desktop

Add to your Claude Desktop config (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS):

```json
{
  "mcpServers": {
    "ai-recipes": {
      "command": "node",
      "args": [
        "/absolute/path/to/ai-recipes/mcp-server/index.js"
      ]
    }
  }
}
```

#### 3. Restart Claude Desktop

The AI Recipes server will now be available in Claude Desktop.

### Available Tools

The MCP server provides these tools to Claude:

- **`list_recipes`** - List all recipes, optionally filtered by category
- **`get_recipe`** - Get full content of a specific recipe
- **`search_recipes`** - Search recipes by keyword
- **`get_documentation`** - Get learning documentation
- **`list_documentation`** - List all available docs

### Usage in Claude Desktop

```
# Ask Claude to list recipes
"Show me all available recipes in the mains category"

# Get a specific recipe
"Get the one-pager recipe"

# Search for recipes
"Search recipes for 'architecture'"

# Get documentation
"Show me the prompt engineering fundamentals documentation"

# Use recipe content
"I need to create a design document. Get the design-document recipe
and help me fill it out for a new caching service."
```

### Resources

All recipes and docs are also exposed as MCP resources:

- `recipe://appetizers/code-exploration`
- `recipe://mains/one-pager`
- `docs://prompt-engineering/01-fundamentals`
- etc.

Claude can read these directly when you reference them.

### Configure for Claude Code

If using with Claude Code, add to your MCP settings:

```json
{
  "mcpServers": {
    "ai-recipes": {
      "command": "node",
      "args": ["/absolute/path/to/ai-recipes/mcp-server/index.js"],
      "env": {}
    }
  }
}
```

---

## GitHub Copilot CLI

Integrate recipes directly with GitHub Copilot's CLI tool.

### Setup

```bash
# Install GitHub Copilot CLI
gh extension install github/gh-copilot

# Verify installation
gh copilot --version
```

### Usage Patterns

#### 1. Explain a Recipe

```bash
# Understand what a recipe does
recipe show system-design | gh copilot explain
```

#### 2. Generate from Recipe

```bash
# Use recipe as context for generation
cat <(recipe show one-pager) <(echo "Create a one-pager for migrating to Kubernetes") | gh copilot suggest
```

#### 3. Interactive Mode

```bash
# Start chat with recipe context
gh copilot chat

# Then in the chat:
# @workspace /path/to/ai-recipes/mains/design-document.md
```

#### 4. Shell Function Wrapper

```bash
# Add to your .bashrc or .zshrc
function copilot-recipe() {
    local recipe_name="$1"
    shift
    local question="$@"

    echo "Recipe: $(recipe show $recipe_name)"
    echo "---"
    echo "Question: $question"
} | gh copilot suggest

# Usage
copilot-recipe design-document "Create design doc for API rate limiting"
```

### Advanced Integration

Create a custom script `bin/ai-recipe-copilot`:

```bash
#!/bin/bash
# AI Recipe + GitHub Copilot integration

recipe_name="$1"
shift
task="$@"

# Get the recipe
recipe_content=$(recipe show "$recipe_name")

# Create prompt for Copilot
prompt=$(cat <<EOF
I'm using this prompt engineering recipe:

$recipe_content

---

Please help me with this task:
$task

Follow the recipe template and ask me for any information you need to fill in the placeholders.
EOF
)

# Send to Copilot
echo "$prompt" | gh copilot suggest
```

Usage:
```bash
ai-recipe-copilot one-pager "Create proposal for adding GraphQL API"
```

---

## Shell Functions

Quick functions to add to your `.bashrc` or `.zshrc`.

### Basic Functions

```bash
# Quick recipe access
r() {
    recipe show "$1"
}

# Recipe + copy
rc() {
    recipe copy "$1"
}

# Recipe search
rs() {
    recipe find "$1"
}

# Interactive recipe selector with fzf
ri() {
    local selected=$(recipe list | fzf --preview 'recipe show {1}')
    if [ -n "$selected" ]; then
        local name=$(echo "$selected" | awk '{print $1}')
        recipe show "$name"
    fi
}
```

### AI Tool Integration Functions

```bash
# Recipe to Claude (if you have Claude CLI)
recipe-claude() {
    local recipe_name="$1"
    shift
    local context="$@"

    {
        recipe show "$recipe_name"
        echo "---"
        echo "$context"
    } | claude --stdin
}

# Recipe to Copilot
recipe-copilot() {
    local recipe_name="$1"
    shift
    local question="$@"

    {
        echo "Using recipe: $recipe_name"
        recipe show "$recipe_name"
        echo "---"
        echo "Task: $question"
    } | gh copilot suggest
}

# Recipe to any AI (via clipboard)
recipe-ai() {
    local recipe_name="$1"
    recipe show "$recipe_name" | pbcopy  # or xclip
    echo "Recipe '$recipe_name' copied to clipboard. Paste into your AI tool."
}
```

### Workflow Functions

```bash
# Start a new design doc
new-design-doc() {
    local project_name="$1"

    # Get the template
    recipe show design-document > "design-${project_name}.md"

    # Open in editor
    $EDITOR "design-${project_name}.md"
}

# Create a one-pager
new-one-pager() {
    local topic="$1"

    recipe show one-pager > "one-pager-${topic}.md"
    $EDITOR "one-pager-${topic}.md"
}

# Daily recipe
daily-recipe() {
    echo "Recipe of the day:"
    recipe random
}
```

### Context Management Functions

```bash
# Build context for AI from multiple recipes
build-context() {
    local output_file="${1:-ai-context.txt}"

    echo "# AI Context - $(date)" > "$output_file"
    echo "" >> "$output_file"

    # Add selected recipes
    for recipe in code-exploration system-design technical-decision; do
        echo "## Recipe: $recipe" >> "$output_file"
        recipe show "$recipe" >> "$output_file"
        echo "" >> "$output_file"
    done

    echo "Context built: $output_file"
}

# Create project-specific recipe bundle
bundle-recipes() {
    local project="$1"
    local bundle_dir="ai-recipes-${project}"

    mkdir -p "$bundle_dir"

    # Copy commonly used recipes
    recipe show code-exploration > "$bundle_dir/01-exploration.md"
    recipe show system-design > "$bundle_dir/02-design.md"
    recipe show code-review > "$bundle_dir/03-review.md"
    recipe show one-pager > "$bundle_dir/04-one-pager.md"

    echo "Recipe bundle created in $bundle_dir/"
}
```

---

## IDE Integration

### VS Code

Create tasks in `.vscode/tasks.json`:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Show Recipe",
      "type": "shell",
      "command": "recipe show ${input:recipeName}",
      "problemMatcher": []
    },
    {
      "label": "Copy Recipe",
      "type": "shell",
      "command": "recipe copy ${input:recipeName}",
      "problemMatcher": []
    }
  ],
  "inputs": [
    {
      "id": "recipeName",
      "type": "promptString",
      "description": "Recipe name"
    }
  ]
}
```

### JetBrains IDEs

Create External Tools (Settings → Tools → External Tools):

**Tool: Show Recipe**
- Program: `/path/to/ai-recipes/bin/recipe`
- Arguments: `show $Prompt$`
- Working directory: `$ProjectFileDir$`

**Tool: Copy Recipe**
- Program: `/path/to/ai-recipes/bin/recipe`
- Arguments: `copy $Prompt$`
- Working directory: `$ProjectFileDir$`

---

## API/Programmatic Access

### Node.js

```javascript
import { execSync } from 'child_process';

function getRecipe(name) {
  return execSync(`recipe show ${name}`, { encoding: 'utf-8' });
}

function searchRecipes(keyword) {
  return execSync(`recipe find ${keyword}`, { encoding: 'utf-8' });
}

// Usage
const designDoc = getRecipe('design-document');
console.log(designDoc);
```

### Python

```python
import subprocess

def get_recipe(name):
    result = subprocess.run(
        ['recipe', 'show', name],
        capture_output=True,
        text=True
    )
    return result.stdout

def search_recipes(keyword):
    result = subprocess.run(
        ['recipe', 'find', keyword],
        capture_output=True,
        text=True
    )
    return result.stdout

# Usage
design_doc = get_recipe('design-document')
print(design_doc)
```

---

## Comparison: Which Integration to Use?

| Method | Pros | Cons | Best For |
|--------|------|------|----------|
| **Shell CLI** | Simple, fast, works everywhere | Manual workflow | Quick lookups, scripting |
| **MCP Server** | Native Claude integration, powerful | Requires setup, Claude-specific | Claude Desktop/Code users |
| **Copilot CLI** | Direct Copilot integration | Requires gh CLI, Copilot subscription | GitHub Copilot users |
| **Shell Functions** | Customizable, fast | Requires shell config | Power users, custom workflows |

**Recommendations**:

- **Just starting?** Use the Shell CLI (`recipe show <name>`)
- **Using Claude Desktop?** Set up the MCP Server
- **GitHub Copilot user?** Use Copilot CLI integration
- **Power user?** Add Shell Functions to your config

**Use multiple!** These methods work together. You can use the CLI for quick lookups, MCP for Claude Desktop, and shell functions for custom workflows.

---

## Troubleshooting

### CLI Tool Not Found

```bash
# Check if recipe is executable
ls -la /path/to/ai-recipes/bin/recipe

# Make it executable
chmod +x /path/to/ai-recipes/bin/recipe

# Check PATH
echo $PATH | grep ai-recipes
```

### MCP Server Not Connecting

```bash
# Test the server directly
cd /path/to/ai-recipes/mcp-server
node index.js

# Check Claude Desktop logs
tail -f ~/Library/Logs/Claude/mcp*.log
```

### GitHub Copilot CLI Issues

```bash
# Verify Copilot is installed
gh copilot --version

# Re-authenticate
gh auth refresh -h github.com -s copilot
```

---

## Advanced Usage

### Custom MCP Server

Extend the MCP server with your own tools:

```javascript
// In mcp-server/index.js, add to tools array:
{
  name: 'custom_tool',
  description: 'Your custom functionality',
  inputSchema: {
    // ... your schema
  }
}
```

### Automated Workflows

```bash
#!/bin/bash
# Auto-generate design docs from templates

project="$1"

# Get template
recipe show design-document > "${project}-design.md"

# Fill in basics
sed -i "s/\[project name\]/$project/g" "${project}-design.md"

# Open for editing
code "${project}-design.md"
```

### Integration with Other Tools

**Notion/Obsidian**:
```bash
# Export recipe to Obsidian vault
recipe show design-document > ~/Obsidian/Templates/Design-Doc.md
```

**Slack Bot**:
```bash
# Post recipe to Slack channel
recipe show one-pager | slack-cli post -c engineering-docs
```

---

## Next Steps

- Try the Shell CLI: `recipe list`
- Set up MCP if using Claude Desktop
- Create custom shell functions for your workflow
- Explore the [documentation](docs/README.md) for deeper learning

---

**Need help?** Check out the [README](README.md) or [QUICKSTART](QUICKSTART.md) guides.

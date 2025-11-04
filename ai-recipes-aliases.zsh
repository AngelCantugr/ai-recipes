# ═══════════════════════════════════════════════════════════════════════════
# AI RECIPES INTEGRATION
# ═══════════════════════════════════════════════════════════════════════════
# Quick access to AI prompt recipe management and subagents
# Integrates with OpenCode subagent system
# ═══════════════════════════════════════════════════════════════════════════

# ═══════════════════════════════════════════════════════════════════════════
# CONFIGURATION
# ═══════════════════════════════════════════════════════════════════════════

export AI_RECIPES_DIR="${AI_RECIPES_DIR:-$HOME/GitRepositories/angelcantugr/ai-recipes}"
export PATH="$PATH:$AI_RECIPES_DIR/bin"

# ═══════════════════════════════════════════════════════════════════════════
# CORE ALIASES
# ═══════════════════════════════════════════════════════════════════════════

# Quick access to recipe CLI
alias rec='recipe'
alias recipes='recipe list'

# ═══════════════════════════════════════════════════════════════════════════
# SMART FUNCTIONS
# ═══════════════════════════════════════════════════════════════════════════

# recipe-quick: Open a recipe and copy it to clipboard in one command
# Usage: recipe-quick code-exploration
recipe-quick() {
    if [[ -z "$1" ]]; then
        echo "Usage: recipe-quick <recipe-name>"
        return 1
    fi
    
    recipe show "$1"
    echo ""
    recipe copy "$1" 2>/dev/null || echo "💡 Tip: Recipe displayed above"
}
alias recq='recipe-quick'

# recipe-use: Show recipe and open in editor for customization
# Usage: recipe-use technical-decision
recipe-use() {
    if [[ -z "$1" ]]; then
        echo "Usage: recipe-use <recipe-name>"
        return 1
    fi
    
    recipe show "$1"
    echo ""
    echo "Press Enter to edit, or Ctrl-C to cancel..."
    read
    recipe edit "$1"
}
alias recu='recipe-use'

# recipe-browse: Fuzzy find and show recipes (requires fzf)
# Usage: recipe-browse
recipe-browse() {
    if ! command -v fzf >/dev/null 2>&1; then
        echo "❌ recipe-browse requires fzf"
        return 1
    fi
    
    local recipe_file
    recipe_file=$(fd -t f '\.md$' "$AI_RECIPES_DIR"/{appetizers,mains,sides,desserts,ingredients} 2>/dev/null | \
        sed "s|$AI_RECIPES_DIR/||" | \
        fzf --preview "bat --style=plain --color=always $AI_RECIPES_DIR/{}" \
            --preview-window=right:60%:wrap \
            --prompt='recipe> ' \
            --header='Enter: show | Ctrl-C: cancel') || return
    
    # Extract just the filename without extension and path
    local recipe_name
    recipe_name=$(basename "$recipe_file" .md)
    
    # Default action: show
    recipe show "$recipe_name"
}
alias recb='recipe-browse'

# recipe-project: Open recipes repo in your editor
# Usage: recipe-project
recipe-project() {
    cd "$AI_RECIPES_DIR" || return 1
    ${EDITOR:-nvim} .
}
alias recp='recipe-project'

# recipe-new-here: Create a new recipe with OpenCode in current context
# Usage: recipe-new-here api-versioning
recipe-new-here() {
    if [[ -z "$1" ]]; then
        echo "Usage: recipe-new-here <recipe-name>"
        return 1
    fi
    
    echo "🤖 Creating recipe: $1"
    echo "📂 Your context will help inform the recipe"
    echo ""
    
    (cd "$AI_RECIPES_DIR" && recipe new "$1")
}

# recipe-optimize-with-context: Optimize recipe with your current work context
# Usage: recipe-optimize-with-context code-review
recipe-optimize-with-context() {
    if [[ -z "$1" ]]; then
        echo "Usage: recipe-optimize-with-context <recipe-name>"
        return 1
    fi
    
    echo "🤖 Optimizing recipe: $1"
    echo "📂 Using your current project as context"
    echo ""
    
    (cd "$AI_RECIPES_DIR" && recipe optimize "$1")
}

# recipe-help: Show recipes help with category breakdown
recipe-help() {
    cat <<'EOF'
╔═══════════════════════════════════════════════════════════════════════════╗
║                     AI RECIPE MANAGER - HELP                              ║
╚═══════════════════════════════════════════════════════════════════════════╝

📚 QUICK COMMANDS:

  recipe list              List all available recipes
  recipe show <name>       Display a recipe
  recipe copy <name>       Copy recipe to clipboard (macOS)
  recipe edit <name>       Edit a recipe
  recipe find <query>      Search recipes
  recb                     Browse recipes with fzf (interactive)
  
🤖 SUBAGENT COMMANDS:

  recipe new <name>        Create new recipe (uses @recipe-writer)
  recipe optimize <name>   Improve recipe (uses @prompt-optimizer)
  recipe sync              Update catalog (uses @catalog-manager)

⚡ QUICK ALIASES:

  rec                      Short for 'recipe'
  recipes                  List all recipes
  recq <name>              Show and copy recipe
  recu <name>              Show recipe, then edit
  recb                     Browse recipes interactively
  recp                     Open recipes project in editor

📂 RECIPE CATEGORIES:

  🥗 appetizers/           Quick-start prompts (5-15 min)
  🍖 mains/               Major engineering work (30+ min)
     ├── architecture/    System design, technical decisions
     ├── code-quality/    Reviews, refactoring, testing
     └── leadership/      Strategy, mentoring, postmortems
  🥖 sides/                Supporting tasks (documentation, writing)
  🍰 desserts/             Finishing touches (polish, checklists)
  🧂 ingredients/          Reusable components (patterns, templates)

💡 WORKFLOWS:

  1. Find a recipe:
     recipes                    # List all
     recipe find debug          # Search
     recb                       # Browse interactively

  2. Use a recipe:
     recq code-exploration      # Quick show + copy
     recu technical-decision    # Show then customize

  3. Manage recipes:
     recipe new api-design      # Create with AI
     recipe optimize code-review # Improve with AI
     recipe sync                # Update catalog

  4. Browse and edit:
     recp                       # Open entire repo
     recipe edit meeting-prep   # Edit specific recipe

🎯 STAFF ENGINEER FOCUS:

  Popular recipes:
  - technical-decision        Making architecture choices
  - system-design            Designing new systems
  - code-review              Thorough PR reviews
  - technical-strategy       Setting technical vision
  - incident-postmortem      Learning from incidents

📚 MORE INFO:

  cat $AI_RECIPES_DIR/README.md          Full documentation
  cat $AI_RECIPES_DIR/CATALOG.md         Browse catalog

EOF
}
alias rechelp='recipe-help'

# ═══════════════════════════════════════════════════════════════════════════
# FZF INTEGRATION (Enhanced browsing)
# ═══════════════════════════════════════════════════════════════════════════

# fzf keybindings for recipes (if fzf is installed)
if command -v fzf >/dev/null 2>&1; then
    # Add completion for recipe command
    _recipe_completion() {
        local recipes
        recipes=($(fd -t f '\.md$' "$AI_RECIPES_DIR"/{appetizers,mains,sides,desserts,ingredients} 2>/dev/null -x basename {} .md))
        _describe 'recipe' recipes
    }
    
    compdef _recipe_completion recipe
fi

# ═══════════════════════════════════════════════════════════════════════════
# INITIALIZATION
# ═══════════════════════════════════════════════════════════════════════════

# Verify recipes directory exists
if [[ ! -d "$AI_RECIPES_DIR" ]]; then
    echo "⚠️  AI Recipes directory not found: $AI_RECIPES_DIR"
    echo "   Set AI_RECIPES_DIR or clone repo to expected location"
fi

# Show welcome message (once per day)
if [[ ! -f ~/.cache/ai-recipes-help-shown ]] || \
   [[ $(find ~/.cache/ai-recipes-help-shown -mtime +1 2>/dev/null) ]]; then
    mkdir -p ~/.cache
    
    if [[ -d "$AI_RECIPES_DIR" ]]; then
        echo "📚 AI Recipes loaded! Try: recipes, recb, rechelp"
    fi
    
    touch ~/.cache/ai-recipes-help-shown
fi

# ═══════════════════════════════════════════════════════════════════════════
# ADHD-FRIENDLY TIPS
# ═══════════════════════════════════════════════════════════════════════════
# Quick access reduces context switching
# Fuzzy finding reduces decision fatigue
# One-command workflows reduce cognitive load
# Visual browsing helps with discovery
# ═══════════════════════════════════════════════════════════════════════════

# AI Recipes 🍽️

A curated collection of AI prompt recipes for software engineering tasks, organized like a menu for easy discovery and reuse.

## 📖 Menu Structure

Our prompts are organized using a food metaphor to make categorization intuitive:

### 🥗 Appetizers (`appetizers/`)
Quick-start prompts to begin tasks. Perfect for:
- Initial exploration and analysis
- Quick wins and small tasks
- Starting conversations with AI

### 🍖 Mains (`mains/`)
Substantial prompts for core engineering work:
- **Architecture** - System design, technical decisions, scalability
- **Code Quality** - Reviews, refactoring, testing strategies
- **Leadership** - Technical direction, mentoring, strategy

### 🥖 Sides (`sides/`)
Supporting prompts that complement your main work:
- Documentation generation
- Meeting summaries
- Communication templates

### 🍰 Desserts (`desserts/`)
Finishing touches and polish:
- Final review checklists
- Polish and refinement
- Post-mortem analysis

### 🧂 Ingredients (`ingredients/`)
Reusable components and templates you can mix into any prompt:
- Prompt patterns
- Context templates
- Output formatters

## 🎯 Staff Engineer Focus

This collection emphasizes prompts relevant to Staff Software Engineer responsibilities:
- Technical leadership and mentoring
- System architecture and design
- Code quality and standards
- Strategic thinking and planning
- Cross-team collaboration

## 🚀 Quick Start

**Three ways to use AI Recipes**:

### 1. Manual Copy-Paste (Simplest)
1. Browse [CATALOG.md](CATALOG.md) to find relevant recipes
2. Open the recipe file
3. Copy the template
4. Customize with your context
5. Paste into your AI tool (ChatGPT, Claude, Copilot, etc.)

### 2. Command Line (Fastest)
```bash
# Setup (one time)
export PATH="$PATH:/path/to/ai-recipes/bin"

# Usage
recipe list                    # Browse all recipes
recipe show code-exploration   # View a recipe
recipe copy one-pager          # Copy to clipboard
recipe docs fundamentals       # Read learning guides
```

### 3. MCP Server (Most Powerful - Claude Desktop/Code)
```bash
# Setup
cd mcp-server
npm install

# Configure Claude Desktop (see INTEGRATION.md)
# Then use directly in Claude:
"Get the design-document recipe"
"Search recipes for debugging"
```

**See [INTEGRATION.md](INTEGRATION.md) for detailed setup and all integration options.**

## 📚 Learning Resources

New to prompt engineering? We have comprehensive learning materials:

- **[Documentation Hub](docs/README.md)** - Complete learning center
- **[Fundamentals](docs/prompt-engineering/01-fundamentals.md)** - Start here
- **[Advanced Patterns](docs/prompt-engineering/02-advanced-patterns.md)** - Chain-of-thought, meta-prompting, etc.
- **[Context Engineering](docs/context-engineering/01-context-design.md)** - Master context design
- **[Examples](docs/examples/before-after.md)** - Before/after transformations
- **[Glossary](docs/references/glossary.md)** - Complete terminology reference

**Learning Paths**: Structured 8-20 hour courses from beginner to expert.

## 📋 What's Inside

### Recipes (Ready-to-Use Templates)
- **18 recipes** across all categories
- **New**: One-pager, Design Document, Learning Session creators
- Each includes purpose, template, tips, and examples
- See [CATALOG.md](CATALOG.md) for full list

### Documentation (Deep Learning)
- **4 comprehensive prompt engineering guides** (80+ pages)
- **Context engineering patterns** and optimization strategies
- **50+ real-world examples** and transformations
- **100+ term glossary** for quick reference

### Integration Tools
- **Shell CLI** - Fast terminal access
- **MCP Server** - Native Claude Desktop/Code integration
- **Shell functions** - Custom workflow helpers
- See [INTEGRATION.md](INTEGRATION.md) for details

## 🔧 Integration Examples

**GitHub Copilot**:
```bash
recipe show system-design | gh copilot explain
```

**Claude Desktop** (with MCP server):
```
"Get the one-pager recipe and help me create a proposal for GraphQL migration"
```

**Shell Scripting**:
```bash
# Create new design doc from template
recipe show design-document > my-design.md
$EDITOR my-design.md
```

## 📝 Recipe Structure

Each recipe includes:
- **Purpose**: What it accomplishes (1-2 sentences)
- **When to Use**: Specific scenarios (bulleted list)
- **Template**: Copy-paste ready prompt with [placeholders]
- **Tips**: Best practices and advice (bulleted list)
- **Examples**: Real-world usage scenarios

## 🎯 Who This Is For

**Primary Audience**: Staff Software Engineers and developers learning AI interaction
**Focus Areas**:
- Technical leadership and decision-making
- System architecture and design
- Code quality and best practices
- Learning and skill development
- AI-assisted software engineering

## 📖 Key Resources

- **[CATALOG.md](CATALOG.md)** - Browse all recipes by category
- **[INTEGRATION.md](INTEGRATION.md)** - Setup CLI, MCP server, integrations
- **[QUICKSTART.md](QUICKSTART.md)** - 5-minute getting started guide
- **[docs/](docs/)** - Comprehensive learning materials
- **[CLAUDE.md](CLAUDE.md)** - Claude Code agent configuration

## 🤝 Contributing

Contributions welcome! See recipes for:
- **Format**: Follow existing recipe structure
- **Quality**: Include clear examples and tips
- **Scope**: Match food metaphor categories
- **Update**: Keep CATALOG.md in sync

Each recipe should be practical, actionable, and immediately useful.

---

*Bon appétit! Happy prompting!* 🎨

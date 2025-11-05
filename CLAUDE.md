# Claude Code Guidelines for AI Recipes Repository

## Repository Purpose
This is a documentation and learning repository focused on prompt engineering and context engineering. It contains AI prompt recipes organized in food-themed categories (appetizers, mains, sides, desserts, ingredients) plus comprehensive learning materials in the `docs/` directory.

## Directory Structure

```
ai-recipes/
├── appetizers/          # Quick-start prompts (5-15 min tasks)
├── mains/              # Substantial engineering work (30min-4hr)
│   ├── architecture/   # System design, technical decisions
│   ├── code-quality/   # Reviews, refactoring, testing
│   └── leadership/     # Strategy, mentoring, postmortems
├── sides/              # Supporting tasks (documentation, summaries)
├── desserts/           # Finishing touches (polish, checklists)
├── ingredients/        # Reusable components and templates
├── docs/              # Learning materials for prompt/context engineering
│   ├── prompt-engineering/
│   ├── context-engineering/
│   ├── examples/
│   └── references/
├── bin/               # Shell scripts and integrations
└── .claude/           # Claude Code agent configurations
```

## Build/Test/Lint Commands
This is a documentation-only repository with no build or test commands.
- Validate markdown by reading files directly
- Use GitHub-flavored markdown conventions
- Check that new recipes follow the established template

## Documentation Style

### Recipe Files (appetizers/, mains/, sides/, desserts/)
**Required Structure**:
1. **Title with emoji** - Descriptive name + relevant emoji
2. **Purpose** - What the prompt accomplishes (1-2 sentences)
3. **When to Use** - Specific scenarios (bulleted list)
4. **Template** - Copy-paste ready prompt with [placeholders]
5. **Tips** - Best practices and advice (bulleted list)

**Style**:
- Target audience: Staff Software Engineers and learners
- Tone: Clear, practical, conversational
- Length: 30-60 lines (scannable)
- Use kebab-case filenames: `code-exploration.md`, `technical-decision.md`

### Learning Documentation (docs/)
**Required Structure**:
- Clear learning objectives at the start
- Progressive difficulty (beginner → intermediate → advanced)
- Concrete examples throughout
- Practical exercises or applications
- References to authoritative sources

**Style**:
- Target audience: Developers learning AI interaction patterns
- Tone: Educational, encouraging, thorough
- Include diagrams, examples, and real-world applications
- Cross-reference related concepts

## Content Guidelines

### Adding New Recipes
1. Place in appropriate directory based on scope:
   - `appetizers/` - Quick tasks (5-15 min)
   - `mains/` - Substantial work (30min-4hr)
   - `sides/` - Supporting tasks (15-60 min)
   - `desserts/` - Polish/finish (10-30 min)
   - `ingredients/` - Reusable components

2. Follow the recipe template structure
3. Update `CATALOG.md` with the new recipe
4. Ensure placeholders use [bracket notation]
5. Include practical, actionable tips

### Adding Documentation
1. Place in appropriate `docs/` subdirectory
2. Start with clear learning objectives
3. Use progressive examples (simple → complex)
4. Include practical exercises
5. Reference authoritative sources
6. Cross-link related concepts

## Naming Conventions
- **Files**: kebab-case with descriptive names
  - Good: `system-design.md`, `prompt-patterns.md`, `context-optimization.md`
  - Bad: `SystemDesign.md`, `doc1.md`, `temp.md`
- **Sections**: Title case with emoji
  - Example: `## Purpose 🎯`, `## When to Use 📋`

## Key Principles

1. **Practical Over Theoretical**: Focus on actionable guidance users can apply immediately
2. **Examples Required**: Every concept should have concrete examples
3. **Progressive Learning**: Structure content from simple to complex
4. **Cross-Referencing**: Link related recipes and documentation
5. **Maintenance**: Keep `CATALOG.md` synchronized with all recipes

## Using Claude Code with This Repository

### For Adding Recipes
```
I need a new recipe for [task type]. Please:
1. Determine the appropriate directory (appetizers/mains/sides/desserts)
2. Follow the recipe template structure
3. Include practical examples and tips
4. Update CATALOG.md with the new entry
```

### For Adding Documentation
```
I need documentation about [topic] in the docs/ directory. Please:
1. Create clear learning objectives
2. Structure content progressively
3. Include examples and exercises
4. Cross-reference related content
5. Add references to authoritative sources
```

### For Reviewing Content
```
Please review [file] for:
1. Adherence to style guidelines
2. Clarity and actionability
3. Proper structure and formatting
4. Cross-reference opportunities
5. Missing examples or tips
```

## Special Directories

### `.claude/agent/`
Contains agent configurations for specialized tasks:
- `recipe-writer.md` - Creates and maintains recipes
- `prompt-optimizer.md` - Reviews and improves prompts
- `catalog-manager.md` - Maintains CATALOG.md synchronization
- `learning-content-creator.md` - Creates educational documentation
- `context-engineer.md` - Optimizes context provision

### `docs/`
Learning materials organized by topic:
- `prompt-engineering/` - Comprehensive prompt engineering guides
- `context-engineering/` - Context optimization and design patterns
- `examples/` - Real-world examples and case studies
- `references/` - Links to papers, tools, and resources

### `bin/`
Shell scripts for integration:
- Integrates with Claude Code through core aliases
- Provides smart functions for quick access to recipes

## Common Tasks

### Creating a New Recipe
1. Read similar recipes for style reference
2. Create the recipe following the template
3. Update `CATALOG.md` in the appropriate section
4. Test that the prompt template is copy-paste ready

### Adding Learning Content
1. Identify the appropriate `docs/` subdirectory
2. Start with learning objectives
3. Build examples progressively
4. Include exercises or applications
5. Add to the docs README or index

### Reviewing and Optimizing
1. Check for clarity and actionability
2. Ensure examples are present and clear
3. Verify cross-references are accurate
4. Test that templates work as intended
5. Suggest improvements based on prompt engineering best practices

## Quality Standards

### For Recipes
- [ ] Follows required structure (title, purpose, when to use, template, tips)
- [ ] Template is copy-paste ready with clear placeholders
- [ ] Tips are specific and actionable
- [ ] Added to CATALOG.md
- [ ] Tone matches existing recipes
- [ ] Length is appropriate (30-60 lines)

### For Documentation
- [ ] Clear learning objectives stated upfront
- [ ] Progressive difficulty structure
- [ ] Multiple concrete examples included
- [ ] References to authoritative sources
- [ ] Cross-references to related content
- [ ] Practical exercises or applications
- [ ] Accessible to target audience

## Target Audience

**Primary**: Staff Software Engineers seeking to improve their AI interaction skills
**Secondary**: Developers at all levels learning prompt and context engineering
**Focus Areas**:
- Technical leadership and decision-making
- System architecture and design
- Code quality and best practices
- Learning and skill development
- AI-assisted software engineering

## Avoid

- Generic, theoretical content without examples
- Overly complex prompts that aren't beginner-friendly
- Missing or inadequate documentation structure
- Inconsistent tone or style
- Outdated references or techniques
- Creating new files unnecessarily (prefer editing existing)
- Using non-food metaphors for recipe organization

## References

See `docs/references/` for:
- Prompt engineering research papers
- Context engineering best practices
- AI tool documentation
- Learning resources
- Community contributions

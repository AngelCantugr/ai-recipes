# AI Recipes MCP Server

Model Context Protocol server for AI Recipes - serves prompt engineering recipes and documentation to Claude Desktop, Claude Code, and other MCP-compatible AI tools.

## What is MCP?

The [Model Context Protocol](https://modelcontextprotocol.io) allows AI applications to connect to external data sources and tools. This MCP server exposes the AI Recipes repository as:

- **Tools**: List, search, and retrieve recipes
- **Resources**: Direct access to all recipes and documentation

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or equivalent:

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

**Important**: Use the absolute path to `index.js`.

### 3. Restart Claude Desktop

The server will automatically connect when Claude Desktop starts.

## Usage

### In Claude Desktop

Ask Claude to use the recipes:

```
"List all available recipes"
"Get the code-exploration recipe"
"Search recipes for 'debugging'"
"Show me the prompt engineering fundamentals documentation"
```

Claude will use the MCP tools to fetch and display the content.

### In Claude Code

Configure in your MCP settings and use similarly to Claude Desktop.

## Available Tools

### `list_recipes`
List all available recipes, optionally filtered by category.

**Parameters**:
- `category` (optional): appetizers, mains, sides, desserts, or ingredients

**Example**:
```
"List all recipes in the mains category"
```

### `get_recipe`
Get the full content of a specific recipe.

**Parameters**:
- `name` (required): Recipe name (e.g., "code-exploration", "one-pager")

**Example**:
```
"Get the one-pager recipe"
```

### `search_recipes`
Search recipes by keyword in title or content.

**Parameters**:
- `keyword` (required): Search term

**Example**:
```
"Search recipes for 'architecture'"
```

### `get_documentation`
Get learning documentation on prompt or context engineering.

**Parameters**:
- `topic` (required): Documentation topic (e.g., "fundamentals", "advanced-patterns")

**Example**:
```
"Get the fundamentals documentation"
```

### `list_documentation`
List all available learning documentation.

**Example**:
```
"List all available documentation"
```

## Available Resources

All recipes and documentation are exposed as MCP resources:

**Recipes**:
- `recipe://appetizers/code-exploration`
- `recipe://appetizers/quick-debug`
- `recipe://appetizers/meeting-prep`
- `recipe://mains/one-pager`
- `recipe://mains/design-document`
- `recipe://mains/learning-session`
- ... (all recipes)

**Documentation**:
- `docs://prompt-engineering/01-fundamentals`
- `docs://prompt-engineering/02-advanced-patterns`
- `docs://prompt-engineering/03-optimization`
- `docs://prompt-engineering/04-pitfalls`
- `docs://context-engineering/01-context-design`
- `docs://examples/before-after`
- `docs://references/glossary`

Claude can read these resources directly when you reference them.

## Development

### Run in Development Mode

```bash
npm run dev
```

This uses Node's `--watch` flag to restart on file changes.

### Test the Server

```bash
# Start the server
npm start

# The server communicates via stdio, so you'll need an MCP client to test
# Use Claude Desktop or another MCP-compatible tool
```

### Debugging

Enable debug logging:

```bash
# Set environment variable before starting
DEBUG=mcp:* npm start
```

Check Claude Desktop logs:

```bash
# macOS
tail -f ~/Library/Logs/Claude/mcp*.log

# Linux
tail -f ~/.config/Claude/logs/mcp*.log
```

## How It Works

1. **Server Setup**: Creates an MCP server using `@modelcontextprotocol/sdk`
2. **Tool Registration**: Registers tools for listing, searching, and retrieving recipes
3. **Resource Registration**: Exposes all recipes and docs as URI-based resources
4. **File System Access**: Reads markdown files from the repository structure
5. **Communication**: Uses stdio transport to communicate with MCP clients

## Architecture

```
MCP Client (Claude Desktop/Code)
    ↓
MCP Protocol (stdio transport)
    ↓
AI Recipes MCP Server
    ↓
File System (repository markdown files)
```

## Extending

### Add New Tools

Edit `index.js` and add to the `tools` array in `ListToolsRequestSchema` handler:

```javascript
{
  name: 'your_tool_name',
  description: 'What it does',
  inputSchema: {
    type: 'object',
    properties: {
      // Your parameters
    },
    required: ['param1'],
  },
}
```

Then implement in the `CallToolRequestSchema` handler:

```javascript
case 'your_tool_name':
  return await this.yourToolMethod(args);
```

### Add New Resources

Resources are automatically generated from the file system. To add new resource types:

1. Add to `ListResourcesRequestSchema` handler
2. Implement reading logic in `ReadResourceRequestSchema` handler

## Troubleshooting

### Server Not Connecting

**Check configuration path**:
```bash
# Verify the path in Claude config is absolute and correct
ls -la /absolute/path/to/ai-recipes/mcp-server/index.js
```

**Check permissions**:
```bash
# Make sure index.js is executable
chmod +x index.js
```

**Check Node version**:
```bash
# Requires Node 18+
node --version
```

### Tools Not Appearing

**Restart Claude Desktop** after config changes.

**Check logs** for errors:
```bash
tail -f ~/Library/Logs/Claude/mcp*.log
```

### Resources Not Loading

**Verify repository structure**:
```bash
# From ai-recipes root:
ls -la appetizers/ mains/ sides/ desserts/ ingredients/ docs/
```

## Requirements

- Node.js >= 18.0.0
- Claude Desktop or other MCP-compatible client
- AI Recipes repository (parent directory)

## Related

- [Model Context Protocol Documentation](https://modelcontextprotocol.io)
- [MCP SDK](https://github.com/modelcontextprotocol/sdk)
- [Integration Guide](../INTEGRATION.md) - Other integration methods
- [Main README](../README.md) - Repository overview

## License

MIT

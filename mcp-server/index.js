#!/usr/bin/env node

/**
 * AI Recipes MCP Server
 *
 * Serves prompt engineering recipes through the Model Context Protocol.
 * Compatible with Claude Desktop, Claude Code, and other MCP clients.
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');

// Recipe categories
const CATEGORIES = {
  appetizers: { name: 'Appetizers', description: 'Quick start prompts (5-15 min)' },
  mains: { name: 'Mains', description: 'Substantial work (30min-4hr)' },
  sides: { name: 'Sides', description: 'Supporting tasks (15-60 min)' },
  desserts: { name: 'Desserts', description: 'Finishing touches (10-30 min)' },
  ingredients: { name: 'Ingredients', description: 'Reusable components' },
};

const DOCS_CATEGORIES = {
  'prompt-engineering': 'Prompt Engineering Guides',
  'context-engineering': 'Context Engineering Guides',
  'examples': 'Examples and Case Studies',
  'references': 'References and Glossary',
};

class RecipeServer {
  constructor() {
    this.server = new Server(
      {
        name: 'ai-recipes-server',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
          resources: {},
        },
      }
    );

    this.setupHandlers();
    this.server.onerror = (error) => console.error('[MCP Error]', error);
    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  setupHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: 'list_recipes',
          description: 'List all available prompt recipes, optionally filtered by category',
          inputSchema: {
            type: 'object',
            properties: {
              category: {
                type: 'string',
                description: 'Filter by category: appetizers, mains, sides, desserts, or ingredients',
                enum: Object.keys(CATEGORIES),
              },
            },
          },
        },
        {
          name: 'get_recipe',
          description: 'Get the full content of a specific recipe by name',
          inputSchema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'Name of the recipe (e.g., "code-exploration", "one-pager", "system-design")',
              },
            },
            required: ['name'],
          },
        },
        {
          name: 'search_recipes',
          description: 'Search recipes by keyword in title or content',
          inputSchema: {
            type: 'object',
            properties: {
              keyword: {
                type: 'string',
                description: 'Keyword to search for',
              },
            },
            required: ['keyword'],
          },
        },
        {
          name: 'get_documentation',
          description: 'Get learning documentation on prompt or context engineering',
          inputSchema: {
            type: 'object',
            properties: {
              topic: {
                type: 'string',
                description: 'Documentation topic (e.g., "fundamentals", "advanced-patterns", "context-design")',
              },
            },
            required: ['topic'],
          },
        },
        {
          name: 'list_documentation',
          description: 'List all available learning documentation',
          inputSchema: {
            type: 'object',
            properties: {},
          },
        },
      ],
    }));

    // List available resources
    this.server.setRequestHandler(ListResourcesRequestSchema, async () => {
      const resources = [];

      // Add recipe resources
      for (const [category, info] of Object.entries(CATEGORIES)) {
        const categoryPath = path.join(REPO_ROOT, category);
        try {
          const recipes = await this.findRecipes(categoryPath);
          for (const recipe of recipes) {
            const recipeName = path.basename(recipe, '.md');
            resources.push({
              uri: `recipe://${category}/${recipeName}`,
              name: `${info.name}: ${recipeName}`,
              description: `Recipe from ${info.description}`,
              mimeType: 'text/markdown',
            });
          }
        } catch (err) {
          console.error(`Error listing ${category}:`, err.message);
        }
      }

      // Add documentation resources
      for (const [category, name] of Object.entries(DOCS_CATEGORIES)) {
        const docsPath = path.join(REPO_ROOT, 'docs', category);
        try {
          const docs = await this.findDocs(docsPath);
          for (const doc of docs) {
            const docName = path.basename(doc, '.md');
            resources.push({
              uri: `docs://${category}/${docName}`,
              name: `${name}: ${docName}`,
              description: `Documentation: ${name}`,
              mimeType: 'text/markdown',
            });
          }
        } catch (err) {
          console.error(`Error listing docs ${category}:`, err.message);
        }
      }

      return { resources };
    });

    // Read resource content
    this.server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
      const uri = request.params.uri;

      if (uri.startsWith('recipe://')) {
        const recipePath = uri.replace('recipe://', '');
        const [category, name] = recipePath.split('/');
        const content = await this.getRecipeContent(category, name);
        return {
          contents: [
            {
              uri,
              mimeType: 'text/markdown',
              text: content,
            },
          ],
        };
      }

      if (uri.startsWith('docs://')) {
        const docsPath = uri.replace('docs://', '');
        const [category, name] = docsPath.split('/');
        const content = await this.getDocContent(category, name);
        return {
          contents: [
            {
              uri,
              mimeType: 'text/markdown',
              text: content,
            },
          ],
        };
      }

      throw new Error(`Unknown resource URI: ${uri}`);
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'list_recipes':
            return await this.listRecipes(args.category);

          case 'get_recipe':
            return await this.getRecipe(args.name);

          case 'search_recipes':
            return await this.searchRecipes(args.keyword);

          case 'get_documentation':
            return await this.getDocumentation(args.topic);

          case 'list_documentation':
            return await this.listDocumentation();

          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  async findRecipes(dirPath) {
    const recipes = [];
    try {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isFile() && entry.name.endsWith('.md')) {
          recipes.push(fullPath);
        } else if (entry.isDirectory()) {
          // Recursively search subdirectories (for mains/*)
          const subRecipes = await this.findRecipes(fullPath);
          recipes.push(...subRecipes);
        }
      }
    } catch (err) {
      // Directory might not exist, return empty
    }

    return recipes;
  }

  async findDocs(dirPath) {
    const docs = [];
    try {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });

      for (const entry of entries) {
        if (entry.isFile() && entry.name.endsWith('.md')) {
          docs.push(path.join(dirPath, entry.name));
        }
      }
    } catch (err) {
      // Directory might not exist
    }

    return docs;
  }

  async getRecipeContent(category, name) {
    const categoryPath = path.join(REPO_ROOT, category);
    const recipes = await this.findRecipes(categoryPath);

    const recipe = recipes.find((r) => {
      const recipeName = path.basename(r, '.md');
      return recipeName === name || r.includes(`/${name}.md`);
    });

    if (!recipe) {
      throw new Error(`Recipe '${name}' not found in category '${category}'`);
    }

    return await fs.readFile(recipe, 'utf-8');
  }

  async getDocContent(category, name) {
    const docPath = path.join(REPO_ROOT, 'docs', category, `${name}.md`);

    try {
      return await fs.readFile(docPath, 'utf-8');
    } catch (err) {
      throw new Error(`Documentation '${name}' not found in '${category}'`);
    }
  }

  async listRecipes(category) {
    const results = [];

    const categoriesToList = category ? [category] : Object.keys(CATEGORIES);

    for (const cat of categoriesToList) {
      const categoryPath = path.join(REPO_ROOT, cat);
      const recipes = await this.findRecipes(categoryPath);

      for (const recipePath of recipes) {
        const content = await fs.readFile(recipePath, 'utf-8');
        const title = content.match(/^# (.+)$/m)?.[1] || path.basename(recipePath, '.md');
        const name = path.basename(recipePath, '.md');

        results.push({
          category: cat,
          name,
          title,
          path: path.relative(REPO_ROOT, recipePath),
        });
      }
    }

    const output = results
      .map((r) => `**${r.category}/${r.name}**: ${r.title}`)
      .join('\n');

    return {
      content: [
        {
          type: 'text',
          text: `Found ${results.length} recipe(s):\n\n${output}`,
        },
      ],
    };
  }

  async getRecipe(name) {
    // Search all categories for the recipe
    for (const category of Object.keys(CATEGORIES)) {
      try {
        const content = await this.getRecipeContent(category, name);
        return {
          content: [
            {
              type: 'text',
              text: content,
            },
          ],
        };
      } catch (err) {
        // Continue searching
      }
    }

    throw new Error(`Recipe '${name}' not found in any category`);
  }

  async searchRecipes(keyword) {
    const results = [];

    for (const category of Object.keys(CATEGORIES)) {
      const categoryPath = path.join(REPO_ROOT, category);
      const recipes = await this.findRecipes(categoryPath);

      for (const recipePath of recipes) {
        const content = await fs.readFile(recipePath, 'utf-8');
        const name = path.basename(recipePath, '.md');

        if (
          content.toLowerCase().includes(keyword.toLowerCase()) ||
          name.toLowerCase().includes(keyword.toLowerCase())
        ) {
          const title = content.match(/^# (.+)$/m)?.[1] || name;
          results.push({
            category,
            name,
            title,
            preview: this.getPreview(content, keyword),
          });
        }
      }
    }

    const output = results
      .map((r) => `**${r.category}/${r.name}**: ${r.title}\n  → ${r.preview}`)
      .join('\n\n');

    return {
      content: [
        {
          type: 'text',
          text: `Found ${results.length} matching recipe(s):\n\n${output}`,
        },
      ],
    };
  }

  getPreview(content, keyword) {
    const lines = content.split('\n');
    const matchLine = lines.find((line) =>
      line.toLowerCase().includes(keyword.toLowerCase())
    );
    return matchLine ? matchLine.trim().substring(0, 100) : '';
  }

  async listDocumentation() {
    const results = [];

    for (const [category, name] of Object.entries(DOCS_CATEGORIES)) {
      const docsPath = path.join(REPO_ROOT, 'docs', category);
      const docs = await this.findDocs(docsPath);

      for (const docPath of docs) {
        const content = await fs.readFile(docPath, 'utf-8');
        const title = content.match(/^# (.+)$/m)?.[1] || path.basename(docPath, '.md');
        const docName = path.basename(docPath, '.md');

        results.push({
          category,
          name: docName,
          title,
        });
      }
    }

    const output = results
      .map((r) => `**${r.category}/${r.name}**: ${r.title}`)
      .join('\n');

    return {
      content: [
        {
          type: 'text',
          text: `Available Documentation:\n\n${output}`,
        },
      ],
    };
  }

  async getDocumentation(topic) {
    // Search all documentation categories
    for (const category of Object.keys(DOCS_CATEGORIES)) {
      try {
        const content = await this.getDocContent(category, topic);
        return {
          content: [
            {
              type: 'text',
              text: content,
            },
          ],
        };
      } catch (err) {
        // Continue searching
      }
    }

    throw new Error(`Documentation for '${topic}' not found`);
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('AI Recipes MCP Server running on stdio');
  }
}

const server = new RecipeServer();
server.run().catch(console.error);

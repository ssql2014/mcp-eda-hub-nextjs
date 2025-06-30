# Context7 MCP Server Guide

## Installation Complete ✅

The context7 MCP server has been successfully installed and configured in your Claude Desktop application.

## What is Context7?

Context7 is an MCP server that provides up-to-date, version-specific documentation directly into your AI assistant's context. It solves the problem of outdated or incorrect documentation by fetching real-time information from official sources.

## How to Use Context7

### Basic Usage

To use context7 in Claude Desktop, simply include "use context7" in your prompt along with the technology you want documentation for:

```
use context7 react hooks
```

```
use context7 python pandas dataframe
```

```
use context7 next.js app router
```

### Features

1. **Real-time Documentation**: Fetches the latest documentation from official sources
2. **Version-aware**: Provides version-specific information
3. **Code Examples**: Includes relevant code examples and best practices
4. **Multiple Technologies**: Supports a wide range of programming languages and frameworks

### Example Prompts

- "use context7 typescript generics - explain how to create generic functions"
- "use context7 react useEffect - show me the proper cleanup pattern"
- "use context7 node.js express middleware - how to create custom middleware"
- "use context7 python asyncio - explain async/await patterns"

## Testing Context7

To test if context7 is working:

1. **Restart Claude Desktop** (important!)
2. In a new conversation, type: `use context7 javascript array methods`
3. You should see context7 fetch current JavaScript documentation

## Troubleshooting

If context7 doesn't work:

1. **Restart Claude Desktop** - Configuration changes require a restart
2. **Check Installation** - The server uses `npx` to run the latest version automatically
3. **Internet Connection** - Context7 needs internet access to fetch documentation

## Benefits for Your MCP EDA Hub Project

Context7 can help with:
- Getting current Next.js documentation
- Understanding NextAuth.js configuration
- Learning about Prisma and database setup
- Staying updated with React best practices

## Configuration Location

Your context7 configuration is stored in:
```
~/Library/Application Support/Claude/claude_desktop_config.json
```

The configuration added:
```json
"context7": {
  "command": "npx",
  "args": [
    "-y",
    "@upstash/context7-mcp@latest"
  ]
}
```

This setup ensures you always use the latest version of context7.
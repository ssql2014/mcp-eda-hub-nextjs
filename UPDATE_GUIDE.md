# How to Update MCP Servers on Vercel

## Method 1: Manual Update & Deploy

1. **Edit the data file**:
   ```bash
   cd /Users/qlss/Documents/mcp-eda-hub-new/nextjs-app
   ```

2. **Open `src/lib/data.ts` and add your new server**:
   ```typescript
   {
       id: "your-server-id",
       name: "Your Server Name",
       author: "Author Name",
       category: "Design Entry", // or other category
       description: "Description of what your server does...",
       tags: ["tag1", "tag2", "tag3"],
       githubUrl: "https://github.com/ssql2014/mcp4eda/tree/main/your-server",
       installCommand: "git clone https://github.com/ssql2014/mcp4eda.git && cd mcp4eda/your-server && npm install && npm run build",
       config: {
           "your-server": {
               "command": "node",
               "args": ["/path/to/mcp4eda/your-server/dist/index.js"]
           }
       },
       features: [
           "Feature 1 description",
           "Feature 2 description",
           "Feature 3 description"
       ],
       dateAdded: "2025-01-28"
   }
   ```

3. **Deploy to Vercel**:
   ```bash
   vercel --prod
   ```

## Method 2: Automatic Deployment (Set up once)

1. **Connect your GitHub repository to Vercel**:
   - Go to https://vercel.com/dashboard
   - Click on your project
   - Go to Settings → Git
   - Connect your GitHub repository

2. **Enable automatic deployments**:
   - In Vercel project settings
   - Under "Git", ensure "Production Branch" is set to `main`
   - Enable "Automatically deploy from branches"

3. **Now, every time you update**:
   ```bash
   # Edit src/lib/data.ts to add new server
   git add .
   git commit -m "Add new MCP server: [server name]"
   git push origin main
   ```
   Vercel will automatically deploy!

## Available Categories

When adding a new server, use one of these categories:
- Design Entry
- Simulation
- Simulation Visualization
- Synthesis
- Physical Design
- Timing Analysis
- Power Analysis
- Verification
- Manufacturing
- PDK/Technology
- Test
- IP Management
- Utilities

## Quick Command Reference

```bash
# Navigate to project
cd /Users/qlss/Documents/mcp-eda-hub-new/nextjs-app

# Edit data file
code src/lib/data.ts
# or
nano src/lib/data.ts

# Test locally
npm run dev

# Deploy to Vercel
vercel --prod

# Or with Git (if auto-deploy is set up)
git add .
git commit -m "Add new server"
git push
```

## Tips

1. Always test locally first with `npm run dev`
2. Make sure the server ID is unique
3. Use existing categories when possible
4. Keep descriptions concise but informative
5. List key features that differentiate your server

## Need Help?

- Check existing servers in `src/lib/data.ts` for examples
- Vercel deployment status: https://vercel.com/ssql2014s-projects/mcp-eda-hub-latest
- Your live site: https://mcp-eda-hub-latest.vercel.app
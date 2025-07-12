# MCP EDA Hub

A curated directory of **Model Context Protocol (MCP) servers** specifically designed for **Electronic Design Automation (EDA)** tools and workflows. This platform helps engineers and researchers discover, evaluate, and integrate MCP servers that enhance EDA development environments.

## 🌟 Features

### 🔍 Server Discovery
- **Comprehensive Catalog**: Browse a curated collection of MCP servers for EDA applications
- **Advanced Search & Filtering**: Find servers by category, tags, author, or description
- **Category Organization**: Servers organized by EDA domains (Verification, Synthesis, P&R, etc.)
- **Tag-based Classification**: Fine-grained tagging system for precise discovery

### 🚀 Platform Capabilities
- **User Authentication**: Secure login and registration system
- **Server Submissions**: Community-driven submissions with admin approval workflow
- **Multi-language Support**: Available in English and Chinese
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Statistics**: Track server counts, categories, and community metrics

### 🔧 Developer Tools
- **Installation Commands**: Ready-to-use installation instructions for each server
- **Configuration Examples**: Sample configurations for quick setup
- **GitHub Integration**: Direct links to source repositories
- **Feature Documentation**: Detailed feature lists and capabilities

## 🛠️ Technology Stack

- **Frontend**: Next.js 15.3.4 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with Prisma adapter
- **Deployment**: Vercel-ready configuration

## 📦 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ssql2014/mcp-eda-hub-nextjs.git
   cd mcp-eda-hub-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your database and auth configuration
   ```

4. **Initialize the database**
   ```bash
   npm run setup
   npm run prisma:migrate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run setup` - Initialize database setup
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio

### Database Operations

- **Generate Prisma Client**: `npm run build` (includes `prisma generate`)
- **Push Schema Changes**: `npm run prisma:push`
- **View Database**: `npm run prisma:studio`

## 🌐 What is MCP?

The **Model Context Protocol (MCP)** is an open standard that enables AI assistants to securely access data and tools. In the EDA context, MCP servers provide:

- **Seamless Tool Integration**: Connect AI assistants with EDA tools and workflows
- **Automated Design Tasks**: Enable natural language interaction with complex EDA processes
- **Enhanced Productivity**: Streamline verification, synthesis, and analysis workflows
- **Standardized Interfaces**: Consistent APIs across different EDA platforms

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── admin/             # Admin dashboard
│   ├── ai-chip-design/    # AI chip design presentation
│   ├── api/               # API routes
│   └── submit/            # Server submission forms
├── components/            # Reusable React components
├── lib/                   # Utility functions and configurations
└── types/                 # TypeScript type definitions
```

## 🤝 Contributing

We welcome contributions from the EDA community! Here's how you can help:

### Adding New MCP Servers

1. **Submit via Web Interface**: Use the `/submit` page for new server submissions
2. **Direct Pull Request**: Edit `src/lib/data.ts` and submit a PR
3. **Issue Request**: Open an issue with server details for team review

### Development Contributions

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Related Links

- [Model Context Protocol Documentation](https://modelcontextprotocol.io)
- [MCP4EDA GitHub Organization](https://github.com/ssql2014/mcp4eda)
- [EDA Industry Resources](https://github.com/ssql2014/mcp4eda)

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/ssql2014/mcp-eda-hub-nextjs/issues)
- **Discussions**: [GitHub Discussions](https://github.com/ssql2014/mcp-eda-hub-nextjs/discussions)
- **Email**: Contact the maintainers through GitHub

---

**MCP EDA Hub** - Connecting AI assistants with Electronic Design Automation tools through the Model Context Protocol standard.

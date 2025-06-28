export const locales = ['en', 'zh'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export const translations = {
  en: {
    // Header
    siteName: 'MCP EDA Hub',
    nav: {
      servers: 'Servers',
      about: 'About',
      quickStart: 'Quick Start',
      login: 'Login',
      register: 'Register'
    },
    
    // Hero Section
    hero: {
      title: 'MCP EDA Hub',
      subtitle: 'Model Context Protocol Servers for Electronic Design Automation',
      searchPlaceholder: 'Search MCP servers...',
      banner: {
        text: 'New to Claude Code?',
        link: 'Check our step-by-step guide',
        arrow: '→'
      },
      stats: {
        servers: 'MCP Servers',
        categories: 'Categories',
        tags: 'Tags'
      }
    },
    
    // Categories
    categories: {
      title: 'Categories',
      showAll: 'Show All',
      showLess: 'Show Less',
      all: 'All Categories'
    },
    
    // Tags
    tags: {
      title: 'Filter by Tags',
      showAll: 'Show All',
      showLess: 'Show Less',
      clearAll: 'Clear All',
      selectedInfo: 'Showing servers with {count} selected tags'
    },
    
    // Servers
    servers: {
      allServers: 'All MCP Servers',
      by: 'by',
      noResults: 'No servers found',
      noResultsDesc: 'Try adjusting your search or filter criteria',
      new: 'NEW',
      sortBy: 'Sort by',
      sorting: {
        nameAsc: 'Name (A-Z)',
        nameDesc: 'Name (Z-A)',
        starsDesc: 'Most Stars',
        starsAsc: 'Least Stars',
        dateDesc: 'Newest First',
        dateAsc: 'Oldest First'
      }
    },
    
    // About
    about: {
      title: 'About MCP EDA Hub',
      whatIsMcp: {
        title: 'What is MCP?',
        desc: 'Model Context Protocol (MCP) is an open protocol that enables seamless integration between AI assistants and external tools.'
      },
      edaIntegration: {
        title: 'EDA Integration',
        desc: 'Access professional EDA tools directly from your AI assistant, streamlining your hardware design workflow.'
      },
      openSource: {
        title: 'Open Source',
        desc: 'All MCP servers are open source. Contribute, customize, or create your own EDA tool integrations.'
      }
    },
    
    // Footer
    footer: {
      rights: 'All rights reserved.',
      mcp: 'MCP Documentation'
    },
    
    // Modal
    modal: {
      description: 'Description',
      features: 'Features',
      installation: 'Installation',
      configuration: 'Configuration',
      tags: 'Tags',
      links: 'Links',
      viewOnGitHub: 'View on GitHub →',
      copy: 'Copy',
      copied: 'Copied!'
    },
    
    // Auth
    auth: {
      login: {
        title: 'Sign in to your account',
        email: 'Email',
        password: 'Password',
        submit: 'Sign in',
        noAccount: "Don't have an account?",
        signUp: 'Sign up'
      },
      register: {
        title: 'Create an account',
        name: 'Name',
        email: 'Email',
        password: 'Password',
        submit: 'Sign up',
        haveAccount: 'Already have an account?',
        signIn: 'Sign in'
      }
    },
    
    // Help Button
    help: {
      buttonTitle: 'How to use MCP servers in Claude Code',
      claudeCode: 'Claude Code Guide'
    },
    
    // Guide
    guide: {
      title: 'How to Use MCP Servers in Claude Code',
      subtitle: 'Complete guide to installing and using MCP servers from this website in Claude Code',
      copy: 'Copy',
      copied: 'Copied!',
      
      overview: {
        title: 'Overview',
        subtitle: 'What is Claude Code?',
        intro: 'Claude Code is an AI-powered CLI that lets you use MCP servers to enhance your development workflow. With MCP servers, you can give Claude access to specialized tools for EDA, file systems, databases, and more.',
        videoPlaceholder: 'Video tutorial coming soon...',
        keyPoints: 'Key Benefits:',
        point1: '🚀 Direct access to EDA tools from Claude',
        point2: '🔧 No manual tool switching needed',
        point3: '📊 Real-time data and computation',
        point4: '🔌 Easy to add and remove servers'
      },
      
      installation: {
        title: 'Installation',
        subtitle: 'Getting Started with Claude Code',
        step1: {
          title: 'Step 1: Install Claude Code',
          desc: 'Install Claude Code globally using npm:',
          note: 'Requires Node.js 16.0 or higher. Make sure you have npm installed.'
        },
        step2: {
          title: 'Step 2: Verify Installation',
          desc: 'Check that Claude Code is installed correctly:',
        },
        step3: {
          title: 'Step 3: Set Up API Key',
          desc: 'Configure your Anthropic API key:',
          item1: 'Get your API key from console.anthropic.com',
          item2: 'Set the environment variable: export ANTHROPIC_API_KEY="your-key"',
          item3: 'Or use claude-code configure to set it interactively'
        }
      },
      
      addingServers: {
        title: 'Adding MCP Servers',
        subtitle: 'Three Ways to Add MCP Servers',
        method1: {
          title: 'Method 1: Copy from Website (Recommended)',
          desc: 'The easiest way to add servers:',
          step1: 'Browse servers on this website',
          step2: 'Click on any server to view details',
          step3: 'Copy the configuration using the copy button',
          imagePlaceholder: 'Screenshot showing copy button in server modal'
        },
        method2: {
          title: 'Method 2: Edit Configuration File',
          desc: 'Manually edit your Claude Code configuration:',
          configExample: 'Add the server configuration to your mcpServers object:'
        },
        method3: {
          title: 'Method 3: Use CLI Command',
          desc: 'Add servers using the command line:',
          example: 'Example:'
        }
      },
      
      usingServers: {
        title: 'Using MCP Servers',
        subtitle: 'How to Use Installed Servers',
        step1: {
          title: 'Step 1: Start Claude Code',
          desc: 'Launch Claude Code in your project directory:'
        },
        step2: {
          title: 'Step 2: List Available Servers',
          desc: 'Check which MCP servers are available:'
        },
        step3: {
          title: 'Step 3: Use Server Commands',
          desc: 'Reference servers using @ notation in your prompts:',
          examples: 'Example Commands:'
        },
        tips: {
          title: '💡 Pro Tips',
          tip1: 'Use Tab completion to see available server commands',
          tip2: 'Combine multiple servers in a single prompt',
          tip3: 'Servers persist across Claude Code sessions'
        }
      },
      
      troubleshooting: {
        title: 'Troubleshooting',
        subtitle: 'Common Issues and Solutions',
        solution: 'Solution',
        issue1: {
          title: 'Server Not Found',
          problem: 'Claude says "Server not found" when using @ notation',
          solution: 'Restart Claude Code to reload the configuration:'
        },
        issue2: {
          title: 'Permission Errors',
          problem: 'Getting permission denied errors',
          solution: 'Check server logs and ensure proper file permissions:'
        },
        issue3: {
          title: 'Server Crashes',
          problem: 'MCP server stops responding',
          solution: 'Servers auto-restart, but you can manually restart Claude Code if needed'
        },
        resources: {
          title: 'Additional Resources',
          docs: 'Official Documentation',
          issues: 'Report Issues',
          discord: 'Community Discord'
        }
      }
    }
  },
  
  zh: {
    // Header
    siteName: 'MCP EDA 中心',
    nav: {
      servers: '服务器',
      about: '关于',
      quickStart: '快速开始',
      login: '登录',
      register: '注册'
    },
    
    // Hero Section
    hero: {
      title: 'MCP EDA 中心',
      subtitle: '用于电子设计自动化的模型上下文协议服务器',
      searchPlaceholder: '搜索 MCP 服务器...',
      banner: {
        text: '第一次使用 Claude Code？',
        link: '查看我们的分步指南',
        arrow: '→'
      },
      stats: {
        servers: 'MCP 服务器',
        categories: '分类',
        tags: '标签'
      }
    },
    
    // Categories
    categories: {
      title: '分类',
      showAll: '显示全部',
      showLess: '收起',
      all: '所有分类'
    },
    
    // Tags
    tags: {
      title: '按标签筛选',
      showAll: '显示全部',
      showLess: '收起',
      clearAll: '清除所有',
      selectedInfo: '显示包含 {count} 个所选标签的服务器'
    },
    
    // Servers
    servers: {
      allServers: '所有 MCP 服务器',
      by: '作者：',
      noResults: '未找到服务器',
      noResultsDesc: '请尝试调整搜索或筛选条件',
      new: '新',
      sortBy: '排序方式',
      sorting: {
        nameAsc: '名称 (A-Z)',
        nameDesc: '名称 (Z-A)',
        starsDesc: '星标最多',
        starsAsc: '星标最少',
        dateDesc: '最新优先',
        dateAsc: '最旧优先'
      }
    },
    
    // About
    about: {
      title: '关于 MCP EDA 中心',
      whatIsMcp: {
        title: '什么是 MCP？',
        desc: '模型上下文协议（MCP）是一个开放协议，能够实现 AI 助手与外部工具之间的无缝集成。'
      },
      edaIntegration: {
        title: 'EDA 集成',
        desc: '直接从您的 AI 助手访问专业的 EDA 工具，简化您的硬件设计工作流程。'
      },
      openSource: {
        title: '开源',
        desc: '所有 MCP 服务器都是开源的。您可以贡献、自定义或创建自己的 EDA 工具集成。'
      }
    },
    
    // Footer
    footer: {
      rights: '版权所有。',
      mcp: 'MCP 文档'
    },
    
    // Modal
    modal: {
      description: '描述',
      features: '功能特性',
      installation: '安装',
      configuration: '配置',
      tags: '标签',
      links: '链接',
      viewOnGitHub: '在 GitHub 上查看 →',
      copy: '复制',
      copied: '已复制！'
    },
    
    // Auth
    auth: {
      login: {
        title: '登录您的账户',
        email: '邮箱',
        password: '密码',
        submit: '登录',
        noAccount: '还没有账户？',
        signUp: '注册'
      },
      register: {
        title: '创建账户',
        name: '姓名',
        email: '邮箱',
        password: '密码',
        submit: '注册',
        haveAccount: '已有账户？',
        signIn: '登录'
      }
    },
    
    // Help Button
    help: {
      buttonTitle: '如何在 Claude Code 中使用 MCP 服务器',
      claudeCode: 'Claude Code 指南'
    },
    
    // Guide
    guide: {
      title: '如何在 Claude Code 中使用 MCP 服务器',
      subtitle: '从本网站安装和使用 MCP 服务器的完整指南',
      copy: '复制',
      copied: '已复制！',
      
      overview: {
        title: '概述',
        subtitle: '什么是 Claude Code？',
        intro: 'Claude Code 是一个 AI 驱动的 CLI，让您可以使用 MCP 服务器来增强开发工作流程。通过 MCP 服务器，您可以让 Claude 访问专门的 EDA 工具、文件系统、数据库等。',
        videoPlaceholder: '视频教程即将推出...',
        keyPoints: '主要优势：',
        point1: '🚀 从 Claude 直接访问 EDA 工具',
        point2: '🔧 无需手动切换工具',
        point3: '📊 实时数据和计算',
        point4: '🔌 轻松添加和删除服务器'
      },
      
      installation: {
        title: '安装',
        subtitle: '开始使用 Claude Code',
        step1: {
          title: '步骤 1：安装 Claude Code',
          desc: '使用 npm 全局安装 Claude Code：',
          note: '需要 Node.js 16.0 或更高版本。确保已安装 npm。'
        },
        step2: {
          title: '步骤 2：验证安装',
          desc: '检查 Claude Code 是否正确安装：',
        },
        step3: {
          title: '步骤 3：设置 API 密钥',
          desc: '配置您的 Anthropic API 密钥：',
          item1: '从 console.anthropic.com 获取您的 API 密钥',
          item2: '设置环境变量：export ANTHROPIC_API_KEY="your-key"',
          item3: '或使用 claude-code configure 进行交互式设置'
        }
      },
      
      addingServers: {
        title: '添加 MCP 服务器',
        subtitle: '三种添加 MCP 服务器的方法',
        method1: {
          title: '方法 1：从网站复制（推荐）',
          desc: '最简单的添加服务器方式：',
          step1: '浏览本网站的服务器',
          step2: '点击任意服务器查看详情',
          step3: '使用复制按钮复制配置',
          imagePlaceholder: '显示服务器模态框中复制按钮的截图'
        },
        method2: {
          title: '方法 2：编辑配置文件',
          desc: '手动编辑您的 Claude Code 配置：',
          configExample: '将服务器配置添加到您的 mcpServers 对象中：'
        },
        method3: {
          title: '方法 3：使用 CLI 命令',
          desc: '使用命令行添加服务器：',
          example: '示例：'
        }
      },
      
      usingServers: {
        title: '使用 MCP 服务器',
        subtitle: '如何使用已安装的服务器',
        step1: {
          title: '步骤 1：启动 Claude Code',
          desc: '在项目目录中启动 Claude Code：'
        },
        step2: {
          title: '步骤 2：列出可用服务器',
          desc: '检查哪些 MCP 服务器可用：'
        },
        step3: {
          title: '步骤 3：使用服务器命令',
          desc: '在提示中使用 @ 符号引用服务器：',
          examples: '示例命令：'
        },
        tips: {
          title: '💡 专业提示',
          tip1: '使用 Tab 键补全查看可用的服务器命令',
          tip2: '在单个提示中组合多个服务器',
          tip3: '服务器在 Claude Code 会话之间持续存在'
        }
      },
      
      troubleshooting: {
        title: '故障排除',
        subtitle: '常见问题和解决方案',
        solution: '解决方案',
        issue1: {
          title: '找不到服务器',
          problem: '使用 @ 符号时 Claude 显示"找不到服务器"',
          solution: '重启 Claude Code 以重新加载配置：'
        },
        issue2: {
          title: '权限错误',
          problem: '出现权限被拒绝的错误',
          solution: '检查服务器日志并确保适当的文件权限：'
        },
        issue3: {
          title: '服务器崩溃',
          problem: 'MCP 服务器停止响应',
          solution: '服务器会自动重启，但如果需要，您可以手动重启 Claude Code'
        },
        resources: {
          title: '其他资源',
          docs: '官方文档',
          issues: '报告问题',
          discord: '社区 Discord'
        }
      }
    }
  }
}

// Category translations
export const categoryTranslations = {
  en: {
    'Design Entry': 'Design Entry',
    'Simulation': 'Simulation',
    'Simulation Visualization': 'Simulation Visualization',
    'Synthesis': 'Synthesis',
    'Physical Design': 'Physical Design',
    'Timing Analysis': 'Timing Analysis',
    'Power Analysis': 'Power Analysis',
    'Verification': 'Verification',
    'Manufacturing': 'Manufacturing',
    'PDK/Technology': 'PDK/Technology',
    'Test': 'Test',
    'IP Management': 'IP Management',
    'Utilities': 'Utilities'
  },
  zh: {
    'Design Entry': '设计输入',
    'Simulation': '仿真',
    'Simulation Visualization': '仿真可视化',
    'Synthesis': '综合',
    'Physical Design': '物理设计',
    'Timing Analysis': '时序分析',
    'Power Analysis': '功耗分析',
    'Verification': '验证',
    'Manufacturing': '制造',
    'PDK/Technology': 'PDK/技术',
    'Test': '测试',
    'IP Management': 'IP管理',
    'Utilities': '实用工具'
  }
}
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
      register: 'Register',
      submit: 'Submit'
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
      buttonTitle: 'How to use MCP servers in Claude',
      claudeCode: 'Claude Guide'
    },
    
    // Guide
    guide: {
      title: 'How to Use MCP Servers in Claude',
      subtitle: 'Complete guide to installing and using MCP servers with Claude Desktop or Claude.ai',
      copy: 'Copy',
      copied: 'Copied!',
      
      overview: {
        title: 'Overview',
        subtitle: 'What is MCP?',
        intro: 'Model Context Protocol (MCP) is an open protocol by Anthropic that enables seamless integration between Claude and external tools. You can use MCP servers with Claude Desktop app or Claude.ai subscription.',
        videoPlaceholder: 'Video tutorial coming soon...',
        keyPoints: 'Two Ways to Use MCP:',
        point1: '🖥️ Claude Desktop App - Free app with API key',
        point2: '🌐 Claude.ai Pro/Team - Web interface with subscription',
        point3: '📊 Both support all MCP server features',
        point4: '🔌 Same configuration, different interfaces'
      },
      
      installation: {
        title: 'Installation',
        subtitle: 'Choose Your Method',
        step1: {
          title: 'Option 1: Claude Desktop (Recommended)',
          desc: 'Download Claude Desktop from claude.ai/download',
          note: 'Free to use with your own API key. Supports all MCP features.'
        },
        step2: {
          title: 'Option 2: Claude.ai Subscription',
          desc: 'Use MCP directly in your browser with Claude Pro or Team subscription',
          note: 'No installation required. MCP servers run in the cloud.'
        },
        step3: {
          title: 'Configuration File Location',
          desc: 'Find your Claude Desktop config file:',
          item1: 'macOS: ~/Library/Application Support/Claude/claude_desktop_config.json',
          item2: 'Windows: %APPDATA%\\Claude\\claude_desktop_config.json',
          item3: 'Linux: ~/.config/Claude/claude_desktop_config.json'
        }
      },
      
      addingServers: {
        title: 'Complete Example: AnySilicon Die Calculator',
        subtitle: 'Step-by-Step Setup Guide',
        method1: {
          title: 'Step 1: Clone and Build the Server',
          desc: 'First, download and build the AnySilicon MCP server:',
          step1: 'Open Terminal',
          step2: 'Run: git clone https://github.com/ssql2014/mcp4eda.git',
          step3: 'Run: cd mcp4eda/anysilicon && npm install && npm run build',
          imagePlaceholder: 'Terminal showing successful build output'
        },
        method2: {
          title: 'Step 2: Configure Claude Desktop',
          desc: 'Open your claude_desktop_config.json file and add:',
          configExample: 'Replace /Users/YOUR_USERNAME with your actual path:'
        },
        method3: {
          title: 'Step 3: Restart Claude Desktop',
          desc: 'Restart Claude Desktop and verify the server is loaded:',
          example: 'You should see the MCP icon in Claude\'s interface'
        }
      },
      
      usingServers: {
        title: 'Using MCP Servers',
        subtitle: 'Real Example with AnySilicon',
        step1: {
          title: 'Step 1: Open Claude Desktop',
          desc: 'Look for the MCP icon (puzzle piece) in the text input area'
        },
        step2: {
          title: 'Step 2: Select the Server',
          desc: 'Click the MCP icon and select "anysilicon" from the list'
        },
        step3: {
          title: 'Step 3: Try These Examples',
          desc: 'Ask Claude to use the AnySilicon calculator:',
          examples: 'Example Prompts:'
        },
        tips: {
          title: '💡 Real Examples to Try',
          tip1: '"Calculate dies per wafer for 5mm x 5mm die on 300mm wafer"',
          tip2: '"How many 10mm x 8mm dies fit on a 200mm wafer?"',
          tip3: '"Compare die yield for 300mm vs 200mm wafers with 7mm square dies"'
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
      register: '注册',
      submit: '提交'
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
      buttonTitle: '如何在 Claude 中使用 MCP 服务器',
      claudeCode: 'Claude 指南'
    },
    
    // Guide
    guide: {
      title: '如何在 Claude 中使用 MCP 服务器',
      subtitle: '使用 Claude Desktop 或 Claude.ai 安装和使用 MCP 服务器的完整指南',
      copy: '复制',
      copied: '已复制！',
      
      overview: {
        title: '概述',
        subtitle: '什么是 MCP？',
        intro: '模型上下文协议（MCP）是 Anthropic 开发的开放协议，能够实现 Claude 与外部工具之间的无缝集成。您可以通过 Claude Desktop 应用程序或 Claude.ai 订阅使用 MCP 服务器。',
        videoPlaceholder: '视频教程即将推出...',
        keyPoints: '使用 MCP 的两种方式：',
        point1: '🖥️ Claude Desktop 应用 - 免费应用，需要 API 密钥',
        point2: '🌐 Claude.ai Pro/Team - 网页界面，需要订阅',
        point3: '📊 两者都支持所有 MCP 服务器功能',
        point4: '🔌 相同的配置，不同的界面'
      },
      
      installation: {
        title: '安装',
        subtitle: '选择您的方法',
        step1: {
          title: '选项 1：Claude Desktop（推荐）',
          desc: '从 claude.ai/download 下载 Claude Desktop',
          note: '免费使用，需要您自己的 API 密钥。支持所有 MCP 功能。'
        },
        step2: {
          title: '选项 2：Claude.ai 订阅',
          desc: '使用 Claude Pro 或 Team 订阅直接在浏览器中使用 MCP',
          note: '无需安装。MCP 服务器在云端运行。'
        },
        step3: {
          title: '配置文件位置',
          desc: '找到您的 Claude Desktop 配置文件：',
          item1: 'macOS: ~/Library/Application Support/Claude/claude_desktop_config.json',
          item2: 'Windows: %APPDATA%\\Claude\\claude_desktop_config.json',
          item3: 'Linux: ~/.config/Claude/claude_desktop_config.json'
        }
      },
      
      addingServers: {
        title: '完整示例：AnySilicon 晶圆计算器',
        subtitle: '分步设置指南',
        method1: {
          title: '步骤 1：克隆并构建服务器',
          desc: '首先，下载并构建 AnySilicon MCP 服务器：',
          step1: '打开终端',
          step2: '运行：git clone https://github.com/ssql2014/mcp4eda.git',
          step3: '运行：cd mcp4eda/anysilicon && npm install && npm run build',
          imagePlaceholder: '显示成功构建输出的终端'
        },
        method2: {
          title: '步骤 2：配置 Claude Desktop',
          desc: '打开您的 claude_desktop_config.json 文件并添加：',
          configExample: '将 /Users/YOUR_USERNAME 替换为您的实际路径：'
        },
        method3: {
          title: '步骤 3：重启 Claude Desktop',
          desc: '重启 Claude Desktop 并验证服务器已加载：',
          example: '您应该在 Claude 界面中看到 MCP 图标'
        }
      },
      
      usingServers: {
        title: '使用 MCP 服务器',
        subtitle: 'AnySilicon 的实际示例',
        step1: {
          title: '步骤 1：打开 Claude Desktop',
          desc: '在文本输入区域查找 MCP 图标（拼图图标）'
        },
        step2: {
          title: '步骤 2：选择服务器',
          desc: '点击 MCP 图标并从列表中选择"anysilicon"'
        },
        step3: {
          title: '步骤 3：尝试这些示例',
          desc: '让 Claude 使用 AnySilicon 计算器：',
          examples: '示例提示：'
        },
        tips: {
          title: '💡 实际示例',
          tip1: '"计算 300mm 晶圆上 5mm x 5mm 晶粒的数量"',
          tip2: '"200mm 晶圆能容纳多少个 10mm x 8mm 的晶粒？"',
          tip3: '"比较 7mm 方形晶粒在 300mm 和 200mm 晶圆上的产量"'
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
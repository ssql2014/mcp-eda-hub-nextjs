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
      login: 'Login',
      register: 'Register'
    },
    
    // Hero Section
    hero: {
      title: 'MCP EDA Hub',
      subtitle: 'Model Context Protocol Servers for Electronic Design Automation',
      searchPlaceholder: 'Search MCP servers...',
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
    
    // Servers
    servers: {
      allServers: 'All MCP Servers',
      by: 'by',
      noResults: 'No servers found',
      noResultsDesc: 'Try adjusting your search or filter criteria'
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
      viewOnGitHub: 'View on GitHub →'
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
    }
  },
  
  zh: {
    // Header
    siteName: 'MCP EDA 中心',
    nav: {
      servers: '服务器',
      about: '关于',
      login: '登录',
      register: '注册'
    },
    
    // Hero Section
    hero: {
      title: 'MCP EDA 中心',
      subtitle: '用于电子设计自动化的模型上下文协议服务器',
      searchPlaceholder: '搜索 MCP 服务器...',
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
    
    // Servers
    servers: {
      allServers: '所有 MCP 服务器',
      by: '作者：',
      noResults: '未找到服务器',
      noResultsDesc: '请尝试调整搜索或筛选条件'
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
      viewOnGitHub: '在 GitHub 上查看 →'
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
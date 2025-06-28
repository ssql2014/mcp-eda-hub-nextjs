'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { mcpServers, categories, type MCPServer } from '@/lib/data'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showAllCategories, setShowAllCategories] = useState(false)

  // Calculate active categories
  const activeCategories = useMemo(() => {
    const categoriesWithCount = categories.filter(cat => cat.count > 0)
    const allCategory = {
      id: 'all',
      name: 'All Categories',
      count: mcpServers.length
    }
    return [allCategory, ...categoriesWithCount]
  }, [])

  const visibleCategories = showAllCategories ? activeCategories : activeCategories.slice(0, 8)

  const filteredServers = useMemo(() => {
    return mcpServers.filter(server => {
      const matchesSearch = searchQuery.toLowerCase() === '' ||
        server.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        server.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        server.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        server.author.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesCategory = selectedCategory === 'all' || 
        server.category.toLowerCase().replace(/[\s\/]/g, '-') === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  // Stats
  const stats = {
    total: mcpServers.length,
    categories: categories.filter(c => c.count > 0).length,
    tags: Array.from(new Set(mcpServers.flatMap(s => s.tags))).length
  }

  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="nav container">
          <div className="nav-brand">
            <svg className="logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M9 9h6v6H9z" />
              <path d="M9 1v6M15 1v6M9 17v6M15 17v6M1 9h6M17 9h6M1 15h6M17 15h6" />
            </svg>
            <h1>MCP EDA Hub</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#servers">Servers</a></li>
            <li><a href="#about">About</a></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
            <li>
              <a href="https://github.com/ssql2014/mcp4eda" target="_blank" rel="noopener noreferrer" className="github-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">MCP EDA Hub</h1>
          <p className="hero-subtitle">
            Model Context Protocol Servers for Electronic Design Automation
          </p>
          
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search MCP servers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>

          <div className="stats">
            <div className="stat">
              <span className="stat-number">{stats.total}</span>
              <span className="stat-label">MCP Servers</span>
            </div>
            <div className="stat">
              <span className="stat-number">{stats.categories}</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat">
              <span className="stat-number">{stats.tags}</span>
              <span className="stat-label">Tags</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-header">
            <h2>Categories</h2>
            {activeCategories.length > 8 && (
              <button 
                className="btn-text"
                onClick={() => setShowAllCategories(!showAllCategories)}
              >
                {showAllCategories ? 'Show Less' : 'Show All'}
              </button>
            )}
          </div>
          <div className="categories">
            {visibleCategories.map((category) => (
              <button
                key={category.id}
                className={`category-tag ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Servers Section */}
      <section id="servers" className="servers-section">
        <div className="container">
          <div className="servers-header">
            <h2>{selectedCategory === 'all' 
              ? `All MCP Servers (${filteredServers.length})`
              : `${activeCategories.find(c => c.id === selectedCategory)?.name} (${filteredServers.length})`
            }</h2>
          </div>

          {filteredServers.length === 0 ? (
            <div className="no-results">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
                <path d="M8 8l6 6m0-6l-6 6" />
              </svg>
              <h3>No servers found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="servers-grid">
              {filteredServers.map((server) => (
                <ServerCard key={server.id} server={server} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About MCP EDA Hub</h2>
          <div className="about-grid">
            <div className="about-card">
              <h4>What is MCP?</h4>
              <p>Model Context Protocol (MCP) is an open protocol that enables seamless integration between AI assistants and external tools.</p>
            </div>
            <div className="about-card">
              <h4>EDA Integration</h4>
              <p>Access professional EDA tools directly from your AI assistant, streamlining your hardware design workflow.</p>
            </div>
            <div className="about-card">
              <h4>Open Source</h4>
              <p>All MCP servers are open source. Contribute, customize, or create your own EDA tool integrations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 MCP EDA Hub. All rights reserved.</p>
          <p>
            <a href="https://github.com/ssql2014/mcp4eda" target="_blank" rel="noopener noreferrer">GitHub</a>
            {' | '}
            <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer">MCP Documentation</a>
          </p>
        </div>
      </footer>

      <style jsx>{`
        .header {
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(10px);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo {
          width: 32px;
          height: 32px;
          color: var(--primary-color);
        }

        .nav-brand h1 {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          align-items: center;
        }

        .nav-links a {
          color: var(--text-secondary);
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: var(--text-primary);
        }

        .github-link svg {
          width: 24px;
          height: 24px;
        }

        .hero {
          padding: 4rem 0;
          text-align: center;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          animation: fadeIn 0.8s ease-out;
          position: relative;
          z-index: 1;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 2rem;
          animation: fadeIn 0.8s ease-out 0.2s both;
          position: relative;
          z-index: 1;
        }

        .search-container {
          position: relative;
          max-width: 500px;
          margin: 0 auto 3rem;
          animation: fadeIn 0.8s ease-out 0.4s both;
          z-index: 1;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          color: var(--text-tertiary);
          transition: var(--transition-fast);
        }

        .search-input:focus ~ .search-icon {
          color: var(--primary-color);
        }

        .stats {
          display: flex;
          justify-content: center;
          gap: 4rem;
          animation: fadeIn 0.8s ease-out 0.6s both;
          position: relative;
          z-index: 1;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
        }

        .categories-section {
          padding: 3rem 0;
          background-color: var(--bg-primary);
        }

        .categories-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .btn-text {
          background: none;
          border: none;
          color: var(--primary-color);
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: opacity 0.2s;
        }

        .btn-text:hover {
          opacity: 0.8;
        }

        .categories {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .category-tag {
          padding: 0.5rem 1rem;
          background-color: var(--bg-secondary);
          border: 2px solid transparent;
          border-radius: var(--radius);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-base);
          position: relative;
        }

        .category-tag:hover {
          background-color: var(--bg-tertiary);
          border-color: var(--primary-color);
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .category-tag.active {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
          border-color: transparent;
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .servers-section {
          padding: 3rem 0;
          background-color: var(--bg-secondary);
        }

        .servers-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .servers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        .no-results {
          text-align: center;
          padding: 4rem 2rem;
          color: var(--text-secondary);
        }

        .no-results svg {
          width: 48px;
          height: 48px;
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .about-section {
          padding: 4rem 0;
          background-color: var(--bg-primary);
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .about-card {
          padding: 2rem;
          background-color: var(--bg-secondary);
          border-radius: var(--radius-lg);
          text-align: center;
        }

        .about-card h4 {
          margin-bottom: 1rem;
          color: var(--primary-color);
        }

        .about-card p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .footer {
          padding: 3rem 0;
          background-color: var(--bg-tertiary);
          text-align: center;
          color: var(--text-secondary);
        }

        .footer p {
          margin-bottom: 0.5rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        @media (max-width: 768px) {
          .nav-links {
            gap: 1rem;
          }
          
          .nav-links li:not(:last-child):not(:nth-last-child(2)):not(:nth-last-child(3)) {
            display: none;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .stats {
            gap: 2rem;
          }
          
          .servers-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

function ServerCard({ server }: { server: MCPServer }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="server-card fade-in-up" onClick={() => setShowModal(true)}>
        <div className="server-header">
          <div>
            <h3 className="server-title">{server.name}</h3>
            <p className="server-author">by {server.author}</p>
          </div>
          <span className="server-category">{server.category}</span>
        </div>
        
        <p className="server-description">{server.description}</p>
        
        <div className="server-tags">
          {server.tags.slice(0, 4).map((tag: string) => (
            <span key={tag} className="server-tag">{tag}</span>
          ))}
          {server.tags.length > 4 && (
            <span className="server-tag">+{server.tags.length - 4}</span>
          )}
        </div>
      </div>

      {showModal && (
        <ServerModal server={server} onClose={() => setShowModal(false)} />
      )}

      <style jsx>{`
        .server-card {
          padding: 1.5rem;
        }

        .server-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 1rem;
        }

        .server-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .server-author {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .server-category {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background-color: var(--bg-secondary);
          border-radius: var(--radius);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--primary-color);
        }

        .server-description {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .server-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .server-tag {
          padding: 0.25rem 0.5rem;
          background-color: var(--bg-tertiary);
          border-radius: var(--radius);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
      `}</style>
    </>
  )
}

function ServerModal({ server, onClose }: { server: MCPServer; onClose: () => void }) {
  return (
    <>
      <div className="modal active" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>&times;</button>
          <div className="modal-body">
          <h2>{server.name}</h2>
          <p className="server-author">by {server.author}</p>
          <p className="server-category">{server.category}</p>
          
          <h3>Description</h3>
          <p>{server.description}</p>
          
          <h3>Features</h3>
          <ul>
            {server.features.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          
          <h3>Installation</h3>
          <div className="code-block">
            <pre><code>{server.installCommand}</code></pre>
          </div>
          
          <h3>Configuration</h3>
          <div className="code-block">
            <pre><code>{JSON.stringify(server.config, null, 2)}</code></pre>
          </div>
          
          <h3>Tags</h3>
          <div className="server-tags">
            {server.tags.map((tag: string) => (
              <span key={tag} className="server-tag">{tag}</span>
            ))}
          </div>
          
          <h3>Links</h3>
          <p>
            <a href={server.githubUrl} target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
          </p>
        </div>
      </div>
    </div>

    <style jsx>{`
      .modal-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 2rem;
        color: var(--text-secondary);
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius);
        transition: background-color 0.2s;
      }

      .modal-close:hover {
        background-color: var(--bg-secondary);
      }

      .modal-body {
        padding: 2rem;
      }

      .modal-body h2 {
        margin-bottom: 0.5rem;
      }

      .modal-body h3 {
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        color: var(--primary-color);
      }

      .modal-body .server-author {
        color: var(--text-secondary);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
      }

      .modal-body .server-category {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        background-color: var(--bg-secondary);
        border-radius: var(--radius);
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--primary-color);
        margin-bottom: 1rem;
      }

      .modal-body ul {
        margin-left: 1.5rem;
        margin-bottom: 1rem;
      }

      .modal-body li {
        margin-bottom: 0.5rem;
        color: var(--text-secondary);
      }

      .server-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }

      .server-tag {
        padding: 0.25rem 0.5rem;
        background-color: var(--bg-tertiary);
        border-radius: var(--radius);
        font-size: 0.75rem;
        color: var(--text-secondary);
      }
    `}</style>
    </>
  )
}
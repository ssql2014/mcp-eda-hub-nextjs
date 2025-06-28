'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { mcpServers, categories, type MCPServer } from '@/lib/data'
import { useLanguage } from '@/components/language-provider'
import { LanguageSwitcher } from '@/components/language-switcher'
import { HelpButton } from '@/components/help-button'
import { ClaudeCodeGuide } from '@/components/claude-code-guide'
import { categoryTranslations } from '@/lib/i18n'

type SortOption = 'nameAsc' | 'nameDesc' | 'starsDesc' | 'starsAsc' | 'dateDesc' | 'dateAsc'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showAllCategories, setShowAllCategories] = useState(false)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showAllTags, setShowAllTags] = useState(false)
  const [sortBy, setSortBy] = useState<SortOption>('dateDesc')
  const [showGuide, setShowGuide] = useState(false)
  const { t, locale } = useLanguage()

  // Calculate active categories
  const activeCategories = useMemo(() => {
    const categoriesWithCount = categories.filter(cat => cat.count > 0)
    const allCategory = {
      id: 'all',
      name: t.categories.all,
      count: mcpServers.length
    }
    return [allCategory, ...categoriesWithCount]
  }, [t.categories.all])

  const visibleCategories = showAllCategories ? activeCategories : activeCategories.slice(0, 8)

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    mcpServers.forEach(server => {
      server.tags.forEach(tag => tagSet.add(tag))
    })
    return Array.from(tagSet).sort()
  }, [])

  const visibleTags = showAllTags ? allTags : allTags.slice(0, 20)

  const filteredServers = useMemo(() => {
    const filtered = mcpServers.filter(server => {
      const matchesSearch = searchQuery.toLowerCase() === '' ||
        server.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        server.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        server.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        server.author.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesCategory = selectedCategory === 'all' || 
        server.category.toLowerCase().replace(/[\s\/]/g, '-') === selectedCategory
      
      // Check if server has ALL selected tags (AND logic)
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.every(tag => server.tags.includes(tag))
      
      return matchesSearch && matchesCategory && matchesTags
    })

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'nameAsc':
          return a.name.localeCompare(b.name)
        case 'nameDesc':
          return b.name.localeCompare(a.name)
        case 'starsDesc':
          return b.stars - a.stars
        case 'starsAsc':
          return a.stars - b.stars
        case 'dateDesc':
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        case 'dateAsc':
          return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
        default:
          return 0
      }
    })

    return sorted
  }, [searchQuery, selectedCategory, selectedTags, sortBy])

  // Stats
  const stats = {
    total: mcpServers.length,
    categories: categories.filter(c => c.count > 0).length,
    tags: allTags.length
  }

  // Tag selection handlers
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const clearAllTags = () => {
    setSelectedTags([])
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
            <h1>{t.siteName}</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#servers">{t.nav.servers}</a></li>
            <li><a href="#about">{t.nav.about}</a></li>
            <li>
              <button className="quick-start-btn" onClick={() => setShowGuide(true)}>
                {t.nav.quickStart}
              </button>
            </li>
            <li><Link href="/login">{t.nav.login}</Link></li>
            <li><Link href="/register">{t.nav.register}</Link></li>
            <li>
              <a href="https://github.com/ssql2014/mcp4eda" target="_blank" rel="noopener noreferrer" className="github-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </li>
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-banner" onClick={() => setShowGuide(true)}>
            <span>{t.hero.banner.text}</span>
            <span className="banner-link">
              {t.hero.banner.link} {t.hero.banner.arrow}
            </span>
          </div>
          
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-subtitle">
            {t.hero.subtitle}
          </p>
          
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder={t.hero.searchPlaceholder}
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
              <span className="stat-label">{t.hero.stats.servers}</span>
            </div>
            <div className="stat">
              <span className="stat-number">{stats.categories}</span>
              <span className="stat-label">{t.hero.stats.categories}</span>
            </div>
            <div className="stat">
              <span className="stat-number">{stats.tags}</span>
              <span className="stat-label">{t.hero.stats.tags}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-header">
            <h2>{t.categories.title}</h2>
            {activeCategories.length > 8 && (
              <button 
                className="btn-text"
                onClick={() => setShowAllCategories(!showAllCategories)}
              >
                {showAllCategories ? t.categories.showLess : t.categories.showAll}
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
                {category.id === 'all' 
                  ? category.name 
                  : categoryTranslations[locale][category.name as keyof typeof categoryTranslations['en']] || category.name
                } ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tags Section */}
      <section className="tags-section">
        <div className="container">
          <div className="tags-header">
            <h2>{t.tags.title}</h2>
            <div className="tags-actions">
              {selectedTags.length > 0 && (
                <button 
                  className="btn-text clear-tags"
                  onClick={clearAllTags}
                >
                  {t.tags.clearAll}
                </button>
              )}
              {allTags.length > 20 && (
                <button 
                  className="btn-text"
                  onClick={() => setShowAllTags(!showAllTags)}
                >
                  {showAllTags ? t.tags.showLess : t.tags.showAll}
                </button>
              )}
            </div>
          </div>
          <div className="tags">
            {visibleTags.map((tag) => (
              <button
                key={tag}
                className={`tag-item ${selectedTags.includes(tag) ? 'active' : ''}`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          {selectedTags.length > 0 && (
            <div className="selected-tags-info">
              {t.tags.selectedInfo.replace('{count}', selectedTags.length.toString())}
            </div>
          )}
        </div>
      </section>

      {/* Servers Section */}
      <section id="servers" className="servers-section">
        <div className="container">
          <div className="servers-header">
            <h2>{selectedCategory === 'all' 
              ? `${t.servers.allServers} (${filteredServers.length})`
              : `${categoryTranslations[locale][activeCategories.find(c => c.id === selectedCategory)?.name as keyof typeof categoryTranslations['en']] || activeCategories.find(c => c.id === selectedCategory)?.name} (${filteredServers.length})`
            }</h2>
            <div className="sort-container">
              <label htmlFor="sort-select" className="sort-label">{t.servers.sortBy}:</label>
              <select 
                id="sort-select"
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
              >
                <option value="nameAsc">{t.servers.sorting.nameAsc}</option>
                <option value="nameDesc">{t.servers.sorting.nameDesc}</option>
                <option value="starsDesc">{t.servers.sorting.starsDesc}</option>
                <option value="starsAsc">{t.servers.sorting.starsAsc}</option>
                <option value="dateDesc">{t.servers.sorting.dateDesc}</option>
                <option value="dateAsc">{t.servers.sorting.dateAsc}</option>
              </select>
            </div>
          </div>

          {filteredServers.length === 0 ? (
            <div className="no-results">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
                <path d="M8 8l6 6m0-6l-6 6" />
              </svg>
              <h3>{t.servers.noResults}</h3>
              <p>{t.servers.noResultsDesc}</p>
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
          <h2>{t.about.title}</h2>
          <div className="about-grid">
            <div className="about-card">
              <h4>{t.about.whatIsMcp.title}</h4>
              <p>{t.about.whatIsMcp.desc}</p>
            </div>
            <div className="about-card">
              <h4>{t.about.edaIntegration.title}</h4>
              <p>{t.about.edaIntegration.desc}</p>
            </div>
            <div className="about-card">
              <h4>{t.about.openSource.title}</h4>
              <p>{t.about.openSource.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 {t.siteName}. {t.footer.rights}</p>
          <p>
            <a href="https://github.com/ssql2014/mcp4eda" target="_blank" rel="noopener noreferrer">GitHub</a>
            {' | '}
            <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer">{t.footer.mcp}</a>
          </p>
        </div>
      </footer>

      {/* Help Button */}
      <HelpButton />

      {/* Claude Code Guide Modal */}
      <ClaudeCodeGuide isOpen={showGuide} onClose={() => setShowGuide(false)} />

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

        .quick-start-btn {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: var(--radius);
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .quick-start-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .hero {
          padding: 4rem 0;
          text-align: center;
        }

        .hero-banner {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 50px;
          margin-bottom: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.875rem;
          animation: fadeIn 0.8s ease-out;
        }

        .hero-banner:hover {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15));
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1);
        }

        .banner-link {
          color: var(--primary-color);
          font-weight: 600;
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

        .tags-section {
          padding: 2rem 0;
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .tags-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .tags-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .clear-tags {
          color: var(--secondary-color);
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag-item {
          padding: 0.375rem 0.75rem;
          background-color: var(--bg-tertiary);
          border: 1px solid transparent;
          border-radius: var(--radius);
          font-size: 0.8125rem;
          font-weight: 400;
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition-base);
        }

        .tag-item:hover {
          background-color: var(--bg-primary);
          border-color: var(--border-color);
          color: var(--text-primary);
        }

        .tag-item.active {
          background-color: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
          font-weight: 500;
        }

        .tag-item.active:hover {
          background-color: var(--primary-color);
          opacity: 0.9;
        }

        .selected-tags-info {
          margin-top: 1rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-style: italic;
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

        .sort-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .sort-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .sort-select {
          padding: 0.5rem 2.5rem 0.5rem 1rem;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          font-size: 0.875rem;
          color: var(--text-primary);
          cursor: pointer;
          transition: var(--transition-base);
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-size: 1rem;
        }
        
        @media (prefers-color-scheme: dark) {
          .sort-select {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a0a0a0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          }
        }

        .sort-select:hover {
          border-color: var(--primary-color);
        }

        .sort-select:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
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
          
          .server-header-right {
            flex-direction: row;
            gap: 0.75rem;
          }
          
          .servers-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .sort-container {
            width: 100%;
          }
          
          .sort-select {
            flex: 1;
          }
          
          .tags-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .tags-actions {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </>
  )
}

// Utility function to format star counts
function formatStars(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`
  }
  return count.toString()
}

// Utility function to check if a server is new (added within last 30 days)
function isServerNew(dateAdded: string): boolean {
  const addedDate = new Date(dateAdded)
  const currentDate = new Date('2025-06-28') // Using the provided current date
  const diffTime = currentDate.getTime() - addedDate.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays <= 30
}

function ServerCard({ server }: { server: MCPServer }) {
  const [showModal, setShowModal] = useState(false)
  const { t, locale } = useLanguage()

  const isNew = isServerNew(server.dateAdded)

  return (
    <>
      <div className="server-card fade-in-up" onClick={() => setShowModal(true)}>
        {isNew && (
          <span className="new-badge">{t.servers.new}</span>
        )}
        <div className="server-header">
          <div>
            <h3 className="server-title">{server.name}</h3>
            <p className="server-author">{t.servers.by} {server.author}</p>
          </div>
          <div className="server-header-right">
            <div className="server-stars">
              <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>{formatStars(server.stars)}</span>
            </div>
            <span className="server-category">
              {categoryTranslations[locale][server.category as keyof typeof categoryTranslations['en']] || server.category}
            </span>
          </div>
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
          position: relative;
        }

        .new-badge {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          padding: 0.25rem 0.75rem;
          background: var(--secondary-color);
          color: white;
          border-radius: var(--radius);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          z-index: 10;
          box-shadow: var(--shadow-sm);
        }

        .server-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 1rem;
        }

        .server-header-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
        }

        .server-stars {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          transition: var(--transition-fast);
        }

        .server-card:hover .server-stars {
          color: var(--text-primary);
        }

        .star-icon {
          width: 16px;
          height: 16px;
          color: #f59e0b;
          transition: var(--transition-fast);
        }

        .server-card:hover .star-icon {
          transform: scale(1.1);
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
  const { t, locale } = useLanguage()
  const isNew = isServerNew(server.dateAdded)
  const [copiedInstall, setCopiedInstall] = useState(false)
  const [copiedConfig, setCopiedConfig] = useState(false)
  
  const copyToClipboard = (text: string, type: 'install' | 'config') => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'install') {
        setCopiedInstall(true)
        setTimeout(() => setCopiedInstall(false), 2000)
      } else {
        setCopiedConfig(true)
        setTimeout(() => setCopiedConfig(false), 2000)
      }
    })
  }
  
  return (
    <>
      <div className="modal active" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>&times;</button>
          <div className="modal-body">
          <div className="modal-header-wrapper">
            <h2>{server.name}</h2>
            {isNew && (
              <span className="new-badge-modal">{t.servers.new}</span>
            )}
          </div>
          <p className="server-author">{t.servers.by} {server.author}</p>
          <div className="modal-header-info">
            <div className="server-stars-modal">
              <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>{formatStars(server.stars)} stars</span>
            </div>
            <p className="server-category">
              {categoryTranslations[locale][server.category as keyof typeof categoryTranslations['en']] || server.category}
            </p>
          </div>
          
          <h3>{t.modal.description}</h3>
          <p>{server.description}</p>
          
          <h3>{t.modal.features}</h3>
          <ul>
            {server.features.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          
          <h3>{t.modal.installation}</h3>
          <div className="code-block">
            <button 
              className="copy-button"
              onClick={() => copyToClipboard(server.installCommand, 'install')}
            >
              {copiedInstall ? t.modal.copied : t.modal.copy}
            </button>
            <pre><code>{server.installCommand}</code></pre>
          </div>
          
          <h3>{t.modal.configuration}</h3>
          <div className="code-block">
            <button 
              className="copy-button"
              onClick={() => copyToClipboard(JSON.stringify(server.config, null, 2), 'config')}
            >
              {copiedConfig ? t.modal.copied : t.modal.copy}
            </button>
            <pre><code>{JSON.stringify(server.config, null, 2)}</code></pre>
          </div>
          
          <h3>{t.modal.tags}</h3>
          <div className="server-tags">
            {server.tags.map((tag: string) => (
              <span key={tag} className="server-tag">{tag}</span>
            ))}
          </div>
          
          <h3>{t.modal.links}</h3>
          <p>
            <a href={server.githubUrl} target="_blank" rel="noopener noreferrer">
              {t.modal.viewOnGitHub}
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

      .modal-header-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 0.5rem;
      }

      .modal-body h2 {
        margin-bottom: 0;
      }

      .new-badge-modal {
        padding: 0.25rem 0.75rem;
        background: var(--secondary-color);
        color: white;
        border-radius: var(--radius);
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        box-shadow: var(--shadow-sm);
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

      .modal-header-info {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
      }

      .server-stars-modal {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        color: var(--text-secondary);
        font-size: 0.875rem;
        font-weight: 500;
      }

      .modal-body .server-category {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        background-color: var(--bg-secondary);
        border-radius: var(--radius);
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--primary-color);
        margin-bottom: 0;
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

      .code-block {
        position: relative;
        background-color: var(--bg-tertiary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        padding: 1rem;
        margin: 1rem 0;
        overflow: hidden;
      }

      .code-block pre {
        margin: 0;
        overflow-x: auto;
        padding-right: 3rem;
      }

      .code-block code {
        font-size: 0.875rem;
        line-height: 1.5;
        color: var(--text-primary);
      }

      .copy-button {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        padding: 0.25rem 0.75rem;
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        font-size: 0.75rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        color: var(--text-primary);
        z-index: 10;
      }

      .copy-button:hover {
        background-color: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
      }

      .copy-button:active {
        transform: scale(0.95);
      }
    `}</style>
    </>
  )
}
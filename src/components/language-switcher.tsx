'use client'

import { useLanguage } from './language-provider'

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${locale === 'en' ? 'active' : ''}`}
        onClick={() => setLocale('en')}
      >
        <span className="lang-flag">🇺🇸</span>
        <span className="lang-text">EN</span>
      </button>
      <button
        className={`lang-btn ${locale === 'zh' ? 'active' : ''}`}
        onClick={() => setLocale('zh')}
      >
        <span className="lang-flag">🇨🇳</span>
        <span className="lang-text">中文</span>
      </button>

      <style jsx>{`
        .language-switcher {
          display: flex;
          gap: 0.5rem;
          margin-left: 1rem;
        }

        .lang-btn {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem 0.75rem;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-base);
          color: var(--text-primary);
        }

        .lang-btn:hover {
          background-color: var(--bg-tertiary);
          border-color: var(--primary-color);
          transform: translateY(-1px);
        }

        .lang-btn.active {
          background-color: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }

        .lang-flag {
          font-size: 1.25rem;
          line-height: 1;
        }

        .lang-text {
          display: none;
        }

        @media (min-width: 640px) {
          .lang-text {
            display: inline;
          }
        }

        @media (max-width: 768px) {
          .language-switcher {
            margin-left: 0.5rem;
          }
          
          .lang-btn {
            padding: 0.375rem 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}
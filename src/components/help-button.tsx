'use client'

import { useState } from 'react'
import { ClaudeCodeGuide } from './claude-code-guide'
import { useLanguage } from './language-provider'

export function HelpButton() {
  const [showGuide, setShowGuide] = useState(false)
  const { t } = useLanguage()

  return (
    <>
      <button 
        className="help-button"
        onClick={() => setShowGuide(true)}
        title={t.help.buttonTitle}
      >
        <svg className="help-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        <span className="help-text">{t.help.claudeCode}</span>
      </button>

      <ClaudeCodeGuide isOpen={showGuide} onClose={() => setShowGuide(false)} />

      <style jsx>{`
        .help-button {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
          transition: all 0.3s ease;
          z-index: 999;
          animation: slideIn 0.5s ease-out;
        }

        .help-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(99, 102, 241, 0.4);
        }

        .help-button:active {
          transform: scale(0.95);
        }

        .help-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        .help-text {
          white-space: nowrap;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .help-button {
            bottom: 1rem;
            right: 1rem;
            padding: 0.625rem 1rem;
            font-size: 0.8125rem;
          }

          .help-icon {
            width: 18px;
            height: 18px;
          }
        }

        @media (max-width: 480px) {
          .help-text {
            display: none;
          }

          .help-button {
            padding: 0.75rem;
            border-radius: 50%;
          }
        }
      `}</style>
    </>
  )
}
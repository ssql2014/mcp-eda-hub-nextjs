'use client'

import React, { useState, useEffect } from 'react'
import { useLanguage } from '@/components/language-provider'

interface GuideSection {
  id: string
  title: string
  content: React.ReactNode
}

export function ClaudeCodeGuide({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState('overview')
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)
  
  // Reset active section when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveSection('overview')
    }
  }, [isOpen])
  
  console.log('ClaudeCodeGuide render, isOpen:', isOpen)

  const copyToClipboard = (text: string, commandId: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedCommand(commandId)
      setTimeout(() => setCopiedCommand(null), 2000)
    })
  }

  const sections: GuideSection[] = [
    {
      id: 'overview',
      title: t.guide.overview.title,
      content: (
        <div className="guide-content">
          <h3>{t.guide.overview.subtitle}</h3>
          <p>{t.guide.overview.intro}</p>
          <div className="video-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <p>{t.guide.overview.videoPlaceholder}</p>
          </div>
          <div className="key-points">
            <h4>{t.guide.overview.keyPoints}</h4>
            <ul>
              <li>{t.guide.overview.point1}</li>
              <li>{t.guide.overview.point2}</li>
              <li>{t.guide.overview.point3}</li>
              <li>{t.guide.overview.point4}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'installation',
      title: t.guide.installation.title,
      content: (
        <div className="guide-content">
          <h3>{t.guide.installation.subtitle}</h3>
          
          <div className="step">
            <h4>{t.guide.installation.step1.title}</h4>
            <p>{t.guide.installation.step1.desc}</p>
            <div className="image-placeholder">
              <p>Download from: claude.ai/download</p>
            </div>
            <p className="note">{t.guide.installation.step1.note}</p>
          </div>

          <div className="step">
            <h4>{t.guide.installation.step2.title}</h4>
            <p>{t.guide.installation.step2.desc}</p>
            <p className="note">{t.guide.installation.step2.note}</p>
          </div>

          <div className="step">
            <h4>{t.guide.installation.step3.title}</h4>
            <p>{t.guide.installation.step3.desc}</p>
            <ol>
              <li>{t.guide.installation.step3.item1}</li>
              <li>{t.guide.installation.step3.item2}</li>
              <li>{t.guide.installation.step3.item3}</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      id: 'adding-servers',
      title: t.guide.addingServers.title,
      content: (
        <div className="guide-content">
          <h3>{t.guide.addingServers.subtitle}</h3>
          
          <div className="step">
            <h4>{t.guide.addingServers.method1.title}</h4>
            <p>{t.guide.addingServers.method1.desc}</p>
            <div className="code-block">
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard('git clone https://github.com/ssql2014/mcp4eda.git\ncd mcp4eda/anysilicon\nnpm install\nnpm run build', 'clone-anysilicon')}
              >
                {copiedCommand === 'clone-anysilicon' ? t.guide.copied : t.guide.copy}
              </button>
              <pre><code>{`git clone https://github.com/ssql2014/mcp4eda.git
cd mcp4eda/anysilicon
npm install
npm run build`}</code></pre>
            </div>
            <div className="image-placeholder">
              <p>{t.guide.addingServers.method1.imagePlaceholder}</p>
            </div>
          </div>

          <div className="step">
            <h4>{t.guide.addingServers.method2.title}</h4>
            <p>{t.guide.addingServers.method2.desc}</p>
            <p>{t.guide.addingServers.method2.configExample}</p>
            <div className="code-block">
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(`{
  "mcpServers": {
    "anysilicon": {
      "command": "node",
      "args": ["/Users/YOUR_USERNAME/mcp4eda/anysilicon/dist/index.js"]
    }
  }
}`, 'config-anysilicon')}
              >
                {copiedCommand === 'config-anysilicon' ? t.guide.copied : t.guide.copy}
              </button>
              <pre><code>{`{
  "mcpServers": {
    "anysilicon": {
      "command": "node",
      "args": ["/Users/YOUR_USERNAME/mcp4eda/anysilicon/dist/index.js"]
    }
  }
}`}</code></pre>
            </div>
            <p className="note">macOS example shown. For Windows use: C:\\Users\\YOUR_USERNAME\\mcp4eda\\anysilicon\\dist\\index.js</p>
          </div>

          <div className="step">
            <h4>{t.guide.addingServers.method3.title}</h4>
            <p>{t.guide.addingServers.method3.desc}</p>
            <p className="example">{t.guide.addingServers.method3.example}</p>
            <div className="image-placeholder">
              <p>MCP icon appears in Claude Desktop when servers are loaded</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'using-servers',
      title: t.guide.usingServers.title,
      content: (
        <div className="guide-content">
          <h3>{t.guide.usingServers.subtitle}</h3>
          
          <div className="step">
            <h4>{t.guide.usingServers.step1.title}</h4>
            <p>{t.guide.usingServers.step1.desc}</p>
            <div className="image-placeholder">
              <p>MCP icon (puzzle piece) in Claude Desktop text input area</p>
            </div>
          </div>

          <div className="step">
            <h4>{t.guide.usingServers.step2.title}</h4>
            <p>{t.guide.usingServers.step2.desc}</p>
            <div className="image-placeholder">
              <p>Select &quot;anysilicon&quot; from the MCP server list</p>
            </div>
          </div>

          <div className="step">
            <h4>{t.guide.usingServers.step3.title}</h4>
            <p>{t.guide.usingServers.step3.desc}</p>
            <div className="example-queries">
              <h5>{t.guide.usingServers.step3.examples}</h5>
              <div className="code-block">
                <pre><code>Calculate dies per wafer for 5mm x 5mm die on 300mm wafer</code></pre>
              </div>
              <p>Claude will automatically use the AnySilicon server to calculate the result.</p>
            </div>
          </div>

          <div className="tip-box">
            <h4>{t.guide.usingServers.tips.title}</h4>
            <ul>
              <li>{t.guide.usingServers.tips.tip1}</li>
              <li>{t.guide.usingServers.tips.tip2}</li>
              <li>{t.guide.usingServers.tips.tip3}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'troubleshooting',
      title: t.guide.troubleshooting.title,
      content: (
        <div className="guide-content">
          <h3>{t.guide.troubleshooting.subtitle}</h3>
          
          <div className="troubleshoot-item">
            <h4>{t.guide.troubleshooting.issue1.title}</h4>
            <p className="issue">{t.guide.troubleshooting.issue1.problem}</p>
            <p className="solution"><strong>{t.guide.troubleshooting.solution}:</strong> {t.guide.troubleshooting.issue1.solution}</p>
            <p>Simply restart Claude Desktop app to reload configuration.</p>
          </div>

          <div className="troubleshoot-item">
            <h4>{t.guide.troubleshooting.issue2.title}</h4>
            <p className="issue">{t.guide.troubleshooting.issue2.problem}</p>
            <p className="solution"><strong>{t.guide.troubleshooting.solution}:</strong> {t.guide.troubleshooting.issue2.solution}</p>
            <p>Check logs at: ~/Library/Logs/Claude/mcp.log (macOS)</p>
          </div>

          <div className="troubleshoot-item">
            <h4>{t.guide.troubleshooting.issue3.title}</h4>
            <p className="issue">{t.guide.troubleshooting.issue3.problem}</p>
            <p className="solution"><strong>{t.guide.troubleshooting.solution}:</strong> {t.guide.troubleshooting.issue3.solution}</p>
          </div>

          <div className="help-resources">
            <h4>{t.guide.troubleshooting.resources.title}</h4>
            <ul>
              <li><a href="https://docs.anthropic.com/claude-code" target="_blank" rel="noopener noreferrer">{t.guide.troubleshooting.resources.docs}</a></li>
              <li><a href="https://github.com/anthropics/claude-code/issues" target="_blank" rel="noopener noreferrer">{t.guide.troubleshooting.resources.issues}</a></li>
              <li><a href="https://discord.gg/claude-code" target="_blank" rel="noopener noreferrer">{t.guide.troubleshooting.resources.discord}</a></li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  if (!isOpen) return null

  return (
    <div className="guide-overlay" onClick={onClose}>
      <div className="guide-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        
        <div className="guide-header">
          <h2>{t.guide.title}</h2>
          <p>{t.guide.subtitle}</p>
        </div>

        <div className="guide-container">
          <nav className="guide-nav">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </button>
            ))}
          </nav>

          <div className="guide-body">
            {sections.find(s => s.id === activeSection)?.content}
          </div>
        </div>
      </div>

      <style jsx>{`
        .guide-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.2s ease-out;
        }

        .guide-modal {
          background: var(--bg-primary);
          border-radius: var(--radius-lg);
          width: 90%;
          max-width: 1000px;
          max-height: 90vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-xl);
          animation: slideUp 0.3s ease-out;
        }

        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius);
          cursor: pointer;
          transition: background-color 0.2s;
          color: var(--text-secondary);
        }

        .close-btn:hover {
          background-color: var(--bg-secondary);
        }

        .close-btn svg {
          width: 24px;
          height: 24px;
        }

        .guide-header {
          padding: 2rem;
          border-bottom: 1px solid var(--border-color);
          text-align: center;
        }

        .guide-header h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .guide-header p {
          color: var(--text-secondary);
          font-size: 1.125rem;
        }

        .guide-container {
          display: flex;
          flex: 1;
          overflow: hidden;
        }

        .guide-nav {
          width: 240px;
          border-right: 1px solid var(--border-color);
          padding: 1.5rem;
          overflow-y: auto;
        }

        .nav-item {
          display: block;
          width: 100%;
          padding: 0.75rem 1rem;
          background: none;
          border: none;
          border-radius: var(--radius);
          text-align: left;
          font-size: 0.875rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s;
          margin-bottom: 0.25rem;
        }

        .nav-item:hover {
          background-color: var(--bg-secondary);
          color: var(--text-primary);
        }

        .nav-item.active {
          background-color: var(--primary-color);
          color: white;
          font-weight: 500;
        }

        .guide-body {
          flex: 1;
          padding: 2rem;
          overflow-y: auto;
        }

        .guide-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .guide-content h4 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: var(--primary-color);
        }

        .guide-content h5 {
          font-size: 1rem;
          font-weight: 500;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .guide-content p {
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .guide-content ul, .guide-content ol {
          margin-left: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-secondary);
        }

        .guide-content li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }

        .video-placeholder, .image-placeholder {
          background-color: var(--bg-secondary);
          border: 2px dashed var(--border-color);
          border-radius: var(--radius);
          padding: 3rem;
          text-align: center;
          margin: 1.5rem 0;
        }

        .video-placeholder svg {
          width: 48px;
          height: 48px;
          color: var(--text-tertiary);
          margin-bottom: 1rem;
        }

        .video-placeholder p, .image-placeholder p {
          color: var(--text-tertiary);
          font-style: italic;
          margin: 0;
        }

        .step {
          margin-bottom: 2rem;
          padding: 1.5rem;
          background-color: var(--bg-secondary);
          border-radius: var(--radius);
          border: 1px solid var(--border-color);
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
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
          font-size: 0.875rem;
          line-height: 1.5;
          color: var(--text-primary);
        }

        .copy-btn {
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

        .copy-btn:hover {
          background-color: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }

        .note {
          background-color: var(--bg-info);
          border-left: 4px solid var(--primary-color);
          padding: 0.75rem 1rem;
          margin: 1rem 0;
          font-size: 0.875rem;
          color: var(--text-primary);
        }

        .example {
          font-style: italic;
          color: var(--text-secondary);
          margin-top: 0.5rem;
        }

        .example-queries {
          background-color: var(--bg-tertiary);
          border-radius: var(--radius);
          padding: 1rem;
          margin: 1rem 0;
        }

        .example-queries code {
          display: block;
          padding: 0.5rem;
          background-color: var(--bg-primary);
          border-radius: var(--radius);
          font-family: monospace;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .tip-box {
          background-color: var(--bg-success);
          border: 1px solid var(--border-success);
          border-radius: var(--radius);
          padding: 1.5rem;
          margin: 1.5rem 0;
        }

        .tip-box h4 {
          color: var(--success-color);
          margin-top: 0;
        }

        .troubleshoot-item {
          margin-bottom: 2rem;
          padding: 1.5rem;
          background-color: var(--bg-secondary);
          border-radius: var(--radius);
          border: 1px solid var(--border-color);
        }

        .issue {
          color: var(--error-color);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .solution {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .help-resources {
          background-color: var(--bg-tertiary);
          border-radius: var(--radius);
          padding: 1.5rem;
          margin-top: 2rem;
        }

        .help-resources a {
          color: var(--primary-color);
          text-decoration: none;
        }

        .help-resources a:hover {
          text-decoration: underline;
        }

        .key-points {
          background-color: var(--bg-secondary);
          border-radius: var(--radius);
          padding: 1.5rem;
          margin: 1.5rem 0;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .guide-modal {
            width: 100%;
            height: 100%;
            max-width: none;
            max-height: none;
            border-radius: 0;
          }

          .guide-container {
            flex-direction: column;
          }

          .guide-nav {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid var(--border-color);
            padding: 1rem;
            display: flex;
            overflow-x: auto;
            gap: 0.5rem;
          }

          .nav-item {
            white-space: nowrap;
            flex-shrink: 0;
          }

          .guide-body {
            padding: 1.5rem;
          }

          .video-placeholder, .image-placeholder {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  )
}
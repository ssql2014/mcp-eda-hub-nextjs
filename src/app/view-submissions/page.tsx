'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Submission {
  id: string
  name: string
  description: string
  githubUrl: string
  category: string
  tags: string
  author: string
  email: string
  createdAt: string
}

export default function ViewSubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/submissions/simple')
      if (response.ok) {
        const data = await response.json()
        setSubmissions(data.reverse()) // 最新的在前面
      }
    } catch (error) {
      console.error('Failed to fetch submissions:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="view-page">
      <header className="header">
        <nav className="nav container">
          <div className="nav-brand">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <svg className="logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M9 9h6v6H9z" />
                <path d="M9 1v6M15 1v6M9 17v6M15 17v6M1 9h6M17 9h6M1 15h6M17 15h6" />
              </svg>
              <h1>MCP EDA Hub</h1>
            </Link>
          </div>
          <Link href="/" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            返回首页
          </Link>
        </nav>
      </header>

      <main className="container">
        <div className="content">
          <h1>提交记录</h1>
          <p className="subtitle">所有提交的MCP服务器</p>

          {loading ? (
            <p>加载中...</p>
          ) : submissions.length === 0 ? (
            <p>暂无提交记录</p>
          ) : (
            <div className="submissions-list">
              {submissions.map((submission) => (
                <div key={submission.id} className="submission-card">
                  <h3>{submission.name}</h3>
                  <p className="meta">
                    作者: {submission.author} | 分类: {submission.category}
                  </p>
                  <p className="description">{submission.description}</p>
                  <div className="links">
                    <a href={submission.githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub →
                    </a>
                    <span className="date">
                      {new Date(submission.createdAt).toLocaleDateString('zh-CN')}
                    </span>
                  </div>
                  {submission.tags && (
                    <div className="tags">
                      {submission.tags.split(',').map((tag, index) => (
                        <span key={index} className="tag">{tag.trim()}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <style jsx>{`
        .view-page {
          min-height: 100vh;
          background-color: var(--bg-secondary);
        }

        .header {
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
          position: sticky;
          top: 0;
          z-index: 100;
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

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-weight: 500;
          transition: color 0.2s;
        }

        .back-link:hover {
          color: var(--text-primary);
        }

        .back-link svg {
          width: 20px;
          height: 20px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .content {
          padding: 3rem 0;
        }

        .content h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .submissions-list {
          display: grid;
          gap: 1.5rem;
        }

        .submission-card {
          background-color: var(--bg-primary);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s;
        }

        .submission-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .submission-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .meta {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .description {
          color: var(--text-primary);
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .links {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .links a {
          color: var(--primary-color);
          font-weight: 500;
          transition: opacity 0.2s;
        }

        .links a:hover {
          opacity: 0.8;
        }

        .date {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          padding: 0.25rem 0.5rem;
          background-color: var(--bg-secondary);
          border-radius: var(--radius);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .content h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  )
}
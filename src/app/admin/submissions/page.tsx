'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Submission {
  id: string
  name: string
  description: string
  githubUrl: string
  category: string
  tags: string[]
  author: string
  email: string
  status: string
  createdAt: string
  updatedAt: string
}

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/submissions')
      if (response.ok) {
        const data = await response.json()
        setSubmissions(data)
      }
    } catch (error) {
      console.error('Failed to fetch submissions:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredSubmissions = submissions.filter(sub => 
    filter === 'all' || sub.status === filter
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return '#10b981'
      case 'rejected': return '#ef4444'
      default: return '#f59e0b'
    }
  }

  return (
    <div className="admin-page">
      <header className="header">
        <nav className="nav container">
          <div className="nav-brand">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <svg className="logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M9 9h6v6H9z" />
                <path d="M9 1v6M15 1v6M9 17v6M15 17v6M1 9h6M17 9h6M1 15h6M17 15h6" />
              </svg>
              <h1>MCP EDA Hub Admin</h1>
            </Link>
          </div>
          <Link href="/" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </nav>
      </header>

      <main className="container">
        <div className="admin-container">
          <h1>Server Submissions</h1>
          
          <div className="filters">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({submissions.length})
            </button>
            <button 
              className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
              onClick={() => setFilter('pending')}
            >
              Pending ({submissions.filter(s => s.status === 'pending').length})
            </button>
            <button 
              className={`filter-btn ${filter === 'approved' ? 'active' : ''}`}
              onClick={() => setFilter('approved')}
            >
              Approved ({submissions.filter(s => s.status === 'approved').length})
            </button>
            <button 
              className={`filter-btn ${filter === 'rejected' ? 'active' : ''}`}
              onClick={() => setFilter('rejected')}
            >
              Rejected ({submissions.filter(s => s.status === 'rejected').length})
            </button>
          </div>

          {loading ? (
            <p>Loading submissions...</p>
          ) : filteredSubmissions.length === 0 ? (
            <p>No submissions found.</p>
          ) : (
            <div className="submissions-list">
              {filteredSubmissions.map((submission) => (
                <div key={submission.id} className="submission-card">
                  <div className="submission-header">
                    <h3>{submission.name}</h3>
                    <span 
                      className="status-badge" 
                      style={{ backgroundColor: getStatusColor(submission.status) }}
                    >
                      {submission.status}
                    </span>
                  </div>
                  
                  <p className="submission-meta">
                    by {submission.author} ({submission.email}) • {submission.category}
                  </p>
                  
                  <p className="submission-description">{submission.description}</p>
                  
                  <div className="submission-links">
                    <a href={submission.githubUrl} target="_blank" rel="noopener noreferrer">
                      View on GitHub →
                    </a>
                    <span className="submission-date">
                      {new Date(submission.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  {submission.tags.length > 0 && (
                    <div className="submission-tags">
                      {submission.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
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
        .admin-page {
          min-height: 100vh;
          background-color: var(--bg-secondary);
        }

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

        .admin-container {
          padding: 3rem 0;
        }

        .admin-container h1 {
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        .filters {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .filter-btn {
          padding: 0.5rem 1rem;
          background-color: var(--bg-primary);
          border: 2px solid var(--border-color);
          border-radius: var(--radius);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .filter-btn:hover {
          border-color: var(--primary-color);
        }

        .filter-btn.active {
          background-color: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }

        .submissions-list {
          display: flex;
          flex-direction: column;
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

        .submission-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 0.5rem;
        }

        .submission-header h3 {
          font-size: 1.25rem;
          font-weight: 600;
        }

        .status-badge {
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius);
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .submission-meta {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .submission-description {
          color: var(--text-primary);
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .submission-links {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .submission-links a {
          color: var(--primary-color);
          font-weight: 500;
          transition: opacity 0.2s;
        }

        .submission-links a:hover {
          opacity: 0.8;
        }

        .submission-date {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .submission-tags {
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
          .filters {
            flex-wrap: wrap;
          }
          
          .filter-btn {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  )
}
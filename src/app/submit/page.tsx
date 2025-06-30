'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import Link from 'next/link'

export default function SubmitPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    githubUrl: '',
    category: '',
    customCategory: '',
    tags: '',
    author: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState({ type: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage({ type: '', message: '' })

    try {
      const submitData = {
        ...formData,
        category: formData.category === 'custom' ? formData.customCategory : formData.category
      }

      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage({ 
          type: 'success', 
          message: 'Thank you for your submission! We will review it and send a confirmation email soon.' 
        })
        // Reset form
        setFormData({
          name: '',
          description: '',
          githubUrl: '',
          category: '',
          customCategory: '',
          tags: '',
          author: '',
          email: ''
        })
      } else {
        setSubmitMessage({ 
          type: 'error', 
          message: data.error || 'Failed to submit. Please try again.' 
        })
      }
    } catch (error) {
      setSubmitMessage({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="submit-page">
      <header className="header">
        <nav className="nav container">
          <div className="nav-brand">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <svg className="logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M9 9h6v6H9z" />
                <path d="M9 1v6M15 1v6M9 17v6M15 17v6M1 9h6M17 9h6M1 15h6M17 15h6" />
              </svg>
              <h1>{t.siteName}</h1>
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
        <div className="form-container">
          <h1>Submit Your MCP Server</h1>
          <p className="subtitle">Share your EDA tool integration with the community</p>

          <form onSubmit={handleSubmit} className="submit-form">
            <div className="form-group">
              <label htmlFor="name">Server Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Verilator MCP Server"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe what your MCP server does and its key features"
              />
            </div>

            <div className="form-group">
              <label htmlFor="githubUrl">GitHub URL *</label>
              <input
                type="url"
                id="githubUrl"
                name="githubUrl"
                required
                value={formData.githubUrl}
                onChange={handleChange}
                placeholder="https://github.com/username/repository"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select a category</option>
                <option value="design-entry">Design Entry</option>
                <option value="simulation">Simulation</option>
                <option value="synthesis">Synthesis</option>
                <option value="verification">Verification</option>
                <option value="physical-design">Physical Design</option>
                <option value="timing-analysis">Timing Analysis</option>
                <option value="power-analysis">Power Analysis</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="pdk-technology">PDK/Technology</option>
                <option value="test">Test</option>
                <option value="ip-management">IP Management</option>
                <option value="utilities">Utilities</option>
                <option value="custom">Other (Custom Category)</option>
              </select>
            </div>

            {formData.category === 'custom' && (
              <div className="form-group">
                <label htmlFor="customCategory">Custom Category *</label>
                <input
                  type="text"
                  id="customCategory"
                  name="customCategory"
                  required
                  value={formData.customCategory}
                  onChange={handleChange}
                  placeholder="Enter your custom category"
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="tags">Tags</label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="Comma-separated tags (e.g., verilog, simulation, open-source)"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="author">Author Name *</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  required
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Your name or organization"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Contact Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {submitMessage.message && (
              <div className={`message ${submitMessage.type}`}>
                {submitMessage.message}
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit for Review'}
            </button>
          </form>
        </div>
      </main>

      <style jsx>{`
        .submit-page {
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
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .form-container {
          background-color: var(--bg-primary);
          border-radius: var(--radius-lg);
          padding: 3rem;
          margin: 3rem 0;
          box-shadow: var(--shadow-md);
        }

        .form-container h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .submit-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 500;
          color: var(--text-primary);
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          padding: 0.75rem 1rem;
          background-color: var(--bg-secondary);
          border: 2px solid var(--border-color);
          border-radius: var(--radius);
          font-size: 1rem;
          transition: all 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: var(--primary-color);
          background-color: var(--bg-primary);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .submit-btn {
          padding: 1rem 2rem;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
          border: none;
          border-radius: var(--radius);
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .message {
          padding: 1rem;
          border-radius: var(--radius);
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .message.success {
          background-color: #10b981;
          color: white;
        }

        .message.error {
          background-color: #ef4444;
          color: white;
        }

        @media (max-width: 768px) {
          .form-container {
            padding: 2rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AIChipDesignPresentation() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to the static HTML file
    window.location.href = '/ai-chip-design.html'
  }, [])

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#0a0e27',
      color: '#fff'
    }}>
      <p>Loading presentation...</p>
    </div>
  )
}
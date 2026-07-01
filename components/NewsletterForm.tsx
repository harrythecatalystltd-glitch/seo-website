'use client'
import { useState } from 'react'

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function NewsletterForm({ align = 'center' }: { align?: 'center' | 'left' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Please enter a valid email address.')
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setErrorMsg((data as { error?: string }).error || 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }
      setStatus('success')
    } catch {
      setErrorMsg('Could not connect. Check your internet and try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        justifyContent: align === 'center' ? 'center' : 'flex-start',
        background: 'rgba(255,215,0,0.08)', border: '1.5px solid rgba(255,215,0,0.3)',
        borderRadius: 12, padding: '16px 22px', fontSize: '0.9rem', fontWeight: 700, color: '#fff',
      }}>
        <svg width="16" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        You&apos;re in. Check your inbox for your first tip soon.
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate style={{ width: '100%', maxWidth: 440 }}>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <input
          type="email"
          value={email}
          onChange={e => { setEmail(e.target.value); if (status === 'error') setStatus('idle') }}
          placeholder="you@example.com"
          aria-label="Email address"
          autoComplete="email"
          style={{
            flex: '1 1 220px',
            background: 'rgba(255,255,255,0.06)',
            border: `1.5px solid ${status === 'error' ? '#e05a4e' : 'rgba(255,255,255,0.18)'}`,
            borderRadius: 10, padding: '15px 18px',
            color: '#fff', fontSize: '0.92rem',
            fontFamily: "'Open Sans', sans-serif",
            outline: 'none',
          }}
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="cta-btn"
          style={{ padding: '15px 26px', border: 'none', cursor: status === 'sending' ? 'not-allowed' : 'pointer', opacity: status === 'sending' ? 0.6 : 1 }}
        >
          <svg viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
          {status === 'sending' ? 'Sending…' : 'Get Free Weekly Tips'}
        </button>
      </div>
      {status === 'error' && (
        <p style={{ color: '#e05a4e', fontSize: '0.8rem', marginTop: 8, marginBottom: 0 }}>{errorMsg}</p>
      )}
      <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginTop: 10, marginBottom: 0 }}>
        One tip a week. No sales pitch. Unsubscribe anytime.
      </p>
    </form>
  )
}

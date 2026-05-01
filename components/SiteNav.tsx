'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const BoltIcon = () => (
  <svg viewBox="0 0 18 30"><path d="M13 0L3 16h6L4 30 16 13h-6z" /></svg>
)

export default function SiteNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  return (
    <nav className="site-nav">
      <Link href="/" className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/mainlogo-transparent.png" alt="The Catalyst Method" />
      </Link>
      <button
        className={`nav-toggle${open ? ' open' : ''}`}
        onClick={(e) => { e.stopPropagation(); setOpen(o => !o) }}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>
      <div className={`nav-dropdown${open ? ' open' : ''}`}>
        <Link href="/blog" className="nav-link">
          <BoltIcon />
          Blog
        </Link>
      </div>
    </nav>
  )
}

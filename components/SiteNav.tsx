'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const BoltIcon = () => (
  <svg viewBox="0 0 18 30"><path d="M13 0L3 16h6L4 30 16 13h-6z" /></svg>
)

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <nav className="site-nav" ref={navRef}>
      <Link href="/" className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/mainlogo-transparent.png" alt="The Catalyst Method" />
      </Link>
      <button
        className={`nav-toggle${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>
      <div className={`nav-dropdown${open ? ' open' : ''}`}>
        <Link href="/blog" className="nav-link" onClick={() => setOpen(false)}>
          <BoltIcon />
          Blog
        </Link>
      </div>
    </nav>
  )
}

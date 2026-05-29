'use client'

import { useState, useRef } from 'react'
import type { YouTubeAnalysis, TitlePattern, TitleSuggestion, YouTubeVideo, RelatedSearch } from '@/lib/youtube-types'

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

const labelStyle: Record<TitleSuggestion['label'], { text: string; bg: string; border: string; icon: string }> = {
  'Quick Win':   { text: '#34d399', bg: 'rgba(52,211,153,0.1)',  border: 'rgba(52,211,153,0.25)',  icon: '🏆' },
  'Medium Term': { text: '#fbbf24', bg: 'rgba(251,191,36,0.1)',  border: 'rgba(251,191,36,0.25)',  icon: '⏱' },
  'Long Game':   { text: '#f87171', bg: 'rgba(248,113,113,0.1)', border: 'rgba(248,113,113,0.25)', icon: '🎯' },
}

const card: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '1.5px solid rgba(255,255,255,0.1)',
  borderRadius: 14,
  padding: '24px 26px',
}

const sectionLabel: React.CSSProperties = {
  fontFamily: "'Montserrat',sans-serif",
  fontSize: '0.6rem', fontWeight: 800,
  letterSpacing: '0.14em', textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.35)', marginBottom: 16,
}

function formatViews(v?: number): string {
  if (!v) return ''
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M views`
  if (v >= 1_000) return `${Math.round(v / 1_000)}K views`
  return `${v} views`
}

/* ── Top Videos ── */
function VideoList({ videos }: { videos: YouTubeVideo[] }) {
  return (
    <div style={card}>
      <p style={sectionLabel}>Top {videos.length} Ranking Videos</p>
      <div>
        {videos.map((v, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{
              flexShrink: 0, width: 28, height: 28, borderRadius: 7,
              background: i < 3 ? 'rgba(255,0,0,0.12)' : 'rgba(255,255,255,0.06)',
              color: i < 3 ? '#ff6b6b' : 'rgba(255,255,255,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Montserrat',sans-serif", fontSize: '0.7rem', fontWeight: 800,
            }}>
              {v.position}
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <a
                href={v.url} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '0.83rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', lineHeight: 1.4, textDecoration: 'none', display: 'block', marginBottom: 4 }}
              >
                {v.title}
              </a>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', color: '#ff6b6b', display: 'flex', alignItems: 'center', gap: 4 }}>
                  {v.channelVerified && <span title="Verified" style={{ fontSize: '0.65rem' }}>✓</span>}
                  {v.channel}
                </span>
                {v.duration && (
                  <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.28)', background: 'rgba(255,255,255,0.05)', padding: '1px 7px', borderRadius: 4 }}>{v.duration}</span>
                )}
                {v.views !== undefined && v.views > 0 && (
                  <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)' }}>{formatViews(v.views)}</span>
                )}
                {v.publishedDate && (
                  <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)' }}>{v.publishedDate}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Pattern breakdown ── */
function PatternBar({ p }: { p: TitlePattern }) {
  const fill = p.percentage >= 60 ? '#f87171' : p.percentage >= 25 ? '#fbbf24' : '#34d399'
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'rgba(255,255,255,0.85)', display: 'flex', gap: 6, alignItems: 'center' }}>
          <span>{p.emoji}</span> {p.name}
        </span>
        <span style={{ fontSize: '0.78rem', fontWeight: 800, color: fill, fontFamily: "'Montserrat',sans-serif" }}>
          {p.percentage}%
        </span>
      </div>
      <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 100, height: 7, overflow: 'hidden', marginBottom: 6 }}>
        <div style={{ width: `${p.percentage}%`, height: '100%', background: fill, borderRadius: 100, transition: 'width 0.6s ease' }} />
      </div>
      {p.examples.length > 0 && (
        <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', fontStyle: 'italic', lineHeight: 1.5 }}>
          e.g. &ldquo;{p.examples[0]}&rdquo;
        </p>
      )}
    </div>
  )
}

function Patterns({ patterns }: { patterns: TitlePattern[] }) {
  const [expanded, setExpanded] = useState<string | null>(null)
  return (
    <div style={card}>
      <p style={sectionLabel}>Title Format Breakdown</p>
      <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)', marginBottom: 20, lineHeight: 1.6, fontFamily: "'Open Sans',sans-serif" }}>
        What formats the top-ranking videos are using — high percentages mean a crowded format, low percentages mean an opening.
      </p>
      {patterns.map(p => (
        <div key={p.name}>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => setExpanded(expanded === p.name ? null : p.name)}
          >
            <PatternBar p={p} />
          </div>
          {expanded === p.name && (
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: '10px 14px', marginTop: -10, marginBottom: 16 }}>
              <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontFamily: "'Open Sans',sans-serif" }}>{p.tip}</p>
            </div>
          )}
        </div>
      ))}
      <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', marginTop: 4, fontStyle: 'italic' }}>Click any bar to learn more about that format</p>
    </div>
  )
}

/* ── Related searches ── */
function RelatedSearches({ searches }: { searches: RelatedSearch[] }) {
  if (!searches.length) return null
  return (
    <div style={card}>
      <p style={sectionLabel}>Related YouTube Searches</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {searches.map((s, i) => (
          <a
            key={i}
            href={s.link ?? `https://www.youtube.com/results?search_query=${encodeURIComponent(s.query)}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 100, padding: '6px 14px',
              fontSize: '0.76rem', color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none', transition: 'all 0.15s',
              fontFamily: "'Open Sans',sans-serif",
            }}
          >
            {s.query}
          </a>
        ))}
      </div>
    </div>
  )
}

/* ── Title suggestion row ── */
function SuggestionRow({ s }: { s: TitleSuggestion }) {
  const [copied, setCopied] = useState(false)
  const ls = labelStyle[s.label]

  const copy = async () => {
    await navigator.clipboard.writeText(s.title)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '16px 0' }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8, alignItems: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: ls.bg, color: ls.text, border: `1px solid ${ls.border}`, borderRadius: 100, padding: '3px 10px', fontSize: '0.68rem', fontWeight: 700, fontFamily: "'Montserrat',sans-serif", textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {ls.icon} {s.label}
            </span>
            <span style={{ background: 'rgba(255,0,0,0.08)', border: '1px solid rgba(255,0,0,0.15)', borderRadius: 100, padding: '3px 10px', fontSize: '0.68rem', color: 'rgba(255,100,100,0.7)', fontStyle: 'italic' }}>
              {s.angle}
            </span>
          </div>
          <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.95)', lineHeight: 1.5, marginBottom: 8 }}>
            {s.title}
          </p>
          <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.42)', lineHeight: 1.75, fontFamily: "'Open Sans',sans-serif" }}>
            💡 {s.explanation}
          </p>
        </div>
        <button
          onClick={copy}
          title="Copy title"
          style={{
            flexShrink: 0, width: 34, height: 34, borderRadius: 8,
            background: copied ? 'rgba(52,211,153,0.15)' : 'rgba(255,255,255,0.06)',
            border: `1px solid ${copied ? 'rgba(52,211,153,0.3)' : 'rgba(255,255,255,0.1)'}`,
            color: copied ? '#34d399' : 'rgba(255,255,255,0.4)',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.9rem', transition: 'all 0.15s',
          }}
        >
          {copied ? '✓' : '⎘'}
        </button>
      </div>
    </div>
  )
}

function Suggestions({ suggestions }: { suggestions: TitleSuggestion[] }) {
  const [filter, setFilter] = useState<string>('all')
  const filters: Array<'all' | TitleSuggestion['label']> = ['all', 'Quick Win', 'Medium Term', 'Long Game']
  const filtered = filter === 'all' ? suggestions : suggestions.filter(s => s.label === filter)
  const counts = {
    'Quick Win':   suggestions.filter(s => s.label === 'Quick Win').length,
    'Medium Term': suggestions.filter(s => s.label === 'Medium Term').length,
    'Long Game':   suggestions.filter(s => s.label === 'Long Game').length,
  }

  return (
    <div style={card}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
        <p style={{ ...sectionLabel, marginBottom: 0 }}>Title Suggestions ({suggestions.length})</p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {filters.map(f => {
            const active = filter === f
            const count = f === 'all' ? suggestions.length : counts[f as TitleSuggestion['label']]
            const ls = f !== 'all' ? labelStyle[f as TitleSuggestion['label']] : null
            return (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding: '5px 12px', borderRadius: 8, fontSize: '0.72rem', fontWeight: 700,
                fontFamily: "'Montserrat',sans-serif", cursor: 'pointer', border: '1px solid',
                background: active ? (ls ? ls.bg : 'rgba(255,215,0,0.1)') : 'rgba(255,255,255,0.04)',
                color: active ? (ls ? ls.text : '#FFD700') : 'rgba(255,255,255,0.4)',
                borderColor: active ? (ls ? ls.border : 'rgba(255,215,0,0.3)') : 'rgba(255,255,255,0.08)',
                transition: 'all 0.15s',
              }}>
                {f === 'all' ? `All (${count})` : `${f} (${count})`}
              </button>
            )
          })}
        </div>
      </div>
      {filtered.map((s, i) => <SuggestionRow key={i} s={s} />)}
    </div>
  )
}

/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */

export default function YouTubeAnalyser() {
  const [keyword, setKeyword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<YouTubeAnalysis | null>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  const analyse = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!keyword.trim()) return
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const res = await fetch('/api/analyse-youtube', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keyword: keyword.trim() }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Analysis failed')
      setResult(data)
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px 100px' }}>

      {/* Search form */}
      <div style={{ padding: '28px 0 0' }}>
        <form onSubmit={analyse} style={{ display: 'flex', gap: 10 }}>
          <div style={{ flex: 1, position: 'relative' }}>
            {/* YouTube play icon */}
            <svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 18, height: 18, pointerEvents: 'none' }}>
              <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.2 5 12 5 12 5s-4.2 0-7 .1c-.4 0-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.8C6.8 19 12 19 12 19s4.2 0 7-.2c.4 0 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 15V9l5.5 3-5.5 3z"/>
            </svg>
            <input
              type="text"
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
              placeholder="e.g. how to grow a youtube channel"
              disabled={loading}
              autoFocus
              style={{
                width: '100%', boxSizing: 'border-box',
                paddingLeft: 42, paddingRight: 16, paddingTop: 14, paddingBottom: 14,
                background: 'rgba(255,255,255,0.06)',
                border: '1.5px solid rgba(255,255,255,0.14)',
                borderRadius: 10, color: '#fff',
                fontFamily: "'Open Sans',sans-serif", fontSize: '0.95rem',
                outline: 'none',
              }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              flexShrink: 0, padding: '14px 28px', borderRadius: 10,
              background: '#FFD700', color: '#002B45',
              border: 'none', cursor: loading ? 'default' : 'pointer',
              opacity: loading ? 0.6 : 1,
              fontFamily: "'Montserrat',sans-serif", fontWeight: 800,
              fontSize: '0.82rem', letterSpacing: '0.04em', textTransform: 'uppercase',
              transition: 'all 0.15s', whiteSpace: 'nowrap',
            }}
          >
            {loading ? 'Analysing...' : 'Analyse'}
          </button>
        </form>
        <p style={{ marginTop: 10, fontSize: '0.74rem', color: 'rgba(255,255,255,0.28)', fontFamily: "'Open Sans',sans-serif" }}>
          Pulls the top 10 YouTube results · Detects which title formats are working · Generates title ideas ranked by opportunity
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, padding: '60px 0' }}>
          <div style={{ width: 40, height: 40, border: '3px solid rgba(255,255,255,0.1)', borderTopColor: '#FFD700', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', fontFamily: "'Open Sans',sans-serif" }}>
            Fetching top YouTube results and analysing title formats...
          </p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div style={{ marginTop: 24, background: 'rgba(248,113,113,0.06)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: 12, padding: '18px 22px', display: 'flex', gap: 12 }}>
          <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>⚠</span>
          <div>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f87171', marginBottom: 4, fontFamily: "'Montserrat',sans-serif" }}>Analysis failed</p>
            <p style={{ fontSize: '0.82rem', color: 'rgba(248,113,113,0.75)', fontFamily: "'Open Sans',sans-serif" }}>{error}</p>
          </div>
        </div>
      )}

      {/* Results */}
      {result && (
        <div ref={resultsRef} style={{ paddingTop: 36, display: 'flex', flexDirection: 'column', gap: 20 }}>

          {/* Keyword chip */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'Montserrat',sans-serif" }}>Results for</span>
            <span style={{ background: 'rgba(255,0,0,0.1)', border: '1px solid rgba(255,0,0,0.2)', borderRadius: 100, padding: '4px 14px', fontSize: '0.82rem', fontFamily: 'monospace', color: '#ff6b6b' }}>
              {result.keyword}
            </span>
          </div>

          {/* Videos + Patterns side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 20 }}>
            <VideoList videos={result.videos} />
            <Patterns patterns={result.patterns} />
          </div>

          {/* Related searches */}
          {result.relatedSearches.length > 0 && (
            <RelatedSearches searches={result.relatedSearches} />
          )}

          {/* Title suggestions */}
          <Suggestions suggestions={result.suggestions} />

          {/* CTA */}
          <div style={{ background: 'rgba(255,215,0,0.05)', border: '1px solid rgba(255,215,0,0.18)', borderRadius: 14, padding: '24px 28px', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.82rem', fontWeight: 800, color: '#fff', marginBottom: 4 }}>
                Want to know if your website can rank for keywords like this too?
              </p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontFamily: "'Open Sans',sans-serif" }}>
                Run a free audit and see exactly what is stopping your site from appearing on Google.
              </p>
            </div>
            <a href="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, flexShrink: 0,
              background: '#FFD700', color: '#002B45',
              fontFamily: "'Montserrat',sans-serif", fontWeight: 800,
              fontSize: '0.78rem', letterSpacing: '0.04em', textTransform: 'uppercase',
              padding: '12px 22px', borderRadius: 8, textDecoration: 'none',
            }}>
              <svg width="9" viewBox="0 0 18 30" fill="currentColor"><path d={BOLT} /></svg>
              Free Website Audit
            </a>
          </div>
        </div>
      )}

      {/* Empty state */}
      {!result && !loading && !error && (
        <div style={{ textAlign: 'center', padding: '72px 0', color: 'rgba(255,255,255,0.2)' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 44, height: 44, margin: '0 auto 16px', opacity: 0.25 }}>
            <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.2 5 12 5 12 5s-4.2 0-7 .1c-.4 0-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.8C6.8 19 12 19 12 19s4.2 0 7-.2c.4 0 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 15V9l5.5 3-5.5 3z"/>
          </svg>
          <p style={{ fontSize: '0.85rem', fontFamily: "'Open Sans',sans-serif" }}>Enter a topic to see what is ranking on YouTube and get title ideas</p>
        </div>
      )}
    </div>
  )
}

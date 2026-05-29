'use client'

import { useState, useRef } from 'react'
import type { KeywordAnalysis, DifficultyScore, SerpResult, PAA, HeadlineSuggestion } from '@/lib/keyword-types'

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

/* ── colour maps ── */
const diffStyle: Record<DifficultyScore['label'], { text: string; bg: string; border: string; bar: string; label: string }> = {
  green:  { text: '#34d399', bg: 'rgba(52,211,153,0.08)',  border: 'rgba(52,211,153,0.22)',  bar: '#34d399', label: 'Low' },
  orange: { text: '#fbbf24', bg: 'rgba(251,191,36,0.08)',  border: 'rgba(251,191,36,0.22)',  bar: '#fbbf24', label: 'Medium' },
  red:    { text: '#f87171', bg: 'rgba(248,113,113,0.08)', border: 'rgba(248,113,113,0.22)', bar: '#f87171', label: 'High' },
}

const labelStyle: Record<HeadlineSuggestion['label'], { text: string; bg: string; border: string; icon: string }> = {
  'Quick Win':   { text: '#34d399', bg: 'rgba(52,211,153,0.1)',  border: 'rgba(52,211,153,0.25)',  icon: '🏆' },
  'Medium Term': { text: '#fbbf24', bg: 'rgba(251,191,36,0.1)',  border: 'rgba(251,191,36,0.25)',  icon: '⏱' },
  'Long Game':   { text: '#f87171', bg: 'rgba(248,113,113,0.1)', border: 'rgba(248,113,113,0.25)', icon: '🎯' },
}

const labelDesc: Record<HeadlineSuggestion['label'], string> = {
  'Quick Win':   'Realistic to rank within 3-6 months with quality content',
  'Medium Term': '6-12 months with good content and some link building',
  'Long Game':   '12+ months — high effort but high reward if you rank',
}

/* ── shared card style ── */
const card: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '1.5px solid rgba(255,255,255,0.1)',
  borderRadius: 14,
  padding: '24px 26px',
}

/* ── position badge colour ── */
function posColor(pos: number): string {
  if (pos <= 3) return '#34d399'
  if (pos <= 7) return '#fbbf24'
  return 'rgba(255,255,255,0.4)'
}

/* ── big brand signal ── */
const BRAND_SIGNALS = ['wikipedia', 'amazon', 'bbc', 'guardian', 'reddit', 'youtube', 'linkedin', 'gov.uk', 'nhs', 'trustpilot']
function isBrand(domain: string) {
  return BRAND_SIGNALS.some(s => domain.includes(s))
}

/* ══════════════════════════════════════
   SUB-COMPONENTS
══════════════════════════════════════ */

function DifficultyBadge({ difficulty }: { difficulty: DifficultyScore }) {
  const c = diffStyle[difficulty.label]
  return (
    <div style={{ ...card, background: c.bg, borderColor: c.border }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
        <div>
          <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: c.text, marginBottom: 8 }}>
            Keyword Difficulty
          </p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '3rem', fontWeight: 900, color: c.text, lineHeight: 1 }}>{difficulty.score}</span>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '1.2rem', fontWeight: 700, color: 'rgba(255,255,255,0.3)' }}>/100</span>
          </div>
          <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.82rem', fontWeight: 800, color: c.text, marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {difficulty.verdict}
          </p>
        </div>
        <div style={{ minWidth: 140, paddingTop: 4 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', fontFamily: "'Montserrat',sans-serif" }}>Easy</span>
            <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', fontFamily: "'Montserrat',sans-serif" }}>Hard</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 100, height: 10, overflow: 'hidden' }}>
            <div style={{ width: `${difficulty.score}%`, height: '100%', background: c.bar, borderRadius: 100, transition: 'width 0.7s ease' }} />
          </div>
          <div style={{ display: 'flex', gap: 6, marginTop: 8, justifyContent: 'flex-end' }}>
            {(['green', 'orange', 'red'] as const).map(l => (
              <span key={l} style={{ width: 12, height: 12, borderRadius: 3, background: diffStyle[l].bar, display: 'inline-block' }} />
            ))}
          </div>
        </div>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 14, fontFamily: "'Open Sans',sans-serif" }}>
        {difficulty.explanation}
      </p>
    </div>
  )
}

function SerpResultsList({ results }: { results: SerpResult[] }) {
  return (
    <div style={card}>
      <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 14 }}>
        Top {results.length} Ranking Pages
      </p>
      <div>
        {results.map(r => (
          <div key={r.position} style={{ display: 'flex', gap: 12, padding: '10px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{
              flexShrink: 0, width: 28, height: 28, borderRadius: 7,
              background: `${posColor(r.position)}1a`,
              color: posColor(r.position),
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Montserrat',sans-serif", fontSize: '0.7rem', fontWeight: 800,
            }}>
              {r.position}
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.83rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', lineHeight: 1.3, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>
                  {r.title}
                </span>
                {isBrand(r.domain) && (
                  <span style={{ flexShrink: 0, fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(248,113,113,0.12)', color: '#f87171', border: '1px solid rgba(248,113,113,0.25)', borderRadius: 4, padding: '2px 7px' }}>
                    Brand
                  </span>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 3 }}>
                <span style={{ fontSize: '0.72rem', color: '#34d399', maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.domain}</span>
                <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem', textDecoration: 'none', flexShrink: 0 }} aria-label="Open">
                  ↗
                </a>
              </div>
              {r.snippet && (
                <p style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.6, marginTop: 4, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                  {r.snippet}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PAAList({ questions }: { questions: PAA[] }) {
  if (!questions.length) {
    return (
      <div style={card}>
        <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 14 }}>
          People Also Ask
        </p>
        <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)' }}>No PAA questions found for this keyword.</p>
      </div>
    )
  }
  return (
    <div style={card}>
      <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 14 }}>
        People Also Ask ({questions.length})
      </p>
      <div>
        {questions.map((q, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, padding: '10px 0', borderTop: '1px solid rgba(255,255,255,0.06)', alignItems: 'flex-start' }}>
            <span style={{ flexShrink: 0, color: 'rgba(52,211,153,0.6)', fontSize: '0.9rem', marginTop: 1 }}>?</span>
            <div>
              <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>{q.question}</p>
              {q.snippet && (
                <p style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.6, marginTop: 4, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                  {q.snippet}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function HeadlineRow({ h }: { h: HeadlineSuggestion }) {
  const [copied, setCopied] = useState(false)
  const ls = labelStyle[h.label]

  const copy = async () => {
    await navigator.clipboard.writeText(h.headline)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '16px 0' }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8, alignItems: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: ls.bg, color: ls.text, border: `1px solid ${ls.border}`, borderRadius: 100, padding: '3px 10px', fontSize: '0.68rem', fontWeight: 700, fontFamily: "'Montserrat',sans-serif", textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {ls.icon} {h.label}
            </span>
            <span style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, padding: '3px 10px', fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
              {h.angle}
            </span>
          </div>
          <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'rgba(255,255,255,0.95)', lineHeight: 1.55, marginBottom: 8 }}>
            {h.headline}
          </p>
          <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.42)', lineHeight: 1.75, fontFamily: "'Open Sans',sans-serif" }}>
            💡 {h.explanation}
          </p>
        </div>
        <button
          onClick={copy}
          title="Copy headline"
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

function Headlines({ headlines }: { headlines: HeadlineSuggestion[] }) {
  const [filter, setFilter] = useState<string>('all')
  const filters: Array<'all' | HeadlineSuggestion['label']> = ['all', 'Quick Win', 'Medium Term', 'Long Game']
  const filtered = filter === 'all' ? headlines : headlines.filter(h => h.label === filter)
  const counts = {
    'Quick Win': headlines.filter(h => h.label === 'Quick Win').length,
    'Medium Term': headlines.filter(h => h.label === 'Medium Term').length,
    'Long Game': headlines.filter(h => h.label === 'Long Game').length,
  }

  return (
    <div style={card}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
        <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
          Headline Suggestions ({headlines.length})
        </p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {filters.map(f => {
            const count = f === 'all' ? headlines.length : counts[f as HeadlineSuggestion['label']]
            const active = filter === f
            const ls = f !== 'all' ? labelStyle[f as HeadlineSuggestion['label']] : null
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '5px 12px', borderRadius: 8, fontSize: '0.72rem', fontWeight: 700,
                  fontFamily: "'Montserrat',sans-serif", cursor: 'pointer', border: '1px solid',
                  background: active ? (ls ? ls.bg : 'rgba(255,215,0,0.1)') : 'rgba(255,255,255,0.04)',
                  color: active ? (ls ? ls.text : 'var(--gold)') : 'rgba(255,255,255,0.4)',
                  borderColor: active ? (ls ? ls.border : 'rgba(255,215,0,0.3)') : 'rgba(255,255,255,0.08)',
                  transition: 'all 0.15s',
                }}
              >
                {f === 'all' ? `All (${count})` : `${f} (${count})`}
              </button>
            )
          })}
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '10px 14px', marginBottom: 16, display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {(Object.entries(labelDesc) as [HeadlineSuggestion['label'], string][]).map(([lbl, desc]) => (
          <div key={lbl} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.72rem', color: 'rgba(255,255,255,0.38)' }}>
            <span style={{ color: labelStyle[lbl].text }}>{labelStyle[lbl].icon}</span>
            <strong style={{ color: 'rgba(255,255,255,0.6)' }}>{lbl}:</strong> {desc}
          </div>
        ))}
      </div>

      {filtered.length === 0
        ? <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)', padding: '12px 0' }}>No headlines match this filter.</p>
        : filtered.map((h, i) => <HeadlineRow key={i} h={h} />)
      }
    </div>
  )
}

/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */

export default function KeywordAnalyser() {
  const [keyword, setKeyword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<KeywordAnalysis | null>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  const analyse = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!keyword.trim()) return
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const res = await fetch('/api/analyse-keyword', {
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
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px 100px' }}>

      {/* Search form */}
      <div style={{ padding: '64px 0 0' }}>
        <form onSubmit={analyse} style={{ display: 'flex', gap: 10 }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <svg
              viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8"
              style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 18, height: 18, pointerEvents: 'none' }}
            >
              <circle cx="8.5" cy="8.5" r="5.5" />
              <path d="M13 13l4 4" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
              placeholder="e.g. local seo for small businesses"
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
            disabled={loading || !keyword.trim()}
            style={{
              flexShrink: 0, padding: '14px 28px', borderRadius: 10,
              background: keyword.trim() && !loading ? 'var(--gold)' : 'rgba(255,215,0,0.25)',
              color: keyword.trim() && !loading ? '#002B45' : 'rgba(255,255,255,0.3)',
              border: 'none', cursor: keyword.trim() && !loading ? 'pointer' : 'default',
              fontFamily: "'Montserrat',sans-serif", fontWeight: 800,
              fontSize: '0.82rem', letterSpacing: '0.04em', textTransform: 'uppercase',
              transition: 'all 0.15s', whiteSpace: 'nowrap',
            }}
          >
            {loading ? 'Analysing...' : 'Analyse'}
          </button>
        </form>
        <p style={{ marginTop: 10, fontSize: '0.74rem', color: 'rgba(255,255,255,0.28)', fontFamily: "'Open Sans',sans-serif" }}>
          Analyses the top UK Google results · Scores keyword difficulty · Generates headline ideas ranked by rankability
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, padding: '60px 0' }}>
          <div style={{
            width: 40, height: 40,
            border: '3px solid rgba(255,255,255,0.1)',
            borderTopColor: 'var(--gold)',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
          }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', fontFamily: "'Open Sans',sans-serif" }}>
            Fetching UK Google results and scoring difficulty...
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
            <span style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 100, padding: '4px 14px', fontSize: '0.82rem', fontFamily: 'monospace', color: '#34d399' }}>
              {result.keyword}
            </span>
          </div>

          <DifficultyBadge difficulty={result.difficulty} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            <SerpResultsList results={result.serpResults} />
            <PAAList questions={result.paaQuestions} />
          </div>

          <Headlines headlines={result.headlines} />

          {/* CTA nudge */}
          <div style={{ background: 'rgba(255,215,0,0.05)', border: '1px solid rgba(255,215,0,0.18)', borderRadius: 14, padding: '24px 28px', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.82rem', fontWeight: 800, color: '#fff', marginBottom: 4 }}>
                Want help ranking for keywords like this?
              </p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontFamily: "'Open Sans',sans-serif" }}>
                Run a free audit of your website and see exactly what is stopping you from appearing on Google.
              </p>
            </div>
            <a href="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, flexShrink: 0,
              background: 'var(--gold)', color: '#002B45',
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
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 44, height: 44, margin: '0 auto 16px', opacity: 0.3 }}>
            <circle cx="8.5" cy="8.5" r="5.5" />
            <path d="M13 13l4 4" strokeLinecap="round" />
          </svg>
          <p style={{ fontSize: '0.85rem', fontFamily: "'Open Sans',sans-serif" }}>Enter a keyword above to analyse Google competition and get headline ideas</p>
        </div>
      )}
    </div>
  )
}

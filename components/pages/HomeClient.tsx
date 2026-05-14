'use client'
import { useState, useEffect, useRef } from 'react'
import SiteNav from '@/components/SiteNav'

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

const SCAN_STATUSES = [
  'Fetching your page…',
  'Checking page speed and mobile…',
  'Analysing headlines and structure…',
  'Checking lead generation signals…',
  'Looking for reviews and trust signals…',
  'Calculating your score…',
]

type Check = {
  id: string; category: string; title: string; what: string; impact: string;
  severity: 'critical' | 'urgent' | 'good'; points: number; maxPoints: number;
}

type ScanResult = {
  url: string; domain: string; score: number;
  band: { label: string; message: string; color: string };
  checks: Check[]; critical: Check[]; urgent: Check[]; good: Check[];
  pageSpeed: number | null; scannedAt: string; email?: string;
  auditCount?: number | null;
}

const COUNTER_KEY = 'auditCount'
const COUNTER_BASE = 1000

const LEADS_FIGURE: Record<string, string> = {
  page_speed: 'Costing you an estimated 5–8 leads every month — most visitors leave before a slow page loads',
  mobile_friendly: 'Could be losing you 6–10 leads every month — over half of all local searches happen on phones',
  https: 'Could cost you 3–5 leads every month — the "Not Secure" warning sends visitors straight back to Google',
  title_tag: 'Could be missing out on 5–8 leads every month from lower Google click-through rates',
  meta_description: 'Could be costing you 4–6 leads every month — no snippet means fewer people click your listing',
  h1_tag: 'Could be losing you 6–9 leads every month — without a clear headline Google struggles to rank you',
  schema: 'Could be missing 5–8 leads every month from Google Maps results alone',
  image_alt: 'Could be costing you 3–5 leads every month from reduced search visibility',
  tap_to_call: 'Could be losing 4–7 mobile leads every month — most people will not copy-paste a number to call',
  phone_above_fold: 'Could be costing you 3–6 leads every month — most visitors never scroll to find your number',
  cta_button: 'Could be losing 6–10 leads every month — visitors with no clear next step simply leave',
  contact_form: 'Could be missing 4–7 out-of-hours leads every month — no form means no way to enquire at night or weekends',
  nap: 'Could be costing you 4–6 leads every month from lower Google Maps rankings',
  social_proof: 'Could be losing 5–8 leads every month to competitors who show reviews — 90% of people check before choosing',
  lead_magnet: 'Could be losing 8–15 future leads every month — only 3% of visitors are ready to buy today, the rest leave forever',
  problem_solution: 'Could be losing 6–10 leads every month — a vague headline sends most visitors back to Google in under 5 seconds',
}

export default function HomeClient() {
  const [heroState, setHeroState] = useState<'input' | 'scanning' | 'error'>('input')
  const [urlValue, setUrlValue] = useState('')
  const [scanResult, setScanResult] = useState<ScanResult | null>(null)
  const [scanningStatus, setScanningStatus] = useState(SCAN_STATUSES[0])
  const [errorMsg, setErrorMsg] = useState('')
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [emailErr, setEmailErr] = useState(false)
  const [displayScore, setDisplayScore] = useState(0)
  const [auditCount, setAuditCount] = useState(COUNTER_BASE)
  const [counterBump, setCounterBump] = useState(false)
  const arcRef = useRef<SVGCircleElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('/api/audit-count')
      .then(r => r.json())
      .then((data: { count: number | null }) => {
        if (data.count) {
          setAuditCount(data.count)
          localStorage.setItem(COUNTER_KEY, String(data.count))
        } else {
          const stored = parseInt(localStorage.getItem(COUNTER_KEY) || '', 10)
          if (!isNaN(stored)) setAuditCount(stored)
        }
      })
      .catch(() => {
        const stored = parseInt(localStorage.getItem(COUNTER_KEY) || '', 10)
        if (!isNaN(stored)) setAuditCount(stored)
      })
  }, [])

  useEffect(() => {
    if (!scanResult || !arcRef.current) return
    const score = scanResult.score
    const color = score >= 65 ? '#059669' : score >= 40 ? '#D97706' : '#DC2626'
    const arc = arcRef.current
    arc.style.stroke = color
    arc.style.filter = `drop-shadow(0 0 8px ${color})`
    const t = setTimeout(() => {
      arc.style.strokeDashoffset = String(339.292 - (score / 100) * 339.292)
    }, 80)
    let cur = 0
    const inc = Math.max(1, Math.ceil(score / 45))
    const counter = setInterval(() => {
      cur = Math.min(cur + inc, score)
      setDisplayScore(cur)
      if (cur >= score) clearInterval(counter)
    }, 30)
    return () => { clearTimeout(t); clearInterval(counter) }
  }, [scanResult])

  async function startScan() {
    const raw = urlValue.trim()
    if (!raw) return
    setHeroState('scanning')
    setScanResult(null)
    setDisplayScore(0)
    setScanningStatus(SCAN_STATUSES[0])
    let si = 0
    const ticker = setInterval(() => {
      si = (si + 1) % SCAN_STATUSES.length
      setScanningStatus(SCAN_STATUSES[si])
    }, 1800)
    try {
      const res = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: raw }),
      })
      clearInterval(ticker)
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        setErrorMsg((err as {error?: string}).error || 'Something went wrong. Please try again.')
        setHeroState('error')
        return
      }
      const data: ScanResult = await res.json()
      try { sessionStorage.setItem('scanData', JSON.stringify(data)) } catch {}
      if (data.auditCount) {
        localStorage.setItem(COUNTER_KEY, String(data.auditCount))
        setAuditCount(data.auditCount)
        setCounterBump(true)
        setTimeout(() => setCounterBump(false), 200)
      }
      setScanResult(data)
      setHeroState('input')
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
    } catch {
      clearInterval(ticker)
      setErrorMsg('Could not connect. Check your internet and try again.')
      setHeroState('error')
    }
  }

  async function submitEmail() {
    const email = emailValue.trim()
    const name  = nameValue.trim()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailErr(true)
      setTimeout(() => setEmailErr(false), 1500)
      return
    }
    const data = scanResult ? { ...scanResult, email } : null
    if (data) { try { sessionStorage.setItem('scanData', JSON.stringify(data)) } catch {} }
    const p = new URLSearchParams({
      score: String(scanResult?.score ?? 0),
      domain: scanResult?.domain ?? '',
      email,
      band: scanResult?.band?.label ?? '',
    })
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          score: scanResult?.score,
          domain: scanResult?.domain,
          band: scanResult?.band?.label,
          critical: scanResult?.critical?.slice(0, 3).map(c => ({ title: c.title, detail: c.impact })),
          urgent: scanResult?.urgent?.slice(0, 2).map(u => ({ title: u.title })),
          checksCount: scanResult?.checks?.length ?? 0,
        }),
      })
    } catch {}
    window.location.href = '/thankyou?' + p.toString()
  }

  const scoreColor = scanResult
    ? (scanResult.score >= 65 ? '#059669' : scanResult.score >= 40 ? '#D97706' : '#DC2626')
    : '#059669'

  return (
    <>
      {/* Hero */}
      <section className="hero hero-home">
        <SiteNav />
        <div className="bolts-bg" aria-hidden="true">
          {[1,2,3,4,5,6,7,8].map(n => (
            <svg key={n} className={`bolt b${n}`} viewBox="0 0 18 30">
              <path fill="currentColor" d={BOLT} />
            </svg>
          ))}
        </div>

        <div className="hero-inner">
          <div className="widget-wrap">
            <div className="brand-tag">
              <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
              The Catalyst Method | Free Audit
            </div>

            <h1>Free Lead Generation Audit<br />for <em>UK Local Businesses</em></h1>
            <p className="subtitle">
              Enter your web address below. We&apos;ll scan your site in seconds and show you exactly
              what&apos;s working, what&apos;s broken, and what it&apos;s costing you.
            </p>

            {heroState === 'input' && (
              <>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 18 }}>
                  <span style={{
                    color: '#FFD700',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    letterSpacing: '-0.01em',
                    transition: 'transform 0.15s ease, opacity 0.15s ease',
                    ...(counterBump ? { transform: 'scale(1.25)', opacity: 0.7 } : {}),
                  }}>
                    {auditCount.toLocaleString('en-GB')}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.48)' }}>
                    businesses have had a free audit
                  </span>
                </div>

                <div id="state-input">
                  <input
                    type="text"
                    id="url-input"
                    placeholder="yourwebsite.co.uk"
                    autoComplete="off"
                    spellCheck={false}
                    value={urlValue}
                    onChange={e => setUrlValue(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') startScan() }}
                  />
                  <button type="button" className="scan-btn" onClick={startScan}>
                    Scan My Website Free
                  </button>
                </div>
                <div className="input-meta">
                  <span className="input-meta-item">Free — no sign-up needed</span>
                  <span className="input-meta-item">Results in 10 seconds</span>
                  <span className="input-meta-item">16 checks run instantly</span>
                </div>
              </>
            )}

            {heroState === 'scanning' && (
              <div id="state-scanning">
                <div className="scanner-ring" />
                <p className="scanning-label">Scanning your website…</p>
                <p className="scanning-status">{scanningStatus}</p>
              </div>
            )}

            {heroState === 'error' && (
              <div id="state-error">
                <p className="error-heading">We could not scan that website</p>
                <p className="error-msg">{errorMsg}</p>
                <button
                  type="button"
                  className="retry-btn"
                  onClick={() => { setUrlValue(''); setHeroState('input') }}
                >
                  Try a Different URL
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <div style={{
        background: 'rgba(255,255,255,0.025)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '36px 24px',
      }}>
        <div style={{
          maxWidth: '900px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '28px', textAlign: 'center', alignItems: 'center',
        }}>
          <div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '2.2rem', fontWeight: 900, color: '#FFD700', lineHeight: 1 }}>+297%</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.42)', marginTop: '6px', fontFamily: "'Open Sans', sans-serif" }}>website traffic · Creation Coffee · 90 days · zero paid ads</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '2.2rem', fontWeight: 900, color: '#FFD700', lineHeight: 1 }}>£1M+</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.42)', marginTop: '6px', fontFamily: "'Open Sans', sans-serif" }}>revenue generated for a UK local service business · organic SEO only</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="/signup" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'transparent', border: '1px solid rgba(255,215,0,0.3)',
              color: 'rgba(255,215,0,0.75)',
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase',
              padding: '11px 18px', borderRadius: '8px', textDecoration: 'none',
            }}>
              View Case Studies →
            </a>
          </div>
        </div>
      </div>

      {/* Results */}
      {scanResult && (
        <div id="state-results" ref={resultsRef}>
          <div className="results-section">
            <div className="score-wrap">
              <div className="domain-pill">
                <svg width="8" height="8" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="3.5" stroke="currentColor" strokeOpacity="0.5" fill="none" />
                </svg>
                <span>{scanResult.domain}</span>
              </div>
              <div className="score-ring-container">
                <svg className="score-svg" viewBox="0 0 120 120">
                  <circle className="score-track" cx="60" cy="60" r="54" />
                  <circle className="score-arc" ref={arcRef} cx="60" cy="60" r="54" />
                </svg>
                <div className="score-num">
                  <div>{displayScore}</div>
                  <span>/100</span>
                </div>
              </div>
              <div className="score-band-label" style={{ color: scoreColor }}>{scanResult.band.label}</div>
              <div className="score-band-msg">{scanResult.band.message}</div>
            </div>

            {[...scanResult.critical, ...scanResult.urgent].slice(0, 3).length > 0 && (
              <div className="findings-group">
                <div className="section-divider">
                  <div className="section-divider-line" />
                  <div className="section-divider-label">
                    <span className="section-divider-dot" style={{ background: 'var(--critical)' }} />
                    Your 3 Biggest Issues
                  </div>
                  <div className="section-divider-line" />
                </div>
                {[...scanResult.critical, ...scanResult.urgent].slice(0, 3).map(c => (
                  <div key={c.id} className={`finding-card ${c.severity}`}>
                    <div className="card-body">
                      <div className="card-title">{c.title}</div>
                      <div className="card-impact">{c.impact}</div>
                      <div className="card-leads-figure">
                        {LEADS_FIGURE[c.id] ?? 'Could be costing you leads every month'}
                      </div>
                    </div>
                    <span className={`card-badge ${c.severity}`}>{c.severity}</span>
                  </div>
                ))}
              </div>
            )}

            <p className="more-hint">
              {(() => {
                const total = [...scanResult.critical, ...scanResult.urgent].length
                const hidden = Math.max(0, total - 3)
                const good = scanResult.good.length
                const parts: string[] = []
                if (hidden > 0) parts.push(`${hidden} more issue${hidden > 1 ? 's' : ''}`)
                if (good > 0) parts.push(`${good} thing${good > 1 ? 's' : ''} already working in your favour`)
                return parts.length > 0
                  ? `Your full 16-point report includes ${parts.join(' and ')} — plus a simple action plan to fix every issue quickly.`
                  : 'Get your full 16-point report with a simple action plan to fix every issue quickly.'
              })()}
            </p>

            <div className="email-cta">
              <svg className="cta-bolt-l" viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
              <svg className="cta-bolt-r" viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
              <div className="email-cta-inner">
                <h3>Get Your Full 16-Point Report + Action Plan</h3>
                <p>
                  We&apos;ll email you the complete 16-point breakdown and a simple step-by-step action plan
                  so you can fix every issue quickly — plain English, no jargon.
                </p>
                <div className="email-row" style={{ marginBottom: 8 }}>
                  <input
                    type="text"
                    className="email-field"
                    placeholder="Your name"
                    value={nameValue}
                    onChange={e => setNameValue(e.target.value)}
                  />
                </div>
                <div className="email-row">
                  <input
                    type="email"
                    className="email-field"
                    placeholder="your@email.com"
                    value={emailValue}
                    onChange={e => setEmailValue(e.target.value)}
                    style={emailErr ? { borderColor: 'rgba(220,38,38,0.6)' } : {}}
                  />
                  <button type="button" className="report-btn" onClick={submitEmail}>
                    Send My Report
                  </button>
                </div>
                <p className="privacy">No spam. One email with your report. Nothing else.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── What We Do ───────────────────────────────── */}
      <section style={{ padding: '80px 24px 0', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#FFD700', marginBottom: '16px',
          }}>
            Local SEO and Lead Generation for UK Small Businesses
          </p>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
            fontWeight: 900, lineHeight: 1.15,
            letterSpacing: '-0.025em', color: '#FFFFFF',
            marginBottom: '18px',
          }}>
            Why most small business websites<br />don&apos;t generate leads. Here is how to fix it.
          </h2>
          <p style={{
            fontSize: '1rem', color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.75, maxWidth: '620px', margin: '0 auto',
            fontFamily: "'Open Sans', sans-serif",
          }}>
            Lead generation for local businesses starts with getting found on Google, then converting that traffic into real enquiries. Most small business websites fail at both. The Catalyst Method fixes both.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {[
            {
              eyebrow: 'Website Lead Generation',
              title: 'Turn your website into a lead machine',
              body: 'Website lead generation for small businesses means your site works around the clock. Every page should pull in local visitors from Google and give them a clear reason to get in touch. Most small business websites do neither. Ours are built to do both.',
            },
            {
              eyebrow: 'Local SEO',
              title: 'Rank where your customers are searching',
              body: 'Local SEO for small businesses gets you in front of people actively searching for your service in your area. The Google Map Pack, local organic results, and AI Overviews. Not generic national traffic that never converts into real enquiries.',
            },
            {
              eyebrow: 'Done For You SEO',
              title: 'A complete system, fully managed',
              body: 'Done for you SEO for UK businesses means you get the strategy, the content, the technical fixes, and the monthly reporting, without needing to understand any of it yourself. You run your business. The leads come to you.',
            },
          ].map(({ eyebrow, title, body }) => (
            <div key={title} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '14px',
              padding: '28px',
            }}>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '10px', fontWeight: 700,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: '#FFD700', marginBottom: '12px',
              }}>{eyebrow}</p>
              <h3 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '1.08rem', fontWeight: 800,
                color: '#FFFFFF', marginBottom: '12px', lineHeight: 1.35,
              }}>{title}</h3>
              <p style={{
                fontSize: '0.92rem', color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.75, fontFamily: "'Open Sans', sans-serif",
              }}>{body}</p>
            </div>
          ))}
        </div>

        <div style={{
          display: 'flex', gap: '14px', justifyContent: 'center',
          flexWrap: 'wrap', marginTop: '48px',
        }}>
          <a href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#FFD700', color: '#002B45',
            fontFamily: "'Montserrat', sans-serif", fontWeight: 800,
            fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase',
            padding: '14px 28px', borderRadius: '8px', textDecoration: 'none',
          }}>
            <svg width="9" viewBox="0 0 18 30" fill="currentColor"><path d={BOLT} /></svg>
            Get My Free Audit
          </a>
          <a href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.18)',
            color: 'rgba(255,255,255,0.65)',
            fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
            fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase',
            padding: '14px 28px', borderRadius: '8px', textDecoration: 'none',
          }}>
            Ask My Question
          </a>
        </div>
      </section>

      {/* ── Blog Posts ───────────────────────────────── */}
      <section style={{ padding: '72px 24px 0', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: '32px',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <div>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#FFD700', marginBottom: '10px',
            }}>From the blog</p>
            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(1.2rem, 2.8vw, 1.7rem)',
              fontWeight: 900, lineHeight: 1.2,
              letterSpacing: '-0.02em', color: '#FFFFFF',
            }}>Practical local SEO guides for UK small businesses</h2>
          </div>
          <a href="/blog" style={{
            color: 'rgba(255,215,0,0.65)',
            fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
            fontSize: '0.78rem', letterSpacing: '0.05em', textTransform: 'uppercase',
            textDecoration: 'none', whiteSpace: 'nowrap',
          }}>View all posts →</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {[
            {
              slug: 'google-business-profile-optimisation-uk',
              category: 'Local SEO',
              title: 'How to Optimise Your Google Business Profile: The 2026 Guide for UK Small Businesses',
              desc: 'The 7 steps that move you up the Map Pack and win more local enquiries, including how to get Google reviews without breaking the rules.',
              time: '9 min read',
            },
            {
              slug: 'why-website-not-getting-enquiries',
              category: 'Lead Generation',
              title: '7 Reasons Your Website Is Not Getting Enquiries (And Exactly How to Fix Each One)',
              desc: 'The 7 most common reasons UK small business websites fail to convert visitors, with a specific fix for each one.',
              time: '9 min read',
            },
            {
              slug: 'local-seo-checklist-small-business-uk',
              category: 'Local SEO',
              title: 'The Local SEO Checklist for UK Small Businesses: 12 Checks That Actually Move the Needle',
              desc: 'Work through these 12 checks once and repeat the monthly ones to consistently outrank local competitors on Google.',
              time: '10 min read',
            },
          ].map(({ slug, category, title, desc, time }) => (
            <a key={slug} href={`/blog/${slug}`} style={{ textDecoration: 'none', display: 'flex' }}>
              <div style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '14px',
                padding: '24px',
                display: 'flex', flexDirection: 'column',
                transition: 'border-color 0.15s',
              }}>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '10px', fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: '#FFD700', marginBottom: '10px',
                }}>{category}</p>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.97rem', fontWeight: 800,
                  color: '#FFFFFF', marginBottom: '10px', lineHeight: 1.4,
                }}>{title}</h3>
                <p style={{
                  fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7, fontFamily: "'Open Sans', sans-serif",
                  flex: 1, marginBottom: '16px',
                }}>{desc}</p>
                <p style={{
                  fontSize: '0.75rem', color: 'rgba(255,215,0,0.4)',
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
                }}>{time}</p>
              </div>
            </a>
          ))}
        </div>

        <div style={{
          display: 'flex', gap: '14px', justifyContent: 'center',
          flexWrap: 'wrap', marginTop: '48px', paddingBottom: '96px',
        }}>
          <a href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#FFD700', color: '#002B45',
            fontFamily: "'Montserrat', sans-serif", fontWeight: 800,
            fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase',
            padding: '14px 28px', borderRadius: '8px', textDecoration: 'none',
          }}>
            <svg width="9" viewBox="0 0 18 30" fill="currentColor"><path d={BOLT} /></svg>
            Get My Free Audit
          </a>
          <a href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.18)',
            color: 'rgba(255,255,255,0.65)',
            fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
            fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase',
            padding: '14px 28px', borderRadius: '8px', textDecoration: 'none',
          }}>
            Ask My Question
          </a>
        </div>
      </section>
    </>
  )
}

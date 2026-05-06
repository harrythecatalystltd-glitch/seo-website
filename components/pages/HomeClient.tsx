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

const FIX_COPY: Record<string, string> = {
  page_speed: 'Use Google PageSpeed Insights (free) to find what is slowing your site. The most common fixes are compressing large images, removing unused plugins, and upgrading to faster hosting.',
  mobile_friendly: 'Your site needs a mobile-responsive design. If you use WordPress, switch to a modern responsive theme. Otherwise ask your web developer to fix the layout for small screens.',
  https: 'Contact your hosting provider and ask them to install a free SSL certificate. Most hosts include this — it just needs switching on. Your address should start with https://, not http://.',
  title_tag: 'Log into your website CMS and find the page SEO settings. Write a title of 50–65 characters that includes your main service and town — for example: "Emergency Plumber in Leeds | ABC Plumbing".',
  meta_description: 'In your CMS under SEO settings, write a 2-sentence description (100–160 characters) that says what you do, where you are, and why someone should click. Think of it as a free advert in Google.',
  h1_tag: 'Add one clear headline to the top of your page that describes what you do and who you help — for example: "Trusted Electricians Across South London". Every page should have exactly one.',
  schema: 'Install a free SEO plugin on your website (Yoast SEO or Rank Math for WordPress). Fill in your business name, address, and phone in the local business settings. This helps Google link your site to your map listing.',
  image_alt: 'For every image on your site, add a short description of what the photo shows. In WordPress this is the "Alt Text" box when editing an image — for example: "Team fitting a new boiler in a Manchester home".',
  tap_to_call: 'Ask your web developer to wrap your phone number in a tap-to-call link. This lets mobile visitors call you in one tap instead of copying and pasting your number.',
  phone_above_fold: 'Move your phone number to the very top of your page — ideally inside the header bar. Visitors should see it without scrolling, on both desktop and mobile.',
  cta_button: 'Add a clearly labelled button near the top of your page — "Get a Free Quote", "Book Now", or "Call Us Today". Use a contrasting colour so it stands out and make it one clear action.',
  contact_form: 'Add a simple contact form with fields for name, email, phone, and message. Most website builders have this built in — enable it and make sure submissions reach your inbox.',
  nap: 'Add your full business address to your website footer. Make sure it matches your Google Business Profile exactly — same format, same postcode. Inconsistency hurts your local rankings.',
  social_proof: 'Copy 2–3 of your best Google reviews onto your homepage with the customer\'s first name and star rating. If you have no Google reviews yet, ask your last five happy customers first.',
  lead_magnet: 'Add a simple email capture to your page — a free checklist, short guide, or tip sheet in exchange for an email address. Use a free tool like Mailchimp to collect and follow up with the list.',
  problem_solution: 'Rewrite your main headline to name the outcome you deliver rather than your company name — for example: "We Help Birmingham Homeowners Stay Warm for Less" tells a visitor immediately if you can help.',
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
    const stored = parseInt(localStorage.getItem(COUNTER_KEY) || '', 10)
    if (!isNaN(stored)) setAuditCount(stored)
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

            <h1>Free Lead Generation Audit<br />for UK <em>Local Businesses</em></h1>
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

            {scanResult.critical.length > 0 && (
              <div className="findings-group">
                <div className="section-divider">
                  <div className="section-divider-line" />
                  <div className="section-divider-label">
                    <span className="section-divider-dot" style={{ background: 'var(--critical)' }} />
                    Critical — Fix Immediately
                  </div>
                  <div className="section-divider-line" />
                </div>
                {scanResult.critical.map(c => (
                  <div key={c.id} className={`finding-card ${c.severity}`}>
                    <div className="card-body">
                      <div className="card-title">{c.title}</div>
                      <div className="card-impact">{c.impact}</div>
                    </div>
                    <span className={`card-badge ${c.severity}`}>{c.severity}</span>
                  </div>
                ))}
              </div>
            )}

            {scanResult.urgent.slice(0, 2).length > 0 && (
              <div className="findings-group">
                <div className="section-divider">
                  <div className="section-divider-line" />
                  <div className="section-divider-label">
                    <span className="section-divider-dot" style={{ background: 'var(--urgent)' }} />
                    Urgent — Address Soon
                  </div>
                  <div className="section-divider-line" />
                </div>
                {scanResult.urgent.slice(0, 2).map(c => (
                  <div key={c.id} className={`finding-card ${c.severity}`}>
                    <div className="card-body">
                      <div className="card-title">{c.title}</div>
                      <div className="card-impact">{c.impact}</div>
                    </div>
                    <span className={`card-badge ${c.severity}`}>{c.severity}</span>
                  </div>
                ))}
              </div>
            )}

            <p className="more-hint">
              {(() => {
                const hidden = Math.max(0, scanResult.urgent.length - 2)
                const good = scanResult.good.length
                const parts: string[] = []
                if (hidden > 0) parts.push(`${hidden} more urgent issue${hidden > 1 ? 's' : ''}`)
                if (good > 0) parts.push(`${good} thing${good > 1 ? 's' : ''} already working in your favour`)
                return parts.length > 0
                  ? `Your full report includes ${parts.join(' and ')} — plus exactly how to fix every issue.`
                  : 'Get your full report for the complete breakdown with fixes for every issue.'
              })()}
            </p>

            {scanResult.critical.length > 0 && (
              <div style={{
                background: 'rgba(0,0,0,0.25)',
                border: '1.5px solid rgba(255,215,0,0.2)',
                borderRadius: '14px',
                padding: '28px 28px 24px',
                marginBottom: '24px',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20,
                }}>
                  <div style={{
                    background: 'rgba(255,215,0,0.12)',
                    border: '1px solid rgba(255,215,0,0.28)',
                    borderRadius: '8px',
                    padding: '5px 12px',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.68rem', fontWeight: 800,
                    letterSpacing: '0.1em', textTransform: 'uppercase' as const,
                    color: '#FFD700',
                  }}>
                    Your Action Plan
                  </div>
                  <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>
                    How to fix your critical issues
                  </span>
                </div>
                <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 14 }}>
                  {scanResult.critical.map((c, i) => (
                    <li key={c.id} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <span style={{
                        flexShrink: 0,
                        width: 26, height: 26,
                        borderRadius: '50%',
                        background: 'rgba(220,38,38,0.2)',
                        border: '1.5px solid rgba(220,38,38,0.45)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '0.7rem', fontWeight: 800,
                        color: '#F87171',
                      }}>
                        {i + 1}
                      </span>
                      <div>
                        <div style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: '0.8rem', fontWeight: 800,
                          color: '#fff', marginBottom: 4,
                          letterSpacing: '-0.01em',
                        }}>
                          {c.title}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.7 }}>
                          {FIX_COPY[c.id] ?? 'Contact your web developer to address this issue.'}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <div className="email-cta">
              <svg className="cta-bolt-l" viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
              <svg className="cta-bolt-r" viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
              <div className="email-cta-inner">
                <h3>Get Your Full {scanResult.checks.length}-Point Report</h3>
                <p>
                  We&apos;ll send the complete breakdown to your inbox — every issue in plain English,
                  what it means for your business, and how to fix it.
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
    </>
  )
}

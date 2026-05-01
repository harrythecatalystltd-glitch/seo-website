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
}

export default function HomeClient() {
  const [heroState, setHeroState] = useState<'input' | 'scanning' | 'error'>('input')
  const [urlValue, setUrlValue] = useState('')
  const [scanResult, setScanResult] = useState<ScanResult | null>(null)
  const [scanningStatus, setScanningStatus] = useState(SCAN_STATUSES[0])
  const [errorMsg, setErrorMsg] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [emailErr, setEmailErr] = useState(false)
  const [displayScore, setDisplayScore] = useState(0)
  const arcRef = useRef<SVGCircleElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

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
    // Fire-and-forget — don't await so the redirect is instant
    fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        score: scanResult?.score,
        domain: scanResult?.domain,
        band: scanResult?.band?.label,
      }),
    }).catch(() => {})
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

            <div className="email-cta">
              <svg className="cta-bolt-l" viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
              <svg className="cta-bolt-r" viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
              <div className="email-cta-inner">
                <h3>Get Your Full {scanResult.checks.length}-Point Report</h3>
                <p>
                  We&apos;ll send the complete breakdown to your inbox — every issue in plain English,
                  what it means for your business, and how to fix it.
                </p>
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

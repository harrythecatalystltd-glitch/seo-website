'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

type Check = {
  id: string; category: string; title: string; what: string; impact: string;
  severity: 'critical' | 'urgent' | 'good';
}

type ScanData = {
  score: number; domain: string;
  band: { label: string; message: string };
  checks: Check[]; critical: Check[]; urgent: Check[]; good: Check[];
  scannedAt?: string; email?: string;
}

type SectionState = { [key: string]: boolean }

function AccordionSection({ items, severity, icon, title, desc, startOpen }: {
  items: Check[]; severity: 'critical' | 'urgent' | 'good';
  icon: string; title: string; desc: string; startOpen: boolean;
}) {
  const [open, setOpen] = useState(startOpen)
  const bodyRef = useRef<HTMLDivElement>(null)

  const seoItems = items.filter(c => c.category === 'SEO')
  const lgItems  = items.filter(c => c.category === 'Lead Gen')
  const mixed    = seoItems.length > 0 && lgItems.length > 0

  return (
    <div className="findings-section">
      <button
        type="button"
        className={`section-trigger ${severity}${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        <div className={`section-trigger-icon ${severity}`}>{icon}</div>
        <div className="section-trigger-text">
          <div className="section-trigger-title">{title}</div>
          <div className="section-trigger-desc">{desc}</div>
        </div>
        <span className={`section-trigger-count ${severity}`}>{items.length} item{items.length !== 1 ? 's' : ''}</span>
        <span className="section-trigger-chevron">▼</span>
      </button>
      <div
        className="section-acc-body"
        style={{ maxHeight: open ? '9999px' : '0px', transition: open ? 'max-height 0.45s ease' : 'max-height 0.3s ease' }}
      >
        <div className="section-acc-body-inner">
          {mixed ? (
            <>
              <CategoryBlock items={seoItems} severity={severity} label="SEO & Visibility" />
              <CategoryBlock items={lgItems} severity={severity} label="Lead Generation & Conversion" />
            </>
          ) : (
            items.map(c => <FindingRow key={c.id} check={c} severity={severity} />)
          )}
        </div>
      </div>
    </div>
  )
}

function CategoryBlock({ items, severity, label }: { items: Check[]; severity: string; label: string }) {
  return (
    <>
      <div className="category-divider">
        <span className="category-divider-label">{label}</span>
        <div className="category-divider-line" />
      </div>
      {items.map(c => <FindingRow key={c.id} check={c} severity={c.severity} />)}
    </>
  )
}

function FindingRow({ check, severity }: { check: Check; severity: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`finding-row ${severity}${open ? ' open' : ''}`}>
      <button
        type="button"
        className="finding-row-trigger"
        onClick={() => setOpen(o => !o)}
      >
        <span className="finding-category-tag">{check.category}</span>
        <span className="finding-row-title">{check.title}</span>
        <span className={`finding-row-badge ${severity}`}>{severity}</span>
        <span className="finding-row-chevron">▼</span>
      </button>
      <div
        className="finding-detail-acc"
        style={{ maxHeight: open ? '600px' : '0px', transition: open ? 'max-height 0.32s ease' : 'max-height 0.2s ease' }}
      >
        <div className="finding-row-body">
          <div>
            <div className="finding-field-label">What we found</div>
            <div className="finding-field-value">{check.what}</div>
          </div>
          <div>
            <div className="finding-field-label">What it means for your business</div>
            <div className="finding-field-value">{check.impact}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ThankyouClient() {
  const [data, setData] = useState<ScanData | null>(null)
  const [noData, setNoData] = useState(false)
  const [email, setEmail] = useState('')
  const [displayScore, setDisplayScore] = useState(0)
  const arcRef = useRef<SVGCircleElement>(null)

  // URL params
  const [urlScore, setUrlScore] = useState(0)
  const [urlDomain, setUrlDomain] = useState('')
  const [urlBand, setUrlBand] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const pEmail  = params.get('email') || ''
    const pScore  = parseInt(params.get('score') || '0', 10)
    const pDomain = params.get('domain') || ''
    const pBand   = params.get('band') || ''
    setEmail(pEmail)
    setUrlScore(pScore)
    setUrlDomain(pDomain)
    setUrlBand(pBand)

    let stored: ScanData | null = null
    try { stored = JSON.parse(sessionStorage.getItem('scanData') || 'null') } catch {}

    if (!stored && !pScore) {
      setNoData(true)
    } else {
      setData(stored)
    }
  }, [])

  const score  = data?.score  ?? urlScore
  const domain = data?.domain ?? urlDomain
  const band   = data?.band   ?? { label: urlBand, message: '' }

  useEffect(() => {
    if (!arcRef.current || score === 0) return
    const color = score >= 65 ? '#6EE7B7' : score >= 40 ? '#FCD34D' : '#F87171'
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
  }, [score])

  if (noData) {
    return (
      <div className="page" style={{ paddingTop: '80px' }}>
        <div className="no-data">
          <h2>No report data found</h2>
          <p>It looks like you arrived here directly. Run a free scan first.</p>
          <Link href="/">← Scan my website</Link>
        </div>
      </div>
    )
  }

  if (!data && score === 0) return null

  const critical = data?.critical ?? []
  const urgent   = data?.urgent   ?? []
  const good     = data?.good     ?? []
  const checks   = data?.checks   ?? []
  const scannedAt = data?.scannedAt ? new Date(data.scannedAt) : new Date()
  const scoreColor = score >= 65 ? '#6EE7B7' : score >= 40 ? '#FCD34D' : '#F87171'

  return (
    <>
      {email && (
        <div className="confirm-banner">
          <svg viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
          Your full report is on its way to <strong>{email}</strong>
        </div>
      )}

      <div className="page">
        <div className="report-header">
          <SiteNav />
          <div className="bolts-bg" aria-hidden="true">
            {[1,2,3,4,5,6,7].map(n => (
              <svg key={n} className={`bolt b${n}`} viewBox="0 0 18 30">
                <path fill="currentColor" d={BOLT} />
              </svg>
            ))}
          </div>

          <div className="report-header-inner">
            <div className="report-eyebrow">
              <svg viewBox="0 0 18 30"><path d={BOLT} /></svg>
              Website Audit Report | The Catalyst Method
            </div>
            <div className="report-domain">{domain}</div>
            <div className="report-date">
              Scanned {scannedAt.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>

            <div className="score-row">
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
              <div className="score-meta">
                <div className="score-meta-label" style={{ color: scoreColor }}>{band.label}</div>
                <div className="score-meta-msg">{band.message}</div>
              </div>
            </div>

            <div className="stats-row">
              <div className="stat"><div className="stat-num critical">{critical.length}</div><div className="stat-label">Critical</div></div>
              <div className="stat"><div className="stat-num urgent">{urgent.length}</div><div className="stat-label">Urgent</div></div>
              <div className="stat"><div className="stat-num good">{good.length}</div><div className="stat-label">Passing</div></div>
              <div className="stat"><div className="stat-num accent">{checks.length}</div><div className="stat-label">Checks</div></div>
            </div>
          </div>
        </div>

        <div id="rpt-findings">
          {critical.length > 0 && (
            <AccordionSection items={critical} severity="critical" icon="✕" title="Fix Immediately" desc="These issues are actively costing you customers and rankings right now." startOpen={true} />
          )}
          {urgent.length > 0 && (
            <AccordionSection items={urgent} severity="urgent" icon="!" title="Address Soon" desc="These gaps are hurting your results — fix them after the critical issues." startOpen={false} />
          )}
          {good.length > 0 && (
            <AccordionSection items={good} severity="good" icon="✓" title="Already Working" desc="These elements are in good shape — keep them and build on them." startOpen={false} />
          )}
        </div>

        <div className="cta-block">
          <svg className="cta-bolt-l" viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
          <svg className="cta-bolt-r" viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
          <div className="cta-block-inner">
            <h2>These issues are fixable — and they&apos;re costing you customers right now</h2>
            <p>
              Every day these problems go unaddressed is another day competitors are winning the
              enquiries that should be coming to you. See exactly how we fix it.
            </p>
            <Link href="/signup" className="cta-btn">
              <svg viewBox="0 0 18 30"><path d={BOLT} /></svg>
              See Our Growth Plans
            </Link>
            <p className="cta-reassurance">No calls needed. Pick your plan and get started today.</p>
          </div>
        </div>
      </div>
    </>
  )
}

'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

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

// Commercial reframes — one line each
const REVENUE_IMPACT: Record<string, string> = {
  page_speed:         'Slow pages lose 5 to 8 leads a month. Most visitors leave before the page loads.',
  mobile_friendly:    'Over half of all local searches happen on phones. A site that breaks on mobile loses those enquiries.',
  https:              'The "Not Secure" warning sends visitors straight back to Google. Competitors with HTTPS win those leads.',
  title_tag:          "Without a proper title tag Google doesn't know what you offer. You're invisible for searches your customers are making.",
  meta_description:   "No meta description means no compelling reason to click your result. Fewer clicks = fewer leads.",
  h1_tag:             "Without a clear headline Google can't rank you for the right searches. You're missing customers who are actively looking.",
  schema:             'No structured data means no rich results in Google Maps. Competitors with schema show up first.',
  image_alt:          "Untagged images are invisible to search engines. You're missing ranking opportunities your competitors are capturing.",
  tap_to_call:        "If a mobile visitor can't tap to call, most won't. They'll find a competitor who makes it easy.",
  phone_above_fold:   'A phone number buried below the fold means most visitors leave without ever contacting you.',
  cta_button:         'No clear call to action = no next step = visitors leave. You could be losing 6 to 10 leads a month to this alone.',
  contact_form:       'Without a form, anyone who visits outside business hours has no way to enquire. Those leads go elsewhere.',
  nap:                'Inconsistent business details confuse Google. You rank lower in local results than competitors with consistent listings.',
  social_proof:       '90% of people check reviews before choosing a local business. No visible proof loses those decisions.',
  lead_magnet:        "Only 3% of visitors are ready to buy today. Without a way to capture the rest, they leave and never come back.",
  problem_solution:   "A vague headline sends visitors back to Google in under 5 seconds. You're spending money to attract people who immediately leave.",
}

function IssueGroup({ items, severity, icon, title, desc, startOpen }: {
  items: Check[]; severity: 'critical' | 'urgent' | 'good';
  icon: string; title: string; desc: string; startOpen: boolean;
}) {
  const [open, setOpen] = useState(startOpen)

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
        <span className={`section-trigger-count ${severity}`}>{items.length} issue{items.length !== 1 ? 's' : ''}</span>
        <span className="section-trigger-chevron">▼</span>
      </button>
      <div
        className="section-acc-body"
        style={{ maxHeight: open ? '9999px' : '0px', transition: open ? 'max-height 0.45s ease' : 'max-height 0.3s ease' }}
      >
        <div className="section-acc-body-inner">
          {items.map(c => (
            <div key={c.id} className={`finding-row ${c.severity}`} style={{ cursor: 'default' }}>
              <div style={{ padding: '14px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 7 }}>
                  <span className={`finding-row-badge ${c.severity}`}>{c.severity}</span>
                  <span className="finding-row-title">{c.title}</span>
                </div>
                <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.65, margin: 0 }}>
                  {REVENUE_IMPACT[c.id] || c.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 16, padding: '20px 0', background: 'transparent', border: 'none',
          cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '0.95rem', color: '#fff', letterSpacing: '-0.01em' }}>{q}</span>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', flexShrink: 0, display: 'inline-block', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease' }}>▼</span>
      </button>
      <div style={{ maxHeight: open ? '400px' : '0px', overflow: 'hidden', transition: open ? 'max-height 0.35s ease' : 'max-height 0.25s ease' }}>
        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.78, paddingBottom: 20, margin: 0 }}>{a}</p>
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
  const [urlScore, setUrlScore] = useState(0)
  const [urlDomain, setUrlDomain] = useState('')
  const [urlBand, setUrlBand] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setEmail(params.get('email') || '')
    setUrlScore(parseInt(params.get('score') || '0', 10))
    setUrlDomain(params.get('domain') || '')
    setUrlBand(params.get('band') || '')
    let stored: ScanData | null = null
    try { stored = JSON.parse(sessionStorage.getItem('scanData') || 'null') } catch {}
    if (!stored && !parseInt(params.get('score') || '0', 10)) {
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
    const color = score >= 71 ? '#6EE7B7' : score >= 41 ? '#FCD34D' : '#F87171'
    const arc = arcRef.current
    arc.style.stroke = color
    arc.style.filter = `drop-shadow(0 0 12px ${color})`
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
      <div className="page" style={{ paddingTop: 80 }}>
        <div className="no-data">
          <h2>No report data found</h2>
          <p>It looks like you arrived here directly. Run a free scan first.</p>
          <Link href="/">← Scan my website</Link>
        </div>
      </div>
    )
  }

  if (!data && score === 0) return null

  const critical   = data?.critical ?? []
  const urgent     = data?.urgent   ?? []
  const good       = data?.good     ?? []
  const scoreColor = score >= 71 ? '#6EE7B7' : score >= 41 ? '#FCD34D' : '#F87171'
  const scoreStatus = score >= 71 ? 'strong' : score >= 41 ? 'average' : 'underperforming'

  return (
    <>
      {/* Confirmation banner */}
      {email && (
        <div className="confirm-banner">
          <svg viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
          Your full report is on its way to <strong>{email}</strong>
        </div>
      )}

      {/* ── BRIDGE + SCORE HERO ── */}
      <div style={{
        background: 'var(--navy)',
        backgroundImage: 'radial-gradient(ellipse at 50% -10%, #005585 0%, #002B45 65%)',
        position: 'relative', overflow: 'hidden',
        padding: '72px 24px 64px', textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', width: 600, height: 400, top: -160, left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(ellipse, rgba(0,100,160,0.4) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 640, margin: '0 auto' }}>
          <div className="report-eyebrow" style={{ marginBottom: 28 }}>
            <svg viewBox="0 0 18 30"><path d={BOLT} /></svg>
            Website Audit | The Catalyst Method
          </div>

          <h1 style={{ fontSize: 'clamp(1.7rem, 4vw, 2.5rem)', marginBottom: 16, letterSpacing: '-0.03em', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            Here&apos;s what we found on <em>{domain}.</em>
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.58)', marginBottom: 52, lineHeight: 1.7, maxWidth: 440, marginLeft: 'auto', marginRight: 'auto' }}>
            Your site is scoring {score} out of 100. Here&apos;s what that means for your leads.
          </p>

          {/* Score ring */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 36 }}>
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: 20 }}>
              <svg style={{ width: 180, height: 180, transform: 'rotate(-90deg)' }} viewBox="0 0 120 120">
                <circle fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={9} cx="60" cy="60" r="54" />
                <circle
                  ref={arcRef} fill="none" strokeWidth={9} strokeLinecap="round"
                  strokeDasharray="339.292" strokeDashoffset="339.292"
                  cx="60" cy="60" r="54"
                  style={{ transition: 'stroke-dashoffset 1.8s cubic-bezier(0.22,1,0.36,1), stroke 0.4s' }}
                />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: "'Montserrat', sans-serif", fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1 }}>
                <div style={{ fontSize: '3.4rem', color: scoreColor }}>{displayScore}</div>
                <span style={{ fontSize: '0.82rem', fontWeight: 500, color: 'rgba(255,255,255,0.45)', letterSpacing: 0, fontFamily: "'Open Sans', sans-serif" }}>/100</span>
              </div>
            </div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.1rem', fontWeight: 900, color: scoreColor, marginBottom: 8, letterSpacing: '-0.02em' }}>
              {band.label}
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.52)', maxWidth: 380, margin: '0 auto' }}>
              Your site is{' '}
              <strong style={{ color: scoreColor }}>{scoreStatus}</strong>
              {' '}vs local competitors in your area.
            </p>
          </div>

          {/* Stats strip */}
          <div style={{ display: 'flex', justifyContent: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 28 }}>
            <div className="stat"><div className="stat-num critical">{critical.length}</div><div className="stat-label">Critical issues</div></div>
            <div className="stat"><div className="stat-num urgent">{urgent.length}</div><div className="stat-label">Urgent issues</div></div>
            <div className="stat"><div className="stat-num good">{good.length}</div><div className="stat-label">Passing</div></div>
          </div>
        </div>
      </div>

      {/* ── ISSUES ── */}
      <div className="page" style={{ paddingTop: 48, paddingBottom: 0 }}>
        {critical.length > 0 && (
          <IssueGroup items={critical} severity="critical" icon="✕"
            title="Fix Immediately"
            desc="These issues are actively costing you customers and rankings right now."
            startOpen={true}
          />
        )}
        {urgent.length > 0 && (
          <IssueGroup items={urgent} severity="urgent" icon="!"
            title="Address Soon"
            desc="These gaps are hurting your results. Fix them after the critical issues."
            startOpen={false}
          />
        )}
        {good.length > 0 && (
          <IssueGroup items={good} severity="good" icon="✓"
            title="Already Working"
            desc="These elements are in good shape — keep them and build on them."
            startOpen={false}
          />
        )}

        {/* Pattern interrupt */}
        <div style={{ margin: '32px 0 48px', padding: '24px 28px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderLeft: '4px solid rgba(255,215,0,0.45)', borderRadius: '0 12px 12px 0' }}>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
            90% of local business websites have these same problems. They were built to look good, not rank. The result is a site that costs you money every month it stays broken.
          </p>
        </div>

        {/* Case studies */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: 14 }}>See it in action</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <a href="/case-study-creation-coffee.html" style={{ display: 'block', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, padding: '22px 20px', textDecoration: 'none', transition: 'border-color 0.2s' }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FFD700', marginBottom: 8 }}>Case Study</div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '0.95rem', color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>Creation Coffee</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, marginBottom: 12 }}>+297% traffic in 90 days. Zero paid ads.</div>
              <span style={{ fontSize: '0.78rem', color: '#FFD700', fontWeight: 700 }}>Read the story →</span>
            </a>
            <a href="/case-study-fitness-coach-chronicle.html" style={{ display: 'block', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, padding: '22px 20px', textDecoration: 'none', transition: 'border-color 0.2s' }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FFD700', marginBottom: 8 }}>Case Study</div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '0.95rem', color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>Fitness Coach</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, marginBottom: 12 }}>From invisible to fully booked with organic search.</div>
              <span style={{ fontSize: '0.78rem', color: '#FFD700', fontWeight: 700 }}>Read the story →</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── THE OFFER ── */}
      <div style={{ padding: '16px 24px 60px', maxWidth: 680, margin: '0 auto' }}>

        {/* Guarantee first */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(110,231,183,0.08)', border: '1px solid rgba(110,231,183,0.22)', borderRadius: 100, padding: '9px 20px', marginBottom: 20 }}>
            <svg width="12" viewBox="0 0 18 30" style={{ fill: '#6EE7B7', flexShrink: 0 }}><path d={BOLT} /></svg>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.75rem', fontWeight: 800, color: '#6EE7B7', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Guarantee</span>
          </div>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.3, maxWidth: 460, margin: '0 auto 8px' }}>
            New leads within 4 weeks or your money back.
          </p>
          <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.4)' }}>No conditions. No questions. Full refund if we don&apos;t deliver.</p>
        </div>

        {/* Plan card */}
        <div style={{ background: 'rgba(255,215,0,0.06)', border: '1.5px solid rgba(255,215,0,0.32)', borderRadius: 20, padding: '40px 36px', position: 'relative', overflow: 'hidden' }}>
          <svg style={{ position: 'absolute', fill: '#FFD700', opacity: 0.055, width: 84, height: 140, top: -18, left: 22, transform: 'rotate(-18deg)', pointerEvents: 'none' }} viewBox="0 0 18 30"><path d={BOLT} /></svg>
          <svg style={{ position: 'absolute', fill: '#FFD700', opacity: 0.055, width: 56, height: 93, bottom: -12, right: 26, transform: 'rotate(13deg)', pointerEvents: 'none' }} viewBox="0 0 18 30"><path d={BOLT} /></svg>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFD700', marginBottom: 6 }}>Done For You SEO</div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.025em', marginBottom: 6 }}>We fix it for you.</div>
            <div style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)', marginBottom: 28, lineHeight: 1.6 }}>Everything identified in your audit. Handled. No calls, no stress, no learning curve.</div>

            <div style={{ marginBottom: 28 }}>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '2.8rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>£500</span>
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginLeft: 6 }}>/month</span>
            </div>

            <div style={{ height: 1, background: 'rgba(255,215,0,0.18)', marginBottom: 24 }} />

            <ul style={{ listStyle: 'none', marginBottom: 32, padding: 0 }}>
              {[
                'We take over your Google Business profile and get you showing up in local map results',
                'Every issue in your audit gets fixed. Technical, content, and conversion.',
                'We write content that ranks for the searches your customers are actually making',
                'Monthly plain English report: your rankings, traffic, and enquiries',
                'Your site gets optimised to turn more of your existing visitors into leads',
              ].map((f, i, arr) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 0', fontSize: '0.88rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.5, borderBottom: i < arr.length - 1 ? '1px solid rgba(255,215,0,0.1)' : 'none' }}>
                  <span style={{ flexShrink: 0, width: 18, height: 18, borderRadius: '50%', background: 'rgba(255,215,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                    <svg width="8" height="8" fill="none" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div style={{ background: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.22)', borderRadius: 12, padding: '20px 22px', marginBottom: 28 }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FFD700', marginBottom: 14 }}>3 Free Bonuses Included</div>
              {[
                'Brand new 200 page website built for you',
                'Lead magnet built for your business',
                'CRM with email automation set up and ready',
              ].map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 0', fontSize: '0.86rem', color: '#fff', fontWeight: 700, lineHeight: 1.5, borderBottom: i < 2 ? '1px solid rgba(255,215,0,0.12)' : 'none' }}>
                  <svg width="14" height="14" fill="none" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 12 12" style={{ flexShrink: 0, marginTop: 2 }}>
                    <polyline points="2,6 5,9 10,3" />
                  </svg>
                  {b}
                </div>
              ))}
            </div>

            <Link
              href="https://buy.stripe.com/00w9AW1rAfWIamy7cF5wI00"
              style={{ display: 'block', textAlign: 'center', background: '#FFD700', color: '#002B45', borderRadius: 12, padding: '18px 24px', fontFamily: "'Montserrat', sans-serif", fontSize: '1.05rem', fontWeight: 900, textDecoration: 'none', letterSpacing: '0.01em', boxShadow: '0 6px 28px rgba(255,215,0,0.42)' }}
            >
              Fix this for me
            </Link>
            <p style={{ textAlign: 'center', fontSize: '0.77rem', color: 'rgba(255,255,255,0.32)', marginTop: 12, marginBottom: 10 }}>
              Not ready to hand it over? See below.
            </p>
            <div style={{ textAlign: 'center' }}>
              <Link href="/signup" style={{ fontSize: '0.78rem', color: 'rgba(255,215,0,0.55)', textDecoration: 'none', fontWeight: 700 }}>
                See all plans →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── DOWNSELL ── */}
      <div style={{ padding: '0 24px 64px', maxWidth: 680, margin: '0 auto' }}>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: '36px 32px' }}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: 12 }}>Rather do it yourself?</div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', marginBottom: 12 }}>
            Here&apos;s every tool we use, packaged for you.
          </div>
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.52)', lineHeight: 1.78, marginBottom: 24 }}>
            Want to fix it yourself first? Here&apos;s every tool we use internally, packaged so you can run them yourself. Same system, your hands. £97 one time, keep forever.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 28 }}>
            {['Marketing Pack', 'Sales Pack', 'Business Growth Pack', 'Personal Assistant Pack'].map(p => (
              <div key={p} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '12px 14px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.72)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="9" fill="#FFD700" style={{ flexShrink: 0 }} viewBox="0 0 18 30"><path d={BOLT} /></svg>
                {p}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Link
              href="/contact?ref=toolkit"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.09)', border: '1.5px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: 10, padding: '13px 22px', fontFamily: "'Montserrat', sans-serif", fontSize: '0.9rem', fontWeight: 800, textDecoration: 'none', letterSpacing: '0.01em' }}
            >
              Get the toolkit £97
            </Link>
            <span style={{ fontSize: '0.77rem', color: 'rgba(255,255,255,0.28)' }}>One time. Keep forever.</span>
          </div>
        </div>
      </div>

      {/* ── SOCIAL PROOF ── */}
      <div style={{ padding: '0 24px 64px', maxWidth: 680, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: 10 }}>Real results</div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.05rem, 2.5vw, 1.4rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.025em', marginBottom: 8 }}>
            What happens when these issues get fixed
          </div>
          <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.42)', maxWidth: 380, margin: '0 auto' }}>
            Creation Coffee, local brand, zero paid ads, 90 days.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', marginBottom: 24 }}>
          {[
            { num: '+297%', label: 'Website traffic' },
            { num: '+277%', label: 'Search impressions' },
            { num: '+293%', label: 'Google clicks' },
            { num: '+240%', label: 'New users' },
          ].map(s => (
            <div key={s.label} style={{ background: 'rgba(0,30,50,0.9)', padding: '28px 20px', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.6rem, 4vw, 2.1rem)', fontWeight: 900, color: '#FFD700', lineHeight: 1, marginBottom: 6 }}>{s.num}</div>
              <div style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.42)', letterSpacing: '0.04em' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Guarantee repeat */}
        <div style={{ textAlign: 'center', padding: '20px 24px', background: 'rgba(110,231,183,0.06)', border: '1px solid rgba(110,231,183,0.18)', borderRadius: 12 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#6EE7B7', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>
            New leads within 4 weeks or your money back. No questions, no conditions.
          </p>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div style={{ padding: '0 24px 80px', maxWidth: 680, margin: '0 auto' }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: 10 }}>Questions</div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.025em' }}>Common questions, straight answers.</div>
        </div>
        <div style={{ border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: '0 28px' }}>
          <FaqItem
            q="How long does it take to see results?"
            a="You'll typically see your first new rankings within 2 to 4 weeks. Most clients report new enquiries within the first month. We build this into our guarantee. New leads within 4 weeks or your money back."
          />
          <FaqItem
            q="Do I need to do anything myself?"
            a="No. Once you're set up you don't need to do anything. We handle everything — your Google profile, your content, your site. You run your business, we handle the growth."
          />
          <FaqItem
            q="What if it doesn't work?"
            a="Then you don't pay. If you haven't received new leads within 4 weeks we'll refund you in full. No questions, no conditions, no awkward conversations. We're confident enough in what we do to put it in writing."
          />
        </div>
      </div>
    </>
  )
}

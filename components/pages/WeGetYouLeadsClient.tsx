'use client'
import { useState } from 'react'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

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

export default function WeGetYouLeadsClient() {
  return (
    <>
      {/* ── SALES HERO ── */}
      <section className="hero hero-blog">
        <SiteNav />
        <div className="bolts-bg" aria-hidden="true">
          {[1,2,3,4,5,6,7].map(n => (
            <svg key={n} className={`bolt b${n}`} viewBox="0 0 18 30">
              <path fill="currentColor" d={BOLT} />
            </svg>
          ))}
        </div>
        <div className="hero-inner">
          <div className="brand-tag">
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            Done For You SEO &amp; Lead Generation
          </div>
          <h1>We Get You <em>More Leads.</em></h1>
          <p className="hero-sub">
            We take over your Google profile, website, content and follow-up so new enquiries land in your inbox. New leads within 4 weeks or your money back.
          </p>
        </div>
      </section>

      {/* ── THE OFFER ── */}
      <div style={{ padding: '48px 24px 60px', maxWidth: 680, margin: '0 auto' }}>

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
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.025em', marginBottom: 6 }}>We get you more leads.</div>
            <div style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)', marginBottom: 28, lineHeight: 1.6 }}>Your Google profile, website, content and follow-up. Handled. No calls, no stress, no learning curve.</div>

            <div style={{ marginBottom: 28 }}>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '2.8rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>£500</span>
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginLeft: 6 }}>/month</span>
            </div>

            <div style={{ height: 1, background: 'rgba(255,215,0,0.18)', marginBottom: 24 }} />

            <ul style={{ listStyle: 'none', marginBottom: 32, padding: 0 }}>
              {[
                'We take over your Google Business profile and get you showing up in local map results',
                'Your whole site optimised. Technical, content, and conversion.',
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
              Get me more leads
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
            Want to run it yourself first? Here&apos;s every tool we use internally, packaged so you can run them yourself. Same system, your hands. £97 one time, keep forever.
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
              href="/the-agency-vault"
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
            What happens when we take it over
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
            a="No. Once you're set up you don't need to do anything. We handle everything: your Google profile, your content, your site. You run your business, we handle the growth."
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

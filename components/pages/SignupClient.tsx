'use client'
import { useState } from 'react'
import SiteNav from '@/components/SiteNav'
import Link from 'next/link'

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'
const CHECK = '1,4 3.5,6.5 9,1'

type Period = 'monthly' | '6month' | '12month'

const PRICING = {
  basic: {
    monthly:  { amount: '£500',   period: '/month',         alts: 'Or <span>£2,500</span> for 6 months · <span>£5,000</span> for 12 months', link: 'https://buy.stripe.com/00w9AW1rAfWIamy7cF5wI00' },
    '6month': { amount: '£2,500', period: ' for 6 months',  alts: 'Equivalent to <span>£417/mo</span> · Save vs monthly',                    link: 'https://buy.stripe.com/28E7sOgmu4e02U62Wp5wI01' },
    '12month':{ amount: '£5,000', period: ' for 12 months', alts: 'Equivalent to <span>£417/mo</span> · Best value',                          link: 'https://buy.stripe.com/dRmeVg7PYaCogKWbsV5wI02' },
  },
  gold: {
    monthly:  { amount: '£750',   period: '/month',         alts: 'Or <span>£4,000</span> for 6 months · <span>£8,000</span> for 12 months', link: 'https://buy.stripe.com/14AeVg2vE4e0amydB35wI03' },
    '6month': { amount: '£4,000', period: ' for 6 months',  alts: 'Equivalent to <span>£667/mo</span> · Save vs monthly',                    link: 'https://buy.stripe.com/eVq3cy0nw6m8dyK40t5wI04' },
    '12month':{ amount: '£8,000', period: ' for 12 months', alts: 'Equivalent to <span>£667/mo</span> · Best value',                          link: 'https://buy.stripe.com/aFafZkgmucKwfGSbsV5wI05' },
  },
  platinum: {
    monthly:  { amount: '£1,000', period: '/month',         alts: 'Or <span>£5,000</span> for 6 months · <span>£10,000</span> for 12 months',link: 'https://buy.stripe.com/8x24gC1rA39WeCOfJb5wI06' },
    '6month': { amount: '£5,000', period: ' for 6 months',  alts: 'Equivalent to <span>£833/mo</span> · Save vs monthly',                    link: 'https://buy.stripe.com/3cI14q8U2dOAeCO54x5wI07' },
    '12month':{ amount: '£10,000',period: ' for 12 months', alts: 'Equivalent to <span>£833/mo</span> · Best value',                          link: 'https://buy.stripe.com/14A5kG4DM4e0cuGcwZ5wI08' },
  },
}

function ChkIcon() {
  return <svg viewBox="0 0 10 8"><polyline points={CHECK} /></svg>
}

function BonusBox() {
  return (
    <div className="bonus-box">
      <p className="bonus-box-label">
        <svg viewBox="0 0 18 30"><path d={BOLT} /></svg>
        Included Free
      </p>
      <ul className="bonus-list">
        <li>Professional website build</li>
        <li>CRM setup &amp; configuration</li>
        <li>Lead magnet design</li>
        <li>Email automation to nurture leads</li>
      </ul>
    </div>
  )
}

export default function SignupClient() {
  const [period, setPeriod] = useState<Period>('monthly')

  const periods: Period[] = ['monthly', '6month', '12month']
  const labels = ['Monthly', '6 Months', '12 Months']

  return (
    <>
      {/* Hero */}
      <section className="hero hero-signup">
        <SiteNav />
        <div className="bolts-bg" aria-hidden="true">
          {[1,2,3,4,5,6,7].map(n => (
            <svg key={n} className={`bolt b${n}`} viewBox="0 0 18 30">
              <path fill="currentColor" d={BOLT} />
            </svg>
          ))}
        </div>
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            The Catalyst Method | SEO and Lead Growth System
          </div>
          <h1>The Lead Generation System<br />for <em>Local Businesses</em></h1>
          <p className="hero-sub">
            You run a serious business. You&apos;ve seen what&apos;s broken on your website.
            You don&apos;t need a long conversation to know the right move.
            You need a system that brings in consistent leads while you focus on doing the work.
          </p>
          <div className="hero-proof">
            <span className="proof-item">Monthly · Cancel Anytime</span>
            <span className="proof-item">Upgrade Anytime</span>
            <span className="proof-item">Results-driven system</span>
            <span className="proof-item">Built for local businesses</span>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <div className="proof-strip">
        <p>
          Built on the same system that generated <em>over £1,000,000 in revenue</em> for a local
          service business in under 2 years, using Local SEO · Google Ads · Conversion websites ·
          Follow-up systems · Sales structure. No national brand. No viral tricks.{' '}
          <em>Just demand capture and systems that convert.</em>
        </p>
      </div>

      {/* Pricing */}
      <section className="pricing-section">
        <div className="pricing-intro">
          <h2>Choose Your Growth Plan</h2>
          <p>
            Every plan includes a free website build, CRM setup, lead magnet design and email
            automation. You are set up to convert from day one.
          </p>
        </div>

        <div className="billing-toggle">
          {periods.map((p, i) => (
            <button
              key={p}
              className={`toggle-btn${period === p ? ' active' : ''}`}
              onClick={() => setPeriod(p)}
            >
              {labels[i]}{i > 0 && <span className="save-badge">Save 17%</span>}
            </button>
          ))}
        </div>

        <div className="pricing-grid">

          {/* BASIC */}
          <div className="pricing-card">
            <p className="card-tier basic">Tier 1</p>
            <h2 className="card-name">Basic</h2>
            <p className="card-tagline">Everything you need to get found and start winning local enquiries.</p>
            <div className="card-price">
              <span className="price-amount">{PRICING.basic[period].amount}</span>
              <span className="price-period">{PRICING.basic[period].period}</span>
            </div>
            <p className="price-alts" dangerouslySetInnerHTML={{ __html: PRICING.basic[period].alts }} />
            <div className="card-divider" />
            <p className="features-label">What&apos;s included</p>
            <ul className="feature-list">
              {['Website audit & lead gen conversion plan','Website copywriting action plan','Keyword research & strategy','On-site SEO implementation','Monthly analytics reports','Google My Business optimisation','9 SEO blogs/month with backlinks'].map(f => (
                <li key={f}><span className="chk"><ChkIcon /></span>{f}</li>
              ))}
            </ul>
            <BonusBox />
            <a href={PRICING.basic[period].link} className="card-cta basic-cta" target="_blank" rel="noopener">
              Get Started with Basic
            </a>
            <p className="card-sub-note">Secure payment via Stripe</p>
          </div>

          {/* GOLD */}
          <div className="pricing-card featured">
            <div className="popular-badge">⚡ Most Popular</div>
            <p className="card-tier gold">Tier 2</p>
            <h2 className="card-name">Gold</h2>
            <p className="card-tagline">More content, more authority, full sales system. For businesses ready to accelerate.</p>
            <div className="card-price">
              <span className="price-amount">{PRICING.gold[period].amount}</span>
              <span className="price-period">{PRICING.gold[period].period}</span>
            </div>
            <p className="price-alts" dangerouslySetInnerHTML={{ __html: PRICING.gold[period].alts }} />
            <div className="card-divider" />
            <p className="features-label">Everything in Basic, plus</p>
            <ul className="feature-list">
              {['Website audit & lead gen conversion plan','Website copywriting action plan','Keyword research & strategy','On-site SEO implementation','Monthly analytics reports','Google My Business optimisation','20 SEO blogs/month with backlinks','Sales training & scripts','CRM & email automations'].map(f => (
                <li key={f}><span className="chk"><ChkIcon /></span>{f}</li>
              ))}
            </ul>
            <BonusBox />
            <a href={PRICING.gold[period].link} className="card-cta gold-cta" target="_blank" rel="noopener">
              Get Started with Gold
            </a>
            <p className="card-sub-note">Secure payment via Stripe</p>
          </div>

          {/* PLATINUM */}
          <div className="pricing-card">
            <p className="card-tier platinum">Tier 3</p>
            <h2 className="card-name">Platinum</h2>
            <p className="card-tagline">Full acceleration. Coaching, strategy and content at scale. For serious growth.</p>
            <div className="card-price">
              <span className="price-amount">{PRICING.platinum[period].amount}</span>
              <span className="price-period">{PRICING.platinum[period].period}</span>
            </div>
            <p className="price-alts" dangerouslySetInnerHTML={{ __html: PRICING.platinum[period].alts }} />
            <div className="card-divider" />
            <p className="features-label">Everything in Gold, plus</p>
            <ul className="feature-list">
              {['Website audit & lead gen conversion plan','20 SEO blogs/month with backlinks','Sales training & scripts','CRM & email automations','Business coaching','Specific sales training for your niche','Monthly business strategy meetings','Organic social posting plan','Directory listings for Domain Authority'].map(f => (
                <li key={f}><span className="chk"><ChkIcon /></span>{f}</li>
              ))}
            </ul>
            <BonusBox />
            <a href={PRICING.platinum[period].link} className="card-cta platinum-cta" target="_blank" rel="noopener">
              Get Started with Platinum
            </a>
            <p className="card-sub-note">Secure payment via Stripe</p>
          </div>

        </div>
      </section>

      {/* Case Studies */}
      <section className="case-studies">
        <div className="cs-section-header">
          <div className="cs-eyebrow">
            <svg viewBox="0 0 18 30"><path d={BOLT} /></svg>
            Client Results
          </div>
          <h2>This Is What the System Actually Does</h2>
          <p>Real businesses. Real numbers. No paid ads. Just SEO, content and systems working together.</p>
        </div>

        {/* Case Study 1 */}
        <div className="cs-card">
          <p className="cs-card-label">Case Study 01 · Local Coffee Brand</p>
          <h3 className="cs-card-title">From 181 Visitors to 720 in 90 Days</h3>
          <p className="cs-card-desc">
            A local independent coffee brand with no paid advertising. Pure SEO and content strategy,
            January to April 2026.{' '}
            <a href="https://creationcoffee.co.uk/" target="_blank" rel="noopener" style={{ color: 'rgba(255,215,0,0.75)', fontWeight: 700, textDecoration: 'none' }}>
              creationcoffee.co.uk ↗
            </a>
          </p>
          <div className="analytics-grid">
            <div className="analytics-panel before">
              <div className="analytics-label"><span>January 2026 · Before</span><span>181 users</span></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="analytics-img" src="/creationcoffee2.png" alt="Creation Coffee Google Analytics January 2026 - 181 active users" />
            </div>
            <div className="analytics-panel after">
              <div className="analytics-label"><span>April 2026 · After</span><span>720 users · +297%</span></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="analytics-img" src="/creationcoffee1.png" alt="Creation Coffee Google Analytics April 2026 - 720 active users" />
            </div>
          </div>
          <div className="growth-strip">
            {[{pct:'+297%',lbl:'Active Users'},{pct:'+277%',lbl:'Total Events'},{pct:'+293%',lbl:'New Users'},{pct:'+240%',lbl:'Purchases'}].map(g => (
              <div key={g.lbl} className="growth-item">
                <div className="growth-pct">{g.pct}</div>
                <div className="growth-lbl">{g.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="cs-card">
          <p className="cs-card-label">Case Study 02 · Full Website Build and SEO</p>
          <h3 className="cs-card-title">Brand New Site Built to Rank From Day One</h3>
          <p className="cs-card-desc">Full website design, build and SEO implementation for a professional personal trainer course provider in Edinburgh.</p>
          <div className="cs-fitness">
            <div className="cs-fitness-info">
              <ul className="cs-deliverables">
                {[
                  'Full website design and build from scratch',
                  'On-site SEO implementation across all pages',
                  'Keyword research and content structure for local search',
                  'CIMSPA and OFQUAL accreditation positioned prominently for trust',
                  'Course pages optimised for "Level 3 Personal Trainer Course Edinburgh"',
                  'Conversion-focused layout with clear booking and enquiry flows',
                  'Google My Business setup and optimisation',
                  'Schema markup for education and course structured data',
                ].map(d => <li key={d}>{d}</li>)}
              </ul>
              <div className="cs-links">
                <a href="https://fitnesscoachchronicle.com/" target="_blank" rel="noopener" className="cs-site-link">
                  <svg viewBox="0 0 18 30"><path d={BOLT} /></svg>
                  View the Site
                </a>
              </div>
            </div>
            <div className="cs-screenshot-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/fcc1.png" alt="Fitness Coach Chronicle website - Edinburgh Level 3 Personal Trainer Course" />
            </div>
          </div>
        </div>
      </section>

      <div className="page-footer">
        <p>&copy; 2026 The Catalyst Method · <Link href="/">← Back to audit tool</Link></p>
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'

export const metadata: Metadata = {
  title: 'Wrise vs The Catalyst Method: Which Is Better for UK Local Businesses?',
  description: 'Wrise vs The Catalyst Method compared. Wrise offers SEO from £99/month. The Catalyst Method offers SEO plus a free website, CRM, lead magnet, and a 4-week leads guarantee for £500/month.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/wrise-vs-the-catalyst-method' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/wrise-vs-the-catalyst-method',
    title: 'Wrise vs The Catalyst Method: Which Is Better for UK Local Businesses?',
    description: 'Full comparison of Wrise and The Catalyst Method. Pricing, features, guarantees, and what each service actually delivers for UK local businesses.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' }],
    siteName: 'The Catalyst Method',
  },
  keywords: [
    'Wrise vs The Catalyst Method',
    'Wrise vs Catalyst Method',
    'Wrise comparison',
    'Wrise SEO review',
    'UK SEO service comparison',
    'best SEO service UK local business',
    'Wrise alternative UK',
    'monthly SEO with website UK',
  ],
}

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.thecatalystmethod.co.uk/wrise-vs-the-catalyst-method',
      url: 'https://www.thecatalystmethod.co.uk/wrise-vs-the-catalyst-method',
      name: 'Wrise vs The Catalyst Method',
      description: 'A direct comparison of Wrise and The Catalyst Method for UK local businesses. Pricing, features, and which delivers more value.',
      publisher: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.thecatalystmethod.co.uk/#organization',
      name: 'The Catalyst Method',
      url: 'https://www.thecatalystmethod.co.uk',
      description: 'Done-for-you SEO and lead generation for UK local businesses. Includes a free 200-page website, CRM, email automation, lead magnet, and a 4-week leads guarantee.',
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thecatalystmethod.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'Wrise vs The Catalyst Method', item: 'https://www.thecatalystmethod.co.uk/wrise-vs-the-catalyst-method' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Wrise or The Catalyst Method better for UK local businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For local businesses focused purely on improving their Google rankings, Wrise offers a flexible, low-cost entry point from £99/month. For local businesses that want a complete lead generation system, The Catalyst Method is a stronger choice. At £500/month it includes a brand new 200-page website, CRM with email automation, lead magnet, sales scripts, full results dashboard, and a 4-week leads guarantee that Wrise does not offer.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does Wrise cost compared to The Catalyst Method?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wrise has three plans: Seed at £99/month (2 hours SEO), Sprout at £249/month (6 hours SEO), and Tree at £499/month (12 hours SEO plus link building). The Catalyst Method costs £500/month and includes a full SEO service plus a 200-page website, CRM, lead magnet, sales scripts, results dashboard, and a money-back guarantee.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Wrise build websites?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wrise will make SEO changes to your existing website but does not build new websites as part of their plans. The Catalyst Method includes a brand new 200-page website built specifically to rank on Google and convert visitors into enquiries.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which service offers a guarantee?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wrise explicitly states on their website that no ethical SEO agency can guarantee first-page rankings. The Catalyst Method offers a different kind of guarantee: new leads within 4 weeks or a full refund with no questions asked.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does either service include a CRM?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wrise does not include a CRM or email automation. The Catalyst Method includes a fully set up CRM with email automation to follow up every lead automatically.',
          },
        },
      ],
    },
  ],
}

const CHECK = (
  <svg width="16" height="16" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 12 12" style={{ flexShrink: 0 }}>
    <polyline points="2,6 5,9 10,3" />
  </svg>
)

const CROSS = (
  <svg width="16" height="16" fill="none" stroke="#f87171" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 12 12" style={{ flexShrink: 0 }}>
    <line x1="3" y1="3" x2="9" y2="9" /><line x1="9" y1="3" x2="3" y2="9" />
  </svg>
)

const PARTIAL = (
  <svg width="16" height="16" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 12 12" style={{ flexShrink: 0 }}>
    <line x1="2" y1="6" x2="10" y2="6" />
  </svg>
)

export default function WriseVsCatalystPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

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
            The Catalyst Method | Wrise Comparison
          </div>
          <h1>Wrise vs The Catalyst Method<br /><em>Which Is Right for Your Business?</em></h1>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, maxWidth: '580px', margin: '0 auto 12px', fontFamily: "'Open Sans', sans-serif" }}>
            Both are UK SEO services for small businesses. One starts at £99/month and does SEO only. The other costs £500/month and includes a new website, CRM, lead magnet, and a 4-week results guarantee.
          </p>
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, maxWidth: '500px', margin: '0 auto 32px', fontFamily: "'Open Sans', sans-serif" }}>
            This page gives you the full comparison so you can make the right call for your business.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/website-audit" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FFD700', color: '#002B45', fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '0.88rem', letterSpacing: '0.04em', textTransform: 'uppercase', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none' }}>
              <svg width="10" viewBox="0 0 18 30" fill="currentColor"><path d={BOLT} /></svg>
              Get Your Free Audit
            </Link>
            <Link href="/signup" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', border: '1px solid rgba(255,215,0,0.35)', color: 'rgba(255,255,255,0.8)', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.04em', textTransform: 'uppercase', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none' }}>
              See Our Pricing
            </Link>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: '14px', fontFamily: "'Open Sans', sans-serif" }}>
            Free audit · No sign-up · Results in 10 seconds
          </p>
        </div>
      </section>

      <section style={{ padding: '72px 24px 0', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFD700', marginBottom: '14px' }}>Quick summary</p>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.025em', color: '#FFFFFF' }}>
            Wrise vs The Catalyst Method at a glance
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '48px' }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '32px 28px' }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '10px' }}>Wrise</div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.5rem', fontWeight: 900, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>From £99/month</div>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '20px', fontFamily: "'Open Sans', sans-serif" }}>
              A flexible UK SEO agency offering monthly plans for small businesses. No contracts, no setup fees. SEO work only, no additional assets included.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              {[
                { icon: CHECK, text: 'Monthly SEO work' },
                { icon: CHECK, text: 'Local SEO and Google Business Profile (Tree plan)' },
                { icon: CHECK, text: 'No contract, cancel anytime' },
                { icon: CROSS, text: 'No website included' },
                { icon: CROSS, text: 'No CRM or automation' },
                { icon: CROSS, text: 'No lead magnet' },
                { icon: CROSS, text: 'No sales scripts' },
                { icon: CROSS, text: 'No leads guarantee' },
              ].map(({ icon, text }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.84rem', color: 'rgba(255,255,255,0.65)', fontFamily: "'Open Sans', sans-serif" }}>
                  {icon}
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(255,215,0,0.05)', border: '1.5px solid rgba(255,215,0,0.25)', borderRadius: '14px', padding: '32px 28px', position: 'relative', overflow: 'hidden' }}>
            <svg style={{ position: 'absolute', fill: '#FFD700', opacity: 0.04, width: 80, height: 133, bottom: -10, right: 16, transform: 'rotate(10deg)', pointerEvents: 'none' }} viewBox="0 0 18 30"><path d={BOLT} /></svg>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FFD700', marginBottom: '10px' }}>The Catalyst Method</div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.5rem', fontWeight: 900, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>£500/month</div>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '20px', fontFamily: "'Open Sans', sans-serif" }}>
              A complete lead generation system for UK local businesses. SEO plus a new website, CRM, lead magnet, sales scripts, and a results guarantee.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              {[
                'Monthly SEO, content, and local rankings',
                'Brand new 200-page website built for you',
                'CRM with email automation set up',
                'Lead magnet built for your business',
                'Sales scripts included',
                'Full real-time results dashboard',
                'Google Business Profile managed',
                'New leads within 4 weeks or full refund',
              ].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.84rem', color: 'rgba(255,255,255,0.82)', fontFamily: "'Open Sans', sans-serif" }}>
                  {CHECK}
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 24px 0', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFD700', marginBottom: '14px' }}>Full breakdown</p>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.025em', color: '#FFFFFF' }}>
            Wrise vs The Catalyst Method: Comparison
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'rgba(255,215,0,0.06)', border: '1.5px solid rgba(255,215,0,0.22)', borderRadius: '14px 14px 0 0', padding: '16px 20px' }}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)' }}>Feature</div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', textAlign: 'center' }}>Wrise</div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FFD700', textAlign: 'center' }}>The Catalyst Method</div>
        </div>

        <div style={{ border: '1.5px solid rgba(255,255,255,0.1)', borderTop: 'none', borderRadius: '0 0 14px 14px', overflow: 'hidden' }}>
          {[
            { f: 'Monthly price', w: <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>From £99/month</span>, wt: '', c: <span style={{ color: '#FFD700', fontWeight: 700, fontSize: '0.85rem' }}>£500/month</span>, ct: '' },
            { f: 'New website built', w: CROSS, wt: 'Not included', c: CHECK, ct: 'Brand new 200-page website' },
            { f: 'CRM with automation', w: CROSS, wt: 'Not included', c: CHECK, ct: 'Fully set up for you' },
            { f: 'Lead magnet', w: CROSS, wt: 'Not included', c: CHECK, ct: 'Custom built for your market' },
            { f: 'Sales scripts', w: CROSS, wt: 'Not included', c: CHECK, ct: 'Included' },
            { f: 'Results dashboard', w: PARTIAL, wt: 'Monthly report only', c: CHECK, ct: 'Real-time dashboard' },
            { f: 'Local SEO', w: CHECK, wt: 'Yes', c: CHECK, ct: 'Yes' },
            { f: 'Google Business Profile', w: PARTIAL, wt: 'Tree plan only', c: CHECK, ct: 'All plans' },
            { f: 'Content creation', w: PARTIAL, wt: '1 idea/month on entry', c: CHECK, ct: 'Full strategy and creation' },
            { f: 'Link building', w: PARTIAL, wt: 'Tree plan only', c: CHECK, ct: 'Yes' },
            { f: 'Leads guarantee', w: CROSS, wt: 'None', c: CHECK, ct: '4 weeks or full refund' },
            { f: 'No contract', w: CHECK, wt: 'Yes, cancel anytime', c: CHECK, ct: 'Yes, cancel anytime' },
          ].map((row, i, arr) => (
            <div key={row.f} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '14px 20px', borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', background: i % 2 === 0 ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.02)', alignItems: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', fontWeight: 600, fontFamily: "'Open Sans', sans-serif", paddingRight: 12 }}>{row.f}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                {row.w}
                {row.wt && <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', fontFamily: "'Open Sans', sans-serif" }}>{row.wt}</span>}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                {row.c}
                {row.ct && <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.72)', fontFamily: "'Open Sans', sans-serif" }}>{row.ct}</span>}
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.28)', marginTop: '12px', textAlign: 'center', fontFamily: "'Open Sans', sans-serif" }}>
          Wrise pricing accurate as of May 2026. Source: wrise.co.uk
        </p>
      </section>

      <section style={{ padding: '72px 24px 0', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '14px', padding: '36px 32px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFD700', marginBottom: '14px' }}>Our honest take</p>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.2rem, 2.5vw, 1.55rem)', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: '16px' }}>
            When Wrise makes sense, and when it does not
          </h2>
          <p style={{ fontSize: '0.93rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.78, marginBottom: '14px', fontFamily: "'Open Sans', sans-serif" }}>
            Wrise is a legitimate, well-reviewed UK SEO agency. If you already have a solid website that converts visitors into enquiries, you just need SEO work to drive more traffic, and your budget is tight, Wrise is a reasonable choice. Their entry plans are genuinely affordable and they have 15 years of experience.
          </p>
          <p style={{ fontSize: '0.93rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.78, marginBottom: '14px', fontFamily: "'Open Sans', sans-serif" }}>
            However, most local business websites do not convert well. They were built to look good rather than generate leads. In that case, more SEO traffic just means more people bouncing without enquiring.
          </p>
          <p style={{ fontSize: '0.93rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.78, fontWeight: 600, fontFamily: "'Open Sans', sans-serif" }}>
            The Catalyst Method is the better choice for any local business that wants a complete system: SEO to get found, a website that converts, a CRM to capture every lead, and a guarantee on the results.
          </p>
        </div>
      </section>

      <section style={{ padding: '64px 24px 0', maxWidth: '680px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', background: 'rgba(110,231,183,0.06)', border: '1px solid rgba(110,231,183,0.2)', borderRadius: '14px', padding: '36px 32px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6EE7B7', marginBottom: '14px' }}>The Catalyst Method Guarantee</p>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: '10px' }}>
            New leads within 4 weeks or your money back.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, fontFamily: "'Open Sans', sans-serif" }}>
            No questions. No conditions. Full refund if we do not deliver. Wrise does not offer this.
          </p>
        </div>
      </section>

      <section style={{ padding: '72px 24px 0', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFD700', marginBottom: '16px' }}>Common questions</p>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.025em', color: '#FFFFFF' }}>
            Wrise vs The Catalyst Method: answered
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
          {[
            {
              q: 'Is Wrise or The Catalyst Method better for UK local businesses?',
              a: "For businesses that only need more SEO traffic and already have a strong converting website, Wrise is a flexible option from £99/month. For businesses that want a complete lead generation system with a new website, CRM, lead magnet, and a guarantee, The Catalyst Method delivers considerably more at £500/month.",
            },
            {
              q: 'How much does Wrise cost compared to The Catalyst Method?',
              a: "Wrise has three plans: Seed at £99/month (2 hours of SEO), Sprout at £249/month (6 hours), and Tree at £499/month (12 hours plus link building). The Catalyst Method costs £500/month and includes a full SEO service plus a 200-page website, CRM, lead magnet, sales scripts, and a money-back guarantee.",
            },
            {
              q: 'Does Wrise build websites?',
              a: "Wrise will make SEO changes to your existing website but does not build new websites. The Catalyst Method includes a brand new 200-page website built to rank and convert.",
            },
            {
              q: 'Which service offers a guarantee?',
              a: "Wrise explicitly states on their website that no ethical SEO agency can guarantee rankings. The Catalyst Method guarantees new leads within 4 weeks or a full refund.",
            },
            {
              q: 'Can I switch from Wrise to The Catalyst Method easily?',
              a: "Yes. Neither service requires a long-term contract. If you are currently with Wrise and want to upgrade to a full lead generation system, run a free audit on your website first. The audit will show exactly what is costing you leads right now and give you a clear picture of what needs to change.",
            },
          ].map(({ q, a }) => (
            <div key={q} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px 28px' }}>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.97rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>{q}</h3>
              <p style={{ fontSize: '0.91rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.72, fontFamily: "'Open Sans', sans-serif" }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '72px 24px 96px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,215,0,0.2)', borderRadius: '16px', padding: '56px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(255,215,0,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <svg style={{ position: 'absolute', top: '20px', left: '28px', width: '28px', opacity: 0.15, fill: '#FFD700' }} viewBox="0 0 18 30"><path d={BOLT} /></svg>
          <svg style={{ position: 'absolute', top: '20px', right: '28px', width: '28px', opacity: 0.15, fill: '#FFD700' }} viewBox="0 0 18 30"><path d={BOLT} /></svg>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFD700', marginBottom: '16px', position: 'relative' }}>Not sure which is right for you?</p>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.03em', color: '#FFFFFF', marginBottom: '16px', position: 'relative' }}>
            Run a free audit and see exactly what your site needs
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 36px', fontFamily: "'Open Sans', sans-serif", position: 'relative' }}>
            A free 16-point audit will tell you whether your site just needs more traffic or whether it needs a full conversion overhaul first. Takes 10 seconds. No sign-up.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
            <Link href="/website-audit" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FFD700', color: '#002B45', fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none' }}>
              <svg width="10" viewBox="0 0 18 30" fill="currentColor"><path d={BOLT} /></svg>
              Get My Free Website Audit
            </Link>
            <Link href="/signup" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.75)', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none' }}>
              See Plans and Pricing
            </Link>
          </div>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.28)', marginTop: '20px', position: 'relative', fontFamily: "'Open Sans', sans-serif" }}>
            Free, no sign-up needed · Results in 10 seconds · 4-week leads guarantee
          </p>
        </div>
      </section>
    </>
  )
}

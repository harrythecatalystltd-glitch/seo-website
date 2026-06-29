import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'

export const metadata: Metadata = {
  title: 'Milk It Digital Alternative for UK Local Businesses | The Catalyst Method',
  description: 'Looking for a Milk It Digital alternative? The Catalyst Method gives UK local businesses SEO, a free 200-page website, CRM, lead magnet, and a 4-week leads guarantee. All for £500/month.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/milk-it-digital-alternative' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/milk-it-digital-alternative',
    title: 'Milk It Digital Alternative for UK Local Businesses | The Catalyst Method',
    description: 'Milk It Digital vs The Catalyst Method: SEO only versus a complete lead generation system with a free website, CRM, lead magnet, sales scripts, and a money-back guarantee.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' }],
    siteName: 'The Catalyst Method',
  },
  keywords: [
    'Milk It Digital alternative',
    'Milk It Digital alternative UK',
    'alternative to Milk It Digital',
    'Milk It Digital vs Catalyst Method',
    'UK SEO monthly service alternative',
    'affordable SEO UK website included',
    'local business SEO with website',
    'monthly SEO service UK small business',
  ],
}

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.thecatalystmethod.co.uk/milk-it-digital-alternative',
      url: 'https://www.thecatalystmethod.co.uk/milk-it-digital-alternative',
      name: 'Milk It Digital Alternative: The Catalyst Method',
      description: 'A detailed comparison of Milk It Digital and The Catalyst Method for UK local businesses. The Catalyst Method includes a free website, CRM, lead magnet, and a 4-week leads guarantee.',
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
        { '@type': 'ListItem', position: 2, name: 'Milk It Digital Alternative', item: 'https://www.thecatalystmethod.co.uk/milk-it-digital-alternative' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between Milk It Digital and The Catalyst Method?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Milk It Digital is a UK SEO agency offering monthly SEO retainers from £495/month for their Red Top plan. The Catalyst Method costs £500/month and includes everything Milk It Digital offers plus a brand new 200-page website, CRM with email automation, a lead magnet built for your business, sales scripts, a full results dashboard, and a 4-week leads guarantee. For local businesses focused on lead generation, The Catalyst Method provides considerably more value.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Milk It Digital include a website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Milk It Digital is an SEO-only service. Their plans cover keyword research, on-page SEO, local SEO, content ideas, and reporting but do not include building a new website. The Catalyst Method includes a brand new 200-page website as part of the monthly package.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Milk It Digital offer a guarantee?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Milk It Digital does not offer a results guarantee. The Catalyst Method guarantees new leads within 4 weeks or a full refund with no questions asked.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is The Catalyst Method more expensive than Milk It Digital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Catalyst Method costs £500/month. Milk It Digital starts at £495/month for their Red Top plan, which covers sites with up to six service pages and includes 1 content idea per month. Their Silver Top plan is £800/month and Gold Top is £1,500/month. The Catalyst Method costs effectively the same as Milk It Digital\'s entry plan but includes a full website, CRM, lead magnet, sales scripts, dashboard, and a money-back guarantee.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Milk It Digital include a CRM or lead magnet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Milk It Digital is focused purely on search engine optimisation including GEO and AI search. They do not set up CRM systems, email automation, or lead magnets. The Catalyst Method includes all of these as part of the monthly package.',
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

const rows: { feature: string; mid: React.ReactNode; catalyst: React.ReactNode; midTxt: string; catalystTxt: string }[] = [
  {
    feature: 'Monthly price',
    mid: <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>From £495/month</span>,
    catalyst: <span style={{ color: '#FFD700', fontWeight: 700, fontSize: '0.85rem' }}>£500/month</span>,
    midTxt: 'From £495/month',
    catalystTxt: '£500/month',
  },
  {
    feature: 'New website built for you',
    mid: CROSS,
    catalyst: CHECK,
    midTxt: 'Not included',
    catalystTxt: 'Brand new 200-page website included',
  },
  {
    feature: 'CRM with email automation',
    mid: CROSS,
    catalyst: CHECK,
    midTxt: 'Not included',
    catalystTxt: 'Fully set up and ready to use',
  },
  {
    feature: 'Lead magnet built for you',
    mid: CROSS,
    catalyst: CHECK,
    midTxt: 'Not included',
    catalystTxt: 'Custom lead magnet for your market',
  },
  {
    feature: 'Sales scripts',
    mid: CROSS,
    catalyst: CHECK,
    midTxt: 'Not included',
    catalystTxt: 'Scripts to close enquiries into paying customers',
  },
  {
    feature: 'Full results dashboard',
    mid: PARTIAL,
    catalyst: CHECK,
    midTxt: 'Monthly report only',
    catalystTxt: 'Real-time dashboard: rankings, traffic, enquiries',
  },
  {
    feature: 'Local SEO',
    mid: CHECK,
    catalyst: CHECK,
    midTxt: 'Yes',
    catalystTxt: 'Yes',
  },
  {
    feature: 'Google Business Profile',
    mid: PARTIAL,
    catalyst: CHECK,
    midTxt: 'Silver Top plan only (£800/month)',
    catalystTxt: 'Included in all plans',
  },
  {
    feature: 'Technical SEO fixes',
    mid: CHECK,
    catalyst: CHECK,
    midTxt: 'Yes',
    catalystTxt: 'Yes, your full audit acted on',
  },
  {
    feature: 'Content creation',
    mid: PARTIAL,
    catalyst: CHECK,
    midTxt: '1 content idea per month on entry plan',
    catalystTxt: 'Full content strategy and creation',
  },
  {
    feature: 'AI search optimisation',
    mid: CHECK,
    catalyst: CHECK,
    midTxt: 'Yes, GEO and AIO included',
    catalystTxt: 'Yes',
  },
  {
    feature: 'Leads guarantee',
    mid: CROSS,
    catalyst: CHECK,
    midTxt: 'None offered',
    catalystTxt: 'New leads in 4 weeks or full refund',
  },
  {
    feature: 'Dedicated support',
    mid: PARTIAL,
    catalyst: CHECK,
    midTxt: 'Solo operator, limited capacity',
    catalystTxt: 'Full dedicated support',
  },
  {
    feature: 'No long-term contract',
    mid: CHECK,
    catalyst: CHECK,
    midTxt: 'Yes, cancel anytime',
    catalystTxt: 'Yes, cancel anytime',
  },
]

export default function MilkItDigitalAlternativePage() {
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
            The Catalyst Method | Milk It Digital Alternative
          </div>
          <h1>The Best Milk It Digital Alternative<br />for <em>UK Local Businesses</em></h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.65,
            maxWidth: '580px',
            margin: '0 auto 12px',
            fontFamily: "'Open Sans', sans-serif",
          }}>
            Milk It Digital does SEO. The Catalyst Method does SEO and builds you a new website, sets up your CRM, creates your lead magnet, and guarantees new leads within 4 weeks or your money back.
          </p>
          <p style={{
            fontSize: '0.88rem',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.6,
            maxWidth: '500px',
            margin: '0 auto 32px',
            fontFamily: "'Open Sans', sans-serif",
          }}>
            Almost identical monthly cost. Considerably more included.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/website-audit" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#FFD700', color: '#002B45',
              fontFamily: "'Montserrat', sans-serif", fontWeight: 800,
              fontSize: '0.88rem', letterSpacing: '0.04em', textTransform: 'uppercase',
              padding: '14px 28px', borderRadius: '8px', textDecoration: 'none',
            }}>
              <svg width="10" viewBox="0 0 18 30" fill="currentColor"><path d={BOLT} /></svg>
              Get Your Free Audit
            </Link>
            <Link href="/signup" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'transparent',
              border: '1px solid rgba(255,215,0,0.35)',
              color: 'rgba(255,255,255,0.8)',
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: '0.88rem', letterSpacing: '0.04em', textTransform: 'uppercase',
              padding: '14px 28px', borderRadius: '8px', textDecoration: 'none',
            }}>
              See Pricing
            </Link>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: '14px', fontFamily: "'Open Sans', sans-serif" }}>
            Free audit · No sign-up · Results in 10 seconds
          </p>
        </div>
      </section>

      <section style={{ padding: '72px 24px 0', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#FFD700', marginBottom: '16px',
          }}>
            Why switch
          </p>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
            fontWeight: 900, lineHeight: 1.15,
            letterSpacing: '-0.025em', color: '#FFFFFF',
            maxWidth: '600px', margin: '0 auto',
          }}>
            Milk It Digital ranks your website.<br />We turn it into a lead machine.
          </h2>
          <p style={{
            fontSize: '1rem', color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.7, maxWidth: '560px',
            margin: '16px auto 0',
            fontFamily: "'Open Sans', sans-serif",
          }}>
            Milk It Digital is run by a single operator and focuses purely on SEO. If you are a local service business that needs rankings plus a website that converts, a lead capture system, and guaranteed results, you need more than an SEO retainer.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          {[
            {
              icon: '🌐',
              title: 'A website that actually converts',
              body: "Milk It Digital improves your existing site as part of the SEO work. We build you a brand new 200-page website designed from the ground up to rank on Google and turn visitors into paying enquiries.",
            },
            {
              icon: '⚙️',
              title: 'CRM and lead automation',
              body: 'Milk It Digital is purely an SEO service. We set up a full CRM with email automation so every lead gets followed up automatically, whether it arrives at 9am or 11pm.',
            },
            {
              icon: '🧲',
              title: 'A lead magnet built for your market',
              body: "Only 3% of visitors are ready to buy right now. Milk It Digital does not capture the other 97%. We build you a lead magnet that keeps those visitors in your world until they are ready.",
            },
            {
              icon: '🛡️',
              title: 'A real results guarantee',
              body: "Milk It Digital does not offer a guarantee. The Catalyst Method guarantees new leads within 4 weeks or we refund every penny. No conditions, no small print.",
            },
          ].map(({ icon, title, body }) => (
            <div key={title} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '14px',
              padding: '28px 24px',
            }}>
              <div style={{ fontSize: '1.6rem', marginBottom: '14px', lineHeight: 1 }}>{icon}</div>
              <h3 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.98rem', fontWeight: 800,
                color: '#FFFFFF', marginBottom: '10px', lineHeight: 1.3,
              }}>
                {title}
              </h3>
              <p style={{
                fontSize: '0.88rem', color: 'rgba(255,255,255,0.58)',
                lineHeight: 1.72,
                fontFamily: "'Open Sans', sans-serif",
              }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '72px 24px 0', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#FFD700', marginBottom: '14px',
          }}>
            Side by side
          </p>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)',
            fontWeight: 900, lineHeight: 1.15,
            letterSpacing: '-0.025em', color: '#FFFFFF',
          }}>
            Milk It Digital vs The Catalyst Method: Comparison
          </h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          background: 'rgba(255,215,0,0.06)',
          border: '1.5px solid rgba(255,215,0,0.22)',
          borderRadius: '14px 14px 0 0',
          padding: '16px 20px',
        }}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)' }}>Feature</div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', textAlign: 'center' }}>Milk It Digital</div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FFD700', textAlign: 'center' }}>The Catalyst Method</div>
        </div>

        <div style={{ border: '1.5px solid rgba(255,255,255,0.1)', borderTop: 'none', borderRadius: '0 0 14px 14px', overflow: 'hidden' }}>
          {rows.map((row, i) => (
            <div key={row.feature} style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
              padding: '14px 20px',
              borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              background: i % 2 === 0 ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.02)',
              alignItems: 'center',
            }}>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', fontWeight: 600, fontFamily: "'Open Sans', sans-serif", paddingRight: 12 }}>
                {row.feature}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                {row.mid}
                <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', fontFamily: "'Open Sans', sans-serif" }}>{row.midTxt}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                {row.catalyst}
                <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.72)', fontFamily: "'Open Sans', sans-serif" }}>{row.catalystTxt}</span>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.28)', marginTop: '12px', textAlign: 'center', fontFamily: "'Open Sans', sans-serif" }}>
          Milk It Digital pricing accurate as of May 2026. Source: milkitdigital.co.uk
        </p>
      </section>

      <section style={{ padding: '72px 24px 0', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{
          background: 'rgba(255,215,0,0.05)',
          border: '1.5px solid rgba(255,215,0,0.2)',
          borderRadius: '16px',
          padding: '48px 40px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <svg style={{ position: 'absolute', fill: '#FFD700', opacity: 0.04, width: 120, height: 200, top: -30, right: 20, transform: 'rotate(12deg)', pointerEvents: 'none' }} viewBox="0 0 18 30"><path d={BOLT} /></svg>

          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#FFD700', marginBottom: '16px',
          }}>
            Everything included at £500/month
          </p>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
            fontWeight: 900, lineHeight: 1.2,
            letterSpacing: '-0.025em', color: '#FFFFFF',
            marginBottom: '32px',
          }}>
            Here is everything The Catalyst Method includes that Milk It Digital does not
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginBottom: '36px' }}>
            {[
              { title: 'Brand new 200-page website', desc: 'Built for rankings and conversions. Milk It Digital works on your existing site. We build you something that actually ranks and converts.' },
              { title: 'CRM with email automation', desc: 'Every enquiry gets followed up automatically. No more losing leads because life got in the way.' },
              { title: 'Lead magnet for your business', desc: 'Capture the 97% of visitors not ready to buy today and keep them warm until they are.' },
              { title: 'Sales scripts', desc: 'Turn enquiries into paying customers consistently with proven scripts written for your service.' },
              { title: 'Full results dashboard', desc: 'See your rankings, traffic, and enquiries in one place, not just a monthly email.' },
              { title: '4-week leads guarantee', desc: 'New leads within 4 weeks or we refund you in full. Milk It Digital offers no such guarantee.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{
                background: 'rgba(0,0,0,0.25)',
                borderRadius: '10px',
                padding: '20px 20px',
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
              }}>
                <svg width="16" height="16" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 12 12" style={{ flexShrink: 0, marginTop: 3 }}>
                  <polyline points="2,6 5,9 10,3" />
                </svg>
                <div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '0.88rem', color: '#fff', marginBottom: '5px' }}>{title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.52)', lineHeight: 1.6, fontFamily: "'Open Sans', sans-serif" }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/website-audit" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#FFD700', color: '#002B45',
              fontFamily: "'Montserrat', sans-serif", fontWeight: 800,
              fontSize: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase',
              padding: '16px 32px', borderRadius: '8px', textDecoration: 'none',
            }}>
              <svg width="10" viewBox="0 0 18 30" fill="currentColor"><path d={BOLT} /></svg>
              Get Your Free Audit Now
            </Link>
            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', marginTop: '10px', fontFamily: "'Open Sans', sans-serif" }}>
              No sign-up needed · Instant results · No obligation
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 24px 0', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFD700', marginBottom: '14px' }}>Real results</p>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.4rem, 3.2vw, 2rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.025em', color: '#FFFFFF', maxWidth: '520px', margin: '0 auto' }}>
            What the full system delivers when everything works together
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.42)', marginTop: '12px', fontFamily: "'Open Sans', sans-serif" }}>
            Creation Coffee, local brand, zero paid ads, 90 days with The Catalyst Method.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '24px' }}>
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
        <div style={{ textAlign: 'center' }}>
          <a href="/case-study-creation-coffee.html" style={{ fontSize: '0.82rem', color: 'rgba(255,215,0,0.65)', textDecoration: 'none', fontWeight: 700, fontFamily: "'Montserrat', sans-serif" }}>
            Read the full Creation Coffee case study
          </a>
        </div>
      </section>

      <section style={{ padding: '64px 24px 0', maxWidth: '680px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', background: 'rgba(110,231,183,0.06)', border: '1px solid rgba(110,231,183,0.2)', borderRadius: '14px', padding: '36px 32px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6EE7B7', marginBottom: '14px' }}>The Catalyst Method Guarantee</p>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: '10px' }}>
            New leads within 4 weeks or your money back.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, fontFamily: "'Open Sans', sans-serif" }}>
            No questions. No conditions. Full refund if we do not deliver. Milk It Digital does not offer this. We put it in writing because we are confident enough in what we do to back it up.
          </p>
        </div>
      </section>

      <section style={{ padding: '72px 24px 0', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFD700', marginBottom: '16px' }}>Common questions</p>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.025em', color: '#FFFFFF' }}>
            Milk It Digital vs The Catalyst Method: answered
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
          {[
            {
              q: 'What is the difference between Milk It Digital and The Catalyst Method?',
              a: "Milk It Digital is a UK SEO agency offering monthly retainers from £495/month for their Red Top plan. The Catalyst Method costs £500/month and includes a brand new 200-page website, CRM with email automation, a custom lead magnet, sales scripts, a full results dashboard, and a 4-week leads guarantee. For local businesses focused on lead generation, The Catalyst Method provides considerably more value.",
            },
            {
              q: 'Does Milk It Digital include a website?',
              a: "No. Milk It Digital is a pure SEO service. Their plans cover keyword research, on-page optimisation, local SEO, content ideas, GEO and AI search, but do not include building a new website. The Catalyst Method includes a brand new 200-page website as part of the monthly package.",
            },
            {
              q: 'Does Milk It Digital offer a guarantee?',
              a: "No. Milk It Digital does not offer a results guarantee. The Catalyst Method guarantees new leads within 4 weeks or a full refund with no questions asked.",
            },
            {
              q: 'Is The Catalyst Method more expensive than Milk It Digital?',
              a: "The Catalyst Method costs £500/month. Milk It Digital starts at £495/month for their Red Top plan, which covers sites with up to six service pages and includes 1 content idea per month. At virtually the same price, The Catalyst Method adds a free website, CRM, lead magnet, sales scripts, dashboard, and a money-back guarantee. Milk It Digital's Silver Top is £800/month and Gold Top is £1,500/month.",
            },
            {
              q: 'Is The Catalyst Method right for my type of business?',
              a: "It is built for UK local service businesses: trades, consultants, clinics, salons, and any local business that wants a consistent flow of enquiries from Google. Run a free audit on your website and see exactly what is costing you leads right now.",
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
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFD700', marginBottom: '16px', position: 'relative' }}>Ready to switch?</p>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.03em', color: '#FFFFFF', marginBottom: '16px', position: 'relative' }}>
            See what your website is costing you every month
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 36px', fontFamily: "'Open Sans', sans-serif", position: 'relative' }}>
            Run a free 16-point audit on your website. Find out exactly what is stopping you from getting leads. Takes 10 seconds.
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

import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'

export const metadata: Metadata = {
  title: 'Get Your Website Seen Alternative | The Catalyst Method',
  description: 'Looking for a Get Your Website Seen alternative? The Catalyst Method gives UK local businesses SEO, a free 200-page website, CRM, lead magnet, and a 4-week leads guarantee. All for £500/month.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/get-your-website-seen-alternative' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/get-your-website-seen-alternative',
    title: 'Get Your Website Seen Alternative | The Catalyst Method',
    description: 'Get Your Website Seen vs The Catalyst Method: SEO packages versus a complete lead generation system with a free 200-page website, CRM, lead magnet, and a money-back guarantee.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' }],
    siteName: 'The Catalyst Method',
  },
  keywords: [
    'Get Your Website Seen alternative',
    'alternative to Get Your Website Seen',
    'Get Your Website Seen vs Catalyst Method',
    'UK local SEO monthly service alternative',
    'affordable SEO UK website included',
    'local business SEO with website',
    'monthly SEO service UK small business',
    'local SEO service alternative UK',
  ],
}

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.thecatalystmethod.co.uk/get-your-website-seen-alternative',
      url: 'https://www.thecatalystmethod.co.uk/get-your-website-seen-alternative',
      name: 'Get Your Website Seen Alternative: The Catalyst Method',
      description: 'A detailed comparison of Get Your Website Seen and The Catalyst Method for UK local businesses. The Catalyst Method includes a free website, CRM, lead magnet, and a 4-week leads guarantee.',
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
        { '@type': 'ListItem', position: 2, name: 'Get Your Website Seen Alternative', item: 'https://www.thecatalystmethod.co.uk/get-your-website-seen-alternative' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between Get Your Website Seen and The Catalyst Method?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Get Your Website Seen is a UK local SEO service with plans starting from £199/month. The Catalyst Method costs £500/month but includes a brand new 200-page website, CRM with email automation, a lead magnet built for your business, sales scripts, a full results dashboard, and a 4-week leads guarantee. Get Your Website Seen does not include any of these extras.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Get Your Website Seen include a free website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Get Your Website Seen is a local SEO service only. Their plans focus on keyword research, blog content, Google Business Profile updates, and monthly reporting but do not include building you a new website. The Catalyst Method includes a brand new 200-page website.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Get Your Website Seen offer a leads guarantee?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Get Your Website Seen does not offer a results guarantee. The Catalyst Method guarantees new leads within 4 weeks or a full refund, no questions asked.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is The Catalyst Method more expensive than Get Your Website Seen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Get Your Website Seen starts from £199/month for their Light plan (2 blog posts, 1 social post, basic local SEO). Their Standard plan is £250 to £399/month. The Catalyst Method costs £500/month but includes a free 200-page website, CRM, lead magnet, sales scripts, dashboard, and a money-back guarantee. The additional monthly cost is offset by the value of assets that would otherwise cost thousands to build separately.',
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

const rows: { feature: string; gyws: React.ReactNode; catalyst: React.ReactNode; gywsTxt: string; catalystTxt: string }[] = [
  {
    feature: 'Monthly price',
    gyws: <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>From £199/month</span>,
    catalyst: <span style={{ color: '#FFD700', fontWeight: 700, fontSize: '0.85rem' }}>£500/month</span>,
    gywsTxt: 'From £199/month',
    catalystTxt: '£500/month',
  },
  {
    feature: 'New website built for you',
    gyws: CROSS,
    catalyst: CHECK,
    gywsTxt: 'Not included',
    catalystTxt: 'Brand new 200-page website included',
  },
  {
    feature: 'CRM with email automation',
    gyws: CROSS,
    catalyst: CHECK,
    gywsTxt: 'Not included',
    catalystTxt: 'Fully set up and ready to use',
  },
  {
    feature: 'Lead magnet built for you',
    gyws: CROSS,
    catalyst: CHECK,
    gywsTxt: 'Not included',
    catalystTxt: 'Custom lead magnet for your market',
  },
  {
    feature: 'Sales scripts',
    gyws: CROSS,
    catalyst: CHECK,
    gywsTxt: 'Not included',
    catalystTxt: 'Scripts to close enquiries into paying customers',
  },
  {
    feature: 'Full results dashboard',
    gyws: PARTIAL,
    catalyst: CHECK,
    gywsTxt: 'Monthly PDF report only',
    catalystTxt: 'Real-time dashboard: rankings, traffic, enquiries',
  },
  {
    feature: 'Local SEO',
    gyws: CHECK,
    catalyst: CHECK,
    gywsTxt: 'Yes',
    catalystTxt: 'Yes',
  },
  {
    feature: 'Google Business Profile',
    gyws: CHECK,
    catalyst: CHECK,
    gywsTxt: 'Yes, updates included',
    catalystTxt: 'Yes, fully managed',
  },
  {
    feature: 'Technical SEO fixes',
    gyws: PARTIAL,
    catalyst: CHECK,
    gywsTxt: 'Basic checks only on Light plan',
    catalystTxt: 'Yes, your full audit acted on',
  },
  {
    feature: 'Content creation',
    gyws: PARTIAL,
    catalyst: CHECK,
    gywsTxt: '2 blog posts per month on entry plan',
    catalystTxt: 'Full content strategy and creation',
  },
  {
    feature: 'Backlink building',
    gyws: PARTIAL,
    catalyst: CHECK,
    gywsTxt: 'Standard plan only (from £250/month)',
    catalystTxt: 'Yes',
  },
  {
    feature: 'Leads guarantee',
    gyws: CROSS,
    catalyst: CHECK,
    gywsTxt: 'None offered',
    catalystTxt: 'New leads in 4 weeks or full refund',
  },
  {
    feature: 'Dedicated support',
    gyws: PARTIAL,
    catalyst: CHECK,
    gywsTxt: 'Email support',
    catalystTxt: 'Full dedicated support',
  },
  {
    feature: 'No long-term contract',
    gyws: CHECK,
    catalyst: CHECK,
    gywsTxt: 'Yes, cancel anytime',
    catalystTxt: 'Yes, cancel anytime',
  },
]

export default function GetYourWebsiteSeenAlternativePage() {
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
            The Catalyst Method | Get Your Website Seen Alternative
          </div>
          <h1>The Best Get Your Website Seen Alternative<br />for <em>UK Local Businesses</em></h1>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, maxWidth: '600px', margin: '0 auto 12px', fontFamily: "'Open Sans', sans-serif" }}>
            Get Your Website Seen offers affordable local SEO. The Catalyst Method gives you that plus a new website, CRM, lead magnet, sales scripts, and a guarantee that you will get new leads within 4 weeks.
          </p>
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, maxWidth: '500px', margin: '0 auto 32px', fontFamily: "'Open Sans', sans-serif" }}>
            More upfront investment. A complete lead generation system in return.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FFD700', color: '#002B45', fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '0.88rem', letterSpacing: '0.04em', textTransform: 'uppercase', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none' }}>
              <svg width="10" viewBox="0 0 18 30" fill="currentColor"><path d={BOLT} /></svg>
              Get Your Free Audit
            </Link>
            <Link href="/signup" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', border: '1px solid rgba(255,215,0,0.35)', color: 'rgba(255,255,255,0.8)', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.04em', textTransform: 'uppercase', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none' }}>
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
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFD700', marginBottom: '16px' }}>Why switch</p>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.025em', color: '#FFFFFF', maxWidth: '640px', margin: '0 auto' }}>
            Get Your Website Seen gets you found.<br />We get you leads.
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '560px', margin: '16px auto 0', fontFamily: "'Open Sans', sans-serif" }}>
            Getting found on Google is only half the job. Most visitors do not enquire on their first visit. Without a website built to convert, a lead capture system, and a follow-up sequence, rankings alone will not grow your business.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          {[
            {
              icon: '🌐',
              title: 'A website built to convert, not just rank',
              body: 'Get Your Website Seen improves your existing site. We build you a brand new 200-page website designed from the ground up to rank and turn every visitor into an enquiry.',
            },
            {
              icon: '⚙️',
              title: 'CRM and email automation',
              body: 'Get Your Website Seen does not touch your back-end systems. We set up a full CRM with email automation so every lead gets followed up without you having to lift a finger.',
            },
            {
              icon: '🧲',
              title: 'A lead magnet for your business',
              body: "Only 3% of visitors are ready to buy right now. Without a lead magnet, the other 97% leave and never come back. We build one specifically for your market.",
            },
            {
              icon: '🛡️',
              title: 'A real guarantee',
              body: "Get Your Website Seen does not offer a results guarantee. We guarantee new leads within 4 weeks or we refund every penny. No conditions, no questions.",
            },
          ].map(({ icon, title, body }) => (
            <div key={title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '28px 24px' }}>
              <div style={{ fontSize: '1.6rem', marginBottom: '14px', lineHeight: 1 }}>{icon}</div>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.98rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px', lineHeight: 1.3 }}>{title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.72, fontFamily: "'Open Sans', sans-serif" }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '72px 24px 0', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFD700', marginBottom: '14px' }}>Side by side</p>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.025em', color: '#FFFFFF' }}>
            Get Your Website Seen vs The Catalyst Method: Comparison
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'rgba(255,215,0,0.06)', border: '1.5px solid rgba(255,215,0,0.22)', borderRadius: '14px 14px 0 0', padding: '16px 20px' }}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)' }}>Feature</div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', textAlign: 'center' }}>Get Your Website Seen</div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FFD700', textAlign: 'center' }}>The Catalyst Method</div>
        </div>

        <div style={{ border: '1.5px solid rgba(255,255,255,0.1)', borderTop: 'none', borderRadius: '0 0 14px 14px', overflow: 'hidden' }}>
          {rows.map((row, i) => (
            <div key={row.feature} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '14px 20px', borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', background: i % 2 === 0 ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.02)', alignItems: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', fontWeight: 600, fontFamily: "'Open Sans', sans-serif", paddingRight: 12 }}>{row.feature}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                {row.gyws}
                <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', fontFamily: "'Open Sans', sans-serif" }}>{row.gywsTxt}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                {row.catalyst}
                <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.72)', fontFamily: "'Open Sans', sans-serif" }}>{row.catalystTxt}</span>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.28)', marginTop: '12px', textAlign: 'center', fontFamily: "'Open Sans', sans-serif" }}>
          Get Your Website Seen pricing accurate as of May 2026. Source: getyourwebsiteseen.co.uk
        </p>
      </section>

      <section style={{ padding: '72px 24px 0', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ background: 'rgba(255,215,0,0.05)', border: '1.5px solid rgba(255,215,0,0.2)', borderRadius: '16px', padding: '48px 40px', position: 'relative', overflow: 'hidden' }}>
          <svg style={{ position: 'absolute', fill: '#FFD700', opacity: 0.04, width: 120, height: 200, top: -30, right: 20, transform: 'rotate(12deg)', pointerEvents: 'none' }} viewBox="0 0 18 30"><path d={BOLT} /></svg>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFD700', marginBottom: '16px' }}>Everything included at £500/month</p>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 900, lineHeight: 1.2, letterSpacing: '-0.025em', color: '#FFFFFF', marginBottom: '32px' }}>
            Here is everything The Catalyst Method includes that Get Your Website Seen does not
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginBottom: '36px' }}>
            {[
              { title: 'Brand new 200-page website', desc: 'Built for rankings and conversions. Get Your Website Seen works on your existing site. We give you something built to generate leads from day one.' },
              { title: 'CRM with email automation', desc: 'Every enquiry gets followed up automatically. No more losing leads because you were too busy to call back.' },
              { title: 'Lead magnet for your business', desc: 'Capture the 97% of visitors not ready to buy today and keep them warm until they are.' },
              { title: 'Sales scripts', desc: 'Turn enquiries into paying customers consistently with proven scripts written for your service.' },
              { title: 'Full results dashboard', desc: 'See your rankings, traffic, and enquiries in one place, not just a monthly PDF.' },
              { title: '4-week leads guarantee', desc: 'New leads within 4 weeks or we refund you in full. Get Your Website Seen offers no such guarantee.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '10px', padding: '20px 20px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
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
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FFD700', color: '#002B45', fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none' }}>
              <svg width="10" viewBox="0 0 18 30" fill="currentColor"><path d={BOLT} /></svg>
              Get Your Free Audit Now
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 24px 0', maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFD700', marginBottom: '14px' }}>Real results</p>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.4rem, 3.2vw, 2rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.025em', color: '#FFFFFF', maxWidth: '520px', margin: '0 auto' }}>
            What the full system delivers
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
            No questions. No conditions. Full refund if we do not deliver. Get Your Website Seen does not offer this. We put it in writing.
          </p>
        </div>
      </section>

      <section style={{ padding: '72px 24px 0', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFD700', marginBottom: '16px' }}>Common questions</p>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.025em', color: '#FFFFFF' }}>
            Get Your Website Seen vs The Catalyst Method: answered
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
          {[
            {
              q: 'What is the difference between Get Your Website Seen and The Catalyst Method?',
              a: "Get Your Website Seen is a UK local SEO service with plans from £199/month. The Catalyst Method costs £500/month but includes a brand new 200-page website, CRM with email automation, a custom lead magnet, sales scripts, a full results dashboard, and a 4-week leads guarantee.",
            },
            {
              q: 'Does Get Your Website Seen include a free website?',
              a: "No. Get Your Website Seen focuses on local SEO: blog content, Google Business Profile updates, citation building, and monthly reports. A new website is not included in any plan. The Catalyst Method includes a brand new 200-page website.",
            },
            {
              q: 'Does Get Your Website Seen offer a guarantee?',
              a: "No. Get Your Website Seen does not offer a results guarantee. The Catalyst Method guarantees new leads within 4 weeks or a full refund with no questions asked.",
            },
            {
              q: 'Is The Catalyst Method worth the higher cost?',
              a: "Get Your Website Seen starts at £199/month. The Catalyst Method is £500/month, which is £301 more per month. In return you receive a brand new 200-page website (which alone would typically cost £3,000 to £10,000 to build), a fully set up CRM, a lead magnet, sales scripts, and a money-back guarantee. For most local businesses the additional monthly cost is recovered very quickly from a single extra enquiry.",
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
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FFD700', color: '#002B45', fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none' }}>
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

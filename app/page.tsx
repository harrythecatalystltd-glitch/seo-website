import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import { manualPosts } from '@/lib/manual-posts'

export const metadata: Metadata = {
  title: 'More Leads for Local Service Businesses | The Catalyst Method',
  description: 'We get UK local service businesses more leads from Google. Done-for-you SEO with a money-back guarantee, or grab the exact tools we use yourself.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/',
    title: 'More Leads for Local Service Businesses | The Catalyst Method',
    description: 'Done-for-you SEO and lead generation for UK local service businesses. New leads within 4 weeks or your money back. Or run the exact tools we use yourself.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/og', width: 1200, height: 630, alt: 'The Catalyst Method — more leads for local service businesses' }],
    siteName: 'The Catalyst Method',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'More Leads for Local Service Businesses | The Catalyst Method',
    description: 'Done-for-you SEO and lead generation for UK local service businesses. Or run the exact tools we use yourself.',
    images: ['https://www.thecatalystmethod.co.uk/og'],
  },
}

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

/* ── Blog fetch (latest 3) ── */
type Article = {
  slug: string
  title: string
  description?: string
  image?: string
  category?: { title?: string }
  publishedAt?: string
  readingTime?: number
}

type DisplayArticle = {
  slug: string
  title: string
  description?: string
  image?: string
  category?: string
  publishedAt?: string
  readingTime?: number
}

const HIDDEN_SLUGS = new Set(['grow-pt-academy-100k-per-year'])

async function getLatestArticles(): Promise<DisplayArticle[]> {
  let fromSeobot: DisplayArticle[] = []
  try {
    const { BlogClient } = await import('seobot')
    const client = new BlogClient(process.env.SEOBOT_API_KEY || '')
    const result = await client.getArticles(0, 50) as { articles: Article[]; total: number }
    fromSeobot = result.articles
      .filter(a => !HIDDEN_SLUGS.has(a.slug))
      .map(a => ({
        slug: a.slug,
        title: a.title,
        description: a.description,
        image: a.image,
        category: a.category?.title,
        publishedAt: a.publishedAt,
        readingTime: a.readingTime,
      }))
  } catch {
    fromSeobot = []
  }

  const fromManual: DisplayArticle[] = manualPosts.map(p => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    image: p.image,
    category: p.category,
    publishedAt: p.publishedAt,
    readingTime: p.readingTime,
  }))

  return [...fromSeobot, ...fromManual]
    .sort((a, b) => {
      if (!a.publishedAt) return 1
      if (!b.publishedAt) return -1
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })
    .slice(0, 3)
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': 'https://www.thecatalystmethod.co.uk/#organization',
      name: 'The Catalyst Method',
      url: 'https://www.thecatalystmethod.co.uk',
      logo: { '@type': 'ImageObject', url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' },
      email: 'hey@thecatalystmethod.co.uk',
      description: 'Done-for-you SEO and lead generation system for local service businesses across the UK.',
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      priceRange: '£££',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.thecatalystmethod.co.uk/#website',
      url: 'https://www.thecatalystmethod.co.uk',
      name: 'The Catalyst Method',
      publisher: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
    },
    {
      '@type': 'Service',
      name: 'Done-For-You SEO and Lead Generation',
      serviceType: 'Local SEO and lead generation',
      provider: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      description: 'We get local service businesses more leads from Google. New leads within 4 weeks or your money back.',
      offers: { '@type': 'Offer', price: '500', priceCurrency: 'GBP' },
    },
  ],
}

/* ── The two recurring CTA buttons ── */
function LeadCtas({ center = true }: { center?: boolean }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: center ? 'center' : 'flex-start' }}>
      <Link
        href="/the-agency-vault"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.22)',
          color: '#fff', borderRadius: 11, padding: '16px 30px',
          fontFamily: "'Montserrat', sans-serif", fontSize: '0.95rem', fontWeight: 800,
          textDecoration: 'none', letterSpacing: '0.01em',
        }}
      >
        <svg width="13" viewBox="0 0 18 30" style={{ fill: 'var(--gold)', flexShrink: 0 }}><path d={BOLT} /></svg>
        Get More Leads Yourself
      </Link>
      <Link href="/we-get-you-leads" className="cta-btn" style={{ padding: '16px 32px' }}>
        <svg viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
        We Get You More Leads
      </Link>
    </div>
  )
}

export default async function HomePage() {
  const posts = await getLatestArticles()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className="hero hero-home" style={{ paddingBottom: 72 }}>
        <SiteNav />
        <div className="bolts-bg" aria-hidden="true">
          {[1,2,3,4,5,6,7,8].map(n => (
            <svg key={n} className={`bolt b${n}`} viewBox="0 0 18 30">
              <path fill="currentColor" d={BOLT} />
            </svg>
          ))}
        </div>

        <div className="hero-inner">
          <div className="brand-tag">
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            Lead Generation for Local Service Businesses
          </div>

          <h1>More Leads For Your<br />Local Service <em>Business.</em></h1>
          <p className="subtitle" style={{ marginBottom: 38 }}>
            We get UK local service businesses found on Google and turn those clicks into booked jobs. Done for you, or with the exact tools we use ourselves.
          </p>

          <LeadCtas />

          <div className="input-meta" style={{ marginTop: 28 }}>
            <span className="input-meta-item">+297% traffic growth</span>
            <span className="input-meta-item">£1M+ revenue driven</span>
            <span className="input-meta-item">Money-back guarantee</span>
            <span className="input-meta-item">UK based</span>
          </div>
        </div>
      </section>

      {/* ── PROOF STRIP ── */}
      <div style={{ background: 'rgba(0,0,0,0.25)', borderTop: '1px solid rgba(255,215,0,0.12)', borderBottom: '1px solid rgba(255,215,0,0.12)', padding: '28px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', marginBottom: 18 }}>
            Real results for real local businesses
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 48px', justifyContent: 'center', rowGap: 16 }}>
            {[
              { num: '+297%', desc: 'Website Traffic' },
              { num: '720',   desc: 'Monthly Users from SEO' },
              { num: '+240%', desc: 'New Users' },
              { num: '£0',    desc: 'Paid Advertising' },
            ].map(p => (
              <div key={p.desc} style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontFamily: "'Montserrat',sans-serif", fontSize: '1.6rem', fontWeight: 900, color: 'var(--gold)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 3 }}>{p.num}</span>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', fontFamily: "'Montserrat',sans-serif" }}>{p.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>

        {/* ── PROBLEMS ── */}
        <div style={{ padding: '76px 0 0' }}>
          <div className="brand-tag" style={{ marginBottom: 22 }}>
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            The Problem
          </div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            Why Most Local Businesses <em>Stay Invisible.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.82, maxWidth: 560, marginBottom: 44 }}>
            You are great at what you do. But being good at the job and getting found by customers are two completely different things. Here is what is quietly costing you leads every single month.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
            {[
              { n: '01', title: 'Nobody Can Find You', text: 'You are buried below competitors in Google and nowhere to be seen in the local map results. If customers cannot find you, they hire whoever they do find instead.' },
              { n: '02', title: 'Your Site Does Not Convert', text: 'The few visitors you do get land on a slow, confusing page with no clear next step and nothing that builds trust. They leave in seconds and never come back.' },
              { n: '03', title: 'No System to Follow Up', text: 'Leads come in once, get a single reply, then go cold. With no nurture system in place, the people who were interested quietly drift to someone else.' },
            ].map(c => (
              <div key={c.n} style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '28px 22px' }}>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>Problem {c.n}</div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.92rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: 10, lineHeight: 1.2 }}>{c.title}</div>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.78 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SOLUTION ── */}
        <div style={{ padding: '76px 0 0' }}>
          <div className="brand-tag" style={{ marginBottom: 22 }}>
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            The Solution
          </div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            Two Ways To Get <em>More Leads.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.82, maxWidth: 560, marginBottom: 44 }}>
            Whether you want it all handled for you or you would rather roll up your sleeves, there is a path for you. Same proven system either way.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 16 }}>
            {/* Done for you */}
            <div style={{ background: 'rgba(255,215,0,0.06)', border: '1.5px solid rgba(255,215,0,0.32)', borderRadius: 18, padding: '34px 30px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 10 }}>Done For You</div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 10 }}>We Get You More Leads</div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.78, marginBottom: 20 }}>
                We take over the lot. Your Google profile, your website, your content and your follow-up. You run your business while the leads come in.
              </p>
              <ul style={{ listStyle: 'none', margin: '0 0 26px', padding: 0, flex: 1 }}>
                {['Full done-for-you SEO and lead gen', 'Brand new high-converting website', 'New leads within 4 weeks or money back'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.84rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, padding: '7px 0' }}>
                    <svg width="11" viewBox="0 0 18 30" style={{ fill: 'var(--gold)', flexShrink: 0, marginTop: 3 }}><path d={BOLT} /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/we-get-you-leads" className="cta-btn" style={{ width: '100%', justifyContent: 'center' }}>
                <svg viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
                We Get You More Leads
              </Link>
            </div>

            {/* Do it yourself */}
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.12)', borderRadius: 18, padding: '34px 30px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>Do It Yourself</div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 10 }}>Get More Leads Yourself</div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.78, marginBottom: 20 }}>
                Prefer to run it yourself? The Agency Vault hands you the exact 20 AI skills we use every day to build sites, run SEO and win leads. One payment, keep forever.
              </p>
              <ul style={{ listStyle: 'none', margin: '0 0 26px', padding: 0, flex: 1 }}>
                {['20 AI skills for design, SEO and sales', 'The exact tools we use on clients', 'One payment of £97. Yours forever'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.84rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, padding: '7px 0' }}>
                    <svg width="11" viewBox="0 0 18 30" style={{ fill: 'var(--gold)', flexShrink: 0, marginTop: 3 }}><path d={BOLT} /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/the-agency-vault"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%',
                  background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.22)',
                  color: '#fff', borderRadius: 10, padding: '16px 24px',
                  fontFamily: "'Montserrat', sans-serif", fontSize: '0.95rem', fontWeight: 800, textDecoration: 'none',
                }}
              >
                <svg width="13" viewBox="0 0 18 30" style={{ fill: 'var(--gold)', flexShrink: 0 }}><path d={BOLT} /></svg>
                Get More Leads Yourself
              </Link>
            </div>
          </div>
        </div>

        {/* ── ROADMAP ── */}
        <div style={{ padding: '76px 0 0' }}>
          <div className="brand-tag" style={{ marginBottom: 22 }}>
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            How It Works
          </div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            Your Roadmap To <em>More Leads.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.82, maxWidth: 560, marginBottom: 44 }}>
            No jargon, no guesswork. Four clear steps from where you are now to a steady stream of enquiries landing in your inbox.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(168px, 1fr))', gap: 10 }}>
            {[
              { step: '01', title: 'Free Audit', text: 'Start with a free 16-point website audit. In 10 seconds you see exactly what is stopping your site from ranking and winning customers.' },
              { step: '02', title: 'Fix the Foundations', text: 'We rebuild your Google profile, your website and your content so Google understands you and customers trust you the moment they land.' },
              { step: '03', title: 'Rank and Convert', text: 'You climb the local rankings for the searches your customers actually make, and your site is built to turn those visitors into enquiries.' },
              { step: '04', title: 'Leads on Autopilot', text: 'New enquiries land in your inbox and an automated follow-up system keeps them warm until they are ready to buy. You just do the work.' },
            ].map(s => (
              <div key={s.step} style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '24px 20px' }}>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>Step {s.step}</div>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <svg width="14" viewBox="0 0 18 30" style={{ fill: 'var(--gold)' }}><path d={BOLT} /></svg>
                </div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: 8 }}>{s.title}</div>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.52)', lineHeight: 1.72 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MID CTA (woven buttons #2) ── */}
      <div style={{ padding: '76px 24px 0' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div className="cta-block" style={{ marginTop: 0 }}>
            <svg className="cta-bolt-l" viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
            <svg className="cta-bolt-r" viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
            <div className="cta-block-inner" style={{ textAlign: 'center' }}>
              <h2>Ready to stop losing leads?</h2>
              <p>Pick your path. We handle everything for you, or you grab the exact tools we use and run it yourself.</p>
              <LeadCtas />
            </div>
          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS / CASE STUDIES ── */}
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '76px 24px 0' }}>
        <div className="brand-tag" style={{ marginBottom: 22 }}>
          <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
          Proof It Works
        </div>
        <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
          Real Local Businesses. <em>Real Growth.</em>
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.82, maxWidth: 560, marginBottom: 44 }}>
          We do not just talk about leads. Here are two local businesses we grew with the exact system above, both with zero spend on paid ads.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 16 }}>
          {/* Creation Coffee */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 18, padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>Case Study · Creation Coffee</div>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 22 }}>
              &ldquo;We went from barely showing up on Google to a flood of new traffic and orders in 90 days, without spending a penny on ads.&rdquo;
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden', marginBottom: 22 }}>
              {[
                { num: '+297%', label: 'Website Traffic' },
                { num: '+277%', label: 'Search Impressions' },
                { num: '+293%', label: 'Google Clicks' },
                { num: '+240%', label: 'New Users' },
              ].map(s => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.03)', padding: '16px 12px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '1.3rem', fontWeight: 900, color: '#6EE7B7', lineHeight: 1, marginBottom: 4 }}>{s.num}</div>
                  <div style={{ fontSize: '0.66rem', color: 'rgba(255,255,255,0.42)' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <a href="/case-study-creation-coffee.html" style={{ marginTop: 'auto', fontSize: '0.82rem', color: 'var(--gold)', fontWeight: 700, textDecoration: 'none' }}>Read the full story →</a>
          </div>

          {/* Fitness Coach */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 18, padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>Case Study · Fitness Coach</div>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 22 }}>
              &ldquo;I went from invisible online to fully booked with clients who found me on Google. The enquiries just kept coming in.&rdquo;
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden', marginBottom: 22 }}>
              {[
                { num: '181→720', label: 'Monthly Users' },
                { num: '90 days', label: 'To Get There' },
                { num: 'Page 1', label: 'Local Rankings' },
                { num: '£0', label: 'Paid Ads' },
              ].map(s => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.03)', padding: '16px 12px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '1.3rem', fontWeight: 900, color: '#6EE7B7', lineHeight: 1, marginBottom: 4 }}>{s.num}</div>
                  <div style={{ fontSize: '0.66rem', color: 'rgba(255,255,255,0.42)' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <a href="/case-study-fitness-coach-chronicle.html" style={{ marginTop: 'auto', fontSize: '0.82rem', color: 'var(--gold)', fontWeight: 700, textDecoration: 'none' }}>Read the full story →</a>
          </div>
        </div>
      </div>

      {/* ── BLOG ── */}
      {posts.length > 0 && (
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '76px 24px 0' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 32 }}>
            <div>
              <div className="brand-tag" style={{ marginBottom: 18 }}>
                <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
                Learn The Playbook
              </div>
              <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Free Local SEO and Lead Gen <em>Guides.</em>
              </h2>
            </div>
            <Link href="/blog" style={{ fontSize: '0.85rem', color: 'var(--gold)', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>View all articles →</Link>
          </div>

          <div className="blog-grid">
            {posts.map(article => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="blog-card">
                {article.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="blog-card-img" src={article.image} alt={article.title} />
                )}
                <div className="blog-card-body">
                  {article.category && <div className="blog-card-category">{article.category}</div>}
                  <div className="blog-card-title">{article.title}</div>
                  {article.description && <div className="blog-card-excerpt">{article.description}</div>}
                  <div className="blog-card-meta">
                    {article.publishedAt && new Date(article.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    {article.readingTime && ` · ${article.readingTime} min read`}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ── FINAL CTA (woven buttons #3) ── */}
      <div style={{ padding: '76px 24px 100px', background: 'radial-gradient(ellipse at 50% 100%, rgba(0,85,133,0.25) 0%, transparent 65%)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div className="cta-block" style={{ marginTop: 0 }}>
            <svg className="cta-bolt-l" viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
            <svg className="cta-bolt-r" viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
            <div className="cta-block-inner" style={{ textAlign: 'center' }}>
              <div className="brand-tag" style={{ marginBottom: 20 }}>
                <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
                Let&apos;s Get You More Leads
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.1rem)' }}>
                Your Competitors Are Getting<br />The Leads You Should Have.
              </h2>
              <p>
                Every month your site stays broken is money walking out the door. Hand it to us, or take the tools and do it yourself. Either way, it starts today.
              </p>
              <LeadCtas />
              <p className="cta-reassurance" style={{ marginTop: 18 }}>
                New leads within 4 weeks or your money back · One-time £97 toolkit option
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

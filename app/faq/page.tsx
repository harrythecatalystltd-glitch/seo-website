import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'

export const metadata: Metadata = {
  title: 'FAQs | The Catalyst Method: Local SEO & Lead Generation',
  description: 'Your questions answered: how The Catalyst Method works, what results to expect, and how local SEO gets UK small businesses more enquiries from Google.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/faq' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/faq',
    title: 'FAQs | The Catalyst Method: Local SEO & Lead Generation',
    description: 'Common questions about The Catalyst Method: local SEO, lead generation, lead magnets, and getting more enquiries from your website.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' }],
    siteName: 'The Catalyst Method',
  },
}

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

const CATEGORIES = [
  {
    label: 'About The Catalyst Method',
    faqs: [
      {
        q: 'What is The Catalyst Method?',
        a: 'The Catalyst Method is a lead generation system for UK small businesses. It combines local Google rankings, targeted SEO content, and website conversion design to attract visitors and turn them into high-quality enquiries. It is not a single tactic. It is a structured system built around three stages: Attract, Convert, and Deliver.',
      },
      {
        q: 'Who is The Catalyst Method for?',
        a: 'It is built for UK small and local businesses: tradespeople, consultants, service businesses, and local professionals who want their website to consistently generate enquiries from Google rather than just sitting there. If you rely on word of mouth and want to add a reliable online channel, this is designed for you.',
      },
      {
        q: 'What makes this different from just doing SEO?',
        a: 'Traditional SEO focuses on getting traffic. The Catalyst Method focuses on getting leads. Traffic without conversion is wasted. We combine ranking improvements with the website design, CTAs, and lead magnets needed to actually convert that traffic into enquiries. More visits means nothing if visitors leave without getting in touch.',
      },
      {
        q: 'Do I need a new website?',
        a: 'Not necessarily. The Catalyst Method can be applied to an existing website through targeted improvements: fixing your page structure, adding a lead magnet, improving your calls to action, and optimising your content. Our free audit tells you exactly what\'s working, what\'s missing, and what it\'s costing you in lost leads every month.',
      },
    ],
  },
  {
    label: 'Lead Generation',
    faqs: [
      {
        q: 'What is a lead magnet?',
        a: 'A lead magnet is a free resource, tool, or offer that gives website visitors a reason to engage with your business before they\'re ready to buy. Only around 3% of visitors are ready to enquire immediately. A good lead magnet captures the other 97% and keeps them in your world until they are ready. Examples include a free audit, a downloadable guide, a checklist, or a free consultation.',
      },
      {
        q: 'What is the difference between a hard CTA and a soft CTA?',
        a: 'A hard CTA asks for a high-commitment action: "Get a Quote", "Book a Call", "Sign Up Now". It works well for visitors who are ready to buy. A soft CTA asks for a low-commitment action: "Download the free guide", "Get your free audit", "See how it works". It works for visitors who are interested but not yet ready. You need both on your website, placed at the right moments, or you\'re leaving leads behind at both ends.',
      },
      {
        q: 'Why isn\'t my website generating leads even though I get visitors?',
        a: 'The most common reasons are: no clear call to action above the fold, copy that talks about the business rather than the customer\'s problem, no lead magnet to capture visitors who aren\'t ready to buy, slow page load speed, no trust signals like reviews or credentials, and poor mobile experience. Our free audit checks all 16 of these factors and scores your site instantly.',
      },
      {
        q: 'How many leads should I expect from my website?',
        a: 'That depends on your traffic, your industry, and your conversion rate. A well-optimised local business website typically converts between 2 and 5% of visitors into enquiries. If you\'re getting 300 visitors a month and converting 1%, that\'s 3 leads. Fix the conversion rate to 4% and it\'s 12 leads from the same traffic, without spending more on ads.',
      },
    ],
  },
  {
    label: 'Local SEO & Google Rankings',
    faqs: [
      {
        q: 'What is local SEO?',
        a: 'Local SEO is the process of optimising your website and online presence so that you appear in Google when people in your area search for your service. This includes on-page SEO (your website content and structure), Google Business Profile optimisation, and building local authority through targeted content. It is the primary channel The Catalyst Method uses to bring relevant, high-intent traffic to your website.',
      },
      {
        q: 'How long does it take to rank on Google?',
        a: 'For new or poorly-optimised websites, meaningful local rankings typically start to appear within 3 to 6 months of consistent SEO work. Quick wins in that time include fixing technical issues, optimising your Google Business Profile, and improving page titles and headings. SEO is a long-term investment, but unlike paid ads, the results compound and continue working without ongoing spend.',
      },
      {
        q: 'Do I need a Google Business Profile?',
        a: 'Yes. For local businesses, your Google Business Profile (GBP) is one of the highest-value assets you have. It is what appears in the map pack when someone searches for your service nearby. An optimised GBP with photos, reviews, accurate categories, and regular posts can drive significant enquiries on its own, separate from your website rankings.',
      },
      {
        q: 'What kind of content helps with local Google rankings?',
        a: 'Content that targets specific, local search terms your customers actually use. Not generic "about us" pages, but location-specific service pages ("plumber in Manchester"), question-based blog posts answering what your customers search, and comparison content that captures people who are evaluating options. The Catalyst Method builds this content strategically, mapped to real search data.',
      },
    ],
  },
  {
    label: 'Results & Expectations',
    faqs: [
      {
        q: 'How long before I see results?',
        a: 'Some improvements show results within weeks. Fixing your CTAs, adding a lead magnet, tidying up your Google Business Profile, and improving page speed can all move the needle quickly. SEO content builds over months. The system is designed for steady, compounding growth rather than a short-term spike that disappears.',
      },
      {
        q: 'Can I see what\'s wrong with my website before committing to anything?',
        a: 'The free website audit on our home page runs 16 checks in seconds and gives you a scored breakdown of every issue, what it means, and roughly how many leads it\'s costing you every month. No sign-up required. It\'s the fastest way to see exactly where your website is falling short.',
      },
      {
        q: 'What results have other businesses seen?',
        a: 'Results depend on the starting point, the industry, and the local competition. Businesses that implement the full Catalyst Method system, including SEO content, an optimised website, a lead magnet, and strong CTAs, typically see a meaningful increase in website enquiries within 3 to 6 months. We share real case studies on our blog.',
      },
    ],
  },
  {
    label: 'Getting Started',
    faqs: [
      {
        q: 'What is the first step?',
        a: 'Run the free website audit. It takes 10 seconds, checks 16 key factors, and shows you exactly where you\'re losing leads right now. From there, you\'ll have a clear picture of what needs fixing and we can talk about the best way to address it.',
      },
      {
        q: 'How do I work with The Catalyst Method?',
        a: 'Start with the free audit to understand your current position. Then explore our plans on the Sign Up page. We work with local businesses at different stages, from a done-with-you setup to a fully managed service. Get in touch if you\'re not sure which option fits best.',
      },
      {
        q: 'Is there a contract?',
        a: 'Details vary by plan. See the Sign Up page or get in touch for specifics. We don\'t believe in locking people into long contracts they can\'t get out of. The goal is to deliver results that make you want to stay.',
      },
    ],
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.thecatalystmethod.co.uk/#organization',
      name: 'The Catalyst Method',
      url: 'https://www.thecatalystmethod.co.uk',
      logo: { '@type': 'ImageObject', url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' },
      email: 'hey@thecatalystmethod.co.uk',
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.thecatalystmethod.co.uk/faq',
      url: 'https://www.thecatalystmethod.co.uk/faq',
      name: 'FAQs: The Catalyst Method',
      description: 'Frequently asked questions about The Catalyst Method: local SEO and lead generation for UK small businesses.',
      publisher: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
      inLanguage: 'en-GB',
      mainEntity: CATEGORIES.flatMap(cat =>
        cat.faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        }))
      ),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thecatalystmethod.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.thecatalystmethod.co.uk/faq' },
      ],
    },
  ],
}

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── Hero ─────────────────────────────────────── */}
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
            The Catalyst Method | FAQ
          </div>
          <h1>Local SEO &amp; Lead Generation <em>FAQs for UK Small Businesses</em></h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.7,
            maxWidth: '540px',
            margin: '0 auto',
            fontFamily: "'Open Sans', sans-serif",
          }}>
            Everything you need to know about The Catalyst Method: local SEO, lead generation, and how to turn your website into a consistent source of enquiries.
          </p>
        </div>
      </section>

      {/* ── FAQ Categories ────────────────────────────── */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '72px 24px 80px' }}>

        {/* Jump links */}
        <div style={{
          display: 'flex', gap: '10px', flexWrap: 'wrap',
          marginBottom: '56px', justifyContent: 'center',
        }}>
          {CATEGORIES.map(cat => (
            <a
              key={cat.label}
              href={`#${cat.label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
              style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '100px',
                padding: '8px 16px',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.74rem', fontWeight: 700,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
                textDecoration: 'none',
              }}
            >
              {cat.label}
            </a>
          ))}
        </div>

        {/* Categories */}
        {CATEGORIES.map((cat, ci) => (
          <section
            key={cat.label}
            id={cat.label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}
            style={{ marginBottom: ci < CATEGORIES.length - 1 ? '64px' : 0 }}
          >
            {/* Category header */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '14px',
              marginBottom: '24px',
            }}>
              <div style={{
                width: '28px', height: '28px',
                background: 'rgba(255,215,0,0.12)',
                borderRadius: '7px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="10" viewBox="0 0 18 30" fill="#FFD700"><path d={BOLT} /></svg>
              </div>
              <h2 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.8rem', fontWeight: 800,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#FFD700',
                margin: 0,
              }}>
                {cat.label}
              </h2>
              <div style={{
                flex: 1, height: '1px',
                background: 'rgba(255,255,255,0.07)',
              }} />
            </div>

            {/* Questions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {cat.faqs.map(({ q, a }) => (
                <div key={q} style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '24px 28px',
                }}>
                  <h3 style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1rem', fontWeight: 800,
                    color: '#FFFFFF',
                    marginBottom: '12px',
                    lineHeight: 1.3,
                  }}>
                    {q}
                  </h3>
                  <p style={{
                    fontSize: '0.93rem',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.75,
                    fontFamily: "'Open Sans', sans-serif",
                    margin: 0,
                  }}>
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <div style={{
          marginTop: '64px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,215,0,0.2)',
          borderRadius: '16px',
          padding: '48px 36px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 50% 0%, rgba(255,215,0,0.06) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <svg style={{ position: 'absolute', top: 20, left: 28, width: 26, opacity: 0.12, fill: '#FFD700' }} viewBox="0 0 18 30"><path d={BOLT} /></svg>
          <svg style={{ position: 'absolute', top: 20, right: 28, width: 26, opacity: 0.12, fill: '#FFD700' }} viewBox="0 0 18 30"><path d={BOLT} /></svg>

          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 900, lineHeight: 1.2,
            letterSpacing: '-0.025em', color: '#FFFFFF',
            marginBottom: '14px', position: 'relative',
          }}>
            Still have a question?
          </h2>
          <p style={{
            fontSize: '0.98rem', color: 'rgba(255,255,255,0.58)',
            lineHeight: 1.7, maxWidth: '460px',
            margin: '0 auto 32px',
            fontFamily: "'Open Sans', sans-serif",
            position: 'relative',
          }}>
            Get in touch, or run the free audit to see exactly what your website is missing right now.
          </p>
          <div style={{
            display: 'flex', gap: '14px',
            justifyContent: 'center', flexWrap: 'wrap',
            position: 'relative',
          }}>
            <Link href="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#FFD700', color: '#002B45',
              fontFamily: "'Montserrat', sans-serif", fontWeight: 800,
              fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase',
              padding: '15px 28px', borderRadius: '8px', textDecoration: 'none',
            }}>
              <svg width="10" viewBox="0 0 18 30" fill="currentColor"><path d={BOLT} /></svg>
              Get Your Free Audit
            </Link>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.18)',
              color: 'rgba(255,255,255,0.72)',
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase',
              padding: '15px 28px', borderRadius: '8px', textDecoration: 'none',
            }}>
              Ask My Question
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

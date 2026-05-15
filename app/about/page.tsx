import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'

export const metadata: Metadata = {
  title: 'Local SEO and Lead Generation for UK Small Businesses | The Catalyst Method',
  description: 'Lead generation for UK small businesses: local SEO, targeted content and website conversion design working together to deliver a consistent flow of enquiries.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/about' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/about',
    title: 'Local SEO and Lead Generation for UK Small Businesses | The Catalyst Method',
    description: 'A proven local SEO and lead generation system that turns your small business website into a consistent source of high-quality enquiries.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' }],
    siteName: 'The Catalyst Method',
  },
  keywords: [
    'The Catalyst Method',
    'lead generation for local businesses',
    'local SEO small businesses UK',
    'website lead generation',
    'local Google ranking',
    'lead magnet website',
    'small business SEO UK',
    'website enquiries',
    'local business marketing',
    'Google ranking for small businesses',
  ],
}

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

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
      description: 'Lead generation system for UK small businesses built from first-hand experience scaling a local business to over £1M in revenue through local SEO, targeted content, and conversion design.',
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
    },
    {
      '@type': 'AboutPage',
      '@id': 'https://www.thecatalystmethod.co.uk/about',
      url: 'https://www.thecatalystmethod.co.uk/about',
      name: 'What Is The Catalyst Method?',
      description: 'The Catalyst Method is a lead generation system for UK small businesses combining local Google rankings, targeted SEO content, and website conversion design.',
      publisher: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thecatalystmethod.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.thecatalystmethod.co.uk/about' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is The Catalyst Method?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Catalyst Method is a lead generation system for UK small businesses. It combines local Google rankings, targeted SEO content, and website conversion design to attract visitors and turn them into high-quality enquiries.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does The Catalyst Method generate leads?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The system works in three stages: Attract (get found on Google through local SEO and targeted content), Convert (turn visitors into leads using lead magnets, strong CTAs, and clear website design), and Deliver (consistent high-quality enquiries from people actively searching for your service).',
          },
        },
        {
          '@type': 'Question',
          name: 'Who is The Catalyst Method for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Catalyst Method is built for UK small and local businesses that want to generate more enquiries from their website. It works particularly well for service businesses, tradespeople, consultants, and local professionals.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a lead magnet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A lead magnet is a free resource or tool that gives website visitors a reason to engage with your business before they are ready to buy. Only around 3% of visitors are ready to buy immediately. A lead magnet captures the other 97% and keeps them in your world.',
          },
        },
      ],
    },
  ],
}

export default function AboutPage() {
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
            The Catalyst Method | About
          </div>
          <h1>Local SEO and Lead Generation<br />for <em>UK Small Businesses</em></h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.65,
            maxWidth: '580px',
            margin: '0 auto 36px',
            fontFamily: "'Open Sans', sans-serif",
          }}>
            The Catalyst Method is a local SEO and lead generation system that turns your website into your best salesperson, attracting local customers from Google and converting them into real, high-quality enquiries.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#FFD700', color: '#002B45',
              fontFamily: "'Montserrat', sans-serif", fontWeight: 800,
              fontSize: '0.88rem', letterSpacing: '0.04em', textTransform: 'uppercase',
              padding: '14px 28px', borderRadius: '8px', textDecoration: 'none',
              transition: 'opacity 0.15s',
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
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* ── The Problem ────────────────────────────────── */}
      <section style={{ padding: '72px 24px 0', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '48px 40px',
        }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#FFD700', marginBottom: '20px',
          }}>
            The Problem
          </p>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
            fontWeight: 900, lineHeight: 1.15,
            letterSpacing: '-0.025em',
            color: '#FFFFFF', marginBottom: '20px',
          }}>
            Most small business websites don&apos;t generate leads.
          </h2>
          <p style={{
            fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.75, marginBottom: '16px',
            fontFamily: "'Open Sans', sans-serif",
          }}>
            They sit on the internet, pick up the odd visit, and convert almost none of it. Not because the business is bad, but because the website was not built to do the job.
          </p>
          <p style={{
            fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.75,
            fontFamily: "'Open Sans', sans-serif",
          }}>
            No clear structure. No reason for visitors to stay. No path to get in touch. And no visibility on Google where your customers are actually searching.
          </p>
          <p style={{
            fontSize: '1.05rem', color: 'rgba(255,255,255,0.82)',
            lineHeight: 1.75, marginTop: '20px', fontWeight: 600,
            fontFamily: "'Open Sans', sans-serif",
          }}>
            The Catalyst Method was built to fix exactly that.
          </p>
        </div>
      </section>

      {/* ── Three Pillars ──────────────────────────────── */}
      <section style={{ padding: '72px 24px 0', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#FFD700', marginBottom: '16px',
          }}>
            The System
          </p>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.6rem, 3.8vw, 2.4rem)',
            fontWeight: 900, lineHeight: 1.12,
            letterSpacing: '-0.03em', color: '#FFFFFF',
          }}>
            Attract. Convert. Deliver.
          </h2>
          <p style={{
            fontSize: '1rem', color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.65, maxWidth: '560px', margin: '16px auto 0',
            fontFamily: "'Open Sans', sans-serif",
          }}>
            Three stages. Each one builds on the last. Together they create a consistent flow of local enquiries from your website.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {[
            {
              num: '01',
              title: 'Attract',
              sub: 'Get found on Google',
              body: 'Local SEO, targeted content, and Google Business Profile optimisation, so the right people find you when they search for what you do.',
              keywords: 'Local rankings · Keyword content · Search visibility',
            },
            {
              num: '02',
              title: 'Convert',
              sub: 'Turn visitors into leads',
              body: 'Strong visual design, clear calls to action, lead magnets, and copy that speaks directly to your customer\'s problem, so visitors don\'t just browse, they get in touch.',
              keywords: 'Lead magnets · CTAs · Conversion design',
            },
            {
              num: '03',
              title: 'Deliver',
              sub: 'High-quality enquiries',
              body: 'Real leads from people actively searching for your service in your area. Not cold traffic, not ad clicks. Genuine enquiries landing in your inbox.',
              keywords: 'Local leads · Qualified enquiries · Consistent flow',
            },
          ].map(({ num, title, sub, body, keywords }) => (
            <div key={num} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '14px',
              padding: '32px 28px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: '20px', right: '24px',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '3.5rem', fontWeight: 900,
                color: 'rgba(255,215,0,0.07)',
                lineHeight: 1, userSelect: 'none',
              }}>
                {num}
              </div>
              <div style={{
                width: '36px', height: '36px',
                background: 'rgba(255,215,0,0.12)',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <svg width="14" viewBox="0 0 18 30" fill="#FFD700"><path d={BOLT} /></svg>
              </div>
              <h3 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '1.3rem', fontWeight: 900,
                color: '#FFFFFF', marginBottom: '4px',
              }}>
                {title}
              </h3>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#FFD700', marginBottom: '16px',
              }}>
                {sub}
              </p>
              <p style={{
                fontSize: '0.95rem', color: 'rgba(255,255,255,0.62)',
                lineHeight: 1.7, marginBottom: '20px',
                fontFamily: "'Open Sans', sans-serif",
              }}>
                {body}
              </p>
              <p style={{
                fontSize: '0.75rem', color: 'rgba(255,215,0,0.5)',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700, letterSpacing: '0.04em',
              }}>
                {keywords}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Core Fundamentals ─────────────────────────── */}
      <section style={{ padding: '72px 24px 0', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#FFD700', marginBottom: '16px',
          }}>
            The Fundamentals
          </p>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.6rem, 3.8vw, 2.4rem)',
            fontWeight: 900, lineHeight: 1.12,
            letterSpacing: '-0.03em', color: '#FFFFFF',
          }}>
            Four things every<br />lead-generating website needs
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '16px' }}>
          {[
            {
              icon: '🧲',
              title: 'A Lead Magnet',
              body: 'Only 3% of visitors are ready to buy on first contact. A good lead magnet (a free tool, guide, or audit) gives the other 97% a reason to stay in your world until they are ready. That\'s the difference between a one-time visit and a future customer.',
            },
            {
              icon: '📣',
              title: 'Hard & Soft CTAs',
              body: 'Not every visitor is at the same stage. A soft CTA (download this, get your free audit) captures people who aren\'t quite ready. A hard CTA (book a call, get a quote) converts those who are. You need both, in the right places, or you\'re leaving leads on the table.',
            },
            {
              icon: '🔍',
              title: 'Targeted SEO Content',
              body: 'Content that ranks for the exact searches your local customers make. Specific, high-intent pages and articles built around the keywords that bring in buyers. Combined with Google Business Profile optimisation for local visibility.',
            },
            {
              icon: '✦',
              title: 'Strong Design. Easy Copy.',
              body: 'First impressions decide in under 3 seconds. The design needs to look credible and professional. The copy needs to be short, clear, and about the customer\'s problem, not a list of your qualifications. Both things together build the trust that gets people to enquire.',
            },
          ].map(({ icon, title, body }) => (
            <div key={title} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '14px',
              padding: '28px 28px',
              display: 'flex',
              gap: '20px',
              alignItems: 'flex-start',
            }}>
              <div style={{
                fontSize: '1.6rem',
                lineHeight: 1,
                flexShrink: 0,
                marginTop: '2px',
              }}>
                {icon}
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.05rem', fontWeight: 800,
                  color: '#FFFFFF', marginBottom: '10px',
                }}>
                  {title}
                </h3>
                <p style={{
                  fontSize: '0.92rem', color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.72,
                  fontFamily: "'Open Sans', sans-serif",
                }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It All Connects ────────────────────────── */}
      <section style={{ padding: '72px 24px 0', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(0,85,133,0.25) 0%, rgba(0,43,69,0.4) 100%)',
          border: '1px solid rgba(255,215,0,0.15)',
          borderRadius: '16px',
          padding: '48px 40px',
          textAlign: 'center',
        }}>
          <div style={{
            width: '44px', height: '44px',
            background: 'rgba(255,215,0,0.12)',
            borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px',
          }}>
            <svg width="16" viewBox="0 0 18 30" fill="#FFD700"><path d={BOLT} /></svg>
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 900, lineHeight: 1.2,
            letterSpacing: '-0.025em', color: '#FFFFFF',
            marginBottom: '20px',
          }}>
            How it all connects
          </h2>
          <p style={{
            fontSize: '1rem', color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.8, marginBottom: '16px',
            fontFamily: "'Open Sans', sans-serif",
            maxWidth: '580px', margin: '0 auto 16px',
          }}>
            The Catalyst Method works because each element reinforces the others. Your SEO content brings local visitors to the site. The design makes them stay. The lead magnet captures the ones who aren&apos;t ready yet. The CTAs convert the ones who are.
          </p>
          <p style={{
            fontSize: '1rem', color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.8, marginBottom: '16px',
            fontFamily: "'Open Sans', sans-serif",
            maxWidth: '580px', margin: '0 auto 16px',
          }}>
            It&apos;s not a single tactic. It is a system, and systems compound. The longer it runs, the more Google trusts the site, the more content builds authority, and the more consistent the flow of enquiries becomes.
          </p>
          <p style={{
            fontSize: '1rem', color: 'rgba(255,255,255,0.82)',
            lineHeight: 1.8, fontWeight: 600,
            fontFamily: "'Open Sans', sans-serif",
            maxWidth: '560px', margin: '20px auto 0',
          }}>
            Built for UK small businesses. Focused on local Google rankings. Designed to deliver leads, not just traffic.
          </p>
        </div>
      </section>

      {/* ── Built By ──────────────────────────────────── */}
      <section style={{ padding: '48px 24px 0', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '14px',
          padding: '36px 40px',
        }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase' as const,
            color: '#FFD700', marginBottom: '16px',
          }}>
            Our Track Record
          </p>
          <h3 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 900,
            color: '#FFFFFF', marginBottom: '16px', lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}>
            Built from first-hand experience scaling a local business to over £1,000,000 in revenue
          </h3>
          <p style={{
            fontSize: '0.93rem', color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.75, fontFamily: "'Open Sans', sans-serif",
            marginBottom: '16px',
          }}>
            The Catalyst Method was not invented in a marketing agency. It was built from the ground up inside a real local service business, combining local SEO, targeted content, conversion design, and sales systems to generate consistent, qualified leads at scale.
          </p>
          <p style={{
            fontSize: '0.93rem', color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.75, fontFamily: "'Open Sans', sans-serif",
            marginBottom: '24px',
          }}>
            We now apply the same system for UK small businesses. Every element has been tested and refined against real results. If it did not move the needle for real local businesses, it did not make it in.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '16px',
          }}>
            {[
              { stat: '£1M+', label: 'Revenue generated for a single local business' },
              { stat: '+297%', label: 'Organic traffic growth for a local brand in 90 days' },
              { stat: '100%', label: 'Of clients receive their first lead within 4 weeks' },
            ].map(({ stat, label }) => (
              <div key={stat} style={{
                background: 'rgba(255,215,0,0.05)',
                border: '1px solid rgba(255,215,0,0.15)',
                borderRadius: '10px',
                padding: '20px 16px',
                textAlign: 'center' as const,
              }}>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.8rem', fontWeight: 900,
                  color: '#FFD700', lineHeight: 1,
                  marginBottom: '8px',
                }}>
                  {stat}
                </div>
                <div style={{
                  fontSize: '0.76rem', color: 'rgba(255,255,255,0.5)',
                  fontFamily: "'Open Sans', sans-serif",
                  lineHeight: 1.5,
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section style={{ padding: '72px 24px 0', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#FFD700', marginBottom: '16px',
          }}>
            Common Questions
          </p>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)',
            fontWeight: 900, lineHeight: 1.15,
            letterSpacing: '-0.025em', color: '#FFFFFF',
          }}>
            Frequently asked questions
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            {
              q: 'Who is The Catalyst Method for?',
              a: 'It\'s built for UK small and local businesses: tradespeople, consultants, service businesses, and local professionals who want their website to consistently generate enquiries from Google rather than just sitting there.',
            },
            {
              q: 'Do I need a new website?',
              a: 'Not necessarily. The Catalyst Method can be applied to an existing website through targeted improvements. Our free audit tells you exactly what\'s working, what\'s missing, and what it\'s costing you in lost leads every month.',
            },
            {
              q: 'How long before I see results?',
              a: 'Some improvements, like fixing your CTAs, adding a lead magnet, or cleaning up your Google Business Profile, can show results within weeks. SEO content builds over months. The system is designed for steady, compounding growth rather than a short-term spike.',
            },
            {
              q: 'What makes this different from just doing SEO?',
              a: 'Traditional SEO focuses on getting traffic. The Catalyst Method focuses on getting leads. Traffic without conversion is wasted. We combine ranking improvements with the website design, CTAs, and lead magnets needed to actually convert that traffic into enquiries.',
            },
          ].map(({ q, a }) => (
            <div key={q} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              padding: '24px 28px',
            }}>
              <h3 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '1rem', fontWeight: 800,
                color: '#FFFFFF', marginBottom: '10px',
              }}>
                {q}
              </h3>
              <p style={{
                fontSize: '0.93rem', color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.72,
                fontFamily: "'Open Sans', sans-serif",
              }}>
                {a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section style={{ padding: '72px 24px 80px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,215,0,0.2)',
          borderRadius: '16px',
          padding: '52px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 50% 0%, rgba(255,215,0,0.06) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <svg style={{
            position: 'absolute', top: '20px', left: '28px',
            width: '28px', opacity: 0.15,
            fill: '#FFD700',
          }} viewBox="0 0 18 30"><path d={BOLT} /></svg>
          <svg style={{
            position: 'absolute', top: '20px', right: '28px',
            width: '28px', opacity: 0.15,
            fill: '#FFD700',
          }} viewBox="0 0 18 30"><path d={BOLT} /></svg>

          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
            fontWeight: 900, lineHeight: 1.15,
            letterSpacing: '-0.03em', color: '#FFFFFF',
            marginBottom: '16px', position: 'relative',
          }}>
            See what your website is missing
          </h2>
          <p style={{
            fontSize: '1rem', color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7, maxWidth: '500px',
            margin: '0 auto 36px',
            fontFamily: "'Open Sans', sans-serif",
            position: 'relative',
          }}>
            Run a free audit and get a 16-point breakdown of exactly what&apos;s stopping your site from generating leads and what it&apos;s costing you every month.
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
              fontSize: '0.88rem', letterSpacing: '0.04em', textTransform: 'uppercase',
              padding: '16px 32px', borderRadius: '8px', textDecoration: 'none',
            }}>
              <svg width="10" viewBox="0 0 18 30" fill="currentColor"><path d={BOLT} /></svg>
              Get Your Free Website Audit
            </Link>
            <Link href="/signup" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.75)',
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: '0.88rem', letterSpacing: '0.04em', textTransform: 'uppercase',
              padding: '16px 32px', borderRadius: '8px', textDecoration: 'none',
            }}>
              See Pricing &amp; Plans
            </Link>
          </div>

          <p style={{
            fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)',
            marginTop: '20px', position: 'relative',
            fontFamily: "'Open Sans', sans-serif",
          }}>
            Free, no sign-up needed · Results in 10 seconds · 16 checks run instantly
          </p>
        </div>
      </section>
    </>
  )
}

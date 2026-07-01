import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'

export const metadata: Metadata = {
  title: 'FAQ | Confidence & Self-Belief Coaching',
  description: 'Common questions about the free confidence and self-belief coaching on this site: who it is for, how it works, and why it does not cost anything.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/faq' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/faq',
    title: 'FAQ | Confidence & Self-Belief Coaching',
    description: 'Common questions about the free confidence and self-belief coaching on this site.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' }],
    siteName: 'The Catalyst Method',
  },
}

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

const CATEGORIES = [
  {
    label: 'About This Site',
    faqs: [
      {
        q: 'What is The Catalyst Method?',
        a: 'A free confidence and self-belief coaching site. I write weekly tips, blog guides, and reply directly to anyone who reaches out, all built from my own experience working through several genuinely stuck years, not a business selling a programme.',
      },
      {
        q: 'Are you a trained life coach or therapist?',
        a: 'No. I am not a trained life coach or counsellor. I can only help you through the lens of what has actually helped me, from my own journey. If you need trained professional support, please seek that out too, alongside this rather than instead of it.',
      },
      {
        q: 'Why is everything free?',
        a: 'The more I do this work myself, the more I want to give instead of take. Helping other people with what helped me is part of my own journey, not a lead magnet for something I am trying to sell you later. You can read the full story on my about page.',
      },
      {
        q: 'Who is this for?',
        a: 'People who overthink every decision, doubt themselves more than they should, or feel generally stuck without one clear problem to point at. If that sounds familiar, this is for you, whether or not you ever get in touch directly.',
      },
    ],
  },
  {
    label: 'Confidence, Self-Belief & Overthinking',
    faqs: [
      {
        q: 'What is the difference between confidence and self-belief?',
        a: 'Confidence is often situational. You can feel confident in one area and still doubt yourself the moment a real decision is on the line. Self-belief runs deeper: it is the quiet trust that your own judgement is worth listening to, even without proof yet.',
      },
      {
        q: 'Why do I overthink every decision, even small ones?',
        a: 'Usually it is decision fatigue combined with wanting certainty before you act. Every decision uses a bit of mental energy, so by the time a real one shows up, the small stuff and the big stuff start to feel equally heavy. It is not a character flaw, it is a resource running low.',
      },
      {
        q: 'Can this help with imposter syndrome or feeling like a fraud at work?',
        a: 'Yes. It is one of the most common patterns I write about. See the confidence at work page for more on this specifically, or the blog for longer guides.',
      },
      {
        q: 'I do not have one big problem, I just feel generally stuck. Is this still for me?',
        a: 'That is exactly what this site was built for. I spent six years stuck without one dramatic cause, just low mood and going through the motions. Most people who find this site are in that same place, not in the middle of a crisis.',
      },
    ],
  },
  {
    label: 'Getting Started',
    faqs: [
      {
        q: 'What is the first step?',
        a: 'Sign up for the free weekly tips. It is the easiest way to see if what I write actually helps before you decide whether to reach out directly.',
      },
      {
        q: 'What is actually in the weekly emails, versus the blog?',
        a: 'The weekly emails are more personal: stories and practices from my own journey, sent straight to your inbox. The blog has longer pieces I have researched or learned, for when you want to go deeper on something specific.',
      },
      {
        q: 'Can I just message you directly instead?',
        a: 'Yes. Email or WhatsApp both work, and I reply myself. See the contact page for both.',
      },
      {
        q: 'How often will I hear from you?',
        a: 'The weekly tips are exactly that: one email a week, nothing more. No daily nudges, no drip sequence trying to sell you something by email seven.',
      },
    ],
  },
  {
    label: 'Practical Stuff',
    faqs: [
      {
        q: 'Is this therapy or counselling?',
        a: 'No. I am not a trained therapist or counsellor, and this site is not a substitute for either. It is one person sharing what has genuinely helped them, which is a different thing.',
      },
      {
        q: 'What if I need more serious professional support?',
        a: 'Please seek it out, alongside this rather than instead of it. If something you are dealing with feels bigger than what a free email or a chat with me can help with, a trained professional is the right next step.',
      },
      {
        q: 'Do you ever sell anything?',
        a: 'No. No products, no programmes, no calls that turn into a pitch. That is not a marketing line, it is genuinely how the site is built.',
      },
      {
        q: 'How quickly will you reply if I get in touch?',
        a: 'Within one business day, usually sooner. I reply to messages myself.',
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
      name: 'FAQ: The Catalyst Method',
      description: 'Frequently asked questions about the free confidence and self-belief coaching on this site.',
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
          <h1>Questions, <em>Answered Honestly.</em></h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.7,
            maxWidth: '540px',
            margin: '0 auto',
            fontFamily: "'Open Sans', sans-serif",
          }}>
            Everything people usually ask about this site, who it is for, and what it actually is.
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
            Get in touch, or get free weekly tips straight to your inbox.
          </p>
          <div style={{
            display: 'flex', gap: '14px',
            justifyContent: 'center', flexWrap: 'wrap',
            position: 'relative',
          }}>
            <Link href="/#weekly-tips" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#FFD700', color: '#002B45',
              fontFamily: "'Montserrat', sans-serif", fontWeight: 800,
              fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase',
              padding: '15px 28px', borderRadius: '8px', textDecoration: 'none',
            }}>
              <svg width="10" viewBox="0 0 18 30" fill="currentColor"><path d={BOLT} /></svg>
              Get Free Weekly Tips
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

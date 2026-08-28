import type { Metadata } from 'next'
import MailerLiteForm from '@/components/MailerLiteForm'

const URL = 'https://www.thecatalystmethod.co.uk/self-belief-email-series'
const TITLE = 'Free Self-Belief & Self-Confidence Email Series | The Catalyst Method'
const DESCRIPTION =
  'A free weekly email series on self-belief and self-confidence for people who overthink and second-guess themselves. One practical email a week, no sales pitch.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: 'https://www.thecatalystmethod.co.uk/og', width: 1200, height: 630, alt: 'Free self-belief and self-confidence email series' }],
    siteName: 'The Catalyst Method',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['https://www.thecatalystmethod.co.uk/og'],
  },
}

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

/* MailerLite ships the form as an inline-block wrapper, so it shrink-wraps to the
   width of the button text (~238px). On a landing page the form is the whole point,
   so let it fill the card. Its own rules are ID-scoped, hence the ID here — it's the
   same form id hardcoded in MailerLiteForm. */
const FORM_ID = 'mlb2-43256023'
const FORM_WIDTH_CSS = `
.series-form { width: 100%; max-width: 400px; margin: 0 auto; }
.series-form #${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper.embedForm { display: block !important; width: 100% !important; }
.series-form #${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody { padding: 0 !important; }
.series-form #${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input { padding: 13px 12px !important; font-size: 15px !important; }
.series-form #${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit { margin-bottom: 0 !important; }
.series-form #${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {
  padding: 15px 10px !important; font-size: 15px !important;
}
`

const FAQS = [
  {
    q: 'Is the self-belief email series really free?',
    a: 'Yes. Every email is free, there is nothing to buy at the end and there is no sales pitch. Giving this away is part of my own journey.',
  },
  {
    q: 'How often will I get an email?',
    a: 'One email a week. Each one takes a couple of minutes to read and gives you something practical to try that same day.',
  },
  {
    q: 'Who is the self-confidence email series for?',
    a: 'People who overthink every decision, second-guess themselves and feel stuck rather than lost. If self-doubt keeps drowning out what you already know, this is written for you.',
  },
  {
    q: 'Can I unsubscribe?',
    a: 'Anytime, with one click at the bottom of any email. No hard feelings and no follow-up emails asking why.',
  },
]

const INSIDE = [
  {
    n: '01',
    title: 'Where Self-Doubt Actually Comes From',
    text: 'Self-doubt is a false reality, not a true one. It is a leftover perspective built from old fears, not evidence about who you are. Week one shows you how to spot the difference in real time.',
  },
  {
    n: '02',
    title: 'How to Decide Without Overthinking It',
    text: 'Overthinking is not weighing a choice, it is your mind defending a position and needing to be certain first. You get the exact question I use to break that loop and move.',
  },
  {
    n: '03',
    title: 'The Daily Habit That Builds Self-Belief',
    text: 'Self-belief is not a feeling you wait for, it is what is left once you stop carrying the negative. This is the five-minute practice that pulled me out of six stuck years.',
  },
  {
    n: '04',
    title: 'Self-Confidence When It Actually Counts',
    text: 'Speaking up at work, having the hard conversation, backing yourself in the room. Practical tools for the moments where self-confidence usually deserts you.',
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
      description: 'Confidence and self-belief coaching for people who overthink every decision.',
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
    },
    {
      '@type': 'WebPage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://www.thecatalystmethod.co.uk/#website' },
      publisher: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
      about: [
        { '@type': 'Thing', name: 'Self-belief' },
        { '@type': 'Thing', name: 'Self-confidence' },
      ],
    },
    {
      '@type': 'Course',
      '@id': `${URL}#course`,
      name: 'The Self-Belief & Self-Confidence Email Series',
      description:
        'A free email series on building self-belief and self-confidence, quieting self-doubt and stopping overthinking. One practical email a week.',
      url: URL,
      inLanguage: 'en-GB',
      isAccessibleForFree: true,
      provider: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', category: 'Free' },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        courseWorkload: 'PT10M',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: FAQS.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
}

function FormCard({ heading, blurb }: { heading: string; blurb: string }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1.5px solid rgba(255,215,0,0.22)',
        borderRadius: 20,
        padding: '48px 40px',
        textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0,0,0,0.35), 0 0 40px rgba(255,215,0,0.06)',
      }}
    >
      <div className="brand-tag" style={{ marginBottom: 22 }}>
        <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
        Free Email Series
      </div>
      <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
        {heading}
      </h2>
      <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.82, maxWidth: 560, margin: '0 auto 32px' }}>
        {blurb}
      </p>
      <div className="series-form">
        <MailerLiteForm />
      </div>
      <div style={{ marginTop: 28 }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 3, marginBottom: 8 }}>
          {[1, 2, 3, 4, 5].map(n => (
            <svg key={n} width="13" viewBox="0 0 24 24" style={{ fill: 'var(--gold)' }} aria-hidden="true">
              <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l7.1-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,215,0,0.55)', lineHeight: 1.7, maxWidth: 420, margin: '0 auto', fontStyle: 'italic' }}>
          &ldquo;Great content, really helpful to me personally in a time when I felt stuck and low. Can&apos;t thank them enough, and all for free!&rdquo;
        </p>
        <p style={{ fontSize: '0.72rem', color: 'rgba(255,215,0,0.4)', marginTop: 6 }}>
          &mdash; Stresslessedu Education, Google Review
        </p>
      </div>
    </div>
  )
}

export default function SelfBeliefEmailSeriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <style dangerouslySetInnerHTML={{ __html: FORM_WIDTH_CSS }} />

      {/* ── HERO ── */}
      <section className="hero hero-signup" style={{ paddingBottom: 72 }}>
        <div className="bolts-bg" aria-hidden="true">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
            <svg key={n} className={`bolt b${n}`} viewBox="0 0 18 30">
              <path fill="currentColor" d={BOLT} />
            </svg>
          ))}
        </div>

        <div className="hero-inner">
          <div className="brand-tag">
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            Free Self-Belief Email Series
          </div>

          <h1>
            Stop Waiting to Feel Confident. Build Real <em>Self-Belief</em> One Email at a Time.
          </h1>
          <p className="subtitle" style={{ marginBottom: 38 }}>
            A free weekly email series on self-belief and self-confidence, written for people who
            overthink every decision and talk themselves out of what they already know they want.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <a href="#get-the-series" className="cta-btn">
              <svg viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
              Get the Free Series
            </a>
          </div>

          <div className="input-meta" style={{ marginTop: 28 }}>
            <span className="input-meta-item">One email a week</span>
            <span className="input-meta-item">Always free</span>
            <span className="input-meta-item">No sales pitch</span>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>

        {/* ── FORM ── */}
        <div id="get-the-series" style={{ padding: '72px 0 0', scrollMarginTop: 40 }}>
          <FormCard
            heading="Start the Self-Belief Series"
            blurb="Get a free gift when you sign up. My mental state checklist, the eight lines I read first thing, last thing and in the middle of a bad day. Then one practical email a week on self-belief, self-confidence, overthinking and self-doubt."
          />
        </div>

        {/* ── WHAT'S INSIDE ── */}
        <div style={{ padding: '76px 0 0' }}>
          <div className="brand-tag" style={{ marginBottom: 22 }}>
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            What&apos;s Inside
          </div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            Four Weeks That Change How You <em>Back Yourself.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.82, maxWidth: 560, marginBottom: 44 }}>
            Everything here comes from what pulled me out of six stuck years. Not a diagnosis and not
            motivational fluff, just the things that actually moved the needle for me.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
            {INSIDE.map(c => (
              <div key={c.n} style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '28px 22px' }}>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>
                  Week {c.n}
                </div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.92rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: 10, lineHeight: 1.2 }}>
                  {c.title}
                </div>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.78, margin: 0 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── WHO IT'S FOR ── */}
        <div style={{ padding: '76px 0 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 16 }}>
            <div style={{ background: 'rgba(255,215,0,0.06)', border: '1.5px solid rgba(255,215,0,0.32)', borderRadius: 18, padding: '34px 30px' }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 10 }}>
                This Is For You If
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {[
                  'You second-guess decisions for days',
                  'Self-doubt drowns out what you already know',
                  'You feel stuck rather than lost',
                  'You want self-confidence that holds up under pressure',
                ].map(f => (
                  <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.84rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, padding: '7px 0' }}>
                    <svg width="11" viewBox="0 0 18 30" style={{ fill: 'var(--gold)', flexShrink: 0, marginTop: 3 }}><path d={BOLT} /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.12)', borderRadius: 18, padding: '34px 30px' }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>
                What You Won&apos;t Get
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {[
                  'Daily emails clogging your inbox',
                  'A funnel with a product at the end',
                  'Motivational quotes and no method',
                  'Any pressure to book anything',
                ].map(f => (
                  <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.84rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, padding: '7px 0' }}>
                    <svg width="11" viewBox="0 0 18 30" style={{ fill: 'rgba(255,255,255,0.35)', flexShrink: 0, marginTop: 3 }}><path d={BOLT} /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── WHO'S BEHIND IT ── */}
        <div style={{ padding: '76px 0 0' }}>
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 20,
            padding: '44px 36px',
            display: 'flex',
            gap: 32,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/harry.png"
              alt="Harry, The Catalyst Method"
              style={{ width: 110, height: 110, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,215,0,0.32)', flexShrink: 0 }}
            />
            <div style={{ flex: 1, minWidth: 240 }}>
              <div className="brand-tag" style={{ marginBottom: 14 }}>
                <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
                Who&apos;s Writing These
              </div>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.82, marginBottom: 14 }}>
                I&apos;m Harry. I&apos;m not a trained life coach. A few years ago I got stuck, low mood,
                going through the motions, and went back to the inner work that had changed me once
                before. This series is what came out of it. Free, always, because giving it away is
                part of my own journey too.
              </p>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.42)', lineHeight: 1.6, margin: 0 }}>
                BSc Sports Therapy, MEd (Masters in Education) &mdash; not coaching or counselling qualifications, just background.
              </p>
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div style={{ padding: '76px 0 0' }}>
          <div className="brand-tag" style={{ marginBottom: 22 }}>
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            Before You Sign Up
          </div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 32 }}>
            The Usual <em>Questions.</em>
          </h2>
          <div style={{ display: 'grid', gap: 12 }}>
            {FAQS.map(item => (
              <div key={item.q} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '24px' }}>
                <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.92rem', fontWeight: 800, marginBottom: 8, lineHeight: 1.3 }}>{item.q}</h3>
                <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.78, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FINAL CTA ── */}
      <div style={{ padding: '76px 24px 100px', background: 'radial-gradient(ellipse at 50% 100%, rgba(0,85,133,0.25) 0%, transparent 65%)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div className="cta-block" style={{ marginTop: 0 }}>
            <svg className="cta-bolt-l" viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
            <svg className="cta-bolt-r" viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
            <div className="cta-block-inner" style={{ textAlign: 'center' }}>
              <div className="brand-tag" style={{ marginBottom: 20 }}>
                <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
                Ready When You Are
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.1rem)' }}>
                Self-Belief Isn&apos;t a Feeling You Wait For.<br />It&apos;s Something You Build.
              </h2>
              <p>
                Start with one email. If it does nothing for you, unsubscribe with one click and
                we&apos;re still good.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
                <a href="#get-the-series" className="cta-btn">
                  <svg viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
                  Get the Free Series
                </a>
              </div>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', marginTop: 32 }}>
            &copy; 2026 The Catalyst Method &middot;{' '}
            <a href="mailto:hey@thecatalystmethod.co.uk" style={{ color: 'rgba(255,215,0,0.4)', textDecoration: 'none' }}>
              hey@thecatalystmethod.co.uk
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

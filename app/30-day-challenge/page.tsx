import type { Metadata } from 'next'
import ChallengeForm from '@/components/ChallengeForm'

const URL = 'https://www.thecatalystmethod.co.uk/30-day-challenge'
const TITLE = 'The Catalyst Method 30 Day Challenge | Free 30 Day Self-Belief Challenge'
const DESCRIPTION =
  'A free 30 day challenge that builds self-belief with evidence instead of affirmations. Twenty five minutes a day, one email a day for 31 days, nothing to buy.'

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
    images: [{ url: 'https://www.thecatalystmethod.co.uk/og', width: 1200, height: 630, alt: 'The Catalyst Method 30 Day Challenge' }],
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

/* Same shrink-wrap fix as the email series page: MailerLite ships the form as an
   inline-block wrapper that sizes to its button text, so it is widened here.
   The rules are id-scoped by MailerLite, hence the hardcoded form id. */
const FORM_ID = 'mlb2-45307605'
const FORM_WIDTH_CSS = `
.challenge-form { width: 100%; max-width: 400px; margin: 0 auto; }
.challenge-form #${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper.embedForm { display: block !important; width: 100% !important; }
.challenge-form #${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody { padding: 0 !important; }
.challenge-form #${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input { padding: 13px 12px !important; font-size: 15px !important; }
.challenge-form #${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit { margin-bottom: 0 !important; }
.challenge-form #${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {
  padding: 15px 10px !important; font-size: 15px !important;
}
`

const FAQS = [
  {
    q: 'Is the 30 day challenge really free?',
    a: 'Yes. There is nothing to buy, no upgrade and no pitch at the end. Day 31 is the same twenty minutes as day 30. Giving this away is part of my own journey, not a lead magnet for something I am selling later.',
  },
  {
    q: 'How many emails will I get?',
    a: 'One a day for 31 days, then it stops. That is the only time I email daily, and it is because the challenge happens daily. After it finishes you can have the weekly email if you want it, or nothing at all.',
  },
  {
    q: 'What happens if I miss a day?',
    a: 'You carry on at the next day. You never start again at day 1. Missing a day does not cancel the days you did, and starting over is a punishment, which is the thing that makes people quit in the first place.',
  },
  {
    q: 'What if I cannot manage twenty minutes?',
    a: 'You do five. Five minutes still counts and it still gets a tick. Twenty minutes is the target, not the minimum. If life is genuinely full right now, young kids or a hard job or someone ill to look after, then five minutes every day for 30 days counts as finishing, because it is.',
  },
  {
    q: 'Do I need to be good at meditation?',
    a: 'No, and most people think they are doing it wrong when they start. It took me weeks before it felt natural and I still do not always manage it. Sitting still can also bring difficult things up, so the challenge includes the honest safety notes and the points where you should stop and get support.',
  },
  {
    q: 'Are you a coach or a therapist?',
    a: 'Neither. I am not a trained life coach or counsellor, and I say so on every page. My qualifications are BSc Sports Therapy and MEd, and neither is a coaching or counselling qualification. If you need professional support, please get it, alongside this rather than instead of it.',
  },
]

const PROBLEMS = [
  {
    n: '01',
    title: 'You Overthink Every Decision',
    text: 'It feels like weighing the choice carefully. My honest read is that it is your mind defending a position, needing to be certain and needing to be right. The need for certainty is a feeling you have not let go of, not a fact about the decision.',
  },
  {
    n: '02',
    title: 'Self-Doubt Drowns Out What You Know',
    text: 'You already know the answer, and then a voice arrives that sounds completely reasonable and you go quiet. Self-doubt is a false reality, a leftover perspective built from old fears rather than evidence about who you are.',
  },
  {
    n: '03',
    title: 'You Feel Stuck, Not Lost',
    text: 'Nothing dramatic to point at, which somehow makes it worse. Stuck is what happens when you stop doing the daily work of letting go, and the unreleased quietly piles up until it is running the show.',
  },
]

const INSIDE = [
  {
    n: '01',
    days: 'Days 0 to 4',
    title: 'Start Before You Feel Ready',
    text: 'You pick your twenty minutes, get your tick sheet and start on day 1. The thinking comes after the doing, not before it. Then the three rules for bad days, so you decide what to do about them while you are not having one.',
  },
  {
    n: '02',
    days: 'Days 5 to 15',
    title: 'The Boring Stretch That Proves It',
    text: 'Eleven days with nothing new. That is on purpose. Around day six it starts to feel pointless, and I tell you that before it happens so you know it is coming and not a verdict on you.',
  },
  {
    n: '03',
    days: 'Days 16 to 25',
    title: 'Letting Go, Properly',
    text: 'You look back at what kept coming up, then learn the actual technique. Ten minutes a day working through it. Then the difference between what happened and what you added on top, and what to do with a doubting thought in the moment.',
  },
  {
    n: '04',
    days: 'Days 26 to 30',
    title: 'The Count, and the Promise',
    text: 'You count your ticks, and whatever the number is, it is a count of times you kept your word to yourself. Then one real thing out in the world, and one promise. Not to try harder. To treat yourself with respect.',
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
      name: 'The Catalyst Method 30 Day Challenge',
      description:
        'A free 30 day challenge that builds self-belief through evidence. A daily twenty minute practice, a mental state checklist, and a letting go technique, delivered as one email a day for 31 days.',
      url: URL,
      inLanguage: 'en-GB',
      isAccessibleForFree: true,
      provider: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', category: 'Free' },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        courseWorkload: 'PT25M',
        repeatCount: 31,
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
        Free 30 Day Challenge
      </div>
      <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
        {heading}
      </h2>
      <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.82, maxWidth: 560, margin: '0 auto 32px' }}>
        {blurb}
      </p>
      <div className="challenge-form">
        <ChallengeForm />
      </div>
      <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 420, margin: '18px auto 0' }}>
        One email a day for 31 days, then it stops. Unsubscribe anytime, no hard feelings.
      </p>
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
          Stresslessedu Education, Google Review
        </p>
      </div>
    </div>
  )
}

export default function ThirtyDayChallengePage() {
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
            The Catalyst Method 30 Day Challenge
          </div>

          <h1>
            You Are Not Broken. You Just Have No <em>Proof</em> Yet.
          </h1>
          <p className="subtitle" style={{ marginBottom: 38 }}>
            Self-belief is not a feeling you wait for. It is the belief that you will do what you
            said you would do, and it runs on evidence. Thirty days from now you will have some.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <a href="#start-the-challenge" className="cta-btn">
              <svg viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
              Start the Challenge
            </a>
          </div>

          <div className="input-meta" style={{ marginTop: 28 }}>
            <span className="input-meta-item">About 25 minutes a day</span>
            <span className="input-meta-item">Always free</span>
            <span className="input-meta-item">Nothing to buy at the end</span>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>

        {/* ── AGITATION ── */}
        <div style={{ padding: '72px 0 0' }}>
          <div className="brand-tag" style={{ marginBottom: 22 }}>
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            Read This Bit First
          </div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
            You Have Started Things Before. <em>You Know How This Usually Goes.</em>
          </h2>
          <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.9, maxWidth: 620 }}>
            <p style={{ marginBottom: 16 }}>
              The first few days feel good. Then around day six the new feeling wears off, nothing
              looks different, and a thought turns up that sounds completely reasonable.
            </p>
            <p style={{ marginBottom: 16 }}>
              It says: this is not working. Same as always.
            </p>
            <p style={{ marginBottom: 16 }}>
              So you stop. And then you do the worst part, which is not the stopping. It is deciding
              that stopping proved something about who you are.
            </p>
            <p style={{ marginBottom: 16 }}>
              It did not. You just ran out of discipline, and discipline always runs out, because it
              is force. It works for a few weeks, then it cracks, every time, for everyone.
            </p>
            <p style={{ margin: 0 }}>
              I spent six years stuck. Low mood, going through the motions, a long way from the
              person I had been. It was not laziness and it was not a character flaw. I had simply
              stopped doing the daily thing, and everything else followed from that.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12, marginTop: 44 }}>
            {PROBLEMS.map(c => (
              <div key={c.n} style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '28px 22px' }}>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>
                  {c.n}
                </div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.92rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: 10, lineHeight: 1.2 }}>
                  {c.title}
                </div>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.78, margin: 0 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── THE TURN ── */}
        <div style={{ padding: '72px 0 0' }}>
          <div style={{ background: 'rgba(255,215,0,0.06)', border: '1.5px solid rgba(255,215,0,0.32)', borderRadius: 18, padding: '40px 34px' }}>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>
              So Here Is the Difference
            </div>
            <p style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.86, marginBottom: 14 }}>
              This is not 30 days of fixing yourself. Nothing is missing from you. It is 30 days of
              proving one specific thing: that when you say you will do something, you do it.
            </p>
            <p style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.86, marginBottom: 14 }}>
              You get a sheet with thirty boxes on it. Nobody else ever sees it. There is no public
              streak and no accountability partner, because both of those run on being scared of
              being seen to fail, and that is just force wearing a friendlier face.
            </p>
            <p style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.86, margin: 0 }}>
              On day 26 you count the ticks. Whatever the number is, it is a count of times you kept
              your word to yourself. There is no number on that sheet that means you failed.
            </p>
          </div>
        </div>

        {/* ── FORM ── */}
        <div id="start-the-challenge" style={{ padding: '72px 0 0', scrollMarginTop: 40 }}>
          <FormCard
            heading="Start The 30 Day Challenge"
            blurb="Drop your name and email below and day 0 lands straight away. Three small jobs, then you start tomorrow. All you need is somewhere to write and about 25 minutes a day."
          />
        </div>

        {/* ── WHAT'S INSIDE ── */}
        <div style={{ padding: '76px 0 0' }}>
          <div className="brand-tag" style={{ marginBottom: 22 }}>
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            What&apos;s Inside
          </div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            Thirty Days, Built in the <em>Order That Works.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.82, maxWidth: 560, marginBottom: 44 }}>
            Most advice starts with taking action and hoping the confidence catches up. That works
            right up until the feeling is loud enough to stop you leaving the house. This is ordered
            the other way round on purpose.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
            {INSIDE.map(c => (
              <div key={c.n} style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '28px 22px' }}>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>
                  {c.days}
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
                  'You start things and drop them by week two',
                  'Self-doubt drowns out what you already know',
                  'You feel stuck rather than lost',
                  'You want proof rather than another pep talk',
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
                  'A product at the end, or any pitch at all',
                  'A public streak or an accountability partner',
                  'Being told to push through and try harder',
                  'A promise about how you will feel on day 31',
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
                Who&apos;s Behind It
              </div>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.82, marginBottom: 14 }}>
                I&apos;m Harry. I&apos;m not a trained life coach or counsellor, and everything here is
                what has actually helped me, which is the only lens I have. This challenge is the
                thing I do myself, written down. I still do it. If you need proper professional
                support, please go and get it, alongside this rather than instead of it.
              </p>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.42)', lineHeight: 1.6, margin: 0 }}>
                BSc Sports Therapy, MEd (Masters in Education). Neither is a coaching or counselling qualification.
              </p>
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div style={{ padding: '76px 0 0' }}>
          <div className="brand-tag" style={{ marginBottom: 22 }}>
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            Before You Start
          </div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 32 }}>
            The Awkward <em>Questions.</em>
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
                Day 0 Starts Whenever You Do
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.1rem)' }}>
                Doing Comes First.<br />Belief Follows After.
              </h2>
              <p>
                I am not going to promise you will feel confident on day 31. Nothing works that
                fast, and anyone saying otherwise is selling something. What I can tell you is what
                happened to me, and that I still do this today.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
                <a href="#start-the-challenge" className="cta-btn">
                  <svg viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
                  Start the Challenge
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

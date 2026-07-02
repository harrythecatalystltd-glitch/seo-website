import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import BioBlock from '@/components/BioBlock'
import CtaButtons from '@/components/CtaButtons'
import RelatedPosts from '@/components/RelatedPosts'
import PillarCrossLinks from '@/components/PillarCrossLinks'

export const metadata: Metadata = {
  title: 'Self-Belief Coaching | Build Unshakable Self-Belief',
  description: 'Self-belief coaching for people who know what they want but do not trust themselves to go get it. Free, honest, and built from real lived experience.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/self-belief-coaching' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/self-belief-coaching',
    title: 'Self-Belief Coaching | Build Unshakable Self-Belief',
    description: 'Self-belief coaching for people who know what they want but do not trust themselves to go get it.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' }],
    siteName: 'The Catalyst Method',
  },
}

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.thecatalystmethod.co.uk/self-belief-coaching',
      url: 'https://www.thecatalystmethod.co.uk/self-belief-coaching',
      name: 'Self-Belief Coaching',
      isPartOf: { '@id': 'https://www.thecatalystmethod.co.uk/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thecatalystmethod.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'Self-Belief Coaching', item: 'https://www.thecatalystmethod.co.uk/self-belief-coaching' },
      ],
    },
  ],
}

export default function SelfBeliefCoachingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

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
            Self-Belief Coaching
          </div>
          <h1>Self-Belief Isn&apos;t Something You&apos;re <em>Born</em> With.</h1>
          <p className="subtitle" style={{ marginBottom: 38 }}>
            It&apos;s built the same way confidence is: one honest decision at a time. Here&apos;s how I think about it, and what&apos;s actually helped me build mine back.
          </p>
          <CtaButtons />
        </div>
      </section>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>

        <div style={{ padding: '76px 0 0' }}>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            Self-Belief Isn&apos;t the Same Thing as Confidence.
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640, marginBottom: 20 }}>
            Confidence is often situational. You can run a meeting well and still doubt yourself the second a real decision is on the line. Self-belief runs deeper than that. I think of it in terms of a distinction from <em>Truth vs Falsehood</em>: essence versus appearance. Appearance is the story your mind tells about you, coloured by mood, history and fear. Essence is what is actually true. Self-belief is trusting your essence even when the appearance, the doubt, the fear, is loud.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640 }}>
            You can be a confident, capable person and still be living from appearance instead of essence. That gap is where most of the stuck feeling lives.
          </p>
        </div>

        <div style={{ padding: '64px 0 0' }}>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            Why It Erodes.
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640, marginBottom: 20 }}>
            Self-belief doesn&apos;t usually vanish in one big moment. It wears away slowly. A decision you second-guessed until someone else made it for you. A goal you quietly downgraded so it wouldn&apos;t hurt as much if it went wrong. I think what actually erodes it is that none of those moments ever got let go of. Each one got suppressed, replayed, or quietly filed away as evidence against you, instead of felt fully and released.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640 }}>
            None of that makes you weak. It makes you human. But it does mean self-belief has to be rebuilt on purpose, one released feeling at a time. It doesn&apos;t come back by accident.
          </p>
        </div>

        <div style={{ padding: '64px 0 0' }}>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            What&apos;s Actually Helped Me Build Mine Back.
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640, marginBottom: 20 }}>
            It wasn&apos;t a mindset shift I read once and applied. Before kids, I quit my job and travelled for six months, and meditation and looking inward changed how I saw everything. Then two kids came along, the inner work fell away, and six years later I was stuck and low. Going back to it, through Letting Go, Truth vs Falsehood and The 5am Club, is what actually rebuilt my self-belief. Not one big insight, small repeated proof: noticing the difference between a thought that makes me feel stronger and one that makes me feel smaller, and taking that seriously every day, not just when it&apos;s convenient.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640 }}>
            None of it requires certainty first. That&apos;s the part most people get stuck on. You don&apos;t need to feel sure to start trusting yourself again. You need to start, and let the trust catch up.
          </p>
        </div>

        <div style={{ padding: '64px 0 0' }}>
          <div style={{
            background: 'rgba(255,215,0,0.05)',
            border: '1.5px solid rgba(255,215,0,0.22)',
            borderRadius: 18,
            padding: '36px 32px',
          }}>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.3rem,3vw,1.9rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 18 }}>
              What You Can Actually Do About It.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              <div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginBottom: 6 }}>1. Tell essence from appearance.</div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: 0 }}>
                  When a self-doubting thought shows up, ask if it makes you feel stronger and clearer, or smaller and tighter. That is usually enough to tell you whether you are looking at the truth, or a false story built from an old fear. I go deeper into this test in <Link href="/blog/why-not-good-enough-is-a-false-reality" style={{ color: 'var(--gold)' }}>Why &quot;Not Good Enough&quot; Is a False Reality</Link>.
                </p>
              </div>
              <div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginBottom: 6 }}>2. Actually let go of the eroding moments.</div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: 0 }}>
                  Replaying a moment of self-doubt is not the same as processing it. Feel where it sits in your body, let it be there without a story attached, and stay with it until the charge runs out. I break the whole technique down in <Link href="/blog/how-to-let-go-of-negative-thoughts" style={{ color: 'var(--gold)' }}>How I Let Go of Negative Thoughts and Feelings Every Day</Link>.
                </p>
              </div>
              <div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginBottom: 6 }}>3. Protect the time to actually practise this.</div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: 0 }}>
                  Self-belief rebuilds through repetition, not a single realisation. I use twenty minutes most mornings, part of the routine in <Link href="/blog/morning-routine-that-changed-my-life" style={{ color: 'var(--gold)' }}>The Morning Routine That Actually Changed My Life</Link>, so the practice happens on purpose instead of only when things get hard.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '76px 0 0' }}>
          <BioBlock reason="I write about self-belief because I lost mine for a long stretch and had to build it back from nothing, without a coach or a course to follow. Everything here is what actually worked for me, not theory I picked up secondhand." />
        </div>

        <RelatedPosts
          heading="Related Reading"
          slugs={[
            'feeling-stuck-in-life',
            'self-worth-vs-self-esteem-vs-confidence',
            'self-doubt-vs-self-confidence-key-differences',
            'trust-yourself-simple-steps',
            'daily-habits-build-self-confidence-fast',
            '3-books-that-changed-my-life',
          ]}
        />

        <PillarCrossLinks current="/self-belief-coaching" />
      </div>

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
                Start With One Free Tip.<br />See Where It Takes You.
              </h2>
              <p>
                No product to buy, no funnel to sit through. Just free, practical help, and a real person to talk to when you want one.
              </p>
              <CtaButtons />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

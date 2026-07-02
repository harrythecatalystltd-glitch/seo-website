import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import BioBlock from '@/components/BioBlock'
import CtaButtons from '@/components/CtaButtons'
import RelatedPosts from '@/components/RelatedPosts'
import PillarCrossLinks from '@/components/PillarCrossLinks'

export const metadata: Metadata = {
  title: 'Confidence Coaching for Work | Overcome Imposter Syndrome',
  description: 'Feel like a fraud at work, or stuck and unsure how to move forward? Confidence coaching built for real career situations, not generic self-help.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/confidence-coaching-at-work' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/confidence-coaching-at-work',
    title: 'Confidence Coaching for Work | Overcome Imposter Syndrome',
    description: 'Feel like a fraud at work, or stuck and unsure how to move forward?',
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
      '@id': 'https://www.thecatalystmethod.co.uk/confidence-coaching-at-work',
      url: 'https://www.thecatalystmethod.co.uk/confidence-coaching-at-work',
      name: 'Confidence Coaching for Work',
      isPartOf: { '@id': 'https://www.thecatalystmethod.co.uk/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thecatalystmethod.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'Confidence Coaching at Work', item: 'https://www.thecatalystmethod.co.uk/confidence-coaching-at-work' },
      ],
    },
  ],
}

export default function ConfidenceAtWorkPage() {
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
            Confidence at Work
          </div>
          <h1>Confidence at Work Isn&apos;t About Being the <em>Loudest</em> Person in the Room.</h1>
          <p className="subtitle" style={{ marginBottom: 38 }}>
            For people who feel like a fraud, feel stuck, or feel like everyone else got a manual they didn&apos;t. You&apos;re not behind. You&apos;re just carrying something nobody can see.
          </p>
          <CtaButtons />
        </div>
      </section>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>

        <div style={{ padding: '76px 0 0' }}>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            Signs You Might Recognise.
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640, marginBottom: 20 }}>
            You put success down to luck, timing, or other people, never your own ability. You downplay what you&apos;ve done before someone else can. You quietly wait for the moment everyone realises you&apos;re not as capable as they think. I think all three of these are the same thing wearing different outfits: a false reality that has been carried for so long it started to feel like a fact.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640 }}>
            If any of that lands, you&apos;re not broken and you&apos;re not alone. It has a name, and more importantly, it has a way out.
          </p>
        </div>

        <div style={{ padding: '64px 0 0' }}>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            Why This Happens.
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640, marginBottom: 20 }}>
            Most of the time it has nothing to do with actual ability. It comes from comparing your internal experience, all your doubts and second-guessing, against everyone else&apos;s polished exterior. That is comparing your essence to their appearance, your full, honest inside against their edited outside. You never see their doubt, so you assume you&apos;re the only one carrying it.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640 }}>
            Add in a stretch of feeling stuck, going through the motions rather than actually engaging, the negative feelings from each small knock never let go of, just quietly stacking, and confidence erodes further without one single bad thing having happened.
          </p>
        </div>

        <div style={{ padding: '64px 0 0' }}>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            What&apos;s Helped Me and the People I Talk To.
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640, marginBottom: 20 }}>
            Small, repeated proof beats a single confidence boost every time. Naming one thing you did well without immediately explaining it away. But the bigger shift for me has been honesty, with myself first, then with other people. People can&apos;t help the way they are, they&apos;re shaped by their own history same as I am, and once I stopped assuming everyone else had it figured out, comparing myself against them stopped meaning very much.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640 }}>
            None of it is complicated. It just has to be done on purpose, because it won&apos;t happen by accident.
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
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginBottom: 6 }}>1. Catch the comparison as a story, not a fact.</div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: 0 }}>
                  Before a meeting where you feel like a fraud, notice you are comparing your inside to someone else&apos;s outside. That thought will make you feel smaller and tighter, which is usually the sign it is appearance, not essence. I go into this test properly in <Link href="/blog/why-not-good-enough-is-a-false-reality" style={{ color: 'var(--gold)' }}>Why &quot;Not Good Enough&quot; Is a False Reality</Link>.
                </p>
              </div>
              <div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginBottom: 6 }}>2. Let the feeling go before you walk in.</div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: 0 }}>
                  Rather than pushing the nerves down or talking yourself out of them, feel where they sit, let them be there, and let the charge run out before the meeting starts. The full technique is in <Link href="/blog/how-to-let-go-of-negative-thoughts" style={{ color: 'var(--gold)' }}>How I Let Go of Negative Thoughts and Feelings Every Day</Link>.
                </p>
              </div>
              <div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginBottom: 6 }}>3. Do not let it only show up at work.</div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: 0 }}>
                  If letting go only happens in the ten minutes before a hard meeting, it will always feel like a scramble. I build it into a small daily routine instead, which I cover in <Link href="/blog/morning-routine-that-changed-my-life" style={{ color: 'var(--gold)' }}>The Morning Routine That Actually Changed My Life</Link>, so I am already practised by the time work needs it.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '76px 0 0' }}>
          <BioBlock reason="I write about this because feeling stuck doesn't stay in one part of your life. Mine showed up as low mood and going through the motions for six years, work included. The way back was the same inner work wherever it showed up, not a separate fix for each area." />
        </div>

        <RelatedPosts
          heading="Related Reading"
          slugs={[
            'what-is-imposter-syndrome',
            'feeling-stuck-work-ways-move-forward',
            'lack-confidence-common-causes',
            'daily-habits-build-self-confidence-fast',
            'core-values-high-performers-guide',
          ]}
        />

        <PillarCrossLinks current="/confidence-coaching-at-work" />
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

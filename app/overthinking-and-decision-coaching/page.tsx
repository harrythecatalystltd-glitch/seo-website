import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import BioBlock from '@/components/BioBlock'
import CtaButtons from '@/components/CtaButtons'
import RelatedPosts from '@/components/RelatedPosts'

export const metadata: Metadata = {
  title: 'Overthinking & Decision-Making Coach | Stop Second-Guessing Yourself',
  description: 'Coaching for people stuck overthinking every decision, big or small. Learn to trust your judgement and move forward, without needing to fix every worry first.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/overthinking-and-decision-coaching' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/overthinking-and-decision-coaching',
    title: 'Overthinking & Decision-Making Coach | Stop Second-Guessing Yourself',
    description: 'Coaching for people stuck overthinking every decision, big or small.',
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
      '@id': 'https://www.thecatalystmethod.co.uk/overthinking-and-decision-coaching',
      url: 'https://www.thecatalystmethod.co.uk/overthinking-and-decision-coaching',
      name: 'Overthinking & Decision-Making Coaching',
      isPartOf: { '@id': 'https://www.thecatalystmethod.co.uk/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thecatalystmethod.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'Overthinking & Decision Coaching', item: 'https://www.thecatalystmethod.co.uk/overthinking-and-decision-coaching' },
      ],
    },
  ],
}

export default function OverthinkingCoachingPage() {
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
            Overthinking &amp; Decision-Making
          </div>
          <h1>You Don&apos;t Need to Stop Overthinking to <em>Move Forward.</em></h1>
          <p className="subtitle" style={{ marginBottom: 38 }}>
            Coaching for people stuck overthinking every decision, big or small. You don&apos;t have to silence the noise. You just have to stop letting it drive.
          </p>
          <CtaButtons />
        </div>
      </section>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>

        <div style={{ padding: '76px 0 0' }}>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            Overthinking Isn&apos;t the Enemy.
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640, marginBottom: 20 }}>
            Most advice tells you to just stop overthinking, as if it were a switch. It isn&apos;t. Overthinking is usually your mind trying to protect you from a wrong decision. The problem isn&apos;t that you think things through. It&apos;s that the thinking never actually ends in a decision.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640 }}>
            You don&apos;t need to quiet your mind completely. You need a way to move while it&apos;s still talking.
          </p>
        </div>

        <div style={{ padding: '64px 0 0' }}>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            What&apos;s Actually Happening.
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640, marginBottom: 20 }}>
            Every decision you sit with uses up a bit of mental energy, whether it&apos;s picking what to have for dinner or something that actually matters. By the time a real decision shows up, a lot of people have nothing left, so the small stuff and the big stuff start to feel equally heavy.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640 }}>
            That&apos;s decision fatigue, and it looks a lot like indecision from the outside. It isn&apos;t a character flaw. It&apos;s a resource running low.
          </p>
        </div>

        <div style={{ padding: '64px 0 0' }}>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            The Pattern I See Most.
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640, marginBottom: 20 }}>
            Underneath most overthinking is a position the mind is defending. I&apos;m right, or I need to be certain before I move, or getting this wrong would mean something about me. Chasing certainty before you act is often the actual block, not the decision itself.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640 }}>
            Letting go of needing to be certain first is usually what unlocks the decision. Not more analysis.
          </p>
        </div>

        <div style={{ padding: '76px 0 0' }}>
          <BioBlock reason="I spent six years stuck in a version of this. Not one dramatic decision I couldn't make, just a low-level habit of second-guessing everything until the moment had passed. Learning to move before I felt certain is the single biggest thing that changed for me." />
        </div>

        <RelatedPosts
          heading="Related Reading"
          slugs={[
            'stop-overthinking-decisions',
            'manage-decision-fatigue-prioritisation',
            'complete-guide-overcoming-indecision',
            'practise-micro-decisions-20-minutes',
            'decision-making-checklist-steps-choose',
          ]}
        />
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

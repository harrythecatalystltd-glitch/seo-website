import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import BioBlock from '@/components/BioBlock'
import CtaButtons from '@/components/CtaButtons'
import RelatedPosts from '@/components/RelatedPosts'
import PillarCrossLinks from '@/components/PillarCrossLinks'

export const metadata: Metadata = {
  title: 'Overthinking Coach | Stop Second-Guessing Every Decision',
  description: 'Coaching for people stuck overthinking every decision, big or small. Learn to trust your judgement and move forward, without needing to fix every worry first.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/overthinking-and-decision-coaching' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/overthinking-and-decision-coaching',
    title: 'Overthinking Coach | Stop Second-Guessing Every Decision',
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
            Most advice tells you to just stop overthinking, like it&apos;s a switch. It isn&apos;t, and I don&apos;t think that&apos;s actually the goal. In <em>Truth vs Falsehood</em>, David Hawkins writes about something called positionality, a fixed stance the mind clings to: I need to be certain, I need to be right, getting this wrong would mean something about me. That isn&apos;t thinking something through. That&apos;s defending a position. And a mind defending a position never feels finished, because the real goal was never the decision, it was the certainty.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640 }}>
            I don&apos;t think you need to quiet your mind completely. I think you need to notice what you&apos;re actually defending, and let go of needing to defend it.
          </p>
        </div>

        <div style={{ padding: '64px 0 0' }}>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            What&apos;s Actually Happening.
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640, marginBottom: 20 }}>
            Every decision you sit with uses up mental energy, whether it&apos;s dinner or something that actually matters. But I think there&apos;s more to decision fatigue than a tired brain. Every decision you didn&apos;t let yourself finish, the ones you second-guessed after the fact, the ones you&apos;re still quietly replaying, stays switched on in the background. By the time a real decision shows up, you&apos;re not just tired, you&apos;re carrying every unresolved one that came before it.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640 }}>
            That isn&apos;t a character flaw. It&apos;s a resource running low, and I think the resource is your capacity to let go, not just your mental energy.
          </p>
        </div>

        <div style={{ padding: '64px 0 0' }}>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            The Pattern I See Most.
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640, marginBottom: 20 }}>
            Underneath most overthinking is a want. Hawkins names three in <em>Letting Go</em>: approval, control, or security. I spent six years defending a want I&apos;d never actually named, mostly control, needing to know how something would turn out before I&apos;d let myself commit to it. The test I use now, from <em>Truth vs Falsehood</em>, is simple: when I hold onto a thought, does it make me feel stronger and clearer, or smaller and tighter?
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640 }}>
            Needing to be certain almost always makes me feel smaller. That&apos;s usually the sign I&apos;m not actually deciding anymore. I&apos;m just defending a position.
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
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginBottom: 6 }}>1. Catch the position, not just the decision.</div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: 0 }}>
                  Next time you&apos;re circling a decision, ask what you&apos;re actually defending: being right, being certain, or being safe. Then use the test above. Does holding this thought make you feel stronger and clearer, or smaller and tighter? That tells you whether you&apos;re deciding or defending.
                </p>
              </div>
              <div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginBottom: 6 }}>2. Let go of the want before you decide.</div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: 0 }}>
                  You can&apos;t think your way out of needing certainty, you have to release it. I use the letting go technique for this: feel where the need for certainty sits in your body, let it be there without fighting it, and stay with it until the charge runs out. I break the full technique down in <Link href="/blog/how-to-let-go-of-negative-thoughts" style={{ color: 'var(--gold)' }}>this guide</Link>.
                </p>
              </div>
              <div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginBottom: 6 }}>3. Build the habit before you need it.</div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: 0 }}>
                  This gets much easier if letting go isn&apos;t something you only try mid-decision. I protect twenty minutes most mornings for it, part of a routine I write about in <Link href="/blog/morning-routine-that-changed-my-life" style={{ color: 'var(--gold)' }}>The Morning Routine That Actually Changed My Life</Link>. It means the release muscle is already warm when a real decision shows up.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '76px 0 0' }}>
          <BioBlock reason="I spent six years stuck in a version of this. Not one dramatic decision I couldn't make, just a low-level habit of second-guessing everything until the moment had passed. Learning to move before I felt certain is the single biggest thing that changed for me." />
        </div>

        <RelatedPosts
          heading="Related Reading"
          slugs={[
            'stop-overthinking-decisions',
            'feeling-stuck-in-life',
            'manage-decision-fatigue-prioritisation',
            'complete-guide-overcoming-indecision',
            'practise-micro-decisions-20-minutes',
            'decision-making-checklist-steps-choose',
          ]}
        />

        <PillarCrossLinks current="/overthinking-and-decision-coaching" />
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

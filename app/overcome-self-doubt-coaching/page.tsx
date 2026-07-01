import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import BioBlock from '@/components/BioBlock'
import CtaButtons from '@/components/CtaButtons'
import RelatedPosts from '@/components/RelatedPosts'

export const metadata: Metadata = {
  title: 'Overcome Self-Doubt Coaching | From Self-Doubt to Self-Belief',
  description: 'Stuck in a loop of self-doubt? Coaching to help you trust your own judgement again. Practical, honest, and free, not just positive thinking.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/overcome-self-doubt-coaching' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/overcome-self-doubt-coaching',
    title: 'Overcome Self-Doubt Coaching | From Self-Doubt to Self-Belief',
    description: 'Stuck in a loop of self-doubt? Coaching to help you trust your own judgement again.',
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
      '@id': 'https://www.thecatalystmethod.co.uk/overcome-self-doubt-coaching',
      url: 'https://www.thecatalystmethod.co.uk/overcome-self-doubt-coaching',
      name: 'Overcome Self-Doubt Coaching',
      isPartOf: { '@id': 'https://www.thecatalystmethod.co.uk/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thecatalystmethod.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'Overcome Self-Doubt Coaching', item: 'https://www.thecatalystmethod.co.uk/overcome-self-doubt-coaching' },
      ],
    },
  ],
}

export default function OvercomeSelfDoubtPage() {
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
            Overcome Self-Doubt
          </div>
          <h1>From Self-Doubt to Self-Belief, Without Needing <em>Certainty</em> First.</h1>
          <p className="subtitle" style={{ marginBottom: 38 }}>
            Stuck in a loop of self-doubt? Here&apos;s how to trust your own judgement again, without waiting to feel ready.
          </p>
          <CtaButtons />
        </div>
      </section>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>

        <div style={{ padding: '76px 0 0' }}>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            Self-Doubt and Low Confidence Aren&apos;t Quite the Same Thing.
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640, marginBottom: 20 }}>
            Low confidence is usually about ability. Self-doubt is about trust. You can believe you&apos;re capable and still not trust your own read on a situation. That&apos;s why confidence-building tips alone often don&apos;t touch it.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640 }}>
            Self-doubt needs something different. Not more proof you&apos;re capable, but practice trusting yourself before the proof arrives.
          </p>
        </div>

        <div style={{ padding: '64px 0 0' }}>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            Signs You Might Recognise.
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640, marginBottom: 20 }}>
            Asking three other people what they think before you&apos;ll commit to your own answer. Replaying a decision for days after you&apos;ve already made it. Feeling more comfortable letting someone else decide, even when you had a clear preference.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640 }}>
            If that sounds familiar, it&apos;s not a personality flaw. It&apos;s a pattern, and patterns can change.
          </p>
        </div>

        <div style={{ padding: '64px 0 0' }}>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            What&apos;s Helped.
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640, marginBottom: 20 }}>
            Letting a feeling of doubt be there without acting on it straight away. Noticing when I&apos;m reaching for someone else&apos;s opinion out of habit rather than genuine need. Making small, low-stakes decisions on my own on purpose, just to rebuild the muscle.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640 }}>
            It&apos;s slow, ordinary work. It&apos;s also the only thing that&apos;s actually worked for me.
          </p>
        </div>

        <div style={{ padding: '76px 0 0' }}>
          <BioBlock reason="I write about self-doubt because it was the quiet undercurrent of my six stuck years, even when nothing on the surface looked wrong. Learning to trust myself again, in small ordinary decisions, is what actually turned it around." />
        </div>

        <RelatedPosts
          heading="Related Reading"
          slugs={[
            'self-doubt-vs-self-confidence-key-differences',
            'lack-confidence-common-causes',
            'trust-yourself-simple-steps',
            'meditation-vs-journaling-building-confidence',
            '3-books-that-changed-my-life',
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

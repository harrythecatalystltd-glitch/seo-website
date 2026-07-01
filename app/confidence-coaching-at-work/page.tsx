import type { Metadata } from 'next'
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
            You put success down to luck, timing, or other people, never your own ability. You downplay what you&apos;ve done before someone else can. You quietly wait for the moment everyone realises you&apos;re not as capable as they think.
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
            Most of the time it has nothing to do with actual ability. It comes from comparing your internal experience, all your doubts and second-guessing, against everyone else&apos;s polished exterior. You never see their doubt, so you assume you&apos;re the only one carrying it.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640 }}>
            Add in a stretch of feeling stuck, going through the motions rather than actually engaging, and confidence erodes even further without one single bad thing having happened.
          </p>
        </div>

        <div style={{ padding: '64px 0 0' }}>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            What&apos;s Helped Me and the People I Talk To.
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640, marginBottom: 20 }}>
            Small, repeated proof beats a single confidence boost every time. Naming one thing you did well without immediately explaining it away. Getting clear on what you actually value, rather than what looks good, and letting that guide a decision at work for once.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, maxWidth: 640 }}>
            None of it is complicated. It just has to be done on purpose, because it won&apos;t happen by accident.
          </p>
        </div>

        <div style={{ padding: '76px 0 0' }}>
          <BioBlock reason="I write about this because feeling stuck doesn't stay in one part of your life. Mine showed up as low mood and going through the motions for six years, work included. The way back was the same inner work wherever it showed up, not a separate fix for each area." />
        </div>

        <RelatedPosts
          heading="Related Reading"
          slugs={[
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

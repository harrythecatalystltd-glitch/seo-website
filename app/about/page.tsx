import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'

export const metadata: Metadata = {
  title: 'About Me | The Catalyst Method',
  description: 'Why this site exists: my own story of losing myself, finding the inner work again, and wanting to give back what helped me. Free, always.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/about' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/about',
    title: 'About Me | The Catalyst Method',
    description: 'Why this site exists: my own story of losing myself, finding the inner work again, and wanting to give back what helped me.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/harry.png' }],
    siteName: 'The Catalyst Method',
  },
}

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://www.thecatalystmethod.co.uk/#person',
      name: 'Harry',
      email: 'hey@thecatalystmethod.co.uk',
      image: 'https://www.thecatalystmethod.co.uk/harry.png',
      description: 'Shares free tips on confidence, self-belief and letting go of the thoughts that keep people stuck, drawn from his own experience with inner work rather than formal training.',
    },
    {
      '@type': 'AboutPage',
      '@id': 'https://www.thecatalystmethod.co.uk/about',
      url: 'https://www.thecatalystmethod.co.uk/about',
      name: 'About Me',
      inLanguage: 'en-GB',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thecatalystmethod.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.thecatalystmethod.co.uk/about' },
      ],
    },
  ],
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p style={{
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '11px', fontWeight: 700,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      color: '#FFD700', marginBottom: '16px',
    }}>
      {children}
    </p>
  )
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
            About Me
          </div>
          <h1>Why I&apos;m Doing This.</h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.65,
            maxWidth: '580px',
            margin: '0 auto',
            fontFamily: "'Open Sans', sans-serif",
          }}>
            This isn&apos;t a business built to sell you something. Here&apos;s the real story.
          </p>
        </div>
      </section>

      {/* ── Photo + The Story ─────────────────────────── */}
      <section style={{ padding: '72px 24px 0', maxWidth: '760px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/harry.png"
            alt="Harry, The Catalyst Method"
            style={{ width: 140, height: 140, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,215,0,0.35)' }}
          />
        </div>

        <div style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, fontFamily: "'Open Sans', sans-serif" }}>
          <p style={{ marginBottom: 24 }}>
            Before I had kids, I quit my job and went travelling for six months.
          </p>
          <p style={{ marginBottom: 24 }}>
            Somewhere in those six months, meditation and looking inward instead of outward changed how I saw everything. I came home wanting to experience life, not just live it.
          </p>
          <p style={{ marginBottom: 24 }}>
            Then I had two kids. I threw myself into being a parent, and the inner work, the meditation, the yoga, all of it, fell away while I focused on them.
          </p>
          <p style={{ marginBottom: 24 }}>
            About six years later, I was stuck. Low mood, going through the motions, further from that person I&apos;d become while travelling than I realised.
          </p>
          <p style={{ marginBottom: 24 }}>
            So I went back to it. Back to meditation and looking inward, trying to reach a higher level of happiness, get back to enjoying life, and let go of the ego that had built back up.
          </p>
          <p style={{ marginBottom: 24 }}>
            That&apos;s when I read <em>Letting Go</em>. It changed my whole perspective on life. Then <em>Truth vs Falsehood</em>, which put me properly back on the path of working on myself.
          </p>
        </div>
      </section>

      {/* ── Why this exists ───────────────────────────── */}
      <section style={{ padding: '64px 24px 0', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          background: 'rgba(255,215,0,0.06)',
          border: '1.5px solid rgba(255,215,0,0.28)',
          borderRadius: '16px',
          padding: '44px 40px',
        }}>
          <SectionLabel>Why This Site Exists</SectionLabel>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.85, marginBottom: 20, fontFamily: "'Open Sans', sans-serif" }}>
            The more I do this work, the more I want to give instead of take.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.85, marginBottom: 20, fontFamily: "'Open Sans', sans-serif" }}>
            That&apos;s why this site is here. I want to help as many people as I can, for free. I will never sell you anything or pitch you on a call. This is part of my own journey, and helping you is part of how I help myself.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.85, fontFamily: "'Open Sans', sans-serif" }}>
            If you find any of this useful, please share it with someone else who might need it. That&apos;s the only way it reaches more people. No ad budget, just word of mouth.
          </p>
        </div>
      </section>

      {/* ── Honest disclosure ──────────────────────────── */}
      <section style={{ padding: '48px 24px 0', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderLeft: '4px solid rgba(255,255,255,0.25)',
          borderRadius: '0 14px 14px 0',
          padding: '32px 36px',
        }}>
          <p style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.8, fontFamily: "'Open Sans', sans-serif" }}>
            One honest thing before you read anything else here: I am not a trained life coach or counsellor. I can only help you through the lens of what has actually helped me, from my own journey. If that is useful to you, use it. If you need trained professional support, please seek that out too.
          </p>
        </div>
      </section>

      {/* ── What's here ────────────────────────────────── */}
      <section style={{ padding: '72px 24px 0', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <SectionLabel>What&apos;s Here</SectionLabel>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.6rem, 3.8vw, 2.4rem)',
            fontWeight: 900, lineHeight: 1.12,
            letterSpacing: '-0.03em', color: '#FFFFFF',
          }}>
            Three Ways to Get It.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {[
            { title: 'Free Weekly Tips', body: 'The most personal one. Stories and practices from my own journey, straight to your inbox. No sales pitch, ever.' },
            { title: 'The Blog', body: 'Longer pieces I’ve researched or learned, written to help you go deeper on the things that come up most.' },
            { title: 'Email or WhatsApp', body: 'If you want to talk something through directly, reach out. I reply myself.' },
          ].map(({ title, body }) => (
            <div key={title} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '14px',
              padding: '28px 26px',
            }}>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: 10 }}>
                {title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.72, fontFamily: "'Open Sans', sans-serif" }}>
                {body}
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
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
            fontWeight: 900, lineHeight: 1.15,
            letterSpacing: '-0.03em', color: '#FFFFFF',
            marginBottom: 16, position: 'relative',
          }}>
            Start With One Free Tip.
          </h2>
          <p style={{
            fontSize: '1rem', color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7, maxWidth: '480px',
            margin: '0 auto 36px',
            fontFamily: "'Open Sans', sans-serif",
            position: 'relative',
          }}>
            No product to buy, no funnel to sit through. Just free, practical help, and a real person to talk to when you want one.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
            <Link href="/#weekly-tips" className="cta-btn" style={{ padding: '16px 32px' }}>
              <svg viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
              Get Free Weekly Tips
            </Link>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.22)',
              color: '#fff', borderRadius: 11, padding: '16px 30px',
              fontFamily: "'Montserrat', sans-serif", fontSize: '0.95rem', fontWeight: 800,
              textDecoration: 'none', letterSpacing: '0.01em',
            }}>
              <svg width="13" viewBox="0 0 18 30" style={{ fill: 'var(--gold)', flexShrink: 0 }}><path d={BOLT} /></svg>
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

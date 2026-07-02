import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import MailerLiteForm from '@/components/MailerLiteForm'
import BioBlock from '@/components/BioBlock'
import { getRelevantArticles } from '@/lib/get-relevant-articles'

export const metadata: Metadata = {
  title: 'Confidence & Self-Belief Coaching | The Catalyst Method',
  description: 'Confidence and self-belief coaching for people who overthink every decision. Free weekly tips, no sales pitch, plus support if you want it.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/',
    title: 'Confidence & Self-Belief Coaching | The Catalyst Method',
    description: 'Confidence and self-belief coaching for people who overthink every decision. Free weekly tips, no sales pitch.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/og', width: 1200, height: 630, alt: 'The Catalyst Method, confidence and self-belief coaching' }],
    siteName: 'The Catalyst Method',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Confidence & Self-Belief Coaching | The Catalyst Method',
    description: 'Confidence and self-belief coaching for people who overthink every decision. Free weekly tips, no sales pitch.',
    images: ['https://www.thecatalystmethod.co.uk/og'],
  },
}

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

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
      '@type': 'WebSite',
      '@id': 'https://www.thecatalystmethod.co.uk/#website',
      url: 'https://www.thecatalystmethod.co.uk',
      name: 'The Catalyst Method',
      publisher: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
    },
  ],
}

/* ── The two recurring CTAs ── */
function ContactCta() {
  return (
    <Link
      href="/contact"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.22)',
        color: '#fff', borderRadius: 11, padding: '16px 30px',
        fontFamily: "'Montserrat', sans-serif", fontSize: '0.95rem', fontWeight: 800,
        textDecoration: 'none', letterSpacing: '0.01em',
      }}
    >
      <svg width="13" viewBox="0 0 18 30" style={{ fill: 'var(--gold)', flexShrink: 0 }}><path d={BOLT} /></svg>
      Contact Me for Help
    </Link>
  )
}

export default async function HomePage() {
  const posts = (await getRelevantArticles()).slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
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
            Confidence &amp; Self-Belief Coaching
          </div>

          <h1>Confidence &amp; Self-Belief Coaching for People Who <em>Overthink</em> Every Decision.</h1>
          <p className="subtitle" style={{ marginBottom: 38 }}>
            Coaching for people who second-guess every decision. Free weekly tips to start, real support when you&apos;re ready for it.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <a href="#weekly-tips" className="cta-btn">
              <svg viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
              Get Free Weekly Tips
            </a>
            <ContactCta />
          </div>

          <div className="input-meta" style={{ marginTop: 28 }}>
            <span className="input-meta-item">Free weekly tips</span>
            <span className="input-meta-item">No sales pitch</span>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>

        {/* ── WEEKLY TIPS FORM ── */}
        <div id="weekly-tips" style={{ padding: '76px 0 0', scrollMarginTop: 100 }}>
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1.5px solid rgba(255,215,0,0.22)',
            borderRadius: 20,
            padding: '48px 40px',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,0.35), 0 0 40px rgba(255,215,0,0.06)',
          }}>
            <div className="brand-tag" style={{ marginBottom: 22 }}>
              <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
              Free Weekly Tips
            </div>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
              Get Free Weekly Tips
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.82, maxWidth: 560, margin: '0 auto 32px' }}>
              One practical email a week on confidence, self-belief, overthinking and decision-making. Real tools you can use the same day, not theory.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <MailerLiteForm />
            </div>
          </div>
        </div>

        {/* ── PROBLEM ── */}
        <div style={{ padding: '76px 0 0' }}>
          <div className="brand-tag" style={{ marginBottom: 22 }}>
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            Sound Familiar?
          </div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            Why You Keep <em>Talking Yourself Out of It.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.82, maxWidth: 560, marginBottom: 44 }}>
            Here&apos;s what I actually think is going on, based on what pulled me out of six stuck years myself. Not a diagnosis, just my honest read on it.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
            {[
              { n: '01', title: 'You Overthink Every Decision', text: 'I think this is your mind defending a position, needing to be certain, needing to be right, rather than actually weighing the choice. That need for certainty is a feeling you haven’t let go of yet, not a fact about the decision. The moment you stop needing to be certain first is the moment you can move.', href: '/overthinking-and-decision-coaching' },
              { n: '02', title: 'Self-Doubt Drowns Out What You Know', text: 'I think self-doubt is a false reality, not a true one, a leftover perspective built from old fears rather than evidence about who you are. The truth is steadier than the doubt makes it feel: you are enough as you are. You only start to feel that once you let the doubt go instead of arguing with it.', href: '/overcome-self-doubt-coaching' },
              { n: '03', title: 'You Feel Stuck, Not Lost', text: 'I think stuck happens when you stop doing the daily work of letting go, so the negative quietly piles up until it is running the show. I lived this for six years. It wasn’t one big problem, just small feelings I never released, stacking until moving felt impossible.', href: '/self-belief-coaching' },
            ].map(c => (
              <div key={c.n} style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '28px 22px' }}>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>{c.n}</div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.92rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: 10, lineHeight: 1.2 }}>{c.title}</div>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.78, marginBottom: 14 }}>{c.text}</p>
                <Link href={c.href} style={{ fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 700, textDecoration: 'none' }}>Read more →</Link>
              </div>
            ))}
          </div>
        </div>

        {/* ── FLAGSHIP: 3 BOOKS ── */}
        <div style={{ padding: '76px 0 0' }}>
          <Link
            href="/blog/3-books-that-changed-my-life"
            style={{
              display: 'block',
              textDecoration: 'none',
              color: 'inherit',
              position: 'relative',
              background: 'linear-gradient(135deg, rgba(0,43,69,0.95), rgba(0,60,95,0.7))',
              border: '1.5px solid rgba(255,215,0,0.45)',
              borderRadius: 22,
              padding: '4px',
              boxShadow: '0 24px 70px rgba(0,0,0,0.45), 0 0 60px rgba(255,215,0,0.14)',
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 260px) 1fr',
              gap: 32,
              alignItems: 'center',
              padding: '32px',
            }}
            className="flagship-grid"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog/3-books-changed-my-life.png"
                alt="3 Books That Pulled Me Out of Feeling Stuck"
                style={{ width: '100%', borderRadius: 14, display: 'block', boxShadow: '0 12px 32px rgba(0,0,0,0.4)' }}
              />
              <div>
                <div className="brand-tag" style={{ marginBottom: 16 }}>
                  <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
                  Where It Actually Started
                </div>
                <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.4rem,3vw,1.9rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 14 }}>
                  3 Books That Pulled Me Out of Feeling Stuck.
                </h2>
                <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.82, marginBottom: 18 }}>
                  Six years stuck, low mood, going through the motions. Three books changed how I see everything: <strong style={{ color: '#fff' }}>Letting Go</strong>, <strong style={{ color: '#fff' }}>Truth vs Falsehood</strong>, and <strong style={{ color: '#fff' }}>The 5am Club</strong>. Everything on this site comes from what they taught me.
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: 'var(--gold)', fontWeight: 800, fontFamily: "'Montserrat',sans-serif" }}>
                  Read the Full Story
                  <svg width="12" viewBox="0 0 18 30" style={{ fill: 'var(--gold)' }}><path d={BOLT} /></svg>
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── ABOUT ME ── */}
        <div style={{ padding: '76px 0 0' }}>
          <BioBlock reason="I'm not a trained life coach. A few years ago I got stuck, low mood, going through the motions, and went back to the inner work that had changed me once before. This site is what came out of it. Free, always, because giving this away is part of my own journey too." />
        </div>

        {/* ── HOW I CAN HELP ── */}
        <div style={{ padding: '76px 0 0' }}>
          <div className="brand-tag" style={{ marginBottom: 22 }}>
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            How I Can Help
          </div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            Two Ways to <em>Get Started.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.82, maxWidth: 560, marginBottom: 44 }}>
            No products to buy and no pressure. Start with free tips, and reach out directly whenever you want a second opinion or some real support.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 16 }}>
            <div style={{ background: 'rgba(255,215,0,0.06)', border: '1.5px solid rgba(255,215,0,0.32)', borderRadius: 18, padding: '34px 30px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 10 }}>Free</div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 10 }}>Weekly Tips in Your Inbox</div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.78, marginBottom: 20 }}>
                One practical email a week on confidence, self-belief, overthinking and decision-making. Real tools you can use the same day, not theory.
              </p>
              <ul style={{ listStyle: 'none', margin: '0 0 26px', padding: 0, flex: 1 }}>
                {['One email a week, nothing more', 'Practical, not motivational fluff', 'Unsubscribe anytime, no hard feelings'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.84rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, padding: '7px 0' }}>
                    <svg width="11" viewBox="0 0 18 30" style={{ fill: 'var(--gold)', flexShrink: 0, marginTop: 3 }}><path d={BOLT} /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#weekly-tips" className="cta-btn" style={{ width: '100%', justifyContent: 'center' }}>
                <svg viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
                Get Free Weekly Tips
              </a>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.12)', borderRadius: 18, padding: '34px 30px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>Direct</div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 10 }}>Talk It Through With Me</div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.78, marginBottom: 20 }}>
                If you want more than an email, whether that&apos;s a one-off conversation or ongoing support, just reach out. No sales script, just a real reply from me.
              </p>
              <ul style={{ listStyle: 'none', margin: '0 0 26px', padding: 0, flex: 1 }}>
                {['A real reply, not a funnel', 'We figure out what’s actually blocking you', 'No pressure, no obligation'].map(f => (
                  <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.84rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, padding: '7px 0' }}>
                    <svg width="11" viewBox="0 0 18 30" style={{ fill: 'var(--gold)', flexShrink: 0, marginTop: 3 }}><path d={BOLT} /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%',
                  background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.22)',
                  color: '#fff', borderRadius: 10, padding: '16px 24px',
                  fontFamily: "'Montserrat', sans-serif", fontSize: '0.95rem', fontWeight: 800, textDecoration: 'none',
                }}
              >
                <svg width="13" viewBox="0 0 18 30" style={{ fill: 'var(--gold)', flexShrink: 0 }}><path d={BOLT} /></svg>
                Contact Me for Help
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── BLOG ── */}
      {posts.length > 0 && (
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '76px 24px 0' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 32 }}>
            <div>
              <div className="brand-tag" style={{ marginBottom: 18 }}>
                <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
                From the Blog
              </div>
              <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Free Confidence &amp; <em>Self-Belief Guides.</em>
              </h2>
            </div>
            <Link href="/blog" style={{ fontSize: '0.85rem', color: 'var(--gold)', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>View all articles →</Link>
          </div>

          <div className="blog-grid">
            {posts.map(article => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="blog-card">
                {article.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="blog-card-img" src={article.image} alt={article.title} />
                )}
                <div className="blog-card-body">
                  {article.category && <div className="blog-card-category">{article.category}</div>}
                  <div className="blog-card-title">{article.title}</div>
                  {article.description && <div className="blog-card-excerpt">{article.description}</div>}
                  <div className="blog-card-meta">
                    {article.publishedAt && new Date(article.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    {article.readingTime && ` · ${article.readingTime} min read`}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

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
                Start With One Free Tip.<br />See Where It Takes You.
              </h2>
              <p>
                No product to buy, no funnel to sit through. Just free, practical help, and a real person to talk to when you want one.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
                <a href="#weekly-tips" className="cta-btn">
                  <svg viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
                  Get Free Weekly Tips
                </a>
                <ContactCta />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

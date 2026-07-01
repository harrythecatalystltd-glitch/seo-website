'use client'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import type { DisplayArticle } from '@/lib/get-relevant-articles'

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

export default function ThankyouClient({ articles }: { articles: DisplayArticle[] }) {
  return (
    <section className="hero hero-blog" style={{ minHeight: '100vh', paddingBottom: 80 }}>
      <SiteNav />
      <div className="bolts-bg" aria-hidden="true">
        {[1,2,3,4,5,6,7].map(n => (
          <svg key={n} className={`bolt b${n}`} viewBox="0 0 18 30">
            <path fill="currentColor" d={BOLT} />
          </svg>
        ))}
      </div>
      <div className="hero-inner" style={{ textAlign: 'center' }}>
        <div className="brand-tag">
          <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
          The Catalyst Method
        </div>
        <h1>Thank You.</h1>
        <p className="hero-sub">
          You&apos;re all set. If you&apos;d like to talk to me directly, send me an email or click below to WhatsApp me.
        </p>
        <div style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="mailto:hey@thecatalystmethod.co.uk" className="cta-btn" style={{ padding: '16px 32px' }}>
            <svg viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
            Email Me
          </a>
          <a
            href="https://wa.me/447787227022"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.22)',
              color: '#fff', borderRadius: 11, padding: '16px 30px',
              fontFamily: "'Montserrat', sans-serif", fontSize: '0.95rem', fontWeight: 800,
              textDecoration: 'none', letterSpacing: '0.01em',
            }}
          >
            <svg width="13" viewBox="0 0 18 30" style={{ fill: 'var(--gold)', flexShrink: 0 }}><path d={BOLT} /></svg>
            WhatsApp Me
          </a>
        </div>
      </div>

      {articles.length > 0 && (
        <div style={{ maxWidth: 960, margin: '76px auto 0', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div className="brand-tag" style={{ marginBottom: 18 }}>
              <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
              While You&apos;re Here
            </div>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              A Few Guides to Get You Started
            </h2>
          </div>

          <div className="blog-grid">
            {articles.map(article => (
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
    </section>
  )
}

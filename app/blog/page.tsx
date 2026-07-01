import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import { manualPosts } from '@/lib/manual-posts'
import { RELEVANT_SEOBOT_SLUGS } from '@/lib/relevant-blog-slugs'

export const metadata: Metadata = {
  title: 'Confidence & Self-Belief Blog | The Catalyst Method',
  description: 'Free weekly tips on confidence, self-belief, overthinking and decision-making. Practical, honest guides — no sales pitch.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/blog' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/blog',
    title: 'Confidence & Self-Belief Blog | The Catalyst Method',
    description: 'Free weekly tips on confidence, self-belief, overthinking and decision-making.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' }],
    siteName: 'The Catalyst Method',
  },
}

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

type Article = {
  id: string
  slug: string
  title: string
  description?: string
  image?: string
  category?: { title?: string }
  publishedAt?: string
  readingTime?: number
}

async function getArticles(): Promise<{ articles: Article[]; total: number }> {
  try {
    const { BlogClient } = await import('seobot')
    const client = new BlogClient(process.env.SEOBOT_API_KEY || '')
    const pageSize = 50
    let page = 0
    const all: Article[] = []
    let total = 0

    while (true) {
      const result = await client.getArticles(page, pageSize) as { articles: Article[]; total: number }
      all.push(...result.articles)
      total = result.total
      if (all.length >= result.total || result.articles.length < pageSize) break
      page++
    }

    return { articles: all, total }
  } catch {
    return { articles: [], total: 0 }
  }
}

type DisplayArticle = {
  slug: string
  title: string
  description?: string
  image?: string
  category?: string
  publishedAt?: string
  readingTime?: number
}

function mergeArticles(seobotArticles: Article[]): DisplayArticle[] {
  const fromSeobot: DisplayArticle[] = seobotArticles.filter(a => RELEVANT_SEOBOT_SLUGS.has(a.slug)).map(a => ({
    slug: a.slug,
    title: a.title,
    description: a.description,
    image: a.image,
    category: a.category?.title,
    publishedAt: a.publishedAt,
    readingTime: a.readingTime,
  }))

  const fromManual: DisplayArticle[] = manualPosts.map(p => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    image: p.image,
    category: p.category,
    publishedAt: p.publishedAt,
    readingTime: p.readingTime,
  }))

  const all = [...fromSeobot, ...fromManual]
  return all.sort((a, b) => {
    if (!a.publishedAt) return 1
    if (!b.publishedAt) return -1
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })
}

export default async function BlogPage() {
  const { articles } = await getArticles()
  const allArticles = mergeArticles(articles)

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
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
      },
      {
        '@type': 'Blog',
        '@id': 'https://www.thecatalystmethod.co.uk/blog#blog',
        name: 'The Catalyst Method Blog',
        description: 'Free weekly tips on confidence, self-belief, overthinking and decision-making.',
        url: 'https://www.thecatalystmethod.co.uk/blog',
        publisher: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
        inLanguage: 'en-GB',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thecatalystmethod.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.thecatalystmethod.co.uk/blog' },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

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
            The Catalyst Method | Blog
          </div>
          <h1>Confidence &amp; Self-Belief<br />for People Who <em>Overthink</em></h1>
          <p className="hero-sub">
            Free, practical guides on confidence, self-belief, overthinking and decision-making. Written to actually help, not to sell you anything.
          </p>
        </div>
      </section>

      <div className="blog-section">
        <p style={{
          maxWidth: '680px', margin: '0 auto 40px',
          textAlign: 'center',
          fontSize: '0.97rem', color: 'rgba(255,255,255,0.5)',
          lineHeight: 1.75, fontFamily: "'Open Sans', sans-serif",
          padding: '0 16px',
        }}>
          The Catalyst Method blog covers confidence, self-belief and the overthinking that gets in the way of deciding anything. Every guide is written for real people, not case studies.
        </p>
        <div className="blog-section-label">
          <div className="blog-section-label-line" />
          <span className="blog-section-label-text">Latest Articles</span>
          <div className="blog-section-label-line" />
        </div>

        {allArticles.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">
              <svg viewBox="0 0 18 30"><path d={BOLT} /></svg>
            </div>
            <h2>First post coming soon</h2>
            <p>We are writing practical guides on confidence, self-belief and decision-making. Check back shortly, or get free weekly tips straight to your inbox.</p>
            <Link href="/#weekly-tips" className="empty-cta">
              <svg viewBox="0 0 18 30"><path d={BOLT} /></svg>
              Get Free Weekly Tips
            </Link>
          </div>
        ) : (
          <div className="blog-grid">
            {allArticles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="blog-card">
                {article.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="blog-card-img" src={article.image} alt={article.title} />
                )}
                <div className="blog-card-body">
                  {article.category && (
                    <div className="blog-card-category">{article.category}</div>
                  )}
                  <div className="blog-card-title">{article.title}</div>
                  {article.description && (
                    <div className="blog-card-excerpt">{article.description}</div>
                  )}
                  <div className="blog-card-meta">
                    {article.publishedAt && new Date(article.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    {article.readingTime && ` · ${article.readingTime} min read`}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

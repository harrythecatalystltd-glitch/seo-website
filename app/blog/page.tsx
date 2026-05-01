import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'

export const metadata: Metadata = {
  title: 'Local SEO and Lead Generation Blog for UK Businesses | The Catalyst Method',
  description: 'Practical local SEO tips, lead generation strategies and website conversion guides for UK small businesses. Free advice from The Catalyst Method.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/blog' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/blog',
    title: 'Local SEO and Lead Generation Blog | The Catalyst Method',
    description: 'Practical local SEO tips, lead generation strategies and website conversion guides for UK small businesses.',
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
    const result = await client.getArticles(0, 12)
    return result as { articles: Article[]; total: number }
  } catch {
    return { articles: [], total: 0 }
  }
}

export default async function BlogPage() {
  const { articles } = await getArticles()

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.thecatalystmethod.co.uk/#organization',
        name: 'The Catalyst Method',
        url: 'https://www.thecatalystmethod.co.uk',
        logo: { '@type': 'ImageObject', url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' },
        email: 'harry@thecatalyst.ltd',
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
      },
      {
        '@type': 'Blog',
        '@id': 'https://www.thecatalystmethod.co.uk/blog#blog',
        name: 'The Catalyst Method Blog',
        description: 'Practical local SEO, lead generation and website conversion guides for UK small businesses.',
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
            The Catalyst Method | SEO Blog
          </div>
          <h1>Local SEO and Lead Generation Blog<br />for <em>UK Small Businesses</em></h1>
          <p className="hero-sub">
            Practical guides, SEO tips and lead generation strategies — written for local business
            owners who want more enquiries from Google.
          </p>
        </div>
      </section>

      <div className="blog-section">
        <div className="blog-section-label">
          <div className="blog-section-label-line" />
          <span className="blog-section-label-text">Latest Articles</span>
          <div className="blog-section-label-line" />
        </div>

        {articles.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">
              <svg viewBox="0 0 18 30"><path d={BOLT} /></svg>
            </div>
            <h2>First post coming soon</h2>
            <p>We are writing practical local SEO and lead generation guides for UK business owners. Check back shortly.</p>
            <Link href="/" className="empty-cta">
              <svg viewBox="0 0 18 30"><path d={BOLT} /></svg>
              Get Your Free Website Audit
            </Link>
          </div>
        ) : (
          <div className="blog-grid">
            {articles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="blog-card">
                {article.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="blog-card-img" src={article.image} alt={article.title} />
                )}
                <div className="blog-card-body">
                  {article.category?.title && (
                    <div className="blog-card-category">{article.category.title}</div>
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

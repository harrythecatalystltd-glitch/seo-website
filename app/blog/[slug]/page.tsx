import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

type Article = {
  id: string; slug: string; title: string; description?: string;
  image?: string; content?: string; html?: string;
  category?: { title?: string; slug?: string };
  publishedAt?: string; readingTime?: number;
  author?: { name?: string };
  tags?: Array<{ title: string; slug: string }>;
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const { BlogClient } = await import('seobot')
    const client = new BlogClient(process.env.SEOBOT_API_KEY || '')
    const article = await client.getArticle(slug)
    return article as Article | null
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) return { title: 'Article Not Found | The Catalyst Method' }

  return {
    title: `${article.title} | The Catalyst Method`,
    description: article.description,
    alternates: { canonical: `https://www.thecatalystmethod.co.uk/blog/${slug}` },
    openGraph: {
      type: 'article',
      url: `https://www.thecatalystmethod.co.uk/blog/${slug}`,
      title: article.title,
      description: article.description,
      images: article.image ? [{ url: article.image }] : [{ url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' }],
      siteName: 'The Catalyst Method',
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    image: article.image,
    url: `https://www.thecatalystmethod.co.uk/blog/${slug}`,
    datePublished: article.publishedAt,
    author: { '@type': 'Organization', name: 'The Catalyst Method' },
    publisher: {
      '@type': 'Organization',
      name: 'The Catalyst Method',
      logo: { '@type': 'ImageObject', url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' },
    },
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thecatalystmethod.co.uk/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.thecatalystmethod.co.uk/blog' },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://www.thecatalystmethod.co.uk/blog/${slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div style={{ background: 'var(--navy)', minHeight: '100vh' }}>
        <div className="article-hero hero" style={{ padding: '100px 24px 60px' }}>
          <SiteNav />
          <div className="hero-inner" style={{ textAlign: 'center' }}>
            {article.category?.title && (
              <div className="brand-tag" style={{ marginBottom: '20px' }}>
                <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
                {article.category.title}
              </div>
            )}
            <h1 style={{ maxWidth: '680px' }}>{article.title}</h1>
            <div className="article-meta">
              {article.publishedAt && (
                <span>{new Date(article.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              )}
              {article.readingTime && <span>{article.readingTime} min read</span>}
            </div>
          </div>
        </div>

        <div className="article-page">
          {article.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={article.image}
              alt={article.title}
              style={{ width: '100%', borderRadius: '14px', marginBottom: '40px', display: 'block' }}
            />
          )}

          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.html || article.content || '' }}
          />

          <div style={{ marginTop: '60px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <Link
              href="/blog"
              style={{ color: 'rgba(255,215,0,0.7)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600 }}
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

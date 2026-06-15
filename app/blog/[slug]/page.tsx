import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import { manualPosts } from '@/lib/manual-posts'
import { SEOBOT_DATE_OVERRIDES } from '@/lib/seobot-overrides'

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

type Article = {
  id: string; slug: string; title: string; description?: string;
  image?: string; content?: string; html?: string;
  category?: { title?: string; slug?: string };
  publishedAt?: string; readingTime?: number;
  author?: { name?: string };
  tags?: Array<{ title: string; slug: string }>;
}

function removeBlockContaining(html: string, searchText: string): string {
  const idx = html.toLowerCase().indexOf(searchText.toLowerCase())
  if (idx === -1) return html
  let depth = 0
  let blockStart = 0
  for (let i = idx; i >= 0; i--) {
    if (html.slice(i, i + 6) === '</div>') { depth++ }
    else if (html.slice(i, i + 4) === '<div') {
      if (depth === 0) { blockStart = i; break }
      depth--
    }
  }
  depth = 0
  let blockEnd = html.length
  for (let i = blockStart; i < html.length; i++) {
    if (html.slice(i, i + 4) === '<div') { depth++ }
    else if (html.slice(i, i + 6) === '</div>') {
      depth--
      if (depth === 0) { blockEnd = i + 6; break }
    }
  }
  return html.slice(0, blockStart) + html.slice(blockEnd)
}

function stripOldCtas(html: string): string {
  let cleaned = html
  for (const sig of ['Skool group', 'Launch your own PT Academy', 'PT/SMT Academy']) {
    cleaned = removeBlockContaining(cleaned, sig)
  }
  return cleaned
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const { BlogClient } = await import('seobot')
    const client = new BlogClient(process.env.SEOBOT_API_KEY || '')
    const raw = await client.getArticle(slug)
    if (!raw) return null
    const r = raw as unknown as Record<string, unknown>
    return {
      ...raw,
      description: (r.metaDescription as string) || (r.description as string) || undefined,
      html: raw.html ? stripOldCtas(raw.html) : raw.html,
      publishedAt: SEOBOT_DATE_OVERRIDES[slug] || (r.publishedAt as string) || undefined,
    } as Article
  } catch {
    return null
  }
}

async function resolveArticle(slug: string): Promise<Article | null> {
  const seobotArticle = await getArticle(slug)
  if (seobotArticle) return seobotArticle

  const manual = manualPosts.find(p => p.slug === slug)
  if (!manual) return null

  return {
    id: manual.slug,
    slug: manual.slug,
    title: manual.title,
    description: manual.description,
    image: manual.image,
    html: manual.html,
    category: { title: manual.category },
    publishedAt: manual.publishedAt,
    readingTime: manual.readingTime,
    author: { name: 'The Catalyst Method' },
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = await resolveArticle(slug)
  if (!article) return { title: 'Article Not Found | The Catalyst Method' }

  const title = article.title || 'The Catalyst Method Blog'
  const description = article.description || undefined
  const imageUrl = article.image ? `https://www.thecatalystmethod.co.uk${article.image}` : 'https://www.thecatalystmethod.co.uk/mainlogo.png'

  return {
    title: `${title} | The Catalyst Method`,
    description,
    alternates: { canonical: `https://www.thecatalystmethod.co.uk/blog/${slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'article',
      url: `https://www.thecatalystmethod.co.uk/blog/${slug}`,
      title,
      description,
      images: [{ url: imageUrl }],
      siteName: 'The Catalyst Method',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await resolveArticle(slug)
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
      { '@type': 'ListItem', position: 3, name: article.title || slug, item: `https://www.thecatalystmethod.co.uk/blog/${slug}` },
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

          <div style={{
            marginTop: '52px',
            background: 'radial-gradient(ellipse at 50% 0%, #004a75 0%, #001a2e 80%)',
            border: '1.5px solid rgba(255,215,0,0.22)',
            borderRadius: '16px',
            padding: '36px 32px',
            textAlign: 'center',
          }}>
            <div style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '1.15rem', fontWeight: 900,
              color: '#fff', letterSpacing: '-0.02em', marginBottom: '10px',
            }}>
              See exactly what&apos;s holding your website back
            </div>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.58)', marginBottom: '22px', lineHeight: 1.7 }}>
              Run the free 16-point audit. Takes 10 seconds. No sign-up needed.
            </p>
            <Link href="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#FFD700', color: '#002B45',
              borderRadius: '10px', padding: '14px 28px',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.9rem', fontWeight: 800,
              textDecoration: 'none', letterSpacing: '0.01em',
              boxShadow: '0 4px 20px rgba(255,215,0,0.35)',
            }}>
              Scan My Website Free
            </Link>
          </div>

          <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
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

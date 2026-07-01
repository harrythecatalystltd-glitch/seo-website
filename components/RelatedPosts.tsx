import Link from 'next/link'
import { getRelevantArticles } from '@/lib/get-relevant-articles'

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

export default async function RelatedPosts({ slugs, heading }: { slugs: string[]; heading: string }) {
  const all = await getRelevantArticles()
  const bySlug = new Map(all.map(a => [a.slug, a]))
  const posts = slugs.map(slug => bySlug.get(slug)).filter((a): a is NonNullable<typeof a> => Boolean(a))

  if (posts.length === 0) return null

  return (
    <div style={{ padding: '76px 0 0' }}>
      <div className="brand-tag" style={{ marginBottom: 18 }}>
        <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
        Go Deeper
      </div>
      <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 32 }}>
        {heading}
      </h2>
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
  )
}

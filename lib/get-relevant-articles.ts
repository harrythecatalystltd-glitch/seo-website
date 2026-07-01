import { manualPosts } from '@/lib/manual-posts'
import { RELEVANT_SEOBOT_SLUGS } from '@/lib/relevant-blog-slugs'

type SeobotArticle = {
  slug: string
  title: string
  description?: string
  image?: string
  category?: { title?: string }
  publishedAt?: string
  readingTime?: number
}

export type DisplayArticle = {
  slug: string
  title: string
  description?: string
  image?: string
  category?: string
  publishedAt?: string
  readingTime?: number
}

async function fetchAllSeobotArticles(): Promise<SeobotArticle[]> {
  try {
    const { BlogClient } = await import('seobot')
    const client = new BlogClient(process.env.SEOBOT_API_KEY || '')
    const pageSize = 50
    let page = 0
    const all: SeobotArticle[] = []

    while (true) {
      const result = await client.getArticles(page, pageSize) as { articles: SeobotArticle[]; total: number }
      all.push(...result.articles)
      if (all.length >= result.total || result.articles.length < pageSize) break
      page++
    }

    return all
  } catch {
    return []
  }
}

export async function getRelevantArticles(): Promise<DisplayArticle[]> {
  const seobotArticles = await fetchAllSeobotArticles()

  const fromSeobot: DisplayArticle[] = seobotArticles
    .filter(a => RELEVANT_SEOBOT_SLUGS.has(a.slug))
    .map(a => ({
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

  return [...fromSeobot, ...fromManual].sort((a, b) => {
    if (!a.publishedAt) return 1
    if (!b.publishedAt) return -1
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })
}

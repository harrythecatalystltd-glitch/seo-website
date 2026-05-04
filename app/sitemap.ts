import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.thecatalystmethod.co.uk'

type Article = {
  slug: string
  publishedAt?: string
}

async function getAllArticles(): Promise<Article[]> {
  try {
    const { BlogClient } = await import('seobot')
    const client = new BlogClient(process.env.SEOBOT_API_KEY || '')
    const pageSize = 50
    let page = 0
    const all: Article[] = []

    while (true) {
      const result = await client.getArticles(page, pageSize) as { articles: Article[]; total: number }
      all.push(...result.articles)
      if (all.length >= result.total || result.articles.length < pageSize) break
      page++
    }

    return all
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/signup`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]

  const blogRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: article.publishedAt ? new Date(article.publishedAt) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}

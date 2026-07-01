import type { MetadataRoute } from 'next'
import { manualPosts } from '@/lib/manual-posts'
import { SEOBOT_DATE_OVERRIDES } from '@/lib/seobot-overrides'
import { RELEVANT_SEOBOT_SLUGS } from '@/lib/relevant-blog-slugs'

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
      url: `${BASE_URL}/self-belief-coaching`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/overthinking-and-decision-coaching`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/confidence-coaching-at-work`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/overcome-self-doubt-coaching`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/keyword-analyser`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/youtube-title-analyser`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/youtube-description-generator`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ]

  const seobotRoutes: MetadataRoute.Sitemap = articles.filter((article) => RELEVANT_SEOBOT_SLUGS.has(article.slug)).map((article) => {
    const overriddenDate = SEOBOT_DATE_OVERRIDES[article.slug] || article.publishedAt
    return {
      url: `${BASE_URL}/blog/${article.slug}`,
      lastModified: overriddenDate ? new Date(overriddenDate) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }
  })

  const manualRoutes: MetadataRoute.Sitemap = manualPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...manualRoutes, ...seobotRoutes]
}

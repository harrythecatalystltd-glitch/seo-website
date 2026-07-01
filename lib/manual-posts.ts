export type ManualPost = {
  slug: string
  title: string
  description: string
  category: string
  publishedAt: string
  readingTime: number
  image?: string
  html: string
}

// All previous manual posts were written for the old SEO/lead-gen agency
// positioning and have been removed as part of the confidence/self-belief
// coaching rebuild. Their URLs redirect to /blog — see next.config.ts.
export const manualPosts: ManualPost[] = []

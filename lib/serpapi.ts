import type { SerpResult, PAA } from './keyword-types'
import { extractDomain } from './difficulty'
import { SITE_CONFIG } from './site-config'

interface SerpApiResponse {
  organic_results?: Array<{
    position: number
    title: string
    link: string
    displayed_link?: string
    snippet?: string
  }>
  related_questions?: Array<{
    question: string
    snippet?: string
  }>
  error?: string
}

export async function fetchSerpData(keyword: string): Promise<{
  serpResults: SerpResult[]
  paaQuestions: PAA[]
}> {
  const apiKey = process.env.SERPAPI_KEY
  if (!apiKey) {
    throw new Error('SERPAPI_KEY environment variable is not set.')
  }

  const params = new URLSearchParams({
    api_key: apiKey,
    q: keyword,
    gl: SITE_CONFIG.locale,
    hl: SITE_CONFIG.language,
    num: '10',
    engine: 'google',
  })

  const res = await fetch(`https://serpapi.com/search.json?${params.toString()}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`SerpAPI returned ${res.status}: ${res.statusText}`)
  }

  const data: SerpApiResponse = await res.json()

  if (data.error) {
    throw new Error(`SerpAPI error: ${data.error}`)
  }

  const serpResults: SerpResult[] = (data.organic_results ?? []).map(r => ({
    position: r.position,
    title: r.title,
    url: r.link,
    domain: extractDomain(r.link),
    displayedUrl: r.displayed_link,
    snippet: r.snippet,
  }))

  const paaQuestions: PAA[] = (data.related_questions ?? []).map(q => ({
    question: q.question,
    snippet: q.snippet,
  }))

  return { serpResults, paaQuestions }
}

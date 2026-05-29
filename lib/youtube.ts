import type { YouTubeVideo, RelatedSearch, TitlePattern, TitleSuggestion, YouTubeAnalysis } from './youtube-types'

/* ── SerpAPI response shape ── */
interface SerpYouTubeResponse {
  video_results?: Array<{
    position?: number
    title: string
    link: string
    channel?: { name?: string; verified?: boolean }
    views?: number
    length?: string
    description?: string
    published_date?: string
  }>
  related_searches?: Array<{
    query: string
    link?: string
  }>
  error?: string
}

/* ── Fetch ── */
export async function fetchYouTubeData(keyword: string): Promise<{
  videos: YouTubeVideo[]
  relatedSearches: RelatedSearch[]
}> {
  const apiKey = process.env.SERPAPI_KEY
  if (!apiKey) throw new Error('SERPAPI_KEY environment variable is not set.')

  const params = new URLSearchParams({
    api_key: apiKey,
    engine: 'youtube',
    search_query: keyword,
    gl: 'gb',
    hl: 'en',
  })

  const res = await fetch(`https://serpapi.com/search.json?${params.toString()}`, {
    cache: 'no-store',
  })

  if (!res.ok) throw new Error(`SerpAPI returned ${res.status}: ${res.statusText}`)

  const data: SerpYouTubeResponse = await res.json()
  if (data.error) throw new Error(`SerpAPI error: ${data.error}`)

  const videos: YouTubeVideo[] = (data.video_results ?? []).slice(0, 10).map((v, i) => ({
    position: v.position ?? i + 1,
    title: v.title,
    url: v.link,
    channel: v.channel?.name ?? 'Unknown',
    channelVerified: v.channel?.verified,
    views: v.views,
    duration: v.length,
    description: v.description,
    publishedDate: v.published_date,
  }))

  const relatedSearches: RelatedSearch[] = (data.related_searches ?? []).slice(0, 8).map(s => ({
    query: s.query,
    link: s.link,
  }))

  return { videos, relatedSearches }
}

/* ── Pattern detection helpers ── */
const hasNumbers    = (t: string) => /\b\d+\b/.test(t)
const isHowTo       = (t: string) => /\bhow\s+(to|i|we)\b/i.test(t)
const isPersonal    = (t: string) => /\b(i |i'|my |we |our |i've|i'm|i tried|i spent|i did)\b/i.test(t)
const isQuestion    = (t: string) => t.includes('?') || /^(what|why|how|when|where|who|which|can|should|is|are|do|does)\b/i.test(t)
const hasBrackets   = (t: string) => /[\[\(]/.test(t)
const hasTimeBound  = (t: string) => /\b(\d+\s*(days?|weeks?|months?|hours?|minutes?|years?)|in\s+\d+|challenge)\b/i.test(t)

/* ── Pattern analysis ── */
export function analysePatterns(videos: YouTubeVideo[]): TitlePattern[] {
  if (!videos.length) return []
  const titles = videos.map(v => v.title)
  const n = titles.length

  const pct = (count: number) => Math.round((count / n) * 100)

  const checks: Array<{
    name: string
    emoji: string
    fn: (t: string) => boolean
    tip: string
  }> = [
    { name: 'How-to',          emoji: '🎓', fn: isHowTo,     tip: 'Tutorials and instructional content — high intent, strong for beginners searching for answers.' },
    { name: 'Numbers / Lists', emoji: '🔢', fn: hasNumbers,  tip: 'Numbered titles set clear expectations and tend to outperform vague titles in click-through rate.' },
    { name: 'Personal / Story',emoji: '👤', fn: isPersonal,  tip: 'First-person titles build trust and curiosity — viewers want to see a real person\'s experience.' },
    { name: 'Question',        emoji: '❓', fn: isQuestion,  tip: 'Question-format titles directly match how people search and often trigger YouTube\'s suggested video placement.' },
    { name: 'Brackets / Tags', emoji: '🏷',  fn: hasBrackets, tip: 'Brackets like (Full Tutorial) or [WATCH THIS] add context and have been shown to lift CTR by 38%.' },
    { name: 'Time-bound',      emoji: '⏱', fn: hasTimeBound,tip: '"30 days", "in 1 hour", "challenge" — time-framing creates curiosity and signals a specific, watchable journey.' },
  ]

  return checks
    .map(c => {
      const matching = titles.filter(c.fn)
      return {
        name: c.name,
        emoji: c.emoji,
        count: matching.length,
        percentage: pct(matching.length),
        examples: matching.slice(0, 2),
        tip: c.tip,
      }
    })
    .sort((a, b) => b.percentage - a.percentage)
}

/* ── Title suggestions ── */
function cap(s: string) { return s.charAt(0).toUpperCase() + s.slice(1) }

function labelFromPattern(percentage: number): TitleSuggestion['label'] {
  if (percentage >= 60) return 'Long Game'
  if (percentage >= 25) return 'Medium Term'
  return 'Quick Win'
}

export function generateYouTubeTitles(
  keyword: string,
  videos: YouTubeVideo[],
  patterns: TitlePattern[]
): TitleSuggestion[] {
  const kw = cap(keyword)
  const titles = videos.map(v => v.title.toLowerCase())
  const year = new Date().getFullYear()

  const patMap = Object.fromEntries(patterns.map(p => [p.name, p.percentage]))
  const howToPct    = patMap['How-to'] ?? 0
  const numbersPct  = patMap['Numbers / Lists'] ?? 0
  const personalPct = patMap['Personal / Story'] ?? 0
  const questionPct = patMap['Question'] ?? 0
  const timePct     = patMap['Time-bound'] ?? 0
  const bracketPct  = patMap['Brackets / Tags'] ?? 0

  const covered = (word: string) => titles.some(t => t.includes(word.toLowerCase()))

  const suggestions: TitleSuggestion[] = [

    {
      title: `How to ${kw} in ${year} (step by step)`,
      label: labelFromPattern(howToPct),
      angle: 'How-to',
      explanation: howToPct >= 60
        ? `How-to titles dominate this topic. To stand out you need a sharper angle — add a specific outcome, timeframe or audience in the title rather than just "step by step".`
        : howToPct >= 25
        ? `Some how-to content exists but there is still room. A well-structured tutorial with a clear outcome in the title should perform.`
        : `How-to content is rare here. A clear tutorial with a specific promise in the title is a straightforward gap to fill.`,
    },

    {
      title: `I tried ${kw} for 30 days — here's what actually happened`,
      label: labelFromPattern(personalPct),
      angle: 'Personal story / results',
      explanation: personalPct >= 60
        ? `Personal story content is already common here. Go more specific — a stronger result ("from 0 to X") or a more honest angle ("it didn't work and here's why") will stand out.`
        : `First-person results content is rare in these results. Personal experience videos build trust quickly and YouTube recommends them heavily because they keep people watching.`,
    },

    {
      title: `${numbers(titles)} things nobody tells you about ${kw}`,
      label: labelFromPattern(numbersPct),
      angle: 'Numbered list',
      explanation: numbersPct >= 60
        ? `Numbered titles are crowded here. If you use a list format, the number and the "nobody tells you" framing makes it feel more original than a generic tips video.`
        : `Numbered titles are underused for this topic. They set clear expectations and tend to win higher click-through rate than vague headline formats.`,
    },

    {
      title: `Is ${kw} actually worth it in ${year}?`,
      label: labelFromPattern(questionPct),
      angle: 'Question / honest take',
      explanation: questionPct >= 60
        ? `Question titles are common here — the "actually worth it" framing makes yours feel more honest and contrarian than the standard "should I do X" format.`
        : `Question titles are rare in these results. YouTube surfaces question-format videos heavily in suggested feeds because they match how people phrase searches.`,
    },

    {
      title: covered('mistake') || covered('wrong')
        ? `The ${kw} mistake that costs people the most time`
        : `Stop doing ${kw} wrong — watch this first`,
      label: covered('mistake') || covered('wrong') ? 'Medium Term' : 'Quick Win',
      angle: 'Mistakes / warning',
      explanation: covered('mistake') || covered('wrong')
        ? `Mistake content exists in the top results. Make yours more specific with a single, concrete mistake rather than a list — the more specific the pain point, the higher the click-through rate.`
        : `No top-ranked video covers the mistakes angle. Warning-style titles attract high engagement because viewers check whether they are doing something wrong.`,
    },

    {
      title: `${kw}: what works, what doesn't, and what to do instead`,
      label: 'Medium Term',
      angle: 'Honest review / reality check',
      explanation: `"What works / what doesn't" framing positions your video as a definitive resource rather than another tutorial. It attracts viewers who have already tried other content and want a clearer picture.`,
    },

    {
      title: `How I went from zero to [result] with ${kw} (full breakdown)`,
      label: labelFromPattern(personalPct),
      angle: 'Transformation story',
      explanation: `Transformation titles ("from X to Y") are among the highest-retention formats on YouTube. Viewers stay to find out how the story ends, which boosts watch time and signals quality to the algorithm.`,
    },

    {
      title: `${kw} for beginners — everything you need to get started`,
      label: covered('beginner') || covered('starter') ? 'Medium Term' : 'Quick Win',
      angle: 'Beginner entry point',
      explanation: covered('beginner') || covered('starter')
        ? `Some beginner content exists. To differentiate, be more specific in the title about what "everything you need" actually includes.`
        : `No beginner-focused video ranks in the top 10. New audiences searching this topic have no single go-to starting point — that gap is yours to own.`,
    },

    {
      title: `${kw} in ${year}: the honest truth (no fluff)`,
      label: labelFromPattern(bracketPct),
      angle: 'Honest / no-fluff',
      explanation: `"The honest truth" framing works because it implies other content is misleading. Combined with the year for freshness, this title signals a video that gets straight to the point — which appeals to experienced searchers who have been burned by vague content before.`,
    },

    {
      title: `What I wish I knew before starting with ${kw}`,
      label: timePct >= 40 ? 'Medium Term' : 'Quick Win',
      angle: 'Lessons learned',
      explanation: `"What I wish I knew" titles rank well in suggested feeds because they combine personal authority with the promise of saving the viewer time. They attract mid-journey viewers who have started but are struggling — a highly engaged segment.`,
    },

  ]

  return suggestions
}

/* ── Helper: pick a number that doesn't already exist in top titles ── */
function numbers(titles: string[]): number {
  const used = new Set<number>()
  titles.forEach(t => {
    const m = t.match(/\b(\d+)\b/g)
    if (m) m.forEach(n => used.add(parseInt(n)))
  })
  for (const n of [7, 5, 9, 6, 8, 10, 11, 12]) {
    if (!used.has(n)) return n
  }
  return 7
}

/* ── Full analysis ── */
export async function analyseYouTube(keyword: string): Promise<YouTubeAnalysis> {
  const { videos, relatedSearches } = await fetchYouTubeData(keyword)

  if (!videos.length) {
    throw new Error('No YouTube results returned. Check your SerpAPI key or try a different keyword.')
  }

  const patterns = analysePatterns(videos)
  const suggestions = generateYouTubeTitles(keyword, videos, patterns)

  return { keyword, videos, relatedSearches, patterns, suggestions }
}

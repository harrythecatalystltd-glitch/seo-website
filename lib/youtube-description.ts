export interface DescriptionInput {
  title: string
  tags: string        // comma-separated
  channelName?: string
}

export interface GeneratedDescription {
  full: string        // complete description ready to paste
  aboveFold: string   // first ~125 chars — what shows in search before "Show more"
  hashtags: string[]
  charCount: number
}

/* ── Helpers ── */
function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

/* ── Format detection ── */
type Format = 'howto' | 'numbered' | 'review' | 'story' | 'beginner' | 'general'

function detectFormat(title: string): Format {
  const t = title.toLowerCase()
  if (/\bhow\s+(to|i|we)\b/.test(t) || /^the\s+step\s+by\s+step/.test(t)) return 'howto'
  if (/\b\d+\s*(things|tips|ways|mistakes|reasons|steps|secrets)\b/.test(t) || /\bnobody\s+tells\b/.test(t)) return 'numbered'
  if (/\b(honest|truth|breakdown|reality|actually\s+works|worth\s+it)\b/.test(t)) return 'review'
  if (/\b(i\s+spent|i\s+tried|i\s+tested|mistakes\s+i\s+made|everything\s+i\s+got\s+wrong|when\s+i\s+first\s+started)\b/.test(t)) return 'story'
  if (/\b(beginner|complete\s+guide|start\s+here|from\s+scratch|zero\s+experience|getting\s+started)\b/.test(t)) return 'beginner'
  return 'general'
}

/* ── Topic extraction ── */
// Strips framing language to get the core concept
function extractTopic(title: string): string {
  const t = title
    .replace(/^the\s+step\s+by\s+step\s+guide\s+to\s+/i, '')
    .replace(/^how\s+to\s+/i, '')
    .replace(/^the\s+biggest\s+reason\s+people\s+fail\s+to\s+/i, '')
    .replace(/^the\s+only\s+way\s+to\s+/i, '')
    .replace(/^i\s+spent\s+\d+\s+(days?|weeks?|months?)\s+trying\s+to\s+/i, '')
    .replace(/^the\s+mistakes\s+i\s+made\s+when\s+i\s+first\s+started\s+trying\s+to\s+/i, '')
    .replace(/^everything\s+i\s+got\s+wrong\s+about\s+/i, '')
    .replace(/^the\s+truth\s+about\s+/i, '')
    .replace(/\s+in\s+\d{4}\b/i, '')
    .replace(/\s+(for\s+beginners?|from\s+scratch|properly|as\s+a\s+complete\s+beginner|the\s+right\s+way)\s*/i, '')
    .replace(/\s*:\s*.*$/, '')
    .replace(/\s*\(.*?\)\s*/g, '')
    .trim()
  return t || title
}

/* ── Opening lines (above-the-fold SEO real estate) ── */
// Start with value — don't open with "In this video I..."
function openingLine(topic: string, format: Format): string {
  const tc = cap(topic)
  switch (format) {
    case 'howto':
      return `Learn how to ${topic} the right way. This step-by-step guide covers everything from the basics to the bits most tutorials skip over.`
    case 'numbered': {
      return `${tc} — and the things most people never hear about it. Here's what actually matters and why it makes a difference.`
    }
    case 'review':
      return `The honest truth about ${topic}. This video covers what actually works, what's a waste of your time, and what the results really look like.`
    case 'story':
      return `Here's what actually happened when I got serious about ${topic} — the real process, the mistakes, and what finally worked.`
    case 'beginner':
      return `New to ${topic}? This is the video I wish someone had shown me when I started. Clear, practical, and no unnecessary fluff.`
    default:
      return `Everything you actually need to know about ${topic} — without the jargon, without the padding, and without the generic advice you've already heard.`
  }
}

/* ── Second paragraph (expands the hook) ── */
function secondParagraph(topic: string, format: Format): string {
  switch (format) {
    case 'howto':
      return `Whether you're brand new to ${topic} or you've tried before and got stuck, this video gives you the exact process from start to finish — including the mistakes most people make along the way.`
    case 'numbered':
      return `These are the things I wish someone had told me earlier. If you've been doing ${topic} and not getting the results you expected, at least one of these will explain why.`
    case 'review':
      return `I've tested this properly so you don't have to sit through vague advice. No hype, no fluff — just a straight answer on whether it's worth your time and what to actually do.`
    case 'story':
      return `If you're struggling with ${topic}, this is the video I wish I had when I started. I'm not going to sugarcoat it — there were real mistakes along the way, and I cover all of them.`
    case 'beginner':
      return `I've kept this as simple and practical as possible. No unnecessary theory — just the things you actually need to know to get started and see your first results.`
    default:
      return `If you've been putting ${topic} off or feeling overwhelmed by where to start, this video gives you a clear, practical picture of what to do and in what order.`
  }
}

/* ── Bullet points from tags or sensible fallbacks ── */
function buildBullets(topic: string, tags: string[], format: Format): string {
  const usable = tags
    .filter(t => t.length > 2)
    .slice(0, 4)

  if (usable.length >= 3) {
    return usable.map(t => `→ ${cap(t)}`).join('\n')
  }

  switch (format) {
    case 'howto':
      return [
        `→ Why most people struggle with ${topic}`,
        `→ The exact process, step by step`,
        `→ The most common mistakes to avoid`,
        `→ How to get results faster`,
      ].join('\n')
    case 'review':
      return [
        `→ What works well`,
        `→ What doesn't work (and why)`,
        `→ What I'd do differently`,
        `→ The honest verdict`,
      ].join('\n')
    case 'story':
      return [
        `→ What I tried first (and why it failed)`,
        `→ The turning point`,
        `→ What actually worked`,
        `→ Key takeaways for anyone starting out`,
      ].join('\n')
    case 'beginner':
      return [
        `→ Where to actually start`,
        `→ The basics that matter most`,
        `→ What to ignore when you're starting out`,
        `→ How to build momentum early`,
      ].join('\n')
    default:
      return [
        `→ What most people get wrong`,
        `→ What to focus on first`,
        `→ How to avoid the common mistakes`,
        `→ Where to go from here`,
      ].join('\n')
  }
}

/* ── Hashtag generation ── */
function buildHashtags(title: string, tags: string[]): string[] {
  const STOP = new Set(['this', 'that', 'with', 'from', 'into', 'when', 'what', 'your', 'have', 'will', 'they', 'about', 'actually', 'here', 'just', 'more', 'than', 'some', 'there', 'their', 'were', 'been', 'most', 'also', 'only', 'even', 'back', 'after', 'made', 'make', 'first', 'then', 'over', 'very', 'like', 'many', 'before', 'real', 'right'])

  // Tags take priority — clean them into hashtags
  const fromTags = tags
    .map(t => t.trim().toLowerCase().replace(/\s+/g, ''))
    .filter(t => t.length > 2)

  // Pull significant words from title as a fallback source
  const fromTitle = title.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 3 && !STOP.has(w))
    .map(w => w.replace(/[^\w]/g, ''))

  const seen = new Set<string>()
  const result: string[] = []

  for (const tag of [...fromTags, ...fromTitle]) {
    if (tag && !seen.has(tag) && result.length < 6) {
      seen.add(tag)
      result.push(`#${tag}`)
    }
  }

  return result
}

/* ── Main export ── */
export function generateDescription(input: DescriptionInput): GeneratedDescription {
  const { channelName } = input
  const title = input.title.trim()
  const tags = input.tags.split(',').map(t => t.trim()).filter(Boolean)
  const topic = extractTopic(title)
  const format = detectFormat(title)
  const channel = channelName?.trim() || 'this channel'

  const opening   = openingLine(topic, format)
  const second    = secondParagraph(topic, format)
  const bullets   = buildBullets(topic, tags, format)
  const hashtags  = buildHashtags(title, tags)

  const coverLine = format === 'numbered'
    ? `What I cover:`
    : `What's in this video:`

  const full = [
    opening,
    '',
    second,
    '',
    coverLine,
    bullets,
    '',
    `👉 If this was useful, subscribe to ${channel} for more content like this.`,
    '',
    '⏱️ TIMESTAMPS',
    '0:00 Introduction',
    '[Add your chapter timestamps here]',
    '',
    '🔗 LINKS & RESOURCES MENTIONED',
    '[Add any links or resources here]',
    '',
    '─────────────────────────────────────',
    hashtags.join(' '),
  ].join('\n')

  return {
    full,
    aboveFold: full.slice(0, 125),
    hashtags,
    charCount: full.length,
  }
}

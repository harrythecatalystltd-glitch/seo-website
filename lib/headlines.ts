import type { PAA, SerpResult, DifficultyScore, HeadlineSuggestion } from './keyword-types'

function cap(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function coveredByTop10(signal: string, titles: string[]): boolean {
  const sig = signal.toLowerCase()
  return titles.some(t => t.toLowerCase().includes(sig))
}

function labelFor(
  baseLabel: HeadlineSuggestion['label'],
  covered: boolean
): HeadlineSuggestion['label'] {
  if (!covered) return baseLabel
  const escalation: Record<HeadlineSuggestion['label'], HeadlineSuggestion['label']> = {
    'Quick Win': 'Medium Term',
    'Medium Term': 'Long Game',
    'Long Game': 'Long Game',
  }
  return escalation[baseLabel]
}

// Natural PAA hooks — varied by index so they don't all read the same
const paaHooks = [
  (q: string) => `${q} — and what to do with the answer`,
  (q: string) => `${q}: what most people get wrong`,
  (q: string) => `${q} (the short answer, and the full picture)`,
]

export function generateHeadlines(
  keyword: string,
  paaQuestions: PAA[],
  serpResults: SerpResult[],
  difficulty: DifficultyScore
): HeadlineSuggestion[] {
  const headlines: HeadlineSuggestion[] = []
  const titles = serpResults.map(r => r.title)
  const d = difficulty.score
  const year = new Date().getFullYear()
  const kw = cap(keyword)

  const baseLabel = (low: HeadlineSuggestion['label'], high: HeadlineSuggestion['label']) =>
    d <= 40 ? low : d <= 66 ? high : 'Long Game'

  // PAA-derived — each gets a different natural hook so they don't repeat
  paaQuestions.slice(0, 3).forEach((paa, i) => {
    const question = paa.question.replace(/\?$/, '')
    const words = question.split(' ').slice(0, 4).join(' ')
    const covered = coveredByTop10(words, titles)
    headlines.push({
      headline: paaHooks[i](question),
      label: labelFor(baseLabel('Quick Win', 'Medium Term'), covered),
      explanation: covered
        ? `This "People Also Ask" question has some top-10 coverage — but none of the current results answers it directly and simply. Own the direct answer and you own the featured snippet opportunity.`
        : `Google is already surfacing this question and no top-10 result answers it head-on. Writing a page built around this exact question is one of the lowest-effort routes to a featured snippet.`,
      angle: 'People Also Ask answer',
    })
  })

  // Year-specific — more opinionated than a generic "complete guide"
  const yearCovered = coveredByTop10(year.toString(), titles)
  headlines.push({
    headline: `${kw} in ${year}: what still works and what to stop wasting time on`,
    label: labelFor(baseLabel('Quick Win', 'Medium Term'), yearCovered),
    explanation: yearCovered
      ? `Some results include the year but treat it as decoration — go further by actually updating the content and calling out what's changed.`
      : `No top-10 result signals freshness for ${year}. Google rewards recency for informational queries and your page will stand out in the SERP just by including the year.`,
    angle: 'Freshness / year-specific',
  })

  // Plain English — drop the tired "(No Jargon, No Fluff)" framing
  const beginnerCovered =
    coveredByTop10('beginner', titles) || coveredByTop10('plain english', titles)
  headlines.push({
    headline: `What ${kw} actually means — and why most explanations overcomplicate it`,
    label: labelFor('Quick Win', beginnerCovered),
    explanation: beginnerCovered
      ? `Some beginner-level content exists but none of it owns the "cut through the noise" angle. A genuinely simple, direct page will beat longer, more complex ones for this audience.`
      : `None of the top 10 results use plain-language framing. People searching this keyword are often confused by what they've already read — a page that talks to them like a person will win their click.`,
    angle: 'Plain English / cut the noise',
  })

  // Step-by-step — specific framing, not just "A Guide"
  const stepsCovered = coveredByTop10('step', titles)
  headlines.push({
    headline: `How to ${kw}: the exact process from start to finish`,
    label: labelFor(baseLabel('Quick Win', 'Medium Term'), stepsCovered),
    explanation: stepsCovered
      ? `Step-by-step content exists but tends to be vague. Structure yours with numbered steps, real examples and a clear endpoint — that level of specificity is what wins featured snippets.`
      : `No current top-10 result uses a step-by-step format. Structured how-to content is what Google pulls into featured snippets for process-based queries.`,
    angle: 'Step-by-step how-to',
  })

  // Mistakes — more pointed, less listicle-y
  const mistakesCovered = coveredByTop10('mistake', titles)
  headlines.push({
    headline: `The ${kw} mistakes that cost small businesses the most customers`,
    label: labelFor(baseLabel('Quick Win', 'Medium Term'), mistakesCovered),
    explanation: mistakesCovered
      ? `Mistake-focused content exists — differentiate by being more specific about the consequences of each mistake rather than just listing them.`
      : `No top-10 result covers the mistakes angle. Readers click this format because they want to check they're not doing something wrong — that intent drives high engagement.`,
    angle: 'Mistakes to avoid',
  })

  // Cost — keep it direct, drop the parenthetical label
  const costCovered =
    coveredByTop10('cost', titles) ||
    coveredByTop10('price', titles) ||
    coveredByTop10('pricing', titles)
  headlines.push({
    headline: `How much does ${kw} cost in the UK? Real prices for ${year}`,
    label: labelFor('Quick Win', costCovered),
    explanation: costCovered
      ? `Some pricing content exists — go further with actual price ranges, what affects the cost, and a clear comparison rather than a vague ballpark figure.`
      : `No top-10 result covers pricing. People searching this are close to a decision — a clear, honest breakdown of costs will convert readers better than any other angle.`,
    angle: 'Cost / pricing',
  })

  // UK-specific — more interesting than "A Practical Guide"
  const ukCovered =
    coveredByTop10(' uk', titles) ||
    coveredByTop10('united kingdom', titles) ||
    coveredByTop10('britain', titles)
  headlines.push({
    headline: `${kw} in the UK: what works, what doesn't, and where to start`,
    label: labelFor(baseLabel('Quick Win', 'Medium Term'), ukCovered),
    explanation: ukCovered
      ? `Some UK-specific content exists — go deeper with UK regulations, real local examples and British context rather than Americanised advice.`
      : `No current top-10 result is UK-specific. A page built around UK context, rules and examples will rank for locally-relevant searches that the generic guides completely miss.`,
    angle: 'UK localisation',
  })

  // Checklist — more specific, less corporate
  const checklistCovered = coveredByTop10('checklist', titles)
  headlines.push({
    headline: `Your ${kw} checklist: what to actually do, in the right order`,
    label: labelFor(baseLabel('Quick Win', 'Medium Term'), checklistCovered),
    explanation: checklistCovered
      ? `Checklist content exists but tends to be unordered and incomplete. A well-structured, sequenced checklist that tells readers what to do first is far more useful — and more likely to get saved and shared.`
      : `No checklist format exists in the top 10. Checklist pages win featured snippets, get bookmarked, and attract backlinks because people return to them.`,
    angle: 'Actionable checklist',
  })

  // Quick start — drop "busy business owners", be direct
  headlines.push({
    headline: `${kw}: how to get it done this week without overcomplicating it`,
    label: d <= 40 ? 'Quick Win' : 'Medium Term',
    explanation: `Most content on this topic assumes the reader has time to go deep. A page that respects their time and gets straight to the point will pull a different — often more commercial — audience that the longer guides miss.`,
    angle: 'Quick start / no-faff',
  })

  // Case study — more specific and curious
  headlines.push({
    headline: `What actually happened when a local business got serious about ${kw}`,
    label: d <= 40 ? 'Medium Term' : 'Long Game',
    explanation: `Case study content is highly linkable and ranks for proof-based searches that informational guides never see. A specific story with real numbers builds trust in a way that no amount of tips-and-tricks content can match.`,
    angle: 'Case study / real results',
  })

  return headlines
}

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

  paaQuestions.slice(0, 3).forEach(paa => {
    const question = paa.question.replace(/\?$/, '')
    const words = question.split(' ').slice(0, 4).join(' ')
    const covered = coveredByTop10(words, titles)
    headlines.push({
      headline: `${question}: A Clear Answer for Small Business Owners`,
      label: labelFor(baseLabel('Quick Win', 'Medium Term'), covered),
      explanation: covered
        ? `This "People Also Ask" question has some coverage in the top 10 — but a more direct, jargon-free answer targeting small business owners creates a clear differentiation angle.`
        : `Google is already surfacing this "People Also Ask" question, and no top-10 result answers it directly. This is a clear content gap to fill.`,
      angle: 'People Also Ask answer',
    })
  })

  const yearCovered = coveredByTop10(year.toString(), titles)
  headlines.push({
    headline: `${kw}: The Complete ${year} Guide for UK Small Businesses`,
    label: labelFor(baseLabel('Quick Win', 'Medium Term'), yearCovered),
    explanation: yearCovered
      ? `A few results include the year — differentiate with deeper UK-specific content and a clearer structure.`
      : `No top-10 result includes ${year}. Your page will signal freshness by default, which Google rewards for informational queries.`,
    angle: 'Freshness / year-specific',
  })

  const beginnerCovered =
    coveredByTop10('beginner', titles) || coveredByTop10('plain english', titles)
  headlines.push({
    headline: `${kw} Explained in Plain English (No Jargon, No Fluff)`,
    label: labelFor('Quick Win', beginnerCovered),
    explanation: beginnerCovered
      ? `The beginner angle has some coverage — make yours stand out with real examples and a simpler structure.`
      : `None of the top 10 results use plain-language framing. This angle has strong click-through potential for overwhelmed small business owners.`,
    angle: 'Simplified / plain English',
  })

  const stepsCovered = coveredByTop10('step', titles)
  headlines.push({
    headline: `How to ${kw}: A Step-by-Step Guide (With Examples)`,
    label: labelFor(baseLabel('Quick Win', 'Medium Term'), stepsCovered),
    explanation: stepsCovered
      ? `Step-by-step content exists in the top 10 — outrank it with clearer formatting, more actionable steps, and UK-specific examples.`
      : `No current top-10 result uses a step-by-step format. This structural gap is also well-positioned to win a featured snippet.`,
    angle: 'Step-by-step how-to',
  })

  const mistakesCovered = coveredByTop10('mistake', titles)
  headlines.push({
    headline: `7 ${kw} Mistakes Small Businesses Make (And How to Fix Them)`,
    label: labelFor(baseLabel('Quick Win', 'Medium Term'), mistakesCovered),
    explanation: mistakesCovered
      ? `Some mistake-focused content exists — use specific, real-world errors with data or case study evidence to stand out.`
      : `No top-10 result covers the mistakes angle. Mistake articles attract high click-through rates because readers want to avoid errors.`,
    angle: 'Mistakes to avoid',
  })

  const costCovered =
    coveredByTop10('cost', titles) ||
    coveredByTop10('price', titles) ||
    coveredByTop10('pricing', titles)
  headlines.push({
    headline: `How Much Does ${kw} Cost in the UK? (${year} Pricing Breakdown)`,
    label: labelFor('Quick Win', costCovered),
    explanation: costCovered
      ? `Some pricing content exists — differentiate with real UK price ranges, factors affecting cost, and a comparison table.`
      : `No top-10 result covers pricing. This is a high-intent gap targeting people who are close to a buying decision.`,
    angle: 'Cost / pricing',
  })

  const ukCovered =
    coveredByTop10(' uk', titles) ||
    coveredByTop10('united kingdom', titles) ||
    coveredByTop10('britain', titles)
  headlines.push({
    headline: `${kw} for UK Small Businesses: A Practical ${year} Guide`,
    label: labelFor(baseLabel('Quick Win', 'Medium Term'), ukCovered),
    explanation: ukCovered
      ? `Some UK-specific content exists — go deeper with UK regulations, British English, and local case studies.`
      : `No current top-10 result is UK-specific. A UK-focused piece will rank for locally relevant searches with less competition than generic guides.`,
    angle: 'UK localisation',
  })

  const checklistCovered = coveredByTop10('checklist', titles)
  headlines.push({
    headline: `The ${kw} Checklist: 10 Actions to Take This Month`,
    label: labelFor(baseLabel('Quick Win', 'Medium Term'), checklistCovered),
    explanation: checklistCovered
      ? `Some checklist content exists — make yours more specific, downloadable, or broken into clearer phases to stand out.`
      : `No checklist format exists in the top 10. Checklist-style content is highly actionable and often wins featured snippets for how-to queries.`,
    angle: 'Actionable checklist',
  })

  headlines.push({
    headline: `${kw} in 30 Minutes: A Quick-Start Guide for Busy Business Owners`,
    label: d <= 40 ? 'Quick Win' : 'Medium Term',
    explanation: `Time-bound headlines attract click-throughs from readers who feel overwhelmed. "30 minutes" signals actionability and respect for the reader's time — an angle that consistently outperforms generic guides in CTR for busy small business audiences.`,
    angle: 'Quick start / time-efficient',
  })

  headlines.push({
    headline: `How a Small Business Used ${kw} to Double Their Enquiries (Case Study)`,
    label: d <= 40 ? 'Medium Term' : 'Long Game',
    explanation: `Real case studies with specific results are highly linkable and build trust. They rank for proof-based queries ("does [keyword] actually work?") that informational guides miss, and are especially effective for converting readers into leads.`,
    angle: 'Case study / proof',
  })

  return headlines
}

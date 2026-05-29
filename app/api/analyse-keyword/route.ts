import { NextRequest, NextResponse } from 'next/server'
import { fetchSerpData } from '@/lib/serpapi'
import { calculateDifficulty } from '@/lib/difficulty'
import { generateHeadlines } from '@/lib/headlines'
import type { KeywordAnalysis } from '@/lib/keyword-types'

export async function POST(req: NextRequest) {
  try {
    const { keyword } = await req.json()

    if (!keyword || typeof keyword !== 'string' || keyword.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please provide a keyword of at least 2 characters.' },
        { status: 400 }
      )
    }

    const trimmed = keyword.trim().toLowerCase()

    const { serpResults, paaQuestions } = await fetchSerpData(trimmed)

    if (!serpResults.length) {
      return NextResponse.json(
        { error: 'No results returned. Check your SerpAPI key or try a different keyword.' },
        { status: 502 }
      )
    }

    const difficulty = calculateDifficulty(serpResults)
    const headlines = generateHeadlines(trimmed, paaQuestions, serpResults, difficulty)

    const analysis: KeywordAnalysis = {
      keyword: trimmed,
      difficulty,
      serpResults,
      paaQuestions,
      headlines,
    }

    return NextResponse.json(analysis)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'An unexpected error occurred.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

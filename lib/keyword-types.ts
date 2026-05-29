export interface SerpResult {
  position: number
  title: string
  url: string
  domain: string
  displayedUrl?: string
  snippet?: string
}

export interface PAA {
  question: string
  snippet?: string
}

export type DifficultyLabel = 'green' | 'orange' | 'red'

export interface DifficultyScore {
  score: number
  label: DifficultyLabel
  verdict: string
  explanation: string
}

export type HeadlineLabel = 'Quick Win' | 'Medium Term' | 'Long Game'

export interface HeadlineSuggestion {
  headline: string
  label: HeadlineLabel
  explanation: string
  angle: string
}

export interface KeywordAnalysis {
  keyword: string
  difficulty: DifficultyScore
  serpResults: SerpResult[]
  paaQuestions: PAA[]
  headlines: HeadlineSuggestion[]
}

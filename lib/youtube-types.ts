export interface YouTubeVideo {
  position: number
  title: string
  url: string
  channel: string
  channelVerified?: boolean
  views?: number
  duration?: string
  description?: string
  publishedDate?: string
}

export interface RelatedSearch {
  query: string
  link?: string
}

export interface TitlePattern {
  name: string
  emoji: string
  count: number
  percentage: number
  examples: string[]
  tip: string
}

export type TitleLabel = 'Quick Win' | 'Medium Term' | 'Long Game'

export interface TitleSuggestion {
  title: string
  label: TitleLabel
  angle: string
  explanation: string
}

export interface YouTubeAnalysis {
  keyword: string
  videos: YouTubeVideo[]
  relatedSearches: RelatedSearch[]
  patterns: TitlePattern[]
  suggestions: TitleSuggestion[]
}

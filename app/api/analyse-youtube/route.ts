import { NextRequest, NextResponse } from 'next/server'
import { analyseYouTube } from '@/lib/youtube'

export async function POST(req: NextRequest) {
  try {
    const { keyword } = await req.json()

    if (!keyword || typeof keyword !== 'string' || keyword.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please provide a keyword of at least 2 characters.' },
        { status: 400 }
      )
    }

    const analysis = await analyseYouTube(keyword.trim().toLowerCase())
    return NextResponse.json(analysis)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'An unexpected error occurred.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

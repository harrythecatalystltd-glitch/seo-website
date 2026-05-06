import { NextResponse } from 'next/server'

export async function GET() {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_ANON_KEY
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ count: null }, { status: 200 })
  }
  try {
    const res = await fetch(
      `${supabaseUrl}/rest/v1/counters?counter_id=eq.audit&select=count`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
        },
        next: { revalidate: 60 },
      }
    )
    if (!res.ok) return NextResponse.json({ count: null }, { status: 200 })
    const rows = await res.json() as Array<{ count: number }>
    const count = rows?.[0]?.count ?? null
    return NextResponse.json({ count })
  } catch {
    return NextResponse.json({ count: null }, { status: 200 })
  }
}

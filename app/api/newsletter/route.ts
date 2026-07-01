import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let parsed: Record<string, unknown> = {}
  try {
    parsed = await request.json() as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }

  const email = typeof parsed.email === 'string' ? parsed.email.trim() : ''
  const name  = typeof parsed.name  === 'string' ? parsed.name.trim()  : ''

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const apiKey     = process.env.GHL_API_KEY
  const locationId = process.env.GHL_LOCATION_ID

  if (!apiKey || !locationId) {
    return NextResponse.json({ ok: true })
  }

  try {
    const res = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify({
        email,
        name: name || undefined,
        locationId,
        tags: ['weekly-tips'],
        source: 'Weekly Tips Signup - thecatalystmethod.co.uk',
      }),
    })

    if (!res.ok) {
      console.error('GHL newsletter error:', res.status, await res.text())
    }
  } catch (err) {
    console.error('GHL newsletter subscribe failed:', err)
  }

  return NextResponse.json({ ok: true })
}

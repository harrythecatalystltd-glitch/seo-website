import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let parsed: Record<string, unknown> = {}
  try {
    parsed = await request.json() as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }

  const email  = typeof parsed.email  === 'string' ? parsed.email  : ''
  const score  = parsed.score
  const domain = parsed.domain
  const band   = parsed.band

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
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
        locationId,
        tags: ['seo-lead'],
        customFields: [
          { key: 'audit_score', field_value: String(score ?? '') },
          { key: 'audit_domain', field_value: String(domain ?? '') },
          { key: 'audit_band',   field_value: String(band ?? '') },
        ],
      }),
    })

    const body = await res.text()
    if (!res.ok) {
      console.error('GHL error:', res.status, body)
    }
  } catch (err) {
    console.error('GHL subscribe failed:', err)
  }

  return NextResponse.json({ ok: true })
}

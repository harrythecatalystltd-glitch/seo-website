import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email, score, domain, band } = await request.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const apiKey     = process.env.GHL_API_KEY
  const locationId = process.env.GHL_LOCATION_ID

  if (!apiKey || !locationId) {
    return NextResponse.json({ ok: true })
  }

  try {
    const res = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        locationId,
        customField: {
          audit_score: String(score ?? ''),
          audit_domain: String(domain ?? ''),
          audit_band: String(band ?? ''),
        },
        tags: ['seo-lead'],
      }),
    })

    if (!res.ok) {
      console.error('GHL error:', await res.text())
    }
  } catch (err) {
    console.error('GHL subscribe failed:', err)
  }

  return NextResponse.json({ ok: true })
}

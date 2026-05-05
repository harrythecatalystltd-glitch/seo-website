import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const rawText = await request.text()
  console.log('RAW BODY:', rawText)

  let email: string, score: unknown, domain: unknown, band: unknown
  try {
    ;({ email, score, domain, band } = JSON.parse(rawText))
  } catch {
    console.error('JSON parse failed on:', rawText)
    return NextResponse.json({ error: 'Bad request', raw: rawText }, { status: 400 })
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    console.error('Email invalid:', JSON.stringify(email))
    return NextResponse.json({ error: 'Invalid email', received: email }, { status: 400 })
  }

  const apiKey     = process.env.GHL_API_KEY
  const locationId = process.env.GHL_LOCATION_ID

  if (!apiKey || !locationId) {
    console.error('Missing GHL env vars')
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

    const resBody = await res.text()
    if (!res.ok) {
      console.error('GHL error:', res.status, resBody)
    } else {
      console.log('GHL contact created:', resBody)
    }
  } catch (err) {
    console.error('GHL subscribe failed:', err)
  }

  return NextResponse.json({ ok: true })
}

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let parsed: Record<string, unknown> = {}
  try {
    parsed = await request.json() as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }

  const email       = typeof parsed.email  === 'string' ? parsed.email  : ''
  const name        = typeof parsed.name   === 'string' ? parsed.name   : ''
  const score       = parsed.score
  const domain      = parsed.domain
  const band        = parsed.band
  const critical    = Array.isArray(parsed.critical) ? parsed.critical as { title: string; detail: string }[] : []
  const urgent      = Array.isArray(parsed.urgent)   ? parsed.urgent   as { title: string }[] : []
  const checksCount = typeof parsed.checksCount === 'number' ? parsed.checksCount : 0

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
        name,
        locationId,
        tags: ['seo-lead'],
        customFields: [
          { key: 'audit_score',        field_value: String(score ?? '') },
          { key: 'audit_domain',       field_value: String(domain ?? '') },
          { key: 'audit_band',         field_value: String(band ?? '') },
          { key: 'audit_checks_count', field_value: String(checksCount) },
          { key: 'audit_issue_1',      field_value: critical[0]?.title  ?? '' },
          { key: 'audit_issue_1_detail', field_value: critical[0]?.detail ?? '' },
          { key: 'audit_issue_2',      field_value: critical[1]?.title  ?? '' },
          { key: 'audit_issue_2_detail', field_value: critical[1]?.detail ?? '' },
          { key: 'audit_issue_3',      field_value: critical[2]?.title  ?? '' },
          { key: 'audit_issue_3_detail', field_value: critical[2]?.detail ?? '' },
          { key: 'audit_urgent_1',     field_value: urgent[0]?.title    ?? '' },
          { key: 'audit_urgent_2',     field_value: urgent[1]?.title    ?? '' },
        ],
      }),
    })

    if (!res.ok) {
      console.error('GHL error:', res.status, await res.text())
    }
  } catch (err) {
    console.error('GHL subscribe failed:', err)
  }

  return NextResponse.json({ ok: true })
}

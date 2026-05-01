import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email, score, domain, band } = await request.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const apiKey = process.env.MAILERLITE_API_KEY
  const groupId = process.env.MAILERLITE_GROUP_ID

  if (!apiKey || !groupId) {
    // Silently succeed so the user journey isn't broken
    return NextResponse.json({ ok: true })
  }

  try {
    // Upsert subscriber
    const subRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email,
        fields: {
          audit_score: String(score ?? ''),
          audit_domain: String(domain ?? ''),
          audit_band: String(band ?? ''),
        },
        groups: [groupId],
      }),
    })

    if (!subRes.ok) {
      const err = await subRes.text()
      console.error('MailerLite error:', err)
    }
  } catch (err) {
    console.error('MailerLite subscribe failed:', err)
  }

  // Always return ok — don't block the user journey if MailerLite fails
  return NextResponse.json({ ok: true })
}

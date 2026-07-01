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

  const apiKey  = process.env.MAILERLITE_API_KEY
  const groupId = process.env.MAILERLITE_GROUP_ID

  if (!apiKey) {
    return NextResponse.json({ ok: true })
  }

  try {
    const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email,
        fields: name ? { name } : undefined,
        groups: groupId ? [groupId] : undefined,
      }),
    })

    if (!res.ok) {
      console.error('MailerLite subscribe error:', res.status, await res.text())
    }
  } catch (err) {
    console.error('MailerLite subscribe failed:', err)
  }

  return NextResponse.json({ ok: true })
}

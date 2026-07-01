import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let parsed: Record<string, unknown> = {}
  try {
    parsed = await request.json() as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }

  const name    = typeof parsed.name    === 'string' ? parsed.name.trim()    : ''
  const email   = typeof parsed.email   === 'string' ? parsed.email.trim()   : ''
  const phone   = typeof parsed.phone   === 'string' ? parsed.phone.trim()   : ''
  const message = typeof parsed.message === 'string' ? parsed.message.trim() : ''

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
    return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 })
  }

  const to = process.env.CONTACT_EMAIL_TO || 'hey@thecatalystmethod.co.uk'

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || 'Not provided',
        message,
        _subject: `New contact form message from ${name}`,
        _template: 'table',
        _captcha: 'false',
        _replyto: email,
      }),
    })

    if (!res.ok) {
      console.error('FormSubmit contact error:', res.status, await res.text())
    }
  } catch (err) {
    console.error('FormSubmit contact failed:', err)
  }

  return NextResponse.json({ ok: true })
}

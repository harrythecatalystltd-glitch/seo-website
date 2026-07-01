import { NextResponse } from 'next/server'

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

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

  const apiKey = process.env.RESEND_API_KEY
  const to     = process.env.CONTACT_EMAIL_TO || 'hey@thecatalystmethod.co.uk'

  if (!apiKey) {
    return NextResponse.json({ ok: true })
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'The Catalyst Method <onboarding@resend.dev>',
        to: [to],
        reply_to: email,
        subject: `New contact form message from ${name}`,
        html: `
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        `,
      }),
    })

    if (!res.ok) {
      console.error('Resend contact error:', res.status, await res.text())
    }
  } catch (err) {
    console.error('Resend contact failed:', err)
  }

  return NextResponse.json({ ok: true })
}

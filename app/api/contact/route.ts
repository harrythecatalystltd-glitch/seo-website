import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let parsed: Record<string, unknown> = {}
  try {
    parsed = await request.json() as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }

  const name     = typeof parsed.name     === 'string' ? parsed.name.trim()     : ''
  const email    = typeof parsed.email    === 'string' ? parsed.email.trim()    : ''
  const phone    = typeof parsed.phone    === 'string' ? parsed.phone.trim()    : ''
  const business = typeof parsed.business === 'string' ? parsed.business.trim() : ''
  const message  = typeof parsed.message  === 'string' ? parsed.message.trim()  : ''

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
    return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 })
  }

  const apiKey     = process.env.GHL_API_KEY
  const locationId = process.env.GHL_LOCATION_ID

  if (!apiKey || !locationId) {
    return NextResponse.json({ ok: true })
  }

  try {
    const contactRes = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify({
        email,
        name,
        phone: phone || undefined,
        companyName: business || undefined,
        locationId,
        tags: ['contact-form'],
        source: 'Contact Form — thecatalystmethod.co.uk',
      }),
    })

    if (contactRes.ok) {
      const contactData = await contactRes.json() as { contact?: { id?: string } }
      const contactId = contactData?.contact?.id

      if (contactId) {
        await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'Version': '2021-07-28',
          },
          body: JSON.stringify({
            userId: contactId,
            body: `Contact form enquiry from ${name}${business ? ` (${business})` : ''}:\n\n${message}`,
          }),
        })
      }
    } else {
      console.error('GHL contact error:', contactRes.status, await contactRes.text())
    }
  } catch (err) {
    console.error('GHL contact failed:', err)
  }

  return NextResponse.json({ ok: true })
}

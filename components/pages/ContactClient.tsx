'use client'
import { useState } from 'react'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

type Field = { name: string; email: string; phone: string; message: string }
type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactClient() {
  const [fields, setFields] = useState<Field>({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Partial<Field>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function set(k: keyof Field, v: string) {
    setFields(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(e => ({ ...e, [k]: '' }))
  }

  function validate(): boolean {
    const e: Partial<Field> = {}
    if (!fields.name.trim())    e.name    = 'Please enter your name'
    if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Please enter a valid email'
    if (!fields.message.trim()) e.message = 'Please tell us what you need help with'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      // Posted directly to FormSubmit from the browser (not via our own API
      // route) — FormSubmit blocks server-to-server calls from cloud/hosting
      // IPs like Vercel's, so this has to come from the visitor's own browser.
      const res = await fetch('https://formsubmit.co/ajax/hey@thecatalystmethod.co.uk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          phone: fields.phone || 'Not provided',
          message: fields.message,
          _subject: `New contact form message from ${fields.name}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: fields.email,
        }),
      })
      const data = await res.json().catch(() => null) as { success?: string } | null
      if (!res.ok || data?.success === 'false') {
        setErrorMsg('Something went wrong. Please try again, or email hey@thecatalystmethod.co.uk directly.')
        setStatus('error')
        return
      }
      setStatus('success')
    } catch {
      setErrorMsg('Could not connect. Check your internet and try again.')
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="hero hero-contact">
        <SiteNav />
        <div className="bolts-bg" aria-hidden="true">
          {[1,2,3,4,5,6,7].map(n => (
            <svg key={n} className={`bolt b${n}`} viewBox="0 0 18 30">
              <path fill="currentColor" d={BOLT} />
            </svg>
          ))}
        </div>
        <div className="hero-inner">
          <div className="brand-tag">
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            The Catalyst Method | Get In Touch
          </div>
          <h1>Talk to Me About<br /><em>Confidence &amp; Self-Belief</em></h1>
          <p className="subtitle">
            Stuck overthinking a decision, or just want a second opinion?
            Fill in the form and I&apos;ll reply myself within one business day.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <div className="contact-page">

        {/* Info strip */}
        <div className="contact-info-strip">
          {[
            { icon: '⚡', label: 'Response time', value: 'Within 1 business day' },
            { icon: '📍', label: 'Based in', value: 'United Kingdom' },
            { icon: '✉', label: 'Email us direct', value: 'hey@thecatalystmethod.co.uk' },
          ].map(item => (
            <div key={item.label} className="contact-info-item">
              <span className="contact-info-icon">{item.icon}</span>
              <div>
                <div className="contact-info-label">{item.label}</div>
                <div className="contact-info-value">{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="contact-card">
          {status === 'success' ? (
            <div className="contact-success">
              <div className="contact-success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2>Message sent. I&apos;ll be in touch soon</h2>
              <p>I&apos;ve received your message and will reply within one business day.</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' as const, marginTop: 28 }}>
                <Link href="/#weekly-tips" className="contact-back-btn contact-back-btn-gold">
                  Get Free Weekly Tips
                </Link>
                <Link href="/blog" className="contact-back-btn">
                  Read the Blog
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="contact-card-header">
                <h2>Send Me a Message</h2>
                <p>Tell me what&apos;s going on and what you&apos;d find helpful.</p>
              </div>

              <form onSubmit={submit} noValidate className="contact-form">
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="cf-name">Your Name <span className="contact-required">*</span></label>
                    <input
                      id="cf-name"
                      type="text"
                      placeholder="Harry Smith"
                      value={fields.name}
                      onChange={e => set('name', e.target.value)}
                      className={errors.name ? 'error' : ''}
                      autoComplete="name"
                    />
                    {errors.name && <span className="contact-error">{errors.name}</span>}
                  </div>
                  <div className="contact-field">
                    <label htmlFor="cf-email">Email Address <span className="contact-required">*</span></label>
                    <input
                      id="cf-email"
                      type="email"
                      placeholder="you@example.com"
                      value={fields.email}
                      onChange={e => set('email', e.target.value)}
                      className={errors.email ? 'error' : ''}
                      autoComplete="email"
                    />
                    {errors.email && <span className="contact-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="contact-field contact-field-full">
                  <label htmlFor="cf-phone">Phone Number <span className="contact-optional">(optional)</span></label>
                  <input
                    id="cf-phone"
                    type="tel"
                    placeholder="07700 000 000"
                    value={fields.phone}
                    onChange={e => set('phone', e.target.value)}
                    autoComplete="tel"
                  />
                </div>

                <div className="contact-field contact-field-full">
                  <label htmlFor="cf-message">How can I help? <span className="contact-required">*</span></label>
                  <textarea
                    id="cf-message"
                    placeholder="Tell me what's on your mind: a decision you're stuck on, something you're doubting yourself about, or just what you'd find helpful."
                    value={fields.message}
                    onChange={e => set('message', e.target.value)}
                    className={errors.message ? 'error' : ''}
                    rows={5}
                  />
                  {errors.message && <span className="contact-error">{errors.message}</span>}
                </div>

                {status === 'error' && (
                  <div className="contact-submit-error">{errorMsg}</div>
                )}

                <button type="submit" className="contact-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <><span className="contact-spinner" />Sending…</>
                  ) : (
                    <><svg viewBox="0 0 18 30" width="11"><path fill="currentColor" d={BOLT} /></svg>Send My Message</>
                  )}
                </button>
                <p className="contact-privacy">We&apos;ll never share your details. One reply, no spam.</p>
              </form>
            </>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="contact-bottom">
          <p>Not ready to reach out yet?</p>
          <Link href="/#weekly-tips" className="contact-plan-link">Get free weekly tips instead →</Link>
        </div>
      </div>
    </>
  )
}

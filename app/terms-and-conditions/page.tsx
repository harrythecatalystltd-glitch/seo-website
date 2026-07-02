import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'

export const metadata: Metadata = {
  title: 'Terms & Disclaimer | The Catalyst Method',
  description: 'Important disclaimer: I am not a registered professional, counsellor or qualified therapist. Everything here is free, and shared from lived experience only.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/terms-and-conditions' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/terms-and-conditions',
    title: 'Terms & Disclaimer | The Catalyst Method',
    description: 'Important disclaimer: I am not a registered professional, counsellor or qualified therapist. Everything here is free, and shared from lived experience only.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' }],
    siteName: 'The Catalyst Method',
  },
}

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

const EFFECTIVE_DATE = '2 July 2026'

const SECTIONS = [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: [
      'This page explains the terms of using this website, and sets out an important disclaimer about the nature of the content, tips and emails I share.',
      'The Catalyst Method is run by Harry, contactable at hey@thecatalystmethod.co.uk. Everything on this site, the blog, the weekly emails, and any direct replies by email or WhatsApp, is provided completely free of charge.',
      'By using this site, signing up for weekly tips, or getting in touch, you agree to the terms on this page.',
    ],
  },
  {
    id: 'disclaimer',
    title: '2. Disclaimer: Not Professional Advice',
    highlight: true,
    content: [
      'I am not a registered professional. I am not a qualified or registered counsellor, therapist, psychologist, or life coach, and I hold no formal qualification, accreditation or licence in any of those fields.',
      'Everything I share, on the blog, in the weekly emails, or in a direct conversation, comes from my own lived experience only. It reflects what has personally helped me, not clinical training, professional guidance, or medical advice of any kind.',
      'Nothing on this site should be treated as a substitute for advice from a qualified professional, whether that is a doctor, a registered therapist or counsellor, a mental health service, or any other regulated professional.',
      'You should always use your own judgement, and seek qualified professional support for anything serious, before acting on anything shared on this site.',
    ],
  },
  {
    id: 'no-relationship',
    title: '3. No Professional Relationship Is Formed',
    content: [
      'Signing up for weekly tips, reading the blog, or messaging me by email or WhatsApp does not create a coaching, counselling, therapeutic, or any other professional relationship between us.',
      'Any reply I give you, whether by email, WhatsApp, or otherwise, is given personally and informally, as one person sharing what has helped them. It is not a professional consultation or assessment of your situation.',
    ],
  },
  {
    id: 'when-to-seek-help',
    title: '4. When to Seek Professional Help',
    content: [
      'If you are dealing with something serious, whether that is your mental health, a medical issue, or anything else that feels bigger than what a free email or a personal conversation can help with, please contact a qualified professional.',
      'If you are in the UK and need urgent support, you can contact your GP, call NHS 111, or speak to the Samaritans free, any time, on 116 123.',
      'If you or someone else is in immediate danger, please contact 999 or your local emergency services.',
    ],
  },
  {
    id: 'free-service',
    title: '5. Free Service, No Fees',
    content: [
      'Nothing on this site is for sale. There is no product, no programme, no paid plan, and no charge for the weekly tips, the blog, or replying to your messages, now or in the future for the content and support described here.',
      'Because everything is given freely and in good faith, no warranty or guarantee is made about any outcome, result, or benefit from reading this content or getting in touch.',
    ],
  },
  {
    id: 'limitation-of-liability',
    title: '6. Limitation of Liability',
    content: [
      'You use this site, and act on anything shared on it, entirely at your own discretion and risk.',
      'To the fullest extent permitted by law, The Catalyst Method and Harry accept no liability for any loss, harm, or damage arising from your use of this site, its content, or any advice, tip, or reply given by email, WhatsApp, or otherwise.',
      'Nothing in these terms limits or excludes liability for death or personal injury caused by negligence, fraud, or any other matter that cannot lawfully be excluded under UK law.',
    ],
  },
  {
    id: 'intellectual-property',
    title: '7. Content and Intellectual Property',
    content: [
      'The written content on this site, including the blog posts and weekly emails, belongs to The Catalyst Method. You are welcome to read it, share a link to it, or quote a short excerpt with credit, but please do not republish or resell it in full without asking first.',
    ],
  },
  {
    id: 'privacy',
    title: '8. Privacy',
    content: [
      'If you sign up for weekly tips, your name and email address are used only to send you those emails. If you get in touch by the contact form, email, or WhatsApp, your details are used only to reply to you.',
      'Your details are never sold to third parties. You can unsubscribe from the weekly emails at any time using the link in every email.',
    ],
  },
  {
    id: 'amendments',
    title: '9. Changes to This Page',
    content: [
      'This page may be updated from time to time as the site changes. Continued use of the site after any update means you accept the current version.',
      'This page was last updated on ' + EFFECTIVE_DATE + '.',
    ],
  },
  {
    id: 'governing-law',
    title: '10. Governing Law',
    content: [
      'These terms are governed by the laws of England and Wales.',
    ],
  },
  {
    id: 'contact',
    title: '11. Contact',
    content: [
      'If you have any questions about this page, please get in touch:',
      'Email: hey@thecatalystmethod.co.uk',
      'Website: thecatalystmethod.co.uk',
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="hero hero-blog">
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
            The Catalyst Method | Legal
          </div>
          <h1>Terms &amp; <em>Disclaimer</em></h1>
          <p style={{
            fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)',
            color: 'rgba(255,255,255,0.58)',
            lineHeight: 1.65,
            maxWidth: '520px',
            margin: '0 auto',
            fontFamily: "'Open Sans', sans-serif",
          }}>
            Please read this before relying on anything shared on this site. It matters more than most terms pages.
          </p>
          <p style={{
            marginTop: '18px',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.35)',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>
      </section>

      {/* ── Contents ─────────────────────────────────── */}
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 80px' }}>

        {/* Quick nav */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '14px',
          padding: '28px 32px',
          marginBottom: '52px',
        }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.72rem', fontWeight: 800,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#FFD700', marginBottom: '18px',
          }}>
            Contents
          </p>
          <ol style={{
            listStyle: 'none', padding: 0, margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '6px 24px',
          }}>
            {SECTIONS.map(s => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  style={{
                    fontSize: '0.88rem',
                    color: 'rgba(255,255,255,0.52)',
                    textDecoration: 'none',
                    fontFamily: "'Open Sans', sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Important notice */}
        <div style={{
          background: 'rgba(255,215,0,0.06)',
          border: '1px solid rgba(255,215,0,0.25)',
          borderRadius: '12px',
          padding: '20px 24px',
          marginBottom: '48px',
          display: 'flex',
          gap: '14px',
          alignItems: 'flex-start',
        }}>
          <svg width="16" style={{ marginTop: '2px', flexShrink: 0 }} viewBox="0 0 18 30" fill="#FFD700"><path d={BOLT} /></svg>
          <p style={{
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.65,
            fontFamily: "'Open Sans', sans-serif",
            margin: 0,
          }}>
            <strong style={{ color: '#FFD700', fontFamily: "'Montserrat', sans-serif" }}>Important: </strong>
            I am not a registered professional, counsellor, or qualified therapist. Everything on this site is shared from personal, lived experience only, not professional training. See Section 2 below before relying on anything here.
          </p>
        </div>

        {/* Sections */}
        {SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            style={{ marginBottom: '48px', scrollMarginTop: '24px' }}
          >
            {/* Section header */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              marginBottom: '20px',
              paddingBottom: '14px',
              borderBottom: section.highlight
                ? '1px solid rgba(255,215,0,0.2)'
                : '1px solid rgba(255,255,255,0.07)',
            }}>
              {section.highlight && (
                <div style={{
                  width: '26px', height: '26px',
                  background: 'rgba(255,215,0,0.12)',
                  borderRadius: '6px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="9" viewBox="0 0 18 30" fill="#FFD700"><path d={BOLT} /></svg>
                </div>
              )}
              <h2 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '1.1rem', fontWeight: 900,
                letterSpacing: '-0.01em',
                color: section.highlight ? '#FFD700' : '#FFFFFF',
                margin: 0,
              }}>
                {section.title}
              </h2>
            </div>

            {/* Plain content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {section.content.map((para, i) => (
                <p key={i} style={{
                  fontSize: '0.93rem',
                  color: 'rgba(255,255,255,0.62)',
                  lineHeight: 1.8,
                  fontFamily: "'Open Sans', sans-serif",
                  margin: 0,
                }}>
                  {para}
                </p>
              ))}
            </div>
          </section>
        ))}

        {/* Footer CTA */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '14px',
          padding: '36px 32px',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.95rem', fontWeight: 800,
            color: '#FFFFFF', marginBottom: '8px',
          }}>
            Questions about this page?
          </p>
          <p style={{
            fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.65, marginBottom: '24px',
            fontFamily: "'Open Sans', sans-serif",
          }}>
            Get in touch and I will answer anything.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#FFD700', color: '#002B45',
              fontFamily: "'Montserrat', sans-serif", fontWeight: 800,
              fontSize: '0.82rem', letterSpacing: '0.04em', textTransform: 'uppercase',
              padding: '13px 24px', borderRadius: '8px', textDecoration: 'none',
            }}>
              <svg width="9" viewBox="0 0 18 30" fill="currentColor"><path d={BOLT} /></svg>
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'

export const metadata: Metadata = {
  title: 'Terms and Conditions | The Catalyst Method',
  description: 'Terms and conditions for The Catalyst Method lead generation and SEO plans. Covers subscription terms, website ownership, cancellation policy, and client agreements.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/terms-and-conditions' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/terms-and-conditions',
    title: 'Terms and Conditions | The Catalyst Method',
    description: 'Terms and conditions covering subscription plans, website ownership, cancellation, and client agreements for The Catalyst Method.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' }],
    siteName: 'The Catalyst Method',
  },
}

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

const EFFECTIVE_DATE = '14 May 2026'

const SECTIONS = [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: [
      'These Terms and Conditions ("Terms") govern the agreement between The Catalyst Method ("we", "us", "our") and you ("Client", "you") when you purchase any plan or service from us.',
      'The Catalyst Method is operated by Harry Snape, trading as The Catalyst Method, contactable at hey@thecatalystmethod.co.uk.',
      'By purchasing a plan, clicking a payment link, or signing a client agreement, you confirm that you have read, understood, and agree to be bound by these Terms in full.',
      'These Terms apply to all plans — Basic, Gold, and Platinum — across all billing periods (monthly, 6-month, and 12-month).',
    ],
  },
  {
    id: 'services',
    title: '2. Services',
    content: [
      'The Catalyst Method provides a lead generation and local SEO service for UK-based small businesses. Depending on the plan selected, services include some or all of the following: website audit, keyword research, on-site SEO, SEO content production (blog articles), Google Business Profile optimisation, lead magnet design, CRM setup, email automation, analytics reporting, sales training, and business strategy meetings.',
      'All plans include the free build of a professional website, a CRM setup, a lead magnet, and email automation as stated on our pricing page. These items are included as part of the ongoing service — they are not sold or gifted to the Client independently of the subscription.',
      'The specific deliverables for each plan are set out on our pricing page at thecatalystmethod.co.uk/signup. We reserve the right to update plan inclusions with reasonable notice.',
      'We will deliver services to a professional standard and in accordance with what is reasonably required to fulfil the plan. We do not guarantee specific search rankings, traffic volumes, or enquiry numbers, as these are subject to factors outside our direct control including Google algorithm changes, market competition, and the Client\'s own actions.',
    ],
  },
  {
    id: 'subscription-terms',
    title: '3. Subscription Terms',
    subsections: [
      {
        heading: '3.1 Monthly Rolling Plans',
        points: [
          'Monthly plans operate on a rolling month-to-month basis. The subscription renews automatically each month on the same date as the original purchase.',
          'The minimum initial term is one (1) calendar month. There is no lock-in beyond the current billing period.',
          'To cancel a monthly plan, you must provide at least 30 days\' written notice before your next renewal date. Notice must be sent to hey@thecatalystmethod.co.uk from the email address associated with your account.',
          'You will continue to receive services and be charged until the end of the final billing period following your notice. No refund is issued for unused time within a paid month.',
        ],
      },
      {
        heading: '3.2 6-Month and 12-Month Fixed-Term Plans',
        points: [
          'Clients who purchase a 6-month or 12-month plan enter into a fixed-term agreement with The Catalyst Method.',
          'A formal client agreement will be prepared and sent to the email address provided at the time of purchase. This agreement must be signed before work commences. No services will be delivered until the signed agreement is returned.',
          'Fixed-term plans are not cancellable before the end of the agreed term except in the circumstances described in Section 8 (Cancellation).',
          'At the end of the fixed term, the plan will automatically convert to a rolling monthly arrangement at the then-current monthly rate unless the Client gives 30 days\' written notice of their intention not to renew.',
          'All fees for 6-month and 12-month plans are payable upfront and in full at the time of purchase. No refunds are issued for unused time if a Client cancels or is removed from the service.',
        ],
      },
    ],
  },
  {
    id: 'payment',
    title: '4. Payment',
    content: [
      'All payments are processed securely via Stripe. By completing payment, you authorise us to charge the fee shown at the time of purchase.',
      'Monthly plan fees are charged in advance at the start of each billing period.',
      'All fees are stated in pounds sterling (GBP) and are inclusive of any applicable VAT unless stated otherwise.',
      'If a payment fails, we will notify you and attempt to collect payment again. If payment remains outstanding after 7 days, we reserve the right to suspend services until the outstanding balance is settled.',
      'All fees paid are non-refundable except where we have materially failed to deliver the services agreed and have not remedied that failure within a reasonable period following written notice.',
    ],
  },
  {
    id: 'website-ownership',
    title: '5. Website Ownership and Intellectual Property',
    highlight: true,
    subsections: [
      {
        heading: '5.1 Websites Built by The Catalyst Method',
        points: [
          'A professional website build is included as part of every plan at no additional charge. This website is built as a component of the ongoing service and is not sold, transferred, or gifted to the Client.',
          'All websites designed, built, and maintained by The Catalyst Method — including their design, code, structure, layout, copy, and any custom-built features — remain the intellectual property of The Catalyst Method at all times.',
          'The Client is granted a licence to use the website for the duration of their active subscription. This licence is non-transferable and exists only while the subscription remains paid and active.',
          'If the Client\'s subscription is cancelled for any reason — whether by the Client, by us, or due to non-payment — this licence immediately terminates. The Client loses all rights to use, host, access, claim ownership of, or replicate the website built by The Catalyst Method.',
          'Upon cancellation, The Catalyst Method reserves the right to take the website offline, remove hosting, and reclaim all associated materials. We are under no obligation to transfer website files, code, or assets to the Client.',
        ],
      },
      {
        heading: '5.2 Client-Owned Content',
        points: [
          'The Client retains ownership of all content, images, logos, and brand materials they provided to The Catalyst Method for inclusion in the website or services.',
          'We will, upon written request, return any such materials to the Client within 14 days of a valid cancellation taking effect.',
        ],
      },
      {
        heading: '5.3 Website Buyout',
        points: [
          'If a Client wishes to retain ownership of the website upon cancellation, they may request a website buyout. The buyout fee will be quoted on a case-by-case basis and must be agreed in writing before the cancellation takes effect.',
          'A buyout agreement transfers ownership of the website files and design assets to the Client but does not include any ongoing SEO work, hosting, CRM, or other service components.',
        ],
      },
      {
        heading: '5.4 Other Intellectual Property',
        points: [
          'All SEO strategies, methodologies, content plans, lead magnets, email automations, and reports produced by The Catalyst Method as part of the service remain our intellectual property. The Client may use these outputs during their active subscription but may not reproduce, resell, or distribute them.',
          'The Catalyst Method name, branding, logo, and associated trademarks are our exclusive property and may not be used by the Client without written permission.',
        ],
      },
    ],
  },
  {
    id: 'client-responsibilities',
    title: '6. Client Responsibilities',
    content: [
      'You agree to provide us with accurate information about your business, including correct contact details, business name, services offered, and target location. Inaccurate information that affects our ability to deliver results does not entitle you to a refund.',
      'Where services require your input — such as approving copy, providing photos, or granting access to platforms — you agree to respond to our reasonable requests within a timely manner. Unreasonable delays caused by the Client do not pause billing.',
      'You agree not to use our services for any unlawful purpose and to comply with applicable UK law.',
      'For 6-month and 12-month plans, the Client must sign and return the client agreement before work commences. Failure to return a signed agreement within 14 days of purchase may result in cancellation and, at our discretion, a refund of fees paid.',
    ],
  },
  {
    id: 'cancellation',
    title: '7. Cancellation',
    subsections: [
      {
        heading: '7.1 Cancellation by the Client — Monthly Plans',
        points: [
          'You may cancel your monthly rolling plan at any time by providing 30 days\' written notice to hey@thecatalystmethod.co.uk.',
          'Cancellation takes effect at the end of the billing period following the 30-day notice period. You will be charged for that final period in full.',
          'Upon cancellation, access to the website built by The Catalyst Method and all associated service components will cease at the end of the final billing period.',
        ],
      },
      {
        heading: '7.2 Cancellation by the Client — Fixed-Term Plans',
        points: [
          'Fixed-term plans (6-month or 12-month) may not be cancelled before the end of the agreed term other than in cases where The Catalyst Method has materially breached these Terms and failed to remedy the breach within 14 days of receiving written notice.',
          'Early cancellation of a fixed-term plan does not entitle the Client to a refund of fees already paid.',
        ],
      },
      {
        heading: '7.3 Cancellation by The Catalyst Method',
        points: [
          'We reserve the right to cancel or suspend services at any time if: (a) payment is not received and remains outstanding after 7 days; (b) the Client acts in breach of these Terms; (c) the Client engages in conduct that we reasonably consider harmful to our business or reputation.',
          'Where we cancel for reasons other than Client breach or non-payment, we will provide a pro-rata refund for any unused period of a prepaid plan.',
        ],
      },
    ],
  },
  {
    id: 'limitation-of-liability',
    title: '8. Limitation of Liability',
    content: [
      'We provide our services with reasonable skill and care. However, we do not guarantee specific outcomes including but not limited to Google rankings, traffic volumes, enquiry numbers, or revenue generated.',
      'To the fullest extent permitted by law, The Catalyst Method\'s total liability to you in connection with these Terms shall not exceed the total fees paid by you in the 3 months immediately preceding the event giving rise to the claim.',
      'We shall not be liable for any indirect, consequential, or special loss, including loss of profits, loss of business, or loss of reputation, even if we have been advised of the possibility of such losses.',
      'Nothing in these Terms limits or excludes liability for death or personal injury caused by negligence, fraud, or any other matter that cannot lawfully be excluded.',
    ],
  },
  {
    id: 'confidentiality',
    title: '9. Confidentiality',
    content: [
      'Both parties agree to keep confidential any information shared in the course of the engagement that is identified as confidential or that a reasonable person would understand to be confidential. This includes business strategies, client data, pricing structures, and service methodologies.',
      'This obligation does not apply to information that is or becomes publicly available through no fault of either party, or that is required to be disclosed by law.',
    ],
  },
  {
    id: 'amendments',
    title: '10. Amendments to These Terms',
    content: [
      'We may update these Terms from time to time. Where changes are material, we will notify you by email at least 14 days before the changes take effect.',
      'Your continued use of our services after the effective date of any changes constitutes your acceptance of the revised Terms.',
      'These Terms were last updated on ' + EFFECTIVE_DATE + '.',
    ],
  },
  {
    id: 'governing-law',
    title: '11. Governing Law',
    content: [
      'These Terms and any disputes arising from them are governed by the laws of England and Wales.',
      'Both parties agree to submit to the exclusive jurisdiction of the courts of England and Wales.',
    ],
  },
  {
    id: 'contact',
    title: '12. Contact',
    content: [
      'If you have any questions about these Terms, please contact us at:',
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
          <h1>Terms and <em>Conditions</em></h1>
          <p style={{
            fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)',
            color: 'rgba(255,255,255,0.58)',
            lineHeight: 1.65,
            maxWidth: '520px',
            margin: '0 auto',
            fontFamily: "'Open Sans', sans-serif",
          }}>
            Please read these terms carefully before purchasing a plan. They govern the agreement between you and The Catalyst Method.
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
            If you select a 6-month or 12-month plan, a formal signed agreement is required before work begins.
            This will be sent to your email address after purchase. If you have any questions about these terms before purchasing, contact us at{' '}
            <a href="mailto:hey@thecatalystmethod.co.uk" style={{ color: 'rgba(255,215,0,0.75)', textDecoration: 'none' }}>hey@thecatalystmethod.co.uk</a>.
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
            {'content' in section && section.content && (
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
            )}

            {/* Subsections */}
            {'subsections' in section && section.subsections && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {section.subsections.map((sub) => (
                  <div key={sub.heading} style={{
                    background: section.highlight
                      ? 'rgba(255,215,0,0.04)'
                      : 'rgba(255,255,255,0.03)',
                    border: section.highlight
                      ? '1px solid rgba(255,215,0,0.1)'
                      : '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '10px',
                    padding: '22px 24px',
                  }}>
                    <h3 style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.85rem', fontWeight: 800,
                      letterSpacing: '0.02em',
                      color: section.highlight ? 'rgba(255,215,0,0.85)' : 'rgba(255,255,255,0.85)',
                      marginBottom: '14px',
                    }}>
                      {sub.heading}
                    </h3>
                    <ol style={{
                      listStyle: 'none',
                      padding: 0, margin: 0,
                      display: 'flex', flexDirection: 'column', gap: '10px',
                      counterReset: 'clause-counter',
                    }}>
                      {sub.points.map((point, pi) => (
                        <li key={pi} style={{
                          display: 'flex', gap: '12px', alignItems: 'flex-start',
                        }}>
                          <span style={{
                            flexShrink: 0,
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '0.72rem', fontWeight: 800,
                            color: section.highlight ? 'rgba(255,215,0,0.5)' : 'rgba(255,255,255,0.25)',
                            marginTop: '3px',
                            minWidth: '18px',
                          }}>
                            {pi + 1}.
                          </span>
                          <p style={{
                            fontSize: '0.91rem',
                            color: 'rgba(255,255,255,0.6)',
                            lineHeight: 1.8,
                            fontFamily: "'Open Sans', sans-serif",
                            margin: 0,
                          }}>
                            {point}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            )}
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
            Questions about these terms?
          </p>
          <p style={{
            fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.65, marginBottom: '24px',
            fontFamily: "'Open Sans', sans-serif",
          }}>
            Get in touch before you sign up and we will answer anything.
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
            <Link href="/signup" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.65)',
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: '0.82rem', letterSpacing: '0.04em', textTransform: 'uppercase',
              padding: '13px 24px', borderRadius: '8px', textDecoration: 'none',
            }}>
              View Pricing Plans
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}

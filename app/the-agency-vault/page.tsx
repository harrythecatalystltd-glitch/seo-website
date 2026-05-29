import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'

export const metadata: Metadata = {
  title: 'The Agency Vault | 12 AI Skills for Claude | The Catalyst Method',
  description: 'Get the exact AI skills The Catalyst Method uses every day to grow local businesses. 12 Claude skills covering website design, SEO, sales and business growth. One payment of £97. Keep them forever.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/the-agency-vault' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/the-agency-vault',
    title: 'The Agency Vault | 12 AI Skills for Claude | The Catalyst Method',
    description: 'The exact AI tools we use to grow local businesses. 12 Claude skills for design, SEO, sales and business. One payment of £97. Keep them forever.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' }],
    siteName: 'The Catalyst Method',
  },
}

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'
const STRIPE_URL = 'https://link.fastpaydirect.com/payment-link/6a18434ac3ea3a19f0bd8e8e'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.thecatalystmethod.co.uk/#organization',
      name: 'The Catalyst Method',
      url: 'https://www.thecatalystmethod.co.uk',
      logo: { '@type': 'ImageObject', url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' },
      email: 'harry@thecatalyst.ltd',
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
    },
    {
      '@type': 'Product',
      name: 'The Agency Vault',
      description: '12 AI skills for Claude covering website design, SEO, sales and business growth.',
      brand: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
      offers: {
        '@type': 'Offer',
        price: '97.00',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        url: STRIPE_URL,
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What is The Agency Vault?', acceptedAnswer: { '@type': 'Answer', text: 'The Agency Vault is a collection of 12 AI skills for Claude covering website design, SEO, sales and business growth. These are the exact tools The Catalyst Method uses every day to grow local businesses across the UK. Skills include Frontend Design, UI/UX Pro Max, Design MD, Website Builder, SEO Keyword Research, SEO Blog Builder, SEO Optimiser, Meta Ad Copywriter, Slide Deck Creator, Brainstorming, Writing Plans and Writing Skills.' } },
        { '@type': 'Question', name: 'Is this a subscription?', acceptedAnswer: { '@type': 'Answer', text: 'No. You pay £97 once and keep all 12 skills forever. There are no monthly fees, no renewals and no usage limits. You keep them regardless of what happens to our pricing in the future.' } },
        { '@type': 'Question', name: 'Do I need Claude Code to use these skills?', acceptedAnswer: { '@type': 'Answer', text: 'Most skills work perfectly inside Claude.ai on any paid plan. Only the Website Builder skill achieves its best results inside Claude Code, because it needs to create multiple files and folders at once. Full Claude Code setup instructions are included with your purchase. Claude Code is free to download.' } },
        { '@type': 'Question', name: 'How long does setup take?', acceptedAnswer: { '@type': 'Answer', text: 'Around 5 minutes to install all 12 Claude skills. You go to Settings inside Claude.ai, find the Skills section and upload each folder one by one. A full step by step guide is included with every purchase.' } },
        { '@type': 'Question', name: 'Can I use these skills for client work?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Use them across as many projects and clients as you like with no restrictions on commercial use. Many buyers use these Claude skills to deliver client work and charge for the output.' } },
        { '@type': 'Question', name: 'What version of Claude do I need?', acceptedAnswer: { '@type': 'Answer', text: 'The skills work with Claude.ai on any paid plan. Claude Pro or above is recommended for the best results.' } },
        { '@type': 'Question', name: 'What if I am not technical?', acceptedAnswer: { '@type': 'Answer', text: 'These Claude skills are built for non-technical users. You do not need any coding knowledge or prompt writing experience. If you can type a message into Claude, you can use every skill in this vault.' } },
        { '@type': 'Question', name: 'Do I get access to updates?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. When skills are updated you receive access to the new versions via the same Google Drive link. Your access continues for the lifetime of the product.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thecatalystmethod.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'Agency Vault', item: 'https://www.thecatalystmethod.co.uk/the-agency-vault' },
      ],
    },
  ],
}

export default function AgencyVaultPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className="hero hero-blog">
        <SiteNav />
        <div className="bolts-bg" aria-hidden="true">
          {[1,2,3,4,5,6,7,8].map(n => (
            <svg key={n} className={`bolt b${n}`} viewBox="0 0 18 30">
              <path fill="currentColor" d={BOLT} />
            </svg>
          ))}
        </div>
        <div className="hero-inner">
          <div className="brand-tag">
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            12 AI Skills. One Payment. Keep Forever.
          </div>
          <h1>The Agency<br /><em>Vault.</em></h1>
          <p className="hero-sub" style={{ marginBottom: 40 }}>
            The exact AI tools we use every day to build websites, run SEO campaigns, write ads and grow local businesses across the UK. All 12 skills. All yours for a single payment of £97.
          </p>
          <a href={STRIPE_URL} className="cta-btn" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
            Get Instant Access for £97
          </a>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', marginTop: 14, letterSpacing: '0.03em' }}>
            One payment. Lifetime access. No subscription.
          </p>

          {/* Stats bar */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14,
            overflow: 'hidden', marginTop: 52,
            background: 'rgba(255,255,255,0.03)',
          }}>
            {[
              { num: '12', label: 'AI Skills' },
              { num: '4',  label: 'Categories' },
              { num: '5 min', label: 'To Set Up' },
              { num: '∞', label: 'Uses' },
            ].map(s => (
              <div key={s.label} style={{
                padding: '22px 40px', textAlign: 'center',
                borderRight: '1px solid rgba(255,255,255,0.08)',
              }}>
                <span style={{ display: 'block', fontFamily: "'Montserrat',sans-serif", fontSize: '1.9rem', fontWeight: 900, color: 'var(--gold)', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 5 }}>{s.num}</span>
                <span style={{ fontSize: '0.66rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.38)', fontFamily: "'Montserrat',sans-serif" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF STRIP ── */}
      <div style={{ background: 'rgba(0,0,0,0.25)', borderTop: '1px solid rgba(255,215,0,0.12)', borderBottom: '1px solid rgba(255,215,0,0.12)', padding: '28px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', marginBottom: 18 }}>
            Real results delivered using these exact tools
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 48px', justifyContent: 'center' }}>
            {[
              { num: '+297%', desc: 'Website Traffic' },
              { num: '720',   desc: 'Monthly Users from SEO' },
              { num: '+240%', desc: 'Purchases' },
              { num: '£0',    desc: 'Paid Advertising' },
            ].map(p => (
              <div key={p.desc} style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontFamily: "'Montserrat',sans-serif", fontSize: '1.6rem', fontWeight: 900, color: 'var(--gold)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 3 }}>{p.num}</span>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', fontFamily: "'Montserrat',sans-serif" }}>{p.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN ── */}
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>

        {/* WHAT IS THIS */}
        <div style={{ padding: '72px 0 0' }}>
          <div className="brand-tag" style={{ marginBottom: 22 }}>
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            What Is The Agency Vault
          </div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            12 Claude AI Skills We Use <em>Every Single Day.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.82, maxWidth: 580, marginBottom: 24 }}>
            The Agency Vault is a collection of 12 AI skills built specifically for Claude. Not generic prompts or templates. The exact instructions we load before every client project at The Catalyst Method.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.82, maxWidth: 580, marginBottom: 40 }}>
            Not sure how your website is performing right now?{' '}
            <Link href="/" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 600, borderBottom: '1px solid rgba(255,215,0,0.35)' }}>
              Run our free website audit
            </Link>
            {' '}first. It takes 10 seconds and shows you exactly what is stopping your site from ranking on Google.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
            {[
              { title: 'What is a Claude skill?', text: 'A skill is a custom instruction file that plugs directly into Claude and tells it exactly how to behave for a specific task. Install once and it activates automatically whenever you need it.' },
              { title: 'No prompting needed', text: 'Just talk to Claude as you normally would. The skills do all the heavy lifting behind the scenes. Say what you want and Claude knows exactly how to produce it.' },
              { title: 'Yours forever', text: 'Pay once and own the skills outright. Use them across every project, every client, every industry. No usage limits and no renewal fees. Ever.' },
            ].map(c => (
              <div key={c.title} style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '28px 22px' }}>
                <div style={{ width: 38, height: 38, borderRadius: 9, background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <svg width="14" viewBox="0 0 18 30" style={{ fill: 'var(--gold)' }}><path d={BOLT} /></svg>
                </div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 8 }}>{c.title}</div>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.78 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SKILLS ── */}
        <SkillCategory label="Website Design" count="4 skills included" color="#a78bfa" type="design" emoji="🎨" />
        <SkillList skills={DESIGN_SKILLS} />

        <SkillCategory label="SEO" count="3 skills included" color="#34d399" type="seo" emoji="📈" />
        <SkillList skills={SEO_SKILLS} />

        <SkillCategory label="Sales" count="1 skill included" color="#fb923c" type="sales" emoji="💰" />
        <SkillList skills={SALES_SKILLS} />

        <SkillCategory label="Business" count="4 skills included" color="var(--gold)" type="biz" emoji="🏢" />
        <SkillList skills={BIZ_SKILLS} />

        {/* HOW IT WORKS */}
        <div style={{ padding: '72px 0 80px' }}>
          <div className="brand-tag" style={{ marginBottom: 22 }}>
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            How It Works
          </div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            Install Your Claude Skills <em>In 5 Minutes.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.82, maxWidth: 560, marginBottom: 44 }}>
            No technical knowledge needed. No coding. No prompt writing. Just follow these four steps and the skills are live inside Claude.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
            {[
              { step: '01', title: 'Pay Once', text: 'Complete the £97 payment via Stripe. You receive a confirmation email immediately with your Google Drive download link.' },
              { step: '02', title: 'Download',  text: 'Download the skills folder from Google Drive. It contains one folder per skill, each with the skill file inside.' },
              { step: '03', title: 'Install',   text: 'Open Claude.ai, go to Settings, find the Skills section and upload each skill folder. Takes around 5 minutes total.' },
              { step: '04', title: 'Start Talking', text: 'Open a new chat and talk to Claude as normal. The right skill activates automatically based on what you ask for.' },
            ].map(s => (
              <div key={s.step} style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '24px 20px' }}>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>Step {s.step}</div>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <svg width="14" viewBox="0 0 18 30" style={{ fill: 'var(--gold)' }}><path d={BOLT} /></svg>
                </div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: 8 }}>{s.title}</div>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.52)', lineHeight: 1.72 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* MID CTA */}
      <CtaBlock />

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>

        {/* WHO THIS IS FOR */}
        <div style={{ padding: '72px 0 0' }}>
          <div className="brand-tag" style={{ marginBottom: 22 }}>
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            Who This Is For
          </div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            Built for Anyone <em>Using Claude.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.82, maxWidth: 560, marginBottom: 44 }}>
            Whether you are running an agency, freelancing, or just trying to get more done with AI, these skills will change how you work.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { icon: '🏪', title: 'Local Business Owners', text: 'You are paying for Claude but not using it to its full potential. These skills tell Claude exactly what to do for your business without you needing to think about prompts.' },
              { icon: '💼', title: 'Freelancers and Consultants', text: 'Produce agency quality websites, SEO campaigns and ad copy on your own. The same tools a full team uses, available to you at a fraction of the cost.' },
              { icon: '🏢', title: 'Agency Owners', text: 'Speed up delivery, reduce revision rounds and give every team member access to consistent, on brand outputs across every client project.' },
              { icon: '🚀', title: 'Anyone Serious About AI', text: 'If you are already using Claude and want to stop writing the same prompts over and over, these skills do the heavy lifting automatically every time.' },
            ].map(f => (
              <div key={f.title} style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '26px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: 7 }}>{f.title}</div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ padding: '72px 0 80px' }}>
          <div className="brand-tag" style={{ marginBottom: 22 }}>
            <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
            Common Questions
          </div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 44 }}>
            Frequently Asked Questions About <em>The Agency Vault.</em>
          </h2>
          <div style={{ display: 'grid', gap: 8 }}>
            {FAQS.map(f => (
              <div key={f.q} style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '22px 26px' }}>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: 9 }}>{f.q}</div>
                <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.57)', lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: f.a }} />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FINAL CTA */}
      <div style={{ padding: '0 24px 100px', background: 'radial-gradient(ellipse at 50% 100%, rgba(0,85,133,0.25) 0%, transparent 65%)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div className="cta-block">
            <svg className="cta-bolt-l" viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
            <svg className="cta-bolt-r" viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
            <div className="cta-block-inner" style={{ textAlign: 'center' }}>
              <div className="brand-tag" style={{ marginBottom: 20 }}>
                <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
                Ready to get started
              </div>
              <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
                Stop Prompting.<br /><em>Start Getting Results.</em>
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.78, maxWidth: 460, margin: '0 auto 32px' }}>
                These are the tools that helped one of our clients grow from 181 to 720 monthly website users in 90 days with zero paid ads. <strong style={{ color: '#fff' }}>Now they are yours to run yourself.</strong>
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 32, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(3rem,6vw,4.5rem)', fontWeight: 900, color: 'var(--gold)', letterSpacing: '-0.04em', lineHeight: 1 }}>£97</span>
                <div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>One Payment</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.42)' }}>12 skills. Lifetime access. No subscription.</div>
                </div>
              </div>
              <a href={STRIPE_URL} className="cta-btn" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1rem', padding: '18px 48px' }}>
                <svg viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
                Get The Agency Vault for £97
              </a>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', marginTop: 16 }}>
                🔒 Secure checkout via Stripe &nbsp;·&nbsp; Instant access via Google Drive
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/* ── SUB-COMPONENTS ── */

function SkillCategory({ label, count, color, type, emoji }: { label: string; count: string; color: string; type: string; emoji: string }) {
  const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'
  const accentMap: Record<string, string> = {
    design: 'rgba(167,139,250,',
    seo:    'rgba(52,211,153,',
    sales:  'rgba(251,146,60,',
    biz:    'rgba(255,215,0,',
  }
  const base = accentMap[type] || 'rgba(255,255,255,'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 28, paddingBottom: 4, marginTop: 64, marginBottom: 14, borderTop: '1px solid rgba(255,255,255,0.08)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: 44, height: 2, borderRadius: 2, background: color }} />
      <div style={{ width: 44, height: 44, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0, background: `${base}0.12)`, border: `1px solid ${base}0.22)` }}>{emoji}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.01em' }}>{label}</div>
        <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.42)', marginTop: 2 }}>{count}</div>
      </div>
      <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 100, background: `${base}0.12)`, color, border: `1px solid ${base}0.22)` }}>{label}</div>
    </div>
  )
}

function SkillList({ skills }: { skills: { num: number; name: string; desc: string; triggers: string[]; folder: string }[] }) {
  const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'
  return (
    <div style={{ display: 'grid', gap: 8, marginBottom: 4 }}>
      {skills.map(s => (
        <div key={s.num} style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '20px 24px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: 7, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.28)', fontFamily: "'Montserrat',sans-serif", fontSize: '0.62rem', fontWeight: 800, color: 'var(--gold)', flexShrink: 0 }}>{s.num}</span>
              {s.name}
            </div>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>{s.desc}</p>
            <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {s.triggers.map(t => (
                <span key={t} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '3px 9px', fontSize: '0.7rem', color: 'rgba(255,255,255,0.28)', fontStyle: 'italic' }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.6rem', fontWeight: 700, color: 'rgba(255,255,255,0.12)', whiteSpace: 'nowrap', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 2 }}>{s.folder}</div>
        </div>
      ))}
    </div>
  )
}

function CtaBlock() {
  const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'
  const STRIPE_URL = 'https://link.fastpaydirect.com/payment-link/6a18434ac3ea3a19f0bd8e8e'
  const includes = ['12 AI Skills', 'Website Design', 'SEO Tools', 'Sales Copy', 'Business Tools', 'Setup Guide', 'Unlimited Uses']
  return (
    <div style={{ padding: '0 24px 80px' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <div className="cta-block">
          <svg className="cta-bolt-l" viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
          <svg className="cta-bolt-r" viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
          <div className="cta-block-inner" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.25)', textDecoration: 'line-through', fontFamily: "'Montserrat',sans-serif", fontWeight: 700, marginBottom: 4 }}>Worth well over £500 in agency time</p>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(3rem,7vw,5rem)', fontWeight: 900, color: 'var(--gold)', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 6 }}>£97</div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.78, maxWidth: 460, margin: '0 auto 32px' }}>
              All 12 skills. All categories. Instant access via Google Drive. <strong style={{ color: '#fff' }}>One payment and they are yours forever.</strong> No subscriptions, no renewals, no limits.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 32 }}>
              {includes.map(i => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, padding: '6px 16px', fontFamily: "'Montserrat',sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  <svg width="9" viewBox="0 0 18 30" style={{ fill: 'var(--gold)', flexShrink: 0 }}><path d={BOLT} /></svg>
                  {i}
                </div>
              ))}
            </div>
            <a href={STRIPE_URL} className="cta-btn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
              Get Instant Access for £97
            </a>
            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', marginTop: 14 }}>Secure checkout via Stripe</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── DATA ── */

const DESIGN_SKILLS = [
  { num: 1, name: 'Frontend Design', desc: 'Builds production grade web components, pages, dashboards and UI layouts with a distinctive visual style. Avoids generic AI aesthetics. Every output is memorable, cohesive and professionally finished.', triggers: ['build me a landing page', 'create a component', 'design a dashboard'], folder: 'frontend-design' },
  { num: 2, name: 'UI/UX Pro Max', desc: 'A full design intelligence system with 50 visual styles, 21 colour palettes, 50 font pairings and support for 9 technology stacks including React, Next.js, Tailwind and Flutter. Use it to design, review or improve any interface.', triggers: ['review my UI', 'improve the design', 'make it look more professional'], folder: 'ui-ux-pro-max' },
  { num: 3, name: 'Design MD', desc: 'Applies professional brand design systems to any project. Covers 69 or more real brands including Stripe, Apple, Linear, Notion and Vercel. Tell Claude to style something like a specific brand and this skill handles the rest.', triggers: ['make it look like Stripe', 'use a Notion style design', 'give it a Linear vibe'], folder: 'design-md' },
  { num: 4, name: 'Website Builder', desc: 'Builds complete, SEO optimised websites for local businesses and outputs a full deployable file set including HTML, CSS, JS, sitemap, robots.txt and Vercel config. Best results come from running it inside Claude Code. Full instructions are included with your purchase.', triggers: ['build me a website', 'create a site for my business', 'I need a plumber website'], folder: 'website-builder' },
]

const SEO_SKILLS = [
  { num: 5, name: 'SEO Keyword Research', desc: 'Competitor intelligence driven keyword research. Finds what top ranking competitors target, maps search intent, identifies content gaps and produces a full page architecture plan split into build tiers. Works for new sites and established ones.', triggers: ['keyword research for my site', 'what should I rank for', 'find keywords for a plumber in Leeds'], folder: 'seo-keyword-research' },
  { num: 6, name: 'SEO Blog Builder', desc: 'Writes complete, SEO rich blog posts as ready to publish HTML files. Researches keywords, proposes titles, writes at a 5th grade reading level and outputs a finished post with structured data, internal links, FAQ schema and a post publish checklist.', triggers: ['write a blog post about X', 'create SEO content for', 'add a post to my site'], folder: 'seo-blog' },
  { num: 7, name: 'SEO Optimiser', desc: 'On site SEO auditor, fixer and location page builder. Audits your HTML for keywords, headings, meta tags and schema. Produces a colour coded report with Critical, Warning and Pass findings. Then fixes the issues and builds location landing pages targeting nearby towns.', triggers: ['audit my website SEO', 'fix my SEO', 'create location pages'], folder: 'seo-optimiser' },
]

const SALES_SKILLS = [
  { num: 8, name: 'Meta Ad Copywriter', desc: 'Generates Facebook and Instagram ad copy built to convert. Handles primary text variations, headlines and long form descriptions. Direct response focused. Every word earns its place. Built for lead generation campaigns targeting local businesses.', triggers: ['write me a Facebook ad', 'create Meta ad copy', 'I need an Instagram ad for'], folder: 'meta-ad-copywriter' },
]

const BIZ_SKILLS = [
  { num: 9,  name: 'Slide Deck Creator', desc: 'Builds premium, fully branded presentations and outputs both a PowerPoint file and a standalone HTML deck you can share by link. Interviews you on topic, audience, content and brand style before building. Works for pitches, workshops, client proposals and internal decks.', triggers: ['make me a deck', 'create a presentation', 'build slides for'], folder: 'slide-deck-creator' },
  { num: 10, name: 'Brainstorming', desc: 'Explores your idea through dialogue before anything gets built. Asks the right questions, refines your requirements and presents a design for your approval before a single line of code is written. Prevents wasted effort on the wrong thing.', triggers: ['help me think through', 'I have an idea for', 'brainstorm with me on'], folder: 'brainstorming' },
  { num: 11, name: 'Writing Plans', desc: 'Turns a spec or a set of requirements into a detailed, step by step implementation plan. Breaks complex tasks into clear, bite sized actions. Ideal before starting any multi step project so nothing gets missed and nothing gets built twice.', triggers: ['plan this project for me', 'create a step by step plan for', 'break this down into tasks'], folder: 'writing-plans' },
  { num: 12, name: 'Writing Skills', desc: 'Helps you create, edit, test and optimise your own Claude skills. If you want to build custom instructions for your specific business or workflow, this skill walks you through the full process from first draft to deployment.', triggers: ['create a new skill', 'edit this skill', 'help me build a custom skill'], folder: 'writing-skills' },
]

const FAQS = [
  { q: 'What exactly is a Claude skill?', a: 'A skill is a custom instruction file that lives inside Claude and tells it exactly how to behave for a specific type of task. Once installed, it activates automatically. You do not need to write prompts or know anything about AI. You just talk to Claude as normal and the skill does the rest.' },
  { q: 'Do I need Claude Code to use these?', a: '<strong style="color:#fff">Most skills work perfectly inside Claude.ai</strong> on any paid plan. Only the Website Builder skill achieves its best results inside Claude Code, because it needs to create multiple files and folders at once. Full Claude Code setup instructions are included with your purchase. Claude Code is free to download.' },
  { q: 'Is this a subscription?', a: '<strong style="color:#fff">No.</strong> You pay £97 once and the skills are yours forever. No monthly fees, no renewals and no usage limits. You keep them regardless of what happens to our pricing in the future.' },
  { q: 'What version of Claude do I need?', a: 'The skills work with Claude.ai on any paid plan. Claude Pro or above is recommended for the best results. You do not need any specific version or add on beyond a standard paid subscription.' },
  { q: 'How long does setup take?', a: 'Around 5 minutes to install all 12 skills. A step by step guide is included with every purchase. You go to Settings inside Claude.ai, find the Skills section and upload each folder. That is it.' },
  { q: 'Can I use these for client work?', a: '<strong style="color:#fff">Yes.</strong> Use them across as many projects and clients as you like with no restrictions on commercial use. Many buyers use these skills to deliver client work and charge for the output.' },
  { q: 'What if I am not technical?', a: 'These skills are built for exactly that. You do not need any technical knowledge. If you can type a message into Claude, you can use every skill in this vault. The skills handle all the complexity for you.' },
  { q: 'Do I get access to updates?', a: 'Yes. When skills are updated you receive access to the new versions via the same Google Drive link. Your access continues for the lifetime of the product.' },
]

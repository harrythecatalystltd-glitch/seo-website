import Link from 'next/link'

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

export default function CtaButtons() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
      <Link href="/#weekly-tips" className="cta-btn">
        <svg viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
        Get Free Weekly Tips
      </Link>
      <Link
        href="/contact"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.22)',
          color: '#fff', borderRadius: 11, padding: '16px 30px',
          fontFamily: "'Montserrat', sans-serif", fontSize: '0.95rem', fontWeight: 800,
          textDecoration: 'none', letterSpacing: '0.01em',
        }}
      >
        <svg width="13" viewBox="0 0 18 30" style={{ fill: 'var(--gold)', flexShrink: 0 }}><path d={BOLT} /></svg>
        Contact Me for Help
      </Link>
    </div>
  )
}

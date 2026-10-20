import Link from 'next/link'

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

export default function CtaButtons() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
      <Link href="/self-belief-email-series" className="cta-btn">
        <svg viewBox="0 0 18 30" aria-hidden="true"><path d={BOLT} /></svg>
        Get the Free Email Series
      </Link>
    </div>
  )
}

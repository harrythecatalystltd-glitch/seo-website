import Link from 'next/link'

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

export default function BioBlock({ reason }: { reason: string }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 20,
      padding: '44px 36px',
      display: 'flex',
      gap: 32,
      alignItems: 'center',
      flexWrap: 'wrap',
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/harry.png"
        alt="Harry, The Catalyst Method"
        style={{ width: 110, height: 110, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,215,0,0.32)', flexShrink: 0 }}
      />
      <div style={{ flex: 1, minWidth: 240 }}>
        <div className="brand-tag" style={{ marginBottom: 14 }}>
          <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
          Who&apos;s Behind This
        </div>
        <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.82, marginBottom: 18 }}>
          {reason}
        </p>
        <Link href="/about" style={{ fontSize: '0.85rem', color: 'var(--gold)', fontWeight: 700, textDecoration: 'none' }}>Read my full story →</Link>
      </div>
    </div>
  )
}

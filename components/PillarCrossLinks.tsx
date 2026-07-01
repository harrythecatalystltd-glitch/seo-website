import Link from 'next/link'

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

const PILLARS = [
  { href: '/self-belief-coaching', label: 'Self-Belief Coaching' },
  { href: '/overthinking-and-decision-coaching', label: 'Overthinking & Decision Coaching' },
  { href: '/confidence-coaching-at-work', label: 'Confidence at Work' },
  { href: '/overcome-self-doubt-coaching', label: 'Overcome Self-Doubt' },
] as const

export default function PillarCrossLinks({ current }: { current: string }) {
  const others = PILLARS.filter(p => p.href !== current)

  return (
    <div style={{ padding: '64px 0 0' }}>
      <div className="brand-tag" style={{ marginBottom: 18 }}>
        <svg viewBox="0 0 18 30"><path fill="currentColor" d={BOLT} /></svg>
        Other Ways I Can Help
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
        {others.map(p => (
          <Link
            key={p.href}
            href={p.href}
            style={{
              display: 'block', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 12, padding: '18px 20px', textDecoration: 'none',
              color: '#fff', fontFamily: "'Montserrat',sans-serif", fontSize: '0.88rem', fontWeight: 700,
            }}
          >
            {p.label} <span style={{ color: 'var(--gold)' }}>→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'
const GOLD = '#FFD700'

function Bolt({ size, opacity = 1 }: { size: number; opacity?: number }) {
  return (
    <svg width={size} height={size * (30 / 18)} viewBox="0 0 18 30" style={{ opacity }}>
      <path d={BOLT} fill={GOLD} />
    </svg>
  )
}

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundColor: '#002B45',
          backgroundImage: 'radial-gradient(ellipse at 50% -20%, #005585 0%, #002B45 60%)',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* decorative bolts */}
        <div style={{ display: 'flex', position: 'absolute', top: 60, right: 90 }}><Bolt size={120} opacity={0.10} /></div>
        <div style={{ display: 'flex', position: 'absolute', bottom: 70, left: 70 }}><Bolt size={70} opacity={0.10} /></div>

        {/* brand row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Bolt size={26} />
          <span style={{ fontSize: 26, fontWeight: 700, color: '#fff', letterSpacing: 4, textTransform: 'uppercase' }}>
            The Catalyst Method
          </span>
        </div>

        {/* headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 28,
              fontSize: 22,
              fontWeight: 700,
              color: GOLD,
              letterSpacing: 3,
              textTransform: 'uppercase',
            }}
          >
            <Bolt size={16} />
            Lead Generation for Local Service Businesses
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: 84, fontWeight: 800, color: '#fff', letterSpacing: -2, lineHeight: 1.05 }}>
            More Leads For Your Local Service&nbsp;
            <span style={{ color: GOLD }}>Business.</span>
          </div>
        </div>

        {/* proof row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
          {[
            { num: '+297%', label: 'Traffic Growth' },
            { num: '£1M+', label: 'Revenue Driven' },
            { num: '4 Weeks', label: 'Or Money Back' },
          ].map((s) => (
            <div key={s.label} style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 44, fontWeight: 800, color: GOLD, letterSpacing: -1 }}>{s.num}</span>
              <span style={{ fontSize: 20, fontWeight: 600, color: 'rgba(255,255,255,0.55)', letterSpacing: 1, textTransform: 'uppercase' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}

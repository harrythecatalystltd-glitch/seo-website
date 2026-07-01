export default function ConditionalFooter() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '28px 24px',
      textAlign: 'center',
      background: 'rgba(0,0,0,0.2)',
    }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' as const, marginBottom: '14px' }}>
          {([['/', 'Home'], ['/blog', 'Blog'], ['/contact', 'Contact']] as [string, string][]).map(([href, label]) => (
            <a key={href} href={href} style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600, fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>
              {label}
            </a>
          ))}
        </div>
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.28)', marginBottom: '6px' }}>
          <a href="mailto:hey@thecatalystmethod.co.uk" style={{ color: 'rgba(255,215,0,0.55)', textDecoration: 'none' }}>hey@thecatalystmethod.co.uk</a>
        </p>
        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>© 2026 The Catalyst Method · Confidence &amp; Self-Belief Coaching</p>
      </div>
    </footer>
  )
}

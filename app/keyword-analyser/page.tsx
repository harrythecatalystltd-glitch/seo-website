import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import KeywordAnalyser from '@/components/KeywordAnalyser'

export const metadata: Metadata = {
  title: 'Free Keyword Difficulty Checker for UK Small Businesses | The Catalyst Method',
  description: 'Free keyword difficulty checker for UK small businesses. See who is ranking, score competition 0-100, get People Also Ask questions, and get headline ideas ranked by your realistic chance of ranking on Google.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/keyword-analyser' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/keyword-analyser',
    title: 'Free Keyword Difficulty Checker | The Catalyst Method',
    description: 'Find keywords your website can actually rank for. Score any keyword 0-100, see who is already ranking, and get blog headline ideas matched to your realistic chance of ranking.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/mainlogo.png', width: 1200, height: 630 }],
    siteName: 'The Catalyst Method',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Keyword Difficulty Checker | The Catalyst Method',
    description: 'Find keywords your website can actually rank for. Score competition 0-100, see top-ranking pages and get headline ideas — free.',
    images: ['https://www.thecatalystmethod.co.uk/mainlogo.png'],
  },
}

const BOLT = 'M13 0L3 16h6L4 30 16 13h-6z'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.thecatalystmethod.co.uk/#organization',
      name: 'The Catalyst Method',
      url: 'https://www.thecatalystmethod.co.uk',
      logo: { '@type': 'ImageObject', url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' },
      email: 'hey@thecatalystmethod.co.uk',
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://www.thecatalystmethod.co.uk/keyword-analyser#app',
      name: 'Free Keyword Difficulty Checker',
      url: 'https://www.thecatalystmethod.co.uk/keyword-analyser',
      description: 'Free keyword difficulty checker for UK small businesses. Scores competition 0-100, shows top-ranking pages, surfaces People Also Ask questions and generates headline ideas ranked by rankability.',
      applicationCategory: 'SEOApplication',
      inLanguage: 'en-GB',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
      publisher: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thecatalystmethod.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'Keyword Analyser', item: 'https://www.thecatalystmethod.co.uk/keyword-analyser' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is keyword difficulty?',
          acceptedAnswer: { '@type': 'Answer', text: 'Keyword difficulty is a score from 0 to 100 that measures how hard it is to rank on the first page of Google for a given search term. A low score means smaller sites can realistically rank with good content. A high score means the top results are dominated by large, high-authority websites that are very hard to compete with.' },
        },
        {
          '@type': 'Question',
          name: 'How is the keyword difficulty score calculated?',
          acceptedAnswer: { '@type': 'Answer', text: 'The score is based on the top 10 UK Google results for the keyword. It looks at how many big brands and high-authority domains are already ranking, how concentrated those results are, and whether smaller independent sites appear in the top 5. The more big brands in the top positions, the higher the difficulty score.' },
        },
        {
          '@type': 'Question',
          name: 'What does a Quick Win headline mean?',
          acceptedAnswer: { '@type': 'Answer', text: 'A Quick Win headline is one where the angle or format is not yet covered by the top 10 ranking pages. Writing a page using that headline angle gives you a realistic chance of ranking within 3 to 6 months with well-written, helpful content. It does not guarantee a ranking but it identifies the path of least resistance.' },
        },
        {
          '@type': 'Question',
          name: 'Is this keyword difficulty checker free?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Catalyst Method keyword difficulty checker is completely free to use with no sign-up required. Type any keyword and get an instant difficulty score, top-ranking page analysis, People Also Ask questions and blog headline suggestions.' },
        },
        {
          '@type': 'Question',
          name: 'Does this tool check UK Google results?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. The tool analyses the top 10 results from UK Google (google.co.uk) so the difficulty score and ranking data reflects what your UK audience actually sees, not generic global results.' },
        },
      ],
    },
  ],
}

export default function KeywordAnalyserPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

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
            Free Tool | The Catalyst Method
          </div>
          <h1>Find Keywords Your Website<br />Can <em>Actually Rank For</em></h1>
          <p className="hero-sub">
            Type any keyword and instantly see how competitive it is on UK Google, who is already ranking, what questions people ask, and which blog headline angles give you the best realistic chance of ranking.
          </p>
        </div>
      </section>

      {/* Static section — server-rendered for SEO, gives crawlers substantive content */}
      <section aria-label="What this tool analyses" style={{ maxWidth: 820, margin: '0 auto', padding: '56px 24px 0' }}>
        <h2 style={{
          fontFamily: "'Montserrat',sans-serif", fontSize: 'clamp(1.1rem,2.5vw,1.5rem)',
          fontWeight: 900, letterSpacing: '-0.02em', color: '#fff',
          marginBottom: 24, textAlign: 'center',
        }}>
          What the keyword difficulty checker shows you
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 12 }}>
          {[
            { emoji: '📊', title: 'Difficulty score', desc: 'A 0-100 score showing how hard it is to rank on UK Google, colour-coded green, amber or red.' },
            { emoji: '🔍', title: 'Top 10 results', desc: 'See exactly who is ranking, which big brands dominate, and where smaller sites have broken through.' },
            { emoji: '❓', title: 'People Also Ask', desc: 'The related questions Google surfaces for that keyword — each one is a potential blog angle.' },
            { emoji: '💡', title: 'Headline ideas', desc: 'Blog headline suggestions ranked Quick Win, Medium Term or Long Game based on gaps in the current top 10.' },
          ].map(f => (
            <div key={f.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1.5px solid rgba(255,255,255,0.09)', borderRadius: 12, padding: '20px 18px' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: 10 }}>{f.emoji}</div>
              <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#FFD700', marginBottom: 6 }}>{f.title}</h3>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.52)', lineHeight: 1.7, fontFamily: "'Open Sans',sans-serif" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <KeywordAnalyser />
    </>
  )
}

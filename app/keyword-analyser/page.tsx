import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import KeywordAnalyser from '@/components/KeywordAnalyser'

export const metadata: Metadata = {
  title: 'Free Keyword Difficulty Analyser for UK Small Businesses | The Catalyst Method',
  description: 'Type any keyword and instantly see how hard it is to rank on Google, who is already ranking, what questions people ask, and which blog headlines give you the best chance of ranking.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/keyword-analyser' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/keyword-analyser',
    title: 'Free Keyword Difficulty Analyser | The Catalyst Method',
    description: 'See how competitive any keyword is on UK Google, get headline ideas ranked by your realistic chance of ranking, and find content gaps your competitors have missed.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' }],
    siteName: 'The Catalyst Method',
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
      '@id': 'https://www.thecatalystmethod.co.uk/keyword-analyser',
      name: 'Keyword Difficulty Analyser',
      url: 'https://www.thecatalystmethod.co.uk/keyword-analyser',
      description: 'Free keyword difficulty analyser for UK small businesses. Scores competition, shows top-ranking pages, surfaces People Also Ask questions, and generates ranked headline ideas.',
      applicationCategory: 'SEOApplication',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
      publisher: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thecatalystmethod.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'Keyword Analyser', item: 'https://www.thecatalystmethod.co.uk/keyword-analyser' },
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
          <h1>Free Keyword<br /><em>Difficulty Analyser</em></h1>
          <p className="hero-sub">
            Type any keyword and instantly see how competitive it is on UK Google, who is already ranking, what questions people ask, and which blog headline angles give you the best realistic chance of ranking.
          </p>
        </div>
      </section>

      <KeywordAnalyser />
    </>
  )
}

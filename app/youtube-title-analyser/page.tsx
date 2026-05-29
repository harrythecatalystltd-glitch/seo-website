import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import YouTubeAnalyser from '@/components/YouTubeAnalyser'

export const metadata: Metadata = {
  title: 'Free YouTube Title Analyser for UK Creators | The Catalyst Method',
  description: 'Free YouTube title analyser. See what title patterns dominate the top 10 results for any keyword, spot the gaps, and get 10 ready-to-use title ideas ranked by how crowded the format already is.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/youtube-title-analyser' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/youtube-title-analyser',
    title: 'Free YouTube Title Analyser | The Catalyst Method',
    description: 'Find YouTube title angles that are not already crowded. Analyse any keyword, see which formats dominate, and get 10 title ideas ranked by opportunity.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/mainlogo.png', width: 1200, height: 630 }],
    siteName: 'The Catalyst Method',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free YouTube Title Analyser | The Catalyst Method',
    description: 'See what title formats dominate YouTube search results for any keyword — then find the gaps and get title ideas that stand out.',
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
      '@id': 'https://www.thecatalystmethod.co.uk/youtube-title-analyser#app',
      name: 'Free YouTube Title Analyser',
      url: 'https://www.thecatalystmethod.co.uk/youtube-title-analyser',
      description: 'Free YouTube title analyser that shows what title patterns dominate the top 10 results for any keyword, identifies gaps, and generates 10 ready-to-use title ideas ranked by how crowded the format already is.',
      applicationCategory: 'SEOApplication',
      inLanguage: 'en-GB',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
      publisher: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thecatalystmethod.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'YouTube Title Analyser', item: 'https://www.thecatalystmethod.co.uk/youtube-title-analyser' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why does the YouTube title format matter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'YouTube uses click-through rate and watch time as its primary ranking signals. A title that stands out from what is already ranking — by using a different format or angle — tends to get more clicks from people who have already seen similar videos. Knowing what formats are crowded helps you pick a title angle that feels fresh rather than like the tenth version of the same thing.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does Quick Win mean for a YouTube title?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Quick Win title uses a format or angle that fewer than 25% of the top 10 results for that keyword already use. That makes it relatively uncommon in the search results, which gives your video a better chance of standing out when someone is scrolling through the results page.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does Long Game mean for a YouTube title?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Long Game title uses a format that already appears in 60% or more of the top results. The format works for this topic — that is why everyone uses it — but your video will need to be noticeably better or more specific than existing videos to stand out. These titles take longer to build traction.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this YouTube title analyser free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The tool is completely free to use with no account required. Type any keyword, see what is already ranking on YouTube, and get 10 title ideas with an explanation of the opportunity behind each one.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this show real YouTube search results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The tool pulls the actual top 10 video results from YouTube for the keyword you type, including the title, channel, views and publish date. The pattern analysis and title suggestions are based on what is genuinely ranking, not a guess.',
          },
        },
      ],
    },
  ],
}

export default function YouTubeTitleAnalyserPage() {
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
          <h1>Find YouTube Title Angles<br />That <em>Actually Stand Out</em></h1>
          <p className="hero-sub">
            Type any keyword and see what title formats dominate the top 10 YouTube results, which angles are already crowded, and get 10 ready-to-use title ideas ranked by how much opportunity is left in each format.
          </p>
        </div>
      </section>

      <YouTubeAnalyser />
    </>
  )
}

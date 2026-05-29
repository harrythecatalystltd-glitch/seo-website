import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import YouTubeDescriptionGenerator from '@/components/YouTubeDescriptionGenerator'

export const metadata: Metadata = {
  title: 'Free YouTube Description Generator | The Catalyst Method',
  description: 'Free YouTube description generator. Paste your video title and tags and get a complete, SEO-optimised YouTube description — with above-the-fold preview, timestamps placeholder, and hashtags — ready to copy and paste.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/youtube-description-generator' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/youtube-description-generator',
    title: 'Free YouTube Description Generator | The Catalyst Method',
    description: 'Generate a complete, SEO-optimised YouTube description from your video title and tags. Includes above-the-fold preview, timestamps placeholder, and hashtags.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/mainlogo.png', width: 1200, height: 630 }],
    siteName: 'The Catalyst Method',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free YouTube Description Generator | The Catalyst Method',
    description: 'Turn your video title and tags into a complete YouTube description in seconds. Free, no sign-up needed.',
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
      '@id': 'https://www.thecatalystmethod.co.uk/youtube-description-generator#app',
      name: 'Free YouTube Description Generator',
      url: 'https://www.thecatalystmethod.co.uk/youtube-description-generator',
      description: 'Free YouTube description generator that creates a complete, SEO-optimised description from your video title and tags. Includes above-the-fold snippet preview, timestamps placeholder, and hashtag suggestions.',
      applicationCategory: 'SEOApplication',
      inLanguage: 'en-GB',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
      publisher: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thecatalystmethod.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'YouTube Description Generator', item: 'https://www.thecatalystmethod.co.uk/youtube-description-generator' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does the YouTube description affect search rankings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. YouTube reads your description to understand what the video is about and decide which searches to show it for. The first 125 characters are especially important because they appear as the snippet in YouTube search results — so they need to include your main keyword and give viewers a reason to click.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I put in my YouTube description?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A good YouTube description has four parts: an opening hook that includes your main keyword in the first two lines, a body paragraph that expands on what the video covers, a timestamps section for chapter navigation, and hashtags at the very bottom. You should also include any links you mention in the video and a call to action to subscribe.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many hashtags should I use on YouTube?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "YouTube recommends using 3 to 5 hashtags per video. If you use more than 15, YouTube may ignore all hashtags on that video. Put them at the very end of your description. YouTube displays the first three hashtags above the video title, so choose the most relevant ones to go first.",
          },
        },
        {
          '@type': 'Question',
          name: 'How long should a YouTube description be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'YouTube allows up to 5,000 characters. Most well-performing videos have descriptions between 200 and 400 words. The most important real estate is the first 125 characters, which show as the search snippet before viewers click "Show more". After that, include enough detail to give YouTube clear context about the video content.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this YouTube description generator free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free with no account required. Enter your video title and optional tags and channel name, and the tool generates a complete, structured description you can copy and paste directly into YouTube Studio.',
          },
        },
      ],
    },
  ],
}

export default function YouTubeDescriptionGeneratorPage() {
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
          <h1>Write a YouTube Description<br />That <em>Actually Gets You Found</em></h1>
          <p className="hero-sub">
            Enter your video title and tags and get a complete, ready-to-paste YouTube description — structured for search, with an above-the-fold preview so you know exactly what viewers see before clicking.
          </p>
        </div>
      </section>

      <YouTubeDescriptionGenerator />
    </>
  )
}

import type { Metadata } from 'next'
import HomeClient from '@/components/pages/HomeClient'

export const metadata: Metadata = {
  title: 'Free Lead Generation Audit for Local Businesses | The Catalyst Method',
  description: 'Get your free 16-point website audit in seconds. See exactly what is stopping your site from ranking and winning customers. No sign-up needed. Results in 10 seconds.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/',
    title: 'Free Website SEO Audit | The Catalyst Method',
    description: 'Get your free 16-point website audit in seconds. See exactly what is stopping your site from ranking and winning customers. No sign-up needed.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' }],
    siteName: 'The Catalyst Method',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Website SEO Audit | The Catalyst Method',
    description: 'Get your free 16-point website audit in seconds.',
    images: ['https://www.thecatalystmethod.co.uk/mainlogo.png'],
  },
}

export default function HomePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.thecatalystmethod.co.uk/#organization',
        name: 'The Catalyst Method',
        url: 'https://www.thecatalystmethod.co.uk',
        logo: { '@type': 'ImageObject', url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' },
        email: 'harry@thecatalyst.ltd',
        description: 'SEO and lead growth system for local businesses.',
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.thecatalystmethod.co.uk/#website',
        url: 'https://www.thecatalystmethod.co.uk',
        name: 'The Catalyst Method',
        publisher: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
      },
      {
        '@type': 'WebApplication',
        name: 'Free Website SEO Audit Tool',
        url: 'https://www.thecatalystmethod.co.uk',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'All',
        description: 'Free 16-point website audit tool. Check SEO, performance and conversion factors in seconds.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
        provider: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <HomeClient />
    </>
  )
}

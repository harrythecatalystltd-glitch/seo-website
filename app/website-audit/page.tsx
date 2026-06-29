import type { Metadata } from 'next'
import HomeClient from '@/components/pages/HomeClient'

export const metadata: Metadata = {
  title: 'Free Website SEO Audit Tool | The Catalyst Method',
  description: 'Get your free 16-point website audit in seconds. See what\'s stopping your site ranking and costing you customers. No sign-up needed. Results in 10 seconds.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/website-audit' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/website-audit',
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

export default function WebsiteAuditPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Free Website SEO Audit Tool',
        url: 'https://www.thecatalystmethod.co.uk/website-audit',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'All',
        description: 'Free 16-point website audit tool. Check SEO, performance and conversion factors in seconds.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
        provider: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thecatalystmethod.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Free Website Audit', item: 'https://www.thecatalystmethod.co.uk/website-audit' },
        ],
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

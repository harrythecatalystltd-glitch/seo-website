import type { Metadata } from 'next'
import SignupClient from '@/components/pages/SignupClient'

export const metadata: Metadata = {
  title: 'Lead Generation Plans for Local Businesses UK | The Catalyst Method',
  description: 'Choose your SEO and lead growth plan from The Catalyst Method. Three tiers from £500 per month, all including a free website build, CRM setup, lead magnet and email automation.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/signup' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/signup',
    title: 'SEO and Lead Growth Plans | The Catalyst Method',
    description: 'Three SEO and lead growth plans for local businesses. From £500 per month, all including a free website, CRM, lead magnet and email automation.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' }],
    siteName: 'The Catalyst Method',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO and Lead Growth Plans | The Catalyst Method',
    description: 'Three SEO and lead growth plans for local businesses. From £500 per month.',
    images: ['https://www.thecatalystmethod.co.uk/mainlogo.png'],
  },
}

export default function SignupPage() {
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
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
      },
      {
        '@type': 'Service',
        name: 'SEO and Lead Growth System',
        provider: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
        serviceType: 'Search Engine Optimisation',
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
        offers: [
          { '@type': 'Offer', name: 'Basic Plan', price: '500', priceCurrency: 'GBP', priceSpecification: { '@type': 'UnitPriceSpecification', price: '500', priceCurrency: 'GBP', unitText: 'MONTH' } },
          { '@type': 'Offer', name: 'Gold Plan',  price: '750', priceCurrency: 'GBP', priceSpecification: { '@type': 'UnitPriceSpecification', price: '750', priceCurrency: 'GBP', unitText: 'MONTH' } },
          { '@type': 'Offer', name: 'Platinum Plan', price: '1000', priceCurrency: 'GBP', priceSpecification: { '@type': 'UnitPriceSpecification', price: '1000', priceCurrency: 'GBP', unitText: 'MONTH' } },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SignupClient />
    </>
  )
}

import type { Metadata } from 'next'
import ContactClient from '@/components/pages/ContactClient'

export const metadata: Metadata = {
  title: 'Contact The Catalyst Method | Local Business SEO UK',
  description: 'Get in touch with The Catalyst Method. Questions about our SEO and lead generation plans for UK local businesses? We\'d love to hear from you.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/contact' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/contact',
    title: 'Contact The Catalyst Method | Local Business SEO UK',
    description: 'Questions about our SEO and lead generation plans for UK local businesses? Get in touch.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' }],
    siteName: 'The Catalyst Method',
  },
}

export default function ContactPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.thecatalystmethod.co.uk/#organization',
        name: 'The Catalyst Method',
        url: 'https://www.thecatalystmethod.co.uk',
        email: 'hey@thecatalystmethod.co.uk',
        logo: { '@type': 'ImageObject', url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' },
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
      },
      {
        '@type': 'ContactPage',
        '@id': 'https://www.thecatalystmethod.co.uk/contact',
        url: 'https://www.thecatalystmethod.co.uk/contact',
        name: 'Contact The Catalyst Method',
        description: 'Get in touch with The Catalyst Method about SEO and lead generation for UK local businesses.',
        publisher: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thecatalystmethod.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.thecatalystmethod.co.uk/contact' },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ContactClient />
    </>
  )
}

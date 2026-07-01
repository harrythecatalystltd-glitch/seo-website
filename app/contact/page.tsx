import type { Metadata } from 'next'
import ContactClient from '@/components/pages/ContactClient'

export const metadata: Metadata = {
  title: 'Contact The Catalyst Method | Confidence & Self-Belief Coaching',
  description: 'Get in touch about confidence, self-belief or decision-making coaching. No sales pitch — just a real reply.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/contact' },
  openGraph: {
    type: 'website',
    url: 'https://www.thecatalystmethod.co.uk/contact',
    title: 'Contact The Catalyst Method | Confidence & Self-Belief Coaching',
    description: 'Get in touch about confidence, self-belief or decision-making coaching. No sales pitch — just a real reply.',
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
        description: 'Get in touch with The Catalyst Method about confidence, self-belief and decision-making coaching.',
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

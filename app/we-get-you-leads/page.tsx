import type { Metadata } from 'next'
import WeGetYouLeadsClient from '@/components/pages/WeGetYouLeadsClient'

const URL = 'https://www.thecatalystmethod.co.uk/we-get-you-leads'

export const metadata: Metadata = {
  title: 'We Get You Leads | Done-For-You SEO for UK Local Businesses | The Catalyst Method',
  description: 'Done-for-you SEO and lead generation for UK local service businesses. We take over your Google profile, website, content and follow-up so new enquiries land in your inbox. New leads within 4 weeks or your money back. £500/month.',
  robots: { index: true, follow: true },
  alternates: { canonical: URL },
  keywords: [
    'done for you SEO UK',
    'done for you lead generation',
    'lead generation for local businesses UK',
    'get more leads from Google',
    'local SEO service UK',
    'we get you leads',
    'SEO with leads guarantee',
    'local service business lead generation',
  ],
  openGraph: {
    type: 'website',
    url: URL,
    title: 'We Get You Leads | Done-For-You SEO for UK Local Businesses',
    description: 'We get UK local service businesses more leads from Google. Your Google profile, website, content and follow-up handled for you. New leads within 4 weeks or your money back.',
    images: [{ url: 'https://www.thecatalystmethod.co.uk/og', width: 1200, height: 630, alt: 'The Catalyst Method — we get you more leads' }],
    siteName: 'The Catalyst Method',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'We Get You Leads | Done-For-You SEO for UK Local Businesses',
    description: 'Done-for-you SEO and lead generation for UK local service businesses. New leads within 4 weeks or your money back.',
    images: ['https://www.thecatalystmethod.co.uk/og'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': URL,
      url: URL,
      name: 'We Get You Leads: Done-For-You SEO for UK Local Businesses',
      description: 'Done-for-you SEO and lead generation for UK local service businesses. We handle your Google profile, website, content and follow-up. New leads within 4 weeks or your money back.',
      publisher: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.thecatalystmethod.co.uk/#organization',
      name: 'The Catalyst Method',
      url: 'https://www.thecatalystmethod.co.uk',
      logo: { '@type': 'ImageObject', url: 'https://www.thecatalystmethod.co.uk/mainlogo.png' },
      description: 'Done-for-you SEO and lead generation for UK local service businesses. Includes a free 200-page website, CRM, email automation, lead magnet, and a 4-week leads guarantee.',
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
    },
    {
      '@type': 'Service',
      name: 'Done-For-You SEO and Lead Generation',
      serviceType: 'Local SEO and lead generation',
      provider: { '@id': 'https://www.thecatalystmethod.co.uk/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      description: 'We get local service businesses more leads from Google. We take over your Google profile, website, content and follow-up. New leads within 4 weeks or your money back.',
      offers: {
        '@type': 'Offer',
        price: '500',
        priceCurrency: 'GBP',
        url: URL,
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thecatalystmethod.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'We Get You Leads', item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does it take to see results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "You'll typically see your first new rankings within 2 to 4 weeks. Most clients report new enquiries within the first month. We build this into our guarantee: new leads within 4 weeks or your money back.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to do anything myself?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Once you are set up you do not need to do anything. We handle everything: your Google profile, your content, your site. You run your business, we handle the growth.',
          },
        },
        {
          '@type': 'Question',
          name: "What if it doesn't work?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Then you don't pay. If you haven't received new leads within 4 weeks we'll refund you in full. No questions, no conditions, no awkward conversations.",
          },
        },
      ],
    },
  ],
}

export default function WeGetYouLeadsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <WeGetYouLeadsClient />
    </>
  )
}

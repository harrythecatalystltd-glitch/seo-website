import type { Metadata } from 'next'
import ThankyouClient from '@/components/pages/ThankyouClient'
import { getRelevantArticles } from '@/lib/get-relevant-articles'

export const metadata: Metadata = {
  title: 'Thank You | The Catalyst Method',
  description: 'Thanks for signing up. Get in touch by email or WhatsApp anytime.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/thankyou' },
}

export default async function ThankyouPage() {
  const articles = (await getRelevantArticles()).slice(0, 3)
  return <ThankyouClient articles={articles} />
}

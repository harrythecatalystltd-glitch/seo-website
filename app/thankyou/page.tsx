import type { Metadata } from 'next'
import ThankyouClient from '@/components/pages/ThankyouClient'

export const metadata: Metadata = {
  title: 'Your Website Audit Report | The Catalyst Method',
  description: 'Your personalised 16-point website audit report from The Catalyst Method. See what is holding your site back and how to fix it.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.thecatalystmethod.co.uk/thankyou' },
}

export default function ThankyouPage() {
  return <ThankyouClient />
}

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.seobotai.com' },
      { protocol: 'https', hostname: '*.cloudfront.net' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/refunds-policy',
        destination: '/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/signup',
        permanent: true,
      },
      // /post/ → /blog/ redirects (old URL structure → new)
      {
        source: '/post/simplify-your-offer-overcoming-choice-paralysis',
        destination: '/blog/simplify-your-offer-overcoming-choice-paralysis',
        permanent: true,
      },
      {
        source: '/post/decision-making-checklist-steps-choose',
        destination: '/blog/decision-making-checklist-steps-choose',
        permanent: true,
      },
      {
        source: '/post/long-term-goals-improve-short-term-decisions',
        destination: '/blog/long-term-goals-improve-short-term-decisions',
        permanent: true,
      },
      {
        source: '/post/trust-yourself-simple-steps',
        destination: '/blog/trust-yourself-simple-steps',
        permanent: true,
      },
      {
        source: '/post/complete-guide-overcoming-indecision',
        destination: '/blog/complete-guide-overcoming-indecision',
        permanent: true,
      },
      {
        source: '/post/manage-decision-fatigue-prioritisation',
        destination: '/blog/manage-decision-fatigue-prioritisation',
        permanent: true,
      },
      {
        source: '/post/build-triggers-daily-business-habits',
        destination: '/blog/build-triggers-daily-business-habits',
        permanent: true,
      },
      {
        source: '/post/core-values-high-performers-guide',
        destination: '/blog/core-values-high-performers-guide',
        permanent: true,
      },
      {
        source: '/post/self-doubt-vs-self-confidence-key-differences',
        destination: '/blog/self-doubt-vs-self-confidence-key-differences',
        permanent: true,
      },
      {
        source: '/post/lack-confidence-common-causes',
        destination: '/blog/lack-confidence-common-causes',
        permanent: true,
      },
      // /post/ URLs with no matching /blog/ slug → send to blog index
      {
        source: '/post/align-purpose-daily-actions-steps',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/post/how-to-overcome-indecision',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/post/practise-micro-decisions-20-minutes',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/post/meditation-vs-journaling-building-confidence',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/post/why-feedback-builds-trust-confidence',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/post/build-confidence-through-action',
        destination: '/blog',
        permanent: true,
      },
      // bare slug that was crawled without /post/ prefix
      {
        source: '/build-confidence-through-action',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/case-study-creation-coffee',
        destination: '/case-study-creation-coffee.html',
      },
      {
        source: '/case-study-fitness-coach-chronicle',
        destination: '/case-study-fitness-coach-chronicle.html',
      },
    ]
  },
}

export default nextConfig

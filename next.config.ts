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
        destination: '/',
        permanent: true,
      },
      // /post/ → /blog/ redirects (old URL structure → new)
      {
        source: '/post/simplify-your-offer-overcoming-choice-paralysis',
        destination: '/blog',
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
        destination: '/blog',
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
      {
        source: '/post/align-purpose-daily-actions-steps',
        destination: '/blog/align-purpose-daily-actions-steps',
        permanent: true,
      },
      {
        source: '/post/practise-micro-decisions-20-minutes',
        destination: '/blog/practise-micro-decisions-20-minutes',
        permanent: true,
      },
      {
        source: '/post/meditation-vs-journaling-building-confidence',
        destination: '/blog/meditation-vs-journaling-building-confidence',
        permanent: true,
      },
      {
        source: '/post/stop-overthinking-decisions',
        destination: '/blog/stop-overthinking-decisions',
        permanent: true,
      },
      {
        source: '/post/feeling-stuck-work-ways-move-forward',
        destination: '/blog/feeling-stuck-work-ways-move-forward',
        permanent: true,
      },
      {
        source: '/post/why-you-cant-make-decisions',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/post/accountability-coaching-key-benefits-explained',
        destination: '/blog',
        permanent: true,
      },
      // /post/ URLs with no matching /blog/ slug → send to blog index
      {
        source: '/post/how-to-overcome-indecision',
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
      // deleted posts
      {
        source: '/blog/grow-pt-academy-100k-per-year',
        destination: '/blog',
        permanent: true,
      },
      // agency-vault (old typo redirect target no longer exists either)
      {
        source: '/agency-vault',
        destination: '/',
        permanent: true,
      },

      // ─── Confidence coaching rebuild (2026-07-01): removed all SEO/lead-gen
      // agency blog content — only the personal-development cluster survives
      // (see lib/relevant-blog-slugs.ts). Every removed post redirects here. ───

      // old manual (repo-owned) SEO/lead-gen posts — content deleted
      { source: '/blog/email-automation-sequence-local-business-uk', destination: '/blog', permanent: true },
      { source: '/blog/ai-skills-local-business-revenue-growth-uk', destination: '/blog', permanent: true },
      { source: '/blog/google-business-profile-optimisation-uk', destination: '/blog', permanent: true },
      { source: '/blog/why-website-not-getting-enquiries', destination: '/blog', permanent: true },
      { source: '/blog/local-seo-checklist-small-business-uk', destination: '/blog', permanent: true },
      { source: '/blog/how-to-get-more-leads-from-your-website', destination: '/blog', permanent: true },
      { source: '/blog/what-is-a-lead-magnet-ideas-for-local-businesses', destination: '/blog', permanent: true },
      { source: '/blog/done-for-you-seo-uk', destination: '/blog', permanent: true },
      { source: '/blog/meta-call-ads-vs-lead-forms-local-business', destination: '/blog', permanent: true },

      // old SeoBot local-SEO / education-business posts — hidden from listing, redirected
      { source: '/blog/local-seo-for-business-checklist-actions', destination: '/blog', permanent: true },
      { source: '/blog/local-seo-for-business-cost-uk-2026-pricing-breakdown', destination: '/blog', permanent: true },
      { source: '/blog/how-to-local-seo-for-business-step-by-step-guide-examples', destination: '/blog', permanent: true },
      { source: '/blog/local-seo-for-business-explained-plain-english', destination: '/blog', permanent: true },
      { source: '/blog/can-i-do-local-seo-myself-small-business-owners', destination: '/blog', permanent: true },
      { source: '/blog/local-seo-example-clear-answer-small-business-owners', destination: '/blog', permanent: true },
      { source: '/blog/how-to-local-seo-for-my-business-small-business-owners', destination: '/blog', permanent: true },
      { source: '/blog/local-seo-for-business-complete-2026-guide-uk-small-businesses', destination: '/blog', permanent: true },
      { source: '/blog/seo-checker-tool', destination: '/blog', permanent: true },
      { source: '/blog/mindset-shifts-10k-months', destination: '/blog', permanent: true },
      { source: '/blog/academy-growth-strategy-generator', destination: '/blog', permanent: true },
      { source: '/blog/academy-sales-conversion-analyzer', destination: '/blog', permanent: true },
      { source: '/blog/academy-marketing-budget-converter', destination: '/blog', permanent: true },
      { source: '/blog/training-business-revenue-planner', destination: '/blog', permanent: true },
      { source: '/blog/academy-lead-generation-calculator', destination: '/blog', permanent: true },
      { source: '/blog/education-marketing-strategy-too-complicated', destination: '/blog', permanent: true },
      { source: '/blog/simple-education-marketing-strategy-drives-enrolments', destination: '/blog', permanent: true },
      { source: '/blog/tutoring-business-revenue-analyzer', destination: '/blog', permanent: true },
      { source: '/blog/education-sales-funnel-converter', destination: '/blog', permanent: true },
      { source: '/blog/lead-generation-planner-tutors', destination: '/blog', permanent: true },
      { source: '/blog/education-business-growth-calculator', destination: '/blog', permanent: true },
      { source: '/blog/kpi-tracking-education-businesses', destination: '/blog', permanent: true },
      { source: '/blog/education-marketing-strategy-generator', destination: '/blog', permanent: true },
      { source: '/blog/education-marketing-strategy-training-providers', destination: '/blog', permanent: true },
      { source: '/blog/rank-business-priorities-better-decisions', destination: '/blog', permanent: true },
      { source: '/blog/accountability-coaching-key-benefits-explained', destination: '/blog', permanent: true },
      { source: '/blog/simplify-your-offer-overcoming-choice-paralysis', destination: '/blog', permanent: true },
      { source: '/blog/why-feedback-builds-trust-confidence', destination: '/blog', permanent: true },
      { source: '/blog/build-triggers-daily-business-habits', destination: '/blog', permanent: true },

      // ─── Confidence coaching rebuild (2026-07-01): removed the remaining
      // SEO/lead-gen agency pages (sales tools, pricing, competitor
      // comparisons). None are relevant to a free confidence coaching site. ───
      { source: '/the-agency-vault', destination: '/', permanent: true },
      { source: '/signup', destination: '/', permanent: true },
      { source: '/we-get-you-leads', destination: '/', permanent: true },
      { source: '/website-audit', destination: '/', permanent: true },
      { source: '/wrise-alternative', destination: '/', permanent: true },
      { source: '/milk-it-digital-alternative', destination: '/', permanent: true },
      { source: '/get-your-website-seen-alternative', destination: '/', permanent: true },
      { source: '/wrise-vs-the-catalyst-method', destination: '/', permanent: true },
      { source: '/case-study-creation-coffee', destination: '/', permanent: true },
      { source: '/case-study-fitness-coach-chronicle', destination: '/', permanent: true },

      // ─── Old agency pages found 404-ing in Google Search Console (2026-07-09) ───
      { source: '/coaching-services', destination: '/', permanent: true },
      { source: '/work-with-me', destination: '/', permanent: true },
      { source: '/30-day-confidence-challenge', destination: '/', permanent: true },
      { source: '/training-provider-seo', destination: '/', permanent: true },
      { source: '/testimonials', destination: '/', permanent: true },
      { source: '/training-company-marketing', destination: '/blog', permanent: true },
      { source: '/how-to-grow-a-training-business', destination: '/blog', permanent: true },
      { source: '/privacy-policy', destination: '/terms-and-conditions', permanent: true },
    ]
  },
}

export default nextConfig

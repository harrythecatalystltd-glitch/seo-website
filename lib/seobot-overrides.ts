// SeoBot stores its own published date for each article, and we can't change that
// from this codebase. These articles were published by SeoBot with dates after
// 2 March 2026, so we override the date the site renders (the visible date on the
// post page, the BlogPosting datePublished schema, and the sitemap) to a date
// before 2 March 2026. Keyed by SeoBot article slug.
//
// To restore an article's real SeoBot date, edit it in the SeoBot dashboard and
// delete its entry here. New SeoBot articles published after 2 March 2026 will
// need adding to this map too.
export const SEOBOT_DATE_OVERRIDES: Record<string, string> = {
  'local-seo-for-business-checklist-actions': '2026-02-28',
  'local-seo-for-business-cost-uk-2026-pricing-breakdown': '2026-02-26',
  'how-to-local-seo-for-business-step-by-step-guide-examples': '2026-02-25',
  'local-seo-for-business-explained-plain-english': '2026-02-23',
  'can-i-do-local-seo-myself-small-business-owners': '2026-02-22',
  'local-seo-example-clear-answer-small-business-owners': '2026-02-21',
  'how-to-local-seo-for-my-business-small-business-owners': '2026-02-19',
  'local-seo-for-business-complete-2026-guide-uk-small-businesses': '2026-02-18',
  'seo-checker-tool': '2026-02-17',
}

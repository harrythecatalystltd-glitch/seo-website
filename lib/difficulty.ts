import type { SerpResult, DifficultyScore } from './keyword-types'

const BIG_BRANDS = new Set([
  'amazon.co.uk', 'amazon.com',
  'ebay.co.uk', 'ebay.com',
  'bbc.co.uk', 'bbc.com',
  'theguardian.com',
  'nhs.uk',
  'wikipedia.org',
  'checkatrade.com',
  'trustpilot.com',
  'yell.com',
  'ratedpeople.com',
  'bark.com',
  'which.co.uk',
  'moneysavingexpert.com',
  'comparethemarket.com',
  'confused.com',
  'gocompare.com',
  'reddit.com',
  'youtube.com',
  'linkedin.com',
  'facebook.com',
  'twitter.com',
  'x.com',
  'instagram.com',
  'tiktok.com',
  'tripadvisor.co.uk', 'tripadvisor.com',
  'booking.com',
  'airbnb.co.uk', 'airbnb.com',
  'rightmove.co.uk',
  'zoopla.co.uk',
  'gumtree.com',
  'autotrader.co.uk',
  'moz.com',
  'ahrefs.com',
  'semrush.com',
  'searchengineland.com',
  'neilpatel.com',
  'backlinko.com',
  'hubspot.com',
  'indeed.com', 'indeed.co.uk',
  'glassdoor.co.uk', 'glassdoor.com',
  'reed.co.uk',
  'totaljobs.com',
  'citizensadvice.org.uk',
  'moneyhelper.org.uk',
  'w3schools.com',
  'stackoverflow.com',
  'microsoft.com',
  'apple.com',
])

export function extractDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

function isBigBrand(domain: string): boolean {
  if (BIG_BRANDS.has(domain)) return true
  if (domain.endsWith('.gov.uk') || domain.endsWith('.nhs.uk')) return true
  for (const brand of Array.from(BIG_BRANDS)) {
    if (domain.endsWith('.' + brand)) return true
  }
  return false
}

function isHighAuthority(domain: string): boolean {
  return (
    domain.endsWith('.gov.uk') ||
    domain.endsWith('.edu') ||
    domain.endsWith('.ac.uk') ||
    domain === 'wikipedia.org' ||
    domain === 'nhs.uk'
  )
}

export function calculateDifficulty(results: SerpResult[]): DifficultyScore {
  if (!results.length) {
    return {
      score: 50,
      label: 'orange',
      verdict: 'Unknown',
      explanation: 'No SERP data available to assess difficulty.',
    }
  }

  const top10 = results.slice(0, 10)
  const top5 = results.slice(0, 5)
  const top3 = results.slice(0, 3)

  const brandsInTop10 = top10.filter(r => isBigBrand(r.domain)).length
  const brandsInTop3 = top3.filter(r => isBigBrand(r.domain)).length
  const authInTop10 = top10.filter(r => isHighAuthority(r.domain)).length
  const smallSitesInTop5 = top5.filter(r => !isBigBrand(r.domain)).length
  const uniqueDomains = new Set(top10.map(r => r.domain)).size

  const brandScore = Math.min(40, brandsInTop10 * 5)
  const top3Bonus = Math.min(20, brandsInTop3 * 8)
  const authScore = Math.min(20, authInTop10 * 8)
  const diversityPenalty = Math.max(0, (8 - uniqueDomains) * 2.5)

  let score = brandScore + top3Bonus + authScore + diversityPenalty

  if (smallSitesInTop5 >= 3) score -= 10
  else if (smallSitesInTop5 >= 2) score -= 5

  score = Math.max(0, Math.min(100, Math.round(score)))

  let label: DifficultyScore['label']
  let verdict: string
  let explanation: string

  if (score <= 33) {
    label = 'green'
    verdict = score <= 15 ? 'Low Competition' : 'Low-Medium Competition'
    explanation =
      smallSitesInTop5 >= 3
        ? `${smallSitesInTop5} of the top 5 results are from smaller or niche sites — there is clear room for a quality piece of content to rank here.`
        : `Only ${brandsInTop10} major brand${brandsInTop10 !== 1 ? 's' : ''} appear in the top 10. A well-optimised page has a realistic shot at ranking here.`
  } else if (score <= 66) {
    label = 'orange'
    verdict = 'Medium Competition'
    explanation = `${brandsInTop10} established brand${brandsInTop10 !== 1 ? 's' : ''} hold top-10 positions, but ${smallSitesInTop5} smaller site${smallSitesInTop5 !== 1 ? 's' : ''} also appear in the top 5. A well-structured, authoritative piece of content can realistically compete here.`
  } else {
    label = 'red'
    verdict = 'High Competition'
    explanation =
      brandsInTop3 >= 2
        ? `${brandsInTop3} of the top 3 positions are held by major brands or high-authority domains. Breaking into this SERP will require strong domain authority, exceptional content, and likely backlinks.`
        : `${brandsInTop10} major brands feature in the top 10, with significant authority signals throughout. This keyword needs a long-term content and link-building strategy.`
  }

  return { score, label, verdict, explanation }
}

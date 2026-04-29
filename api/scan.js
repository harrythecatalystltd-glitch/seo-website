const cheerio = require('cheerio');

const PAGESPEED_API = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

async function fetchWithTimeout(url, options = {}, timeout = 10000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

async function fetchPageSpeed(url) {
  try {
    const apiUrl = `${PAGESPEED_API}?url=${encodeURIComponent(url)}&strategy=mobile&category=performance&category=seo`;
    const res = await fetchWithTimeout(apiUrl, {}, 20000);
    const data = await res.json();
    const lr = data.lighthouseResult;
    return {
      performance: Math.round((lr?.categories?.performance?.score ?? 0) * 100),
      fcp: lr?.audits?.['first-contentful-paint']?.displayValue ?? null,
      lcp: lr?.audits?.['largest-contentful-paint']?.displayValue ?? null,
      isMobileReady: (lr?.audits?.['viewport']?.score ?? 0) === 1,
      isHttpsFromPS: (lr?.audits?.['is-on-https']?.score ?? 0) === 1,
    };
  } catch {
    return null;
  }
}

async function fetchHTML(url) {
  const res = await fetchWithTimeout(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-GB,en;q=0.9',
    },
  });
  if (!res.ok) throw new Error(`Site returned HTTP ${res.status}`);
  return res.text();
}

function analyzeHTML(html, url) {
  const $ = cheerio.load(html);
  const allText = $('body').text().toLowerCase();
  const bodyHtml = $('body').html() ?? '';

  const title = $('title').text().trim();
  const metaDesc = $('meta[name="description"]').attr('content')?.trim() ?? '';
  const h1Els = $('h1');
  const h1Count = h1Els.length;
  const h1Text = h1Els.first().text().trim();

  let totalImages = 0, imagesNoAlt = 0;
  $('img').each((_, el) => {
    totalImages++;
    const alt = $(el).attr('alt');
    if (!alt || alt.trim() === '') imagesNoAlt++;
  });

  const isHttps = url.startsWith('https://');

  let hasLocalBusinessSchema = false;
  const localBizTypes = ['localbusiness', 'plumber', 'electrician', 'restaurant', 'store', 'service', 'homeandconstructionbusiness', 'professionalservice', 'medicalorganization', 'foodestablishment', 'contractor', 'tradesperson'];
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const parsed = JSON.parse($(el).html() ?? '');
      const entries = Array.isArray(parsed) ? parsed : [parsed];
      const checkType = (t) => localBizTypes.some(bt => (t ?? '').toLowerCase().includes(bt));
      entries.forEach(s => {
        if (checkType(s['@type'])) hasLocalBusinessSchema = true;
        (s['@graph'] ?? []).forEach(g => { if (checkType(g['@type'])) hasLocalBusinessSchema = true; });
      });
    } catch {}
  });

  const hasTelLink = $('a[href^="tel:"]').length > 0;
  const phoneRegex = /(\+44[\s\-]?|0)[\d\s\-]{9,13}/;
  const hasPhone = phoneRegex.test(bodyHtml);
  const phoneAboveFold = $('header a[href^="tel:"]').length > 0 || $('nav a[href^="tel:"]').length > 0 || phoneRegex.test(bodyHtml.substring(0, 4000));

  const ctaKeywords = ['get a quote', 'free quote', 'book now', 'book a', 'free estimate', 'enquire now', 'enquire today', 'request a quote', 'get your free', 'start today', 'claim your', 'get started', 'call now'];
  const allAnchorText = $('a, button').map((_, el) => $(el).text().toLowerCase()).get().join(' ');
  const hasCTA = ctaKeywords.some(kw => allAnchorText.includes(kw));

  let hasContactForm = false;
  $('form').each((_, el) => {
    const realInputs = $(el).find('input[type="text"], input[type="email"], input[type="tel"], textarea');
    if (realInputs.length >= 2) hasContactForm = true;
  });

  const ukPostcode = /[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}/i;
  const hasAddress = ukPostcode.test(bodyHtml) || $('address').length > 0 || allText.includes('postcode') || allText.includes('our address');

  const reviewKws = ['review', 'testimonial', 'rated', '★', '⭐', 'trustpilot', 'google review', 'out of 5', 'what our customers', 'client said', 'what our clients', 'don\'t just take'];
  const hasReviews = reviewKws.some(kw => allText.includes(kw) || bodyHtml.includes(kw));

  const leadMagnetKws = ['free download', 'free guide', 'free checklist', 'free report', 'free ebook', 'free template', 'free resource', 'download now', 'newsletter', 'subscribe to', 'join our list', 'get your free', 'free tips'];
  const hasLeadMagnet = leadMagnetKws.some(kw => allText.includes(kw));

  const outcomeWords = ['get', 'save', 'stop', 'avoid', 'help', 'fix', 'solve', 'boost', 'improve', 'grow', 'protect', 'prevent', 'increase', 'reduce', 'transform', 'achieve', 'find', 'discover', 'remove', 'install', 'fit', 'supply', 'deliver', 'create', 'build', 'design', 'repair', 'replace', 'restore', 'clean', 'maintain'];
  const companyWords = [' ltd', ' limited', ' group', ' plc', ' inc', '& son', '& co'];
  const h1Lower = h1Text.toLowerCase();
  const h1HasOutcome = outcomeWords.some(w => h1Lower.includes(w));
  const h1IsCompanyOnly = companyWords.some(w => h1Lower.includes(w)) && h1Text.length < 35;
  const hasProblemSolution = h1Count > 0 && h1HasOutcome && !h1IsCompanyOnly;

  return { title, titleLen: title.length, metaDesc, h1Count, h1Text, imagesNoAlt, totalImages, isHttps, hasLocalBusinessSchema, hasTelLink, hasPhone, phoneAboveFold, hasCTA, hasContactForm, hasAddress, hasReviews, hasLeadMagnet, hasProblemSolution };
}

function buildChecks(html, ps) {
  const checks = [];

  // 1. Page speed (0–15 pts)
  if (ps?.performance != null) {
    const s = ps.performance;
    const pts = s >= 90 ? 15 : s >= 75 ? 11 : s >= 50 ? 6 : s >= 25 ? 2 : 0;
    const fcp = ps.fcp ? ` Your page starts showing content at ${ps.fcp}.` : '';
    checks.push({
      id: 'page_speed', category: 'SEO', title: 'Page Load Speed',
      what: s >= 75 ? `Your site loads quickly (${s}/100 speed score)` : `Your site speed score is ${s}/100`,
      impact: s >= 75
        ? `Good — fast pages keep visitors engaged and get a ranking boost from Google.${fcp}`
        : `More than half of mobile visitors leave if a page takes longer than 3 seconds. Slow pages cost you clicks and customers every single day.${fcp}`,
      severity: s >= 75 ? 'good' : s >= 50 ? 'urgent' : 'critical',
      points: pts, maxPoints: 15,
    });
  }

  // 2. Mobile friendly (0–8 pts)
  if (ps?.isMobileReady != null) {
    const ok = ps.isMobileReady;
    checks.push({
      id: 'mobile_friendly', category: 'SEO', title: 'Mobile Friendly',
      what: ok ? 'Your site displays correctly on mobile devices' : 'Your site does not display correctly on mobile',
      impact: ok
        ? 'Most local searches happen on phones — your site passes the mobile test.'
        : 'The majority of people searching for local businesses are on their phone. If your site looks broken on mobile, they will call a competitor instead.',
      severity: ok ? 'good' : 'critical',
      points: ok ? 8 : 0, maxPoints: 8,
    });
  }

  // 3. HTTPS (0–5 pts)
  checks.push({
    id: 'https', category: 'SEO', title: 'Secure Website (HTTPS)',
    what: html.isHttps ? 'Your site uses a secure, encrypted connection' : 'Your site is not running on a secure connection',
    impact: html.isHttps
      ? "Google gives a small ranking boost to secure sites and visitors see a padlock — not a 'Not Secure' warning."
      : "Visitors see a 'Not Secure' warning in their browser before they even read a word. Google penalises non-secure sites in search rankings.",
    severity: html.isHttps ? 'good' : 'critical',
    points: html.isHttps ? 5 : 0, maxPoints: 5,
  });

  // 4. Title tag (0–6 pts)
  const titleOk = html.title && html.titleLen >= 30 && html.titleLen <= 65;
  checks.push({
    id: 'title_tag', category: 'SEO', title: 'Google Listing Headline (Title Tag)',
    what: !html.title
      ? 'No title tag found on your page'
      : titleOk
        ? `Title tag found (${html.titleLen} characters)`
        : `Title tag is ${html.titleLen < 30 ? 'too short' : 'too long'} (${html.titleLen} of 50–65 characters)`,
    impact: !html.title
      ? "Your Google listing has no headline — this is one of the most important ranking signals and it is missing completely."
      : titleOk
        ? 'Your Google headline is the right length and will display in full in search results.'
        : html.titleLen > 65
          ? "Your Google headline gets cut off with '…' in search results. Add your location and key service to win more clicks."
          : "Your Google headline is too short. Expand it with your main service and location to capture more search traffic.",
    severity: !html.title ? 'critical' : titleOk ? 'good' : 'urgent',
    points: !html.title ? 0 : titleOk ? 6 : 3, maxPoints: 6,
  });

  // 5. Meta description (0–5 pts)
  const metaOk = html.metaDesc && html.metaDesc.length >= 100 && html.metaDesc.length <= 165;
  checks.push({
    id: 'meta_description', category: 'SEO', title: 'Google Search Snippet (Meta Description)',
    what: !html.metaDesc
      ? 'No meta description found — Google will display random text from your page'
      : metaOk
        ? `Meta description found (${html.metaDesc.length} characters)`
        : `Meta description is ${html.metaDesc.length < 100 ? 'too short' : 'too long'} (${html.metaDesc.length} characters)`,
    impact: !html.metaDesc
      ? "This is a free advertising slot in every Google result — and it is blank. Google will pull random sentences from your page instead, which rarely convinces anyone to click."
      : metaOk
        ? 'Your Google snippet is the right length — use it to include your location, main service, and a clear reason to click.'
        : "This is your free advert in Google search results. Make it count with your location, service, and a compelling reason to click.",
    severity: !html.metaDesc ? 'urgent' : metaOk ? 'good' : 'urgent',
    points: !html.metaDesc ? 0 : metaOk ? 5 : 2, maxPoints: 5,
  });

  // 6. H1 tag (0–7 pts)
  checks.push({
    id: 'h1_tag', category: 'SEO', title: 'Main Page Headline (H1)',
    what: html.h1Count === 0
      ? 'No main headline found on your page'
      : html.h1Count > 1
        ? `${html.h1Count} main headlines found (should be exactly one)`
        : `Main headline: "${html.h1Text}"`,
    impact: html.h1Count === 0
      ? "Google uses your main headline to understand what your page is about. Without one, you are invisible for most searches in your area."
      : html.h1Count > 1
        ? 'Multiple main headlines confuse Google about your page topic, spreading your ranking power thin.'
        : 'Google can identify your main topic — a solid foundation for ranking in local searches.',
    severity: html.h1Count === 0 ? 'critical' : html.h1Count > 1 ? 'urgent' : 'good',
    points: html.h1Count === 0 ? 0 : html.h1Count > 1 ? 3 : 7, maxPoints: 7,
  });

  // 7. Local Business Schema (0–7 pts)
  checks.push({
    id: 'schema', category: 'SEO', title: 'Google Maps Visibility (Local Schema)',
    what: html.hasLocalBusinessSchema
      ? 'Local business structured data found on your site'
      : 'No local business structured data detected',
    impact: html.hasLocalBusinessSchema
      ? "Google can automatically pull your business details into Maps and local listings — supporting the local 3-pack."
      : "Without this code, Google struggles to connect your website to your local area. You are likely missing from the Google Maps results that appear above regular search listings.",
    severity: html.hasLocalBusinessSchema ? 'good' : 'urgent',
    points: html.hasLocalBusinessSchema ? 7 : 0, maxPoints: 7,
  });

  // 8. Image alt text (0–4 pts)
  const altOk = html.imagesNoAlt === 0;
  checks.push({
    id: 'image_alt', category: 'SEO', title: 'Image Descriptions (Alt Text)',
    what: html.totalImages === 0
      ? 'No images found on page'
      : altOk
        ? `All ${html.totalImages} images have descriptions`
        : `${html.imagesNoAlt} of ${html.totalImages} images are missing descriptions`,
    impact: html.totalImages === 0
      ? 'No images found — consider adding photos of your work to build trust with visitors.'
      : altOk
        ? 'Google can understand all your images — supporting image search and overall page relevance.'
        : "Google cannot see images — only the text descriptions attached to them. Missing descriptions mean you're losing ranking potential and image search visibility.",
    severity: html.totalImages === 0 || !altOk ? 'urgent' : 'good',
    points: html.totalImages === 0 ? 2 : altOk ? 4 : Math.max(0, Math.round(4 * (1 - html.imagesNoAlt / html.totalImages))), maxPoints: 4,
  });

  // 9. Tap-to-call phone (0–7 pts)
  checks.push({
    id: 'tap_to_call', category: 'Lead Gen', title: 'Tap-to-Call Phone Number',
    what: html.hasTelLink
      ? 'Phone number is linked to call directly when tapped on mobile'
      : html.hasPhone
        ? 'Phone number found but is not set up as a tap-to-call link'
        : 'No phone number found on this page',
    impact: html.hasTelLink
      ? 'Mobile visitors can call you with a single tap — this directly increases the number of enquiries you receive.'
      : html.hasPhone
        ? "Your number is visible but mobile visitors have to copy and paste it to call. Most won't bother — they'll find a competitor who makes it easier."
        : "There is no phone number on this page. Visitors who want to call have to search for your number elsewhere — most won't.",
    severity: html.hasTelLink ? 'good' : 'critical',
    points: html.hasTelLink ? 7 : 0, maxPoints: 7,
  });

  // 10. Phone above the fold (0–4 pts)
  checks.push({
    id: 'phone_above_fold', category: 'Lead Gen', title: 'Phone Number Immediately Visible',
    what: html.phoneAboveFold
      ? 'Phone number is visible at the top of the page without scrolling'
      : 'Phone number is not clearly visible at the top of the page',
    impact: html.phoneAboveFold
      ? 'Visitors see how to contact you the moment the page loads — reducing friction.'
      : "Most visitors never scroll. If your phone number is buried at the bottom, a large portion of interested visitors leave without ever calling you.",
    severity: html.phoneAboveFold ? 'good' : 'urgent',
    points: html.phoneAboveFold ? 4 : 0, maxPoints: 4,
  });

  // 11. CTA button (0–6 pts)
  checks.push({
    id: 'cta_button', category: 'Lead Gen', title: 'Clear Call-to-Action Button',
    what: html.hasCTA
      ? 'A clear call-to-action button was found (e.g. "Get a Quote", "Book Now")'
      : 'No clear call-to-action button detected on this page',
    impact: html.hasCTA
      ? "Visitors have an obvious next step — this is one of the biggest drivers of turning visitors into enquiries."
      : "Without a clear button like 'Get a Free Quote' or 'Book Now', visitors do not know what to do next and leave. You are getting traffic but not converting it.",
    severity: html.hasCTA ? 'good' : 'critical',
    points: html.hasCTA ? 6 : 0, maxPoints: 6,
  });

  // 12. Contact form (0–4 pts)
  checks.push({
    id: 'contact_form', category: 'Lead Gen', title: 'Contact Form',
    what: html.hasContactForm
      ? 'A contact form was found on this page'
      : 'No contact form detected',
    impact: html.hasContactForm
      ? 'Visitors who prefer not to call can still enquire — important for capturing leads at any time of day.'
      : "Some of your best potential customers prefer not to call. Without a form, you lose everyone who would have enquired out of hours or over the weekend.",
    severity: html.hasContactForm ? 'good' : 'urgent',
    points: html.hasContactForm ? 4 : 0, maxPoints: 4,
  });

  // 13. Address / NAP (0–5 pts)
  checks.push({
    id: 'nap', category: 'Lead Gen', title: 'Business Address on Website',
    what: html.hasAddress
      ? 'A business address was found on this page'
      : 'No business address detected on this page',
    impact: html.hasAddress
      ? 'Google cross-references your address with your Google Business Profile — consistent NAP data supports local rankings.'
      : "Google checks that your address matches across your website and Google Business Profile. Inconsistent or missing address data directly damages your local search rankings.",
    severity: html.hasAddress ? 'good' : 'urgent',
    points: html.hasAddress ? 5 : 0, maxPoints: 5,
  });

  // 14. Reviews / testimonials (0–5 pts)
  checks.push({
    id: 'social_proof', category: 'Lead Gen', title: 'Reviews & Testimonials on Page',
    what: html.hasReviews
      ? 'Reviews or testimonials were found on this page'
      : 'No reviews or testimonials detected on this page',
    impact: html.hasReviews
      ? 'Social proof builds trust before visitors enquire — customers who see reviews convert at a much higher rate.'
      : "Over 90% of people read reviews before choosing a local business. Without visible reviews on your own site, you are asking visitors to take a leap of faith that a competitor with visible testimonials does not require.",
    severity: html.hasReviews ? 'good' : 'urgent',
    points: html.hasReviews ? 5 : 0, maxPoints: 5,
  });

  // 15. Lead magnet (0–8 pts)
  checks.push({
    id: 'lead_magnet', category: 'Lead Gen', title: 'Email Capture / Lead Magnet',
    what: html.hasLeadMagnet
      ? 'An email capture or lead magnet offer was found on this page'
      : 'No email capture or lead magnet found on this page',
    impact: html.hasLeadMagnet
      ? "You have a way to stay in touch with visitors who are not ready to buy yet — this compounds over time into a real pipeline."
      : "Only around 3% of visitors are ready to buy on their first visit. Without a way to capture the other 97% — a free guide, checklist, or newsletter — every visitor who leaves is gone for good. You are building no audience and no future pipeline.",
    severity: html.hasLeadMagnet ? 'good' : 'critical',
    points: html.hasLeadMagnet ? 8 : 0, maxPoints: 8,
  });

  // 16. Problem / solution clarity (0–8 pts)
  checks.push({
    id: 'problem_solution', category: 'Lead Gen', title: 'Clear Problem & Solution in Headline',
    what: html.hasProblemSolution
      ? 'Your headline communicates what you do and the outcome you deliver'
      : html.h1Count === 0
        ? 'No headline found to evaluate'
        : `Your main headline is: "${html.h1Text || 'No text found'}"`,
    impact: html.hasProblemSolution
      ? "Visitors understand immediately what you do and why it matters to them — strong first impression."
      : "Visitors decide in under 5 seconds whether to stay or leave. If your headline is a company name or does not say what problem you solve, most leave immediately — and go to a competitor whose page speaks directly to their situation.",
    severity: html.hasProblemSolution ? 'good' : 'critical',
    points: html.hasProblemSolution ? 8 : 0, maxPoints: 8,
  });

  return checks;
}

function getScoreBand(score) {
  if (score >= 85) return { label: 'Strong foundations', color: '#10B981', message: "Your site has solid fundamentals. There are still edges to sharpen — let's find them." };
  if (score >= 65) return { label: 'Notable gaps remain', color: '#F59E0B', message: "You have reasonable foundations but key gaps are likely costing you enquiries every week." };
  if (score >= 40) return { label: 'Serious gaps your competitors may be exploiting', color: '#F97316', message: "Multiple issues are actively reducing your visibility and the number of enquiries you receive." };
  return { label: 'Your site is losing you enquiries daily', color: '#EF4444', message: "Critical issues mean many potential customers cannot find you — and those who do are not converting." };
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let { url } = req.body ?? {};
  if (!url) return res.status(400).json({ error: 'URL is required' });

  if (!/^https?:\/\//i.test(url)) url = 'https://' + url;

  let targetUrl;
  try {
    targetUrl = new URL(url);
  } catch {
    return res.status(400).json({ error: 'That does not look like a valid web address. Try entering it as yourwebsite.co.uk' });
  }

  const domain = targetUrl.hostname.replace(/^www\./, '');

  const [htmlResult, psResult] = await Promise.allSettled([
    fetchHTML(targetUrl.href),
    fetchPageSpeed(targetUrl.href),
  ]);

  if (htmlResult.status === 'rejected') {
    return res.status(422).json({ error: `We could not access that website. It may be down or blocking automated requests. Try another URL.` });
  }

  const htmlData = analyzeHTML(htmlResult.value, targetUrl.href);
  const psData = psResult.status === 'fulfilled' ? psResult.value : null;

  const checks = buildChecks(htmlData, psData);
  const totalPoints = checks.reduce((s, c) => s + c.points, 0);
  const maxPoints = checks.reduce((s, c) => s + c.maxPoints, 0);
  const score = Math.round((totalPoints / maxPoints) * 100);
  const band = getScoreBand(score);

  const critical = checks.filter(c => c.severity === 'critical');
  const urgent = checks.filter(c => c.severity === 'urgent');
  const good = checks.filter(c => c.severity === 'good');

  return res.status(200).json({ url: targetUrl.href, domain, score, band, checks, critical, urgent, good, pageSpeed: psData?.performance ?? null, scannedAt: new Date().toISOString() });
};

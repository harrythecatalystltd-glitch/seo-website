#!/usr/bin/env node
/**
 * The pre-publish quality gate for manual blog posts.
 *
 * This is the machine-checkable half of Section 10 of CONTENT-BIBLE.md. It
 * cannot judge whether a post is congruent with Harry's beliefs, but it can
 * refuse anything that breaks a rule a script can see: dashes, US spelling,
 * a missing disclaimer, thin word count, a pitch, a missing image.
 *
 * Usage:
 *   node scripts/check-posts.mjs <slug> [slug...]   check specific posts
 *   node scripts/check-posts.mjs --all              check every post
 *
 * Exits 1 if any post fails. Warnings never fail the run.
 */

import { manualPosts } from '../lib/manual-posts.ts'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

// Written before the confidence rebuild, kept only so its URL still resolves.
const LEGACY_EXEMPT = new Set(['bringing-classes-rosters-and-schedules-into-one-place'])

const US_SPELLINGS = [
  'realize', 'realized', 'realizing', 'organize', 'organized', 'organizing',
  'recognize', 'recognized', 'recognizing', 'apologize', 'apologized',
  'analyze', 'analyzed', 'analyzing', 'prioritize', 'prioritized',
  'summarize', 'summarized', 'minimize', 'maximize', 'criticize',
  'color', 'colors', 'behavior', 'behaviors', 'favorite', 'favorites',
  'honor', 'humor', 'labor', 'neighbor', 'rumor',
  'center', 'centers', 'centered', 'theater', 'fiber',
  'defense', 'offense', 'traveled', 'traveling', 'canceled',
  'modeling', 'labeled', 'fulfill', 'skillful', 'enrollment', 'gray',
]

const PITCH_PATTERNS = [
  /\bbook a call\b/i, /\bbook your call\b/i, /\bpricing\b/i, /\bbuy now\b/i,
  /\bper session\b/i, /\bpayment plan\b/i, /\benrol now\b/i,
  /\bdiscount\b/i, /\bspaces are limited\b/i, /\blimited time\b/i,
]

// A money amount is only a pitch when it sits near commercial vocabulary.
// "clear £3,000 of credit card debt" is an example goal, not a price list.
const MONEY = /[£$]\s?[\d,]+/g
const COMMERCE_NEARBY = /\b(session|sessions|coaching|programme|program|course|price|cost|costs|fee|fees|per month|per week|pay|payment|invest|package)\b/i

// Claims that are a breach unless the sentence already negates them.
// "I am not treating or diagnosing anything" is the house disclaimer.
const CLAIM_PATTERNS = [
  /\bwill cure\b/i,
  /\bcures\b/i,
  /\bdiagnos(e|es|ing)\b/i,
  /\bguarantee[ds]?\b/i,
  /\b(scientifically |clinically )?proven to (work|help|cure|fix|reduce|increase|boost)\b/i,
  /\bscience proves\b/i,
  /\bresearch proves\b/i,
]

// Hawkins' muscle testing and consciousness numbers get named in order to be
// disowned, so a mention is fine as long as the passage rejects it either way.
const DISOWNABLE_PATTERNS = [
  /\bmuscle test/i,
  /\bcalibrat(e|es|ed|ion)\b/i,
  /\blevel \d{3}\b/i,
]

const NEGATION = /\b(not|never|no|without|cannot|can't|don't|do not|isn't|is not|rather than|instead of|deliberately|nor)\b/i

function negatedBefore(text, index) {
  return NEGATION.test(text.slice(Math.max(0, index - 110), index))
}

function disowned(text, index) {
  return negatedBefore(text, index) || NEGATION.test(text.slice(index, index + 160))
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function syllables(word) {
  const w = word.toLowerCase().replace(/[^a-z]/g, '')
  if (!w) return 0
  if (w.length <= 3) return 1
  const groups = w
    .replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
    .replace(/^y/, '')
    .match(/[aeiouy]{1,2}/g)
  return groups ? groups.length : 1
}

function readability(text) {
  const sentences = text.split(/[.!?]+(?:\s|$)/).filter((s) => s.trim().length > 1)
  const words = text.split(/\s+/).filter(Boolean)
  if (!sentences.length || !words.length) return { grade: 0, avgSentence: 0 }
  const syl = words.reduce((n, w) => n + syllables(w), 0)
  const grade = 0.39 * (words.length / sentences.length) + 11.8 * (syl / words.length) - 15.59
  return {
    grade: Math.round(grade * 10) / 10,
    avgSentence: Math.round((words.length / sentences.length) * 10) / 10,
  }
}

function knownRoutes() {
  const routes = new Set(['/'])
  const appDir = path.join(ROOT, 'app')
  const walk = (dir, prefix) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue
      if (entry.name.startsWith('[') || entry.name === 'api' || entry.name === 'og') continue
      const route = prefix + '/' + entry.name
      if (fs.existsSync(path.join(dir, entry.name, 'page.tsx'))) routes.add(route)
      walk(path.join(dir, entry.name), route)
    }
  }
  walk(appDir, '')
  return routes
}

function checkPost(post, routes, allSlugs) {
  const fails = []
  const warns = []
  const { title, description, html, image, publishedAt, readingTime, category } = post
  const whole = title + ' ' + description + ' ' + html
  const text = stripHtml(html)
  const words = text.split(/\s+/).filter(Boolean)

  // --- Voice ---
  const em = (whole.match(/—/g) || []).length
  const en = (whole.match(/–/g) || []).length
  if (em) fails.push(em + ' em dash(es) present. The bible bans them outright.')
  if (en) fails.push(en + ' en dash(es) present. The bible bans them outright.')

  const found = []
  for (const w of US_SPELLINGS) {
    if (new RegExp('\\b' + w + '\\b', 'i').test(text)) found.push(w)
  }
  if (found.length) fails.push('US spelling: ' + found.join(', ') + '. Site is UK English.')

  // --- Craft ---
  if (words.length < 1400) fails.push('Only ' + words.length + ' words. Minimum is 1400.')
  else if (words.length < 1800) warns.push(words.length + ' words. Recent posts run 2000 to 3000.')

  if (!/TL;DR/i.test(html)) fails.push('No TL;DR box. Every post on the site has one.')

  const h2s = (html.match(/<h2[\s>]/gi) || []).length
  if (h2s < 5) fails.push('Only ' + h2s + ' H2 sections. Minimum is 5.')
  if (h2s >= 5 && !/In this article/i.test(html)) {
    warns.push('No table of contents, but the post has 5 or more H2s.')
  }

  const internal = [...html.matchAll(/href="(\/[^"#]*)"/g)].map((m) => m[1])
  if (internal.length < 5) fails.push('Only ' + internal.length + ' internal links. Minimum is 5.')

  for (const href of new Set(internal)) {
    const clean = href.replace(/\/$/, '') || '/'
    if (clean.startsWith('/blog/')) {
      const target = clean.slice('/blog/'.length)
      if (!allSlugs.has(target)) {
        warns.push('Link to /blog/' + target + ' is not a manual post. Fine if it is a SeoBot article, broken otherwise.')
      }
    } else if (!routes.has(clean) && clean !== '/') {
      fails.push('Internal link ' + href + ' does not match any page in app/.')
    }
  }

  const faqSchema = /"@type"\s*:\s*"FAQPage"/.test(html)
  const faqHeadings = /id="faq/i.test(html) || /Common questions/i.test(html) || /\bFAQ\b/.test(html)
  if (!faqSchema) fails.push('No FAQPage structured data.')
  if (!faqHeadings) fails.push('No visible FAQ section.')
  if (faqSchema) {
    const qCount = (html.match(/"@type"\s*:\s*"Question"/g) || []).length
    if (qCount < 5) fails.push('FAQ schema has ' + qCount + ' questions. Minimum is 5.')
  }

  if (!/Written by Harry/i.test(html)) fails.push('Not signed off as Harry.')

  // --- Boundaries ---
  const disclaimer = /not a trained life coach/i.test(html) || /href="\/about"/.test(html)
  if (!disclaimer) fails.push('No "not a trained life coach or counsellor" line and no link to /about.')

  const claimScan = (patterns, allow, label) => {
    for (const re of patterns) {
      const g = new RegExp(re.source, 'gi')
      for (const m of text.matchAll(g)) {
        if (allow(text, m.index)) continue
        fails.push(label + ': "' + m[0] + '" in "' +
          text.slice(Math.max(0, m.index - 60), m.index + 40).trim() + '".')
        break
      }
    }
  }
  claimScan(CLAIM_PATTERNS, negatedBefore, 'Unhedged claim')
  claimScan(DISOWNABLE_PATTERNS, disowned, 'Mentioned without disowning it')

  // --- Business model ---
  for (const re of PITCH_PATTERNS) {
    const m = text.match(re)
    if (m) fails.push('Reads as a pitch: "' + m[0] + '". Everything on this site is free.')
  }
  for (const m of text.matchAll(MONEY)) {
    const around = text.slice(Math.max(0, m.index - 90), m.index + 90)
    if (COMMERCE_NEARBY.test(around)) {
      fails.push('Money amount near commercial wording: "' + around.trim() + '".')
      break
    }
  }
  if (!/self-belief-email-series/.test(html) && !/\/contact/.test(html)) {
    fails.push('Neither standard CTA present (free email series, or contact me).')
  }

  // --- Metadata ---
  if (!image) fails.push('No image set.')
  else {
    const file = path.join(ROOT, 'public', image.replace(/^\//, '').replace(/^public\//, ''))
    if (!fs.existsSync(file)) fails.push('Image file missing: public' + image)
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(publishedAt || '')) {
    fails.push('publishedAt "' + publishedAt + '" is not YYYY-MM-DD.')
  } else if (new Date(publishedAt) > new Date()) {
    fails.push('publishedAt ' + publishedAt + ' is in the future.')
  }
  if (!readingTime || readingTime < 4) fails.push('readingTime is ' + readingTime + '. Expected 5 or more.')
  if (!category) fails.push('No category.')
  if (!description) fails.push('No meta description.')
  else if (description.length < 110 || description.length > 175) {
    fails.push('Meta description is ' + description.length + ' chars. Aim for 110 to 175.')
  }
  if (title && title.length > 75) warns.push('Title is ' + title.length + ' chars, over 75 may truncate in Google.')

  // --- Readability ---
  const { grade, avgSentence } = readability(text)
  if (grade > 9) fails.push('Reading grade ' + grade + '. The bible asks for roughly age 11.')
  else if (grade > 8) warns.push('Reading grade ' + grade + ', slightly above target.')
  if (avgSentence > 22) warns.push('Average sentence is ' + avgSentence + ' words. Aim shorter.')

  return { fails, warns, stats: { words: words.length, h2s, links: internal.length, grade } }
}

function main() {
  const argv = process.argv.slice(2)
  const all = argv.includes('--all')
  const wanted = argv.filter((a) => !a.startsWith('--'))

  const bySlug = new Map()
  const dupes = []
  for (const p of manualPosts) {
    if (bySlug.has(p.slug)) dupes.push(p.slug)
    bySlug.set(p.slug, p)
  }

  let targets
  if (all) targets = manualPosts.filter((p) => !LEGACY_EXEMPT.has(p.slug))
  else if (wanted.length) targets = wanted.map((s) => bySlug.get(s) || { slug: s, missing: true })
  else {
    console.error('Give one or more slugs, or --all.')
    process.exit(2)
  }

  const allSlugs = new Set(manualPosts.map((p) => p.slug))
  const routes = knownRoutes()
  let failed = 0

  if (dupes.length) {
    console.log('FAIL  duplicate slugs in manual-posts.ts: ' + dupes.join(', '))
    failed++
  }

  for (const post of targets) {
    if (post.missing) {
      console.log('\nFAIL  ' + post.slug + '\n  x Not found in manual-posts.ts.')
      failed++
      continue
    }
    const { fails, warns, stats } = checkPost(post, routes, allSlugs)
    const badge = fails.length ? 'FAIL' : 'PASS'
    console.log(
      '\n' + badge + '  ' + post.slug + '  (' + stats.words + ' words, ' + stats.h2s +
      ' H2, ' + stats.links + ' links, grade ' + stats.grade + ')',
    )
    for (const f of fails) console.log('  x ' + f)
    for (const w of warns) console.log('  ! ' + w)
    if (fails.length) failed++
  }

  console.log('\n' + targets.length + ' post(s) checked, ' + failed + ' failed.')
  process.exit(failed ? 1 : 0)
}

main()

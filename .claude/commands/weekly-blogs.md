---
description: Research, write, illustrate and publish the next four blog posts from CONTENT-PLAN.md
---

# Weekly blog run

Publish the next four posts from the content plan, live, with no questions asked.

This runs unattended every Friday. **Never stop to ask anything.** If a decision is unclear,
take the conservative option, note it in the run summary, and carry on. If something is
genuinely unsafe to publish, skip that one post, finish the others, and say so in the summary.

Work through the phases in order. Do not skip a phase.

---

## Phase 0: Preconditions

```bash
git -C "C:/Users/harry/scratch/The Catalyst Method SEO Website" status --porcelain
```

- Working directory must be the project root.
- If the tree has uncommitted changes to `lib/manual-posts.ts`, `CONTENT-PLAN.md` or
  `public/blog/`, stop and report. Someone is mid-edit and this run would clobber it.
  Changes to unrelated files are fine.
- Make sure you are on `main`, then `git pull --ff-only`. If the pull fails, stop and report.

## Phase 1: Read the rules

Read these in full before writing a single word. This is not optional and it is not
summarisable:

1. `CONTENT-BIBLE.md` — every section. It governs what the writing may say.
2. `CONTENT-PLAN.md` — the queue and its inherited rules.

You need Section 1 (the five steps in order), Section 2 (core beliefs), Section 3 (the story
bank, the only facts you may use), Section 4 (voice), Section 6 (congruence traps),
Section 7 (boundaries), Section 8 (the business model) and Section 9 (what already exists).

## Phase 2: Pick the four posts

Take the first four rows in `CONTENT-PLAN.md` with status `queued`, in file order.

For each, confirm the slug does not already exist in `lib/manual-posts.ts`. If it does, mark
that row `skip: already published` and take the next queued row instead.

If fewer than four rows are queued, publish what there is and flag the shortfall loudly in the
summary.

## Phase 3: Research each post

For each of the four, research before writing. Do this silently, no research dumps.

- Search the primary keyword and read what currently ranks. Note the angles taken, the word
  count to beat, and the questions left unanswered.
- Collect the questions people actually ask. These become the FAQ, which must have at least
  five entries, and must answer the awkward ones honestly rather than the easy ones.
- Note the gap. The plan row's angle column says what the differentiator is. Hold to it.

Research informs the writing. It never overrides the bible. Where a ranking page says
something that contradicts Harry's beliefs, the post says so plainly and explains why he
disagrees. That disagreement is the reason the post is worth reading.

## Phase 4: Write each post

Match the house structure exactly. Copy it from a recent post, `self-doubt-before-you-grow`
or `how-to-build-self-belief` in `lib/manual-posts.ts`, and follow it element for element:

1. TL;DR box (gold border, `rgba(255,215,0,0.06)` background)
2. "In this article" table of contents, anchored to every H2
3. Body, H2 every 250 to 350 words, with `id` attributes matching the contents list
4. The email series CTA box roughly 40 percent through
5. More body
6. FAQ section, five or six questions, each an `h3`-weight paragraph plus answer
7. `FAQPage` JSON-LD script matching the visible FAQ word for word
8. "Written by Harry" bio box with the disclaimer line and links to `/blog` and `/about`

Hard requirements, all enforced by the quality gate in Phase 6:

- 2,000 to 3,000 words. Under 1,400 fails outright.
- **Zero em dashes and zero en dashes.** Use a comma, a full stop, or a new sentence.
- UK spelling throughout.
- Reading grade 9 or below. Short sentences. Paragraphs of one to three lines.
- At least five internal links, worked into sentences, never "click here". Include the cluster
  pillar named in the plan row, at least two related blog posts, and one standard CTA.
- Names at least one thing that does not work, or something Harry still gets wrong.
- No pricing, no booking, no pitch. Free weekly tips or contact me directly, nothing else.
- Nothing invented. Every personal fact comes from the story bank in Section 3.
- First person, hedged honestly. "I think", never "research proves".

Then add the entry to `lib/manual-posts.ts`, appended before the closing `]`:

```ts
  {
    slug: '<slug from the plan>',
    title: '<final title>',
    description: '<110 to 175 characters>',
    category: 'Personal Development',
    publishedAt: '<today, YYYY-MM-DD>',
    readingTime: <body words / 200, rounded>,
    image: '/blog/<slug>.jpg',
    html: `...`,
  },
```

Ordering in the file does not matter. Everything on the site sorts by `publishedAt`.

## Phase 5: Generate the image

One per post, before the quality gate runs, or the gate will fail on the missing file:

```bash
node scripts/make-blog-image.mjs --slug=<slug> --title="<title>" --category="<category>"
```

Writes `public/blog/<slug>.jpg` in the site's navy and gold at 1600x845, the same size as
every existing blog image.

## Phase 6: The quality gate

```bash
node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON scripts/check-posts.mjs <slug1> <slug2> <slug3> <slug4>
```

This is the machine-checkable half of Section 10 of the bible. Every post must pass.

- On failure, fix the post and run it again. Two attempts per post.
- If a post still fails after two attempts, remove it from `lib/manual-posts.ts`, delete its
  image, set its plan row to `blocked: <the failing check>`, and carry on with the others.
  One bad topic must never stop the week going out.

Warnings do not block publishing, but fix the cheap ones.

Then run the half a script cannot check. Read each post back against Section 10 of the bible
yourself and confirm, in the summary, that each line passes:

- Traceable to a core belief, contradicts none
- Checked against every congruence trap in Section 6
- Teaches the sequence in the right order: let the feeling go, check the story, then act
- No claim, story, number or date outside the story bank
- Professional support framed as alongside, never instead of

## Phase 7: Build

```bash
npm run build
```

Catches the syntax errors a text-level check cannot: an unescaped backtick in the HTML, a
broken template literal, a bad import. If the build fails, fix it. Never publish a red build.

## Phase 8: Update the plan

In `CONTENT-PLAN.md`, change each published row's status from `queued` to
`published YYYY-MM-DD`.

Count the remaining `queued` rows. If fewer than eight, say so prominently in the summary so
the queue gets topped up before it runs dry.

## Phase 9: Publish

```bash
git add lib/manual-posts.ts CONTENT-PLAN.md public/blog/
git commit -m "$(cat <<'MSG'
Publish four posts: <slug1>, <slug2>, <slug3>, <slug4>

Written from the CONTENT-PLAN.md queue, checked against the Section 10
pre-publish checklist and the automated quality gate.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
MSG
)"
git push origin main
```

Pushing to `main` deploys to Vercel. The posts are live within a couple of minutes at
`https://www.thecatalystmethod.co.uk/blog/<slug>`.

## Phase 10: Summary

Append a dated entry to `content-runs.log` in the project root, and print the same thing:

- The four slugs, titles and live URLs
- Word count, reading grade and internal link count for each
- The Section 10 confirmation from Phase 6
- Anything skipped or blocked, with the reason
- Queued rows remaining, and a warning if under eight
- The commit SHA

Keep it short. It should be readable on a phone.

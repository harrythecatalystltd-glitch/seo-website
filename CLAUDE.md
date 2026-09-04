# The Catalyst Method

Confidence and self-belief site for Harry. UK. Next.js app, deployed on Vercel.

## Content rule (applies to ALL content work)

**Before writing or editing ANY content for this project, read `CONTENT-BIBLE.md` in full.**

This applies to: blog posts, lead magnets, email copy, ad copy, page copy, programme outlines,
social posts, and any rewrite of existing copy. It applies whether or not a skill is invoked, and
it overrides any conflicting instruction in a skill, template, or generic marketing brief.

`CONTENT-BIBLE.md` is the canonical source for:

- **The Catalyst Method**, the named framework and its five steps in order
- Harry's core beliefs (contradict none of them)
- The story bank of personal facts (invent nothing outside it)
- Voice rules, including **no em dashes or en dashes, ever**, and UK spelling
- **Congruence traps**: the standard self-help advice that directly contradicts Harry
- Boundaries and disclaimers that are legally and ethically non-negotiable
- The business model: everything is free, there is never a pitch

**After writing**, run the pre-publish checklist in Section 10 of the bible and report the result.

If Harry says something new (a story, a belief, a change to the model), add it to
`CONTENT-BIBLE.md` first, then write the content.

## The weekly blog routine

Four posts publish every Friday at 07:00, unattended, from a Windows scheduled task called
"Catalyst Method weekly blogs".

| Piece | File |
| --- | --- |
| What gets written, and in what order | `CONTENT-PLAN.md` |
| The pipeline the run follows | `.claude/commands/weekly-blogs.md` |
| The automated quality gate | `scripts/check-posts.mjs` |
| The featured image generator | `scripts/make-blog-image.mjs` |
| The headless runner and its logs | `scripts/run-weekly-blogs.ps1`, `logs/` |
| Registering or removing the schedule | `scripts/register-weekly-task.ps1` |

To change what gets published, edit `CONTENT-PLAN.md`. Nothing else needs touching. The run
never picks its own topics.

Run it by hand at any time with `/weekly-blogs`, or check a post with
`npm run check:posts -- <slug>`.

## Other project notes

- Manual blog posts live in `lib/manual-posts.ts`. Everything on the site sorts by
  `publishedAt`, so new entries can be appended to the end of the array.
- Manual posts carry their real publish date. The "before 2 March 2026" rule applies only to
  SeoBot articles, which is what `lib/seobot-overrides.ts` exists to enforce.

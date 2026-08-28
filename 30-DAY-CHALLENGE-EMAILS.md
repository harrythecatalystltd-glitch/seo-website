# The Catalyst Method 30 Day Challenge: MailerLite automation

**What this is.** Every email in the daily automation that carries someone through
The Catalyst Method 30 Day Challenge. 32 emails. Day 0 on signup, then one a day to day 31.

Source of truth for the content is `30-DAY-CHALLENGE-COPY.md`. Source of truth for voice, beliefs
and boundaries is `CONTENT-BIBLE.md`. Nothing here adds a claim, a story or a number that is not
already in one of those two.

Written 28 August 2026.

---

## Before you build this, one model question

Section 8 of the bible says one email a week, nothing more, and no daily nudges. This automation
is daily for 31 days, so it needs a line drawn round it or it contradicts the site.

**The line I have assumed.** The challenge is a separate thing people opt into on purpose, and
daily is the product rather than a nudge. The weekly email stays weekly and untouched.

**What that needs from the signup page.** Say it plainly before they subscribe.

> One email a day for 31 days, then it stops. After that you can have the weekly one if you want
> it, or nothing at all.

If you would rather not run anything daily, the alternative is the milestone version, about ten
emails on the days that turn. Say the word and I will cut it down to that.

---

## MailerLite setup

**Automation name:** The Catalyst Method 30 Day Challenge

**Trigger:** subscriber joins group `30 Day Challenge`

**Group:** create a new group, `30 Day Challenge`. Keep it separate from the weekly list so the
two never overlap. Someone can sit in both.

**Steps:** Email 0 sends immediately. Every email after it is `Wait 1 day`, then the email.

**Delivery window:** set every email after Email 0 to deliver at **6:30am**. That is the hour you
actually get up, these are written to be read before the day starts, and day 1 asks people to do
their twenty minutes before they read the rest.

**At the end:** after Email 31, add an action to move them to a group called
`Finished the challenge`. Nothing sends from that group. It is there so you know who has heard the
whole thing if they ever write to you.

**Merge tags:** none used anywhere, on purpose. The form only collects an email address, so a name
tag would render empty or fall back to something generic. A first line that gets someone's name
wrong reads worse than one that never tried.

**Do not add:** a re-engagement email, a "you missed a day" email, an open-based branch, or
anything that reacts to what they did. The challenge tells them their sheet is private, that
nobody is watching, and that missing a day changes nothing. An automation that behaves otherwise
breaks that promise quietly.

---

## The links used in these emails

| What | Link |
|---|---|
| The challenge page | https://zippy-hamster-ee2a9f.netlify.app/ |
| Tick sheet | https://docs.google.com/document/d/1UwKkD3Q1TGJmj-Cuz0mTWG1K_shSdJvQ/edit?usp=sharing |
| Mental state checklist guide | https://docs.google.com/document/d/1vdNy0gSSkoDWnzp3MUPr9Eeh_4a-P-Qb/edit?usp=sharing |
| Email | hey@thecatalystmethod.co.uk |
| WhatsApp | https://wa.me/447787227022 |

**On the Google Doc links.** `30-DAY-CHALLENGE-COPY.md` used to list two different document IDs
for these. Checked on 28 August 2026: the pair in the copy file returned 410 Gone, and the two
above returned 200. The copy file has been corrected to match, so all three files now agree.

**Anchor links.** The page has anchors for `#d0`, `#d16`, `#d17`, `#d22`, `#d26`, `#run`, `#rules`
and `#books`. `#d17` and `#d22` were added on 28 August 2026, so the day 17 and day 22 emails now
deep link properly. **The page needs redeploying to Netlify before those two emails go out**, or
both links will land at the top of the old page instead.

---

## The footer that goes on every email

Build this once as a reusable block in MailerLite and drop it on all 32.

> No sales pitch, ever. There is nothing to buy at the end of this.
>
> If you want to reply, just hit reply. It comes to me and I write back myself, usually within a
> business day.
>
> Written by Harry. I am not a trained life coach or counsellor. Everything here is what has
> helped me, and that is the only lens I have. If you need proper professional support, please go
> and get it, alongside this rather than instead of it.
>
> Unsubscribe anytime, no hard feelings.

---
---

# Email 0. Day 0

**Sends:** immediately on signup
**Subject:** Day 0. Three small jobs before tomorrow
**Preview text:** You are not broken. Nothing is missing from you.

---

You are not broken. Nothing is missing from you.

This is not 30 days of fixing yourself. It is 30 days of proving something to yourself.

Here is what you will prove. When you say you will do something, you do it.

That is what self belief really is. It is not a good mood. It is proof that your word is good.

I am not going to promise you will feel confident on day 31. Nothing works that fast. Anyone who
says it does is selling you something.

What I can tell you is what happened to me. And that I still do this today.

**Time it takes:** about 25 minutes a day. Twenty minutes for your activity. Under a minute to
read your list. A few seconds to tick a box.

**What you need:** the tick sheet, and somewhere to write. That is it. Nothing to buy.

Today there are three small jobs. None of them take long. You start properly tomorrow.

## 1. Pick your twenty minutes

Pick one thing you will do every day for 30 days.

Walk, with no phone and no music. Meditate. Run. Lift weights. Read something that helps you grow.
Learn a new skill.

Pick something you actually like. Do not pick it because you think you should. If you force it,
you will stop by day three.

Not sure? Walk with no phone. It is the easiest way in. There is nothing to hide behind.

One thing to know now. Some days twenty minutes will feel like too much. On those days you do five
minutes. That still counts. More on that on day 3.

## 2. Get your tick sheet

Download your tick sheet here:
https://docs.google.com/document/d/1UwKkD3Q1TGJmj-Cuz0mTWG1K_shSdJvQ/edit?usp=sharing

Print it, or keep it on your phone. Thirty boxes, and that is all it is.

Each day you do your twenty minutes, tick a box.

Nobody else sees it. On day 26 you will count the ticks. That number will matter more than how you
feel.

## 3. Write down your big goal

Not a thing you want. The person you want to be.

Aim high. Higher than feels sensible. Aim high and miss, and you still land somewhere better than
if you aimed low.

Write it down. Put it where you will see it.

Do not know what it is? That is fine. Most people do not. It is often the reason they are here.

Try one of these instead.

Write what you do not want your life to look like in five years.

Or write the three things that matter most to you, put them in order, and use number one.

Or finish this sentence. "I want to be someone who..."

This is a first draft. It is not a promise. You will look at it again on day 26, and it will be
clearer then.

A rough goal you write today beats a perfect one you never write.

That is day 0 done. Tomorrow you start.

The whole challenge sits on one page if you ever want to read ahead:
https://zippy-hamster-ee2a9f.netlify.app/

---

# Email 1. Day 1

**Sends:** 1 day after Email 0, 6:30am
**Subject:** Day 1. Do the thing first, then read this
**Preview text:** Thinking is not your problem. Doing is where this starts.

---

Do your twenty minutes. Do it before you read the rest of this email. Then tick the box.

I mean that. Do the thing first.

You already know how to think about your life. Thinking is not your problem. Doing is where this
starts.

Still here? Go on. I will wait.

## Now set your goal for the 30 days

You wrote your big goal yesterday. This is the other one, and it is much smaller.

Pick one goal for the month.

Make it small. Make it something only you control. Nobody else's choices should be able to take it
from you.

## Now do this

Sit somewhere quiet.

1. Picture your goal. Picture yourself having done it. Do not strain. Just see it done. See
   yourself calm about it.
2. Loosen your grip. Notice how tightly you are holding on. Let it go a little. Wanting something
   too badly wears you out.
3. Now decide you are going to do it. That is your intention.

The wanting loosens. The intention stays.

## Two honest notes

Step 2 is the easy version on purpose. Letting go properly is a skill. You learn it on day 17.
Today, just loosen your grip.

And if picturing your goal makes you feel silly, that is normal. A voice might say "that will
never happen." Do not fight it. Do not force the picture. Write the thought down and keep it. You
will use it on day 16.

One tick on the sheet. That is the day.

---

# Email 2. Day 2

**Sends:** 1 day after Email 1, 6:30am
**Subject:** Day 2. Write your list today
**Preview text:** Five to eight lines. Things you can do, not things you have to believe.

---

Do your twenty minutes. Tick the box.

Now you are going to write a short list. It is a list of how you want to behave.

Keep it in your phone notes. Pin it to the top.

## First, one important thing

You are about to think about your bad days. So know this before you start.

Being honest is not the same as being hard on yourself.

Being hard on yourself says: "I am lazy and I always have been."

Being honest says: "I snapped at my sister on Tuesday."

One is a judgement about who you are. The other is a fact you can do something about.

If a line you write says something bad about who you are, bin it. More on this on day 4.

## You can use mine as a guide

Here is my own list, and a walkthrough for writing yours:
https://docs.google.com/document/d/1vdNy0gSSkoDWnzp3MUPr9Eeh_4a-P-Qb/edit?usp=sharing

Have a look at it. See the shape of it. See how short the lines are.

Then put it away and write your own.

Your own words carry weight. Someone else's read like advice, and advice is easy to ignore. Use
mine to see what a line looks like, not to borrow the lines.

## Now write your list

Five to eight lines. Write things you can do, not things you have to believe.

"Be curious" is something you can do in your next chat, whatever mood you are in.

"I am confident" is a claim. If part of you does not believe it, you have started an argument with
yourself.

Write it from your bad days. Think about the last few times you did not like how you acted. You
snapped. You went quiet. You rushed a choice.

What would you have needed to remember right then? That is your first line.

Add one or two lines about what you will not chase. Money. Being liked. Being right. Being busy.

Then cut it down. You should be able to say it from memory. A list you do not read is useless.

---

# Email 3. Day 3

**Sends:** 1 day after Email 2, 6:30am
**Subject:** Day 3. Three rules for the bad days
**Preview text:** You cannot decide what to do on a bad day while you are having one.

---

Do your twenty minutes. Read your list morning and night from today. Tick the box.

Now read these three rules.

You read them today because they are for bad days. You cannot decide what to do on a bad day while
you are having one.

## Rule 1. Shrink it. Do not skip it

Some days twenty minutes feels like too much. On those days do five minutes.

Five minutes still counts. It is still a promise kept.

Twenty minutes is the target. It is not the minimum.

## Rule 2. If you miss a day, carry on

Go to the next day. Do not start again at day 1.

Missing one day does not cancel the days you did.

Starting again is a punishment. Punishment is what makes people quit.

## Rule 3. If something hard comes up before day 17

The proper letting go work starts on day 17. But quiet time can bring things up sooner.

If something hits you hard, do this.

1. Notice it. Name it. Say "that is fear" or "that is anger."
2. Find where you feel it in your body. Your chest. Your stomach. Your throat. Your jaw.
3. Let it sit there. Do not fix it. Wait until it fades.

That is the short version of what you learn properly on day 17.

All three rules live in one place here:
https://zippy-hamster-ee2a9f.netlify.app/#rules

---

# Email 4. Day 4

**Sends:** 1 day after Email 3, 6:30am
**Subject:** Day 4. Honest is not the same as hard on yourself
**Preview text:** Five minutes of reading. Nothing else to do today.

---

Do your twenty minutes. Tick the box.

Now five minutes of reading. Nothing else to do today.

## 1. Being honest is not being hard on yourself

None of this works without honesty. Honesty is the part people skip. Usually because they mix it
up with having a go at themselves.

Hard on yourself: "I am lazy and always have been."

Honest: "I have not been to the gym in five weeks."

One is a judgement about you. The other is a fact you can act on.

All month, check which one you are doing. If it ends in a word about who you are, that is you
having a go at yourself. If it ends in a fact, that is honesty.

## 2. You cannot fix what you will not look at

That is why honesty comes first.

## 3. Being humble just means being willing to grow

Humble does not mean thinking less of yourself.

It means you accept two things. You have growing to do. And you might be wrong about some of what
you believe about yourself.

Part of you will fight this. Your ego wants you to stay the same. Same job. Same friends. Same
you. Staying the same feels safe.

So when that voice turns up, it will sound sensible. It usually does.

## What today is not

Today is not the day you list everything wrong with your life.

That would just hand your worst thoughts a shopping list.

The real look comes on day 26. By then you will have put some things down, and the truth will not
feel like a threat.

## One small job

Read your day 2 list. If there is no line about being honest with yourself, add one now.

It is easy to write and hard to keep. It is easy to be honest with other people and still tell
yourself a story.
---

# Email 5. Day 5

**Sends:** 1 day after Email 4, 6:30am
**Subject:** Day 5. Nothing new for a while
**Preview text:** That is on purpose.

---

Every morning and every night, read your list.

Every day, do your twenty minutes.

Every day, tick the box.

That is all. Nothing new for eleven days. That is on purpose.

The value is not in one good session. It is in doing it again and again. It works like the gym.

Some days it will feel useful. Some days it will feel like twenty minutes of fidgeting. Both
count.

Showing up builds the habit. How deep it felt does not matter.

Tomorrow I am going to tell you about something that is coming. Read that one.

---

# Email 6. Day 6

**Sends:** 1 day after Email 5, 6:30am
**Subject:** Day 6. Around now it starts to feel pointless
**Preview text:** I want you to know that is coming. It happens to everyone.

---

Do your twenty minutes. Tick the box. Then read this, because it is about the next few days.

Around day six or seven, this will start to feel pointless.

The new feeling will have worn off. Nothing will look different. You will have done it five or six
times and you will feel much the same.

Then a thought will turn up. It will sound very reasonable. It will say: this is not working. Same
as always.

I want you to know that is coming. It happens to everyone.

It is not a fact about you. It is not a fact about whether this works.

It is the gap between doing something and being able to feel it work. That gap always feels bad.

Two things get you through.

**Look at your ticks, not your feelings.** How you feel on day seven proves nothing. Six ticks
proves something. That is why you keep the sheet.

**Use rule 1, not the door.** On the days it feels worst, do five minutes. Five minutes on a bad
day is worth more than twenty on an easy one. It proves you have a floor.

Get through days six to nine and you get through this. That stretch is the whole test. It is far
more boring than it feels.

---

# Email 7. Day 7

**Sends:** 1 day after Email 6, 6:30am
**Subject:** Day 7. The boring bit is the test
**Preview text:** Nothing clever today. Just the thing, and the box.

---

Read your list. Do your twenty minutes. Tick the box.

That is the email.

If yesterday's thought has turned up, you already know what it is. It is not news about you. It is
just what day seven feels like.

Nothing to work out today. Do the thing, and tick the box.

---

# Email 8. Day 8

**Sends:** 1 day after Email 7, 6:30am
**Subject:** Day 8. Five minutes is a real answer
**Preview text:** Twenty minutes is the target. It is not the minimum.

---

Read your list. Do your twenty minutes. Tick the box.

If today is one of the days where twenty minutes feels like too much, do five.

Five minutes still counts. It is still a promise kept. It still gets a tick.

Twenty minutes is the target. It is not the minimum. The only thing that would break the run is
doing nothing and calling it a rest day.

Shrink it. Do not skip it.

---

# Email 9. Day 9

**Sends:** 1 day after Email 8, 6:30am
**Subject:** Day 9. This is the far side of it
**Preview text:** Days six to nine was the stretch. You are in it today.

---

Read your list. Do your twenty minutes. Tick the box.

Days six to nine was the stretch I warned you about. Today is the last of it.

I am not going to tell you it gets easy from here. Some of it stays boring, and boring is the part
most people quit on.

But you have done it while it felt like nothing. That is the bit that counts. Anyone can do this
in the first week when it still feels new.

Look at the sheet before you close this. However many ticks are on it, you put every one there
yourself.

---

# Email 10. Day 10

**Sends:** 1 day after Email 9, 6:30am
**Subject:** Day 10. If you have missed one
**Preview text:** Carry on at today. Do not start again at day 1.

---

Read your list. Do your twenty minutes. Tick the box.

If you have missed a day by now, this one is for you.

Carry on at today. Do not start again at day 1.

Missing a day does not cancel the days you did. Those happened. The ticks are still there.

Starting again is a punishment, and punishment is what makes people quit. It feels like taking it
seriously. It is actually the first move towards stopping.

There is no clean run to protect here. There never was. There is just today, and whether you do
your twenty minutes.

---

# Email 11. Day 11

**Sends:** 1 day after Email 10, 6:30am
**Subject:** Day 11. A bad session still counts
**Preview text:** How deep it felt does not matter.

---

Read your list. Do your twenty minutes. Tick the box.

Some days you will finish and think you did it badly. Your head was everywhere. You walked and
thought about work the whole way.

That still counts, and it still gets a tick.

You are not being marked on the quality of your twenty minutes. There is no good session and bad
session. There is done and not done.

It is like the gym. The value is in the routine, not in any single session.

---

# Email 12. Day 12

**Sends:** 1 day after Email 11, 6:30am
**Subject:** Day 12. Are you still reading your list?
**Preview text:** Morning and night. It takes under a minute.

---

Do your twenty minutes. Tick the box.

One question today. Are you still reading your list, morning and night?

It is the easiest part to let slide, because it is small and nothing bad happens when you skip it.

It takes under a minute. Read it now, before you get into the day.

If you cannot remember the last time you read it, that is fine. Just read it today.

---

# Email 13. Day 13

**Sends:** 1 day after Email 12, 6:30am
**Subject:** Day 13. Nobody is watching, and that is the point
**Preview text:** Your sheet is proof, not pressure.

---

Read your list. Do your twenty minutes. Tick the box.

There is no public streak here. There is no accountability partner. I am never going to ask you
how you are getting on.

That is deliberate.

Both of those run on being scared of being seen to fail. That is force with a friendly face, and
force runs out.

Your tick sheet is private. It is proof, not pressure.

The only person you are keeping your word to is you. That is harder, and it is the only version
that still works in a year.

---

# Email 14. Day 14

**Sends:** 1 day after Email 13, 6:30am
**Subject:** Day 14. Two weeks
**Preview text:** Do not count them yet. Just notice they are there.

---

Read your list. Do your twenty minutes. Tick the box.

Two weeks today.

Do not count the ticks yet. You do that on day 26, and there is a reason it waits.

Just notice that the sheet has things on it. Two weeks ago it was empty and this was an idea.

Self belief runs on evidence. That sheet is the evidence. It is not a mood, and it is not
something you have to talk yourself into.

Keep going.

---

# Email 15. Day 15

**Sends:** 1 day after Email 14, 6:30am
**Subject:** Day 15. Get some paper ready for tomorrow
**Preview text:** Tomorrow you look back. Today, just the usual.

---

Read your list. Do your twenty minutes. Tick the box.

Today is the last of the quiet stretch. Tomorrow you look back at the last two weeks and write
some things down.

So find somewhere to write it. Paper, phone notes, whatever you will still have in ten days,
because you will read it again on day 26.

That is the only job. Everything else today is the usual.
---

# Email 16. Day 16

**Sends:** 1 day after Email 15, 6:30am
**Subject:** Day 16. Look back at the last two weeks
**Preview text:** Not everything. Just the ones that keep coming back.

---

Do your twenty minutes. Tick the box. Nothing else today except this.

Sit down and look back at the last two weeks.

How has your head actually felt?

And what keeps coming up that you need to deal with?

## Write down the ones that keep coming back

Not everything. Not the worst thing you can think of. Just the ones that turned up more than once
while you were walking. Or the ones you noticed yourself steering away from.

Five or six is plenty.

You have nine days and ten minutes a day to work through this. A list of forty is not better. It
is unusable.

Anything you leave off will come back on its own if it matters.

Do not tidy them up. Do not work out what they mean yet. Just get them down.

## Write the honest version

Not the nice one. Not the harsh one. Day 4 applies here. Facts about what happened, not judgements
about who you are.

Nobody else is reading this. A tidied up version only fools you.

Keep this page. You will compare it on day 26.

## Is your list bigger than you expected?

That happens. Two weeks of quiet brings up more than people think it will.

If what you have written down feels bigger than a walk and ten minutes a day, say so. Hit reply
and send me the short version of it.

Or WhatsApp me: https://wa.me/447787227022

I read these myself and I write back, usually within a day. There is no sales script and there is
nothing to buy.

The day 16 section is here if you want it on the page:
https://zippy-hamster-ee2a9f.netlify.app/#d16

---

# Email 17. Day 17

**Sends:** 1 day after Email 16, 6:30am
**Subject:** Day 17. Letting go
**Preview text:** Read the first bit before you sit down. It matters.

---

Do your twenty minutes. Tick the box.

Today the second part starts. Ten minutes of sitting, on top of your twenty.

Read this first bit before you sit down.

## Read this first

Sitting still takes away the things you use to distract yourself. So what is underneath comes up.

Feeling bored, restless, sad or teary is common. Old memories can turn up. This usually settles
over a few weeks.

Researchers at Brown University found side effects are far more common than the apps admit. A
small number of people get effects bad enough to affect daily life.

Stop, and get support, if you:

- get panic that will not settle
- feel detached from yourself or from the world
- start reliving something traumatic
- cannot sleep
- cannot function

For anything milder, go shorter and gentler. Do not force it.

## What to do

Sit for ten minutes.

Bring one thing from your day 16 list to mind. Let the feeling actually come up. Do not just think
about it.

Then breathe, and let it go.

Let go of the feeling. Let go of what you decided it means.

It was never yours to carry.

Do not fight it. Do not talk yourself out of it. Do not explain it. Let it sit there until it runs
out of steam. It always does.

## You will probably think you are doing it wrong

Almost everyone does.

You will sit down, follow the steps, and feel nothing move. Then you will decide you are bad at
this.

It took me weeks before it felt natural. I still do not always manage it.

Nobody reads this once and gets it right first time.

Two things help.

**You cannot do it badly enough to matter.** The worst case is you sat quietly for ten minutes.

**Feeling nothing does not mean it failed.** Some of it goes with no moment you can point to. You
just notice weeks later that something does not bother you like it used to.

Sit down tomorrow and do it again. That is the whole thing.

## Stuck on this bit?

This is the part of the challenge people find hardest, and it is the hardest part to learn from a
page.

If you have sat with it a few times and nothing is moving, do not spend another week guessing.
Hit reply and tell me what you are doing, and what is happening when you do it.

Or WhatsApp me: https://wa.me/447787227022

A real reply from me, not a script. There is nothing to buy.

The day 17 section is on the page here, including the safety note:
https://zippy-hamster-ee2a9f.netlify.app/#d17

---

# Email 18. Day 18

**Sends:** 1 day after Email 17, 6:30am
**Subject:** Day 18. Again, with the next one
**Preview text:** Ten minutes letting go, plus your twenty. One thing at a time.

---

Ten minutes letting go. Plus your twenty minutes. Tick the box.

Work through your day 16 list. One thing at a time.

If yesterday felt like nothing happened, do it again anyway. That is not a sign you are doing it
wrong. It is what the second day looks like.

Same as the gym. Nobody judges a session by how the second one felt.

---

# Email 19. Day 19

**Sends:** 1 day after Email 18, 6:30am
**Subject:** Day 19. One thing, not the whole list
**Preview text:** You have a week for this. Do not rush it.

---

Ten minutes letting go. Plus your twenty minutes. Tick the box.

Take one thing off your day 16 list today. Just one.

There is a pull to get through the whole list quickly, especially if it is longer than you wanted
it to be. Do not.

Sitting properly with one is worth more than skimming five.

You have a week of this. It is enough.

---

# Email 20. Day 20

**Sends:** 1 day after Email 19, 6:30am
**Subject:** Day 20. What happened, and what you added
**Preview text:** Split a page in two. Look at which side is longer.

---

Ten minutes letting go. Plus your twenty minutes. Tick the box.

Then one extra thing today. It takes about five minutes.

After your ten minutes, pick one thing from your list. Split a page in two.

**Left side. What actually happened.** Just the facts. What a camera would have seen.

**Right side. What you added.** What you decided it meant. What you decided it said about you.

Look at which side is longer.

Most of what hurts is on the right. And the right side is not the event. It is how it looks from
where you are standing today.

Where you are standing is not the same as what is real.

Keep the page. It is a useful thing to have next to you on day 26.

---

# Email 21. Day 21

**Sends:** 1 day after Email 20, 6:30am
**Subject:** Day 21. Three weeks
**Preview text:** Nothing new today. Keep working through the list.

---

Ten minutes letting go. Plus your twenty minutes. Tick the box.

Three weeks today. Nothing new to do.

Keep going through your day 16 list. Whichever one keeps putting its hand up, take that one.

If yesterday's two columns are still sitting with you, use the same one again. Repeating one is
allowed. Nothing on that list has to be dealt with in a single sitting.

---

# Email 22. Day 22

**Sends:** 1 day after Email 21, 6:30am
**Subject:** Day 22. Guard the thought, then swap it
**Preview text:** Noticing is not enough on its own. Here is what to do in the moment.

---

Ten minutes letting go. Plus your twenty minutes. Tick the box.

By now you are noticing things. That is what the last week was for.

But noticing is not enough on its own. You need to know what to do in the moment.

Here is the whole thing. It takes about a minute.

## Step 1. Guard the door

A thought turns up. "I will make a fool of myself." "They will think I am an idiot."

Do not let it walk straight in. Stop. Notice that you are about to believe it.

That pause is the guard. Most doubting thoughts get in because nobody checked them.

## Step 2. Swap it for something true

Not a nicer lie. Something true.

Do not swap "I am rubbish at this" for "I am brilliant at this." Part of you knows that is not
true. Now you are arguing with yourself.

Swap it for something you can actually stand behind.

- "That is a feeling. It is not a fact."
- "I have done harder things than this."
- "I do not know how this will go yet."

That last one is often the truest thing you have. Use it.

Sometimes the doubt has a point. "I have not practised this" might just be true. Then the action
in step 3 is to go and practise.

## Step 3. Now do one small thing that proves it

A true thought with nothing behind it fades by the afternoon.

Send the message. Ask the question. Put your hand up.

Small is fine. The point is the proof, not the size.

## Why this comes now, and not in week one

Swapping a thought before you have let the feeling go is just covering it with a nicer sentence.
The feeling is still there, and it comes back.

You have spent five days letting go. There is room now. That is why this works today and would not
have worked on day 3.

Use it every day from now on.

The three steps are on the page here, if you want them somewhere you can find again:
https://zippy-hamster-ee2a9f.netlify.app/#d22

---

# Email 23. Day 23

**Sends:** 1 day after Email 22, 6:30am
**Subject:** Day 23. Use it once today
**Preview text:** Guard the door, swap it, then do one small thing.

---

Ten minutes letting go. Plus your twenty minutes. Tick the box.

Use yesterday's minute at least once today. Guard the door, swap the thought, then do one small
thing that proves it.

The third step is the one people drop, because the first two happen in your head and the third one
costs something.

Keep it small. One message. One question. One sentence you would normally leave unsaid.

---

# Email 24. Day 24

**Sends:** 1 day after Email 23, 6:30am
**Subject:** Day 24. When the doubt has a point
**Preview text:** Sometimes it is not a false thought. Sometimes it is a to-do.

---

Ten minutes letting go. Plus your twenty minutes. Tick the box.

Not every doubting thought is a lie you need to catch.

Sometimes it is telling you something plain and true. You have not practised. You do not know
enough about it yet. You have left it too late to do it well today.

That is not self doubt. That is information.

The tell is what it points at. A false thought points at who you are. A true one points at
something you can go and do.

If it is the second kind, do the thing it is pointing at.

---

# Email 25. Day 25

**Sends:** 1 day after Email 24, 6:30am
**Subject:** Day 25. Dig out your day 16 page
**Preview text:** Tomorrow you look back at it. Find it today.

---

Ten minutes letting go. Plus your twenty minutes. Tick the box.

Tomorrow you look back properly, so find your day 16 page today and put it somewhere you can get
at it.

Do not read it yet. Reading it today and again tomorrow blurs the two, and the whole point is
seeing the gap between them.

You will also need your tick sheet tomorrow.

That is the only job today.
---

# Email 26. Day 26

**Sends:** 1 day after Email 25, 6:30am
**Subject:** Day 26. Look back, and count
**Preview text:** Read the bit before the counting. It matters more than the number.

---

Do your twenty minutes. Tick the box.

Write down how you feel now. Write down what has been coming up lately.

Then read your day 16 page. Put them side by side.

You are not marking yourself. You are looking to see if the right hand side has got shorter.

## Now count your ticks

Read this before you count. It matters more than the number.

Whatever the number is, it is a count of times you kept your word to yourself.

That is all it is. It is not a score. There is no number on that sheet that means you failed.

Got 25? Good.

Got 14? Then you kept your word to yourself fourteen times in three weeks. That is fourteen more
than the you who had not started.

A low number is still proof. And it points the same way.

Now watch what your mind does. This is the moment it will try something.

It will take a real number and turn it into a verdict. "Not even half. Same as always. Knew it."

That is you having a go at yourself. You learned the difference on day 4.

Honesty says: I did it fourteen times out of twenty three. Everything after that is a story you
added.

Now count them. How many of the last 23 days did you do your twenty minutes? Count the five minute
ones too. Write the number down.

Self belief is believing you will do what you said. It runs on proof. You just spent three weeks
making some. It only works if you look at it.

## The mirror

This is the day I said was coming on day 4.

Holding yourself up to a mirror means looking at where you actually are.

Not where you say you are. Not where you meant to be by now.

That sounds harsh. It is the opposite.

When you respect yourself, you can afford to be honest. The truth stops being a threat.

You could not have done this on day 4. That is why I did not ask.

Two questions. Answer them plainly.

1. Where am I really, on the thing I set out to do on day 1?
2. What have I been avoiding looking at?

Keep checking which side of the line you are on. Facts, not judgements. If a sentence ends in a
word about your character, write it again.

And this is not the soft option. Forcing yourself through something is easy to understand. Sitting
with why you avoided it is harder. Doing that without turning it into an attack on yourself is
harder still.

## If today stung

It can. This is the day people find heaviest, and that is usually a sign you looked properly
rather than a sign you did it wrong.

You do not have to sit with it on your own. Hit reply and tell me what you saw when you looked.

Or WhatsApp me: https://wa.me/447787227022

I reply myself. No script, nothing to buy, and no follow up you did not ask for.

The day 26 section is on the page here:
https://zippy-hamster-ee2a9f.netlify.app/#d26

---

# Email 27. Day 27

**Sends:** 1 day after Email 26, 6:30am
**Subject:** Day 27. If you really loved yourself
**Preview text:** The sitting changes today. And one job for day 29.

---

Twenty minutes sitting quietly, plus your twenty minute activity. Tick the box.

The sitting changes now. You are not working through your list any more.

Instead, sit with this question.

**If I really loved myself, would I treat my body, my mind and my time like this?**

Then picture it. What would treating yourself well actually look like? In real life. In small,
ordinary detail.

And what would you need to change to make that true?

Write down what you come up with. Keep one list across the next four days.

Yours will be your own. But here are the kinds of things that come up.

- Where you spend your days
- Who you spend time with. Some people help you grow. Some quietly keep you where you are.
- What you eat
- Moving your body
- Doing more of what you love
- Helping other people

None of that is a rule. Nothing here is banned.

That is the point. If you were being strict with yourself, you would be banning things.

Here it works the other way. You stop doing what harms you, because that is not how you treat
someone you care about.

## One extra job today

Look ahead to day 29. Decide now what your one real thing is going to be. Write it down.

Decide it today. If you leave it until the day, you will pick something safe. Or you will find a
reason it is not the right time.

Make it small and clear. Not "be more confident at work."

One message. One question. One chat. One thing you send.

---

# Email 28. Day 28

**Sends:** 1 day after Email 27, 6:30am
**Subject:** Day 28. Stay with the question
**Preview text:** Same question as yesterday. Add to the same list.

---

Twenty minutes sitting quietly, plus your twenty minute activity. Tick the box.

Same question as yesterday.

If I really loved myself, would I treat my body, my mind and my time like this?

Add to the same list. Do not start a new one.

The second day with a question is usually where the smaller, more honest answers turn up. The
obvious ones came yesterday.

One check before you close this. Have you written down your one real thing for tomorrow? If not,
do it now, while it is still a day away.

---

# Email 29. Day 29

**Sends:** 1 day after Email 28, 6:30am
**Subject:** Day 29. Do the real thing
**Preview text:** The one you picked on day 27. Today it goes out into real life.

---

Twenty minutes sitting quietly, plus your twenty minute activity. Tick the box.

Today you do the thing you picked on day 27.

Do the short version first.

1. Notice the feeling.
2. Find it in your body.
3. Let it sit there until it fades.
4. Then check what actually happened against what you added on top.

Then do the thing anyway.

**This has a shrink rule too.** If the thing you picked really will not move today, do a smaller
version. Do not do nothing.

Send the shorter message. Ask the smaller question. Say one sentence instead of having the whole
chat.

A small version done beats the full version put off. And putting it off is a move you already know
well.

**If you do not manage it at all, that is not the month undone.** You have 28 days of proof behind
you, and one day you did not take.

Write down honestly what stopped you. That is the most useful thing on your list going into
tomorrow. It is information, not a verdict.

This day matters because the rest of the month happened in a quiet room. This is the first time it
has to hold up in real life. Real life is the only place proof really counts.

## If you did not do it

Hit reply and tell me what stopped you.

Or WhatsApp me: https://wa.me/447787227022

I mean that one especially. Of all the messages I get about this challenge, that is usually the
most useful conversation of the lot, because whatever stopped you today is the same thing that has
been stopping you for a while.

A real reply from me. Nothing to buy.

---

# Email 30. Day 30

**Sends:** 1 day after Email 29, 6:30am
**Subject:** Day 30. The promise
**Preview text:** Read it all back. Count them one more time. Then make one promise.

---

Do your twenty minutes. Tick the last box.

Read it all back. Your day 16 page. Your day 26 page. Your list from the last four days.

Count your ticks one more time. All 30 days.

**Now make one promise to yourself. Promise to treat yourself with love and respect.**

Then plan it. Go through your list from days 27 to 30. Decide what you are actually going to do.

Not all of it. Pick what matters and start there.

That promise is the whole thing. It is the engine that keeps everything else running.

If you force yourself instead, it will crack. Usually around week six. Then you will decide the
crack says something about you.

It does not. You just ran out of something that always runs out.

Holding yourself to something out of love holds. Holding yourself to it out of shame does not.

Same actions. Completely different engine. Only one of them still works in a year.

---

# Email 31. Day 31

**Sends:** 1 day after Email 30, 6:30am
**Subject:** Day 31. Nothing changes
**Preview text:** It was never a challenge. It was the start of something you keep.

---

Nothing changes today. You keep doing your twenty minutes.

It was never a challenge. It was the start of something you keep.

There is nothing to buy. There is no next level. There is no pitch coming. This is the last email
in this series and there is not a second one waiting behind it.

Two things before I leave you to it.

**If you want to talk any of it through**, just hit reply. What came up, what you are doing next,
what you could not get to work. Anything.

Or WhatsApp me: https://wa.me/447787227022

I reply myself. There is no sales script waiting.

**And if this helped, tell someone who needs it.** There is no ad budget behind this. Word of
mouth is the only way it reaches anyone.

## One last thing worth having

There is a reading list at the end of the challenge page. Nine books, six I have read and three I
have not got to yet, and the copy says which is which.

https://zippy-hamster-ee2a9f.netlify.app/#books

If you only ever read one, read the first one.

Do not try to read them all. That just turns this into another thing you are failing at.

Thanks for giving it a month.

---
---

## Pre-publish checklist result

Run against Section 10 of `CONTENT-BIBLE.md`, 28 August 2026. All 32 emails.

**Congruence.** Passes. Traceable to beliefs 10, 12, 14, 17, 18, 19, 20, 21, 22 and 24. Nothing
invented. Every instruction, example and phrase comes from `30-DAY-CHALLENGE-COPY.md` or the
bible. The run day emails, 5 to 15 and 18 to 25, were the risk here, because eleven short emails
is where a writer starts inventing filler. They carry no new doctrine, only reminders of rules
already taught on days 3, 4 and 17.

**Congruence traps.** Checked against all 14 rows. Three worth naming. *Be more disciplined* is
handled by the shrink rule on day 8, the missed day rule on day 10, and no public streak on day
13. *Just take action, confidence follows* is not violated, because the day 22 thought swap comes
after five days of letting go and the email says why. *Affirmations* avoided throughout, day 2 is
instructions not claims and day 22 explicitly refuses the nicer lie.

**Sequence.** Let go, check the story, then act. Day 17 lets go, day 20 checks the story, day 22
adds the action and day 29 puts it into real life.

**Voice.** First person, hedged. Zero em dashes and zero en dashes, checked by search across the
file. UK spelling. Short sentences and short paragraphs. Day 17 admits it took me weeks and that I
still do not always manage it, day 9 says some of it stays boring, day 6 says the dip is coming.
No promise about any outcome or timeline, and day 0 says so outright.

**Boundaries.** The disclaimer is in the footer on all 32. Professional support framed as
alongside. Meditation safety note and the five stop signals appear in full on day 17, before the
practice rather than after it. No diagnosis, no cure language, no consciousness numbers, no muscle
testing.

**Model.** No pricing, no booking, no pitch, no funnel. "No sales pitch, ever" is in the footer.
Day 31 says there is nothing to buy and no next level, and that this is the last email. The five
doors survive intact, on days 16, 17, 26, 29 and 31, each naming the specific state the person is
likely to be in.

**Craft.** This is a sequence rather than a blog post, so the TL;DR, contents list and FAQ rows do
not apply. Links to the challenge page appear on days 0, 3, 16, 26 and 31. Signed off by Harry in
the footer with the disclaimer line.

**One thing to decide before this goes live.** The daily cadence against Section 8. See the note
at the top of this file.

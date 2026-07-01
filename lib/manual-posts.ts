export type ManualPost = {
  slug: string
  title: string
  description: string
  category: string
  publishedAt: string
  readingTime: number
  image?: string
  html: string
}

// All previous manual posts were written for the old SEO/lead-gen agency
// positioning and have been removed as part of the confidence/self-belief
// coaching rebuild. Their URLs redirect to /blog, see next.config.ts.
export const manualPosts: ManualPost[] = [
  {
    slug: '3-books-that-changed-my-life',
    title: '3 Books That Pulled Me Out of Feeling Stuck (And Changed How I See Everything)',
    description: 'Three books pulled me out of six stuck years and changed how I see everything. Here is what Letting Go, Truth vs Falsehood and Transcending the Levels of Consciousness actually taught me.',
    category: 'Personal Development',
    publishedAt: '2026-02-28',
    readingTime: 10,
    image: '/blog/lettingo.png',
    html: `
<p>Six years ago I was stuck. Low mood, going through the motions, further from myself than I realised.</p>

<p>Three books pulled me out of it. Not therapy, not a course, not a coach. Just three books, read at the right moment, that changed how I see everything.</p>

<p>Here is what they actually taught me, and how I used them.</p>

<div style="background:rgba(255,215,0,0.06);border:1px solid rgba(255,215,0,0.22);border-radius:14px;padding:24px 28px;margin:32px 0;">
  <p style="font-family:'Montserrat',sans-serif;font-size:0.68rem;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:#FFD700;margin:0 0 14px;">TL;DR</p>
  <p style="margin:0;color:rgba(255,255,255,0.82);line-height:1.85;">Before kids, I quit my job and went travelling for six months. Meditation and looking inward changed how I saw life. Then I had two kids, let the inner work go, and six years later I was stuck and low. I went back to it and found three books: <strong>Letting Go</strong>, <strong>Truth vs Falsehood</strong>, and <strong>Transcending the Levels of Consciousness</strong>. Together they taught me how to release what I was holding onto, see clearly instead of reacting, and find the exact place I was stuck so I could move one step up from there.</p>
</div>

<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:24px 28px;margin:32px 0;">
  <p style="font-family:'Montserrat',sans-serif;font-size:0.68rem;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin:0 0 14px;">In this article</p>
  <ol style="margin:0 0 0 20px;padding:0;color:rgba(255,255,255,0.65);line-height:1.85;">
    <li style="margin-bottom:8px;"><a href="#lost-myself">The six years I lost myself</a></li>
    <li style="margin-bottom:8px;"><a href="#going-back">Why I went back to the work</a></li>
    <li style="margin-bottom:8px;"><a href="#letting-go">Book 1: Letting Go, The Pathway of Surrender</a></li>
    <li style="margin-bottom:8px;"><a href="#truth-vs-falsehood">Book 2: Truth vs Falsehood</a></li>
    <li style="margin-bottom:8px;"><a href="#transcending-levels">Book 3: Transcending the Levels of Consciousness</a></li>
    <li style="margin-bottom:8px;"><a href="#where-i-am-now">Where I am now</a></li>
    <li style="margin-bottom:0;"><a href="#faq-books">Common questions about these books</a></li>
  </ol>
</div>

<h2 id="lost-myself">The Six Years I Lost Myself</h2>

<p>Before I had kids, I quit my job and went travelling for six months.</p>

<p>Somewhere in those six months, meditation and looking inward instead of outward changed how I saw everything. I came home wanting to experience life, not just live it.</p>

<p>Then I had two kids. I threw myself into being a parent. The inner work, the meditation, the yoga, all of it fell away while I focused on them.</p>

<p>About six years later, I was stuck. Low mood. Going through the motions. Further from that person I had become while travelling than I even realised.</p>

<h2 id="going-back">Why I Went Back to the Work</h2>

<p>I decided to go back to it. Back to meditation and looking inward, trying to reach a higher level of happiness, get back to enjoying life, and let go of the ego that had built back up.</p>

<p>I did not have a plan. I just knew the version of me who had looked inward once before had been happier, calmer, and more himself than the version stuck on autopilot.</p>

<p>That is when I found these three books. Not all at once. One led to the next.</p>

<h2 id="letting-go">Book 1: Letting Go, The Pathway of Surrender</h2>

<p><em>Letting Go</em> by David R. Hawkins is the book that changed my whole perspective on life.</p>

<p>The idea is simple to say and hard to do. Most of us deal with a difficult feeling in one of three ways, and none of them actually work.</p>

<p>We suppress it and push it down, where it leaks out later as tension or a short temper. We vent it and act it out, which feels like relief but actually feeds the feeling and brings it back stronger. Or we escape it, distracting ourselves with anything that is not the feeling, while it just sits there waiting.</p>

<p>The book offers a fourth option. Surrender.</p>

<p>You notice the feeling. You let it come up instead of pushing it down. You go to where you feel it in your body, not the story in your head about who did what. You let it be there, without trying to fix it or talk yourself out of it. And you stay with it until the energy behind it runs out, because it always does.</p>

<p>Underneath most stuck feelings, Hawkins says there is a want. Approval. Control. Or security. Naming which one it is, and letting go of the wanting itself, goes deeper than dealing with the surface feeling alone.</p>

<p>I used this constantly in those first months back. Not to make the low mood disappear overnight, but to stop adding to it by fighting it.</p>

<div style="background:linear-gradient(135deg,rgba(0,43,69,0.9),rgba(0,85,133,0.5));border:1.5px solid rgba(255,215,0,0.22);border-radius:16px;padding:28px 32px;margin:40px 0;text-align:center;">
  <p style="font-family:'Montserrat',sans-serif;font-size:1.05rem;font-weight:900;color:#fff;margin:0 0 10px;letter-spacing:-0.02em;">Want more of this kind of thing?</p>
  <p style="font-size:0.875rem;color:rgba(255,255,255,0.6);margin:0 0 20px;line-height:1.75;">Free weekly tips on the things these books taught me. No sales pitch, ever.</p>
  <a href="/#weekly-tips" style="display:inline-flex;align-items:center;gap:8px;background:#FFD700;color:#002B45;border-radius:9px;padding:13px 26px;font-size:0.875rem;font-weight:800;font-family:'Montserrat',sans-serif;text-decoration:none;border-bottom:none;box-shadow:0 4px 20px rgba(255,215,0,0.32);">Get Free Weekly Tips</a>
</div>

<h2 id="truth-vs-falsehood">Book 2: Truth vs Falsehood</h2>

<p>The second book put me properly back on the path of working on myself.</p>

<p><em>Truth vs Falsehood</em> is about the gap between what actually happens and the meaning we pile on top of it. Hawkins calls this essence versus appearance. Essence is what is actually true. Appearance is the story your mind adds, coloured by your mood, your history, your fears.</p>

<p>Most conflict, most overthinking, and most suffering comes from reacting to the story instead of the thing itself.</p>

<p>The book also names something called positionality. That is a fixed stance the mind clings to. I am right, they are wrong, it should not be this way. The mind would rather defend that position than be at peace.</p>

<p>Reading this, I recognised how much of my own stuckness was built from positions I was holding onto without realising it. Old grievances, opinions about how my life should look, ideas about what being a good parent meant that I had never actually questioned.</p>

<p>The test the book offers is not complicated. When you hold a thought, do you feel stronger and clearer, or smaller and tighter. That question alone has changed how I make decisions.</p>

<h3>See the Letting Go Technique in Practice</h3>

<p>This walkthrough breaks the surrender technique from the first book down into practical steps. Worth watching alongside reading it.</p>

<div style="border-radius:14px;overflow:hidden;background:#000;border:1px solid rgba(255,215,0,0.15);box-shadow:0 16px 48px rgba(0,0,0,0.4);margin:28px 0;">
  <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" src="https://www.youtube.com/embed/BkA6bpyaTIQ" title="Letting Go Technique Explained in 5 Easy Steps, David Hawkins" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>
  </div>
</div>

<h2 id="transcending-levels">Book 3: Transcending the Levels of Consciousness</h2>

<p>The third book gave me a map.</p>

<p>Hawkins lays out a ladder of states people move through. Shame and guilt sit at the bottom. Then apathy, grief, fear, desire, anger, and pride. Courage sits at the turning point, the place where life stops happening to you and you start being able to change it. Above that sits neutrality, willingness, acceptance, reason, love, and peace.</p>

<p>The point is not to label yourself or anyone else. It is to notice which state is active right now, in this moment, and aim one step up. Not the whole ladder at once. Just one rung.</p>

<p>Every level has a payoff that keeps people stuck there. Anger feels righteous. Pride feels safe. Apathy feels like protection, because if you expect nothing, you cannot be disappointed.</p>

<p>This book gave me language for what I had been circling for six years without naming it. I could finally see the state I kept landing in, and what letting go of its particular payoff would actually take.</p>

<p style="font-size:0.85rem;color:rgba(255,255,255,0.45);">One honest note: Hawkins' wider work includes muscle testing and putting exact numbers on people, books and countries. I do not use or teach that part. I use the levels only as a shared language and a direction to move in, never as a measurement of anyone.</p>

<div style="background:linear-gradient(135deg,rgba(0,43,69,0.9),rgba(0,85,133,0.5));border:1.5px solid rgba(255,215,0,0.22);border-radius:16px;padding:28px 32px;margin:40px 0;text-align:center;">
  <p style="font-family:'Montserrat',sans-serif;font-size:1.05rem;font-weight:900;color:#fff;margin:0 0 10px;letter-spacing:-0.02em;">Want to talk this through with someone?</p>
  <p style="font-size:0.875rem;color:rgba(255,255,255,0.6);margin:0 0 20px;line-height:1.75;">No sales script, just a real reply from me. Email or WhatsApp works too.</p>
  <a href="/contact" style="display:inline-flex;align-items:center;gap:8px;background:#FFD700;color:#002B45;border-radius:9px;padding:13px 26px;font-size:0.875rem;font-weight:800;font-family:'Montserrat',sans-serif;text-decoration:none;border-bottom:none;box-shadow:0 4px 20px rgba(255,215,0,0.32);">Contact Me</a>
</div>

<h2 id="where-i-am-now">Where I Am Now</h2>

<p>I am not finished. Nobody using this stuff ever really is.</p>

<p>But I am not stuck the way I was. And the more I do this work, the more I want to give instead of take.</p>

<p>That is why this site exists. Free weekly tips on the things these books taught me, a <a href="/blog">blog</a> with longer pieces when I learn something worth sharing, and a direct line if you want to talk something through. No pitch, ever. If you want the full version of how I got here, it is on my <a href="/about">about page</a>.</p>

<h2 id="faq-books">Common Questions About These Books</h2>

<div style="margin:8px 0 0;">

  <div style="border-bottom:1px solid rgba(255,255,255,0.08);padding:22px 0;">
    <p style="font-family:'Montserrat',sans-serif;font-size:1rem;font-weight:800;color:#fff;margin:0 0 10px;line-height:1.4;">What order should I read Letting Go, Truth vs Falsehood, and Transcending the Levels of Consciousness in?</p>
    <p style="color:rgba(255,255,255,0.65);line-height:1.85;margin:0;">I read them in that order and it worked for me, but they do not have to be read in sequence. Letting Go is the most practical starting point, since it gives you a technique you can use immediately. Truth vs Falsehood and Transcending the Levels of Consciousness go deeper once you have that foundation.</p>
  </div>

  <div style="border-bottom:1px solid rgba(255,255,255,0.08);padding:22px 0;">
    <p style="font-family:'Montserrat',sans-serif;font-size:1rem;font-weight:800;color:#fff;margin:0 0 10px;line-height:1.4;">Is the Letting Go technique actually simple to use?</p>
    <p style="color:rgba(255,255,255,0.65);line-height:1.85;margin:0;">The idea is simple. Doing it consistently is the hard part. It took me weeks of practice before it started to feel natural, and I still do not always manage it.</p>
  </div>

  <div style="border-bottom:1px solid rgba(255,255,255,0.08);padding:22px 0;">
    <p style="font-family:'Montserrat',sans-serif;font-size:1rem;font-weight:800;color:#fff;margin:0 0 10px;line-height:1.4;">Do these books involve muscle testing or measuring consciousness?</p>
    <p style="color:rgba(255,255,255,0.65);line-height:1.85;margin:0;">Hawkins does write about muscle testing and assigning numbers to states of consciousness in his wider work. I do not use or teach that part. I use the levels as a shared language and a direction to move in, not as a measurement.</p>
  </div>

  <div style="border-bottom:1px solid rgba(255,255,255,0.08);padding:22px 0;">
    <p style="font-family:'Montserrat',sans-serif;font-size:1rem;font-weight:800;color:#fff;margin:0 0 10px;line-height:1.4;">Are these books religious or tied to a specific faith?</p>
    <p style="color:rgba(255,255,255,0.65);line-height:1.85;margin:0;">No. They draw on spiritual ideas but do not require any particular belief system. I am not religious, and I found them useful anyway.</p>
  </div>

  <div style="border-bottom:1px solid rgba(255,255,255,0.08);padding:22px 0;">
    <p style="font-family:'Montserrat',sans-serif;font-size:1rem;font-weight:800;color:#fff;margin:0 0 10px;line-height:1.4;">Can these books help with overthinking or self-doubt specifically?</p>
    <p style="color:rgba(255,255,255,0.65);line-height:1.85;margin:0;">Yes, more than almost anything else I have read. Truth vs Falsehood is particularly useful for overthinking, since so much of it comes from defending a position rather than seeing clearly. Letting Go is the tool I use most for self-doubt.</p>
  </div>

  <div style="padding:22px 0 0;">
    <p style="font-family:'Montserrat',sans-serif;font-size:1rem;font-weight:800;color:#fff;margin:0 0 10px;line-height:1.4;">Do I need a coach or therapist to use what is in these books?</p>
    <p style="color:rgba(255,255,255,0.65);line-height:1.85;margin:0;">No, though if you are dealing with something serious, trained professional support is worth having alongside this, not instead of it. I am not a trained coach or counsellor myself, just someone sharing what helped. You can read more about that on my <a href="/about" style="color:#FFD700;">about page</a>, or <a href="/contact" style="color:#FFD700;">get in touch</a> if you want to talk it through.</p>
  </div>

</div>

<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:24px 28px;margin:40px 0 0;">
  <p style="font-family:'Montserrat',sans-serif;font-size:0.88rem;font-weight:800;color:#fff;margin:0 0 6px;">Written by Harry</p>
  <p style="font-size:0.82rem;color:rgba(255,255,255,0.45);margin:0;line-height:1.7;">Not a trained life coach or counsellor, just sharing what has helped me on my own journey. For more free guides on confidence, self-belief and letting go, <a href="/blog">visit the blog</a>. To read the full story, see the <a href="/about">about page</a>.</p>
</div>
`,
  },
]

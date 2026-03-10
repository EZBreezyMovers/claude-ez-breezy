---
name: antislop-workshop
description: "Strip AI writing patterns from any content so it reads like a human wrote it. Use when editing AI-generated drafts, cleaning up copy that sounds robotic, or checking content before publishing. Triggers on: clean this up, de-slop this, make this sound human, remove AI patterns, does this sound like AI, edit for slop, humanize this, check this for AI patterns. Runs 5 editing passes (structure, phrases, verbs, formatting, content) and outputs cleaned version with a changelog."
---

# Anti-Slop

People can spot AI writing in about two seconds. Not because they're experts — because the patterns are that predictable. Same sentence structures, same filler phrases, same fake enthusiasm. Every AI tool produces the same voice.

This skill runs content through 5 editing passes that catch every common AI pattern and replace them with something a human would actually write. Not just "don't do X" — specific fixes for each problem.

---

## the core job

Take any AI-generated or AI-assisted content and **strip the patterns that make it sound robotic.**

**Output:** Cleaned version of the content + a summary of changes grouped by category.

---

## before starting: gather context

**STOP. Do not edit anything until you have the content and know the context. Ask for any missing fields before proceeding.**

1. **The content** — What are you cleaning? (paste it or point to a file)
2. **The tone** — What voice are you going for? (casual, professional, technical, conversational)
3. **The format** — What type of content is this? (email, social post, landing page, article, newsletter)

The tone matters because some fixes depend on context. An em dash in a casual LinkedIn post is different from one in a technical doc.

---

## the process

Run content through these 5 passes in order. Each pass catches a different category of AI pattern.

```
STRUCTURE → PHRASES → VERBS → FORMATTING → CONTENT
```

Don't try to fix everything at once. One pass at a time.

---

## Pass 1: Structure

AI defaults to a handful of sentence structures and repeats them constantly. This pass catches the structural patterns.

### Binary opposites
AI loves "it's not X, it's Y" because it sounds profound without saying anything.

**Scan for:**
- "It's not about X, it's about Y"
- "Success isn't X, it's Y"
- "The goal isn't X — it's Y"
- Any sentence that sets up a false dichotomy

**Before:**
> "Content marketing isn't about creating more content. It's about creating the right content."

**After:**
> "Most content marketing fails because people publish what's easy to make instead of what their audience actually searches for."

**The fix:** Say what you actually mean. Drop the false contrast and make a specific claim instead.

---

### Forced threes
AI thinks listing three things makes any point stronger. It creates a predictable rhythm that screams "generated."

**Scan for:**
- "Fast, efficient, and reliable"
- "Boost engagement, increase conversions, and maximize ROI"
- Any adjective or benefit triplet
- Three parallel bullet points that could be two or four

**Before:**
> "Our platform is fast, intuitive, and powerful."

**After:**
> "Our platform loads in under 2 seconds. Most users skip the tutorial because they don't need it."

**The fix:** Use two items. Or four. Or one with proof. Break the three-beat pattern.

---

### Infomercial questions
These transitions sound like a late-night TV ad. They create fake tension before delivering information that could just be stated.

**Scan for:**
- "The best part?"
- "The catch?"
- "Want to know the secret?"
- "Here's the kicker"
- "Ready to level up?"
- "Sound familiar?"
- "Guess what?"
- Any short rhetorical question used as a transition

**Before:**
> "We tested 47 different subject lines last quarter. Want to know what we found? The highest-performing emails all had one thing in common."

**After:**
> "We tested 47 subject lines last quarter. The highest-performing ones all did the same thing: they stated a specific number in the first three words."

**The fix:** Delete the question. Connect the setup directly to the payoff.

---

### "No X. No Y. Just Z."
AI's favorite opening line. Instant tell.

**Scan for:**
- "No fluff. No theory. Just actionable insights."
- "No gimmicks. No shortcuts. Just results."
- Any triple starting with two negatives and ending with "just"

**Before:**
> "No complicated frameworks. No expensive tools. Just a simple system that works."

**After:**
> "This system uses one spreadsheet and takes 20 minutes to set up."

**The fix:** Skip the theatrical negation. State what it IS, with specifics.

---

## Pass 2: Phrases

AI relies on a predictable set of filler phrases. They add nothing. Readers' eyes slide right past them — or worse, they recognize the pattern and stop trusting the content.

### Robot phrases (immediate delete)

These phrases appear in virtually all AI output. Remove on sight and don't replace — the sentence is stronger without them.

| Phrase | Why it's a problem |
|--------|-------------------|
| "Game-changer" | Means nothing. Everything is a "game-changer" to AI. |
| "Revolutionize" | Almost nothing is revolutionary. Use a specific result instead. |
| "Supercharge" | Marketing buzzword. Describe the actual improvement. |
| "Level up" | Gaming metaphor that's been used to death. |
| "Unlock your potential" | Self-help cliche. What potential? Be specific. |
| "Deep dive" | Just say "detailed look" or "analysis." |
| "Actionable insights" | Insights are supposed to be actionable. That's what makes them insights. |
| "At the end of the day" | Filler. Delete and start with whatever comes next. |
| "In today's fast-paced world" | The world has always been fast-paced. This adds zero context. |
| "Move the needle" | Say what actually moved and by how much. |
| "Low-hanging fruit" | Say what the easy win actually is. |
| "Synergy" | Nobody talks like this. Say "works well together." |
| "Leverage" (as a verb) | Just say "use." |
| "[Thing] on steroids" | Dated metaphor. Describe the actual difference. |

**Before:**
> "This framework is a game-changer. It lets you leverage AI to supercharge your content and unlock your team's potential."

**After:**
> "This framework cut our content production time from 3 days to 4 hours. Same quality, fewer people involved."

---

### Throat-clearing hedges
AI can't commit to a statement, so it wraps every point in qualifiers.

**Scan for:**
- "It's worth noting that..."
- "It's important to remember that..."
- "You might want to consider..."
- "It goes without saying that..."
- "Needless to say..."
- "Interestingly enough..."

**Before:**
> "It's worth noting that email open rates have declined over the past two years. This is something you might want to consider when planning your Q3 strategy."

**After:**
> "Email open rates dropped 12% in the last two years. Your Q3 strategy needs to account for that."

**The fix:** Delete the hedge. Start with the actual point. The sentence is always stronger without the warm-up.

---

### Thesaurus syndrome
AI replaces simple words with fancy ones to sound smarter. It has the opposite effect.

| AI writes | Human writes |
|-----------|-------------|
| Utilize | Use |
| Execute | Do, run |
| Facilitate | Help |
| Implement | Start, build |
| Optimize | Improve |
| Leverage | Use |
| Commence | Start |
| Endeavor | Try |
| Ascertain | Find out |
| Comprehensive | Full, complete |

**Before:**
> "We endeavored to implement a comprehensive solution that would facilitate better communication and optimize team productivity."

**After:**
> "We built a tool that helps teams talk to each other. Productivity went up 15%."

**The fix:** Use the word you'd say out loud. Nobody says "endeavored" in conversation.

---

### Melodramatic realizations
AI turns every small observation into a life-altering moment.

**Scan for:**
- "That's when everything changed"
- "Something shifted in that moment"
- "This stopped me in my tracks"
- "I'll never forget what happened next"
- "And then it hit me"

**Before:**
> "Yesterday my colleague shared something that completely stopped me in my tracks. She said: 'What if we just asked our customers what they want?' That's when everything changed."

**After:**
> "My colleague suggested we survey our customers directly. We did. Three of the top five requests were features we'd already deprioritized."

**The fix:** Describe what actually happened and what resulted. Skip the cinematic buildup.

---

### "Enter: [Thing]"
AI introduces solutions like a character walking onstage.

**Scan for:**
- "Enter: [product/framework/concept]"
- "Enter: the solution"

**Before:**
> "Marketers needed a better way to write copy. Enter: AI-powered writing tools."

**After:**
> "AI writing tools started showing up in marketing teams around 2022."

**The fix:** Introduce things normally. No theatrical announcements.

---

### "If you're serious about..."
Every AI-generated call to action uses this template.

**Scan for:**
- "If you're serious about [topic]..."
- "If you're ready to [outcome]..."

**Before:**
> "If you're serious about growing your business, you need to implement this strategy today."

**After:**
> "Here's the strategy. It takes about an hour to set up. Start with step 1 and see if the numbers move in a week."

**The fix:** Drop the conditional. Give them the specific next action.

---

### "To your success"
This email sign-off immediately reveals AI authorship.

**Scan for:**
- "To your success,"
- "Here's to your journey,"
- "Wishing you the best on your path to..."

**The fix:** Sign off like a person. "Cheers," "Talk soon," or just your name.

---

### "Not because of X. But because of Y."
AI attempts profundity by stating the obvious in a dramatic structure.

**Scan for:**
- "I didn't succeed because of luck. But because of hard work."
- "Not because it's easy. But because it's worth it."
- Any sentence that splits a simple cause into a dramatic two-part reveal

**Before:**
> "I didn't grow my audience because of some secret algorithm hack. But because I showed up every single day."

**After:**
> "I posted every day for 8 months. That's what grew the audience. No trick to it."

**The fix:** If the reason is obvious, just state it. The dramatic "not X, but Y" structure adds fake depth to a simple point.

---

## Pass 3: Verbs

AI has a verb problem. It overuses -ing forms, defaults to passive voice, and picks corporate verbs that drain every sentence.

### -ing overuse
-ing forms are weaker, less direct, and a major AI tell. They bury the subject.

**Scan for:**
- Sentences starting with -ing ("Running a business...")
- -ing used where a simple past/present tense works
- Multiple -ing forms in the same sentence
- More than 2 -ing forms per paragraph

**Before:**
> "Running a business while building an audience is challenging. Creating content consistently means prioritizing your time and focusing on what matters."

**After:**
> "I run a business and build an audience at the same time. It's hard. I create content every week because I've learned that consistency matters more than quality."

**The fix:** Replace -ing with direct verb forms. Put the actor first: "I did X" not "Doing X, I..."

---

### Passive voice
AI defaults to passive because it avoids naming who does what.

**Scan for:**
- "was created" / "is designed" / "has been shown"
- "It was discovered that..."
- "The results were analyzed"
- Any sentence where the subject receives the action instead of performing it

**Before:**
> "The strategy was developed by our team and has been implemented across all departments. Results were seen within the first quarter."

**After:**
> "Our team developed the strategy and rolled it out to every department. We saw results in the first quarter."

**The fix:** Name the actor. "We did X" is always stronger than "X was done."

---

### Corporate zombie verbs
These verbs sound like they came from a quarterly earnings call.

**Scan for:**
- "Highlighting the benefits"
- "Emphasizing the importance"
- "Facilitating better outcomes"
- "Driving engagement"
- "Enabling teams to..."
- "Empowering users to..."

**Before:**
> "This tool empowers teams to drive engagement by enabling seamless collaboration and facilitating real-time communication."

**After:**
> "Teams use this tool to work together in real time. They respond faster and close more deals."

**The fix:** Replace with normal verbs. Show instead of "highlighting." Help instead of "facilitating." Use instead of "leveraging."

---

## Pass 4: Formatting

AI has formatting habits that are instantly recognizable.

### Arrow spam
AI discovered the arrow symbol and won't stop using it.

**Scan for:**
- → used as bullet points
- Multiple arrows in the same section
- Arrows as transitions between ideas

**Before:**
> "Here's what you get:
> → 10x faster content creation
> → Unlimited templates
> → Priority support"

**After:**
> "Here's what you get:
> - Content creation that's 10x faster (we timed it)
> - All templates included
> - Priority support with 2-hour response time"

**The fix:** One arrow per post max. Usually zero. Use regular bullets or dashes.

---

### Emoji confetti
AI throws emojis at everything to seem friendly.

**Scan for:**
- Emojis at the start of bullet points
- Multiple emojis per paragraph
- Emojis replacing punctuation
- Rocket ships, lightbulbs, fire, and pointing fingers

**Before:**
> "🚀 Launch your business today!
> 💡 Discover new strategies
> 🔥 Get results that matter
> 👉 Click here to start"

**After:**
> "Launch your business this week. We'll show you the strategy that got 3 of our clients to $10k/month in 90 days. Link below."

**The fix:** Zero emojis in professional content. One per section max in casual content. Never as bullet points.

---

### Em dash addiction
AI uses em dashes when commas, periods, or colons would work fine.

**Scan for:**
- More than one em dash per paragraph
- Em dashes used as commas
- Em dashes used to create dramatic pauses

**Before:**
> "The results were clear — our team had finally cracked the code — and the data backed it up — every single metric improved."

**After:**
> "The results were clear. Our team had cracked the code, and every metric improved."

**The fix:** Commas work. Periods work. Colons work. Use those. One em dash per paragraph max.

---

### Over-bolding
AI bolds every other phrase because it thinks emphasis = importance.

**Scan for:**
- Multiple bold phrases per paragraph
- Bold used on generic words ("**important**", "**key**", "**crucial**")
- Bold as a substitute for good writing

**The fix:** Bold sparingly. If everything is emphasized, nothing is.

---

## Pass 5: Content

AI patterns in what the content says, not just how it says it.

### Generic claims
AI makes big claims with no specifics because it has no real data.

**Scan for:**
- "Significant improvement"
- "Dramatically increased"
- "Many companies have found..."
- Any claim without a number, name, or date

**Before:**
> "Many businesses have seen significant improvements in their marketing performance after implementing this strategy."

**After:**
> "We used this strategy for 6 months. Email signups went from 12/day to 47/day. Revenue from email grew 340%."

**The fix:** Add a number, a name, a date, or a specific example. If you can't, the claim probably isn't worth making.

---

### Fake case studies
When AI needs proof, it invents a person. Usually named something like Sarah Chen or Marcus Johnson.

**Scan for:**
- Generic names with no context
- Perfectly clean success stories with no friction
- "One company found..." without naming the company
- Round numbers that feel made up

**Before:**
> "Take Sarah, a marketing manager at a mid-size SaaS company. After implementing our framework, her team's productivity increased by 300% and they doubled their revenue in just 3 months."

**After:** Either use a real example with real details, or reframe: "Teams that adopt this framework typically see results within the first month — we've tracked this across 14 implementations."

**The fix:** Use real examples. If you don't have them, say "in our experience" or "we've seen" instead of inventing people.

---

### Symbolism overdose
AI explains what things "represent" and "symbolize" instead of saying what happened.

**Scan for:**
- "This symbolizes..."
- "Which reflects..."
- "Emphasizing the importance of..."
- "This speaks to the broader trend of..."
- "Underscoring the need for..."

**Before:**
> "The shift to remote work symbolizes a broader transformation in how we think about productivity, underscoring the importance of flexibility and reflecting a fundamental change in workplace values."

**After:**
> "Remote work proved that most meetings could be emails. Companies that figured that out first kept their best people."

**The fix:** Say what happened. Say what you learned. Skip the literary analysis.

---

### Authenticity theater
AI claims to be real, authentic, or transparent — usually multiple times in the same paragraph.

**Scan for:**
- "Real strategies for real results"
- "Authentic" used more than once
- "Transparent" as a selling point
- "No BS" followed by BS

**Before:**
> "We believe in real, authentic strategies that deliver real results. No fluff — just transparent, honest approaches that actually work."

**After:**
> "Here's the strategy. It worked for us. Here are the numbers."

**The fix:** Don't claim authenticity. Demonstrate it with specific details and real results.

---

### Universal transformation claims
AI wraps every result in hyperbole.

**Scan for:**
- "The strategy that changed everything"
- "This one shift transformed my entire business"
- "Completely revolutionized how I..."

**Before:**
> "This one simple shift completely transformed how I think about marketing and changed everything about my approach to content creation."

**After:**
> "I switched from posting daily to posting twice a week with better research. Traffic went up 40% and I got my evenings back."

**The fix:** Describe the specific change with actual metrics. Skip the "changed everything" wrapper.

---

## output format

Deliver two things:

### 1. The cleaned content
The full rewritten version, ready to use.

### 2. The changelog
A summary of what was fixed, grouped by pass:

```
## Changes Made

**Structure (X fixes)**
- [What was changed and why]

**Phrases (X fixes)**
- [What was changed and why]

**Verbs (X fixes)**
- [What was changed and why]

**Formatting (X fixes)**
- [What was changed and why]

**Content (X fixes)**
- [What was changed and why]

**Total: X changes across 5 passes**
```

---

## example: cleaning a sloppy AI LinkedIn post

### Original (AI-generated)

> **Want to know the secret to 10x-ing your productivity? 🚀**
>
> In today's fast-paced world, it's not about working harder — it's about working smarter. I recently discovered a game-changing framework that completely revolutionized how I approach my day.
>
> Here's the kicker: it only takes 15 minutes.
>
> The framework focuses on three key principles:
> → Prioritizing high-impact tasks
> → Eliminating unnecessary meetings
> → Leveraging AI tools for automation
>
> Implementing this system has been a total game-changer. It's worth noting that the results speak for themselves — my team's productivity increased significantly, and we've been able to facilitate better collaboration across departments.
>
> If you're serious about leveling up your productivity, this is the deep dive you need.
>
> Ready to supercharge your workflow? Drop a 🔥 in the comments!

### After 5 passes

> **15 minutes changed how my team works**
>
> Last month I tracked where my time went for a full week. 11 hours in meetings. 6 hours on email. About 3 hours on work that actually moved projects forward.
>
> So I tried something: I blocked the first 90 minutes of every day for focused work. No Slack, no meetings, no email. Just the one task that matters most.
>
> After 4 weeks:
> - Meeting time dropped from 11 hours to 6 (I declined anything without an agenda)
> - The team started doing the same thing without me asking
> - We shipped two features that had been stuck for months
>
> I also started using AI to draft routine communications. Status updates, meeting summaries, first-pass project plans. Saves me about 45 minutes a day.
>
> The setup takes 15 minutes: block your calendar, pick your one priority, turn off notifications. That's it.

### Changelog

**Structure (2 fixes)**
- Removed binary opposite ("not about working harder, it's about working smarter")
- Removed forced three-point list, replaced with specific results

**Phrases (6 fixes)**
- Removed "Want to know the secret" (infomercial question)
- Removed "game-changing" and "game-changer" (2x)
- Removed "revolutionized", "it's worth noting", "here's the kicker"
- Removed "deep dive", "supercharge", "leveling up"

**Verbs (2 fixes)**
- "Implementing this system has been" → specific past tense actions
- "facilitate better collaboration" → "team started doing the same thing"

**Formatting (3 fixes)**
- Removed emoji from headline and CTA
- Replaced arrow bullets with standard dashes
- Removed over-bolding

**Content (2 fixes)**
- "Productivity increased significantly" → specific numbers (11hrs to 6hrs, 2 features shipped)
- Generic framework → specific actions with timeline

**Total: 15 changes across 5 passes**

---

## the banned list

Quick reference — if any of these appear in the content, they failed a pass.

Game-changer, revolutionize, supercharge, level up, unlock your potential, the secret is, here's the thing, the catch?, want to know?, it's worth noting, at the end of the day, in today's fast-paced world, to your success, if you're serious about, no fluff/no X/just Y, enter: [thing], this changed everything, [thing] on steroids, actionable insights, deep dive, unpack, circle back, move the needle, low-hanging fruit, synergy, leverage (as verb), comprehensive solution, facilitate, empower, enable, drive engagement.

---

## how this connects to other skills

**anti-slop works with:**
- **direct-response-copy** — run anti-slop after writing copy to catch patterns that slipped through
- **content-atomizer** — clean each platform version separately (different patterns emerge at different lengths)
- **email-sequences** — check each email in a sequence for repetitive AI patterns
- **newsletter** — final editing pass before publishing
- **seo-content** — SEO content is especially prone to slop because it targets keywords

**The workflow:**
1. Write content with any skill
2. Run anti-slop as a final editing pass
3. Review the changelog to learn which patterns you repeat

---

## the test

Clean content passes all 6 checks:

1. **The read-aloud test** — Read every sentence out loud. If it sounds like "writing" instead of talking, rewrite it.
2. **The anyone test** — Could this sentence appear in anyone's content? If yes, it's generic. Make it specific.
3. **The -ing count** — More than 2 -ing forms per paragraph is a red flag. Fix them.
4. **The banned phrase test** — Zero phrases from the banned list. No exceptions.
5. **The specificity test** — Every claim has a number, name, date, or real example behind it.
6. **The rhythm test** — Sentence lengths vary. Not every sentence is the same beat. Short ones. Then a longer one that takes its time. Then short again.

If someone reads the content and thinks "AI wrote this" — it failed.

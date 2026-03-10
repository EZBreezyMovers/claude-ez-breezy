---
name: skillcreator-interview-workshop
description: "Build a skill file through a guided interview. Walks you through 8 steps one at a time, asking questions to extract your methodology, frameworks, and examples. Use when you want to build a skill from scratch based on your own expertise (not from existing content). Triggers on: interview me to build a skill, help me create a skill from scratch, walk me through building a skill, I want to build a custom skill. Outputs a complete .md skill file saved to ~/.claude/commands/."
---

# Skill Creator (Interview Mode)

Most skills fail because they read like Wikipedia articles. They explain what something IS instead of telling Claude how to DO it.

A good skill captures methodology — the actual process an expert follows, with the frameworks, templates, and judgment calls that make the output specialist-level. Not generic instructions. Not "here's some background on X."

This skill walks you through 8 steps, asking the right questions at each stage to pull the methodology out of your head and package it into a skill file that works every time.

---

## the core job

Turn your expertise into a **complete skill file** through a guided interview.

Walk through 8 steps in order. At each step, ask the user specific questions, then use their answers to build that section of the skill file. Don't skip ahead. Don't infer answers. Ask.

**Output:** A `.md` skill file saved to `~/.claude/commands/[skill-name].md`

---

## the process

```
SCOPE → EXTRACT → INPUTS → BUILD → FORMAT → PROVE → CHECK → POLISH
```

Work through these 8 steps in order. Each step gathers specific information from the user and produces a specific section of the skill.

**IMPORTANT: Ask one step's questions at a time. Wait for answers before moving to the next step. Do NOT ask all questions at once.**

---

## Step 1: Scope the skill

Figure out the job, the triggers, and the deliverable.

**Ask the user:**

| Question | What you're looking for |
|----------|------------------------|
| What's the one job this skill does? | A specific scope — not "helps with marketing" but "finds positioning angles for products" |
| When should it activate? What would someone say? | Trigger phrases for the frontmatter |
| What does the final output look like? | Format, length, structure of the deliverable |
| Who will use this? What's their expertise level? | Sets tone and detail depth |

**What this produces:** The frontmatter and the core job section.

**Frontmatter rules:**
The `description` field is the ONLY thing Claude reads to decide whether to load the skill. It must include:
- What the skill does (1 sentence)
- When to use it (specific situations)
- Trigger phrases (what the user would say)
- What it outputs

Don't put "when to use" info in the body — the body only loads AFTER the skill triggers. If the triggers are only in the body, Claude never sees them.

---

## Step 2: Extract the methodology

This is where most skills fail. Generic process = generic output.

**Ask the user:**

| Question | What you're looking for |
|----------|------------------------|
| Walk me through how YOU do this, step by step | The actual process in order |
| Do you have named methods, scoring systems, or frameworks? | Repeatable tools at each step |
| Where do you use judgment? What guides those decisions? | Decision points that need explicit criteria |
| What are the common mistakes? | Anti-patterns and guardrails |

**How to dig deeper:** Most people describe their process at a high level first. The frameworks live one layer down.

- User says: "First I research the competition"
- You ask: "How exactly? What do you look for?"
- User reveals: "I map 5 alternatives — do nothing, DIY, hire someone, different category, direct competitor — then find the weakness of each"

That second answer is the framework. The first was just the label. Keep asking "how do you actually do that?" until you hit the repeatable structure.

**What this produces:** The process overview and step list.

---

## Step 3: Define the inputs

Every skill needs specific info from the user before it can produce good output. Without these, it guesses.

**Ask the user:**

| Question | What you're looking for |
|----------|------------------------|
| What do you absolutely need to know before starting? | Must-have inputs |
| What happens if you don't have each input? | Validates whether each is actually necessary |
| Anything nice-to-have that improves the output? | Secondary inputs worth asking for |

**What this produces:** The "before starting: gather context" section.

**Rules:**
- 4-6 questions max (don't overwhelm)
- Each question maps to a decision the skill makes later
- Be specific: "What's the price point?" not "Tell me about your business"
- Include why each matters — in parentheses after the question

**Critical: always add a hard gate.** The context section MUST begin with a STOP instruction that prevents Claude from skipping ahead. Without it, Claude will infer the answers and jump straight to output. The gate should read something like:

> **STOP. Do not produce any output until all context fields below are confirmed with the user. Ask for any missing fields before proceeding.**

Skills without this gate will be ignored by Claude when it thinks it has enough context. It always thinks it has enough context. It doesn't.

---

## Step 4: Build each process step

Write the detailed instructions for every step in the methodology. This is the meat of the skill.

**For each step, gather from the user:**

| Element | What to ask | Why it matters |
|---------|-------------|----------------|
| **Instruction** | "What happens in this step?" | Tells Claude what to do |
| **Framework** | "Is there a formula, matrix, or set of categories you always use?" | Tells Claude HOW to do it |
| **Example** | "Show me what this step produces on a real project" | Shows Claude what good looks like |
| **Anti-pattern** | "What's the most common mistake here?" | Keeps Claude from going off track |

If a step only has the instruction without the framework, Claude will improvise. That's the #1 reason skills produce generic output.

**What this produces:** The complete process sections.

**Template for each step:**
```markdown
## [Verb]: [Step name]

[1-2 sentences: what this step does and why]

[Framework — the repeatable structure, categories, formula, or matrix]

> Example: [This step applied to a real scenario]

[What to avoid at this step]
```

---

## Step 5: Create the output template

Show Claude exactly what the deliverable looks like. Claude follows templates literally.

**Ask the user:**

| Question | What you're looking for |
|----------|------------------------|
| What sections should the final output have? | Structure of the deliverable |
| Are there fill-in-the-blank structures you reuse? | Templates with placeholders |
| How strict is the format? | Rigid template vs flexible guide |

**What this produces:** The output format section with placeholders.

---

## Step 6: Write the worked example

This is the most important section in the entire skill. It's what Claude pattern-matches against. A weak example produces weak output every time.

**Ask the user:**

| Question | What you're looking for |
|----------|------------------------|
| Give me a real scenario we can use | A realistic use case (not trivial) |
| Walk through the full output for this scenario | Every section of the deliverable, filled in |

**What this produces:** The example section — a complete run of the skill from context through each step to final output.

**Rules:**
- Use a realistic scenario, not a toy example
- Show EVERY section of the output filled in with real content
- If the skill produces 5 angles, show all 5 with real copy
- If the skill produces a 7-email sequence, show all 7 emails written out
- Don't summarize. Show the actual output. This section can be long — it's doing the heavy lifting.

---

## Step 7: Set the quality bar

Give Claude specific criteria to self-check before delivering.

**Ask the user:**

| Question | What you're looking for |
|----------|------------------------|
| How do you know when the output is good vs bad? | Specific quality markers |
| What would make you reject an output? | Failure conditions |
| Does this skill connect to other skills? Which ones? | Workflow context |

**What this produces:** "the test" section + "how this connects to other skills" section.

**Rules for quality checks:**
- 5-7 specific checks
- Bad: "Is it high quality?"
- Good: "Does every angle include a one-sentence positioning, the psychology, a headline direction, and conditions where it works best?"
- End with a failure condition: "If [bad thing] — it failed."

---

## Step 8: Polish and package

### Write the intro
Now that you know what the skill does, write the opinionated intro. 2-3 sentences.

Don't say "This skill helps with X." Say what's wrong with how most people do this thing.

**Bad:** "This skill creates email sequences for marketing."
**Good:** "Most lead magnets die in the inbox. Someone downloads your thing, gets one 'here's your download' email, and never hears from you again."

### Check the size
- Under 500 lines? Ship it.
- Over 500? Move detailed content to `references/`:
  - Extensive frameworks → `references/frameworks.md`
  - Long worked examples → `references/examples.md`
  - Deep domain knowledge → `references/domain.md`

When splitting, the skill file must link to each reference file. Unlinked reference files are dead weight — Claude won't know they exist.

### Save the file

Save to `~/.claude/commands/[skill-name].md`

Tell the user:
- The file has been saved
- They can now call it with `/[skill-name]`
- Give a one-line summary of what the skill does

### Don't include
- README.md, CHANGELOG.md, or meta-docs
- Setup/installation instructions
- Anything Claude already knows

---

## the test

A well-built skill:

1. **Has an opinionated intro** — Takes a stance, not "This skill does X"
2. **Gathers context before starting** — Specific questions, not "tell me about your business"
3. **Follows a named process** — Clear steps with clear names
4. **Includes frameworks at each step** — Not just "do research" but HOW to research (formula, matrix, template)
5. **Shows the output template** — Claude knows exactly what structure to produce
6. **Has a complete worked example** — Full output with real content, not a summary
7. **Defines quality criteria** — Specific checks with concrete pass/fail conditions
8. **Stays under 500 lines** — Uses references for overflow

If the skill produces generic output that any ChatGPT prompt could generate — it failed. The skill should produce specialist-level output because it carries specialist-level methodology.

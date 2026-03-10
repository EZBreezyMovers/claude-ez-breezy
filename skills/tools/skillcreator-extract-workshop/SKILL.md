---
name: skillcreator-extract-workshop
description: "Automatically extract a framework or process from pasted content and turn it into a callable skill file. Use when someone pastes a transcript, article, blog post, course notes, or any content that contains a repeatable method. Triggers on: turn this into a skill, extract a skill from this, make this a reusable skill, build a skill from this content. Outputs a complete .md skill file saved to ~/.claude/commands/ that the user can call as a slash command."
---

# Skill Extractor

You pasted content. You want a skill file out the other end. No interview, no back-and-forth. Just read, extract, build.

Most people try to turn their knowledge into skills by writing instructions from scratch. That takes forever and you forget half of what matters. The faster path: take something you already created (a talk, a post, course notes, a framework doc) and let Claude pull the methodology out of it.

---

## the core job

Read pasted content (transcript, article, framework, notes) and produce a **complete, callable skill file** saved to `~/.claude/commands/`.

The skill file must:
- Follow proper frontmatter + body structure
- Be callable as a slash command immediately after saving
- Contain the actual methodology from the content (not a summary)
- Include a worked example so Claude knows what good output looks like

**Output:** A `.md` skill file saved to `~/.claude/commands/[skill-name].md`

---

## before starting: gather context

**STOP. Do not produce any output until the user has pasted their content. If they haven't pasted anything yet, ask them to paste it now.**

You need exactly two things:

1. **The content** — pasted text (transcript, article, framework, notes, etc.)
2. **The skill name** — what they want to call it (if not provided, infer from the content and confirm with the user)

That's it. Everything else gets extracted from the content itself.

---

## the process

```
READ → IDENTIFY → STRUCTURE → BUILD → SAVE
```

---

## Step 1: Read and identify the core methodology

Read the pasted content and find:

1. **The one job** — What does this methodology produce? What problem does it solve?
2. **The process steps** — What's the sequence? Most content has 3-7 steps buried in it.
3. **The frameworks** — Named methods, categories, formulas, scoring systems, templates. These are the parts that make the output specific instead of generic.
4. **The anti-patterns** — What does the content warn against? What mistakes does it call out?
5. **The examples** — Any real scenarios, case studies, or sample outputs shown.

**How to find frameworks:** They hide behind labels. If the content says "research your competitors" that's a label. If it says "map 5 alternatives: do nothing, DIY, hire someone, different category, direct competitor" that's a framework. Always extract the framework, not the label.

**If the content is thin on frameworks:** Infer the most logical framework from context. Flag it in a comment so the user knows which parts you inferred vs. extracted.

---

## Step 2: Structure into skill sections

Map what you found to the skill file structure:

| What you found | Where it goes |
|----------------|---------------|
| The one job | `## the core job` |
| What the user needs to provide when running the skill | `## before starting: gather context` (4-6 questions max) |
| The process steps in order | Individual `## [verb]: [step name]` sections |
| Frameworks/templates/formulas | Inside each step section |
| Anti-patterns/warnings | Inside each step section |
| Examples/case studies | `## example:` section |
| Quality markers mentioned | `## the test` section |

---

## Step 3: Build the skill file

Write the complete skill file using this structure:

```markdown
---
name: [skill-name]
description: "[What it does. When to use it. What trigger phrases would activate it. What it outputs.]"
---

# [Skill Name]

[Opinionated intro — 2-3 sentences. Take a position on what's wrong with the status quo. Not "This skill helps with X."]

---

## the core job

[What the skill produces. Be specific about format and structure.]

**Output format:** [Describe the deliverable]

---

## before starting: gather context

**STOP. Do not produce any output until all context fields below are confirmed with the user. Ask for any missing fields before proceeding.**

1. **[Input]** — [Question] ([why it matters])
2. **[Input]** — [Question] ([why it matters])
3. **[Input]** — [Question] ([why it matters])
4. **[Input]** — [Question] ([why it matters])

---

## [verb]: [step name]

[What this step does and why — 1-2 sentences]

[Framework — the repeatable structure, categories, formula, or matrix extracted from the content]

> Example: [This step applied to a scenario from the content, or a realistic one if none provided]

[What to avoid at this step]

---

[Continue for all steps]

---

## output format

[Template with placeholders showing the exact structure of what the skill produces]

---

## example: [realistic scenario]

[Complete worked example showing the full output. Every section filled in with real content. Not a summary.]

---

## the test

A good [output type]:

1. **[Check]** — [Specific criteria]
2. **[Check]** — [Specific criteria]
3. **[Check]** — [Specific criteria]
4. **[Check]** — [Specific criteria]
5. **[Check]** — [Specific criteria]

If [failure condition] — it failed.
```

**Critical rules when building:**

1. **The description field decides everything.** It's the only thing Claude reads to decide whether to load the skill. Include: what it does, when to use it, trigger phrases, what it outputs.
2. **The context section needs a hard gate.** Start with STOP. Without it, Claude skips the questions and guesses.
3. **Every step needs a framework, not just an instruction.** "Research competitors" is an instruction. "Map 5 alternatives: do nothing, DIY, hire someone, different category, direct competitor" is a framework. Extract the framework.
4. **The worked example does the heavy lifting.** Show the full output for a real scenario. Don't summarize. Claude pattern-matches against this example every time it runs the skill.
5. **The intro should be opinionated.** Say what's wrong with how most people do this thing. Not "This skill helps with X."

---

## Step 4: Save the file

Save the completed skill file to: `~/.claude/commands/[skill-name].md`

Tell the user:
- The file has been saved
- They can now call it with `/[skill-name]`
- Give a one-line summary of what the skill does
- Flag any sections where you inferred frameworks instead of extracting them directly

---

## quality checks before saving

Before saving, verify:

1. **Frontmatter has name + description** — Description includes triggers and output type
2. **Context section has the STOP gate** — Prevents Claude from skipping questions
3. **Every step has a framework** — Not just "do research" but HOW to research
4. **Worked example is complete** — Full output, not a summary
5. **Under 500 lines** — If over, split frameworks into a references/ folder and link them
6. **The skill is callable** — Name matches the filename, no broken references

If the source content was too thin to build a complete skill (no clear process, no frameworks), tell the user what's missing and suggest they run `/skillcreator-interview-workshop` instead to build it interactively.

---

## the test

A good extracted skill:

1. **Captures the actual methodology** — Not a summary of the content, but the repeatable process
2. **Has frameworks at every step** — Specific structures, not generic instructions
3. **Includes a complete worked example** — Full output that Claude can pattern-match against
4. **Is immediately callable** — Saved to the right location with correct frontmatter
5. **Flags inferred sections** — User knows what was extracted vs. what was filled in

If the skill produces generic output that ignores the source material's specific methodology — it failed.

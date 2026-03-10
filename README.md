# Claude EZ Breezy — Skill Library

A curated collection of Claude skills for content creation, marketing, research, and development.

## Structure

```
skills/
├── content-creation/   — Writing, editing, and content production
├── marketing/          — Offers, copy, email, and conversion assets
├── research/           — Interviews, keyword research, ideation
└── tools/              — Development and skill-building utilities
```

---

## Skills Index

### Content Creation

| Skill | Description |
|-------|-------------|
| [newsletter-workshop](skills/content-creation/newsletter-workshop/SKILL.md) | Write magnetic newsletters using an 8-step process with 10 angles |
| [longformtweets-workshop](skills/content-creation/longformtweets-workshop/SKILL.md) | Craft viral long-form tweets (500–3000 chars) across 9 structural patterns |
| [repurpose-workshop](skills/content-creation/repurpose-workshop/SKILL.md) | Repurpose content across channels with format-specific guidelines |
| [editing-workshop](skills/content-creation/editing-workshop/SKILL.md) | Edit for clarity, voice, and impact |
| [antislop-workshop](skills/content-creation/antislop-workshop/SKILL.md) | Remove AI slop and generic language from any piece of writing |

### Marketing

| Skill | Description |
|-------|-------------|
| [landingpage-workshop](skills/marketing/landingpage-workshop/SKILL.md) | Build sales pages using a 5-part reverse-order framework |
| [emailsequence-workshop](skills/marketing/emailsequence-workshop/SKILL.md) | Write welcome and nurture email sequences |
| [copywriting-workshop](skills/marketing/copywriting-workshop/SKILL.md) | Master persuasive copywriting frameworks and techniques |
| [leadmagnet-workshop](skills/marketing/leadmagnet-workshop/SKILL.md) | Design lead magnets that convert across business models |
| [offerarchitect-workshop](skills/marketing/offerarchitect-workshop/SKILL.md) | Create, refine, and position irresistible offers |

### Research

| Skill | Description |
|-------|-------------|
| [keywordresearch-workshop](skills/research/keywordresearch-workshop/SKILL.md) | Mine topics and keywords for content strategy |
| [interesting-workshop](skills/research/interesting-workshop/SKILL.md) | Generate novel angles and differentiated propositions |
| [business-interview-workshop](skills/research/business-interview-workshop/SKILL.md) | Conduct structured business interviews to extract insights |

### Tools

| Skill | Description |
|-------|-------------|
| [frontend-workshop](skills/tools/frontend-workshop/SKILL.md) | Build and iterate on frontend components |
| [skillcreator-interview-workshop](skills/tools/skillcreator-interview-workshop/SKILL.md) | Interview-driven workflow for creating new Claude skills |
| [skillcreator-extract-workshop](skills/tools/skillcreator-extract-workshop/SKILL.md) | Extract and codify expertise into reusable skill files |
| [keybindings-help](skills/tools/keybindings-help/SKILL.md) | Customize keyboard shortcuts, rebind keys, and add chord bindings in Claude Code |
| [session-start-hook](skills/tools/session-start-hook/SKILL.md) | Auto-install project dependencies at the start of every remote Claude Code session |

---

## Adding New Skills

1. Create a folder under the appropriate category: `skills/<category>/<skill-name>/`
2. Add a `SKILL.md` following the existing format (frontmatter + core framework)
3. Optionally add a `references/` subfolder for supporting `.md` files
4. Update this README's index table

---
name: "Jaymark Purpose-Led Portfolio"
category: Brands
surface: web
colors:
  body: "#fafafa"
  body-2: "#222831"
  body-3: "#005691"
  accent: "#005691"
  surface: "#e8f1f5"
  muted: "#68717d"
  border: "#dcdddd"
---

# Jaymark Purpose-Led Portfolio

> Category: Brands
>
> Surface: web

A precise, conversion-minded portfolio system for a WordPress developer and digital marketer. It balances developer discipline with approachable business clarity: dark editorial moments create authority, winter-blue surfaces make technical content feel accessible, and direct blue actions keep every page oriented toward a useful next step.

## Brand Character

The experience should feel capable, grounded, and intentionally built—not like a generic freelancer template or a flashy technology demo. The visual idea is **purpose made visible**: strong hierarchy, honest evidence, clear navigation, and a measured amount of motion.

The system blends five traits:

- **Practical:** every visual choice supports comprehension or action.
- **Technical:** grids, mono labels, compact metadata, and structured mockups signal craft.
- **Business-aware:** copy connects implementation to outcomes without inventing results.
- **Confident:** bold uppercase display type and deep editorial fields establish authority.
- **Human:** warm portrait moments, plain language, and winter-blue surfaces keep the system approachable.

Maintain a light-first page rhythm with concentrated dark sections. A typical long page should be roughly two-thirds light and one-third dark, using dark fields for the hero, experience, or closing transition rather than covering the entire site.

## Color System

| Role | Token | Hex | Use |
| --- | --- | --- | --- |
| Canvas | `--color-canvas` | `#FAFAFA` | Primary page background and light text on dark fields |
| Surface | `--color-surface` | `#FFFFFF` | Cards, framed browser mockups, elevated panels |
| Winter | `--color-surface-tint` | `#E8F1F5` | Soft section fields, icons, chips, image frames, quiet highlights |
| Action blue | `--color-primary` | `#005691` | Primary actions, focus rings, links, selected states, key underlines |
| Depth navy | `--color-primary-deep` | `#004A7C` | Secondary depth, mockup panels, action hover, controlled gradients |
| Ink | `--color-ink` | `#222831` | Primary text and dark editorial backgrounds |
| Muted ink | `--color-ink-muted` | `#68717D` | Supporting copy and metadata on light surfaces |
| Border | `--color-border` | `#DCDDDD` | Dividers, card outlines, inactive controls |

### Color posture

- Use Ink as the dark field; do not substitute pure black.
- Use Action blue as a decision color, not decoration. Give it to the most important action, highlighted capability, or active state.
- Winter is a structural neutral. It may fill whole sections, image stages, compact icon discs, or quiet labels.
- Depth navy supports Action blue and may appear in technical mockups or hover states, but it should not compete with the primary action.
- On dark fields, primary text is Canvas and supporting text uses approximately 67% Canvas opacity.
- On light fields, supporting text uses approximately 60–64% Ink opacity.
- Gradients are limited to blue-to-navy or low-opacity blue radial light. Do not introduce unrelated hues.

### Contrast rules

- Canvas on Action blue and Canvas on Ink are approved high-contrast pairings.
- Action blue on Canvas is approved for links, labels, and focus treatment.
- Do not place muted text on Winter when the information is essential.
- Never use color as the only signal for focus, selection, success, or error.

## Typography

The type system uses contrast of purpose: Bricolage Grotesque for expressive hierarchy, DM Sans for effortless reading, and IBM Plex Mono for technical navigation and metadata.

| Role | Family | Typical weight | Treatment |
| --- | --- | --- | --- |
| Display | Bricolage Grotesque | 520–800 | Tight tracking, compact leading, often uppercase |
| Body | DM Sans | 400–700 | Neutral rhythm, 1.5–1.6 line height |
| Utility | IBM Plex Mono | 500 | Uppercase, 0.04–0.08em tracking, concise wording |

### Type scale

- **Hero display:** `clamp(60px, 6.3vw, 92px)`, weight 780, line-height 0.94–0.96, tracking `-0.035em`, uppercase.
- **Section display:** `clamp(42px, 5.2vw, 68px)`, weight 760, line-height 0.98, tracking `-0.04em`, uppercase.
- **Editorial statement:** `clamp(32px, 4.1vw, 55px)`, weight 520, line-height 1.18, sentence case.
- **Project title:** 27px, weight 700, tracking `-0.03em`.
- **Card title:** 20px, weight 700, tracking `-0.02em`.
- **Body:** 16px with 1.55 line height; use 17px for prominent introductions and 13–14px for supporting card copy.
- **Control:** 12px, bold.
- **Utility label:** 7–10px mono, uppercase, tracking `0.08em`.

Use bold underlined words sparingly inside major statements. The underline is Action blue at roughly one-tenth of the type size with a visible offset. Avoid long all-caps paragraphs; uppercase belongs to navigation, labels, actions, and display headlines.

## Layout and Spacing

Use a centered content shell of up to 1160px with 24px side gutters on desktop. The system follows a 4px base grid while favoring a confident macro rhythm.

- Major section padding: 96–112px desktop, 78px mobile.
- Heading-to-content gap: 48–60px.
- Card-grid gap: 15–18px; keep it compact enough that the grid reads as one system.
- Component padding: 24–28px.
- Inline action gap: 10–12px.
- Long-form text width: 570–700px.
- Centered editorial statement width: 900–930px.

Alternate layout postures across a long page:

1. Dark asymmetric hero with text and a framed visual.
2. Spacious centered editorial statement.
3. Compact, regular capability grid.
4. Two-column project showcase.
5. Dark chronological or evidence-led section.
6. Focused closing call to action.

Use asymmetry through unequal columns, offset rows, controlled rotation, or a visual that slightly breaks its section boundary. Do not manufacture asymmetry by randomly misaligning text.

### Responsive behavior

- At 980px, tighten large two-column gaps and reduce hero type.
- At 820px, collapse major split layouts and replace the desktop navigation with a full-screen dark menu.
- At 560px, use a 14px page gutter, one-column card grids, stacked actions, and section displays around 41–48px.
- Preserve source order and meaning when layouts collapse. Never hide essential content to make mobile fit.

## Shape, Borders, and Depth

The system is mostly crisp, with rounding reserved for contained visual objects.

- Buttons and navigation actions are square by default: `0px` radius.
- Technical browser frames use `8px` radius.
- Image and portrait frames use `12–18px` radius.
- Cards use `13–15px` radius.
- Tags and icon discs use a full pill or circle.
- Standard borders are 1px using Border or a 14–28% Ink tint.

Shadows should describe elevation, not atmosphere. Default cards use nearly invisible navy depth. Hovered project cards may reach `0 18px 45px rgba(0, 74, 124, 0.10)`. Portraits and deliberately elevated frames may use a stronger black shadow. Do not apply a shadow to every surface.

## Components

### Header and navigation

- Keep the header fixed and at least 70–78px tall.
- Over dark content it begins transparent; after scroll it becomes a 90% Ink layer with a subtle bottom border and 16px blur.
- The brand mark combines a compact geometric symbol with a 13px display wordmark.
- Desktop navigation is 9px mono uppercase with generous horizontal spacing.
- The contact action is the only filled navigation item and uses Action blue with a restrained action shadow.

### Buttons and links

- Standard button height is 48px with 19px horizontal padding.
- Primary buttons are Action blue on Canvas; secondary buttons on dark fields use a transparent fill and a low-contrast Winter border.
- A circular 25px Winter icon may precede the label to add direction without softening the button silhouette.
- Hover uses a 3px upward translation. Do not scale buttons.
- Inline links are bold and may terminate in a 23px outlined circular arrow or plus icon.

### Capability cards

- Use a three-column desktop grid and one column on small screens.
- Default cards have a white surface, 1px border, 13px radius, 28px padding, and centered content.
- The icon is a 48px outlined circle using mono symbols.
- One card per group may be featured with an Action blue fill and Canvas content.
- Hover lifts 5px and increases the navy shadow slightly.

### Project cards

- Use a two-column desktop grid with a Winter visual stage above the copy.
- The visual stage should contain a simplified, intentional browser or interface mockup rather than a generic stock image.
- Browser frames use a white 7px border, 8px radius, and a very slight ±1.6° rotation.
- Copy includes a mono project type, a 27px display title, concise supporting text, pill tags, and one evidence-seeking action.
- Avoid invented metrics, fabricated logos, or implying unavailable client work.

### Portrait and editorial media

- Place portraits inside a white-bordered frame over an Action blue grid plane.
- Small rotations of 1.5–5° are permitted for layered portrait compositions.
- A compact mono availability or location label may overlap the lower edge.
- Keep faces natural and documentary; avoid heavy filters, artificial neon effects, or glossy corporate stock treatment.

### Dark evidence sections

- Use Ink with a low-opacity Action blue radial light and a restrained technical grid.
- White headings, Winter metadata, and compact timeline symbols carry hierarchy.
- Maintain generous vertical space so the dark field feels editorial rather than dashboard-like.

### Closing call to action

- Use a dark field and one oversized Action blue circular arrow or a strong square primary button.
- The headline should be direct and outcome-oriented.
- Keep contact choices short; the system should end with one obvious next step.

## Motion and Interaction

Motion is concise and mechanical, never decorative.

- Hover and menu transitions: 180ms ease.
- Card lift: 5px; button lift: 3px.
- Scroll reveal: opacity plus 18px vertical translation over 580ms ease.
- Header state change: background, border, and blur over 180ms.
- Full-screen mobile navigation enters with a 14px upward offset and a fade.

Always implement `prefers-reduced-motion: reduce`: remove smooth scrolling, transforms, and transition duration while preserving all content and state changes. Avoid parallax, cursor followers, perpetual animation, or motion that delays the primary action.

## Voice and Content

Voice is clear, capable, and commercially aware. It explains what is built, how it helps, and what the visitor can do next.

- Prefer verbs such as **build, strengthen, improve, connect, maintain, optimize, launch, support**.
- Pair technical services with practical business meaning.
- Use first person for personal positioning and direct second person for calls to action.
- Keep headings short and purposeful. A controlled two-part construction works well: “Websites built with purpose. Growth built in.”
- Be specific about platforms and capabilities, but conservative about outcomes.
- Use “representative work,” “relevant samples available,” or “the kind of work I deliver” when public evidence is limited.

Avoid hype words such as *revolutionary, world-class, game-changing,* and *guaranteed*. Do not invent client results, credentials, testimonials, awards, or performance numbers.

## Imagery and Graphic Language

The preferred visual language is constructed rather than sourced: interface mockups, grids, framed screenshots, structured diagrams, browser chrome, and a real personal portrait.

- Use Winter as the stage behind project mockups.
- Use Ink and Depth navy for technical panels.
- Use Action blue for active UI, diagram nodes, lighting, and a small number of geometric accents.
- Fine grids may appear at 29–34px intervals with very low opacity.
- Mockups should communicate page type and hierarchy without pretending to be a specific client deliverable.

Avoid generic laptop mockups, hands-on-keyboard stock photos, 3D blobs, cartoon mascots, rainbow gradients, and decorative code snippets that do not support the story.

## Accessibility and Quality Bar

- Provide a visible skip link and preserve semantic heading order.
- Use a 3px Action blue focus outline with a 4px offset for all interactive elements.
- Maintain a minimum 44px touch target on mobile; primary buttons are at least 48px tall.
- Supply meaningful alt text for real images and hide purely decorative mockups from assistive technology.
- Do not remove focus treatment. Do not rely on hover to expose essential content.
- Validate navigation, menu, project actions, mail links, and responsive source order with keyboard-only use.
- Treat reduced motion as a first-class mode.

## Anti-Patterns

Do not turn this system into:

- a generic rounded SaaS card grid;
- an all-dark cyber portfolio;
- a blue gradient on every section;
- a maximalist animation showcase;
- a résumé pasted into a web page;
- a wall of tiny technical badges;
- a stock-photo-led agency template;
- a portfolio that claims outcomes without evidence.

The final result should feel custom, disciplined, approachable, and ready to convert a serious business visitor into a relevant conversation.

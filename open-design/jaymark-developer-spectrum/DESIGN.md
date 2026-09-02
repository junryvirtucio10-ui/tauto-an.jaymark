---
name: "Developer Spectrum"
category: Brands
surface: web
colors:
  body: "#F7F9FC"
  body-2: "#002147"
  body-3: "#331E54"
  accent: "#FF9500"
  surface: "#FFFFFF"
  muted: "#5D6B7C"
  border: "#C9D5E3"
---

# Developer Spectrum

> Category: Brands
>
> Surface: responsive developer-portfolio landing page

Developer Spectrum is a confident, high-contrast system for a developer profile. Warm colors represent the interface layer—ideas, interaction, and shipping. Cool colors represent the system layer—structure, code, and reliability. The two sides meet in a visible build pipeline that runs through the page.

The result should feel like a capable developer showing how the work is assembled, not a generic tech startup, gamer interface, or neon cyberpunk template.

## Subject, audience, and job

- **Subject:** a developer who builds responsive WordPress, WooCommerce, and business-facing web experiences and understands the practical work around launch.
- **Audience:** founders, business owners, marketing leads, and hiring managers who want evidence of sound implementation and clear communication.
- **Single job:** make the developer's role and strengths obvious in the first screen, then move the visitor into credible project evidence and a direct conversation.

## Design thesis: interface to infrastructure

Open with the statement: **“I build the interface and the logic behind it.”** Pair the line with one live project artifact: a compact browser/code frame showing a real or representative build, its stack, and its current status.

The signature device is the **build pipeline**: a two-pixel line with meaningful nodes for `discover`, `build`, `test`, and `ship`. It begins warm (`#E66000`, `#FF9500`, `#FFCB00`) near interface work and becomes cool (`#0095DD`, `#00539F`, `#331E54`) near systems and proof. Use discrete color segments, never a rainbow gradient. On small screens it becomes a horizontal progress rail above the relevant content.

The pipeline is structural. Each node marks a real stage, project fact, or section state. It must not be repeated as empty decoration.

## Color system

All seven supplied colors are preserved, but each has one job.

| Role | Token | Value | Use |
| --- | --- | --- | --- |
| Canvas | `--color-canvas` | `#F7F9FC` | Page background and quiet reading areas |
| Paper | `--color-surface` | `#FFFFFF` | Project evidence, forms, and code/browser frames |
| Midnight | `--color-midnight` | `#002147` | Hero, footer, primary text, and dark controls |
| System violet | `--color-violet` | `#331E54` | Backend/system sections and selected project states |
| Core blue | `--color-blue` | `#00539F` | Primary action on light surfaces, links, and focus |
| Runtime blue | `--color-sky` | `#0095DD` | Active state on dark surfaces and responsive markers |
| Source orange | `--color-orange` | `#E66000` | Pipeline origin, large emphasis, and status signals |
| Build orange | `--color-amber` | `#FF9500` | Primary action on dark surfaces and active build states |
| Test yellow | `--color-yellow` | `#FFCB00` | Small proof highlights, pass states, and annotations |
| Body ink | `--color-text` | `#263A52` | Paragraphs and form labels on light surfaces |
| Muted ink | `--color-muted` | `#5D6B7C` | Supporting copy and metadata |
| Rule | `--color-border` | `#C9D5E3` | Dividers, field outlines, and frame edges |

### Color rules

- Keep at least 55% of a typical page view neutral: Canvas, Paper, or Midnight.
- Use warm gradients for actions and interface emphasis, and cool gradients for systems and depth. Keep gradients to two or three related stops; never blend all seven colors into one rainbow.
- Use **Core blue with white text** for the main button on light surfaces.
- Use **Build orange or Test yellow with Midnight text** for actions and badges on dark surfaces.
- Source orange does not pass AA for normal-sized text on white. Use it for large display text, borders, nodes, or on Midnight.
- Runtime blue is for active indicators on Midnight, not long text on white.
- Never place white text on orange, amber, or yellow.

## Typography

Typography should feel engineered but human: a distinctive headline face, an exceptionally clean reading face, and restrained monospaced metadata.

| Role | Family | Weight | Use |
| --- | --- | --- | --- |
| Display | **Sora** | 700–800 | Hero, wordmark, and major section headings |
| Body/UI | **Instrument Sans** | 400–700 | Paragraphs, navigation, buttons, forms, and project summaries |
| Technical | **IBM Plex Mono** | 400–600 | Stack names, file paths, dates, status, commands, and code |

Use web fonts from Google Fonts. Keep system fallbacks in the CSS so the page remains usable before fonts load.

### Type scale

- Hero: `clamp(3.25rem, 5.8vw, 6rem)`, Sora 800, line-height `0.96`, tracking `-0.045em`; keep it prominent without allowing it to overpower the project artifact.
- Section title: `clamp(2.35rem, 5vw, 4.8rem)`, Sora 700, line-height `0.98`, tracking `-0.04em`.
- Project title: `clamp(1.65rem, 2.4vw, 2.4rem)`, Sora 700, line-height `1.05`.
- Lead: `clamp(1.15rem, 1.6vw, 1.4rem)`, Instrument Sans 500, line-height `1.5`; maximum width `42rem`.
- Body: `1.0625rem`, line-height `1.65`; maximum width `42rem`.
- Utility: `0.75rem`, IBM Plex Mono 500, line-height `1.45`; never smaller than `12px`.

Use sentence case. Mono is evidence, not decoration. Do not write the hero in monospace, turn every label into a command, or add angle brackets around ordinary prose.

## Layout

Use a `1280px` maximum shell, a 12-column grid, and generous but not empty spacing. Borders and color fields establish structure; shadows are reserved for the primary project frame.

```text
Desktop
┌──────────────────────────────────────────────────────────────┐
│ wordmark                  Work  Capabilities  Start a project│
├────────────── build pipeline ────────────────────────────────┤
│ interface /  headline + positioning    live build artifact  │
│ systems      actions                  stack · status · view  │
├──────────────────────────────────────────────────────────────┤
│ selected work       large case note + real screenshot       │
├───────────────────────┬──────────────────────────────────────┤
│ capability index      │ selected capability explanation      │
├───────────────────────┴──────────────────────────────────────┤
│ direct contact statement + short project-start action        │
└──────────────────────────────────────────────────────────────┘
```

- Hero: seven columns for the thesis, five for the live artifact.
- Selected work: one large project at a time, not a wall of identical cards.
- Capability section: a compact index on the left; one changing explanation on the right.
- At `900px`, stack the hero and place the build artifact directly after the positioning copy.
- At `640px`, use a `16px` gutter, stack actions, and let project media run to the content edges.

## Core components

### Wordmark and navigation

Set the person's name in Sora 700. Add a quiet `.dev` or role descriptor in IBM Plex Mono only when it is real. The header is transparent over Midnight in the hero and gains a solid Midnight background once sticky. Keep one clear action at the right.

### Buttons

- Minimum height: `48px`; minimum touch target: `44px`.
- Radius: `6px`; avoid pills.
- Light primary: Core blue background, white text.
- Dark primary: Build orange background, Midnight text.
- Secondary: transparent with a one-pixel current-color border.
- Use direct labels: “View selected work,” “Read the case study,” and “Start a project.”
- Hover moves only the arrow by `4px` and changes fill; never lift or scale the entire control.

### Build artifact

This is the hero's proof object. It resembles a useful project inspector, not decorative fake code. Include:

- project name and honest status;
- a browser or responsive preview;
- actual stack labels;
- one short implementation note;
- desktop, tablet, and mobile controls when a responsive view exists.

The pipeline nodes are interactive controls for Discover, Build, Test, and Ship. Selecting a stage updates the artifact status, title, explanation, preview message, and relevant work labels. The controls use real buttons, expose their selected state with `aria-pressed`, and remain fully usable by keyboard.

Use Paper inside a Midnight or Violet frame. One amber status bar or yellow test result can cross the top edge.

### Project case note

Each project includes context, contribution, constraint, implementation, and a verified result. If a visual is representative rather than client work, label it clearly. Show one dominant screenshot with a narrow technical annotation rail.

### Capability index

Use full-width rows separated by rules. A selected row changes its node from Sky to Amber and updates the shared detail area. On mobile, use native disclosure behavior. Do not build six equal icon cards.

### Tags and status

Tags are for real stacks, platforms, or delivery states. Use rectangular labels with `4px` radius. Technical tags use IBM Plex Mono. Do not use tags for vague qualities such as “creative,” “innovative,” or “passionate.”

### Contact block

Close on System violet, not another hero-sized novelty section. Ask for useful information—project type, desired launch window, and current site—then give one mail action. Do not promise a response time unless it is true.

## Motion

Motion communicates build state.

- Page load: pipeline draws once, then the hero copy and artifact resolve; total under `700ms`.
- Pipeline node: one state change from outline to solid; no looping pulse.
- Viewport switch: frame width changes over `320ms cubic-bezier(0.22, 1, 0.36, 1)`.
- Button arrow: `160ms`, maximum `4px` travel.
- Capability detail: `200ms` opacity change.
- No cursor followers, parallax, perpetual terminal typing, glowing orbs, or blanket scroll reveals.

With `prefers-reduced-motion: reduce`, show the complete pipeline immediately and remove width interpolation.

## Imagery

Prioritize real screenshots, responsive crops, CMS editor states, component states, and concise annotations. A portrait may appear once after the first project proof or inside the About section. Use natural cropping and a simple Midnight or Violet field; no floating cutout surrounded by decorative blobs.

## Voice

Write like a developer explaining a useful implementation decision.

- Prefer: “I build the interface and the logic behind it.”
- Prefer: “This product archive stays usable from wide desktop to a 390px screen.”
- Prefer: “Representative WooCommerce build showing product structure and checkout flow.”
- Prefer verbs such as build, connect, test, improve, ship, and maintain.
- Avoid “digital experiences that inspire,” “pixel-perfect,” “world-class,” “seamless,” and unsupported performance claims.

## Accessibility

- Meet WCAG AA contrast for all text and interactive states.
- Use Midnight text on orange, amber, and yellow backgrounds.
- Use white text on Core blue, Violet, and Midnight.
- Keep focus visible with a `3px` yellow ring on dark surfaces and a `3px` Core blue ring on light surfaces.
- Preserve a logical heading order and visible labels for all form fields.
- Make viewport controls, capability rows, and project navigation keyboard-operable.
- Do not rely on the warm/cool distinction alone; pair color with text and node shape.

## Avoid

- seven-color rainbow gradients, muddy blends, or gradients behind long body copy;
- generic glowing dashboards and fake analytics;
- all-monospace interfaces;
- rows of equal rounded cards;
- tiny all-uppercase labels;
- ornamental code snippets that say nothing about the work;
- using all seven colors at equal visual weight;
- invented clients, testimonials, metrics, or credentials.

## Final quality check

1. Can a visitor identify the developer's role and strongest work without scrolling?
2. Does each of the seven colors have a controlled, repeatable role?
3. Is the build pipeline carrying real content rather than decoration?
4. Is technical typography limited to actual technical information?
5. Does the project evidence outweigh the capability claims?
6. Do orange and yellow surfaces always use dark text?
7. Does the experience remain complete on mobile, by keyboard, and with reduced motion?

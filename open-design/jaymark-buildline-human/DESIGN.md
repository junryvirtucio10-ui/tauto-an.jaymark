---
name: "Jaymark Buildline"
category: Brands
surface: web
colors:
  body: "#F4F6F7"
  body-2: "#151C24"
  body-3: "#005EA8"
  accent: "#F3B33D"
  surface: "#FFFFFF"
  muted: "#59636F"
  border: "#C7D0D8"
---

# Jaymark Buildline — human revision

> Category: Brands
>
> Surface: web

A portfolio system for a WordPress developer and digital marketer. It should feel like a thoughtful working session with an experienced builder: clear, responsive, candid, and visibly connected to real web work. It must not resemble a generic AI portfolio, SaaS dashboard, or cinematic technology landing page.

## Subject, audience, and job

- **Subject:** Jaymark's practical WordPress, WooCommerce, membership, and digital-marketing work.
- **Audience:** business owners and marketing leads deciding whether Jaymark understands their requirements and can deliver reliably.
- **Single job:** move a serious visitor from “What does he actually do?” to reviewing relevant work and starting a useful conversation.

## Art direction: the working canvas

Use a light, cool-gray working canvas with white content surfaces, dark ink, established brand blue, and a small signal-yellow accent. The page should feel assembled from real project artifacts: responsive browser frames, short build notes, project decisions, constraints, and outcomes that can be verified.

The signature interaction is a **live responsive project frame**. A visitor can switch a featured project between desktop, tablet, and mobile widths. The frame changes size in place while the project annotation updates beside it. This interaction demonstrates responsive thinking instead of merely claiming it.

Spend visual energy on this one moment. Keep the rest of the interface quiet.

## Remove from the previous system

Do not carry forward these generated-design habits:

- oversized all-uppercase headings;
- Bricolage Grotesque and DM Sans;
- blue glow, radial gradients, or decorative grid fields;
- rows of equal rounded cards with centered icons;
- tiny 7–10px mono labels;
- pill tags used as decoration;
- repeated upward hover lifts;
- scroll-reveal animation on every section;
- centered section headings by default;
- abstract browser mockups that do not resemble real work.

## Color system

| Role | Token | Value | Use |
| --- | --- | --- | --- |
| Working canvas | `--color-canvas` | `#F4F6F7` | Page background and quiet work areas |
| Paper | `--color-surface` | `#FFFFFF` | Reading surfaces and browser frames |
| Ink | `--color-ink` | `#151C24` | Main text, footer, and high-contrast regions |
| Body ink | `--color-text` | `#303A45` | Long-form copy |
| Muted ink | `--color-muted` | `#59636F` | Supporting copy and metadata |
| Build blue | `--color-primary` | `#005EA8` | Links, primary actions, focus, and active viewport |
| Deep blue | `--color-primary-deep` | `#004575` | Hover and selected states |
| Signal yellow | `--color-signal` | `#F3B33D` | One proof marker, active dot, or human annotation |
| Divider | `--color-border` | `#C7D0D8` | Rules, controls, and frame edges |

Use Signal yellow at less than five percent of the visible page. It is evidence or status, never a second call-to-action color. Use solid colors; gradients are not part of this system.

## Typography

Typography should sound capable and conversational rather than loud.

| Role | Family | Use |
| --- | --- | --- |
| Display | Archivo Variable | Mixed-case hero and section headings; weight 620–720; width 105–112 |
| Body | Atkinson Hyperlegible Next | Paragraphs, navigation, buttons, forms, and captions |
| Utility | IBM Plex Mono | Dates, code-like values, viewport sizes, and genuine technical metadata only |

### Scale

- Hero: `clamp(3.4rem, 7vw, 6.6rem)`, weight 680, line-height `0.98`, tracking `-0.035em`.
- Section heading: `clamp(2.25rem, 4vw, 4.25rem)`, weight 660, line-height `1.02`.
- Subheading: `clamp(1.5rem, 2vw, 2rem)`, weight 650, line-height `1.15`.
- Body lead: `1.25rem`, line-height `1.55`, maximum width `38rem`.
- Body: `1.0625rem`, line-height `1.65`, maximum width `42rem`.
- Label: `0.75rem`, line-height `1.4`; never smaller than `12px`.

Headings use sentence case. Do not underline random words or use all caps to manufacture impact. Let line breaks follow meaning.

## Layout

Use a 12-column shell up to `1240px` with a narrow project rail and a broad content field.

```text
Desktop
┌──────────────┬─────────────────────────────────────────────┐
│ status/rail  │ headline + concise positioning             │
│              │                                             │
│              │ responsive project frame  [D] [T] [M]      │
│              │                            project note      │
├──────────────┼─────────────────────────────────────────────┤
│ capability   │ selectable service rows + one detail panel │
├──────────────┼─────────────────────────────────────────────┤
│ selected work│ full-width case notes, one project at once │
└──────────────┴─────────────────────────────────────────────┘
```

The rail is structural: it holds availability, current section, project count, or real status. It is not a decorative numbered timeline.

Avoid a page made from repeated card grids. Capabilities should read as an index of services. Projects should read as case notes with enough room for a real screenshot, contribution, constraints, and verified outcome.

## Core components

### Header

Use a calm, mostly transparent header on the working canvas. The wordmark stays left; the primary conversation action stays right. Navigation labels use body type, not micro mono uppercase.

### Buttons

- Minimum height: `48px`.
- Radius: `4px`.
- Primary: Build blue with white text.
- Secondary: transparent with a one-pixel Ink border.
- Labels describe the result: “View selected work” and “Start a conversation.”
- Hover changes fill or arrow position; do not lift or scale the whole button.

### Service index

Replace capability cards with left-aligned rows. Each row contains the service, a one-line business meaning, and an arrow. Selecting a row updates one shared detail panel with deliverables and a relevant example. On mobile, rows become accessible disclosure controls.

### Responsive project frame

The browser frame contains a real screenshot or an honest prototype. Viewport controls show Desktop, Tablet, and Mobile with the dimensions visible in utility type. Changing the viewport morphs only the frame width over `360ms`; content remains readable and the active control is keyboard-accessible.

### Project case note

Each selected-work entry includes:

- project or representative-work title;
- context and intended audience;
- Jaymark's contribution;
- one or two important constraints;
- screenshots or prototype frames;
- verified result, or a clear note when the work is representative.

Do not fabricate client names, metrics, testimonials, or outcomes.

### Evidence strip

Use a thin, horizontal strip for genuine facts such as platforms, deliverables, availability, or supported project types. Do not use large decorative statistics.

### Contact

Use a direct closing statement and one short form or mail action. Avoid giant circles, glowing arrows, and vague copy.

## Motion

Motion should make the system feel responsive, not animated.

- Responsive-frame morph: `360ms cubic-bezier(0.22, 1, 0.36, 1)`.
- Button arrow shift: `180ms` and no more than `4px`.
- Service-detail crossfade: `220ms`.
- One page-load sequence: rail, headline, then project frame; total under `650ms`.
- No parallax, cursor follower, looping animation, blanket scroll reveals, or motion on every card.

For `prefers-reduced-motion: reduce`, switch viewport sizes without animation and show all essential content immediately.

## Imagery

Lead with real interface evidence. Use full or near-full screenshots, responsive crops, WordPress editor details, component states, or before/after structure when permission exists. A portrait can appear once, naturally cropped and without a rotated polaroid treatment.

Do not use abstract gradient art, generic laptop mockups, fake dashboards, 3D blobs, or decorative code.

## Voice

Write like a practitioner explaining a decision to a client.

- Prefer: “I build and improve WordPress sites around the job they need to do.”
- Prefer: “See how this layout adapts from desktop to mobile.”
- Prefer: “Representative build showing the structure I use for service businesses.”
- Avoid: “Purpose made visible,” “growth built in,” “world-class,” “seamless experiences,” and unsupported performance claims.

Use plain verbs, short headings, and specific deliverables. Copy should explain what visitors control or receive.

## Accessibility and responsive behavior

- Maintain WCAG AA contrast.
- Keep interactive targets at least `44px` and primary controls at least `48px`.
- Provide visible `3px` focus treatment with `3px` offset.
- Make service disclosures and viewport controls operable by keyboard.
- Preserve logical heading and source order.
- Use meaningful alternative text for real work and hide decorative frame chrome.
- At `860px`, move the project rail above the content as a horizontal information strip.
- At `620px`, stack actions and use edge-to-edge project frames within the page gutter.

## Quality check

Before publishing, the system should pass these questions:

1. Does the page show real or honest representative work before generic capability claims?
2. Is the strongest interaction the responsive project frame, with other motion restrained?
3. Are headings mixed case and readable rather than oversized and shouted?
4. Has the centered rounded-card grid been replaced by an index and case-note structure?
5. Are blue and yellow used for decisions and evidence, not decoration?
6. Does the design still work with motion disabled and on a narrow phone?


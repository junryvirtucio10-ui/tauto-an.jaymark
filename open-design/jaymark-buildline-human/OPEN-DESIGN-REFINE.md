# Prompt for the existing Open Design system

First use **Add brand font files** and upload the three `.ttf` files in the adjacent `fonts/` folder. Then paste the following into the chat for the currently selected **Jaymark Buildline** design system:

```text
Refine the current Jaymark Buildline design system in place. Do not create another design system and do not make a cosmetic variation of the existing one.

The generated result feels static and AI-made. Replace its art direction, typography, layout patterns, component posture, and motion rules with the attached DESIGN.md and tokens.css. Regenerate the system preview and component examples from those files.

Mandatory removals:
- Remove Bricolage Grotesque and DM Sans.
- Remove oversized all-uppercase headings, tiny mono labels, centered section headings, rounded three-card grids, blue radial glows, decorative technical grids, pill-tag decoration, repeated card lifts, and blanket scroll reveals.
- Do not use abstract browser mockups, giant circle CTAs, fake metrics, invented client results, or generic “purpose/growth” marketing copy.

Required replacement direction:
- Use Archivo Variable for mixed-case display typography, Atkinson Hyperlegible Next for body and controls, and IBM Plex Mono only for genuine technical metadata. Never render essential type below 12px.
- Use a cool working canvas (#F4F6F7), white paper surfaces, ink (#151C24), body ink (#303A45), Build blue (#005EA8), divider gray (#C7D0D8), and a very small Signal yellow accent (#F3B33D). Use solid color; no decorative gradients.
- Organize pages with a narrow information rail and a broad content field. Replace capability cards with a left-aligned service index and one shared detail panel. Present projects as spacious case notes, not equal cards.
- Make the signature component a live responsive project frame with accessible Desktop, Tablet, and Mobile controls. The frame should morph width in 360ms and update a short project annotation. This is the primary interactive moment.
- Keep other motion restrained: a 4px arrow shift, a 220ms detail crossfade, and one brief page-load sequence. Respect reduced motion.
- Use real screenshots or honest representative prototypes. Copy should sound like a practitioner explaining a decision to a client.

Update every derived output so the old system does not leak through: identity summary, design rationale, typography specimens, color tokens, spacing, radii, shadows, motion, components, responsive examples, brand preview, dark variables if required, and compact/default token JSON.

Before publishing, verify that the strongest interaction is the responsive project frame, headings are mixed case, no section defaults to a centered rounded-card grid, yellow occupies less than five percent of the page, and the preview remains useful with motion disabled.
```

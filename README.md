# Jaymark Tauto-an — Developer Portfolio

A responsive, project-first portfolio for Jaymark Tauto-an, a web developer and digital marketing specialist based in Cebu, Philippines. The structure uses a full-height typographic hero with a live Cebu status rail, a compact expertise band, an image-led work grid, interactive services, expandable experience cards, and a direct contact section. All claims are grounded in Jaymark's supplied résumé; the portfolio does not invent client metrics or project outcomes.

## Design system

- **Ink:** `#002147`
- **Blue:** `#00539F`
- **Cyan:** `#0095DD`
- **Violet:** `#331E54`
- **Orange:** `#E66000`
- **Amber:** `#FF9500`
- **Yellow:** `#FFCB00`
- **Display, body, and utility:** Switzer

The palette is used through project-specific browser compositions, layered ambient gradients, and warm action accents. Switzer carries the light, oversized editorial hierarchy of the supplied reference while the color system preserves Jaymark's visual identity.

## Interaction model

- Image-led project grid with responsive browser compositions
- Clickable project previews with numbered, date-based context
- Accessible case-study dialogs with role, focus, stack, and contribution details
- Live Cebu time and availability indicators
- Floating developer navigation with active-section feedback and a project CTA
- Core-stack ticker that holds still on hover or keyboard focus, without a playback button
- Scroll-triggered reveal transitions and gently scaling project previews
- Pointer-reactive hero lighting and project color spotlights
- Animated palette fields, traveling CTA gradients, and chromatic scroll progress
- Keyboard-accessible service tabs with selected-state feedback
- Four distinct experience cards with expandable role details and related project dialogs
- Experience motion is interaction-driven; no automatic scrolling or playback controls
- Responsive mobile navigation
- Reduced-motion support and visible keyboard focus states
- Contact form with service selection, field validation, direct delivery, and clear success or failure feedback

## Contact form delivery

The form sends inquiries to Jaymark through FormSubmit's AJAX endpoint and reports sending, success, failure, or the provider's one-time activation requirement without leaving the page. The current page URL is included so FormSubmit can validate local previews and deployed pages correctly. Service inquiry links preselect the relevant option in the form. FormSubmit requires a one-time email confirmation for the receiving address before it forwards submissions.

The delivery recipient and public contact address are both `jaymark.tautoan17@gmail.com`. Activate this recipient with FormSubmit before launch.

Run `npm test` to check contact validation, payload formatting, and delivery response handling.

## Run locally

```sh
npm install
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

# Zorcha design language

Zorcha feels energetic in public and calm in operation: marketing earns attention; product UI gets out of the creator's way.

## Shared foundation

- **Brand promise:** unlimited free DM automations that turn Instagram conversations into leads and customers.
- **Body/UI type:** Plus Jakarta Sans, variable weights 100–900.
- **Core voice:** direct, useful, optimistic, and specific. Prefer verbs: automate, answer, collect, launch, grow.
- **Spacing:** 4px sub-grid; 8px baseline; primary steps of 8, 12, 16, 24, 32, 48, and 64px.
- **Accessibility:** 44px minimum target, visible focus ring, 4.5:1 text contrast, no horizontal mobile overflow.
- **Imagery:** real Zorcha product UI and real creator/product imagery. Never use look-alike screenshots.

## Surface choice

Choose the surface before layout. Do not combine their tokens casually.

| Surface | Use for | Type hierarchy | Density | Primary geometry |
| --- | --- | --- | --- | --- |
| Marketing | Homepage, features, pricing, comparisons, launches | Degular Display + Plus Jakarta Sans | Airy | Figma navbar, dark feature hero, 24–55px cards |
| Product | Dashboard, automations, audience, forms, AI Studio | Plus Jakarta Sans only | Compact | 24px outer cards, 8/18px nested cards |

## Marketing language

- Lead with one oversized Degular Display statement and a short Plus Jakarta Sans explanation.
- Feature pages use the Figma `Desktop Navbar`: 764.66px wide, 55px tall, translucent `#fafafa99` shell, `#e9eded` stroke, 17px radius, purple mark, navy wordmark, divider, four center links, and one visible 11px-radius Sign In pill in the resting hero state.
- DM/product feature pages use the production AI FAQ hero posture: dark scenic background, centered Meta Tech Provider badge, centered title/subtitle/action, and one focused Instagram DM mockup below the copy.
- Purple is the action/energy signal; use it for the primary action, progress, or one decisive visual device.
- Alternate editorial text fields with real imagery or product demonstrations; avoid repetitive feature-card grids.
- Large feature sections use 42–55px chapter radii; internal modules use 24–32px; nav CTA uses 11px; do not flatten these to a global radius.
- Motion should explain progression: sticky sequences, controlled transforms, and carousel movement—not ambient decoration.

Use `tokens/marketing.css` and `patterns/marketing.md`.

## Product language

- Default to the light operational theme. The dark token block is only for product surfaces already designed in dark mode.
- Use strong labels, compact supporting text, and border-led grouping.
- Outer cards commonly use 24px; nested modules use 18px; small controls use 8–14px.
- Purple marks primary actions and selected states. Teal is positive; orange is negative/warning; pink/violet are chart series.
- Charts must show filled encodings and truthful labels. Unknown account data is a zero-state, never sample numbers presented as live.
- Sidebar, top navigation, filters, dialogs, and responsive reflow are part of the feature—not presentation chrome.

Use `tokens/product.css` and `patterns/product.md`.

## Content rules

Use the product's real vocabulary:

- Automation
- AI FAQ
- Link in Bio
- Forms
- Audience
- Growth & Engagement
- Messages Sent
- Followers Gained
- Follow-up Conversions
- FAQs Answered

Avoid generic terms such as “synergy,” “revolutionary platform,” or unsupported performance claims.

## Responsive posture

- **Marketing:** preserve headline impact, then reorder media below copy. Do not scale desktop art indiscriminately.
- **Product:** collapse two squeezed columns to one; replace the desktop sidebar with a drawer or bottom navigation; keep filters full-width when needed.
- Verify at 360, 390, 430, 768, 1024, 1366, and 1920px.

## Contribution rule

A new reusable token or pattern requires one of three sources: a Figma node, a production implementation path, or an approved brand decision. Record it in `SOURCES.md`.

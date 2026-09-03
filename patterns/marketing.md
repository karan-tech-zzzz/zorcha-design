# Marketing patterns

## Page anatomy

1. Figma `Desktop Navbar` with the exact logo lockup, divider, four links, and one visible Sign In pill in the resting hero state.
2. Dark scenic feature hero with a centered Meta Tech Provider badge when the page concerns Instagram automation.
3. One high-impact Degular Display statement and a specific Plus Jakarta Sans explanation.
4. One focused product object in the hero, usually an Instagram DM or Zorcha UI mockup.
5. Off-white editorial body sections with real screenshots, bento modules, comparison proof, FAQs, and practical footer.

## SEO feature pages

- Start with the exact search-answer H1 and a concise short answer in the first viewport.
- Keep the same feature-page visual language as product pages: large Degular hero, off-white content field, real product screenshots, Instagram-native DM/comment/story references, and rounded proof modules.
- Avoid continuous article copy. Each H2 section should resolve into a short module, visual proof, chips, stats, a table, or an accordion. Use paragraphs only as brief support copy.
- Place a clear CTA after every two or three content sections, varying CTA copy by context.
- Include a comparison table only when it helps the query; keep claims sourced to pricing, help, or production copy.
- Keep FAQ content practical and direct. Avoid keyword-stuffed repetition.

## Component contracts

- **Desktop Navbar:** `width: min(764.66px, 100% - gutters)`, `height: 55px`, `top: 32px`, fill `--zorcha-feature-glass`, stroke `--zorcha-feature-line`, 17px outer radius, 15px inner shine, 25px divider. Logo is separate purple mark (`--zorcha-feature-logo`) plus navy wordmark (`--zorcha-feature-ink`). Nav links use `--zorcha-feature-nav-ink`; the visible resting-state CTA is `Sign In` with `--zorcha-feature-ink`, 38px height, and 11px radius. Keep primary signup CTAs in the hero/body, not duplicated inside this resting nav.
- **Feature hero:** full-viewport dark scenic background, centered copy, optional Meta badge, white CTA, and one product mockup anchored below the copy. Avoid three equal hero cards unless the Figma source explicitly shows them.
- **Instagram DM mockup:** dark glass device shell, white/cream user pills, dark AI/Zorcha pills, real creator avatar when available, compact top bar, bottom composer. It should feel like Instagram DMs while still using Zorcha feature tokens.
- **Content modules:** off-white or white cards, 24–32px radius, sparse borders/shadows, concrete Zorcha screenshots or UI references. Avoid generic icon-card grids.
- **Footer:** feature pages close with the Figma creator strip and `Footer B` link columns; keep copy and link order sourced from Figma/production.

## Type

- Hero display: `clamp(3.5rem, 9vw, 8rem)`, tight leading and tracking.
- Section display: `clamp(2.5rem, 6vw, 5.5rem)`.
- Body: 16–22px with short line lengths.
- UI: 14px, 700 weight.

## Geometry

- Navigation shell: 17px; nav CTA: 11px; content cards: 24–32px; large chapter containers: 42–55px.

## Motion

Use motion only to reveal sequence, state change, or relationship. Every animation must respect `prefers-reduced-motion`.

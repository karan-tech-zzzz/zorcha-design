---
name: zorcha-design
description: Build Zorcha marketing pages and dashboard features from the production-derived local design package.
---

# Zorcha Design

Use this skill for Zorcha website, feature-page, SEO-page, and dashboard UI work.

## Start

1. Read `DESIGN.md`.
2. Choose one surface: marketing or product.
3. Import only the matching token file.
4. Start from the closest template or example.
5. Use local assets from `assets/`; do not hotlink or redraw Zorcha assets.

## Marketing Surface

Use `tokens/marketing.css` and `patterns/marketing.md`.

- Degular Display for major headlines.
- Plus Jakarta Sans for body and UI.
- Off-white canvas, navy text, purple action.
- Figma Desktop Navbar: glass pill, purple mark, navy wordmark, divider, center links, Sign In pill.
- Feature pages: dark scenic hero, Meta/Instagram trust cues when relevant, one focused product mockup.
- SEO content: short answer, cards, screenshots, tables, accordions, and CTAs. Avoid continuous article text.
- Movable feature assets are allowed when the source pattern uses stacked cards, DM tiles, orbit dots, language chips, spheres, or globe visuals.

## Product Surface

Use `tokens/product.css` and `patterns/product.md`.

- Plus Jakarta Sans throughout.
- Compact light operational UI.
- 24px outer cards, 18px nested modules, 8-14px controls.
- Purple for primary/selected states; teal/orange/pink/violet for semantic data.
- Unknown account data must be shown as empty or zero state.

## Verify

Run `npm test` before committing. Fix missing files, hotlinked assets, unfinished placeholders, and line-count failures.

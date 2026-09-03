# Zorcha Design

The durable design-language source for Zorcha marketing pages and product/dashboard features.

This repository separates the two real Zorcha surfaces instead of forcing them into one theme:

- **Marketing** — expressive editorial layouts, Degular Display headlines, purple emphasis, generous spacing, and image-led storytelling.
- **Product** — compact Plus Jakarta Sans UI, light operational surfaces, nested cards, clear usage states, and data-first workflows.

## Start here

1. Read [`DESIGN.md`](DESIGN.md).
2. Pick one surface: `tokens/marketing.css` or `tokens/product.css`.
3. Start from `templates/marketing-page.html` or `templates/dashboard-feature.html`.
4. Open `index.html` for the visual catalog.
5. Use `examples/free-instagram-dm-automation.html` as the SEO feature-page reference for `/free-instagram-dm-automation/`.
6. Read [`SKILL.md`](SKILL.md) when an agent is generating new Zorcha work.
7. Run `npm test` before committing.

## Repository map

```text
assets/       Local brand, font, marketing, and product assets
examples/     Finished reference screens
patterns/     Surface-specific composition guidance
scripts/      Dependency-free consistency checks
templates/    Copy-ready starting points
tokens/       Shared, marketing, and product token contracts
```

## Non-negotiables

- Do not mix marketing and product tokens in one screen.
- Use local assets; never hotlink production CDN files.
- Use real product language and honest empty states. Do not invent customer metrics.
- Preserve 44px minimum controls and visible `:focus-visible` states.
- New reusable rules must be evidenced in Figma or a production Zorcha codebase.
- SEO pages should keep the production feature-page rhythm: large product hero, answer-led body sections, real screenshots, practical proof, FAQs, and repeated CTAs after every few sections.
- Free comment-to-DM pages are not pricing pages. Do not pitch plan comparisons there unless the brief explicitly asks for pricing or alternatives.
- Feature-page visuals should match the Figma/website component language: glass navbar, purple mark, navy wordmark, Instagram-like UI references, short modular sections, and movable feature assets where appropriate.
- DM automation pages should use Flow Builder and Instagram DM references, not Link in Bio/editor backgrounds.

## Sources

- Website: <https://zorcha.com/>
- Figma suite: <https://www.figma.com/design/wW6gXcwziryBMQ1aZpkxLx/zorcha---website-dashboard?node-id=18445-31727&m=draw>
- Marketing implementation: `zorcha-website`
- Product implementation: `zorcha-frontend`
- Extraction provenance: [`SOURCES.md`](SOURCES.md)

No package dependencies are required. The `package.json` exists only to expose the repository check as `npm test`.

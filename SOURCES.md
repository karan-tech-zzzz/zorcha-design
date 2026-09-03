# Sources and provenance

## Primary references

| Source | Purpose |
| --- | --- |
| `https://zorcha.com/` | Public brand expression and messaging |
| Figma `wW6gXcwziryBMQ1aZpkxLx` | Website and dashboard design suite |
| `figma/DESIGN-context.md` from `feture_pages.fig` | Feature-page frame inventory, token list, and component names |
| `figma/thumbnail.png` from `feture_pages.fig` | Visual ground truth for feature-page composition |
| `/Users/home/Projects/z/zorcha-website` | Marketing production implementation |
| `/Users/home/Projects/z/zorcha-frontend` | Dashboard/product production implementation |
| `https://zorcha.com/pricing/` | General navigation/source context only; not a required content module for free comment-to-DM pages |
| `https://zorcha.com/meta-verified/` | Meta Tech Provider and official API messaging |

Local absolute paths are documentation of extraction provenance only. This repository does not depend on them at runtime.

## Token provenance

- `tokens/marketing.css` mirrors `zorcha-website/app/app.css` root colors, Plus Jakarta Sans, and the locally captured Degular Display files.
- `tokens/marketing.css` also contains the feature-page component contract from `feture_pages.fig`: glass navbar dimensions, logo colors, section radii, hero glass surfaces, Instagram DM module colors, and CTA geometry.
- Movable feature asset-board colors and shapes come from the imported AI FAQ-style Figma cards: stacked DM tiles, inbox triage cards, orbit dots, language chips, and dark rounded benefit panels.
- `tokens/product.css` mirrors `zorcha-frontend/app/app.css`, including default, dark, semantic, and chart tokens.
- `tokens/foundation.css` contains only shared scale and type aliases observed across both codebases.
- `tokens/tokens.json` is the AI Optimize machine manifest that reconciles marketing and product tokens without flattening them into one black-only theme.

## Asset provenance

- `assets/brand/*` and `assets/marketing/*` were localized by the Zorcha website extraction.
- `assets/product/get-started-*.webp` and `free-plan.webp` were localized from Zorcha's production asset CDN references found in `zorcha-frontend`.
- `assets/figma-feature/*` is the minimal imported asset subset needed to reproduce the `feture_pages.fig` feature-page language.
- `assets/figma-feature/meta-tech-provider.webp` and `jenny-dp.webp` are localized from Zorcha's production AI FAQ feature page for the trust badge and creator avatar only.
- `assets/figma-feature/flow-builder-step-1.webp`, `flow-builder-step-2.webp`, and `flow-builder-step-3.webp` are localized from Zorcha Custom Flow Builder blog references and are preferred for DM automation hero/background treatments.
- `assets/fonts/*` were copied from the local production repositories/extraction bundle.

When adding an asset, append its original source and intended usage here.

## AI Optimize pass

The parent OpenDesign project was optimized in place on 2026-09-03. The canonical parent files are `../DESIGN.md`, `../brand.json`, `../brand-spec.md`, `../system/theme.json`, `../system/variables.optimized.css`, and `../system/optimized-preview.html`. This repository keeps the GitHub-ready subset of those rules for future implementation work.

## SEO feature-page example

`examples/free-instagram-dm-automation.html` records the page model for `/free-instagram-dm-automation/`:

- Uses Figma feature-page tokens and the section rhythm observed in `/products/link-in-bio/` and `/products/ai-faq/`.
- Uses `Desktop Navbar` values from `figma/tree.json` and the live feature-page resting state: 764.66px shell, 55px height, `#fafafa99` fill, `#e9eded` stroke, `#6a07e4` mark, `#071329` wordmark, `#1e2943` nav text, and one visible Sign In pill.
- Uses Instagram-native post, story, and DM reference modules for comment-to-DM and reply demonstrations.
- Uses localized Custom Flow Builder screenshots for the hero background so the page does not reuse the Link in Bio/editor visual world.
- Uses actual localized Zorcha screenshots from `assets/product/`.
- Keeps the page focused on the free comment-to-DM workflow. Pricing and plan-comparison modules are intentionally out of scope unless the brief explicitly asks for them.
- Uses Zorcha's Meta Tech Provider page plus existing Comment to DM FAQ copy for safety and API messaging.

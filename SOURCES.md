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
| `https://zorcha.com/pricing/` | Current free-plan language and public plan positioning |
| `https://zorcha.com/meta-verified/` | Meta Tech Provider and official API messaging |

Local absolute paths are documentation of extraction provenance only. This repository does not depend on them at runtime.

## Token provenance

- `tokens/marketing.css` mirrors `zorcha-website/app/app.css` root colors, Plus Jakarta Sans, and the locally captured Degular Display files.
- `tokens/product.css` mirrors `zorcha-frontend/app/app.css`, including default, dark, semantic, and chart tokens.
- `tokens/foundation.css` contains only shared scale and type aliases observed across both codebases.

## Asset provenance

- `assets/brand/*` and `assets/marketing/*` were localized by the Zorcha website extraction.
- `assets/product/get-started-*.webp` and `free-plan.webp` were localized from Zorcha's production asset CDN references found in `zorcha-frontend`.
- `assets/figma-feature/*` is the minimal imported asset subset needed to reproduce the `feture_pages.fig` feature-page language.
- `assets/figma-feature/ai-faq-feature-bg.webp`, `meta-tech-provider.webp`, and `jenny-dp.webp` are localized from Zorcha's production AI FAQ feature page to keep DM automation pages visually aligned with the real Instagram DM hero language.
- `assets/fonts/*` were copied from the local production repositories/extraction bundle.

When adding an asset, append its original source and intended usage here.

## SEO feature-page example

`examples/free-instagram-dm-automation.html` records the page model for `/free-instagram-dm-automation/`:

- Uses Figma feature-page tokens and the section rhythm observed in `/products/link-in-bio/` and `/products/ai-faq/`.
- Uses Instagram-native post, story, and DM reference modules for comment-to-DM and reply demonstrations.
- Uses actual localized Zorcha screenshots from `assets/product/`.
- Uses public pricing language for Free plan positioning, including unlimited DMs, unlimited contacts, 20 FAQs, and upgrade-only advanced features.
- Uses Zorcha's Meta Tech Provider page plus existing Comment to DM FAQ copy for safety and API messaging.

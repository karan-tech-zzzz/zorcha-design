# Sources and provenance

## Primary references

| Source | Purpose |
| --- | --- |
| `https://zorcha.com/` | Public brand expression and messaging |
| Figma `wW6gXcwziryBMQ1aZpkxLx` | Website and dashboard design suite |
| `/Users/home/Projects/z/zorcha-website` | Marketing production implementation |
| `/Users/home/Projects/z/zorcha-frontend` | Dashboard/product production implementation |

Local absolute paths are documentation of extraction provenance only. This repository does not depend on them at runtime.

## Token provenance

- `tokens/marketing.css` mirrors `zorcha-website/app/app.css` root colors, Plus Jakarta Sans, and the locally captured Degular Display files.
- `tokens/product.css` mirrors `zorcha-frontend/app/app.css`, including default, dark, semantic, and chart tokens.
- `tokens/foundation.css` contains only shared scale and type aliases observed across both codebases.

## Asset provenance

- `assets/brand/*` and `assets/marketing/*` were localized by the Zorcha website extraction.
- `assets/product/get-started-*.webp` and `free-plan.webp` were localized from Zorcha's production asset CDN references found in `zorcha-frontend`.
- `assets/fonts/*` were copied from the local production repositories/extraction bundle.

When adding an asset, append its original source and intended usage here.

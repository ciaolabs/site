# Reintroduce a build step with Astro; freeze `_hej` as opaque assets

---
Status: accepted
---

## Context

The repository is the lost build output of an Astro + Vue-islands site: each of the 19 `index.html` files inlines a ~750-line **Layout Shell** (head, marquee, nav, cookie banner, footer) with no seam, so every shared change fans out across all pages by hand. The duplication has already produced bugs — every page carries the homepage `og:url`/`og:title` and several canonicals are wrong — because the only "interface" for **Metadata** is hand-editing ~8 scattered tags per page. The original Astro source is gone; `_hej/` holds the minified Vue/GSAP/Lottie bundles, and the deploy workflow uploads the repo root (`path: '.'`) straight to GitHub Pages with no build.

## Decision

Reintroduce a build step and adopt **Astro** — recovering, not inventing, the site's original architecture. A single `BaseLayout.astro` becomes the Layout Shell every **Page** renders through; Pages declare Metadata (`title`, `description`, `image`) and the Shell derives `canonical`/`og:url`/`twitter:url` from `Astro.url` + a configured `site`, which structurally eliminates the stale-URL bug class. The build emits to `dist/`, and `.github/workflows/static.yml` changes to `npm ci && npm run build` and uploads `./dist`. `_hej/` moves to `public/_hej/` and is **frozen as an opaque asset** — its source recovery (rebuilding interactions as fresh components, "Path Y") is explicitly deferred. During migration, markup in the **Animation-hooked zone** (marquee, zoom-scroll, Lottie, the contact **Island**) is preserved verbatim because `_hej/main.js` reads its exact classes; cleanup is confined to the **Inert zone**.

## Consequences

- The repo is no longer raw-deployed; a broken build now blocks deploys, and contributors need Node/Astro locally.
- Animations remain a visually-verified surface (no source to unit-test) until Path Y; refactoring their markup is off-limits until then.
- Adopting Astro carries build-tool lock-in, accepted because it matches the artifacts already in the repo rather than introducing a foreign stack.

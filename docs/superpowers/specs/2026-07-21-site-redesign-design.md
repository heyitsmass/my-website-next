# heyitsmass.dev redesign — design spec

**Date:** 2026-07-21
**Status:** Approved (brainstormed with visual companion; direction D "warm minimal" selected)

## Goal

Full redesign of the single-page portfolio. Replace the Next.js 15 / React 19 / Vercel stack with a
lightweight Vite + Preact static build deployable to Cloudflare Pages. Trim content to essentials
and reframe the brand logos honestly (client work done at XGen AI).

## Decisions made

| Question | Decision |
| --- | --- |
| Hosting | Cloudflare Pages (static `dist/` output) |
| Content scope | Trim to essentials: intro, brands, selected work, contact |
| Keep | Brand logo marquee, 4 real work items (text-first) |
| Drop | Skills bars, stat cards, About section, Massive Development button, stock photos, parallax/cursor effects |
| Logo framing | Heading "Brands I've built for" + caption "Client work at XGen AI — now part of Zoovu." |
| Logo roster | Keep: Armani, Arctic Fox, Baracuta, Coach, Filson, New Era, Pucci, Valentino. Add (placeholder tiles until real files exist): Haworth, Sonos, Bambi Baby, Away Travel, Zoovu. Also in marquee: XGen AI (existing logo, re-tinted for cream). Dropped: Dickies, Khaite, Russells, Tapestry, Virtual Guard. 14 total. |
| Visual direction | Warm minimal — cream, serif display, soft cards (approved full-page mockup in `.superpowers/brainstorm/40748-1784675484/content/warm-minimal-full.html`) |
| Stack | Vite + `@preact/preset-vite` with prerendering, TypeScript strict, Tailwind v4 (`@tailwindcss/vite`) |
| Package manager | **bun** (v1.3.1 installed) — `bun install`, `bun run build`, commit `bun.lock` |
| Rebuild mode | In place in this repo; Next/React/react-slick/lucide-react removed; git history and image assets kept |

## Architecture

Static site, prerendered at build time. Content lives in typed data modules; components render it
once during `vite build` (prerender), and Preact (~4 kB) hydrates in the browser solely for the
mobile menu toggle. No fetching, no routing, no runtime state beyond one boolean.

```
index.html              Vite entry
src/index.tsx           app root + prerender export
src/components/
  Nav.tsx               monogram, anchor links, mobile hamburger (only stateful component)
  Hero.tsx              kicker, serif name, intro, two pill CTAs
  Brands.tsx            heading + caption + logo marquee
  Work.tsx              4 project cards
  Contact.tsx           email pill, GitHub, LinkedIn, location
  Footer.tsx            copyright
src/data/companies.ts   14-brand roster (label, href, logo path OR placeholder flag)
src/data/projects.ts    4 work items (category, title, description)
src/styles.css          Tailwind v4 @theme tokens, marquee keyframes, reveal utilities
public/images/company_logos/   kept PNGs + any future real logos
```

Removed: `app/`, `components/`, `data/`, `utils/`, `next.config.*`, `next-env.d.ts`,
`postcss.config.*`; `package.json` rewritten (deps: preact; dev: vite, @preact/preset-vite,
tailwindcss, @tailwindcss/vite, typescript). Icons (mail, GitHub, LinkedIn, menu/close) are inline
SVGs — no icon library.

## Visual system

- **Palette:** page `#f5f1ea` (cream), card `#fffdf9`, ink `#1c1917`, muted `#57534e` / `#6b6560`,
  hairlines `#e7e0d3`. Defined as Tailwind v4 `@theme` tokens.
- **Type:** serif display via system serif stack (Georgia et al. — no webfont); system-ui sans for
  body. Italic accent on the surname per mockup.
- **Motion:** CSS-only. Logo marquee (translateX loop, pause on hover), soft hover states, gentle
  fade-up section reveals toggled by one small IntersectionObserver hook adding a class.
  `prefers-reduced-motion: reduce` disables the marquee (falls back to static wrapped grid) and
  reveals. No JS scroll/mouse parallax anywhere.

## Sections (top to bottom)

1. **Nav** — "BC" monogram; Work / Brands / Contact anchors with CSS `scroll-behavior: smooth`;
   hamburger menu below `md`.
2. **Hero** — kicker "Full-stack engineer · Las Vegas, NV"; serif "Brandon *Cannon*"; short intro
   (2 sentences, absorbs the strongest About copy); CTAs "See my work ↓" and "Get in touch".
3. **Brands** — "Brands I've built for"; caption "Client work at XGen AI — now part of Zoovu.";
   marquee of 14 logos. Placeholder brands render as styled text tiles matching logo sizing so real
   PNGs can drop in later without layout change.
4. **Selected work** — 4 cards, 2-col grid (1-col mobile): category kicker, title,
   metric-forward description. Copy tightened from current site; no images.
   - Product Mapping Service — resources −40%, sync times −96%, mapping +80%
   - SaaS Training Platform — enterprise dashboard, data viz, employee training
   - Interface Redesign — FCP +60%, engagement +30%, retention +15%
   - Systems Design — frontend + DB writes + migrations, maintenance downtime −40%
5. **Contact** — "Let's build something."; email pill `contact@heyitsmass.dev`; GitHub
   (`github.com/heyitsmass`), LinkedIn (`linkedin.com/in/heyitsmass`); "Always open to interesting
   problems · Las Vegas, NV".
6. **Footer** — © year Brandon Cannon (year computed at build time is fine).

## Error handling

Static site — the error surface is the build: strict TypeScript fails loudly; prerender fails the
build if a component throws. All images have `alt` text; placeholder tiles mean no broken-image
states for missing logos.

## Testing / verification

No test suite (repo convention). Verification per change: `bun run build` succeeds, `vite preview`
manual pass (desktop + mobile viewport), reduced-motion check, Lighthouse ≥95 on all four
categories.

## Deployment

Cloudflare Pages connected to the GitHub repo. Build command `bun run build` (Pages detects bun via
`bun.lock`), output directory `dist`. Manual follow-ups for Brandon at the end: point
`heyitsmass.dev` DNS at Cloudflare, then disconnect the Vercel project. Vercel keeps serving until
DNS moves, so there is no gap.

## Follow-ups (post-redesign)

- Replace placeholder tiles with real logo PNGs for Haworth, Sonos, Bambi Baby, Away Travel, Zoovu
  as files become available; re-tint or replace the XGen logo for the cream background.
- Update project `CLAUDE.md` — it currently documents the Next.js architecture and npm commands.
- Prettier config stays (tabs w4, single quotes, semicolons, width 100).

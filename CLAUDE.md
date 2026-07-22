# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `bun install` — install dependencies (bun is the package manager; `bun.lock` is committed)
- `bun run dev` — Vite dev server (http://localhost:5173)
- `bun run build` — prerendered static build to `dist/`
- `bun run preview` — serve `dist/` with prerender-aware middleware (http://localhost:4173)

There is no test suite. Verify changes with `bun run build` + `bun run preview`.

## What this is

A single-page portfolio site (Brandon Cannon / heyitsmass) built on Vite + Preact + Tailwind CSS
v4, prerendered to static HTML at build time. Deployed on Cloudflare Pages (build command
`bun run build`, output `dist/`).

## Architecture

- **Prerendering:** `@preact/preset-vite` with `prerender.enabled` in `vite.config.ts`.
  `src/index.tsx` exports both the hydration call and the `prerender()` function (via
  `preact-iso`); the `prerender` attribute on the script tag in `index.html` marks the entry.
  Content is baked into `dist/index.html` — view-source shows the full page.
- **Content lives in `src/data/`** (`companies.ts` — 14-brand roster; `projects.ts` — 4 work
  items). Brand entries without a `logo` path render as text placeholder tiles in the marquee.
- **Components in `src/components/`** — `Nav` is the only stateful component (mobile menu).
  Icons are inline SVGs; there is no icon library.
- **Styling:** Tailwind v4 CSS-first — tokens (warm-minimal palette, `font-display` serif stack,
  marquee keyframes) live in `@theme` in `src/styles.css`, along with `@source not` exclusions
  that keep `docs/` and `graphify-out/` out of Tailwind's content scan. No `tailwind.config.js`.
- **Motion:** CSS marquee (`animate-marquee`, hover-pause) and `.reveal` fade-ups driven by
  `src/hooks/useReveal.ts` (IntersectionObserver). Reveal CSS is gated on the `js` class added
  by an inline script in `index.html`, so no-JS visitors see all content;
  `prefers-reduced-motion` disables marquee and reveals (static logo grid fallback).
- Preact idiom: use `class`, not `className`.

## Style

Prettier is configured: tabs (width 4), single quotes, semicolons, print width 100.

## Design docs

- Spec: `docs/superpowers/specs/2026-07-21-site-redesign-design.md`
- Plan: `docs/superpowers/plans/2026-07-21-site-redesign.md`

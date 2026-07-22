# heyitsmass.dev

Personal portfolio — a single prerendered page built with [Preact](https://preactjs.com),
[Vite](https://vite.dev), and [Tailwind CSS v4](https://tailwindcss.com), managed with
[bun](https://bun.sh). Deployed on Cloudflare Pages.

## Commands

```bash
bun install       # install dependencies
bun run dev       # dev server (http://localhost:5173)
bun run build     # prerendered static build → dist/
bun run preview   # serve the built output (http://localhost:4173)
```

## How it works

Content lives in typed data modules (`src/data/`); `@preact/preset-vite` prerenders the page to
static HTML at build time, and Preact (~4 kB) hydrates only for the mobile menu. All motion is
CSS-driven with `prefers-reduced-motion` fallbacks.

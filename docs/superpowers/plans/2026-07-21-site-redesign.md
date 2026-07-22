# heyitsmass.dev Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio in place as a prerendered Vite + Preact + Tailwind v4 static site (warm-minimal design), replacing Next.js/React, managed with bun, deployable to Cloudflare Pages.

**Architecture:** Single prerendered page. Typed data modules render through small Preact components at build time (`@preact/preset-vite` prerender → static HTML in `dist/`); the ~4 kB Preact runtime hydrates only for the mobile menu. All motion is CSS-driven (marquee, reveals) with `prefers-reduced-motion` fallbacks.

**Tech Stack:** bun 1.3, Vite 7, Preact 10 + preact-iso, `@preact/preset-vite` (prerender enabled), Tailwind CSS v4 via `@tailwindcss/vite`, TypeScript strict.

**Spec:** `docs/superpowers/specs/2026-07-21-site-redesign-design.md`

**Conventions:** Prettier per `.prettierrc` (tabs w4, single quotes, semicolons, width 100). Preact uses `class` (not `className`). No unit-test suite in this repo (per CLAUDE.md); every task verifies via `bun run build` + content checks, and UI tasks get a `bun run preview` manual pass. Git identity is already set repo-locally to `Brandon C. <58617118+heyitsmass@users.noreply.github.com>` — do not change it. All commits end with the `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>` trailer.

---

## File structure (end state)

```
index.html                          Vite entry (head metadata, #app, js-class inline script)
vite.config.ts                      preact preset w/ prerender + tailwindcss plugins
tsconfig.json                       strict, jsx react-jsx w/ preact import source
package.json                        bun scripts: dev / build / preview
src/
  index.tsx                         App assembly, hydrate + prerender exports
  styles.css                        Tailwind import, @theme tokens, marquee keyframes, reveal CSS
  hooks/useReveal.ts                IntersectionObserver section reveals
  components/Nav.tsx                sticky nav, mobile hamburger (only stateful component)
  components/Hero.tsx               kicker, serif name, intro, CTAs
  components/Brands.tsx             logo marquee + reduced-motion static grid
  components/Work.tsx               4 project cards
  components/Contact.tsx            email pill + GitHub/LinkedIn icons
  components/Footer.tsx             copyright
  data/companies.ts                 14-brand roster
  data/projects.ts                  4 work items
public/
  favicon.ico                       moved from app/favicon.ico
  images/company_logos/*.png        9 logo files (8 existing + xgen.png moved in)
```

Removed along the way: `app/`, `components/`, `data/`, `utils/`, `next.config.ts`, `postcss.config.mjs`, `package-lock.json`, `public/images/company_logos_indigo/`, `public/logo.svg`, `public/loader.svg`, `public/images/dashboard.png`.

---

### Task 1: Remove Next.js stack, scaffold Vite + Preact + Tailwind

**Files:**
- Delete: `app/` (keep favicon — moved first), `components/`, `data/`, `utils/`, `next.config.ts`, `postcss.config.mjs`, `package-lock.json`
- Create: `package.json` (rewrite), `tsconfig.json` (rewrite), `vite.config.ts`, `index.html`, `src/index.tsx`, `src/styles.css`
- Modify: `.gitignore`

- [ ] **Step 1: Move the favicon, then remove the Next.js source and config**

```bash
cd /home/brandon/my-website-next
git mv app/favicon.ico public/favicon.ico
git rm -r --quiet app components data utils
git rm --quiet next.config.ts postcss.config.mjs package-lock.json
rm -rf node_modules .next
```

Expected: commands exit 0. `git status` shows renames/deletes staged.

- [ ] **Step 2: Rewrite `package.json`**

```json
{
	"name": "my-website",
	"version": "1.0.0",
	"private": true,
	"type": "module",
	"scripts": {
		"dev": "vite",
		"build": "vite build",
		"preview": "vite preview"
	},
	"dependencies": {
		"preact": "^10.28.0",
		"preact-iso": "^2.9.0"
	},
	"devDependencies": {
		"@preact/preset-vite": "^2.10.0",
		"@tailwindcss/vite": "^4.1.0",
		"tailwindcss": "^4.1.0",
		"typescript": "^5.9.0",
		"vite": "^7.0.0"
	}
}
```

- [ ] **Step 3: Rewrite `tsconfig.json`**

```json
{
	"compilerOptions": {
		"target": "ES2020",
		"module": "ESNext",
		"moduleResolution": "bundler",
		"lib": ["DOM", "DOM.Iterable", "ES2020"],
		"jsx": "react-jsx",
		"jsxImportSource": "preact",
		"strict": true,
		"noEmit": true,
		"isolatedModules": true,
		"esModuleInterop": true,
		"skipLibCheck": true,
		"resolveJsonModule": true
	},
	"include": ["src", "vite.config.ts"]
}
```

- [ ] **Step 4: Create `vite.config.ts`**

```ts
import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		preact({
			prerender: {
				enabled: true,
				renderTarget: '#app',
				previewMiddlewareEnabled: true,
			},
		}),
	],
});
```

- [ ] **Step 5: Create `index.html`**

The `prerender` attribute on the script tag tells the preset which module exports the `prerender()` function. The tiny inline script adds a `js` class so no-JS visitors never see reveal-hidden content (used from Task 7 on).

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Brandon Cannon — Full-Stack Engineer</title>
		<meta
			name="description"
			content="Full-stack engineer in Las Vegas, NV. I design and build commerce experiences — storefronts, integrations, and the systems behind them."
		/>
		<link rel="icon" href="/favicon.ico" />
		<script>
			document.documentElement.classList.add('js');
		</script>
		<script type="module" prerender src="/src/index.tsx"></script>
	</head>
	<body class="bg-cream text-ink antialiased">
		<div id="app"></div>
	</body>
</html>
```

- [ ] **Step 6: Create `src/styles.css` (stub — tokens land in Task 2)**

```css
@import 'tailwindcss';

@theme {
	--color-cream: #f5f1ea;
	--color-ink: #1c1917;
}
```

- [ ] **Step 7: Create `src/index.tsx` (minimal pipeline check)**

```tsx
import { hydrate, prerender as ssr } from 'preact-iso';
import './styles.css';

export function App() {
	return <main class="min-h-screen">Hello from Preact</main>;
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app')!);
}

export async function prerender() {
	return await ssr(<App />);
}
```

- [ ] **Step 8: Replace `.gitignore` contents**

```gitignore
# dependencies
/node_modules

# build output
/dist

# misc
.DS_Store
*.pem

# env files (can opt-in for committing if needed)
.env*

# typescript
*.tsbuildinfo

# brainstorm artifacts
.superpowers/
```

- [ ] **Step 9: Install and build**

```bash
cd /home/brandon/my-website-next
bun install
bun run build
```

Expected: `bun install` completes and writes `bun.lock`. `bun run build` exits 0 with vite build output and a prerender step.

- [ ] **Step 10: Verify prerendered output**

```bash
grep -c 'Hello from Preact' dist/index.html
```

Expected: `1` (content is in the static HTML, not injected at runtime).

- [ ] **Step 11: Commit**

```bash
git add -A
git commit -m "Replace Next.js stack with Vite + Preact + Tailwind v4 scaffold (bun)

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 2: Design tokens and global styles

**Files:**
- Modify: `src/styles.css` (full rewrite of the stub)
- Modify: `src/index.tsx` (exercise token classes so the build proves they generate)

- [ ] **Step 1: Rewrite `src/styles.css`**

Warm-minimal tokens per spec. `--color-*` entries become `bg-cream`, `text-ink`, `border-hairline`, etc.; `--font-display` becomes the `font-display` utility; `--animate-marquee` becomes `animate-marquee`. Reveal CSS is inert until Task 7 wires the hook (and is gated on the `js` html class so no-JS users see everything).

```css
@import 'tailwindcss';

@source not "../docs";
@source not "../graphify-out";

@theme {
	--color-cream: #f5f1ea;
	--color-card: #fffdf9;
	--color-ink: #1c1917;
	--color-ink-soft: #57534e;
	--color-ink-faint: #6b6560;
	--color-hairline: #e7e0d3;

	--font-display: Georgia, 'Times New Roman', serif;

	--animate-marquee: marquee 45s linear infinite;

	@keyframes marquee {
		to {
			transform: translateX(-50%);
		}
	}
}

html {
	scroll-behavior: smooth;
}

/* Section reveals: hidden only when JS is present; useReveal() adds .reveal-visible */
.js .reveal {
	opacity: 0;
	transform: translateY(16px);
	transition:
		opacity 0.6s ease-out,
		transform 0.6s ease-out;
}

.js .reveal-visible {
	opacity: 1;
	transform: none;
}

@media (prefers-reduced-motion: reduce) {
	html {
		scroll-behavior: auto;
	}

	.js .reveal {
		opacity: 1;
		transform: none;
		transition: none;
	}
}
```

- [ ] **Step 2: Exercise the tokens in `src/index.tsx`**

Replace the `App` function (rest of file unchanged):

```tsx
export function App() {
	return (
		<main class="min-h-screen bg-cream font-display text-ink">
			<span class="text-ink-soft">Hello from Preact</span>
		</main>
	);
}
```

- [ ] **Step 3: Build and verify tokens are emitted**

```bash
bun run build
grep -o 'f5f1ea' dist/assets/*.css | head -1
grep -o 'Georgia' dist/assets/*.css | head -1
```

Expected: build exits 0; both greps print a match.

- [ ] **Step 4: Commit**

```bash
git add src/styles.css src/index.tsx
git commit -m "Add warm-minimal design tokens and global styles

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 3: Data modules and logo assets

**Files:**
- Create: `src/data/companies.ts`, `src/data/projects.ts`
- Move: `public/images/company_logos_indigo/xgen.png` → `public/images/company_logos/xgen.png`
- Delete: `public/images/company_logos_indigo/`

- [ ] **Step 1: Move the XGen logo into the kept set, drop the indigo-tinted set**

The marquee renders every logo through `brightness(0)` (Task 5), which turns any source color into a uniform ink silhouette — so the indigo-tinted xgen.png works on cream. The rest of the indigo set duplicates brands we either kept (originals exist in `company_logos/`) or dropped (Dickies, Khaite, Russells, Tapestry, Virtual Guard).

```bash
cd /home/brandon/my-website-next
git mv public/images/company_logos_indigo/xgen.png public/images/company_logos/xgen.png
git rm -r --quiet public/images/company_logos_indigo
ls public/images/company_logos
```

Expected: listing shows exactly: `arcticfox.png armani.png baracuta.png coach.png filson.png newera.png pucci.png valentino.png xgen.png`

- [ ] **Step 2: Create `src/data/companies.ts`**

14 brands. Entries without `logo` render as text placeholder tiles until real files exist (Haworth, Sonos, Bambi Baby, Away Travel, Zoovu). Note the old data file's `https://https://` bug for Arctic Fox is fixed here.

```ts
export interface Company {
	label: string;
	href: string;
	/** Path under public/. Omitted → text placeholder tile until a real logo file exists. */
	logo?: string;
}

export const companies: Company[] = [
	{ label: 'Armani', href: 'https://www.armani.com', logo: '/images/company_logos/armani.png' },
	{
		label: 'Arctic Fox',
		href: 'https://arcticfoxhaircolor.com',
		logo: '/images/company_logos/arcticfox.png',
	},
	{
		label: 'Baracuta',
		href: 'https://uk.baracuta.com',
		logo: '/images/company_logos/baracuta.png',
	},
	{
		label: 'Coach Outlet',
		href: 'https://www.coachoutlet.com',
		logo: '/images/company_logos/coach.png',
	},
	{ label: 'Filson', href: 'https://www.filson.eu', logo: '/images/company_logos/filson.png' },
	{
		label: 'New Era',
		href: 'https://www.neweracap.com',
		logo: '/images/company_logos/newera.png',
	},
	{ label: 'Pucci', href: 'https://www.pucci.com', logo: '/images/company_logos/pucci.png' },
	{
		label: 'Valentino',
		href: 'https://www.valentino.com',
		logo: '/images/company_logos/valentino.png',
	},
	{ label: 'Haworth', href: 'https://www.haworth.com' },
	{ label: 'Sonos', href: 'https://www.sonos.com' },
	{ label: 'Bambi Baby', href: 'https://www.bambibaby.com' },
	{ label: 'Away Travel', href: 'https://www.awaytravel.com' },
	{ label: 'XGen AI', href: 'https://www.xgen.ai', logo: '/images/company_logos/xgen.png' },
	{ label: 'Zoovu', href: 'https://www.zoovu.com' },
];
```

- [ ] **Step 3: Create `src/data/projects.ts`**

```ts
export interface Project {
	category: string;
	title: string;
	description: string;
}

export const projects: Project[] = [
	{
		category: 'E-commerce Integrations',
		title: 'Product Mapping Service',
		description:
			'Backend redesign that cut system resources 40%, sync times 96%, and streamlined data mapping by 80%.',
	},
	{
		category: 'Web Application',
		title: 'SaaS Training Platform',
		description:
			'Enterprise dashboard with complex data visualization for monitoring and managing internal employee training.',
	},
	{
		category: 'Web Design',
		title: 'Interface Redesign',
		description:
			'User-facing overhaul that improved first contentful paint 60%, engagement 30%, and retention 15%.',
	},
	{
		category: 'Architecture',
		title: 'Systems Design',
		description:
			'Full-system redesign spanning frontend, database writes, and migrations — 40% less maintenance downtime.',
	},
];
```

- [ ] **Step 4: Build (type-checks the new modules)**

```bash
bun run build
```

Expected: exits 0.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "Add typed content data: 14-brand roster and 4 work items

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 4: Nav, Hero, Footer, and the App shell

**Files:**
- Create: `src/components/Nav.tsx`, `src/components/Hero.tsx`, `src/components/Footer.tsx`
- Modify: `src/index.tsx`

- [ ] **Step 1: Create `src/components/Nav.tsx`**

The only stateful component on the page. Anchor order matches page flow (Brands → Work → Contact).

```tsx
import { useState } from 'preact/hooks';

const links = [
	{ label: 'Brands', href: '#brands' },
	{ label: 'Work', href: '#work' },
	{ label: 'Contact', href: '#contact' },
];

export function Nav() {
	const [open, setOpen] = useState(false);

	return (
		<header class="sticky top-0 z-40 border-b border-hairline bg-cream/90 backdrop-blur-sm">
			<nav class="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 md:px-12">
				<a href="#top" class="font-display text-lg italic">
					BC
				</a>
				<div class="hidden gap-8 text-sm text-ink-soft md:flex">
					{links.map((l) => (
						<a key={l.href} href={l.href} class="transition-colors hover:text-ink">
							{l.label}
						</a>
					))}
				</div>
				<button
					type="button"
					class="md:hidden"
					aria-expanded={open}
					aria-label={open ? 'Close menu' : 'Open menu'}
					onClick={() => setOpen(!open)}
				>
					{open ? (
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						>
							<path d="M18 6 6 18M6 6l12 12" />
						</svg>
					) : (
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						>
							<path d="M3 6h18M3 12h18M3 18h18" />
						</svg>
					)}
				</button>
			</nav>
			{open && (
				<div class="border-t border-hairline px-6 pb-4 md:hidden">
					{links.map((l) => (
						<a
							key={l.href}
							href={l.href}
							class="block py-3 text-ink-soft"
							onClick={() => setOpen(false)}
						>
							{l.label}
						</a>
					))}
				</div>
			)}
		</header>
	);
}
```

- [ ] **Step 2: Create `src/components/Hero.tsx`**

```tsx
export function Hero() {
	return (
		<section id="top" class="mx-auto max-w-5xl px-6 pt-24 pb-16 md:px-12 md:pt-32">
			<p class="mb-4 text-xs tracking-[0.2em] text-ink-faint uppercase">
				Full-stack engineer · Las Vegas, NV
			</p>
			<h1 class="font-display text-5xl text-ink md:text-6xl">
				Brandon <em>Cannon</em>
			</h1>
			<p class="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
				I design and build commerce experiences — storefronts, integrations, and the systems
				behind them. Six years of making things faster, clearer, and easier to use.
			</p>
			<div class="mt-8 flex flex-wrap gap-3">
				<a
					href="#work"
					class="rounded-full bg-ink px-6 py-2.5 text-sm text-cream transition-opacity hover:opacity-85"
				>
					See my work ↓
				</a>
				<a
					href="#contact"
					class="rounded-full border border-hairline px-6 py-2.5 text-sm text-ink transition-colors hover:border-ink-faint"
				>
					Get in touch
				</a>
			</div>
		</section>
	);
}
```

- [ ] **Step 3: Create `src/components/Footer.tsx`**

`new Date()` runs at build time during prerender — a static year in the HTML is fine per spec.

```tsx
export function Footer() {
	return (
		<footer class="border-t border-hairline px-6 py-10 text-center text-xs text-ink-faint">
			© {new Date().getFullYear()} Brandon Cannon
		</footer>
	);
}
```

- [ ] **Step 4: Rewrite `src/index.tsx` to assemble the shell**

```tsx
import { hydrate, prerender as ssr } from 'preact-iso';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import './styles.css';

export function App() {
	return (
		<div class="min-h-screen bg-cream text-ink">
			<Nav />
			<main>
				<Hero />
			</main>
			<Footer />
		</div>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app')!);
}

export async function prerender() {
	return await ssr(<App />);
}
```

- [ ] **Step 5: Build and verify prerendered hero**

```bash
bun run build
grep -c 'Brandon <em>Cannon</em>' dist/index.html
grep -c 'Las Vegas, NV' dist/index.html
```

Expected: build exits 0; both greps print `1`.

- [ ] **Step 6: Manual preview pass**

```bash
bun run preview
```

Open http://localhost:4173 — cream page, serif name, sticky nav; narrow the window below 768px and check the hamburger opens/closes and closes on link click. Ctrl-C when done.

- [ ] **Step 7: Commit**

```bash
git add src/index.tsx src/components
git commit -m "Add Nav, Hero, Footer and app shell

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 5: Brands marquee

**Files:**
- Create: `src/components/Brands.tsx`
- Modify: `src/index.tsx`

- [ ] **Step 1: Create `src/components/Brands.tsx`**

Marquee track holds the roster twice; `animate-marquee` translates it −50% for a seamless loop, pausing on hover. Logos get `brightness-0 opacity-60` for a uniform ink tone on cream. Logo-less brands render as text tiles sized like logos, so real PNGs can drop in later without layout change. Second copy is `aria-hidden`; reduced-motion swaps the marquee for a static wrapped grid.

```tsx
import { companies, type Company } from '../data/companies';

function LogoTile({ company }: { company: Company }) {
	return (
		<a
			href={company.href}
			target="_blank"
			rel="noopener noreferrer"
			title={company.label}
			class="flex h-12 shrink-0 items-center px-8"
		>
			{company.logo ? (
				<img
					src={company.logo}
					alt={company.label}
					loading="lazy"
					class="h-9 w-auto object-contain opacity-60 brightness-0 transition-opacity hover:opacity-90"
				/>
			) : (
				<span class="text-sm font-semibold tracking-widest whitespace-nowrap text-ink-soft/70 uppercase transition-colors hover:text-ink-soft">
					{company.label}
				</span>
			)}
		</a>
	);
}

export function Brands() {
	return (
		<section id="brands" class="reveal scroll-mt-20 border-t border-hairline py-16">
			<div class="mx-auto max-w-5xl px-6 md:px-12">
				<h2 class="font-display text-2xl text-ink">Brands I've built for</h2>
				<p class="mt-1 text-sm text-ink-faint">Client work at XGen AI — now part of Zoovu.</p>
			</div>

			<div class="group mt-10 overflow-hidden motion-reduce:hidden">
				<div class="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
					{[...companies, ...companies].map((c, i) => (
						<div key={`${c.label}-${i}`} aria-hidden={i >= companies.length}>
							<LogoTile company={c} />
						</div>
					))}
				</div>
			</div>

			<div class="mx-auto mt-10 hidden max-w-5xl flex-wrap items-center px-6 motion-reduce:flex md:px-12">
				{companies.map((c) => (
					<LogoTile key={c.label} company={c} />
				))}
			</div>
		</section>
	);
}
```

- [ ] **Step 2: Add `<Brands />` to `src/index.tsx`**

Update the import block and `App` body (rest of file unchanged):

```tsx
import { hydrate, prerender as ssr } from 'preact-iso';
import { Brands } from './components/Brands';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import './styles.css';

export function App() {
	return (
		<div class="min-h-screen bg-cream text-ink">
			<Nav />
			<main>
				<Hero />
				<Brands />
			</main>
			<Footer />
		</div>
	);
}
```

- [ ] **Step 3: Build and verify**

```bash
bun run build
grep -c "Brands I've built for" dist/index.html
grep -o 'company_logos/[a-z]*\.png' dist/index.html | sort | uniq -c
```

Expected: first grep prints `1`. Second lists 9 distinct logo files, each with count 3 (marquee ×2 + static fallback ×1).

- [ ] **Step 4: Manual preview pass**

```bash
bun run preview
```

Marquee scrolls continuously, pauses on hover, logos are uniform ink tone, text tiles (Haworth, Sonos, Bambi Baby, Away Travel, Zoovu) align with logo tiles. In devtools, emulate `prefers-reduced-motion: reduce` → marquee replaced by static wrapped grid. Ctrl-C when done.

- [ ] **Step 5: Commit**

```bash
git add src/components/Brands.tsx src/index.tsx
git commit -m "Add brands logo marquee with reduced-motion fallback

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 6: Work and Contact sections

**Files:**
- Create: `src/components/Work.tsx`, `src/components/Contact.tsx`
- Modify: `src/index.tsx`

- [ ] **Step 1: Create `src/components/Work.tsx`**

```tsx
import { projects } from '../data/projects';

export function Work() {
	return (
		<section id="work" class="reveal mx-auto max-w-5xl scroll-mt-20 px-6 py-16 md:px-12">
			<h2 class="font-display text-2xl text-ink">Selected work</h2>
			<div class="mt-8 grid gap-4 md:grid-cols-2">
				{projects.map((p) => (
					<article
						key={p.title}
						class="rounded-xl bg-card p-6 shadow-[0_1px_3px_rgba(28,25,23,0.08)] transition-shadow hover:shadow-[0_2px_8px_rgba(28,25,23,0.12)]"
					>
						<p class="text-[11px] tracking-[0.15em] text-ink-faint uppercase">
							{p.category}
						</p>
						<h3 class="mt-2 font-semibold text-ink">{p.title}</h3>
						<p class="mt-2 text-sm leading-relaxed text-ink-soft">{p.description}</p>
					</article>
				))}
			</div>
		</section>
	);
}
```

- [ ] **Step 2: Create `src/components/Contact.tsx`**

Icons are inline SVGs (feather outlines) — no icon library.

```tsx
function MailIcon() {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<rect x="2" y="4" width="20" height="16" rx="2" />
			<path d="m22 7-10 5L2 7" />
		</svg>
	);
}

function GithubIcon() {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
		</svg>
	);
}

function LinkedinIcon() {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v1.5A6 6 0 0 1 16 8z" />
			<rect x="2" y="9" width="4" height="12" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	);
}

export function Contact() {
	return (
		<section id="contact" class="reveal scroll-mt-20 border-t border-hairline px-6 py-20 text-center">
			<h2 class="font-display text-3xl text-ink">Let's build something.</h2>
			<p class="mt-3 text-sm text-ink-faint">
				Always open to interesting problems · Las Vegas, NV
			</p>
			<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
				<a
					href="mailto:contact@heyitsmass.dev"
					class="flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-sm text-cream transition-opacity hover:opacity-85"
				>
					<MailIcon />
					contact@heyitsmass.dev
				</a>
				<a
					href="https://github.com/heyitsmass"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
					class="rounded-full border border-hairline p-2.5 text-ink transition-colors hover:border-ink-faint"
				>
					<GithubIcon />
				</a>
				<a
					href="https://linkedin.com/in/heyitsmass"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
					class="rounded-full border border-hairline p-2.5 text-ink transition-colors hover:border-ink-faint"
				>
					<LinkedinIcon />
				</a>
			</div>
		</section>
	);
}
```

- [ ] **Step 3: Add both sections to `src/index.tsx`**

Update the import block and `App` body (rest of file unchanged):

```tsx
import { hydrate, prerender as ssr } from 'preact-iso';
import { Brands } from './components/Brands';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Work } from './components/Work';
import './styles.css';

export function App() {
	return (
		<div class="min-h-screen bg-cream text-ink">
			<Nav />
			<main>
				<Hero />
				<Brands />
				<Work />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
```

- [ ] **Step 4: Build and verify**

```bash
bun run build
grep -c 'Selected work' dist/index.html
grep -c 'Product Mapping Service' dist/index.html
grep -c 'contact@heyitsmass.dev' dist/index.html
```

Expected: build exits 0; greps print `1`, `1`, `2` (mailto href + visible text).

- [ ] **Step 5: Manual preview pass**

```bash
bun run preview
```

Four cards in a 2-col grid (1-col below 768px), hover lifts card shadow; contact pills and icon buttons render; anchors from nav land on the right sections. Ctrl-C when done.

- [ ] **Step 6: Commit**

```bash
git add src/components/Work.tsx src/components/Contact.tsx src/index.tsx
git commit -m "Add selected work cards and contact section

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 7: Reveal-on-scroll hook

**Files:**
- Create: `src/hooks/useReveal.ts`
- Modify: `src/index.tsx`

- [ ] **Step 1: Create `src/hooks/useReveal.ts`**

The CSS side (`.js .reveal` hidden state) already exists from Task 2; this adds `.reveal-visible` as sections enter the viewport. Reduced-motion users get everything visible immediately (CSS also enforces this).

```ts
import { useEffect } from 'preact/hooks';

export function useReveal() {
	useEffect(() => {
		const els = document.querySelectorAll('.reveal');
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			els.forEach((el) => el.classList.add('reveal-visible'));
			return;
		}
		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('reveal-visible');
						io.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.15 },
		);
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}
```

- [ ] **Step 2: Call the hook in `App` (`src/index.tsx`)**

Add the import and the call as the first line of `App` (rest of file unchanged):

```tsx
import { useReveal } from './hooks/useReveal';
```

```tsx
export function App() {
	useReveal();
	return (
		<div class="min-h-screen bg-cream text-ink">
			<Nav />
			<main>
				<Hero />
				<Brands />
				<Work />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
```

- [ ] **Step 3: Build and manual preview pass**

```bash
bun run build
bun run preview
```

Build exits 0. In the browser: sections below the fold fade up as you scroll; with devtools reduced-motion emulation everything is visible with no animation; with JS disabled (devtools → Ctrl+Shift+P → "Disable JavaScript", reload) all content is still visible. Ctrl-C when done.

- [ ] **Step 4: Commit**

```bash
git add src/hooks/useReveal.ts src/index.tsx
git commit -m "Add IntersectionObserver section reveals with reduced-motion and no-JS fallbacks

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 8: Cleanup — unused assets, README, CLAUDE.md

**Files:**
- Delete: `public/logo.svg`, `public/loader.svg`, `public/images/dashboard.png`
- Modify: `README.md` (rewrite), `CLAUDE.md` (rewrite; note it is currently untracked — this commit adds it)

- [ ] **Step 1: Remove assets only used by the old site**

`logo.svg`/`loader.svg` backed the removed 8-segment loader; `dashboard.png` was referenced by nothing.

```bash
cd /home/brandon/my-website-next
git rm --quiet public/logo.svg public/loader.svg public/images/dashboard.png
```

- [ ] **Step 2: Rewrite `README.md`**

```markdown
# heyitsmass.dev

Personal portfolio — a single prerendered page built with [Preact](https://preactjs.com),
[Vite](https://vite.dev), and [Tailwind CSS v4](https://tailwindcss.com), managed with
[bun](https://bun.sh). Deployed on Cloudflare Pages.

## Commands

​```bash
bun install       # install dependencies
bun run dev       # dev server (http://localhost:5173)
bun run build     # prerendered static build → dist/
bun run preview   # serve the built output (http://localhost:4173)
​```

## How it works

Content lives in typed data modules (`src/data/`); `@preact/preset-vite` prerenders the page to
static HTML at build time, and Preact (~4 kB) hydrates only for the mobile menu. All motion is
CSS-driven with `prefers-reduced-motion` fallbacks.
```

(Remove the `​` zero-width guards around the code fence when writing the file — they exist only to nest the fence in this plan.)

- [ ] **Step 3: Rewrite `CLAUDE.md`**

```markdown
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
  marquee keyframes) live in `@theme` in `src/styles.css`. No `tailwind.config.js`.
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
```

- [ ] **Step 4: Build to confirm nothing referenced the deleted assets**

```bash
bun run build
```

Expected: exits 0.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "Remove unused assets; rewrite README and CLAUDE.md for the new stack

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 9: Final verification and Cloudflare Pages handoff

**Files:**
- None created — verification + manual deployment instructions.

- [ ] **Step 1: Clean build from scratch**

```bash
cd /home/brandon/my-website-next
rm -rf dist node_modules
bun install
bun run build
```

Expected: exits 0. `bun.lock` unchanged (`git status` clean apart from nothing).

- [ ] **Step 2: Bundle size check**

```bash
du -sh dist
find dist/assets -name '*.js' -exec du -h {} +
```

Expected: total JS well under 50 kB (target ~15–25 kB; the old Next build shipped 100+ kB).

- [ ] **Step 3: Full manual pass on the preview server**

```bash
bun run preview
```

Checklist at http://localhost:4173:
- View-source shows full prerendered content (name, brands, projects) — not an empty `#app`.
- Desktop + mobile viewport pass, hamburger works, anchors land correctly (`scroll-mt` offsets).
- Reduced-motion emulation: no marquee/reveals, static logo grid.
- JS disabled: all content visible.
- Lighthouse (devtools, or `bunx lighthouse http://localhost:4173 --chrome-flags=--headless` if Chrome is available): ≥95 on Performance, Accessibility, Best Practices, SEO. Fix regressions before proceeding.

- [ ] **Step 4: Present deployment handoff to the user (manual steps, their accounts)**

Do not push without confirmation. Tell the user:

1. `git push origin main` (confirm they're ready — this puts the rewrite on the default branch; gh is authenticated as **heyitsmass**).
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → select `heyitsmass/my-website-next`. Build command: `bun run build`. Build output directory: `dist`. (Pages detects bun via the committed `bun.lock`.)
3. After first deploy verifies, add the custom domain `heyitsmass.dev` in the Pages project and move DNS to Cloudflare as prompted.
4. Once DNS has propagated, delete/disconnect the Vercel project. Vercel keeps serving until then — no gap.

---

## Self-review notes

- **Spec coverage:** hosting/static output (T1, T9), trimmed content (T3–T6), logo roster + framing + placeholders (T3, T5), warm-minimal tokens (T2), CSS-only motion + reduced-motion + no-JS (T2, T5, T7), bun (T1, T9), in-place rebuild w/ history (T1, T8), Cloudflare handoff (T9), CLAUDE.md/README follow-up (T8). Dropped-per-spec items (skills bars, stats, About, Massive Dev button, parallax) are absent from every component.
- **Type consistency:** `Company`/`companies`, `Project`/`projects`, `useReveal`, component names match across tasks; token names (`cream`, `card`, `ink`, `ink-soft`, `ink-faint`, `hairline`, `font-display`, `animate-marquee`) match between Task 2 CSS and all component classes.
- **No placeholders:** every code step contains complete file contents or exact edit blocks.

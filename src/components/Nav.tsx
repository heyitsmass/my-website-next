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

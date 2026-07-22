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

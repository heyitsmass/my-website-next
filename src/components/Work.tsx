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

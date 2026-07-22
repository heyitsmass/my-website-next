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
				<span class="text-sm font-semibold tracking-widest whitespace-nowrap text-ink-faint uppercase transition-colors hover:text-ink-soft">
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
				<p class="mt-1 text-sm text-ink-faint">
					Client work at XGen AI — now part of Zoovu.
				</p>
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

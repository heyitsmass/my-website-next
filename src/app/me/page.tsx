import { PropsWithChildren } from 'react';

export default function Page() {
	return (
		<section className="px-4 border border-solid border-zinc-700 shadow-md w-full  rounded-md bg-zinc-800 h-max">
			<h2>Hi, I&apos;m Brandon</h2>
			<div className="flex flex-col gap-2">
				<section>
					<p>Full stack engineer. I like to build things.</p>
					<p className="text-sm italic text-zinc-400">
						From frontend design to backend architecture, Everything falls into place.
					</p>
				</section>
				<p>
					I got my start during college while earning my B.S.C building small API&apos;junior developer making
					internal tools to optimize performance and reduce training overhead.
				</p>
				<p>From there I&apos;ve branched out further building full stack applications using multiple different techniques.</p>
				<section>
					<p>
						I&apos;ve primarily worked on integrating frontend interfaces in the ecommerce space and designing robust UX
						for companies like <b>Gucci</b>, <b>Armani</b>, <b>Valentino</b>, <b>Pucci</b>, and other large brands
						delivering consistent and exceptional implementations.
					</p>
				</section>
				<p>
					Whether carousel design, search implementations, cart flyouts, product card and third party integrations. A
					streamlined design, approval, implementation and testing methods; Pumping out high quality work in record time
					becomes a breeze.
				</p>
				<section>
					<p>
						Outside of the ecommerce space, I enjoy tinkering with different languages, finding optimized solutions
						and constantly refactoring old designs to keep up with modern standards.
					</p>
					<p>
						Additionally, security is of upmost importance which is why every website I host is constantly monitored
						for new CVE, CWE or other security incidents that may impact performance, user data or degrade the service
					</p>
					<p>
						With a huge understanding of accessibility, semantic HTML, responsive design patterns, and elegant
						backends; I can gaurentee we can find a solution and if we can&apos;t, we&apos;ll build it ourselves.
					</p>
				</section>
				<p>
					So, Lets build something great! 📤{' '}
					<a href="mailto:inquiry@heyitsmass.dev" className="text-blue-500">
						inquiry@heyitsmass.dev
					</a>
				</p>
				<p className="italic text-sm text-zinc-400">
					Nothing should be unacheivable as a software engineer, You just have to put the pieces together. Never limit
					your own potential
				</p>
			</div>

			<p className="text-xs text-zinc-500"> - Made with love by ❤️ Mass ❤️</p>
		</section>
	);
}

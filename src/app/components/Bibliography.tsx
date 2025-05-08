'use client';
import { BriefcaseIcon, HeartIcon } from '@heroicons/react/24/solid';
import Switch from 'react-switch';
import useLocalStorageState from '../hooks/useLocalStorageState';

function InformalBibliography() {
	return (
		<>
			<p>A Full Stack Engineer who genuinely enjoys bringing ideas to life through code.</p>
			<p>
				From frontend design to backend architecture, I thrive on connecting the pieces to create seamless digital
				solutions. My start came during college (while earning my B.S.C.) where I cut my teeth building internal tools as
				a junior developer, focusing on optimizing performance and efficiency.
			</p>
			<p>
				Since then, I&apos;ve broadened my skills, building full-stack applications and specializing in the e-commerce space.
				I&apos;ve had the privilege of designing and implementing engaging frontend interfaces and user experiences for major
				brands like Gucci, Valentino, Pucci, Arctic Fox, the list continues. Whether it&apos;s refining carousel interactions,
				implementing powerful search, designing intuitive cart flyouts, or integrating third-party services, I focus on
				delivering polished, high-quality work efficiently.
			</p>
			<p>
				Outside of client projects, I&apos;m always exploring new technologies, optimizing code, and refactoring older projects
				to meet current best practices. I also place a high emphasis on security, actively monitoring projects I manage
				for vulnerabilities to ensure data and service integrity.
			</p>
			<p>
				With deep knowledge of accessibility, semantic HTML, responsive design, and backend systems, I love a good
				challenge. If a solution doesn&apos;t exist, I&apos;m excited by the prospect of building it.
			</p>
			<p>Ready to collaborate? Let&apos;s build something great together!</p>
			<span>
				📤 <a href="mailto:inquiry@heyitsmass.dev">Lets connect!</a>
			</span>
			<p>
				*My philosophy: Nothing is unachievable in software engineering – it&apos;s just about finding the right way to put the
				pieces together.*
			</p>
		</>
	);
}

function FormalBibliography() {
	return (
		<>
			<p>A Full Stack Engineer passionate about building high-quality digital experiences.</p>
			<p>
				My journey began during my B.S.C., developing internal tools as a junior developer to optimize performance and
				reduce training overhead. Since then, I&apos;ve expanded my expertise across the full stack.
			</p>
			<p>
				My primary focus has been developing frontend interfaces and robust UX solutions within the e-commerce sector for
				leading brands, including Gucci, Armani, Valentino, Pucci, and Arctic Fox. I have a proven track record of
				delivering exceptional implementations for features like carousels, search, cart flyouts, product displays, and
				third-party integrations. My streamlined approach to design, approval, implementation, and testing ensures
				high-quality results delivered efficiently.
			</p>
			<p>
				Beyond e-commerce, I continuously explore different languages, seek optimized solutions, and refactor designs to
				align with modern standards. Security is paramount in my work; I prioritize monitoring for potential
				vulnerabilities (CVEs, CWEs) to protect performance, user data, and service integrity.
			</p>
			<p>
				With a strong foundation in accessibility, semantic HTML, responsive design, and backend architecture, I&apos;m
				confident in tackling complex challenges and engineering effective solutions.
			</p>
			<p>Let&apos;s build something great.</p>
			<a href="mailto:inquiry@heyitsmass.dev">📤 inquiry@heyitsmass.dev</a>
			<p></p>
		</>
	);
}

export default function Bibliography() {
	const [isFormal, setIsFormal] = useLocalStorageState('is-formal', false);

	return (
		<section className="px-8 border border-solid border-zinc-700 shadow-md w-full rounded-md bg-zinc-900 h-max max-w-5xl grid grid-rows-[auto_1fr]">
			<div className="flex justify-between">
				<h2>Hi, I&apos;m Brandon.</h2>
				<label className="flex items-center gap-2 text-xs">
					<span>Toggle formality</span>
					<Switch
						onChange={(checked) => setIsFormal(checked)}
						checked={isFormal}
						checkedIcon={
							<BriefcaseIcon width={18} className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2" />
						}
						uncheckedIcon={
							<HeartIcon width={18} className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2" />
						}
					/>
				</label>
			</div>
			{isFormal ? <FormalBibliography /> : <InformalBibliography />}
		</section>
	);
}

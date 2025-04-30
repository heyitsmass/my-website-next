'use client';

import { HourglassIcon } from 'lucide-react';
import SkillBadge from './SkillBadge';
import { skills } from '@/app/shared';

const ComingSoon = () => {
	return (
		<>
			<h3>Coming Soon</h3>
			<HourglassIcon size={60} />
			<desc className="text-sm max-w-xl pt-4 leading-relaxed text-zinc-300">
				Eventually this will become a showroom of badges listing Skills, Services, Stacks and Languages. Each detailed
				with a proficiency level and total professional experience
			</desc>
		</>
	);
};

export default function Skills() {
	return (
		<>
			<section className="flex flex-col w-full items-center pb-4">
				<div className="p-8 flex flex-col gap-6 w-full">
					{Object.entries(skills)
						.filter(([, v]) => v.length)
						.map(([label, values]) => {
							return (
								<section key={label} className="w-full border border-soli">
									<h2>{label}</h2>
									<ol className="list-none m-0 p-0 gap-x-4 gap-y-2 flex h-max relative">
										{values.map((v) => (
											<SkillBadge key={v.name} {...v} />
										))}
									</ol>
								</section>
							);
						})}
				</div>
			</section>
		</>
	);
}

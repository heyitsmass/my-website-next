import { PropsWithChildren } from 'react';
import { IconLink } from '../components';
import { skillCategories, skillIcons } from '../data/const';

export default function Layout({ children }: PropsWithChildren) {
	return (
		<section className="page sleek-scrollbar grid grid-rows-[auto_1fr] h-max-screen gap-4 overflow-hidden">
			<div className="flex gap-8 border box-border w-full justify-center">
				{Object.entries(skillCategories).map(([k, v]) => {
					return (
						<IconLink
							key={k}
							Icon={skillIcons[k as keyof typeof skillIcons]}
							href={`/skills/${k}`}
							text={v}
							width={18}
						/>
					);
				})}
			</div>
			<div className="flex flex-wrap gap-4 justify-center items-center overflow-scroll">{children}</div>
		</section>
	);
}

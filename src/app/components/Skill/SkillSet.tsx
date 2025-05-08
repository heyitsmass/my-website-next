import type { TSkillSet } from '@/types';
import { humanReadable } from '@/utils/lang';
import SkillGroup from './SkillGroup';

export type SkillSetProps = { label: string; value: TSkillSet };

export default function SkillSet({ label, value }: SkillSetProps) {
	return (
		<section className="w-full">
			<h2>{label}</h2>
			<div className="flex flex-col p-4 gap-4">
				{Object.entries(value).map(([label, value]) => {
					return <SkillGroup key={label} label={humanReadable(label)} value={value} />;
				})}
			</div>
		</section>
	);
}

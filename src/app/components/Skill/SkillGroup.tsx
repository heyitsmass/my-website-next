import { fetchColor } from '@/app/data/colors';
import SkillBadge from '../SkillBadge';
import { TSkillGroup } from '@/types';

export type SkillGroupProps = {
	label: string;
	value: TSkillGroup;
};

export default function SkillGroup({ label, value }: SkillGroupProps) {
	return (
		<section className="w-full border bg-zinc-800 border-zinc-700 rounded-2xl border-solid px-4 pb-4">
			<h3>{label}</h3>
			<ol className="list-none m-0 p-0 gap-x-4 gap-y-2 flex h-max relative flex-wrap justify-center">
				{value.map((v) => (
					<SkillBadge key={v.name} {...v} color={fetchColor(v.name)} />
				))}
			</ol>
		</section>
	);
}

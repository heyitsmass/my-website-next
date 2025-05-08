import { SkillBadge } from '@/app/components';
import { fetchColor, skills } from '@/app/data';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const skillSet = skills.filter((v) => v.type === slug);
	return (
		<>
			{skillSet.map((skill) => (
				<SkillBadge key={skill.name} {...skill} color={fetchColor(skill.name)} />
			))}
		</>
	);
}

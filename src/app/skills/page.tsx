'use server';
import { SkillBadge } from '../components';
import { fetchColor, skills } from '../data';

export default async function Skills() {
	return skills.map((skill) => <SkillBadge key={skill.name} {...skill} color={fetchColor(skill.name)} />);
}

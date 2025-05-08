import SkillGroup, { SkillGroupProps } from './SkillGroup';
import SkillSet, { SkillSetProps } from './SkillSet';

export default function Skill<T extends SkillGroupProps | SkillSetProps>({ label, value }: T) {
	if (!Array.isArray(value)) return <SkillSet label={label} value={value} />;
	return <SkillGroup label={label} value={value} />;
}

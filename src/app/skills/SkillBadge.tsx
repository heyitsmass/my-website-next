import { IconType, SiNestjs, SiReact } from '@icons-pack/react-simple-icons';
import { Code, Cpu, Database, Globe, LineChart, type LucideIcon } from 'lucide-react';
import { use } from 'react';

// Map of skill types to their respective icons
const skillIcons = {
	code: Code,
	data: Database,
	web: Globe,
	ai: Cpu,
	analytics: LineChart,
};

export type SkillBadgeProps = {
	name: string;
	icon?: IconType;
	rating?: number;
	years?: number;
	type?: keyof typeof skillIcons;
};

const Rating = ({ rating = 4, color = '#3b82f6' }: Pick<SkillBadgeProps, 'rating'> & { color: string }) => {
	return Array.from({ length: rating + 1 }).map((_, i) => {
		const isActive = i < rating;
		return (
			<div
				key={i.toString()}
				className={`h-2 w-8 rounded-full transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-30'}`}
				style={{ backgroundColor: isActive ? color : '#e5e7eb' }}
			/>
		);
	});
};

export default function SkillBadge({
	name = 'React',
	years = 3,
	rating = 4,
	type = 'code',
	icon: Icon,
	color: Color,
}: SkillBadgeProps & {
	color: Promise<string>;
}) {
	const color = use(Color);
	// Cap rating between 1-5
	const safeRating = Math.min(5, Math.max(1, rating));
	// Get the appropriate icon component
	const IconComponent = skillIcons[type];

	return (
		<div className="w-48 h-48 p-6 rounded-lg shadow-md bg-zinc-900 flex flex-col items-center justify-between relative overflow-hidden transition-all duration-300 hover:shadow-lg">
			{/* Accent color top bar */}
			<div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: color }} />

			{/* Skill name */}
			<div className="text-lg font-bold  mb-1 text-center w-full truncate">{name}</div>

			{/* Years label */}
			<div className="text-sm text-gray-500 mb-4">
				{years} {years === 1 ? 'year' : 'years'}
			</div>

			{/* Icon container */}
			<div className="w-max h-max absolute left-4 top-4">
				<IconComponent size={16} color={color} />
			</div>

			{/* Icon container */}
			<div
				className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
				style={{ backgroundColor: `${color}10` }} // Very light version of the color
			>
				{Icon && <Icon size={32} color={color} />}
			</div>

			{/* Rating visualization */}
			<div className="flex flex-col space-y-1 items-center w-full">
				<div className="flex flex-row space-x-1 w-full justify-center">
					<Rating rating={safeRating} color={color} />
				</div>
				<div className="text-xs text-gray-500 mt-1">
					{['Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'][safeRating - 1]}
				</div>
			</div>
		</div>
	);
}

// Export the showcase example as default
export { SkillBadge };

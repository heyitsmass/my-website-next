import { skillIcons } from '@/app/data/const';
import { IconType } from '@icons-pack/react-simple-icons';
import { use } from 'react';
import Rating from './Rating';

// Map of skill types to their respective icons

export type SkillBadgeProps = {
	name: string;
	icon?: IconType;
	rating?: number;
	years?: number;
	type?: keyof typeof skillIcons;
	color: Promise<string>;
};

export default function SkillBadge({
	name,
	years = 3,
	rating = 4,
	type = 'code',
	icon: Icon,
	color: colorPromise,
}: SkillBadgeProps) {
	const color = use(colorPromise);
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

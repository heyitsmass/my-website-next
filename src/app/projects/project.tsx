'use client';
import { useState } from 'react';
import { SiGithub } from '@icons-pack/react-simple-icons';

import { ExternalLink, Clock } from 'lucide-react';
import { SvgIcon } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

// Status labels corresponding to each level
const statusLabels = ['Concept', 'In Progress', 'Halfway', 'Almost Done', 'Completed'];

// Status gradients for each level
const statusGradients = {
	0: 'from-red-600 to-red-400',
	1: 'from-orange-600 to-orange-400',
	2: 'from-yellow-600 to-yellow-400',
	3: 'from-blue-600 to-blue-400',
	4: 'from-emerald-600 to-emerald-400',
};

type TStatus = keyof typeof statusGradients;

// Status indicator component with enhanced styling
const StatusIndicator = ({ status }: { status: TStatus }) => {
	// Convert status to a percentage for visual representation
	const percentage = (status / 4) * 100;

	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<Clock size={16} className="text-gray-400 mr-2" />
					<span className="text-sm font-medium text-gray-300">{statusLabels[status]}</span>
				</div>
				<span className="text-sm font-medium text-gray-300">{status}/4</span>
			</div>
			<div className="w-full bg-gray-800 rounded-full h-2.5">
				<div
					className={`h-2.5 rounded-full bg-gradient-to-r ${statusGradients[status]}`}
					style={{ width: `${percentage}%` }}
				></div>
			</div>
		</div>
	);
};

// Badge component for technologies or categories
const Badge = ({ text }: { text: string }) => (
	<span className="px-2 py-1 text-xs font-medium rounded-full bg-opacity-20 bg-purple-700 text-purple-300 backdrop-blur-sm">
		{text}
	</span>
);

export type Project = {
	name: string;
	description: string;
	imageSrc?: string;
	status?: TStatus;
	projectUrl?: string | null;
	tags?: string[];
};
// Main project card component with dark theme and gradients
export default function ProjectCard({ name, description, status = 0, tags = [] }: Project) {
	const [isHovered, setIsHovered] = useState(false);
	const urlName = name.toLowerCase();

	return (
		<div className="rounded-md grid grid-rows-[auto,_1fr] bg-zinc-800 border-zinc-700 shadow-md">
			<div
				className="relative z-10 rounded-md  overflow-hidden"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="relative min-h-64 *:rounded-tl-md *:rounded-tr-md">
					<Image
						className={`object-cover transition-all duration-700 filter ${
							isHovered ? 'scale-110 blur-sm' : 'scale-100'
						}`}
						src={`/project-icons/${urlName}.svg`}
						alt={name}
						fill
					/>
					<div
						className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
							isHovered ? 'opacity-100' : 'opacity-0'
						}`}
					>
						<div className="flex gap-4">
							<Link
								href={`/projects/${urlName}`}
								className="contents text-white hover:shadow-lg transition-all duration-300"
							>
								<ExternalLink size={20} />
							</Link>
							<Link
								href={`https://github.com/heyitsmass/${urlName}`}
								target="_blank"
								rel="noopener noreferrer"
								className="contents text-white hover:shadow-lg transition-all duration-300"
							>
								<SiGithub title="Github" size={20} />
							</Link>
						</div>
					</div>
				</div>
			</div>

			<section className="grid grid-rows-[max-content,repeat(3,minmax(auto,1fr))] px-4">
				<p className="font-bold leading-6">{name}</p>
				<p className="text-sm leading-relaxed pb-4 text-slate-300">{description}</p>
				<div className="flex gap-2 h-max flex-wrap items-center">
					{tags.map((tag) => (
						<Badge key={tag} text={tag} />
					))}
				</div>
				<StatusIndicator status={status} />
			</section>
		</div>
	);
}

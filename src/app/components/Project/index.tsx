'use client';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { useState } from 'react';

import { EnumStatus } from '@/types';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Badge from './Badge';
import StatusIndicator from './StatusIndicator';

export type ProjectProps = {
	name: string;
	description: string;
	status?: EnumStatus;
	projectUrl?: string | null;
	tags?: string[];
};

const ProjectLinks = ({ isHovered, name }: Pick<ProjectProps, 'name'> & { isHovered: boolean }) => {
	return (
		<div
			className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
				isHovered ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<div className="flex gap-4">
				<Link href={`/projects/${name}`} className="contents text-white hover:shadow-lg transition-all duration-300">
					<ExternalLink size={20} />
				</Link>
				<Link
					href={`https://github.com/heyitsmass/${name}`}
					target="_blank"
					rel="noopener noreferrer"
					className="contents text-white hover:shadow-lg transition-all duration-300"
				>
					<SiGithub title="Github" size={20} />
				</Link>
			</div>
		</div>
	);
};

const ProjectImage = ({ name }: Pick<ProjectProps, 'name'>) => {
	const [isHovered, setIsHovered] = useState(false);
	const urlName = name.toLowerCase();
	return (
		<div
			className="relative z-10 rounded-md  overflow-hidden"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="relative min-h-64 *:rounded-tl-md *:rounded-tr-md">
				<Image
					className={`object-cover transition-all duration-700 filter ${isHovered ? 'scale-110 blur-sm' : 'scale-100'}`}
					src={`/${urlName}.svg`}
					alt={name}
					fill
				/>
				<ProjectLinks isHovered={isHovered} name={urlName} />
			</div>
		</div>
	);
};

const ProjectInfo = ({ name, description, tags, status = EnumStatus.CONCEPT }: Omit<ProjectProps, 'projectUrl'>) => {
	return (
		<section className="grid grid-rows-[max-content,repeat(3,minmax(auto,1fr))] px-4">
			<p className="font-bold leading-6">{name}</p>
			<p className="text-sm leading-relaxed pb-4 text-slate-300">{description}</p>
			<div className="flex gap-2 h-max flex-wrap items-center">
				{tags?.map((tag) => (
					<Badge key={tag} text={tag} />
				))}
			</div>
			<StatusIndicator status={status} />
		</section>
	);
};

/**
 *
 * @param param0
 * @returns
 */

export default function Project({ name, description, status = 0, tags = [] }: ProjectProps) {
	return (
		<div className="w-full bg-zinc-900">
			<ProjectImage name={name} />

			<div className="px-4 pb-4">
				<p>{name}</p>
				<p className="text-sm text-zinc-400 h-[4rem] text-ellipsis">{description}</p>
				<div className='flex flex-col gap-4'>
					<div className="flex gap-2 h-max flex-wrap items-center">
						{tags?.map((tag) => (
							<Badge key={tag} text={tag} />
						))}
					</div>
					<StatusIndicator status={status} />
				</div>
			</div>
		</div>
	);
}

/**
 * 			<ProjectImage name={name} />
			<ProjectInfo name={name} description={description} status={status} tags={tags} />
 */

import { PropsWithChildren } from 'react';
import ProjectCard from './project';
import { projects } from '../shared';

export default function Projects({ children }: PropsWithChildren) {
	return (
		<div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-4">
			{projects.map((proj) => (
				<ProjectCard key={proj.name} {...proj} />
			))}
		</div>
	);
}

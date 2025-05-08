import { Project } from '../components';
import { projects } from '../data';

export default async function Projects() {
	return (
		<section className="page">
			<div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-4 w-full">
				{projects.map((proj) => (
					<Project key={proj.name} {...proj} />
				))}
			</div>
		</section>
	);
}

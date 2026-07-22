export interface Project {
	category: string;
	title: string;
	description: string;
}

export const projects: Project[] = [
	{
		category: 'E-commerce Integrations',
		title: 'Product Mapping Service',
		description:
			'Backend redesign that cut system resources 40%, sync times 96%, and streamlined data mapping by 80%.',
	},
	{
		category: 'Web Application',
		title: 'SaaS Training Platform',
		description:
			'Enterprise dashboard with complex data visualization for monitoring and managing internal employee training.',
	},
	{
		category: 'Web Design',
		title: 'Interface Redesign',
		description:
			'User-facing overhaul that improved first contentful paint 60%, engagement 30%, and retention 15%.',
	},
	{
		category: 'Architecture',
		title: 'Systems Design',
		description:
			'Full-system redesign spanning frontend, database writes, and migrations — 40% less maintenance downtime.',
	},
];

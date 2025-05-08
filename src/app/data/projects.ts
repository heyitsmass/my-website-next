import { EnumStatus } from '@/types';
import { ProjectProps } from '../components/Project';

const projects = [
	{
		name: 'Track',
		description: 'A simple git-like solution for frontend version control to reduce errors while merging changes',
		status: EnumStatus.HALFWAY,
		tags: ['Python'],
	},
	{
		name: 'Crypt',
		description: 'A password generator that hides passwords in plain view using steganography',
		status: EnumStatus.CONCEPT,
		tags: ['AWS', 'Electron', 'Python'],
	},
	{
		name: 'Secure',
		description: 'A system for securing frontend - backend communications via client secured channels.',
		status: EnumStatus.CONCEPT,
		tags: ['C++', 'Javascript'],
	},
	{
		name: 'Audio',
		description: 'Utility for levelling audio to a consistent range for mixing, beatmapping and key analysis.',
		status: EnumStatus.ALMOST_DONE,
		tags: ['Python'],
	},
	{
		name: 'Color',
		description:
			'A tailwind palette visualizer and explorer based on personal implementation of coolors and material UI design.',
		status: EnumStatus.ALMOST_DONE,
		tags: ['Javascript', 'React', 'Tailwind CSS'],
	},
	{
		name: 'Pass',
		description: 'An open source password manager akin to OnePass',
		status: EnumStatus.CONCEPT,
		tags: ['Electron', 'React', 'Tailwind'],
	},
	{
		name: 'Chain',
		description: 'An experimental reimplementation of secure frontend communications via blockchain',
		status: EnumStatus.CONCEPT,
		tags: ['C++'],
	},
	{
		name: 'Templates',
		description:
			"A unified source for browsing CVE, CWE, CVSS Severity score and nuclei templates. Similar to ProjectDiscovery's",
		status: EnumStatus.CONCEPT,
		tags: ['React', 'Tailwind CSS'],
	},
	{
		name: 'Resolve',
		description: 'A multi-threaded tool for efficiently validating and resolving domain names and subdomains.',
		status: EnumStatus.COMPLETED,
		tags: ['Python'],
	},
	{
		name: 'Replicate',
		description:
			'A system for replicating websites for easy localhost modification and hot-reload for on-the-fly changes intended for production.',
		status: EnumStatus.CONCEPT,
		tags: ['Python', 'Javascript', 'HTML', 'CSS'],
	},
	{
		name: 'Render',
		description: 'A backend system for statically rendering template languages with exceptional caching speed.',
		status: EnumStatus.CONCEPT,
		tags: ['Node.js', 'Liquid', 'Jinja2', 'Markdown'],
	},
	{
		name: 'Queens',
		description:
			'Simple algorithm to solve a chessboard of nxn size with n number of queens such that no queen is attacking another.',
		status: EnumStatus.COMPLETED,
		tags: ['C++', 'Python'],
	},
] as ProjectProps[];

export const activeProjects = projects.reduce((acc, curr) => {
	acc.add(curr.name);
	acc.add(curr.name.toLowerCase());
	return acc;
}, new Set<(typeof projects)[number]['name']>());

export default projects;

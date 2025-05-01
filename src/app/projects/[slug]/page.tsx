import { redirect, RedirectType } from 'next/navigation';
import { activeProjects } from '../../shared';
import { HourglassIcon } from 'lucide-react';
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	if (!activeProjects.has(slug)) redirect('/', RedirectType.replace);
	return (
		<section className="flex flex-col items-center pb-4">
			<h3>Coming Soon</h3>
			<HourglassIcon size={60} />
			<desc className="text-sm max-w-xl pt-4 leading-relaxed text-zinc-300">
				Eventually this will become a showroom for the current project. You&apos;ll be able to view the readme, implementation
				steps and example of the code running.
			</desc>
		</section>
	);
}

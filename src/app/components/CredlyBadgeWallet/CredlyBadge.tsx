import { Badge } from '@/types';
import Image from 'next/image';

export default function CredlyBadge({
	id,
	issued_at_date,
	image_url,
	badge_template: {
		name,
		issuer: {
			entities: [
				{
					entity: { name: issuer },
				},
			],
		},
		skills,
	},
}: Badge) {
	return (
		<a
			href={`https://www.credly.com/badges/${id}`}
			onClick={(e) => {
				const res = confirm('Are you sure you want to navigate to Credly?');
				if (!res) e.preventDefault();
			}}
			className="no-underline flex flex-col items-center border border-solid bg-zinc-800 border-zinc-900 shadow-md rounded-lg pt-2"
		>
			<div className="relative in-w-xl">
				<Image src={image_url} alt={name} width={120} height={120} />
			</div>
			<div className="px-4">
				<p className="line-clamp-2 font-semibold">{name}</p>
				<p className="line-clamp-2 text-sm">{issuer}</p>
				<p className="text-xs text-zinc-400">Issued {issued_at_date.toString()} </p>
			</div>
		</a>
	);
}

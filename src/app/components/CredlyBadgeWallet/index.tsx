'use client';
import { Badge } from '@/types';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { use, useEffect, useRef, useState } from 'react';
import CredlyBadge from './CredlyBadge';

export default function CredlyBadgeWallet({ badges: Badges }: { badges: Promise<Badge[]> }) {
	const badges = use(Badges);
	const ref = useRef<HTMLOListElement>(null);
	const [closedHeight, setClosedHeight] = useState(0);
	const [allVisible, setAllVisible] = useState(false);

	useEffect(() => {
		if (ref.current) {
			setClosedHeight(ref.current.children[0].clientHeight);
		}
	}, []);

	return (
		<section className="max-w-5xl rounded-xl relative px-8 pb-4 border border-solid border-zinc-800 bg-zinc-900 w-full shadow-xl">
			<h2>Credly Badges</h2>
			{closedHeight >= 0 && (
				<ol
					className="list-none grid grid-cols-3 p-0 m-0 gap-x-12 gap-y-16"
					ref={ref}
					style={{
						overflow: allVisible ? undefined : 'hidden',
						height: allVisible ? 'max-content' : `${closedHeight}px`,
					}}
				>
					{badges.map((badge) => (
						<CredlyBadge key={badge.id} {...badge} />
					))}
				</ol>
			)}
			<div
				className="text-white flex justify-center hover:underline underline-offset-2"
				onClick={() => setAllVisible(!allVisible)}
			>
				<div className="flex items-center gap-2 cursor-pointer justify-center pt-4">
					{allVisible ? <ChevronUpIcon width={24} /> : <ChevronDownIcon width={24} />}
					<p>{allVisible ? 'Show fewer badges.' : `Show all ${badges.length} badges.`}</p>
				</div>
			</div>
		</section>
	);
}

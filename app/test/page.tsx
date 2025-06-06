'use client';

import CompanyCarousel from '@/components/CompanyCarousel';
import { useEffect, useState } from 'react';

export default function Page() {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<section className="flex w-screen h-screen  text-white text-4xl overflow-hidden bg-gray-300 z-0">
			<CompanyCarousel isClient={isClient} />
		</section>
	);
}

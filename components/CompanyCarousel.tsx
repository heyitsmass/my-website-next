'use client';

import companies from '@/data/companies';

const Company = ({ ...company }: (typeof companies)[keyof typeof companies]) => {
	return (
		<a
			href={company.href}
			target="_blank"
			className="relative flex items-center justify-center"
			style={{ width: 'auto', height: '80px', minWidth: '120px' }}
		>
			<img
				src={`/images/company_logos_indigo/${company.id}.png`}
				alt={company.label}
				className="absolute inset-0 w-full h-full object-contain rounded-lg "
			/>
		</a>
	);
};

export default function CompanyCarousel({ isClient = false }: { isClient?: boolean }) {
	const companyArray = Object.values(companies);
	const doubleArray = [...companyArray, ...companyArray]; // Duplicate the array for continuous scrolling

	if (!isClient) {
		return null;
	}
	return (
		<div className="flex  h-max animate-scroll justify-evenly items-center gap-8">
			{doubleArray.map((company, i) => (
				<Company key={`company-${company.id}-${i}`} {...company} />
			))}
		</div>
	);
}

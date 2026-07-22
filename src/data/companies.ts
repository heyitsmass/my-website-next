export interface Company {
	label: string;
	href: string;
	/** Path under public/. Omitted → text placeholder tile until a real logo file exists. */
	logo?: string;
}

export const companies: Company[] = [
	{ label: 'Armani', href: 'https://www.armani.com', logo: '/images/company_logos/armani.png' },
	{
		label: 'Arctic Fox',
		href: 'https://arcticfoxhaircolor.com',
		logo: '/images/company_logos/arcticfox.png',
	},
	{
		label: 'Baracuta',
		href: 'https://uk.baracuta.com',
		logo: '/images/company_logos/baracuta.png',
	},
	{
		label: 'Coach Outlet',
		href: 'https://www.coachoutlet.com',
		logo: '/images/company_logos/coach.png',
	},
	{ label: 'Filson', href: 'https://www.filson.eu', logo: '/images/company_logos/filson.png' },
	{
		label: 'New Era',
		href: 'https://www.neweracap.com',
		logo: '/images/company_logos/newera.png',
	},
	{ label: 'Pucci', href: 'https://www.pucci.com', logo: '/images/company_logos/pucci.png' },
	{
		label: 'Valentino',
		href: 'https://www.valentino.com',
		logo: '/images/company_logos/valentino.png',
	},
	{ label: 'Haworth', href: 'https://www.haworth.com' },
	{ label: 'Sonos', href: 'https://www.sonos.com' },
	{ label: 'Bambi Baby', href: 'https://www.bambibaby.com' },
	{ label: 'Away Travel', href: 'https://www.awaytravel.com' },
	{ label: 'XGen AI', href: 'https://www.xgen.ai', logo: '/images/company_logos/xgen.png' },
	{ label: 'Zoovu', href: 'https://www.zoovu.com' },
];

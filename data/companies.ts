export default {
	a: {
		label: 'Armani',
		id: 'armani',
		href: 'https://www.armani.com',
	},
	af: {
		label: 'Arctic Fox',
		id: 'arcticfox',
		href: 'https://https://arcticfoxhaircolor.com/',
	},
	b: {
		label: 'Baracuta',
		id: 'baracuta',
		href: 'https://uk.baracuta.com',
	},
	c: {
		label: 'Coach Outlet',
		id: 'coach',
		href: 'https://www.coachoutlet.com/',
	},
	d: {
		label: 'Dickies',
		id: 'dickies',
		href: 'https://www.dickieslife.com/uk_en/',
	},
	f: {
		label: 'Filsons',
		id: 'filson',
		href: 'https://www.filson.eu/',
	},
	k: {
		label: 'Khaite',
		id: 'khaite',
		href: 'https://khaite.com/',
	},
	n: {
		label: 'New Era',
		id: 'newera',
		href: 'https://www.neweracap.com/',
	},
	p: {
		label: 'Pucci',
		id: 'pucci',
		href: 'https://www.pucci.com',
	},
	r: {
		label: 'Russells',
		id: 'russells',
		href: 'https://www.russells.com',
	},
	t: {
		label: 'Tapestry',
		id: 'tapestry',
		href: 'https://www.tapestry.com',
	},
	v: {
		label: 'Valentino',
		id: 'valentino',
		href: 'https://www.valentino.com',
	},
	vg: {
		label: 'Virtual Guard Inc.',
		id: 'virtualguard',
		href: 'https://www.virtualguard.com',
	},
	x: {
		label: 'XGen AI',
		id: 'xgenai',
		href: 'https://www.xgen.ai/',
	},
} as const satisfies Record<string, { label: string; id: string; href: string }>;

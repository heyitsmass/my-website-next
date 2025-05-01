export default [
	{
		school: 'University of Nevada, Las Vegas',
		kind: 'Bachelors of Science',
		prefix: 'B.S.C.',
		speciality: 'Computer Science',
		date: {
			start: {
				month: 8,
				day: 27,
				year: 2018,
			},
			end: {
				month: 12,
				day: 20,
				year: 2023,
			},
		},
		image: '/unlv.png',
		href: 'https://www.unlv.edu/',
		color: '#B10202',
	},
] as const as EducationBadgeProps[];

type IntrinsicDateMeta = {
	month: number;
	day: number;
	year: number;
};

type EducationDateInfo = {
	start: IntrinsicDateMeta;
	end?: IntrinsicDateMeta;
};

export type EducationBadgeProps = {
	/** Name of the School / University */
	school: string;
	/** Kind of Degree (e.g. Bachelors of Science) */
	kind: string;
	/** The prefix type (e.g. B.S., M.B.A, ...) */
	prefix: string;
	/** The speciality (e.g. Computer Science) */
	speciality: string;
	/** The date range of the education */
	date: EducationDateInfo;
	/** The schools logo / badge */
	image: string;
	/** The schools website */
	href: `${'http' | 'https'}://${string}.edu/`;
	/** The schools primary color */
	color: `#${string}`;
};

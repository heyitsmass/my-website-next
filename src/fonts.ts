import { Damion, Roboto, Source_Code_Pro } from 'next/font/google';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700'],
	preload: true,
});

const damion = Damion({
	subsets: ['latin'],
	weight: ['400'],
	preload: true,
});

const sourceCodePro = Source_Code_Pro({
	subsets: ['latin'],
	display: 'auto',
	fallback: ['Roboto'],
});

export { roboto, damion, sourceCodePro };

import './globals.css';

import { sourceCodePro } from '@/fonts';
import metadata from '@/metadata';
import { BoxesIcon, CircleUserRoundIcon, HouseIcon, LucideProps, PickaxeIcon, type LucideIcon } from 'lucide-react';
import Link from 'next/link';

type TIconLink = { Icon: LucideIcon; href: string; text: string } & Partial<LucideProps>;

const IconLink = ({ Icon, href, children, text, ...props }: TIconLink) => {
	const id = `${text.toLowerCase()}-link`;
	return (
		<>
			<Link id={id} href={href} className="flex items-center gap-1">
				<title itemProp={id}>{text}</title>
				<Icon {...props}></Icon>
				{text}
			</Link>
		</>
	);
};

const links: TIconLink[] = [
	{ Icon: HouseIcon, href: '/', strokeWidth: 1.75, text: 'Home' },
	{
		Icon: BoxesIcon,
		href: '/projects',
		strokeWidth: 1,
		text: 'Projects',
	},
	{
		Icon: PickaxeIcon,
		href: '/skills',
		strokeWidth: 1,
		text: 'Skills',
	},
	{
		Icon: CircleUserRoundIcon,
		href: '/me',
		strokeWidth: 1,
		text: 'Me',
	},
];

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" id="__next" className={sourceCodePro.className}>
			<body className="grid grid-rows-[auto_1fr] max-w-6xl w-full place-self-center justify-items-center gap-4 h-full">
				<header className="bg-zinc-800 border-zinc-700 shadow-md max-w-6xl w-full h-12 border border-solid rounded-xl flex items-center px-8 gap-12 *:no-underline">
					{links.map((link) => (
						<IconLink key={link.text} {...link} size={16} />
					))}
				</header>
				<main className="flex h-full w-full justify-center">{children}</main>
			</body>
		</html>
	);
}

export { metadata };

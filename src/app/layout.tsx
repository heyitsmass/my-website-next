import './globals.scss';

import { sourceCodePro } from '@/fonts';
import metadata from '@/metadata';
import { BoxesIcon, CircleUserRoundIcon, HouseIcon, PickaxeIcon } from 'lucide-react';
import { IconLink } from './components';
import { IconLinkProps } from './components/IconLink';

const links: IconLinkProps[] = [
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
			<body className="p-4 gap-6 grid grid-rows-[auto_1fr] w-full justify-items-center overflow-hidden">
				<header className="box-border bg-zinc-800 px-4 border-zinc-700 shadow-md w-full h-12 border border-solid rounded-xl inline-flex items-center gap-12 *:no-underline">
					{links.map((link) => (
						<IconLink key={link.text} {...link} size={16} />
					))}
				</header>
				<main className="box-border flex h-full w-full justify-center relative overflow-x-hidden overflow-y-scroll">
					{children}
				</main>
			</body>
		</html>
	);
}

export { metadata };

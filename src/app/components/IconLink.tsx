import { LucideIcon, LucideProps } from 'lucide-react';
import Link from 'next/link';

export type IconLinkProps = { Icon: LucideIcon; href: string; text: string } & Partial<LucideProps>;

export default function IconLink({ Icon, href, children, text, ...props }: IconLinkProps) {
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
}

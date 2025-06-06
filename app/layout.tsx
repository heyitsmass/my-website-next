import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	description:
		'Crafting digital experiences that bridge user needs with business goals through human-centered design',
	title: 'HeyItsMass | Full Stack Developer & Designer',
	keywords: ['heyitsmass', 'brandon cannon', 'brandon c.', 'massive development'],
	verification: {
		me: `-----BEGIN PGP PUBLIC KEY BLOCK-----
            mDMEZddXSBYJKwYBBAHaRw8BAQdAjDltaIlKFgYg3nCePTqqh9gqOy/iWjubPpma
            5Fn/OUq0IWJyYW5kb24gPGJyYW5kb25jQGhleWl0c21hc3MuZGV2PoiTBBMWCgA7
            FiEEf6Q8sFOL/9RDklLip9FmrvmlgEIFAmXXV0gCGwMFCwkIBwICIgIGFQoJCAsC
            BBYCAwECHgcCF4AACgkQp9FmrvmlgEIRwAD/QSyX2nScKGmpHpi+gyh0oNO9BXGg
            RQjIh5joiHNdtd4BAKowt0dJfj/mvR4xcmTNcSciMwp4PYIhHVt47G5U7zkLuDgE
            ZddXSBIKKwYBBAGXVQEFAQEHQIGniHK0n0/8hpOUsZGbtJ7buxStMcesrSTm7kcW
            4gQXAwEIB4h4BBgWCgAgFiEEf6Q8sFOL/9RDklLip9FmrvmlgEIFAmXXV0gCGwwA
            CgkQp9FmrvmlgEJ27QD8DcaaonyjN049GyE1DbEHbfI5fEQ8iZOCNUMgqBm/6doA
            /0EUzLjAb7gu4UMKz8YZz4acCFPlNvHw0cPN4WOj7akC
            =iFJb
            -----END PGP PUBLIC KEY BLOCK-----`,
	},
	robots: 'index, follow',
	publisher: 'Vercel',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">{children}</body>
		</html>
	);
}

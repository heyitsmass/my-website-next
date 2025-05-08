/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	redirects: async () => {
		return [
			{
				source: '/home',
				destination: '/',
				permanent: true,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				hostname: 'images.credly.com',
				protocol: 'https',
			},
		],
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
};

export default nextConfig;

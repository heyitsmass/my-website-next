import {
	SiAmazondynamodb,
	SiAmazonwebservices,
	SiAndroid,
	SiAngular,
	SiArchlinux,
	SiAriakit,
	SiAuth0,
	SiBabel,
	SiBootstrap,
	SiBurpsuite,
	SiC,
	SiCircleci,
	SiCloudflare,
	SiCockroachlabs,
	SiConfluence,
	SiCplusplus,
	SiDart,
	SiDatadog,
	SiDebian,
	SiDiscord,
	SiDocker,
	SiEclipseide,
	SiElectron,
	SiEslint,
	SiExpress,
	SiFacebook,
	SiFastapi,
	SiFastify,
	SiFigma,
	SiFlask,
	SiFlutter,
	SiFramer,
	SiGit,
	SiGithub,
	SiGithubactions,
	SiGitlab,
	SiGooglecloud,
	SiGooglemeet,
	SiGraphql,
	SiHeroku,
	SiHtml5,
	SiIntellijidea,
	SiIos,
	SiJasmine,
	SiJavascript,
	SiJest,
	SiJira,
	SiJquery,
	SiJsonwebtokens,
	SiKalilinux,
	SiKotlin,
	SiLetsencrypt,
	SiLighthouse,
	SiLinux,
	SiLoom,
	SiMacos,
	SiMariadb,
	SiMaterialdesign,
	SiMlflow,
	SiMongodb,
	SiMongoose,
	SiMysql,
	SiNestjs,
	SiNextdotjs,
	SiNginx,
	SiNodedotjs,
	SiNpm,
	SiNumpy,
	SiNvidia,
	SiOkta,
	SiOpenid,
	SiOwasp,
	SiPandas,
	SiPaypal,
	SiPnpm,
	SiPostgresql,
	SiPostman,
	SiPrettier,
	SiPrisma,
	SiPycharm,
	SiPytest,
	SiPython,
	SiPytorch,
	SiReact,
	SiRedis,
	SiRedux,
	SiRemix,
	SiRust,
	SiSalesforce,
	SiScikitlearn,
	SiSelenium,
	SiSharp,
	SiShopify,
	SiSlack,
	SiSqlite,
	SiStripe,
	SiSupabase,
	SiTailwindcss,
	SiTensorflow,
	SiTwilio,
	SiTypeorm,
	SiTypescript,
	SiUbuntu,
	SiVercel,
	SiVite,
	SiVitest,
	SiVuedotjs,
	SiWireshark,
	SiWoocommerce,
	SiWordpress,
	SiXcode,
	SiZoom,
} from '@icons-pack/react-simple-icons';
import { type Project } from './projects/project';

export const STATUS = {
	CONCEPT: 0,
	DEV: 1,
	TEST: 2,
	STAGE: 3,
	PROD: 4,
};

export const projects = [
	{
		name: 'Track',
		description: 'A simple git-like solution for frontend version control to reduce errors while merging changes',
		status: STATUS.STAGE,
		tags: ['Python'],
	},
	{
		name: 'Crypt',
		description: 'A password generator that hides passwords in plain view using steganography',
		status: STATUS.DEV,
		tags: ['AWS', 'Electron', 'Python'],
	},
	{
		name: 'Secure',
		description: 'A system for securing frontend - backend communications via client secured channels.',
		status: STATUS.DEV,
		tags: ['C++', 'Javascript'],
	},
	{
		name: 'Audio',
		description: 'Utility for levelling audio to a consistent range for mixing, beatmapping and key analysis.',
		status: STATUS.STAGE,
		tags: ['Python'],
	},
	{
		name: 'Color',
		description:
			'A tailwind palette visualizer and explorer based on personal implementation of coolors and material UI design.',
		status: STATUS.TEST,
		tags: ['Javascript', 'React', 'Tailwind CSS'],
	},
	{
		name: 'Pass',
		description: 'An open source password manager akin to OnePass',
		status: STATUS.DEV,
		tags: ['Electron', 'React', 'Tailwind'],
	},
	{
		name: 'Chain',
		description: 'An experimental reimplementation of secure frontend communications via blockchain',
		status: STATUS.CONCEPT,
		tags: ['C++'],
	},
	{
		name: 'Templates',
		description:
			"A unified source for browsing CVE, CWE, CVSS Severity score and nuclei templates. Similar to ProjectDiscovery's",
		status: STATUS.DEV,
		tags: ['React', 'Tailwind CSS'],
	},
	{
		name: 'Resolve',
		description: 'A multi-threaded tool for efficiently validating and resolving domain names and subdomains.',
		status: STATUS.PROD,
		tags: ['Python'],
	},
	{
		name: 'Replicate',
		description:
			'A system for replicating websites for easy localhost modification and hot-reload for on-the-fly changes intended for production.',
		status: STATUS.DEV,
		tags: ['Python', 'Javascript', 'HTML', 'CSS'],
	},
	{
		name: 'Render',
		description: 'A backend system for statically rendering template languages with exceptional caching speed.',
		status: STATUS.DEV,
		tags: ['Node.js', 'Liquid', 'Jinja2', 'Markdown'],
	},
	{
		name: 'Queens',
		description:
			'Simple algorithm to solve a chessboard of nxn size with n number of queens such that no queen is attacking another.',
		status: STATUS.PROD,
		tags: ['C++', 'Python'],
	},
] as Project[];

export const activeProjects = projects.reduce((acc, curr) => {
	acc.add(curr.name);
	acc.add(curr.name.toLowerCase());
	return acc;
}, new Set<(typeof projects)[number]['name']>());

export const skills = {
	languages: [
		{ name: 'JavaScript', icon: SiJavascript },
		{ name: 'TypeScript', icon: SiTypescript },
		{ name: 'Python', icon: SiPython },
		{ name: 'Java', icon: undefined },
		{ name: 'C#', icon: SiSharp },
		{ name: 'C++', icon: SiCplusplus },
		{ name: 'C', icon: SiC },
		{ name: 'Rust', icon: SiRust },
		{ name: 'Dart', icon: SiDart },
		{ name: 'SQL', icon: undefined },
		{ name: 'HTML', icon: SiHtml5 },
	],
	webDevelopment: {
		frontendFrameworks: [
			{ name: 'React', icon: SiReact },
			{ name: 'Angular', icon: SiAngular },
			{ name: 'Vue.js', icon: SiVuedotjs },
			{ name: 'Next.js', icon: SiNextdotjs },
			{ name: 'Remix', icon: SiRemix },
			{ name: 'jQuery', icon: SiJquery },
			{ name: 'Tailwind CSS', icon: SiTailwindcss },
			{ name: 'Bootstrap', icon: SiBootstrap },
			{ name: 'Material UI', icon: SiMaterialdesign },
		],

		backendFrameworks: [
			{ name: 'Node.js', icon: SiNodedotjs },
			{ name: 'Express', icon: SiExpress },
			{ name: 'Fastify', icon: SiFastify },
			{ name: 'NestJS', icon: SiNestjs },
			{ name: 'Flask', icon: SiFlask },
			{ name: 'FastAPI', icon: SiFastapi },
		],
	},
	dataStorage: {
		databases: [
			{ name: 'PostgreSQL', icon: SiPostgresql },
			{ name: 'MySQL', icon: SiMysql },
			{ name: 'MongoDB', icon: SiMongodb },
			{ name: 'SQLite', icon: SiSqlite },
			{ name: 'Redis', icon: SiRedis },
			{ name: 'DynamoDB', icon: SiAmazondynamodb },
			{ name: 'Supabase', icon: SiSupabase },
			{ name: 'MariaDB', icon: SiMariadb },
			{ name: 'CockroachDB', icon: SiCockroachlabs },
		],

		databaseTools: [
			{ name: 'Prisma', icon: SiPrisma },
			{ name: 'TypeORM', icon: SiTypeorm },
			{ name: 'Mongoose', icon: SiMongoose },
		],
	},
	infrastructureAndOperations: {
		cloudPlatforms: [
			{ name: 'AWS', icon: SiAmazonwebservices },
			{ name: 'Google Cloud', icon: SiGooglecloud },
			{ name: 'Heroku', icon: SiHeroku },
			{ name: 'Vercel', icon: SiVercel },
			{ name: 'Cloudflare', icon: SiCloudflare },
		],

		devOps: [
			{ name: 'Docker', icon: SiDocker },
			{ name: 'CircleCI', icon: SiCircleci },
			{ name: 'GitHub Actions', icon: SiGithubactions },
			{ name: 'GitLab CI', icon: SiGitlab },
			{ name: 'Datadog', icon: SiDatadog },
			{ name: 'CloudFormation', icon: undefined },
			{ name: 'Nginx', icon: SiNginx },
		],

		operatingSystems: [
			{ name: 'Linux', icon: SiLinux },
			{ name: 'Ubuntu', icon: SiUbuntu },
			{ name: 'Debian', icon: SiDebian },
			{ name: 'Windows', icon: undefined },
			{ name: 'macOS', icon: SiMacos },
			{ name: 'iOS', icon: SiIos },
			{ name: 'Android', icon: SiAndroid },
			{ name: 'Arch Linux', icon: SiArchlinux },
			{ name: 'Kali Linux', icon: SiKalilinux },
		],
	},
	securityAndAuthentication: {
		security: [
			{ name: 'OWASP', icon: SiOwasp },
			{ name: 'Auth0', icon: SiAuth0 },
			{ name: 'OAuth', icon: undefined },
			{ name: 'JWT', icon: SiJsonwebtokens },
			{ name: 'OpenID Connect', icon: SiOpenid },
			{ name: 'SAML', icon: undefined },
			{ name: 'Okta', icon: SiOkta },
			{ name: "Let's Encrypt", icon: SiLetsencrypt },
			{ name: 'SSL/TLS', icon: undefined },
		],

		securityTools: [
			{ name: 'Wireshark', icon: SiWireshark },
			{ name: 'Nmap', icon: undefined },
			{ name: 'Burp Suite', icon: SiBurpsuite },
			{ name: 'Ghidra', icon: undefined },
		],
	},
	developmentTools: {
		versionControl: [
			{ name: 'Git', icon: SiGit },
			{ name: 'GitHub', icon: SiGithub },
			{ name: 'GitLab', icon: SiGitlab },
		],

		development: [
			{ name: 'VS Code', icon: undefined },
			{ name: 'IntelliJ IDEA', icon: SiIntellijidea },
			{ name: 'PyCharm', icon: SiPycharm },
			{ name: 'Eclipse', icon: SiEclipseide },
			{ name: 'Xcode', icon: SiXcode },
			{ name: 'npm', icon: SiNpm },
			{ name: 'pnpm', icon: SiPnpm },
			{ name: 'Vite', icon: SiVite },
			{ name: 'Babel', icon: SiBabel },
			{ name: 'ESLint', icon: SiEslint },
			{ name: 'Prettier', icon: SiPrettier },
			{ name: 'Postman', icon: SiPostman },
		],

		stateManagement: [
			{ name: 'Redux', icon: SiRedux },
			{ name: 'Zustand', icon: undefined },
			{ name: 'GraphQL', icon: SiGraphql },
		],
	},

	// Testing
	testing: [
		{ name: 'Jest', icon: SiJest },
		{ name: 'Selenium', icon: SiSelenium },
		{ name: 'Pytest', icon: SiPytest },
		{ name: 'Jasmine', icon: SiJasmine },
		{ name: 'Vitest', icon: SiVitest },
	],

	// Mobile Development
	mobileDevelopment: [
		{ name: 'React Native', icon: SiReact },
		{ name: 'Flutter', icon: SiFlutter },
		{ name: 'Kotlin', icon: SiKotlin },
		{ name: 'Electron', icon: SiElectron },
	],

	// AI & Machine Learning
	aiAndMachineLearning: [
		{ name: 'TensorFlow', icon: SiTensorflow },
		{ name: 'PyTorch', icon: SiPytorch },
		{ name: 'scikit-learn', icon: SiScikitlearn },
		{ name: 'Pandas', icon: SiPandas },
		{ name: 'NumPy', icon: SiNumpy },
		{ name: 'CUDA', icon: SiNvidia },
		{ name: 'MLflow', icon: SiMlflow },
	],

	// Third-Party Integrations
	thirdPartyIntegrations: [
		{ name: 'Stripe', icon: SiStripe },
		{ name: 'Twilio', icon: SiTwilio },
		{ name: 'Slack API', icon: SiSlack },
		{ name: 'Discord API', icon: SiDiscord },
		{ name: 'XGen API', icon: undefined },
		{ name: 'Salesforce', icon: SiSalesforce },
		{ name: 'Shopify', icon: SiShopify },
		{ name: 'PayPal', icon: SiPaypal },
		{ name: 'Facebook API', icon: SiFacebook },
	],

	// Design & Collaboration
	designAndCollaboration: {
		design: [
			{ name: 'Figma', icon: SiFigma },
			{ name: 'Framer', icon: SiFramer },
		],

		projectManagement: [
			{ name: 'Jira', icon: SiJira },
			{ name: 'GitHub Projects', icon: SiGithub },
			{ name: 'GitLab Boards', icon: SiGitlab },
			{ name: 'Confluence', icon: SiConfluence },
		],

		communication: [
			{ name: 'Slack', icon: SiSlack },
			{ name: 'Discord', icon: SiDiscord },
			{ name: 'Microsoft Teams', icon: undefined },
			{ name: 'Zoom', icon: SiZoom },
			{ name: 'Google Meet', icon: SiGooglemeet },
			{ name: 'Loom', icon: SiLoom },
		],
	},

	// Content Management
	contentManagement: [
		{ name: 'WordPress', icon: SiWordpress },
		{ name: 'Shopify', icon: SiShopify },
		{ name: 'Magento', icon: undefined },
		{ name: 'WooCommerce', icon: SiWoocommerce },
	],

	// Accessibility & Standards
	accessibility: [
		{ name: 'WCAG', icon: undefined },
		{ name: 'ARIA', icon: SiAriakit },
		{ name: 'Lighthouse', icon: SiLighthouse },
	],
};

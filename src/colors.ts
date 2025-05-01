import { cache as reactCache } from 'react';

const SOURCE = 'https://raw.githubusercontent.com/ozh/github-colors/refs/heads/master/colors.json';

type GitHubColors = {
	[x: string]: {
		color: string;
		url: string;
	};
};

class Colors {
	private static instance: Colors;

	cache: GitHubColors;
	private constructor(cache: GitHubColors) {
		this.cache = Object.assign(cache, extraColors);
	}

	static fetchColors = reactCache(async () => fetch(SOURCE).then<GitHubColors>((res) => res.json()));

	public static async init() {
		if (!this.instance) {
			const res = await this.fetchColors();
			this.instance = new Colors(res);
		}
		return this.instance.cache;
	}
}

export const fetchColor = async (lang: string) => {
	const colors = await Colors.init();
	const color = colors[lang]?.color;
	return color || '#000000';
};

const extraColors = {
	WCAG: {
		color: '#2175D8',
		url: 'https://www.w3.org/WAI/standards-guidelines/wcag/',
	},
	ARIA: {
		color: '#1A73E8',
		url: 'https://www.w3.org/WAI/standards-guidelines/aria/',
	},
	Lighthouse: {
		color: '#F44236',
		url: 'https://developer.chrome.com/docs/lighthouse/overview/',
	},
	WordPress: {
		color: '#21759B',
		url: 'https://wordpress.org/',
	},
	Shopify: {
		color: '#7AB55C',
		url: 'https://www.shopify.com/',
	},
	Magento: {
		color: '#F46F25',
		url: 'https://business.adobe.com/products/magento/magento-commerce.html',
	},
	WooCommerce: {
		color: '#96588A',
		url: 'https://woocommerce.com/',
	},
	Slack: {
		color: '#4A154B',
		url: 'https://slack.com/',
	},
	Discord: {
		color: '#5865F2',
		url: 'https://discord.com/',
	},
	'Microsoft Teams': {
		color: '#6264A7',
		url: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software',
	},
	Zoom: {
		color: '#2D8CFF',
		url: 'https://zoom.us/',
	},
	'Google Meet': {
		color: '#008375',
		url: 'https://meet.google.com/',
	},
	Loom: {
		color: '#625DF5',
		url: 'https://www.loom.com/',
	},
	Jira: {
		color: '#0052CC',
		url: 'https://www.atlassian.com/software/jira',
	},
	'GitHub Projects': {
		color: '#FFFFFF',
		url: 'https://github.com/features/projects',
	},
	'GitLab Boards': {
		color: '#FC6D26',
		url: 'https://docs.gitlab.com/ee/user/project/issue_board.html',
	},
	Confluence: {
		color: '#172B4D',
		url: 'https://www.atlassian.com/software/confluence',
	},
	Figma: {
		color: '#F24E1E',
		url: 'https://www.figma.com/',
	},
	Framer: {
		color: '#0055FF',
		url: 'https://www.framer.com/',
	},
	Stripe: {
		color: '#635BFF',
		url: 'https://stripe.com/',
	},
	Twilio: {
		color: '#F22F46',
		url: 'https://www.twilio.com/',
	},
	'Slack API': {
		color: '#4A154B',
		url: 'https://api.slack.com/',
	},
	'Discord API': {
		color: '#5865F2',
		url: 'https://discord.com/developers/docs/intro',
	},
	'XGen API': {
		color: '#888888',
		url: '#',
	},
	Salesforce: {
		color: '#00A1E0',
		url: 'https://www.salesforce.com/',
	},
	PayPal: {
		color: '#00457C',
		url: 'https://www.paypal.com/',
	},
	'Facebook API': {
		color: '#1877F2',
		url: 'https://developers.facebook.com/',
	},
	TensorFlow: {
		color: '#FF6F00',
		url: 'https://www.tensorflow.org/',
	},
	PyTorch: {
		color: '#EE4C2C',
		url: 'https://pytorch.org/',
	},
	'scikit-learn': {
		color: '#F7931E',
		url: 'https://scikit-learn.org/',
	},
	Pandas: {
		color: '#150458',
		url: 'https://pandas.pydata.org/',
	},
	CUDA: {
		color: '#76B900',
		url: 'https://developer.nvidia.com/cuda-zone',
	},
	MLflow: {
		color: '#0194E2',
		url: 'https://mlflow.org/',
	},
	'React Native': {
		color: '#61DAFB',
		url: 'https://reactnative.dev/',
	},
	Flutter: {
		color: '#02569B',
		url: 'https://flutter.dev/',
	},
	Electron: {
		color: '#47848F',
		url: 'https://www.electronjs.org/',
	},
	Jest: {
		color: '#C21325',
		url: 'https://jestjs.io/',
	},
	Selenium: {
		color: '#4DB33D',
		url: 'https://www.selenium.dev/',
	},
	Pytest: {
		color: '#0A9B71',
		url: 'https://pytest.org/',
	},
	Jasmine: {
		color: '#8A4182',
		url: 'https://jasmine.github.io/',
	},
	Vitest: {
		color: '#6E9F18',
		url: 'https://vitest.dev/',
	},
	Redux: {
		color: '#764ABC',
		url: 'https://redux.js.org/',
	},
	Zustand: {
		color: '#424242',
		url: 'https://github.com/pmndrs/zustand',
	},
	'VS Code': {
		color: '#007ACC',
		url: 'https://code.visualstudio.com/',
	},
	'IntelliJ IDEA': {
		color: '#FFFFFF',
		url: 'https://www.jetbrains.com/idea/',
	},
	PyCharm: {
		color: '#088484',
		url: 'https://www.jetbrains.com/pycharm/',
	},
	Eclipse: {
		color: '#2C2255',
		url: 'https://www.eclipse.org/',
	},
	Xcode: {
		color: '#147EFB',
		url: 'https://developer.apple.com/xcode/',
	},
	npm: {
		color: '#CB3837',
		url: 'https://www.npmjs.com/',
	},
	pnpm: {
		color: '#F69220',
		url: 'https://pnpm.io/',
	},
	Vite: {
		color: '#646CFF',
		url: 'https://vitejs.dev/',
	},
	Babel: {
		color: '#F9DC3E',
		url: 'https://babeljs.io/',
	},
	ESLint: {
		color: '#4B32C3',
		url: 'https://eslint.org/',
	},
	Prettier: {
		color: '#F7B93E',
		url: 'https://prettier.io/',
	},
	Postman: {
		color: '#FF6C37',
		url: 'https://www.postman.com/',
	},
	Git: {
		color: '#F05032',
		url: 'https://git-scm.com/',
	},
	GitHub: {
		color: '#FFFFFF',
		url: 'https://github.com/',
	},
	GitLab: {
		color: '#FC6D26',
		url: 'https://gitlab.com/',
	},
	OWASP: {
		color: '#063958',
		url: 'https://owasp.org/',
	},
	Auth0: {
		color: '#EB5424',
		url: 'https://auth0.com/',
	},
	OAuth: {
		color: '#444444',
		url: 'https://oauth.net/',
	},
	JWT: {
		color: '#D63AFF',
		url: 'https://jwt.io/',
	},
	'OpenID Connect': {
		color: '#F78C40',
		url: 'https://openid.net/connect/',
	},
	SAML: {
		color: '#0073AE',
		url: 'https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=security',
	},
	Okta: {
		color: '#007DC1',
		url: 'https://www.okta.com/',
	},
	"Let's Encrypt": {
		color: '#003A70',
		url: 'https://letsencrypt.org/',
	},
	'SSL/TLS': {
		color: '#4CAF50',
		url: 'https://www.cloudflare.com/learning/ssl/what-is-ssl/',
	},
	Wireshark: {
		color: '#1679A7',
		url: 'https://www.wireshark.org/',
	},
	Nmap: {
		color: '#E43A2C',
		url: 'https://nmap.org/',
	},
	'Burp Suite': {
		color: '#FF6633',
		url: 'https://portswigger.net/burp',
	},
	Ghidra: {
		color: '#3B4A6C',
		url: 'https://ghidra-sre.org/',
	},
	Linux: {
		color: '#FCC624',
		url: 'https://www.linux.org/',
	},
	Ubuntu: {
		color: '#E95420',
		url: 'https://ubuntu.com/',
	},
	Debian: {
		color: '#A81D33',
		url: 'https://www.debian.org/',
	},
	Windows: {
		color: '#0078D4',
		url: 'https://www.microsoft.com/windows/',
	},
	macOS: {
		color: '#FFFFFF',
		url: 'https://www.apple.com/macos/',
	},
	iOS: {
		color: '#FFFFFF',
		url: 'https://www.apple.com/ios/',
	},
	Android: {
		color: '#3DDC84',
		url: 'https://www.android.com/',
	},
	'Arch Linux': {
		color: '#1793D1',
		url: 'https://archlinux.org/',
	},
	'Kali Linux': {
		color: '#557C94',
		url: 'https://www.kali.org/',
	},
	AWS: {
		color: '#FF9900',
		url: 'https://aws.amazon.com/',
	},
	'Google Cloud': {
		color: '#4285F4',
		url: 'https://cloud.google.com/',
	},
	Heroku: {
		color: '#430098',
		url: 'https://www.heroku.com/',
	},
	Vercel: {
		color: '#FFFFFF',
		url: 'https://vercel.com/',
	},
	Cloudflare: {
		color: '#F38020',
		url: 'https://www.cloudflare.com/',
	},
	Docker: {
		color: '#2496ED',
		url: 'https://www.docker.com/',
	},
	CircleCI: {
		color: '#343434',
		url: 'https://circleci.com/',
	},
	'GitHub Actions': {
		color: '#2088FF',
		url: 'https://github.com/features/actions',
	},
	'GitLab CI': {
		color: '#FC6D26',
		url: 'https://docs.gitlab.com/ee/ci/',
	},
	Datadog: {
		color: '#632CA6',
		url: 'https://www.datadoghq.com/',
	},
	CloudFormation: {
		color: '#FF9900',
		url: 'https://aws.amazon.com/cloudformation/',
	},
	PostgreSQL: {
		color: '#4169E1',
		url: 'https://www.postgresql.org/',
	},
	MySQL: {
		color: '#4479A1',
		url: 'https://www.mysql.com/',
	},
	MongoDB: {
		color: '#47A248',
		url: 'https://www.mongodb.com/',
	},
	SQLite: {
		color: '#003B57',
		url: 'https://www.sqlite.org/',
	},
	Redis: {
		color: '#DC382D',
		url: 'https://redis.io/',
	},
	DynamoDB: {
		color: '#4053D6',
		url: 'https://aws.amazon.com/dynamodb/',
	},
	Supabase: {
		color: '#3ECF8E',
		url: 'https://supabase.io/',
	},
	MariaDB: {
		color: '#003545',
		url: 'https://mariadb.org/',
	},
	CockroachDB: {
		color: '#6933FF',
		url: 'https://www.cockroachlabs.com/',
	},
	Prisma: {
		color: '#2D3748',
		url: 'https://www.prisma.io/',
	},
	TypeORM: {
		color: '#E83876',
		url: 'https://typeorm.io/',
	},
	Mongoose: {
		color: '#880000',
		url: 'https://mongoosejs.com/',
	},
	React: {
		color: '#61DAFB',
		url: 'https://react.dev/',
	},
	Angular: {
		color: '#DD0031',
		url: 'https://angular.io/',
	},
	Vue: {
		color: '#4FC08D',
		url: 'https://vuejs.org/',
	},
	'Next.js': {
		color: '#FFFFFF',
		url: 'https://nextjs.org/',
	},
	Remix: {
		color: '#FFFFFF',
		url: 'https://remix.run/',
	},
	jQuery: {
		color: '#0769AD',
		url: 'https://jquery.com/',
	},
	'Tailwind CSS': {
		color: '#06B6D4',
		url: 'https://tailwindcss.com/',
	},
	Bootstrap: {
		color: '#7952B3',
		url: 'https://getbootstrap.com/',
	},
	'Material UI': {
		color: '#007FFF',
		url: 'https://mui.com/',
	},
	'Node.js': {
		color: '#339933',
		url: 'https://nodejs.org/',
	},
	Express: {
		color: '#FFFFFF',
		url: 'https://expressjs.com/',
	},
	Fastify: {
		color: '#FFFFFF',
		url: 'https://www.fastify.io/',
	},
	NestJS: {
		color: '#E0234E',
		url: 'https://nestjs.com/',
	},
	Flask: {
		color: '#4FB3C5',
		url: 'https://flask.palletsprojects.com/',
	},
	FastAPI: {
		color: '#009688',
		url: 'https://fastapi.tiangolo.com/',
	},
};

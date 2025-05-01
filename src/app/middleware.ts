import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// --- Configuration ---
// Rick Roll (Classic Troll)
const redirectUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
// --- End Configuration ---

// Common troll, bot, scanner, and misconfiguration paths to block
// We use lowercase for case-insensitive matching later
const blockedPaths: Set<string> = new Set([
	// Common Config Files
	'/.env',
	'/.env.local',
	'/.env.production',
	'/.env.development',
	'/.env.staging',
	'/env.js',
	'/config.js',
	'/config.json',
	'/settings.json',
	'/web.config', // IIS
	'/appsettings.json', // .NET Core

	// Version Control Exposure
	'/.git/config',
	'/.git/head',
	'/.svn/entries',
	'/.hg/hgrc', // Mercurial

	// Common CMS/Framework Paths (Often probed even on non-related stacks)
	'/wp-admin',
	'/wp-login.php',
	'/wp-includes',
	'/wp-content',
	'/xmlrpc.php',
	'/administrator', // Joomla
	'/user/login', // Drupal
	'/admin/login',
	'/admin.php',
	'/admin',
	'/login', // Could be legit, be careful if you use /login
	'/register', // Could be legit, be careful if you use /register
	'/phpmyadmin',
	'/pma',
	'/myadmin',
	'/laravel/public', // Laravel specific paths
	'/public/', // Common public directory, often probed

	// Common Vulnerability / Tool Probes
	'/owa/', // Outlook Web Access
	'/ecp/', // Exchange Control Panel
	'/.aws/credentials',
	'/.ssh/id_rsa',
	'/.bash_history',
	'/server-status', // Apache server status
	'/phpinfo.php',
	'/info.php',
	'/test.php',
	'/shell.php',
	'/cmd.php',
	'/console',

	// Common Backup/Log Files
	'/backup.zip',
	'/backup.sql',
	'/database.sql',
	'/site.zip',
	'/error_log',
	'/access_log',
	'/logs/',

	// Other common probes
	'/ads.txt',
	'/node_modules',
	'/vendor', // PHP Composer directory
	'/composer.json',
	'/package.json', // Usually not served, but probed
	'/yarn.lock',
	'/package-lock.json',
	'/license', // Sometimes has .txt or no extension
	'/readme', // Sometimes has .md or no extension
]);

// Paths prefixes to block (e.g., /wp-admin/...)
const blockedPrefixes: string[] = [
	'/.git/',
	'/.svn/',
	'/.hg/',
	'/wp-admin/',
	'/wp-includes/',
	'/wp-content/',
	'/administrator/',
	'/node_modules/',
	'/vendor/',
	'/logs/',
	'/.aws/',
	'/.ssh/',
	'/owa/',
	'/ecp/',
];

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname.toLowerCase(); // Use lowercase for case-insensitive match

	// 1. Check for exact path matches
	if (blockedPaths.has(pathname)) {
		console.log(`REDIRECTED (Exact Match): ${request.method} ${request.nextUrl.pathname}`);
		// Ensure the redirect URL is absolute if it's external
		const targetUrl = redirectUrl.startsWith('http') ? redirectUrl : new URL(redirectUrl, request.url).toString();
		return NextResponse.redirect(targetUrl, 307); // 307 Temporary Redirect preserves method
	}

	// 2. Check for path prefix matches
	for (const prefix of blockedPrefixes) {
		if (pathname.startsWith(prefix)) {
			console.log(`REDIRECTED (Prefix Match: ${prefix}): ${request.method} ${request.nextUrl.pathname}`);
			const targetUrl = redirectUrl.startsWith('http') ? redirectUrl : new URL(redirectUrl, request.url).toString();
			return NextResponse.redirect(targetUrl, 307);
		}
	}

	// If no blocked path/prefix is matched, continue to the requested page
	return NextResponse.next();
}
/**
// Configure the middleware to run on specific paths
// This prevents it from running on static files, images, API routes etc. unnecessarily
export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * - /images/ (if you have a public /images folder)
		 * - /static/ (if you have a public /static folder)
		 * Modify the negative lookaheads below ((?!...)) to fit your project structure.
		 
		'/((?!api|_next/static|_next/image|favicon.ico|images/|static/).*)',
	],
};*/

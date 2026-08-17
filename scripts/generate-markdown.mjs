// Converts the prerendered dist/index.html into dist/index.md so the
// Pages Function in functions/_middleware.js can serve it to clients that
// send `Accept: text/markdown`, per docs/superpowers's markdown-for-agents work.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { parseHTML } from 'linkedom';
import TurndownService from 'turndown';

const distIndex = fileURLToPath(new URL('../dist/index.html', import.meta.url));
const html = readFileSync(distIndex, 'utf8');
const { document } = parseHTML(html);

const main = document.querySelector('main');
const footer = document.querySelector('footer');

const turndown = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-' });

// Logos and social icons carry their real label in `alt`/`aria-label`, not
// visible text — without these rules they turndown to bare `[](url)`.
turndown.addRule('imageAltOnly', {
	filter: 'img',
	replacement: (_content, node) => node.getAttribute('alt') ?? '',
});
turndown.addRule('namedLink', {
	filter: (node) => node.nodeName === 'A' && !!node.getAttribute('href'),
	replacement: (content, node) => {
		const href = node.getAttribute('href');
		const title = node.getAttribute('title');
		const label = content.trim() || node.getAttribute('aria-label') || href;
		return `[${label}](${href}${title ? ` "${title}"` : ''})`;
	},
});

const parts = [];
if (main) parts.push(turndown.turndown(main.innerHTML));
if (footer) parts.push(turndown.turndown(footer.innerHTML));

const markdown = `${parts.join('\n\n')}\n`;

writeFileSync(fileURLToPath(new URL('../dist/index.md', import.meta.url)), markdown);
console.log(`Wrote dist/index.md (${markdown.length} bytes)`);

// Cloudflare Pages Function, scoped by file-based routing to the "/" route
// only (this is a single-page site — see src/index.tsx). Serves the
// build-time-generated dist/index.md (scripts/generate-markdown.mjs) when a
// client asks for `Accept: text/markdown`; everyone else falls through to
// the normal prerendered HTML.
export async function onRequest(context) {
	const accept = context.request.headers.get('Accept') ?? '';
	if (!accept.includes('text/markdown')) {
		return context.next();
	}

	const mdUrl = new URL('/index.md', context.request.url);
	const asset = await context.env.ASSETS.fetch(new Request(mdUrl, context.request));
	if (!asset.ok) {
		return context.next();
	}

	const markdown = await asset.text();
	return new Response(markdown, {
		status: 200,
		headers: {
			'content-type': 'text/markdown; charset=utf-8',
			'x-markdown-tokens': String(Math.ceil(markdown.length / 4)),
		},
	});
}

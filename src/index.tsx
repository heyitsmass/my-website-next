import { hydrate, prerender as ssr } from 'preact-iso';
import './styles.css';

export function App() {
	return (
		<main class="min-h-screen bg-cream font-display text-ink">
			<span class="text-ink-soft">Hello from Preact</span>
		</main>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app')!);
}

export async function prerender() {
	return await ssr(<App />);
}

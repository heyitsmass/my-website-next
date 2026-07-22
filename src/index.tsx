import { hydrate, prerender as ssr } from 'preact-iso';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import './styles.css';

export function App() {
	return (
		<div class="min-h-screen bg-cream text-ink">
			<Nav />
			<main>
				<Hero />
			</main>
			<Footer />
		</div>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app')!);
}

export async function prerender() {
	return await ssr(<App />);
}

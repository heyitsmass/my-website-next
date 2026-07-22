import { hydrate, prerender as ssr } from 'preact-iso';
import { Brands } from './components/Brands';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Work } from './components/Work';
import { useReveal } from './hooks/useReveal';
import './styles.css';

export function App() {
	useReveal();
	return (
		<div class="min-h-screen bg-cream text-ink">
			<Nav />
			<main>
				<Hero />
				<Brands />
				<Work />
				<Contact />
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

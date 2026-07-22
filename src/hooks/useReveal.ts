import { useEffect } from 'preact/hooks';

export function useReveal() {
	useEffect(() => {
		const els = document.querySelectorAll('.reveal');
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			els.forEach((el) => el.classList.add('reveal-visible'));
			return;
		}
		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('reveal-visible');
						io.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.15 },
		);
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}

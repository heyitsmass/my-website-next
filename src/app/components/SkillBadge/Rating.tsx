export default function Rating({ rating = 4, color = '#3b82f6' }: { rating: number; color: string }) {
	return Array.from({ length: rating + 1 }).map((_, i) => {
		const isActive = i < rating;
		return (
			<div
				key={i.toString()}
				className={`h-2 w-8 rounded-full transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-30'}`}
				style={{ backgroundColor: isActive ? color : '#e5e7eb' }}
			/>
		);
	});
}

export default function Badge({ text }: { text: string }) {
	return (
		<span className="px-2 py-1 text-xs font-medium rounded-full bg-opacity-20 bg-purple-700 text-purple-300 backdrop-blur-sm">
			{text}
		</span>
	);
}

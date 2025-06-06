export const twMerge = (...args: (string | undefined | null | boolean)[]) => {
	const parts = [];

	for (const arg of args) {
		if (typeof arg === 'string') parts.push(arg);
		continue;
	}

	return parts.join(' ');
};

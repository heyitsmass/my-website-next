'use client';
import { useEffect, useState } from 'react';

export default function useLocalStorageState<T>(key: string, defaultValue?: T): [value: T, setValue: (value: T) => void] {
	const [value, setValue] = useState<T>(defaultValue as T);

	useEffect(() => {
		let stored: T | undefined;

		try {
			stored = JSON.parse(localStorage[key]) as T;
		} catch {
			stored = defaultValue;
		}

		setValue(stored as T);
	}, [defaultValue, key]);

	const handleChange = (v: T) => {
		localStorage.setItem(key, JSON.stringify(v));
		setValue(v);
	};

	return [value, handleChange];
}

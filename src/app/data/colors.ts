import { colors } from '@mui/material';

const SOURCE = 'https://raw.githubusercontent.com/heyitsmass/github-colors/refs/heads/master/colors.json';

type Colors = {
	[x: string]: {
		color: string;
		url: string;
	};
};

class Color {
	private static instance: Color;

	cache: Colors;

	private constructor(cache: Colors) {
		this.cache = cache;
	}
	public static async init() {
		if (!this.instance) {
			const data = await fetch(SOURCE).then<Colors>((res) => res.json());
			this.instance = new Color(data);
		}
		return this.instance.cache;
	}
}

export async function fetchColor(): Promise<Colors>;
export async function fetchColor(lang: string): Promise<string>;
export async function fetchColor(lang?: string) {
	const colors = await Color.init();

	if (!lang) return colors;
	const color = colors[lang]?.color;
	return color || '#000000';
}

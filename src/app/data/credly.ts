import { Badge, CredlyAPIResponse } from '@/types';

const SOURCE = 'https://www.credly.com/users/heyitsmass/badges?page=1&page_size=48&sort=rank';

class Credly {
	private static instance: Credly;
	cache: Badge[];
	private constructor(cache: Badge[]) {
		this.cache = cache;
	}
	public static async init() {
		if (!this.instance) {
			const data = await fetch(SOURCE, {
				headers: {
					'accept': 'application/json',
				},
			})
				.then<CredlyAPIResponse>((res) => res.json())
				.then((res) => res.data);
			this.instance = new Credly(data);
		}
		return this.instance.cache;
	}
}

export const fetchBadges = async () => Credly.init();

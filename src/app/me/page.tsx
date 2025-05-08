'use server';
import { Bibliography, CredlyBadgeWallet } from '../components';
import { fetchBadges } from '../data';

export default async function Page() {
	return (
		<section className="page px-6 flex flex-col items-center w-full gap-4">
			<Bibliography />
			<CredlyBadgeWallet badges={fetchBadges()} />
		</section>
	);
}

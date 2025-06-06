'use client';
import { twMerge } from '@/utils';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default function Loading({
	isLoading = true,

	className,
	...props
}: {
	isLoading?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
	const subClass = isLoading ? 'm-segment-overlay' : 'm-segment';

	return (
		<div className={twMerge(className, 'm-loader-container')} {...props}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 459.73144531 561.59082031"
				className="*:fill-current"
			>
				<polygon
					id="m-segment-overlay-1"
					className={subClass}
					points=".15039062 108.72753906 88.45605469 187.87695312 88.3828125 410.87109375 .46191406 459.53320312 .15039062 108.72753906"
				/>
				<polygon
					id="m-segment-overlay-5"
					className={subClass}
					points="215.80175781 291.25585938 303.09765625 93.15722656 341.71582031 251.42773438 273.30761719 407.99023438 215.80175781 291.25585938"
				/>
				<polygon
					id="m-segment-overlay-8"
					className={subClass}
					points="345.53710938 494.3828125 410.171875 431.66601562 459.73144531 561.59082031 345.53710938 494.3828125"
				/>
				<polygon
					id="m-segment-overlay-7"
					className={subClass}
					points="337.19726562 0 437.35546875 105.05761719 437.3828125 405.5 345.60546875 494.59570312 337.19726562 0"
				/>
				<polygon
					id="m-segment-overlay-3"
					className={subClass}
					points="86.20703125 190.57910156 147.86425781 109.06738281 215.96679688 291.15722656 154.65332031 408.2109375 86.20703125 190.57910156"
				/>
				<polygon
					id="m-segment-overlay-2"
					className={subClass}
					points="0 108.85058594 148.03515625 109.17285156 86.31542969 190.69824219 0 108.85058594"
				/>
				<polygon
					id="m-segment-overlay-4"
					className={subClass}
					points="215.87597656 290.97167969 273.44335938 407.83300781 154.51171875 408.05175781 215.87597656 290.97167969"
				/>
				<polygon
					id="m-segment-overlay-6"
					className={subClass}
					points="302.97363281 93.49023438 337.20800781 .21972656 337.40136719 .25195312 341.71875 251.44921875 341.52246094 251.47460938 302.97363281 93.49023438"
				/>
			</svg>
		</div>
	);
}

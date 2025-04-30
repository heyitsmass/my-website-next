'use client';

import { lazy, Suspense, useRef } from 'react';
import Spline from '@splinetool/react-spline/next';

import { cache } from 'react';

const RunSpline = lazy(async () => {
	return {
		default: () => <Spline scene={'/scene.splinecode'} />,
	};
});

export default function Home() {
	return <section className="w-full">{<RunSpline />}</section>;
}

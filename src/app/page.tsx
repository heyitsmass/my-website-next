'use client';

import { lazy } from 'react';
import Spline from '@splinetool/react-spline/next';

const RunSpline = lazy(async () => {
	return {
		default: () => <Spline scene={'/scene.splinecode'} />,
	};
});

export default function Home() {
	return <section className="page">{<RunSpline />}</section>;
}

'use server';
import { fetchColor } from '@/colors';
import React from 'react';

type ColorWrapperProps<T> = {
	name: string;
	Component: ({ color, ...props }: { color: Promise<string> } & T) => React.JSX.Element;
} & T;

export default async function ColorWrapper<T>({ name, Component, ...props }: ColorWrapperProps<T>) {
	return <Component color={fetchColor(name)} {...(props as Exclude<T, 'color'>)} />;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';

export interface Route {
	name: string;
	path: string;
	component: ReactNode | any;
}

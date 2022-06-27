import { IRoute } from '../models/route';
import Home from '../pages/home';
import Trend from '../pages/trend';

const routes  = {
	home: '/',
	trends: '/trends',
};
export const publicRoutes: IRoute[] = [
	{
		path: routes.home,
		component: Home,
	},
	{
		path: routes.trends,
		component: Trend,
	},
];

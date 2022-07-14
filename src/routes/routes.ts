import ProductList from '~/pages/Admin/product-manager/ProductList';
import Detail from '~/pages/Detail';
import { Home } from '../pages/Home';
import { Route } from './routes.type';

const publicRoutes: Route[] = [
	{ path: '', name: 'home', component: Home },
	{ path: 'detail/:id', name: 'detail', component: Detail },
];
const privateRoutes: Route[] = [
	{ path: 'product-manager', name: 'product-manager', component: ProductList },
];
export { publicRoutes, privateRoutes };

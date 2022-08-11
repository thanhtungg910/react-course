import { lazy } from 'react';
import { Route } from './routes.type';
const ProductAddLazy = lazy(
	() => import('~/pages/Admin/product-manager/ProductAdd')
);
const ProductEditLazy = lazy(
	() => import('~/pages/Admin/product-manager/ProductEdit')
);
const ProductListLazy = lazy(
	() => import('~/pages/Admin/product-manager/ProductList')
);
const HomeLazy = lazy(() => import('~/pages/Home'));
const DetailLazy = lazy(() => import('~/pages/Detail'));
const CartLazy = lazy(() => import('~/pages/Cart'));
const CheckoutLazy = lazy(() => import('~/pages/Checkout'));
const OrderLazy = lazy(() => import('~/pages/Admin/order-manager'));

const publicRoutes: Route[] = [
	{ path: '', name: 'home', component: HomeLazy },
	{ path: 'cart', name: 'cart', component: CartLazy },
	{ path: 'detail/:id', name: 'detail', component: DetailLazy },
	{ path: '/checkout', name: 'checkout', component: CheckoutLazy },
];
const privateRoutes: Route[] = [
	{
		path: 'product-manager',
		name: 'product-manager',
		component: ProductListLazy,
	},
	{
		path: 'product-manager/product-add',
		name: 'product-add',
		component: ProductAddLazy,
	},
	{
		path: 'product-manager/orders',
		name: 'order',
		component: OrderLazy,
	},
	{
		path: 'product-manager/product-edit/:id',
		name: 'product-edit',
		component: ProductEditLazy,
	},
];
export { publicRoutes, privateRoutes };

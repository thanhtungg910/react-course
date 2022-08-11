import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './api';

export const productApi = createApi({
	reducerPath: 'productApi',
	baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
	tagTypes: ['Products'],
	keepUnusedDataFor: 30,
	endpoints: (builder) => ({
		addProduct: builder.mutation({
			query: (data) => {
				return {
					url: '/products',
					method: 'POST',
					body: {
						...data,
						status: true,
					},
				};
			},
		}),
		updateProduct: builder.mutation({
			query: (data) => {
				return {
					url: '/products/' + data.id,
					method: 'PATCH',
					body: data,
				};
			},
		}),
		getProducts: builder.query({
			query: () => 'products?_sort=id&_order=desc',
			keepUnusedDataFor: 5,
		}),
		getProduct: builder.query({
			query: (req: string | undefined) => {
				return 'products/' + req;
			},
		}),
		setStatusProduct: builder.mutation({
			query: (data: { id: number | undefined; status: boolean }) => {
				return {
					url: '/products/' + data.id,
					method: 'PATCH',
					body: data,
				};
			},
		}),
		getByIdCategory: builder.mutation({
			query: (id: string | number = '') => {
				let url = 'products?_sort=id&_order=desc';
				if (id && id !== '') {
					url = 'products?_sort=id&_order=desc&categoryId=' + id;
				}
				return {
					url,
					method: 'GET',
				};
			},
		}),
	}),
});
export const {
	useAddProductMutation,
	reducerPath,
	useLazyGetProductsQuery,
	useGetProductsQuery,
	useGetProductQuery,
	useLazyGetProductQuery,
	usePrefetch,
	useUpdateProductMutation,
	useSetStatusProductMutation,
	useGetByIdCategoryMutation,
} = productApi;

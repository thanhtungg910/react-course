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
					body: data,
				};
			},
		}),
		getProducts: builder.query({
			query: () => 'products',
			keepUnusedDataFor: 5,
		}),
	}),
});
export const {
	useAddProductMutation,
	reducerPath,
	useLazyGetProductsQuery,
	useGetProductsQuery,
} = productApi;

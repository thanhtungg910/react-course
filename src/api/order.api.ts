import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './api';

export const orderApi = createApi({
	reducerPath: 'orderApi',
	tagTypes: ['orders'],
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		createOrder: builder.mutation({
			query: (data) => {
				return {
					url: '/orders',
					method: 'POST',
					body: data,
				};
			},
		}),
		getOrders: builder.query({
			query: () => 'orders?_sort=id&_order=desc',
		}),
		getOrder: builder.query({
			query: (id: string) => {
				return `orders/${id}?_sort=id&_order=desc`;
			},
		}),
	}),
});
export const { useCreateOrderMutation, useGetOrdersQuery, useGetOrderQuery } =
	orderApi;

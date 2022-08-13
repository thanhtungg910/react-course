import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import OrderConst from '~/const/order.const';
import { baseUrl, instance } from './api';

export const orderApi = createApi({
	reducerPath: 'orderApi',
	tagTypes: ['Orders'],
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
			query: (accessOrder: number) =>
				`orders?_sort=id&_order=desc&accessOrder=${accessOrder}`,
			providesTags: ['Orders'],
		}),
		getOrder: builder.query({
			query: (id: string) => {
				return `orders/${id}?_sort=id&_order=desc`;
			},
		}),
		updateOrder: builder.mutation({
			query: (data) => {
				return {
					url: `orders/${data.id}`,
					method: 'PATCH',
					body: data,
				};
			},
			invalidatesTags: ['Orders'],
		}),
		removeOrder: builder.mutation({
			query: (data) => {
				return {
					url: `orders/${data.id}`,
					method: 'DELETE',
					body: data,
				};
			},
			invalidatesTags: ['Orders'],
		}),
	}),
});

export const {
	useCreateOrderMutation,
	useGetOrdersQuery,
	useGetOrderQuery,
	useUpdateOrderMutation,
	useRemoveOrderMutation,
} = orderApi;
export const accessOrder = (id: string) => {
	return instance.put(`orders/${id}`, {
		id: +id,
		accessOrder: OrderConst.ACCESS_ORDER,
	});
};

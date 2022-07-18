import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './api';

export const categoryApi = createApi({
	reducerPath: 'categoryApi',
	baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
	tagTypes: ['Categories'],
	keepUnusedDataFor: 30,
	endpoints: (builder) => ({
		getCategories: builder.query({
			query: () => 'categories?_sort=id&_order=desc',
			keepUnusedDataFor: 5,
		}),
		getCategory: builder.query({
			query: (req: string | undefined) => {
				return 'categories/' + req;
			},
		}),
	}),
});
export const {
	useGetCategoriesQuery,
	useLazyGetCategoriesQuery,
	useLazyGetCategoryQuery,
} = categoryApi;

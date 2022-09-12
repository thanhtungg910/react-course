/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-mixed-spaces-and-tabs */
import axios from 'axios';
export const baseUrl: string | undefined = 'http://localhost:3001';
export const API_UPLOAD = import.meta.env.VITE_API_UPLOAD;
export const instance = axios.create({
	baseURL: baseUrl,
	headers: {
		'Content-type': 'application/json',
	},
});
export const setStatusFetchProduct = (data: {
	id: number | undefined | string;
	status: boolean;
}) => {
	return instance.patch('/products/' + data.id, data);
};
export const getProducts = (id: any) => {
	let url = '/products?_sort=id&_order=desc';
	if (id) {
		url += `&&categoryId=${id}`;
	}
	return instance.get(url);
};
export const searchProduct = (text: string) => {
	return instance.get('/products?q=' + text);
};

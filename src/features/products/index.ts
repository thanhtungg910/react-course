/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	isLoading: true,
	isError: false,
	isSuccess: false,
	messages: '',
	products: [],
};

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		getProducts: (state, action) => {},
		setProductSuccess: (state, { payload }): any => {
			return {
				...state,
				isSuccess: true,
				isLoading: false,
				products: [...payload],
			};
		},
		setIsSuccess: (state, { payload }) => {
			return { ...state, isSuccess: payload };
		},
		setIsLoading: (state, { payload }) => {
			return { ...state, isSuccess: payload };
		},
	},
});
export const { setProductSuccess, setIsSuccess, setIsLoading, getProducts } =
	productSlice.actions;
export default productSlice.reducer;

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
		loadProductSuccess: (state, { payload }) => {
			console.log(payload);
			return state;
		},
		setIsSuccess: (state, { payload }) => {
			return { ...state, isSuccess: payload };
		},
		setIsLoading: (state, { payload }) => {
			return { ...state, isSuccess: payload };
		},
	},
});
export const { loadProductSuccess, setIsSuccess, setIsLoading } =
	productSlice.actions;
export default productSlice.reducer;

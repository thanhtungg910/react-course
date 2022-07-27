/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from '~/types/product.type';

export interface Action {
	type: string;
	payload: ProductType;
}
export interface InitialState {
	cart: ProductType[];
}

const initialState: InitialState = {
	cart: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state: InitialState, action: Action): any => {
			const exitItem: any = state.cart.find(
				(_item) => _item.id === action.payload.id
			);
			if (exitItem && exitItem !== undefined) {
				exitItem.quantity += 1;
			} else {
				state.cart.push(action?.payload);
			}
		},
		increment: (state, action): any => {
			const exit: any = state.cart.find((_item) => _item.id === action.payload);
			if (!exit) {
				return;
			}
			exit.quantity++;
		},
		decrement: (state, action): any => {
			const exitItem: any = state.cart.find(
				(_item) => _item.id === action.payload
			);
			if (!exitItem) {
				return;
			}
			exitItem.quantity--;
			if (exitItem.quantity <= 0) {
				const res = state.cart.filter((_item) => _item.id !== action.payload);
				state.cart = [...res];
			}
		},
	},
});
export const { addToCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;

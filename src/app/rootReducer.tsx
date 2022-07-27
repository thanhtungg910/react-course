import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from '~/features/cart/cartSlice';
import productSlice from '~/features/products/index';
import { userSlice } from '~/features/user/userSlice';
const rootReducer = combineReducers({
	products: productSlice,
	users: userSlice.reducer,
	cart: cartSlice,
});
export default rootReducer;

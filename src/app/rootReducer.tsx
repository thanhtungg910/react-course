import { combineReducers } from '@reduxjs/toolkit';
import productSlice from '~/features/products/index';
import { userSlice } from '~/features/user/userSlice';
const rootReducer = combineReducers({
	products: productSlice,
	users: userSlice.reducer,
});
export default rootReducer;

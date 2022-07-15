import { combineReducers } from '@reduxjs/toolkit';
import productSlice from '~/features/products/index';
const rootReducer = combineReducers({
	products: productSlice,
});
export default rootReducer;

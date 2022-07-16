import { createSelector } from '@reduxjs/toolkit';

export const selectSelf = (state: string | any) => state.persistedReducer;
export const productSelector = createSelector(selectSelf, (state) => {
	return state.products;
});

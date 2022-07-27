import { createSelector } from '@reduxjs/toolkit';
import { selectSelf } from '../products/productSelector';

export const cartSelector = createSelector(selectSelf, (state) => state.cart);

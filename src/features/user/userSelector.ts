import { createSelector } from '@reduxjs/toolkit';
import { selectSelf } from '../products/productSelector';

const userSelector = createSelector(selectSelf, (state) => {
	return state.users;
});
export default userSelector;

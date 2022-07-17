/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	user: {},
	isLogin: false,
};
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, payload) => {},
		loginSuccess: (state, { payload }) => {
			return {
				isLogin: true,
				user: {
					...payload?.data.user,
				},
			};
		},
		signUp: (state, payload) => {},
	},
});
export const { login, loginSuccess, signUp } = userSlice.actions;
export default userSlice.reducer;

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
		loginWithGoogle: (state, { payload }) => {
			return {
				isLogin: true,
				user: {
					...payload,
				},
			};
		},
		loginSuccess: (state, { payload }) => {
			return {
				isLogin: true,
				user: {
					...payload?.data.user,
				},
			};
		},
		signUp: (state, payload) => {},
		signOut: () => initialState,
	},
});
export const { login, loginSuccess, signUp, loginWithGoogle, signOut } =
	userSlice.actions;
export default userSlice.reducer;

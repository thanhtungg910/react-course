/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	user: {},
	isError: false,
	isLogin: false,
	message: '',
};
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, payload) => {},
		loginWithGoogle: (state, { payload }) => {
			return {
				...state,
				isLogin: true,
				user: {
					...payload,
				},
			};
		},
		loginSuccess: (state, { payload }) => {
			return {
				...state,
				isLogin: true,
				user: {
					...payload?.data.user,
				},
			};
		},
		signUp: (state, payload) => {},
		signOut: () => initialState,
		loginError: (state, { payload }) => {
			return {
				...state,
				isError: true,
				isLogin: false,
				message: payload,
			};
		},
	},
});
export const {
	login,
	loginSuccess,
	signUp,
	loginWithGoogle,
	signOut,
	loginError,
} = userSlice.actions;
export default userSlice.reducer;

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
					...payload,
				},
			};
		},
		signUpSuccess: (state?) => {
			return {
				...state,
				isError: false,
				isLogin: false,
				message: '',
			};
		},
		signUp: (state, action) => {},
		signUpError: (state, { payload }) => {
			return {
				...state,
				isError: true,
				isLogin: false,
				message: payload,
			};
		},
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
	signUpError,
	signUpSuccess,
} = userSlice.actions;
export default userSlice.reducer;

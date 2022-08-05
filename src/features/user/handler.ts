/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put } from 'redux-saga/effects';
import { signIn, signUp } from '~/api/auth.api';
import { User } from '~/types/user';
import {
	loginError,
	loginSuccess,
	signUpError,
	signUpSuccess,
} from './userSlice';

export function* handlerUser({ payload }: { payload: User }): any {
	try {
		yield call(signUp, payload);
		yield put(signUpSuccess());
	} catch (error: any) {
		yield put(signUpError(error?.response?.data));
	}
}
export function* handlerLoginUser({ payload }: { payload: User }): any {
	try {
		const { data } = yield call(signIn, payload);
		yield put(loginSuccess({ data }));
	} catch (error: any) {
		yield put(loginError(error?.response.data));
	}
}

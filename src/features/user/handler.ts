/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put } from 'redux-saga/effects';
import { signIn, signUp } from '~/api/auth.api';
import { User } from '~/types/user';
import { loginSuccess } from './userSlice';

export function* handlerUser({ payload }: { payload: User }): any {
	try {
		yield call(signUp, payload);
	} catch (error) {
		console.log(error);
	}
}
export function* handlerLoginUser({ payload }: { payload: User }): any {
	try {
		const { data } = yield call(signIn, payload);
		yield put(loginSuccess({ data }));
	} catch (error) {
		console.log(error);
	}
}

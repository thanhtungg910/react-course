/* eslint-disable no-console */
import { call, put } from 'redux-saga/effects';
import { getProducts } from '~/api/api';
import { setProductSuccess } from '.';
export function* handlerSaga({ payload }: any): any {
	try {
		const { data } = yield call(getProducts, payload);
		yield put(setProductSuccess(data));
	} catch (error) {
		console.log(error);
	}
}

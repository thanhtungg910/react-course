import { call, put } from 'redux-saga/effects';
import { getProducts } from '~/api/api';
import { setProductSuccess } from '.';
export function* handlerSaga(): any {
	try {
		const { data } = yield call(getProducts);
		yield put(setProductSuccess(data));
	} catch (error) {
		console.log(error);
	}
}

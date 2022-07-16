import { all, fork } from 'redux-saga/effects';
import productSaga from '~/features/products/productSaga';
export function* rootSaga() {
	yield all([fork(productSaga)]);
}

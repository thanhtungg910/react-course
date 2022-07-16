import { takeLatest } from 'redux-saga/effects';
import { handlerSaga } from './handlerSaga';
import { getProducts } from './index';

export default function* productSaga() {
	yield takeLatest(getProducts.type, handlerSaga);
}

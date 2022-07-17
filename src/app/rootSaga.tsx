import { all, fork } from 'redux-saga/effects';
import productSaga from '~/features/products/productSaga';
import { userSaga } from '~/features/user/userSaga';
export function* rootSaga() {
	yield all([fork(productSaga), fork(userSaga)]);
}

import { takeLatest } from 'redux-saga/effects';
import { handlerLoginUser, handlerUser } from './handler';
import { login, signUp } from './userSlice';

export function* userSaga() {
	yield takeLatest(signUp.type, handlerUser);
	yield takeLatest(login.type, handlerLoginUser);
}

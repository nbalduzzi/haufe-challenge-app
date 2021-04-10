import { takeEvery, call, put, fork } from 'redux-saga/effects';

import * as actions from '../actions/auth';
import * as api from '../api/auth';

function* login({ payload }) {
    try {
        const response = yield call(api.login, payload);

        if (response.statusCode) throw response;
        yield put(actions.getLoginSuccess(response));
    } catch (e) {
        console.error(e);
        yield put(actions.getLoginError(e));
    }
}

function* register({ payload }) {
    try {
        const response = yield call(api.register, payload);

        if (response.statusCode) throw response;
        yield put(actions.getRegisterSuccess(response));
    } catch (e) {
        console.error(e);
        yield put(actions.getRegisterError(e));
    }
}

function* logout() {
    try {
        yield put(actions.getLogoutSuccess());
    } catch (e) {
        console.error(e);
        yield put(actions.getLogoutError(e));
    }
}

function* watchLoginRequest() {
    yield takeEvery(actions.Types.LOGIN_REQUEST, login);
}

function* watchRegisterRequest() {
    yield takeEvery(actions.Types.REGISTER_REQUEST, register);
}

function* watchLogoutRequest() {
    yield takeEvery(actions.Types.LOGOUT_REQUEST, logout);
}

const authSagas = [fork(watchLoginRequest), fork(watchRegisterRequest), fork(watchLogoutRequest)];

export default authSagas;

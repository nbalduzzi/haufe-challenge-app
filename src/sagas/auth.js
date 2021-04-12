import { call, put, fork, takeLatest } from 'redux-saga/effects';

import * as authService from '../services/AuthService';
import * as actions from '../actions/auth';
import * as api from '../api/auth';

function* login({ payload }) {
    try {
        const response = yield call(api.login, payload);

        if (response.statusCode) throw response;
        yield call(authService.setAsAuthenticated, response.access_token);
        yield put(actions.getLoginSuccess(response));
    } catch (e) {
        yield put(actions.getLoginError(e));
    }
}

function* register({ payload }) {
    try {
        const response = yield call(api.register, payload);

        if (response.statusCode) throw response;
        yield put(actions.getRegisterSuccess(response));
    } catch (e) {
        yield put(actions.getRegisterError(e));
    }
}

function* logout() {
    try {
        yield call(authService.logout);
        yield put(actions.getLogoutSuccess());
    } catch (e) {
        yield put(actions.getLogoutError(e));
    }
}

function* clearErrors() {
    yield put(actions.clearErrors());
}

function* watchLoginRequest() {
    yield takeLatest(actions.Types.LOGIN_REQUEST, login);
}

function* watchRegisterRequest() {
    yield takeLatest(actions.Types.REGISTER_REQUEST, register);
}

function* watchLogoutRequest() {
    yield takeLatest(actions.Types.LOGOUT_REQUEST, logout);
}

function* watchClearErrorsRequest() {
    yield takeLatest(actions.Types.LOGOUT_REQUEST, clearErrors);
}

const authSagas = [
    fork(watchLoginRequest),
    fork(watchRegisterRequest),
    fork(watchLogoutRequest),
    fork(watchClearErrorsRequest),
];

export default authSagas;

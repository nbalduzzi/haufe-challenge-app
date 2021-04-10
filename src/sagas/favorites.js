import { takeEvery, call, put, fork } from 'redux-saga/effects';

import * as actions from '../actions/favorite';
import * as characterActions from '../actions/characters';
import * as api from '../api/favorite';

function* addFavorite({ payload }) {
    try {
        const response = yield call(api.addFavorite, payload.item);

        if (response.statusCode) throw response;
        yield put(actions.addFavoriteSuccess(payload.item.id));
        yield put(characterActions.getCharacterRequest(payload.item.id));
    } catch (e) {
        console.error(e);
        yield put(actions.addFavoriteError(e));
    }
}

function* removeFavorite({ payload }) {
    try {
        const response = yield call(api.removeFavorite, payload.item);

        if (response.statusCode) throw response;
        yield put(actions.removeFavoriteSuccess(payload.item.id));
        yield put(characterActions.getCharacterRequest(payload.item.id));
    } catch (e) {
        console.error(e);
        yield put(actions.removeFavoriteError(e));
    }
}

function* watchAddFavoriteRequest() {
    yield takeEvery(actions.Types.ADD_FAVORITE_REQUEST, addFavorite);
}

function* watchRemoveFavoriteRequest() {
    yield takeEvery(actions.Types.REMOVE_FAVORITE_REQUEST, removeFavorite);
}

const favoriteSagas = [fork(watchAddFavoriteRequest), fork(watchRemoveFavoriteRequest)];

export default favoriteSagas;

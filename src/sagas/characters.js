import { takeEvery, call, put, fork } from 'redux-saga/effects';

import * as actions from '../actions/characters';
import * as api from '../api/characters';

function* fetchCharacters({ payload }) {
    try {
        const response = yield call(api.getCharacters, payload.page);
        yield put(actions.getCharactersSuccess(response.results));
    } catch (e) {
        yield put(actions.getCharactersError(e));
    }
}

function* fetchCharacter({ payload }) {
    try {
        const response = yield call(api.getCharacter, payload.id);
        yield put(actions.getCharacterSuccess(response));
    } catch (e) {
        if (e.status === 404) {
            yield put(actions.getCharacterNotFoundError());
        } else {
            yield put(actions.getCharacterError(e));
        }
    }
}

function* watchGetCharactersRequest() {
    yield takeEvery(actions.Types.GET_CHARACTERS_REQUEST, fetchCharacters);
}

function* watchGetCharacterRequest() {
    yield takeEvery(actions.Types.GET_CHARACTER_REQUEST, fetchCharacter);
}

const charactersSagas = [fork(watchGetCharactersRequest), fork(watchGetCharacterRequest)];

export default charactersSagas;

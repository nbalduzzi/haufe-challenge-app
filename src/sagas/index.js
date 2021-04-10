import { all } from 'redux-saga/effects';

import authSagas from './auth';
import characterSagas from './characters';
import favoriteSagas from './favorites';

export default function* rootSaga() {
    yield all([...authSagas, ...characterSagas, ...favoriteSagas]);
}

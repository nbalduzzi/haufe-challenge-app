import { combineReducers } from 'redux';

import * as auth from './auth';
import * as character from './characters';
import * as favorite from './favorite';

export default combineReducers({
    auth: auth.reducers,
    characters: character.reducers,
    favorites: favorite.reducers,
});

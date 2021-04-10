import { Types } from '../actions/favorite';

const initialState = { error: false, success: false, loading: true };

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_FAVORITE_SUCCESS:
            return { ...state, success: true, id: action.id, isFavorite: true, loading: false };
        case Types.ADD_FAVORITE_ERROR:
            return { ...state, error: action.error, loading: false };
        case Types.REMOVE_FAVORITE_SUCCESS:
            return { ...state, success: true, id: action.id, isFavorite: false, loading: false };
        case Types.REMOVE_FAVORITE_ERROR:
            return { ...state, error: action.error, loading: false };
        default:
            return state;
    }
};

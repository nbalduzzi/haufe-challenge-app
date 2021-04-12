import { Types } from '../actions/characters';

const initialState = { error: false, success: false, loading: true, notFound: false, items: [] };

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_CHARACTERS_SUCCESS:
            return { ...state, items: [...state.items, ...action.items], success: true, loading: false };
        case Types.GET_CHARACTERS_ERROR:
            return { ...state, error: action.error, loading: false };
        case Types.GET_CHARACTER_SUCCESS:
            return { ...state, success: true, item: action.item, loading: false };
        case Types.GET_CHARACTER_ERROR:
            return { ...state, error: action.error, loading: false };
        case Types.GET_CHARACTER_NOT_FOUND_ERROR:
            return { ...state, error: true, notFound: true, loading: false };
        default:
            return state;
    }
};

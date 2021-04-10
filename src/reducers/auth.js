import { Types } from '../actions/auth';

const initialState = { error: false, success: false, loading: true, loggedIn: false };

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOGIN_SUCCESS:
            return { ...state, item: action.item, success: true, loggedIn: true, loading: false };
        case Types.LOGIN_ERROR:
            return { ...state, error: true, loggedIn: false, loading: false };
        case Types.REGISTER_SUCCESS:
            return { ...state, success: true, loggedIn: false, loading: false };
        case Types.REGISTER_ERROR:
            return { ...state, error: true, loggedIn: false, loading: false };
        case Types.LOGOUT_SUCCESS:
            return { ...state, success: true, loggedIn: false, loading: false };
        case Types.LOGOUT_ERROR:
            return { ...state, error: true, loggedIn: true, loading: false };
        default:
            return state;
    }
};

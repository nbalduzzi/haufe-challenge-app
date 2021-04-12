export const Types = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',
    REGISTER_REQUEST: 'REGISTER_REQUEST',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_ERROR: 'REGISTER_ERROR',
    LOGOUT_REQUEST: 'LOGOUT_REQUEST',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    LOGOUT_ERROR: 'LOGOUT_ERROR',
    CLEAR_ERRORS: 'CLEAR_ERRORS',
};

export const getLoginRequest = (payload) => ({ type: Types.LOGIN_REQUEST, payload });
export const getLoginSuccess = (item) => ({ type: Types.LOGIN_SUCCESS, item });
export const getLoginError = (error) => ({ type: Types.LOGIN_ERROR, error });
export const getRegisterRequest = (payload) => ({ type: Types.REGISTER_REQUEST, payload });
export const getRegisterSuccess = (item) => ({ type: Types.REGISTER_SUCCESS, payload: { item } });
export const getRegisterError = (error) => ({ type: Types.REGISTER_ERROR, error });
export const getLogoutRequest = () => ({ type: Types.LOGOUT_REQUEST });
export const getLogoutSuccess = () => ({ type: Types.LOGOUT_SUCCESS });
export const getLogoutError = () => ({ type: Types.LOGOUT_ERROR });
export const clearErrors = () => ({ type: Types.CLEAR_ERRORS });

export const Types = {
    ADD_FAVORITE_REQUEST: 'ADD_FAVORITE_REQUEST',
    ADD_FAVORITE_SUCCESS: 'ADD_FAVORITE_SUCCESS',
    ADD_FAVORITE_ERROR: 'ADD_FAVORITE_ERROR',
    REMOVE_FAVORITE_REQUEST: 'REMOVE_FAVORITE_REQUEST',
    REMOVE_FAVORITE_SUCCESS: 'REMOVE_FAVORITE_SUCCESS',
    REMOVE_FAVORITE_ERROR: 'REMOVE_FAVORITE_ERROR',
};

export const addFavoriteRequest = (item) => ({ type: Types.ADD_FAVORITE_REQUEST, payload: { item } });
export const addFavoriteSuccess = (id) => ({ type: Types.ADD_FAVORITE_SUCCESS, id });
export const addFavoriteError = (error) => ({ type: Types.ADD_FAVORITE_ERROR, error });
export const removeFavoriteRequest = (item) => ({ type: Types.REMOVE_FAVORITE_REQUEST, payload: { item } });
export const removeFavoriteSuccess = (id) => ({ type: Types.REMOVE_FAVORITE_SUCCESS, id });
export const removeFavoriteError = (error) => ({ type: Types.REMOVE_FAVORITE_ERROR, error });

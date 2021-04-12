export const Types = {
    GET_CHARACTERS_REQUEST: 'GET_CHARACTERS_REQUEST',
    GET_CHARACTERS_SUCCESS: 'GET_CHARACTERS_SUCCESS',
    GET_CHARACTERS_ERROR: 'GET_CHARACTERS_ERROR',
    GET_MORE_CHARACTERS_REQUEST: 'GET_MORE_CHARACTERS_REQUEST',
    GET_MORE_CHARACTERS_SUCCESS: 'GET_MORE_CHARACTERS_SUCCESS',
    GET_MORE_CHARACTERS_ERROR: 'GET_MORE_CHARACTERS_ERROR',
    GET_CHARACTER_REQUEST: 'GET_CHARACTER_REQUEST',
    GET_CHARACTER_SUCCESS: 'GET_CHARACTER_SUCCESS',
    GET_CHARACTER_ERROR: 'GET_CHARACTER_ERROR',
    GET_CHARACTER_NOT_FOUND_ERROR: 'GET_CHARACTER_NOT_FOUND_ERROR',
};

export const getCharactersRequest = (page) => ({ type: Types.GET_CHARACTERS_REQUEST, payload: { page } });
export const getCharactersSuccess = (items) => ({ type: Types.GET_CHARACTERS_SUCCESS, items });
export const getCharactersError = (error) => ({ type: Types.GET_CHARACTERS_ERROR, error });
export const getMoreCharactersRequest = (page) => ({ type: Types.GET_MORE_CHARACTERS_REQUEST, payload: { page } });
export const getMoreCharactersSuccess = (items) => ({ type: Types.GET_MORE_CHARACTERS_SUCCESS, items });
export const getMoreCharactersError = (error) => ({ type: Types.GET_MORE_CHARACTERS_ERROR, error });
export const getCharacterRequest = (id) => ({ type: Types.GET_CHARACTER_REQUEST, payload: { id } });
export const getCharacterSuccess = (item) => ({ type: Types.GET_CHARACTER_SUCCESS, item });
export const getCharacterError = (error) => ({ type: Types.GET_CHARACTER_ERROR, error });
export const getCharacterNotFoundError = () => ({ type: Types.GET_CHARACTER_NOT_FOUND_ERROR });

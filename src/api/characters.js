export const getCharacters = async (page = 0) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/characters?page=${page}`, {
            method: 'GET',
            headers: { authorization: window.localStorage.getItem('access_token') },
        });

        if (!response.ok) throw response;
        return await response.json();
    } catch (e) {
        throw e;
    }
};

export const getCharacter = async (id) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/characters/${id}`, {
            method: 'GET',
            headers: { authorization: window.localStorage.getItem('access_token') },
        });

        if (!response.ok) throw response;
        return await response.json();
    } catch (e) {
        throw e;
    }
};

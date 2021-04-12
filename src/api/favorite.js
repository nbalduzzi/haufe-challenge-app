export const addFavorite = async (characterId) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/favorites/${characterId}`, {
            method: 'PUT',
            headers: { authorization: window.localStorage.getItem('access_token'), 'Content-Type': 'application/json' },
        });

        if (!response.ok) throw response;
        return await response.json();
    } catch (e) {
        throw e;
    }
};

export const removeFavorite = async (characterId) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/favorites/${characterId}`, {
            method: 'DELETE',
            headers: { authorization: window.localStorage.getItem('access_token') },
        });

        if (!response.ok) throw response;
        return;
    } catch (e) {
        throw e;
    }
};

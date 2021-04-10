export const getCharacters = async (page = 0) => {
    try {
        const response = await fetch(`http://localhost:3001/characters?page=${page}`, {
            method: 'GET',
            headers: { authorization: window.localStorage.getItem('access_token') },
        });

        if (!response.ok) throw response;
        return await response.json();
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export const getCharacter = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/characters/${id}`, {
            method: 'GET',
            headers: { authorization: window.localStorage.getItem('access_token') },
        });

        if (!response.ok) throw response;
        return await response.json();
    } catch (e) {
        console.error(e);
        throw e;
    }
};

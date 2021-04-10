export const addFavorite = async (character) => {
    return fetch(`http://localhost:3001/favorites/${character.id}`, {
        method: 'PUT',
        headers: { authorization: window.localStorage.getItem('access_token'), 'Content-Type': 'application/json' },
        body: JSON.stringify(character),
    }).catch((err) => console.error(err));
};

export const removeFavorite = async (character) => {
    return fetch(`http://localhost:3001/favorites/${character.id}`, {
        method: 'DELETE',
        headers: { authorization: window.localStorage.getItem('access_token') },
    }).catch((err) => console.error(err));
};

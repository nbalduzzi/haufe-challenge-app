export const login = async (payload) => {
    return fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })
        .then((res) => res.json())
        .catch((err) => console.error(err));
};

export const register = async (payload) => {
    return fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })
        .then((res) => res.json())
        .catch((err) => console.error(err));
};

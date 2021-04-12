export const login = async (payload) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!response.ok) throw response;
        return await response.json();
    } catch (e) {
        throw e;
    }
};

export const register = async (payload) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!response.ok) throw response;
        return await response.json();
    } catch (e) {
        throw e;
    }
};

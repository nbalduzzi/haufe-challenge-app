export const login = async (payload) => {
    try {
        const response = await fetch('http://localhost:3001/auth/login', {
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
        const response = await fetch('http://localhost:3001/auth/register', {
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

export const isAuthenticated = () => window.localStorage.getItem('access_token') !== null;
export const setAsAuthenticated = (token) => window.localStorage.setItem('access_token', token);
export const logout = () => window.localStorage.removeItem('access_token');

import {} from 'react-router';
import { getLogoutRequest } from '../actions/auth';

const authMiddleware = ({ dispatch }) => (next) => async (action) => {
    if (action.error && action.error.status === 401) {
        dispatch(getLogoutRequest());
        window.location.href = '/login';
    } else {
        return next(action);
    }
};

export default authMiddleware;

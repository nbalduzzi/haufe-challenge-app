import { getLogoutRequest } from '../actions/auth';

const authMiddleware = ({ dispatch }) => (next) => async (action) => {
    if (action.error && action.error.statusCode === 401) {
        console.info('login out...');
        dispatch(getLogoutRequest());
    } else {
        return next(action);
    }
};

export default authMiddleware;

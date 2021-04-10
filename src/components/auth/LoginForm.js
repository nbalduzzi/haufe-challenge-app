import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import AuthForm from './AuthForm';
import { setAsAuthenticated } from '../../services/AuthService';
import { getLoginRequest } from '../../actions/auth';

export default function LoginForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const accessToken = useSelector((state) => state.auth?.item?.access_token);

    if (accessToken) {
        setAsAuthenticated(accessToken);
        history.replace('/');
    }

    const handleChangeUsername = (event) => setUsername(event.target.value);
    const handleChangePassword = (event) => setPassword(event.target.value);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        dispatch(getLoginRequest({ username, password }));
    };

    return (
        <React.Fragment>
            <AuthForm onSubmit={handleFormSubmit}>
                <div className="user-box">
                    <input type="email" placeholder="name@example.com" onChange={handleChangeUsername} />
                </div>
                <div className="user-box">
                    <input type="password" placeholder="Password" onChange={handleChangePassword} />
                </div>
                <div>
                    <button className="btn" type="submit">
                        Sign In
                    </button>
                </div>
                <div>
                    <Link className="signup" to="/register">
                        Sign Up
                    </Link>
                </div>
            </AuthForm>
        </React.Fragment>
    );
}

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import AuthForm from './AuthForm';
import { getLoginRequest } from '../../actions/auth';

export default function LoginPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const isLoggedIn = useSelector((state) => state.auth?.loggedIn);
    const error = useSelector((state) => state.auth?.error);

    const handleChangeUsername = (event) => setUsername(event.target.value);
    const handleChangePassword = (event) => setPassword(event.target.value);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        dispatch(getLoginRequest({ username, password }));
    };

    useEffect(() => {
        if (isLoggedIn) {
            history.replace('/');
        }
    }, [history, isLoggedIn]);

    return (
        <React.Fragment>
            <AuthForm onSubmit={handleFormSubmit}>
                {error ? <div className="alert-error">User or password are incorrect</div> : ''}

                <div className="input-box">
                    <input type="text" placeholder="Username" onChange={handleChangeUsername} />
                </div>
                <div className="input-box">
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

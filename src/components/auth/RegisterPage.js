import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AuthForm from './AuthForm';
import { getRegisterRequest, clearErrors } from '../../actions/auth';

export default function RegisterPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearErrors());
    }, [dispatch]);

    const error = useSelector((state) => state.auth?.error);
    const success = useSelector((state) => state.auth?.success);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername = (event) => setUsername(event.target.value);
    const handleChangePassword = (event) => setPassword(event.target.value);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        dispatch(getRegisterRequest({ username, password }));
    };

    return (
        <React.Fragment>
            <AuthForm onSubmit={handleFormSubmit}>
                {error ? <div className="alert-error">Error ocurred, please try again</div> : ''}
                {!error && success ? (
                    <div className="alert-success">Registration successful, back to login to authenticate</div>
                ) : (
                    ''
                )}

                <div className="input-box">
                    <input type="text" placeholder="Username" onChange={handleChangeUsername} />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" onChange={handleChangePassword} />
                </div>
                <div>
                    <button className="btn" type="submit">
                        Register
                    </button>
                </div>
                <div>
                    <Link className="signup" to="/login">
                        Back to Login
                    </Link>
                </div>
            </AuthForm>
        </React.Fragment>
    );
}

import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { getLogoutRequest } from './actions/auth';

import './Layout.css';

export default function Layout({ children }) {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(getLogoutRequest());
        history.replace('/login');
    };

    return (
        <React.Fragment>
            <nav id="navbar">
                <a className="nav-item" href="/">
                    <b>Haufe Challenge</b>
                </a>
                <a href="/" className="active">
                    Characters
                </a>
                {location.state && location.state.characterName ? (
                    <span className="breadcumb">&raquo; {location.state.characterName}</span>
                ) : (
                    ''
                )}
                <span className="right bold link-right btn" onClick={handleLogout}>
                    Logout
                </span>
            </nav>

            {children}
        </React.Fragment>
    );
}

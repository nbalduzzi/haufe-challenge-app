import React from 'react';
import { useHistory, useLocation } from 'react-router';

import { logout } from './services/AuthService';

import './Layout.css';

export default function Layout({ children }) {
    const location = useLocation();
    const history = useHistory();

    const handleLogout = () => {
        logout();
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
                <span className="right bold link-right" onClick={handleLogout}>
                    Logout
                </span>
            </nav>

            {children}
        </React.Fragment>
    );
}

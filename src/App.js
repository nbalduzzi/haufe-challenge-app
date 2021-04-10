import { Redirect, Route, Switch } from 'react-router';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import { isAuthenticated } from './services/AuthService';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import Layout from './Layout';
import ListCharacters from './components/characters/ListCharacters';
import CharacterDetail from './components/characters/CharacterDetail';
import NotFoundRoute from './components/NotFoundRoute';

function App() {
    return (
        <Switch>
            <Route path="/login">
                <LoginForm />
            </Route>
            <Route path="/register">
                <RegisterForm />
            </Route>
            <Route
                path="/character/:id"
                render={() =>
                    isAuthenticated() ? (
                        <Layout>
                            <CharacterDetail />
                        </Layout>
                    ) : (
                        <Redirect to={{ pathname: '/login' }} />
                    )
                }
            />
            <Route
                exact
                path="/"
                render={() =>
                    isAuthenticated() ? (
                        <Layout>
                            <ListCharacters />
                        </Layout>
                    ) : (
                        <Redirect to={{ pathname: '/login' }} />
                    )
                }
            />
            <Route path="*">
                <NotFoundRoute />
            </Route>
        </Switch>
    );
}

export default App;

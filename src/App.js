import { Switch, Route, Redirect } from 'react-router';

import './App.css';

import Layout from './Layout';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import CharactersPage from './components/characters/CharactersPage';
import CharacterDetailPage from './components/characters/CharacterDetailPage';
import NotFoundRoute from './components/NotFoundRoute';
import { isAuthenticated } from './services/AuthService';

function App() {
    return (
        <Switch>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route path="/register">
                <RegisterPage />;
            </Route>
            <Route
                exact
                path="/"
                render={(props) => {
                    if (!isAuthenticated()) {
                        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
                    }

                    return (
                        <Layout>
                            <CharactersPage {...props} />
                        </Layout>
                    );
                }}
            />
            <Route
                path="/characters/:id"
                render={(props) => {
                    if (!isAuthenticated()) {
                        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
                    }

                    return (
                        <Layout>
                            <CharacterDetailPage {...props} />
                        </Layout>
                    );
                }}
            ></Route>
            <Route path="*">
                <NotFoundRoute />
            </Route>
        </Switch>
    );
}

export default App;

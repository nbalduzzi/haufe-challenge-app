import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Error from '../Error';
import { getCharacterRequest } from '../../actions/characters';
import { addFavoriteRequest, removeFavoriteRequest } from '../../actions/favorite';
import { getLogoutRequest } from '../../actions/auth';

export default function CharacterDetail() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { id } = useParams();

    useEffect(() => dispatch(getCharacterRequest(id)), [id, dispatch]);

    const isLoading = useSelector((state) => state.characters?.loading);
    const character = useSelector((state) => state.characters?.item);
    const error = useSelector((state) => state.characters?.error);
    // const notFound = useSelector((state) => state.characters?.notFound);

    if (isLoading) return <div>Loading...</div>;
    // if (notFound) return <NotFoundRoute />;
    if (!isLoading && error) <Error />;

    const handleFavorite = (c) => {
        if (c.isFavorite) {
            dispatch(removeFavoriteRequest(c));
        } else {
            dispatch(addFavoriteRequest(c));
        }
    };

    if (error.status === 401) {
        dispatch(getLogoutRequest());
        history.replace('/login');
    }

    return (
        <div className="wrapper">
            {character && (
                <div className="card">
                    <LazyLoadImage
                        effect="blur"
                        src={character.image}
                        width="100%"
                        height="100%"
                        className="card-image"
                    />
                    <div className="container">
                        <h3 className="card-title">
                            <b>{character.name}</b>
                            <i
                                className={character.isFavorite ? 'fav bi-heart-fill' : 'fav bi-heart'}
                                style={{ color: character.isFavorite ? 'red' : 'inherit' }}
                                onClick={() => handleFavorite(character)}
                            ></i>
                        </h3>
                        <p className="card-title">
                            {character.status} · {character.gender}{' '}
                        </p>

                        <i className="card-subtitle">
                            {character.species} {character.type ? `- ${character.type}` : ''}
                        </i>

                        <hr className="hr" />

                        <p className="card-text">
                            <b>Location · </b>
                            {character.location.name}
                        </p>
                        <p className="card-text">
                            <b>Origin · </b>
                            {character.origin.name}
                        </p>
                        <p className="card-text">
                            <b>Episodes · </b>
                            {character.episode}
                        </p>

                        <hr className="hr" />
                        <p>
                            <a href="/" className="card-link">
                                Back
                            </a>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

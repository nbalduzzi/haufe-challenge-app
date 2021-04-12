import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Error from '../Error';
import { getCharacterRequest } from '../../actions/characters';
import { addFavoriteRequest, removeFavoriteRequest } from '../../actions/favorite';
import NotFoundRoute from '../NotFoundRoute';
import HeartIcon from './HeartIcon';

export default function CharacterDetailPage() {
    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => dispatch(getCharacterRequest(id)), [id, dispatch]);

    const isLoading = useSelector((state) => state.characters?.loading);
    const character = useSelector((state) => state.characters?.item);
    const error = useSelector((state) => state.characters?.error);
    const notFound = useSelector((state) => state.characters?.notFound);

    if (isLoading) return <div>Loading...</div>;
    if (notFound) return <NotFoundRoute />;
    if (!isLoading && error) <Error />;

    const handleFavorite = (c) => {
        if (c.isFavorite) {
            dispatch(removeFavoriteRequest(c.id));
        } else {
            dispatch(addFavoriteRequest(c.id));
        }
    };

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

                            <HeartIcon
                                className={`pointer ${character.isFavorite ? 'isFav' : 'notFav'}`}
                                onClick={() => handleFavorite(character)}
                            />
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

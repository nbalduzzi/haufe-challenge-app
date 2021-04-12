import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import HeartIcon from './HeartIcon';
import { getCharactersRequest } from '../../actions/characters';

import './Characters.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function CharactersPage() {
    const dispatch = useDispatch();

    useEffect(() => dispatch(getCharactersRequest(1)), [dispatch]);

    const characters = useSelector((state) => state.characters?.items);
    const isLoading = useSelector((state) => state.characters?.loading);
    const hasMoreData = !isLoading && characters.length > 0;

    const loadData = (page) => dispatch(getCharactersRequest(page));

    return (
        <InfiniteScroll pageStart={2} loadMore={loadData} hasMore={hasMoreData} className="wrapper">
            {characters.map((c, index) => (
                <div className="card" key={index}>
                    <LazyLoadImage effect="blur" src={c.image} width="100%" height="100%" className="card-image" />
                    <div className="container">
                        <h3 className="card-title">
                            <Link
                                to={{
                                    pathname: `/characters/${c.id}`,
                                    state: { characterName: c.name },
                                }}
                            >
                                <b>{c.name}</b>
                            </Link>

                            <HeartIcon className={c.isFavorite ? 'isFav' : 'notFav'} />
                        </h3>

                        <p className="card-subtitle">
                            {c.status} · {c.gender}
                        </p>
                        <p className="card-text">
                            <small>
                                <b>Location:</b> {c.location.name}
                            </small>
                            <br />
                            <small>
                                <b>Origin:</b> {c.origin.name}
                            </small>
                        </p>
                    </div>
                </div>
            ))}
        </InfiniteScroll>
    );
}

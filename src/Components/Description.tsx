import React from 'react';

import {
    MovieTitle,
    MovieDescription,
} from './Styles/Details'

import { useSelector } from 'react-redux';

const Description = () => {
    const details = useSelector(state => state.appState.details);

    return (
        <React.Fragment>
            <MovieTitle>{details.title}</MovieTitle>
            <MovieDescription>{details.overview}</MovieDescription>
        </React.Fragment>
    )
}

export default Description;
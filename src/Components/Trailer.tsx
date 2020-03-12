import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import {
    TrailerContainer,
    CoverImageContainer,
} from './Styles/Details';

import { getVideoObject } from '../Services/themoviedb';

const Trailer = () => {
    const details = useSelector(state => state.appState.details);
    const [videoObject, setVideoObject] = useState({ key: '0', site: '' });


    if (videoObject.key === '0' && details.video === true)
        fetch(getVideoObject((details.id).toString()), {
            method: 'GET'
        })
            .then(res => res.json())
            .then(json => {
                if (json.results[0]) {
                    console.log(JSON.stringify(json.results[0]));
                    setVideoObject(json.results[0]);
                }
            });



    if (details.video === true && videoObject.key !== '0' && videoObject.site === 'YouTube' && videoObject !== undefined) {
        return (
            <TrailerContainer>
                <iframe
                    title={details.title}
                    width="100%"
                    height="100%"
                    src={"https://www.youtube.com/embed/" + videoObject.key}
                    frameBorder="0"
                    allowFullScreen></iframe>
            </TrailerContainer>
        )
    }

    else return (<CoverImageContainer image={'https://image.tmdb.org/t/p/w500' + details.image} />);
}

export default Trailer;
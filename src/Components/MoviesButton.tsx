import React from 'react';
import { setTopMovies } from '../Redux/Actions';
import { useDispatch } from 'react-redux';

import { request } from '../Services/themoviedb'

const TopMovies = () => {
    const dispatch = useDispatch();

    return(
        <button
            onClick={() => {
                fetch(request('/movie/top_rated'), {
                    method: 'GET'
                })
                    .then(res => res.json())
                    .then(json => {
                        console.log(json);
                        dispatch(setTopMovies(json.results.slice(0, 10)));
                    });
            }}
        >
            Load movies
        </button>
    )
    
}

export default TopMovies;
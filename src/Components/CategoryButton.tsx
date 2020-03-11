import React from 'react';
import { setTopMovies, setTopShows, changeTab } from '../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';

import { request } from '../Services/themoviedb'

const CategoryButton = (props) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state[props.category].items);
    let category = props.category === 'movies' ? 'movie' : 'tv';
    
    return(
        <button
            onClick={() => {
                
                fetch(request('/' + category + '/top_rated'), {
                    method: 'GET'
                })
                    .then(res => res.json())
                    .then(json => {
                        console.log(json);
                        if (category === 'movie' && items == null) {
                            dispatch(setTopMovies(json.results.slice(0, 10)));
                        }
                        else if (category === 'tv' && items == null) {
                            dispatch(setTopShows(json.results.slice(0, 10)));
                        }
                        dispatch(changeTab(props.category));
                    });
            }}
        >
            Load {props.category}
        </button>
    )
    
}

export default CategoryButton;
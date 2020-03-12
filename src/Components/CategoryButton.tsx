import React from 'react';
import { setTopMovies, setTopShows, changeTab, changeSearchTab } from '../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';

import { request, requestSearch } from '../Services/themoviedb'

import {
    ButtonContainer,
    ButtonText,
} from './Styles/CategoryButton'

const CategoryButton = (props: any) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state[props.category].items);
    const selectedTab = useSelector(state => state.appState.selectedTab);
    const searchQuery = useSelector(state => state.appState.search.query);
    let category = props.category === 'movies' ? 'movie' : 'tv';

    const loadItems = () => {
        if (items.length === 0)
            fetch(request('/' + category + '/top_rated'), {
                method: 'GET'
            })
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    if (category === 'movie' && items.length === 0) {
                        dispatch(setTopMovies(json.results.slice(0, 10)));
                    }
                    else if (category === 'tv' && items.length === 0) {
                        dispatch(setTopShows(json.results.slice(0, 10)));
                    }
                });
        dispatch(changeTab(props.category));
        if (searchQuery.length > 2)
            fetch(requestSearch('/search/' + category, '&query=' + searchQuery), {
                method: 'GET'
            })
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    if (json.results !== undefined)
                        dispatch(changeSearchTab(props.category, json.results.slice(0,10)));
            });
        
    }

    //initial load
    if (category === 'tv' && items.length === 0) {
        loadItems();
    }

    if (selectedTab === props.category)
        return (
            <ButtonContainer selected={true} onClick={() => { loadItems() }}>
                <ButtonText selected={true}>Load {props.category}</ButtonText>
            </ButtonContainer>
        )
    else return (
        <ButtonContainer selected={false} onClick={() => { loadItems() }}>
            <ButtonText>Load {props.category}</ButtonText>
        </ButtonContainer>
    )

}

export default CategoryButton;
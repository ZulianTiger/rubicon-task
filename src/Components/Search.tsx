import React, { useState } from 'react';
import { debounce } from 'ts-debounce';

import {
    SearchContainer,
    SearchInput,
} from './Styles/Search'

import { useSelector, useDispatch } from 'react-redux';
import { setSearch, clearSearch } from '../Redux/Actions';
import { requestSearch } from '../Services/themoviedb';

const Search = () => {
    const [inputText, setInputText] = useState(useSelector(state => state.appState.search.query));
    const selectedTab = useSelector(state => state.appState.selectedTab);
    const dispatch = useDispatch();

    let category = selectedTab === 'movies' ? 'movie' : 'tv';

    const debouncedSearch = debounce(function (query: string) {
        fetch(requestSearch('/search/' + category, '&query=' + query), {
            method: 'GET'
        })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                dispatch(setSearch(query, selectedTab, json.results.slice(0, 10) || []));
            });
    }, 1000);

    return (
        <SearchContainer>
            <SearchInput placeholder={'Search for ' + selectedTab + '...'} value={inputText} onChange={e => {
                setInputText(e.target.value);
                if(e.target.value.length > 2)
                    debouncedSearch(e.target.value);
                else dispatch(clearSearch(selectedTab));
            }} />
        </SearchContainer>
    )
}

export default Search;
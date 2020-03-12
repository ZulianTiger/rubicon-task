import React from 'react';
import { useSelector } from 'react-redux';

import {
    ListContainer,
} from './Styles/Item'

import Item from './Item'

const ItemsList = (props) => {
    const items = useSelector(state => state[props.category].items);
    const searchResults = useSelector(state => state.appState.search.results);

    if (searchResults.length === 0 || searchResults === undefined)
        return (
            <ListContainer>
                {items.map(e => <Item key={e.id} item={e} />)}
            </ListContainer>
        )
    else
        return (
            <ListContainer>
                {searchResults.map(e => <Item key={e.id} item={e} />)}
            </ListContainer>
        )
}

export default ItemsList;
import React from 'react';
import { useSelector } from 'react-redux';

import {
    ListContainer,
} from './Styles/Item'

import Item from './Item'

const ItemsList = (props) => {
    const items = useSelector(state => state[props.category].items);

    return (
        <ListContainer>
            {items.map(e => <Item key={e.id} item={e} />)}
        </ListContainer>
    )
}

export default ItemsList;
import React from 'react';

import {
    ItemContainer,
    ItemTitle,
} from './Styles/Item'

const Item = (props) => {
    return (
        <ItemContainer image={'https://image.tmdb.org/t/p/w500' + props.item.poster_path}>
            <ItemTitle> {JSON.stringify(props.item.name || props.item.title)} </ItemTitle>
        </ItemContainer>
    )
}

export default Item;
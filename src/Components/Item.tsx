import React from 'react';
import { Link } from 'react-router-dom'

import {
    ItemContainer,
    ItemTitle,
} from './Styles/Item'

import { setDetails } from '../Redux/Actions';
import { useDispatch } from 'react-redux';

const Item = (props) => {
    const dispatch = useDispatch();

    return (
        <ItemContainer image={'https://image.tmdb.org/t/p/w500' + props.item.poster_path} >
            <Link
                style={{
                    textDecoration: "none",
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                }}
                to={'/details'}
                onClick={() => {
                    dispatch(setDetails(props.item.id, props.item.video || false, props.item.poster_path, props.item.title || props.item.name, props.item.overview, props.item.release_date || props.item.first_air_date));
                }}
            >
                <ItemTitle> {JSON.stringify(props.item.name || props.item.title)} </ItemTitle>
            </Link>
        </ItemContainer>
    )
}

export default Item;
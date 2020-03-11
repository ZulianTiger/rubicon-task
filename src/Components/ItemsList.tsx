import React from 'react';
import { useSelector } from 'react-redux';

const ItemsList = (props) => {
    const items = useSelector(state => state[props.category].items);

    return (
        <div>
            <p>{JSON.stringify(items)}</p>
        </div>
    )
}

export default ItemsList;
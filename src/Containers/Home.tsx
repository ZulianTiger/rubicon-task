import React from 'react';

import { useSelector } from 'react-redux';

import MoviesButton from '../Components/CategoryButton';
import ItemsList from '../Components/ItemsList';

const Home = () => {
    const selectedTab = useSelector(state => state.appState.selectedTab);

    return (
        <div>
            <MoviesButton category={'movies'} />
            <MoviesButton category={'shows'} />
            <ItemsList category={selectedTab} />
        </div>
    )
}

export default Home;
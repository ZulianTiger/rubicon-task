import React from 'react';

import { useSelector } from 'react-redux';

import {
    ScreenContainer,
} from './Styles/General'

import CategoryButton from '../Components/CategoryButton';
import ItemsList from '../Components/ItemsList';

const Home = () => {
    const selectedTab = useSelector(state => state.appState.selectedTab);

    return (
        <ScreenContainer>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CategoryButton category={'movies'} />
                <CategoryButton category={'shows'} />
            </div>

            <ItemsList category={selectedTab} />
        </ScreenContainer>
    )
}

export default Home;
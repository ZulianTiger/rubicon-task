import React from 'react';

import { ScreenContainer } from './Styles/General';

import Trailer from '../Components/Trailer';
import Description from '../Components/Description';
import BackButton from '../Components/BackButton';

const Details = () => {
    return (
        <ScreenContainer>
            <div style={{ width: '90%', marginLeft: '5%' }}>
                <BackButton />
                <Trailer />
                <Description />
            </div>
        </ScreenContainer>
    )
}

export default Details;
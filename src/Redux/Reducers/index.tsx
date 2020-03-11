import moviesReducer from './movies';
import showsReducer from './shows';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    movies: moviesReducer,
    shows: showsReducer
});

export default allReducers;
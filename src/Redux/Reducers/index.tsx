import moviesReducer from './movies';
import showsReducer from './shows';
import appStateReducer from './appState';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    movies: moviesReducer,
    shows: showsReducer,
    appState: appStateReducer
});

export default allReducers;
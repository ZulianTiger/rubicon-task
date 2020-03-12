const initialState = {
    selectedTab: 'shows',
    details: {
        id: '',
        video: false,
        image: '',
        title: '',
        overview: '',
        releaseDate: '',
    },
    search: {
        query: '',
        searchTab: 'shows',
        results: [],
    }
}

const appStateReducers = (state = initialState, action) => {
    if (action.type === 'CHANGE_TAB' && state.selectedTab !== action.newTab) {
        return Object.assign({}, state, {
            selectedTab: action.newTab,
        })
    }
    else if (action.type === 'SET_DETAILS') {
        return Object.assign({}, state, {
            details: {
                id: action.id,
                video: action.video,
                image: action.image,
                title: action.title,
                overview: action.overview,
                releaseDate: action.releaseDate,
            }
        })
    }
    else if (action.type === 'SET_SEARCH') {
        return Object.assign({}, state, {
            search: {
                query: action.query,
                searchTab: action.searchTab,
                results: action.results,
            }
        })
    }
    else if (action.type === 'CLEAR_SEARCH') {
        return Object.assign({}, state, {
            search: {
                query: '',
                searchTab: action.searchTab,
                results: [],
            }
        })
    }
    else if (action.type === 'CHANGE_SEARCH_TAB') {
        return Object.assign({}, state, {
            search: {
                query: state.search.query,
                searchTab: action.tab,
                results: action.newResults,
            }
        })
    }
    else return state;
}

export default appStateReducers;
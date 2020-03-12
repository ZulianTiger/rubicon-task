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
    else return state;
}

export default appStateReducers;
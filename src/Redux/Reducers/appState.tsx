const initialState = {
    selectedTab: 'movies',
}

const appStateReducers = (state = initialState, action) => {
    if (action.type === 'CHANGE_TAB' && state.selectedTab !== action.newTab) {
        return Object.assign({}, state, {
            selectedTab: action.newTab,
        })
    }
    else return state;
}

export default appStateReducers;
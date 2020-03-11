const initialState = {
    items: null,
}

const moviesReducer = (state = initialState, action) => {
    if (action.type === 'SET_TOP_MOVIES') {
        return Object.assign({}, state, {
            items: action.items,
        })
    }
    else return state;
}

export default moviesReducer;
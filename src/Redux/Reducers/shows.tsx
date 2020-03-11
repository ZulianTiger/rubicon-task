const initialState = {
    items: null,
}

const showsReducer = (state = initialState, action) => {
    if (action.type === 'SET_TOP_SHOWS') {
        return Object.assign({}, state, {
            items: action.items,
        })
    }
    else return state;
}

export default showsReducer;
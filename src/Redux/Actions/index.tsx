export const setTopMovies = (items: any) => {
    return {
        type: 'SET_TOP_MOVIES',
        items: items,
    }
}
export const setTopShows = (items: object) => {
    return {
        type: 'SET_TOP_SHOWS',
        items: items,
    }
}
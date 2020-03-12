
export const setTopMovies = (items: any) => {
    return {
        type: 'SET_TOP_MOVIES',
        items: items,
    }
}
export const setTopShows = (items: any) => {
    return {
        type: 'SET_TOP_SHOWS',
        items: items,
    }
}
export const changeTab = (newTab: string) => {
    return {
        type: 'CHANGE_TAB',
        newTab: newTab,
    }
}
export const setDetails = (id: number, video: boolean, image: string, title: string, overview: string, releaseDate: string) => {
    return {
        type: 'SET_DETAILS',
        id: id,
        video: video,
        image: image,
        title: title,
        overview: overview,
        releaseDate: releaseDate,
    }
}
export const setSearch = (query: string, searchTab: string, results: any) => {
    return {
        type: 'SET_SEARCH',
        query: query,
        searchTab: searchTab,
        results: results,
    }
}
export const clearSearch = (searchTab: string) => {
    return { 
        type: 'CLEAR_SEARCH',
        searchTab: searchTab,
    }
}
export const changeSearchTab = (tab: string, newResults: any) => {
    return {
        type: 'CHANGE_SEARCH_TAB',
        tab: tab,
        newResults: newResults,
    }
}
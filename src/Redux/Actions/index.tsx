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
let url = "https://api.themoviedb.org/3";
let apiKey = '?api_key=' + process.env.REACT_APP_API_KEY;

export const request = (endpoint: string) => {
    return (url + endpoint + apiKey);
}

export const getVideoObject = (id: string) => {
    return (url + '/movie/' + id + '/videos' + apiKey);
}



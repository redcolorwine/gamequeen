import axios from 'axios';

//создаем настройки для запросов для переиспользования
const instance = axios.create({
    withCredentials: true,
    baseURL: `https://api.rawg.io/api/`,
    headers: {
        "api-key": process.env.REACT_APP_API_KEY,
        "language": "ru-RU"
    }
});

export const gamesAPI = {
    //parent_platforms - platform id 1 - PC id 2 - PlayStation id 3 - Xbox id 4 - iOS id 5 - Apple Macintosh id 6 - Linux id 7 - Nintendo id 8 - Android
    //ordering released, -released, name, added, created, updated, rating, metacritic, -metacritic

    getGamesForMainPage(page = 1, pageSize = 20, ordering = '-added', parent_platforms = [0, 1, 2, 3, 4, 5, 6, 7, 8]) {
        return axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page=${page}&page_size=${pageSize}&parent_platforms=${parent_platforms}&ordering=${ordering}`)
            .then(response => {
                return response.data
            });
    },
    searchGamesByQuery(page = 1, pageSize = 20, ordering = '-added', parent_platforms = [0, 1, 2, 3, 4, 5, 6, 7, 8], search = '', search_exact = true) {
        return axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page=${page}&page_size=${pageSize}&parent_platforms=${parent_platforms}&ordering=${ordering}&search=${search}&search_exact=${search_exact}`)
            .then(response => {
                return response.data
            });
    },

    // getFilmsForMainPage(page = 1) {
    //     return axios.all([
    //         axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2c395216a9e2efaac337ffbc09ff1ee8&language=ru-RU&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate'),
    //         axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=2c395216a9e2efaac337ffbc09ff1ee8&language=ru-RU'),
    //         axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=2c395216a9e2efaac337ffbc09ff1ee8&language=ru-RU&page=${page}`)
    //     ]).then(response => {
    //         return response
    //     })
    // },

    // getGenres() {
    //     return axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=2c395216a9e2efaac337ffbc09ff1ee8&language=ru-RU').then(response => {
    //         return response
    //     });
    // },

    // async getFilmById(filmId) {
    //     try {
    //         var response = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}/external_ids?api_key=2c395216a9e2efaac337ffbc09ff1ee8`)
    //     } catch (error) {
    //         console.log(error)
    //     }
    //     try {
    //         var responseTwo = await axios.get(`https://api.themoviedb.org/3/find/${response.data.imdb_id}?api_key=2c395216a9e2efaac337ffbc09ff1ee8&language=ru-RU&external_source=imdb_id`)
    //     } catch (error) {
    //         console.log(error)
    //     }
    //     return responseTwo;
    // },

}

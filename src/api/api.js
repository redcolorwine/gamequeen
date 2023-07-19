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
    getInfoAboutGame(id) { //0 - gameinfo //1 - screenshots //2 - same games //3 - trailers
        return axios.all([
            axios.get(`https://api.rawg.io/api/games/${id}?key=${process.env.REACT_APP_API_KEY}`),
            axios.get(`https://api.rawg.io/api/games/${id}/screenshots?key=${process.env.REACT_APP_API_KEY}`),
            // axios.get(`https://api.rawg.io/api/games/${id}/suggested?key=${process.env.REACT_APP_API_KEY}`),
            axios.get(`https://api.rawg.io/api/games/${id}/movies?key=${process.env.REACT_APP_API_KEY}`)
        ]).then(response => {
            return response
        })
    },
    async getWishList(wishList) {

        let resWishList = [];
        for (const wish of wishList) {

            const response = await axios(`https://api.rawg.io/api/games/${wish}?key=${process.env.REACT_APP_API_KEY}`);
            resWishList.push(response.data);

        }
        return resWishList;
    },
    //ПО ДАТАМ
    //https://api.rawg.io/api/games?dates=2023-01-01,2023-01-02&key=ecff736f6be24dfa98d478b0ab02860f
    getGamesByDate(page = 1, pageSize = 20, ordering = '-added', parent_platforms = [0, 1, 2, 3, 4, 5, 6, 7, 8], date1, date2) {
        return axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&dates=${date1+`,`+date2}&page=${page}&page_size=${pageSize}&parent_platforms=${parent_platforms}&ordering=${ordering}`)
            .then(response => {
                return response.data
            });
    },


}

import axios from 'axios';


//создаем настройки для запросов для переиспользования
const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/',

});
instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})
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
            axios.get(`https://api.rawg.io/api/games/${id}/movies?key=${process.env.REACT_APP_API_KEY}`),
            instance.post('reviews/get', { gameId: id })

        ]).then(response => {
            return response
        })
    },
    async getWishList(wishList) {

        let resWishList = [];
        if (wishList) {
            for (const wish of wishList) {

                const response = await axios(`https://api.rawg.io/api/games/${wish}?key=${process.env.REACT_APP_API_KEY}`);
                resWishList.push(response.data);

            }
        }
        return resWishList;
    },
    //ПО ДАТАМ
    //https://api.rawg.io/api/games?dates=2023-01-01,2023-01-02&key=ecff736f6be24dfa98d478b0ab02860f
    getGamesByDate(page = 1, pageSize = 20, ordering = '-added', parent_platforms = [0, 1, 2, 3, 4, 5, 6, 7, 8], date1, date2) {
        return axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&dates=${date1 + `,` + date2}&page=${page}&page_size=${pageSize}&parent_platforms=${parent_platforms}&ordering=${ordering}`)
            .then(response => {
                return response.data
            });
    },


}

export const authAPI = {
    register(email, password) {

        return instance.post('auth/register', { email, password })
            .then(response => {
                console.log(response)

                return response
            }).catch(err => {
                console.log(err)
            });
    },
    login(email, password) {
        return instance.post('auth/login', { email, password })
            .then(response => {
                console.log(response)

                return response
            }).catch(err => {
                console.log(err)
            });
    },
    addFavourite(userId, gameId) {

        return instance.post('users/favourite', { id: userId, gameId: gameId }).then(response => {
            return response
        }).catch(err => {
            console.log(err)
        });
    },
    deleteFavourite(userId, gameId) {

        return instance.post('users/deletefavourite', { id: userId, gameId: gameId }).then(response => {
            return response
        }).catch(err => {
            console.log(err)
        });
    },
    getFavourite(userId) {
        return instance.post('users/getfavourite', { id: userId }).then(response => {
            return response
        }).catch(err => {
            console.log(err)
        });
    },
    getGameReview(gameId) {
        return instance.post('reviews/get', { gameId: gameId }).then(response => {
            return response
        }).catch(err => {
            console.log(err)
        });
    },
    setGameReview(gameId, userId, content) {
        return instance.post('reviews', { gameId: gameId, userId: userId, content: content }).then(response => {
            return response
        }).catch(err => {
            console.log(err)
        });
    }
}

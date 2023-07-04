import nintendo from './../../src/media/icons/platforms/nintendo.png';
import xbox from './../../src/media/icons/platforms/xbox.png';
import computer from './../../src/media/icons/platforms/computer.png';
import android from './../../src/media/icons/platforms/android.png';
import iOS from './../../src/media/icons/platforms/apple.png';
import playstation from './../../src/media/icons/platforms/playstation.png';
import linux from './../../src/media/icons/platforms/linux.png';
import macintosh from './../../src/media/icons/platforms/macintosh.png';
import web from './../../src/media/icons/platforms/web.png';
import { gamesAPI } from '../api/api';

let initialState = {
    platformLogos: [nintendo, xbox, computer, android, iOS, playstation, linux, macintosh, web],
    games: [],
    isMainPageLoading: true,
    orderOptions: [
        { optName: 'added a-b', optVal: 'added' },
        { optName: 'added b-a', optVal: '-added' },
        { optName: 'released a-b', optVal: 'released' },
        { optName: 'released b-a', optVal: '-released' },
        { optName: 'name a-b', optVal: 'name' },
        { optName: 'name b-a', optVal: '-name' },
        { optName: 'created a-b', optVal: 'created' },
        { optName: 'created b-a', optVal: '-created' },
        { optName: 'updated a-b', optVal: 'updated' },
        { optName: 'updated b-a', optVal: '-updated' },
        { optName: 'rating a-b', optVal: 'rating' },
        { optName: 'rating b-a', optVal: '-rating' },
        { optName: 'metacritic a-b', optVal: 'metacritic' },
        { optName: 'metacritic b-a', optVal: '-metacritic' }],
    //id 1 - PC id 2 - PlayStation id 3 - Xbox id 4 - iOS id 5 - Apple Macintosh id 6 - Linux id 7 - Nintendo id 8 - Android
    platformOptions: [
        { optName: 'All', optVal: [1, 2, 3, 4, 5, 6, 7, 8] },
        { optName: 'PC', optVal: '1' },
        { optName: 'PlayStation', optVal: '2' },
        { optName: 'Xbox', optVal: '3' },
        { optName: 'iOS', optVal: '4' },
        { optName: 'Apple Macintosh', optVal: '5' },
        { optName: 'Linux', optVal: '6' },
        { optName: 'Nintendo', optVal: '7' },
        { optName: 'Android', optVal: '8' },
    ]
}

let mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_GAMES': {
            return {
                ...state,
                games: action.games
            }
        }

        case 'PAGE_LOADING': {
            return {
                ...state,
                isMainPageLoading: action.loading
            }
        }

        default: {
            return {
                ...state
            }
        }

    }
}

export const setGamesThunk = (page, pageSize, ordering, parent_platforms) => {
    return (dispatch) => {
        dispatch(mainPageLoading(true))
        gamesAPI.getGamesForMainPage(page, pageSize, ordering, parent_platforms).then(response => {
            dispatch(setGames(response))
            dispatch(mainPageLoading(false))

        })
    }
}

export const setGames = (games) => {
    return {
        type: 'SET_GAMES', games
    }
}
export const mainPageLoading = (loading) => {
    return {
        type: 'PAGE_LOADING', loading
    }
}
export default mainPageReducer;
import { authAPI, gamesAPI } from "../api/api"

let initialState = {
    gameInfo: [],
    sameGames: [],
    gameTrailers: [],
    gameScreenshots: [],
    comments: [],
    isGameInfoLoading: true,
}
//0 - gameinfo //1 - screenshots //2 - same games //3 - trailers

let aboutGameReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_GAME_INFO': {
            return {
                ...state,
                gameInfo: action.gameInfo
            }
        }
        case 'SET_GAME_COMMENTS': {
            return {
                ...state,
                comments: action.comments
            }
        }
        case 'SET_SAME_GAMES': {
            return {
                ...state,
                sameGames: action.sameGames
            }
        }

        case 'SET_GAME_TRAILERS': {
            return {
                ...state,
                gameTrailers: action.gameTrailers
            }
        }

        case 'SET_GAME_SCREENSHOTS': {
            return {
                ...state,
                gameScreenshots: action.gameScreenshots
            }
        }

        case 'SET_IS_GAME_INFO_LOADING': {
            return {
                ...state,
                isGameInfoLoading: action.loading
            }
        }

        default: {
            return state;
        }
    }
}


export const setGameInfoThunk = (id) => {

    return (dispatch) => {
        dispatch(setIsGameInfoLoading(true))
        gamesAPI.getInfoAboutGame(id).then(response => {
            dispatch(setGameInfo(response[0]))
            dispatch(setGameScreenshots(response[1]))
            // dispatch(setSameGames(response[2]))
            dispatch(setGameTrailers(response[2]))
            dispatch(setGameComments(response[3]))
            dispatch(setIsGameInfoLoading(false))

        })
    }
}

export const setGameCommentsThunk = (gameId) => {
    return (dispatch) => {
        dispatch(setIsGameInfoLoading(true));
        authAPI.getGameReview(gameId).then(response => {
            dispatch(setGameComments(response))
            dispatch(setIsGameInfoLoading(false));
        })
    }
}
export const addCommentThunk=(gameId, userId, content) => {
    return (dispatch) => {
        dispatch(setIsGameInfoLoading(true));
        authAPI.setGameReview(gameId, userId, content).then(response => {
            dispatch(setGameComments(response))
            dispatch(setIsGameInfoLoading(false))
        })
    }
}
export const setGameInfo = (gameInfo) => {
    return {
        type: 'SET_GAME_INFO', gameInfo
    }
}
export const setGameComments = (comments) => {
    return {
        type: 'SET_GAME_COMMENTS', comments
    }
}

export const setSameGames = (sameGames) => {
    return {
        type: 'SET_SAME_GAMES', sameGames
    }
}
export const setGameTrailers = (gameTrailers) => {
    return {
        type: 'SET_GAME_TRAILERS', gameTrailers
    }
}
export const setGameScreenshots = (gameScreenshots) => {
    return {
        type: 'SET_GAME_SCREENSHOTS', gameScreenshots
    }
}
export const setIsGameInfoLoading = (loading) => {
    return {
        type: 'SET_IS_GAME_INFO_LOADING', loading
    }
}

export default aboutGameReducer;
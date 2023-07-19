import { gamesAPI } from "../api/api"

let initialState = {
    tops: [],
    isTopsLoading: false,
}


let topsReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_TOPS': {
            return {
                ...state,
                tops: action.tops
            }
        }

        case 'IS_TOPS_LOADING': {
            return {
                ...state,
                isTopsLoading: action.loading
            }
        }

        default: {
            return {
                state
            }
        }
    }
}

export const setTopsThunk = (page, pageSize, ordering, parent_platforms, date1, date2, typeQuery) => {
    return (dispatch) => {
        dispatch(isTopsLoading(true))
        if (typeQuery == 'top250') {
            gamesAPI.getGamesForMainPage(page, pageSize, ordering, parent_platforms).then(response => {
                dispatch(setTops(response))
                dispatch(isTopsLoading(false))

            })
        } else {
            gamesAPI.getGamesByDate(page, pageSize, ordering, parent_platforms, date1, date2).then(response => {
                dispatch(setTops(response))
                dispatch(isTopsLoading(false))

            })
        }

    }
}
export const isTopsLoading = (loading) => {
    return {
        type: 'IS_TOPS_LOADING', loading
    }
}

export const setTops = (tops) => {
    return {
        type: 'SET_TOPS', tops
    }
}


export default topsReducer;

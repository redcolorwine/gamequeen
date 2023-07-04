import { gamesAPI } from "../api/api"

let initialState = {
    last30days: [],
    thisWeek: [],
    nextWeek: [],
    isReleasesLoading: false,
}


let releasesReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_LAST30_DAYS': {
            return {
                ...state,
                last30days: action.last30days
            }
        }

        case 'SET_THIS_WEEK': {
            return {
                ...state,
                thisWeek: action.thisWeek
            }
        }

        case 'SET_NEXT_WEEK': {
            return {
                ...state,
                nextWeek: action.nextWeek
            }
        }
        case 'IS_RELEASES_LOADING': {
            return {
                ...state,
                isReleasesLoading: action.loading
            }
        }
        default: {
            return {
                state
            }
        }
    }
}


export const setLast30daysThunk = (page, pageSize, ordering, parent_platforms, date1, date2) => {
    return (dispatch) => {
        dispatch(isReleasesLoading(true))
        gamesAPI.getGamesByDate(page, pageSize, ordering, parent_platforms, date1, date2).then(response => {
            dispatch(setLast30days(response))
            dispatch(isReleasesLoading(false))

        })
    }
}

export const isReleasesLoading = (loading) => {
    return {
        type: 'IS_RELEASES_LOADING', loading
    }
}

export const setLast30days = (last30days) => {
    return {
        type: 'SET_LAST30_DAYS', last30days
    }
}

export const setThisWeek = (thisWeek) => {
    return {
        type: 'SET_THIS_WEEK', thisWeek
    }
}

export const setNextWeek = (nextWeek) => {
    return {
        type: 'SET_NEXT_WEEK', nextWeek
    }
}

export default releasesReducer;

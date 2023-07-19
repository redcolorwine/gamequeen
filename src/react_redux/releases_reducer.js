import { gamesAPI } from "../api/api"

let initialState = {
    last30days: [],
    thisWeek: [],
    nextWeek: [],
    releases: [],
    isReleasesLoading: false,
}


let releasesReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_RELEASES': {
            return {
                ...state,
                releases: action.releases
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

export const setReleasesThunk = (page, pageSize, ordering, parent_platforms, date1, date2) => {
    return (dispatch) => {
        dispatch(isReleasesLoading(true))
        gamesAPI.getGamesByDate(page, pageSize, ordering, parent_platforms, date1, date2).then(response => {
            dispatch(setReleases(response))
            dispatch(isReleasesLoading(false))

        })
    }
}
export const isReleasesLoading = (loading) => {
    return {
        type: 'IS_RELEASES_LOADING', loading
    }
}

export const setReleases = (releases) => {
    return {
        type: 'SET_RELEASES', releases
    }
}


export default releasesReducer;

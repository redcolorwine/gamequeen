import { authAPI, gamesAPI } from "../api/api"

let initialState = {
    wishList: [],
    wishData: [],
    isWishPageLoading: false,
}

let userReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_WISH_LIST': {
            return {
                ...state,
                wishList: [...state.wishList, action.wishList]
            }
        }

        case 'GET_WISH_DATA': {

            return {
                ...state,
                wishData: action.wishData
            }
        }

        case 'IS_WISHPAGE_LOADING': {
            return {
                ...state,
                isWishPageLoading: action.loading
            }
        }

        default: {
            return state;
        }
    }
}



export const getWishListDataThunk = (wishList) => {
    return (dispatch) => {
        dispatch(isWishPageLoading(true))
        gamesAPI.getWishList(wishList).then(response => {
            dispatch(getWishData(response))
            dispatch(isWishPageLoading(false))

        })
    }
}

export const addWishThunk = (userId, gameId) => {
    return (dispatch) => {
        authAPI.addFavourite(userId, gameId).then(response => {
            dispatch(setWishList(response))
        }).catch(error => {
            console.log(error)
        })
    }
}
export const deleteWishThunk = (userId, gameId) => {
    return (dispatch) => {
        authAPI.deleteFavourite(userId, gameId).then(response => {
            dispatch(setWishList(response))
        }).catch(error => {
            console.log(error)
        })
    }
}
export const getWishThunk = (userId) => {
    return (dispatch) => {
        dispatch(isWishPageLoading(true))
        authAPI.getFavourite(userId).then(response => {
            
            // console.log(response)
            gamesAPI.getWishList(response.data[0].favourite).then(response=>{
                dispatch(getWishData(response))
                dispatch(isWishPageLoading(false))
            })
        })
        .catch(error => {
            console.log(error)
        })
      

    }
}
export const getWishData = (wishData) => {
    return {
        type: 'GET_WISH_DATA', wishData
    }
}

export const isWishPageLoading = (loading) => {
    return {
        type: 'IS_WISHPAGE_LOADING', loading
    }
}
export const setWishList = (wishList) => {
    return {
        type: 'SET_WISH_LIST', wishList
    }
}
export default userReducer;
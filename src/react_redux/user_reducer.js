import { gamesAPI } from "../api/api"

let initialState = {
    wishList: [3498, 5679, 3328, 19487, 3070, 278],
    wishData: '',
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

export default userReducer;
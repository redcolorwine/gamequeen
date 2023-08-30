import { authAPI, gamesAPI } from "../api/api"

let initialState = {
    wishList: [],
    wishData: [],
    isWishPageLoading: false,
    userReviews: '',
    reviewedGames: '',
    isReviewsLoading: false
}

let userReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_WISH_LIST': {
            return {
                ...state,
                wishList: [...state.wishList, action.wishList]
            }
        }
        case 'GET_REVIEWED_GAMES': {
            return {
                ...state,
                reviewedGames: action.reviewedGames
            }
        }
        case 'GET_WISH_DATA': {

            return {
                ...state,
                wishData: action.wishData
            }
        }
        case 'GET_USER_REVIEWS': {
            return {
                ...state,
                userReviews: action.userReviews
            }
        }
        case 'IS_WISHPAGE_LOADING': {
            return {
                ...state,
                isWishPageLoading: action.loading
            }
        }
        case 'IS_REVIEWS_LOADING': {
            return {
                ...state,
                isReviewsLoading: action.isReviewsLoading
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
            gamesAPI.getWishList(response.data[0].favourite).then(response => {
                dispatch(getWishData(response))
                dispatch(isWishPageLoading(false))
            })
        })
            .catch(error => {
                console.log(error)
            })
    }
}

export const getUserReviewsThunk = (userId) => {
    return (dispatch) => {
       
        dispatch(isReviewsLoading(true))
        authAPI.getUserReviews(userId).then(response => {
           
            let nums = [];
            response?.data.map(rev => {
                nums.push(rev.gameId)
            })
            dispatch(setUserReviews(response))
         
            gamesAPI.getWishList(nums).then(response => {
          
                dispatch(setReviewedGames(response))
                dispatch(isReviewsLoading(false))
            })

        }).catch(error => {
            console.log(error)
        })
    }
}
// export const getUserReviewsThunk = (userId) => {
//     return async (dispatch) => {
//         debugger
//         dispatch(isReviewsLoading(true))
//         try {
//             debugger
//             const res = await authAPI.getUserReviews(userId);
//             debugger
//             let nums = [];
//             res?.data.map(rev => {
//                 nums.push(rev.gameId)
//             })
//             debugger
//             dispatch(setUserReviews(res))
//             const res2 = await gamesAPI.getWishList(nums);
//             debugger
//             dispatch(setReviewedGames(res2))
//             dispatch(isReviewsLoading(false))

//         } catch (error) {
//             console.log(error)
//         }

//     }
// }
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
export const setUserReviews = (userReviews) => {
    return {
        type: 'GET_USER_REVIEWS', userReviews
    }
}
export const isReviewsLoading = (loading) => {
    return {
        type: 'IS_REVIEWS_LOADING', loading
    }
}
export const setReviewedGames = (reviewedGames) => {
    return {
        type: 'GET_REVIEWED_GAMES', reviewedGames
    }
}
export default userReducer;
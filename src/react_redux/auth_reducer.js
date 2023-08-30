import { authAPI } from "../api/api";

let initialState = {
    isAuth: false,
    authData: '',
    error: '',
    wishList: [],
    isAuthLoading: true,
}


let authReducer = (state = initialState, action) => {
    switch (action.type) {


        case 'SET_IS_AUTH': {
            return {
                ...state,
                isAuth: action.auth
            }
        }
        case 'SET_ERROR': {
            return {
                ...state,
                error: action.error
            }
        }
        case 'SET_IS_AUTH_LOADING': {
            return {
                ...state,
                isAuthLoading: action.loading
            }
        }
        case 'SET_AUTH_DATA': {
            return {
                ...state,
                // authData: [...action.authData]
                authData: action.authData
            }
        }

        default: {
            return state;
        }
    }

}

export const registerThunk = (email, password) => {

    return (dispatch) => {
        localStorage.clear()

        authAPI.register(email, password).then(response => {
            setAuthLoading(true)
            // console.log(response.response.status)
          
                dispatch(setAuthData(response.data.email));
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', response.data.userEmail)
                localStorage.setItem('userId', response.data.userId)
                dispatch(setIsAuth(true))
                setAuthLoading(false)
            
        }).catch(error => {
            dispatch(setError(error.message))
            setAuthLoading(false)
        })
    }
}
export const loginThunk = (email, password) => {

    return (dispatch) => {
        localStorage.clear()
        authAPI.login(email, password).then(response => {
            setAuthLoading(true)
            // console.log(response.response.status)
          
                dispatch(setAuthData(response.data.email));
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', response.data.userEmail)
                localStorage.setItem('userId', response.data.userId)
                dispatch(setIsAuth(true))

                setAuthLoading(false)
         
        }).catch((error) => {
            dispatch(setError(error.message))
            setAuthLoading(false)
        })
    }
}
export const logoutThunk = () => {

    return (dispatch) => {
        localStorage.clear()
        dispatch(setIsAuth(false))

    }
}
export const setIsAuth = (auth) => {
    return {
        type: 'SET_IS_AUTH', auth
    }
}
export const setAuthData = (authData) => {
    return {
        type: 'SET_AUTH_DATA', authData
    }
}
export const setError = (error) => {
    return {
        type: 'SET_ERROR', error
    }
}
export const setAuthLoading = (loading) => {
    return {
        type: 'SET_IS_AUTH_LOADING', loading
    }
}
export default authReducer;
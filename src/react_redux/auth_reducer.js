let initialState = {
    isAuth: true,
    authData: '',
    wishList: [3498, 5679, 14189, 12479, 3070, 278],
}


let authReducer = (state = initialState, action) => {
    switch (action.type) {


        case 'SET_IS_AUTH': {
            return {
                ...state,
                isAuth: action.auth
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

export default authReducer;
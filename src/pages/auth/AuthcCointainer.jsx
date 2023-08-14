import { connect } from "react-redux"
import Auth from "./Auth"
import { loginThunk, registerThunk, setAuthData, setIsAuth } from "../../react_redux/auth_reducer"

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        authData: state.auth.authData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setIsAuth: (isAuth) => {
            dispatch(setIsAuth(isAuth));
        },
        setAuthData: (authData) => {
            dispatch(setAuthData(authData));
        },
        register: (email, password) => {
            dispatch(registerThunk(email, password))
        },
        login:(email, password) => {
            dispatch(loginThunk(email, password))
        }
    }
}

let AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default AuthContainer;
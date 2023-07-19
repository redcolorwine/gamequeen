import { connect } from "react-redux"
import { setAuthData, setIsAuth } from "../../react_redux/auth_reducer"
import Leftbar from "./Leftbar"


let mapStateToProps = (state) => {
    return {
        authData: state.auth.authData,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setIsAuth: (isAuth) => {
            dispatch(setIsAuth(isAuth));
        },
        setAuthData: (authData) => {
            dispatch(setAuthData(authData));
        }
    }
}

let LeftbarContainer = connect(mapStateToProps, mapDispatchToProps)(Leftbar);

export default LeftbarContainer;
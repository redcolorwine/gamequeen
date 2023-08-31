import { connect } from "react-redux"
import Wishlist from "./Wishlist"
import { addWishThunk, getWishListDataThunk, getWishThunk } from "../../react_redux/user_reducer"

let mapStateToProps = (state) => {
    return {
        wishData: state.user.wishData,
        isWishPageLoading: state.user.isWishPageLoading
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        getWishThunk: (userId) => {
            dispatch(getWishThunk(userId))
        }
    }
}

let WishListContainer = connect(mapStateToProps, mapDispatchToProps)(Wishlist);

export default WishListContainer;
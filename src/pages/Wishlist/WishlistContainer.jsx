import { connect } from "react-redux"
import Wishlist from "./Wishlist"
import { getWishListDataThunk } from "../../react_redux/user_reducer"

let mapStateToProps = (state) => {
    return {
        wishList: state.user.wishList,
        wishData: state.user.wishData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        getWishList: (wishList) => {
            dispatch(getWishListDataThunk(wishList))
        }
    }
}

let WishListContainer = connect(mapStateToProps, mapDispatchToProps)(Wishlist);

export default WishListContainer;
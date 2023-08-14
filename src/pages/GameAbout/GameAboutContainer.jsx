import { connect } from "react-redux"
import GameAbout from "./GameAbout"
import { setGameInfoThunk } from "../../react_redux/aboutgame_reducer"
import { addWishThunk, deleteWishThunk, getWishThunk } from "../../react_redux/user_reducer"



let mapStateToProps = (state) => {
    return {
        gameInfo: state.about.gameInfo,
        sameGames: state.about.sameGames,
        gameTrailers: state.about.gameTrailers,
        gameScreenshots: state.about.gameScreenshots,
        isGameInfoLoading: state.about.isGameInfoLoading,
        wishData: state.user.wishData,
        wishList:state.user.wishList
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setGameInfo: (id) => {
            dispatch(setGameInfoThunk(id))
        },
        setWishList: (userId, gameId) => {
            dispatch(addWishThunk(userId, gameId))
        },
        deleteWish: (userId, gameId) => {
            dispatch(deleteWishThunk(userId, gameId))
        },
        getWishThunk: (userId) => {
            dispatch(getWishThunk(userId))
        }
    }
}

let GameAboutContainer = connect(mapStateToProps, mapDispatchToProps)(GameAbout);

export default GameAboutContainer;
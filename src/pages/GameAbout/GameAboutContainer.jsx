import { connect } from "react-redux"
import GameAbout from "./GameAbout"
import { setGameInfoThunk } from "../../react_redux/aboutgame_reducer"



let mapStateToProps = (state) => {
    return {
        gameInfo: state.about.gameInfo,
        sameGames: state.about.sameGames,
        gameTrailers: state.about.gameTrailers,
        gameScreenshots: state.about.gameScreenshots,
        isGameInfoLoading: state.about.isGameInfoLoading,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setGameInfo: (id) => {
            dispatch(setGameInfoThunk(id))
        }
    }
}

let GameAboutContainer = connect(mapStateToProps, mapDispatchToProps)(GameAbout);

export default GameAboutContainer;
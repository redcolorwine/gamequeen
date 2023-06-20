import { connect } from "react-redux"
import { setGamesThunk } from "../../react_redux/mainpage_reducer"
import Home from "./Home"

let mapStateToProps = (state) => {
    return {
        games: state.main.games,
        isMainPageLoading: state.main.isMainPageLoading,
        orderOptions: state.main.orderOptions,
        platformOptions: state.main.platformOptions
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setGames: (page, pageSize, ordering, parent_platforms) => {
            dispatch(setGamesThunk(page, pageSize, ordering, parent_platforms))
        }
    }
}

let HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
import { connect } from "react-redux"
import SearchPage from "./SearchPage"
import { searchGamesThunk } from "../../react_redux/searchpage_reducer"

let mapStateToProps = (state) => {
    return {
        games: state.search.games,
        isSearchPageLoading: state.search.isSearchPageLoading,
        orderOptions: state.search.orderOptions,
        platformOptions: state.search.platformOptions
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        searchGames: (page, pageSize, ordering, parent_platforms, search) => {
            dispatch(searchGamesThunk(page, pageSize, ordering, parent_platforms, search))
        }
    }
}

let SearchPageContainer = connect(mapStateToProps, mapDispatchToProps)(SearchPage);

export default SearchPageContainer;
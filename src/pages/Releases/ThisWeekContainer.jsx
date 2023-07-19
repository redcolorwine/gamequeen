import { connect } from "react-redux"
import { setReleasesThunk } from "../../react_redux/releases_reducer"
import ThisWeek from "./ThisWeek"



let mapStateToProps = (state) => {
    return {
        releases: state.releases.releases,
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        getThisWeek: (page, pageSize, ordering, parent_platforms, date1, date2) => {
            dispatch(setReleasesThunk(page, pageSize, ordering, parent_platforms, date1, date2))
        }
    }
}

let ThisWeekContainer = connect(mapStateToProps, mapDispatchToProps)(ThisWeek);

export default ThisWeekContainer;
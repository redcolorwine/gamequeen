import { connect } from "react-redux"
import {setReleasesThunk } from "../../react_redux/releases_reducer"
import NextWeek from "./NextWeek"


let mapStateToProps = (state) => {
    return {
        releases: state.releases.releases,
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        getNextWeek: (page, pageSize, ordering, parent_platforms, date1, date2) => {
            dispatch(setReleasesThunk(page, pageSize, ordering, parent_platforms, date1, date2))
        }
    }
}

let NextWeekContainer = connect(mapStateToProps, mapDispatchToProps)(NextWeek);

export default NextWeekContainer;
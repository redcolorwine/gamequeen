import { connect } from "react-redux"
import { setLast30daysThunk } from "../../react_redux/releases_reducer"
import Last30days from "./Last30days"

let mapStateToProps = (state) => {
    return {
        last30days: state.releases.last30days
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        get30days: (page, pageSize, ordering, parent_platforms, date1, date2) => {
            dispatch(setLast30daysThunk(page, pageSize, ordering, parent_platforms, date1, date2))
        }
    }
}

let Last30DaysContainer = connect(mapStateToProps,mapDispatchToProps)(Last30days);

export default Last30DaysContainer;
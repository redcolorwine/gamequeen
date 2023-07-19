import { connect } from "react-redux"
import BestYear from "./BestYear"
import { setTopsThunk } from "../../react_redux/tops_reducer";

let mapStateToProps = (state) => {
    return {
        tops: state.tops.tops,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        bestYear: (page, pageSize, ordering, parent_platforms, date1, date2, typeQuery) => {
            dispatch(setTopsThunk(page, pageSize, ordering, parent_platforms, date1, date2, typeQuery))
        }
    }
}
let BestYearContainer = connect(mapStateToProps, mapDispatchToProps)(BestYear);

export default BestYearContainer;
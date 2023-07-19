import { connect } from "react-redux"
import Top250 from "./Top250"
import { setTopsThunk } from "../../react_redux/tops_reducer"


let mapStateToProps = (state) => {
    return {
        tops: state.tops.tops,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        top250: (page, pageSize, ordering, parent_platforms, date1, date2, typeQuery) => {
            dispatch(setTopsThunk(page, pageSize, ordering, parent_platforms, date1, date2, typeQuery))
        }
    }
}

let Top250Container = connect(mapStateToProps, mapDispatchToProps)(Top250);

export default Top250Container;
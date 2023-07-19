import { connect } from "react-redux"
import PopularCurrent from "./PopularCurrent"
import { setTopsThunk } from "../../react_redux/tops_reducer"


let mapStateToProps = (state) => {
    return {
        tops: state.tops.tops,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        popularCurrent: (page, pageSize, ordering, parent_platforms, date1, date2, typeQuery) => {
            dispatch(setTopsThunk(page, pageSize, ordering, parent_platforms, date1, date2, typeQuery))
        }
    }
}

let PopularCurrentContainer = connect(mapStateToProps, mapDispatchToProps)(PopularCurrent);

export default PopularCurrentContainer;
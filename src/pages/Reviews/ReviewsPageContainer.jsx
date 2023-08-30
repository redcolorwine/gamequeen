import { connect } from "react-redux"
import { getUserReviewsThunk } from "../../react_redux/user_reducer"
import ReviewsPage from "./ReviewsPage"

let mapStateToProps = (state) => {
    return {
        userReviews: state.user.userReviews,
        isReviewsLoading: state.user.isReviewsLoading,
        reviewedGames: state.user.reviewedGames
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getReviews: (userId) => {
            dispatch(getUserReviewsThunk(userId))
        }
    }
}

const ReviewsPageContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewsPage)

export default ReviewsPageContainer;
import React, { useEffect, useState } from 'react'
import cmedia from './reviewspage.module.css';
import Preloader from '../../components/preloader/Preloader';
import { useNavigate } from 'react-router-dom';

const ReviewsPage = (props) => {

  const [reviewData, setReviewData] = useState();
  //background_image
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/game/${id}`);
  }
  useEffect(() => {

    if (localStorage.getItem('userId')) {

      props.getReviews(localStorage.getItem('userId'))
      console.log(props.userReviews.data)


    }
  }, [])

  useEffect(() => {
    console.log(props.userReviews.data)


  }, [props.userReviews])

  useEffect(() => {
    console.log(props.reviewedGames)
    if (props.userReviews.data) {
      setReviewData([...props.userReviews.data].map((item, index) => {
        return { gameId: item.gameId, content: item.content, createdAt: item.createdAt, image: props.reviewedGames[index].background_image, name: props.reviewedGames[index].name }
      }))
    }
  }, [props.reviewedGames])

  if (props.isReviewsLoading && !reviewData) {

    return (<Preloader />)
  }
  else {

    return (
      <div className={cmedia.reviews}>
        {reviewData
          ? reviewData.map(rev => {
            return (<div className={cmedia.reviewItem} onClick={() => handleClick(rev.gameId)}>
              <img src={rev.image} alt="" />
              <div className={cmedia.reviewText}>
                <h3>{rev.name}</h3>
                <p>review: <span>{rev.content}</span></p>
                {/* <p><span>{rev.gameId}</span></p> */}
                <p>created: <span>{rev.createdAt}</span></p>
              </div>

            </div>)
          })
          : <><h1>Reviews doesn't exists yet</h1></>
        }
      </div>
    )
  }

}

export default ReviewsPage
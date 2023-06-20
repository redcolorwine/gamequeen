import React, { useEffect, useState } from 'react'
import cmedia from './home.module.css';
import GameItem from '../../components/gameItem/GameItem';
import axios from 'axios';
import Preloader from '../../components/preloader/Preloader';
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import gameu from './../../media/images/gameu.jpg';

const Home = (props) => {

  //parent_platforms - platform id 1 - PC id 2 - PlayStation id 3 - Xbox id 4 - iOS id 5 - Apple Macintosh id 6 - Linux id 7 - Nintendo id 8 - Android
  //ordering released, -released, name, added, created, updated, rating, metacritic, -metacritic
  const [page, setPage] = useState(1);
  const [ordering, setOrdering] = useState('-added')
  const [parent_platforms, setPlatforms] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8])


  useEffect(() => {
    props.setGames(page, 20, ordering, parent_platforms);
  }, [page, ordering, parent_platforms])


  const leftClick = () => {
    if (page >= 2) {
      setPage(page - 1)
    }
  }

  const rightClick = () => {
    if (page < props.games.count / 20) {
      setPage(page + 1)
    }
  }

  if (props.isMainPageLoading) {
    return (<><Preloader /></>)
  }

  else {
    console.log(props.games.results)
    return (

      <div className={cmedia.home}>

        <div className={cmedia.head}>
          <h1>Home</h1>
          <select name="platform" id="" onChange={(e) => { setPlatforms(e.target.value); setPage(1) }}>
            {props.platformOptions.map(el => {
              return (<option value={el.optVal}>{el.optName}</option>)
            })}
          </select>
          <select name="order" id="" onChange={(e) => { setOrdering(e.target.value); setPage(1) }}>
            {props.orderOptions.map(el => {
              return (<option value={el.optVal}>{el.optName}</option>)
            })}
          </select>

        </div>
        <div className={cmedia.items}>
          {props.games.results.map((game) => {
            return (<GameItem id={game.id}
              img={game?.background_image ? game.background_image : gameu}
              added={game.added}
              name={game.name}
              score={game.metacritic}
              releaseDate={game.released}
              genres={game.genres}
              platforms={game.parent_platforms}
              rating={game.rating}
              screenshots={game.short_screenshots}
              stores={game.stores}
            />)
          }
          )}
        </div>
        <div className={cmedia.pages}>
          <button onClick={leftClick}><FiArrowLeft size={19} /></button>
          <label htmlFor="">{page}</label>
          <button onClick={rightClick}><FiArrowRight size={19} /></button>
        </div>
      </div>
    )
  }

}

export default Home
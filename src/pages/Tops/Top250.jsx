import React, { useEffect, useState } from 'react'
import Preloader from '../../components/preloader/Preloader';
import moment from 'moment';
import cmedia from './tops.module.css';
import GameItem from '../../components/gameItem/GameItem';
import gameu from './../../media/images/gameu.jpg';
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
const Top250 = (props) => {
    const [page, setPage] = useState(1);
    const [ordering, setOrdering] = useState('-metacritic')
    const [parent_platforms, setPlatforms] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8])


    useEffect(() => {
        props.top250(page, 20, ordering, parent_platforms, 0, 0, 'top250');

    }, [page])


    const leftClick = () => {
        if (page >= 2) {
            setPage(page - 1)
        }
    }

    const rightClick = () => {
        if (page < 250 / 20) {
            setPage(page + 1)
        }
    }

    if (!props.tops) {
        return (<><Preloader /></>)
    }

    else {
        console.log(props.tops.results)
        return (

            <div className={cmedia.top250}>
                <div className={cmedia.head}>
                    <h1>Top 250</h1>
                </div>

                <div className={cmedia.items}>
                    {props.tops.results.map((game) => {
                     
                        return (<GameItem id={game.id}
                            key={game.id}
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

export default Top250
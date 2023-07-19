import React, { useEffect, useState } from 'react'
import cmedia from './releases.module.css';
import Preloader from '../../components/preloader/Preloader';
import moment from 'moment';
import GameItem from '../../components/gameItem/GameItem';
import gameu from './../../media/images/gameu.jpg';
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

const ThisWeek = (props) => {

    const [page, setPage] = useState(1);
    const [ordering, setOrdering] = useState('-added')
    const [parent_platforms, setPlatforms] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8])

    const leftClick = () => {
        if (page >= 2) {
            setPage(page - 1)
        }
    }

    const rightClick = () => {
        if (page < props.releases.count / 20) {
            setPage(page + 1)
        }
    }

    useEffect(() => {
        var d = new Date();
        var s = new Date();
        d.setDate(d.getDate() - 7);
        console.log(moment(d).format('YYYY-MM-DD'))
        console.log(moment(s).format('YYYY-MM-DD'))
        props.getThisWeek(page, 20, ordering, parent_platforms, moment(d).format('YYYY-MM-DD'), moment(s).format('YYYY-MM-DD'))
    }, [page])

    if (!props.releases) {
        return (
            <Preloader />
        )
    }
    else {
        console.log(props.releases.results)
        return (
            <div className={cmedia.ThisWeek}>
                <div className={cmedia.head}>
                    <h1>This week</h1>
                </div>

                <div className={cmedia.items}>
                    {props.releases.results.map((game) => {
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

export default ThisWeek;
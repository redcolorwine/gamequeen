import React, { useEffect, useState } from 'react'
import cmedia from './releases.module.css';
import Preloader from '../../components/preloader/Preloader';
import moment from 'moment';
import GameItem from '../../components/gameItem/GameItem';
import gameu from './../../media/images/gameu.jpg';
const Last30days = (props) => {
    const [page, setPage] = useState(1);
    const [ordering, setOrdering] = useState('-added')
    const [parent_platforms, setPlatforms] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8])
    useEffect(() => {
        var d = new Date();
        var s = new Date();
        d.setMonth(d.getMonth() - 1);
        props.get30days(page, 20, ordering, parent_platforms, moment(d).format('YYYY-MM-DD'), moment(s).format('YYYY-MM-DD'))
    }, [])

    if (!props.last30days) {
        return (
            <Preloader />
        )
    }
    else {
        console.log(props.last30days.results)
        return (
            <div className={cmedia.last30days}>
                <div className={cmedia.head}>
                    <h1>Last 30 days</h1>
                </div>

                <div className={cmedia.items}>
                    {props.last30days.results.map((game) => {
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
            </div>
        )
    }

}

export default Last30days
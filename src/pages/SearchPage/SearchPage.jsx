import React, { useEffect, useState } from 'react'
import cmedia from './searchpage.module.css';
import { useParams } from 'react-router-dom';
import Preloader from '../../components/preloader/Preloader';
import GameItem from '../../components/gameItem/GameItem';
import gameu from './../../media/images/gameu.jpg';
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

const SearchPage = (props) => {

    const { query } = useParams();
    const [page, setPage] = useState(1);
    const [ordering, setOrdering] = useState('-added')
    const [parent_platforms, setPlatforms] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8])

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

    useEffect(() => {
        props.searchGames(page, 20, ordering, parent_platforms, query);
    }, [query, page])

    if (props.isSearchPageLoading) {
        return (<Preloader />)
    }

    else {

        return (
            <div className={cmedia.searchPage}>
                <div className={cmedia.head}>
                    <h1>Found by request {query}: </h1>
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

export default SearchPage
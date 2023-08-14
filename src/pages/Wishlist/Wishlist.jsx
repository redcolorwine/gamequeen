import React, { useEffect } from 'react'
import cmedia from './wishlist.module.css';
import Preloader from '../../components/preloader/Preloader';
import GameItem from '../../components/gameItem/GameItem';
import gameu from './../../media/images/gameu.jpg';

const Wishlist = (props) => {

    useEffect(() => {
        // props.getWishList(props.wishList)
        if (localStorage.getItem('userId')) {
            props.getWishThunk(localStorage.getItem('userId'))
        }

    }, [])

    if (!props.wishData) {
        return (
            <Preloader />
        )

    }
    else {
        console.log(props.wishData)
        return (
            <div className={cmedia.wishList}>
                <div className={cmedia.head}>
                    <h1>My library </h1>
                </div>
                <div className={cmedia.items}>
                    {props.wishData.map((game) => {
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

export default Wishlist
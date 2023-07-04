import React from 'react'
import cmedia from './gameitem.module.css';
import nintendo from './../../media/icons/platforms/nintendo.png';
import xbox from './../../media/icons/platforms/xbox.png';
import computer from './../../media/icons/platforms/computer.png';
import android from './../../media/icons/platforms/android.png';
import iOS from './../../media/icons/platforms/apple.png';
import playstation from './../../media/icons/platforms/playstation.png';
import linux from './../../media/icons/platforms/linux.png';
import macintosh from './../../media/icons/platforms/macintosh.png';
import web from './../../media/icons/platforms/web.png';
import { useNavigate } from 'react-router-dom';
//img={zelda} name={'Legend of zelda tears of the kingdom'} added={340} score={96} releaseDate={'May 12, 2023'} genres={['Action', 'Adventure']} chart={'#10 top2023'}
const GameItem = (props) => {

    const platformImgs = {
        'PC': computer,
        'Xbox': xbox,
        'PlayStation': playstation,
        'Linux': linux,
        'Macintosh': iOS,
        'Apple Macintosh': macintosh,
        'iOS': iOS,
        'Apple': iOS,
        'Android': android,
        'Nintendo': nintendo,
        'Web': web
    }

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/game/${id}`);
    }

    return (
        <div className={cmedia.gameItem} onClick={() => handleClick(props.id)}>
            <img src={props.img} alt="" />
            <div className={cmedia.abouttext}>
                <div className={cmedia.platformAndScore}>
                    <div className={cmedia.platforms}>
                        {props.platforms.map(pl => {
                            let plat = pl.platform.name;
                            return (<div key={pl.platform.name}><img src={platformImgs[plat]} /></div>)
                        })}
                    </div>
                    <div className={cmedia.score}>
                        {props.score}
                    </div>
                </div>

                <h1>{props.name}</h1>
                <div className={cmedia.buttons}>
                    <span> + {props.added}</span>
                </div>
                <div className={cmedia.release}>
                    <p>Release date:</p>
                    <span>{props.releaseDate}</span>
                </div>
                <div className={cmedia.genres}>
                    <p>Genres:</p>
                    <p>{props.genres.map(el => {
                        return (<span key={el.name}> {el.name} </span>)
                    })}</p>
                </div>
                <div className={cmedia.rating}>
                    <p>Rating:</p>
                    <span>{props.rating}</span>
                </div>
            </div>

        </div>
    )
}

export default GameItem
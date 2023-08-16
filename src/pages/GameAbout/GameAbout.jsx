import React, { useEffect, useState } from 'react'
import cmedia from './gameabout.module.css';
import { useParams } from 'react-router-dom';
import Preloader from '../../components/preloader/Preloader';
import nintendo from './../../media/icons/platforms/nintendo.png';
import xbox from './../../media/icons/platforms/xbox.png';
import computer from './../../media/icons/platforms/computer.png';
import android from './../../media/icons/platforms/android.png';
import iOS from './../../media/icons/platforms/apple.png';
import playstation from './../../media/icons/platforms/playstation.png';
import linux from './../../media/icons/platforms/linux.png';
import macintosh from './../../media/icons/platforms/macintosh.png';
import web from './../../media/icons/platforms/web.png';
import DOMPurify from 'dompurify';
import defaultImg from './../../media/images/gameu.jpg';
import { AiOutlineClose, AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { FcLike, FcCancel, FcPrevious, FcNext } from "react-icons/fc";
import { BsFillCaretLeftFill, BsFillCaretRightFill, BsXCircleFill } from "react-icons/bs";
const GameAbout = (props) => {

    useEffect(() => {
        if (localStorage.getItem('userId')) {
            props.getWishThunk(localStorage.getItem('userId'))
        }
        props.setGameInfo(id);

    }, [props.wishList])

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
    const [curScreen, setCurScreen] = useState(0);
    const [openImg, setOpenImg] = useState(false);
    const { id } = useParams();

    const addWish = (e) => {
        e.preventDefault();
        if (localStorage.getItem('token') && localStorage.getItem('userId')) {
            props.setWishList(localStorage.getItem('userId'), id)
        }
        else {
            alert('Вы не зарегистрированы!')
        }
    }
    const deleteWish = (e) => {
        e.preventDefault();
        if (localStorage.getItem('token') && localStorage.getItem('userId')) {
            props.deleteWish(localStorage.getItem('userId'), id)
        }
        else {
            alert('Вы не зарегистрированы!')
        }
    }

    const clickLeftArrow = () => {
        let lengthImages;
        if (props.gameScreenshots.data?.results.length) {
            lengthImages = props.gameScreenshots.data.results.length;
            if (curScreen >= 1) {
                setCurScreen(curScreen - 1)
            } else if (curScreen == 0) {
                setCurScreen(lengthImages - 1)
            }
        }
    }
    const clickRightArrow = () => {
        let lengthImages;
        if (props.gameScreenshots.data?.results.length) {
            lengthImages = props.gameScreenshots.data.results.length;
            if (curScreen < lengthImages - 1) {
                setCurScreen(curScreen + 1)
            } else if (curScreen == lengthImages - 1) {
                setCurScreen(0)
            }
        }
    }
   
    if (props.isGameInfoLoading && !props.wishData.id) {
        return (
            <><Preloader /></>
        )
    }

    else {
        console.log(props.gameScreenshots.data?.results.length)
        return (
            <div className={cmedia.gameAbout}>

                {openImg &&
                    <div className={cmedia.openImg}>
                        {props.gameScreenshots.data?.results ? <img src={props.gameScreenshots.data.results[curScreen].image} /> : <img src={defaultImg} />}
                        <div className={cmedia.closeBut}><BsXCircleFill color='white' fill='white' size={45} onClick={() => { setOpenImg(false) }} /></div>
                        <div className={cmedia.arrows}>
                            <div className={cmedia.arrowButtons}>
                                <div className={cmedia.arrow}>
                                    <BsFillCaretLeftFill size={65} color='white' fill='white' onClick={() => clickLeftArrow()} />
                                </div>
                                <div className={cmedia.arrow}>
                                    <BsFillCaretRightFill size={65} color='white' fill='white' onClick={() => clickRightArrow()} />
                                </div>
                            </div>

                        </div>
                    </div>}

                <div className={cmedia.head}>
                    <h1>{props.gameInfo.data.name}</h1>
                </div>

                <div className={cmedia.firstBlock}>

                    <div className={cmedia.shortDesc}>

                        <h2>Short description</h2>

                        <div className={cmedia.platforms}>
                            {props.gameInfo.data.parent_platforms.map(pl => {
                                let plat = pl.platform.name;
                                return (<><img src={platformImgs[plat]} /></>)
                            })}
                        </div>

                        {props.wishData.find(e => e.id == id) ? <div className={cmedia.wishButton} onClick={(e) => deleteWish(e)}><FcLike size={25} /> Already in your wishlist </div>
                            : <div className={cmedia.wishButton} onClick={(e) => addWish(e)}><AiOutlineHeart color='red' size={25} />  WISH</div>
                        }

                        <p><span>Added: </span>{props.gameInfo.data.added} </p>

                        <div className={cmedia.developers}>
                            <p><span>Developers:</span> {props.gameInfo.data?.developers ? props.gameInfo.data.developers.map(dev => {
                                return (<> {dev.name} </>)
                            }) : ''}</p>

                            <div className={cmedia.devImgs}>
                                {props.gameInfo.data?.developers ? props.gameInfo.data.developers.map(dev => {
                                    return (<> {dev?.image_background ? <img src={dev.image_background} /> : ''} </>)
                                }) : ''}
                            </div>

                        </div>
                        <div className={cmedia.genres}>
                            <p><span>Genres: </span>
                                {props.gameInfo.data?.genres
                                    ? props.gameInfo.data.genres.map(g => {
                                        return (<> {g.name} </>)
                                    })
                                    : ''
                                }
                            </p>
                        </div>
                        <div className={cmedia.metacritic}>
                            <p><span>Metacritic: </span><a href={props.gameInfo.data?.metacritic_url ? props.gameInfo.data.metacritic_url : '#'}>{props.gameInfo.data?.metacritic ? props.gameInfo.data.metacritic : ''} </a></p>
                        </div>

                        <div className={cmedia.rating}>
                            <p><span>Rating: </span>{props.gameInfo.data?.rating ? props.gameInfo.data.rating : ''}</p>
                        </div>
                        <div className={cmedia.updated}>
                            <p><span>Updated: </span>{props.gameInfo.data?.updated ? props.gameInfo.data.updated : ''}</p>
                        </div>
                        <div className={cmedia.stores}>
                            <p><span>Stores:</span> {props.gameInfo.data?.stores ? props.gameInfo.data.stores.map(store => {
                                return (<> {store.store.name} </>)
                            }) : ''}</p>
                            <div className={cmedia.devImgs}>
                                {props.gameInfo.data?.stores ? props.gameInfo.data.stores.map(store => {
                                    return (<> {store.store?.image_background ? <img src={store.store.image_background} /> : ''} </>)
                                }) : ''}
                            </div>

                        </div>
                    </div>
                    <div className={cmedia.screens}>
                        <div className={cmedia.mainImg}>
                            {props.gameScreenshots.data?.results ? <img onClick={() => setOpenImg(true)} src={props.gameScreenshots.data.results[curScreen].image} /> : <img src={defaultImg} />}
                        </div>
                        <div className={cmedia.otherImgs}>
                            {props.gameScreenshots.data?.results ? props.gameScreenshots.data.results.map((item, index) => {
                                return (<img key={index} src={item.image} onClick={() => setCurScreen(index)} className={`${index == curScreen ? `${cmedia.active}` : ''}`} />)
                            }) : <></>}
                        </div>

                    </div>

                </div>
                <div className={cmedia.longDescr}>
                    <h2>Description</h2>
                    <div className={cmedia.longDescrText} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.gameInfo.data.description) }}>

                    </div>

                </div>
            </div>
        )
    }

}

export default GameAbout
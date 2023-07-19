import React, { useEffect } from 'react'
import cmedia from './leftbar.module.css';
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineGift } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";
import { AiOutlineCrown } from "react-icons/ai";
import { AiOutlineRadarChart } from "react-icons/ai";
import { AiOutlineRocket } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Leftbar = (props) => {

    useEffect(() => {
        if (props.isAuth) {
            // props.setAuthData(localStorage.getItem('authData').split(','));
            if (localStorage.getItem('countUsers') && localStorage.getItem('countUsers') == 1) {
                // props.setAuthData(localStorage.getItem('authData1').split(','));
                props.setAuthData(JSON.parse(localStorage.getItem('authData1')));

            } else if ((localStorage.getItem('countUsers') && localStorage.getItem('countUsers') >= 2)) {
                let cU = localStorage.getItem('countUsers');
                // cU.concat('authData')
                console.log(localStorage.getItem('countUsers'))
                console.log(`authData${cU}`)
                // props.setAuthData(localStorage.getItem(`authData${cU}`).split(','));
                props.setAuthData(JSON.parse(localStorage.getItem(`authData${cU}`)));
            }
        }

    }, [])


    return (
        <div className={cmedia.leftbar}>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="#">Reviews</NavLink>
                <div className={cmedia.profile}>
                    <h2>{props.authData ? props.authData.nick : 'anonymous'}</h2>
                    <li><AiOutlineGift size={25} /> <NavLink to="wishlist">Wishlist</NavLink> </li>
                    <li><AiOutlineHeart size={25} /> <NavLink to="library">My library</NavLink> </li>
                </div>
                <div className={cmedia.releases}>
                    <h2>New Releases</h2>
                    <li><AiOutlineCalendar size={25} /> <NavLink to="/last30days">Last 30 days</NavLink> </li>
                    <li><AiOutlineRightCircle size={25} /> <NavLink to="/thisweek">This week</NavLink> </li>
                    <li><AiOutlineDoubleRight size={25} /> <NavLink to="/nextweek">Next Week</NavLink> </li>
                </div>
                <div className={cmedia.top}>
                    <h2>Top</h2>
                    <li><AiOutlineCrown size={25} /> <NavLink to="/bestyear">Best of the year</NavLink> </li>
                    <li><AiOutlineRadarChart size={25} /> <NavLink to="/popularcurrent">Popular in 2023</NavLink> </li>
                    <li><AiOutlineRocket size={25} /> <NavLink to="/top250">Top 250</NavLink> </li>
                </div>
                <NavLink to="/">All Games</NavLink>
                <NavLink to="#">Browse</NavLink>
            </nav>
        </div>
    )
}

export default Leftbar
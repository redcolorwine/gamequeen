import React, { useEffect, useState } from 'react'
import cmedia from './leftbar.module.css';
import { AiOutlineClose, AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { AiOutlineGift } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";
import { AiOutlineCrown } from "react-icons/ai";
import { AiOutlineRadarChart } from "react-icons/ai";
import { AiOutlineRocket } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Leftbar = (props) => {

    const [menu, showMenu] = useState(false);


    useEffect(() => {
      

    }, [])


    return (
        <div className={cmedia.leftbar}>
            <div className={cmedia.mobilebtn} onClick={() => showMenu(!menu)}>
                {menu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}


            </div>
            <nav className={menu ? [cmedia.navMenu, cmedia.active].join(' ') : [cmedia.navMenu]}>
                <NavLink onClick={() => showMenu(false)} to="/">Home</NavLink>
                <NavLink onClick={() => showMenu(false)} to="/reviews">Reviews</NavLink>
                <div className={cmedia.profile}>
                    <h2>{localStorage.getItem('user') ? localStorage.getItem('user'): 'anonymous'}</h2>
                    {/* <li><AiOutlineGift size={25} /> <NavLink onClick={() => showMenu(false)} to="wishlist">Wishlist</NavLink> </li> */}
                    <li><AiOutlineHeart size={25} /> <NavLink onClick={() => showMenu(false)} to="library">My library</NavLink> </li>
                </div>
                <div className={cmedia.releases}>
                    <h2>New Releases</h2>
                    <li><AiOutlineCalendar size={25} /> <NavLink onClick={() => showMenu(false)} to="/last30days">Last 30 days</NavLink> </li>
                    <li><AiOutlineRightCircle size={25} /> <NavLink onClick={() => showMenu(false)} to="/thisweek">This week</NavLink> </li>
                    <li><AiOutlineDoubleRight size={25} /> <NavLink onClick={() => showMenu(false)} to="/nextweek">Next Week</NavLink> </li>
                </div>
                <div className={cmedia.top}>
                    <h2>Top</h2>
                    <li><AiOutlineCrown size={25} /> <NavLink onClick={() => showMenu(false)} to="/bestyear">Best of the year</NavLink> </li>
                    <li><AiOutlineRadarChart size={25} /> <NavLink onClick={() => showMenu(false)} to="/popularcurrent">Popular in 2023</NavLink> </li>
                    <li><AiOutlineRocket size={25} /> <NavLink onClick={() => showMenu(false)} to="/top250">Top 250</NavLink> </li>
                </div>
                <NavLink onClick={() => showMenu(false)} to="/">All Games</NavLink>
                <NavLink onClick={() => showMenu(false)} to="#">Browse</NavLink>
            </nav>
        </div>
    )
}

export default Leftbar
import React from 'react'
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

const Leftbar = () => {
    return (
        <div className={cmedia.leftbar}>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="#">Reviews</NavLink>
                <div className={cmedia.profile}>
                    <h2>redcolorwine</h2>
                    <li><AiOutlineGift size={25} /> <NavLink to="wishlist">Wishlist</NavLink> </li>
                    <li><AiOutlineHeart size={25} /> <NavLink to="library">My library</NavLink> </li>
                </div>
                <div className={cmedia.releases}>
                    <h2>New Releases</h2>
                    <li><AiOutlineCalendar size={25} /> <NavLink to="/last30days">Last 30 days</NavLink> </li>
                    <li><AiOutlineRightCircle size={25} /> <NavLink to="#">This week</NavLink> </li>
                    <li><AiOutlineDoubleRight size={25} /> <NavLink to="#">Next Week</NavLink> </li>
                </div>
                <div className={cmedia.top}>
                    <h2>Top</h2>
                    <li><AiOutlineCrown size={25} /> <NavLink to="#">Best of the year</NavLink> </li>
                    <li><AiOutlineRadarChart size={25} /> <NavLink to="#">Popular in 2023</NavLink> </li>
                    <li><AiOutlineRocket size={25} /> <NavLink to="#">Top 250</NavLink> </li>
                </div>
                <NavLink to="#">All Games</NavLink>
                <NavLink to="#">Browse</NavLink>
            </nav>
        </div>
    )
}

export default Leftbar
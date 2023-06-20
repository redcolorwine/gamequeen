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

const Leftbar = () => {
    return (
        <div className={cmedia.leftbar}>
            <nav>
                <a href="#">Home</a>
                <a href="#">Reviews</a>
                <div className={cmedia.profile}>
                    <h2>redcolorwine</h2>
                    <li><AiOutlineGift size={25} /> <a href="#">Wishlist</a> </li>
                    <li><AiOutlineHeart size={25} /> <a href="#">My library</a> </li>
                </div>
                <div className={cmedia.releases}>
                    <h2>New Releases</h2>
                    <li><AiOutlineCalendar size={25} /> <a href="#">Last 30 days</a> </li>
                    <li><AiOutlineRightCircle size={25} /> <a href="#">This week</a> </li>
                    <li><AiOutlineDoubleRight size={25} /> <a href="#">Next Week</a> </li>
                </div>
                <div className={cmedia.top}>
                    <h2>Top</h2>
                    <li><AiOutlineCrown size={25} /> <a href="#">Best of the year</a> </li>
                    <li><AiOutlineRadarChart size={25} /> <a href="#">Popular in 2023</a> </li>
                    <li><AiOutlineRocket size={25} /> <a href="#">Top 250</a> </li>
                </div>
                <a href="#">All Games</a>
                <a href="#">Browse</a>
            </nav>
        </div>
    )
}

export default Leftbar
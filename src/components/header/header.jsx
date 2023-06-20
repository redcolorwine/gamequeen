import React, { useRef, useState } from 'react'
import cmedia from './header.module.css';
import ava from './../../media/7309681.jpg';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {

    const [query, setQuery] = useState('');
    const inpRef = useRef();
    const navigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            inpRef.current.value = '';
            navigate(`/search/${query}`)

        }
        setQuery('');
    };

    return (
        <div className={cmedia.header}>
            <div className={cmedia.nav}>

                <div className={cmedia.logo}>
                    <NavLink to='/'><h2>gamequeen</h2></NavLink>
                </div>


                <div className={cmedia.search}>
                    <input type="text" placeholder='search' ref={inpRef} onKeyDown={handleKeyDown} onChange={(e) => { setQuery(e.target.value) }} />
                </div>

                <div className={cmedia.profile}>

                    <div className={cmedia.me}>
                        <img src={ava} alt="" />
                        <h4>redcolorwine</h4>
                    </div>

                    <div className={cmedia.links}>
                        <a href="#">my library</a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Header
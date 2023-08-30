import React, { useEffect, useRef, useState } from 'react'
import cmedia from './header.module.css';
import ava from './../../media/7309681.jpg';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = (props) => {

    const [query, setQuery] = useState('');
    const inpRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {


    }, [props.isAuth])

    const logOut = (event) => {
        event.preventDefault();
        localStorage.clear();
        props.setIsAuth(false);
    }
    const logIn = (event) => {
        event.preventDefault();
        // props.setIsAuth(true);
        navigate('/auth');
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            inpRef.current.value = '';
            navigate(`/search/${query}`)

        }
        setQuery('');
    };

    console.log(props.isAuth)
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
                        <h4>{localStorage.getItem('user') ? localStorage.getItem('user') : 'anonymous'}</h4>
                    </div>
                    <p>|</p>
                    <div className={cmedia.links}>
                        {localStorage.getItem('user') ? <a href="#" onClick={() => props.logout()}>log out </a> : <a href="#" onClick={logIn}>log in </a>}

                        {/* <NavLink to="library">my library</NavLink> */}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Header
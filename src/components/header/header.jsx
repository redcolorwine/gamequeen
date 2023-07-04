import React, { useEffect, useRef, useState } from 'react'
import cmedia from './header.module.css';
import ava from './../../media/7309681.jpg';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = (props) => {

    const [query, setQuery] = useState('');
    const inpRef = useRef();
    const navigate = useNavigate();

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
                        <h4>{props.authData ? props.authData.nick : 'anonymous'}</h4>
                    </div>

                    <div className={cmedia.links}>
                        {props.authData.nick ? <a href="#" onClick={logOut}>log out </a> : <a href="#" onClick={logIn}>log in </a>}

                        <NavLink to="library">my library</NavLink>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Header
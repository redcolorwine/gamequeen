import React from 'react'
import { useNavigate } from 'react-router-dom';
import cmedia from './noauth.module.css';

const NotAuth = () => {

    const navigate = useNavigate();

    return (
        <div className={cmedia.notAuth}>
            <h1>To open this page you have to login or register!</h1>
            <p>If you want to login or register click <a href='#' onClick={(e) => { e.preventDefault(); navigate('/auth') }}>here</a></p>
        </div>
    )
}

export default NotAuth
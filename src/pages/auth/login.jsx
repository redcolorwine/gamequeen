import React, { useState } from 'react'
import cmedia from './auth.module.css';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const onLogin = async (e) => {
        e.preventDefault();
        await props.login(email, password)
        // navigate('/');
    }
    return (
        <div className={cmedia.authWrapper}>
            <form>
                <h2>Login</h2>
                <input type="email" placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='password' />
                <button onClick={(e) => onLogin(e)}>Login</button>
                <a href="#" onClick={(e)=>{e.preventDefault();navigate('/')}}>Do you need a new account? Register!</a>
            </form>

        </div>
    )
}

export default Login
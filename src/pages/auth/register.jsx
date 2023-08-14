import React, { useState } from 'react'
import cmedia from './auth.module.css'
const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onRegister = async (e) => {
        e.preventDefault();
        await props.register(email, password)
        // navigate('/');
    }
    return (
        <div className={cmedia.authWrapper}>
            <form>
                <h2>Register</h2>
                <input type="email" placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='password' />
                <button onClick={(e) => onRegister(e)}>Register</button>
                
            </form>

        </div>
    )
}

export default Register
import React, { useState } from 'react'
import cmedia from './auth.module.css';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../../api/api';

const Auth = (props) => {

  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onRegister = async (e) => {
    e.preventDefault();
    await props.register(email, password)
    navigate('/');
  }
  const onLogin = async (e) => {
    e.preventDefault();
    await props.login(email, password)
    navigate('/');
  }
  return (
    <div className={cmedia.auth}>
      <h1>Authorization</h1>
      <div className={cmedia.authWrapper}>
        <form>
          <h2>{auth ? 'Register' : 'Login'}</h2>
          <input type="email" placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
          <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='password' />
          {auth ? <button onClick={(e) => onRegister(e)}>Register</button> : <button onClick={(e) => onLogin(e)}>Login</button>}

          <a href="#" onClick={(event) => { event.preventDefault(); setAuth(!auth) }}>{!auth ?
            'Do you need to login?'
            :
            'Do you need to create an account?'
          }</a>
        </form>

      </div>

    </div>
  )
}

export default Auth
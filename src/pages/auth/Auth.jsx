import React, { useState } from 'react'
import cmedia from './auth.module.css';
import { useNavigate } from 'react-router-dom';

const Auth = (props) => {

  const [authData, setAuthData] = useState([]);
  const [reg, setReg] = useState(false);
  const [nick, setNick] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onRegister = () => {
    if (!localStorage.getItem('countUsers') && localStorage.getItem('countUsers') < 1) {
      localStorage.setItem('countUsers', 1)
      localStorage.setItem('authData1', JSON.stringify({ email: email, nick: nick, password: password, wishList: ['4200'] }))
      // props.setAuthData(localStorage.getItem('authData1').split(','));
      props.setAuthData(localStorage.getItem('authData1'));
      props.setIsAuth(true);
    }
    else if (localStorage.getItem('countUsers') >= 1) {
      let cU = Number(localStorage.getItem('countUsers'));
      localStorage.setItem('countUsers', cU += 1)
      localStorage.setItem('authData1', JSON.stringify({ email: email, nick: nick, password: password, wishList: ['4200'] }))
      // props.setAuthData(localStorage.getItem(`authData${cU}`).split(','));
      props.setAuthData(localStorage.getItem(`authData${cU}`).json());
      props.setIsAuth(true);
    }


    navigate('/');
  }
  console.log(props.authData)
  return (
    <div className={cmedia.auth}>
      <h1>Authorization</h1>
      <div className={cmedia.authWrapper}>
        <form>
          <h2>{reg ? 'Register' : 'Login'}</h2>
          <input type="email" placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
          {reg ? <input type="text" value={nick} onChange={(e) => { setNick(e.target.value) }} placeholder='nickname' /> : ''}
          <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='password' />
          {reg ? <button onClick={()=>onRegister()}>Register</button> : <button>Login</button>}
          <a href="#" onClick={(event) => { event.preventDefault(); setReg(!reg) }}>{reg ?
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
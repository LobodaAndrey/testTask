import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios';

const Header = (props) => {
  const sendData = (e) => {
    e.preventDefault();
    let name = 'Andrey';
    let token = '';
    axios.post('https://gentle-escarpment-19443.herokuapp.com/v1/users/auth', {
      mode: 'no-cors',
      method: "POST",
      credentials: "include",
      email: "user1@email.com",
      password: "!password!",
    })
      .then((res) => {
        console.log(res)
        token = res.data.access_token
        props.loginSuccess(name, token)
      })
  }
  
  return (
    <header className="main-header">
      <Link to="/">
        <h1 className="brand-title">Список продуктов</h1>
      </Link>
      <p>Привет, {props.auth.name}</p>
      <br/>
      <p>Токен, полученый от сервера: {props.auth.token}</p>
      <button onClick={sendData}>{props.auth.isLogged ? 'Выйти': 'Войти'}</button>
    </header>
  );
}

const mapStateToProps = store => {
  return {
    auth: store.auth
  }
}

export default connect(mapStateToProps)(Header);
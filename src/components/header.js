import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { connect } from 'react-redux'


const Header = (props) => {
  console.log(props)
  return (
    <header className="main-header">
      <Link to="/">
        <h1 className="brand-title">Список продуктов</h1>
      </Link>
      <Link to="login">
        <LoginButton />
      </Link>

    </header>
  );
}

const LoginButton = () => {
  return (
    <button>Войти\выйти</button>
  );
}

const mapStateToProps = store => {
  return {
    auth: store.auth
  }
}

export default connect(mapStateToProps)(Header);
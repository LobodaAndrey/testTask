import React, {Component} from 'react';
import './header.scss';
import { connect } from 'react-redux';

import {loginSuccess, logoutSuccess} from '../actions/authActions';

import Button from 'react-bootstrap/Button';

class Header extends Component {
  render() { 
    return ( 
      <header className="main-header">
        <h1 className="brand-title">Список продуктов</h1>
      {
        this.props.auth.token ? <Button variant="success" onClick={logoutSuccess}>Выйти</Button>: <Button variant="primary" onClick={loginSuccess}>Войти</Button>
      }
    </header>
     );
  }
}

const mapStateToProps = store => {
  return {
    auth: store.auth
  }
}

export default connect(mapStateToProps)(Header);
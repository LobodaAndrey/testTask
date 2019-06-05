import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import {loginSuccess} from './store/actions/authActions'

import Header from './components/header'
import ProductList from './containers/productList'
import Details from './containers/details'

function App( props ) {
  const {loginSuccessAction} = props
  return (
    <BrowserRouter>
      <div className="App">
        <Header loginSuccess={loginSuccessAction}/>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = store => {
  return {
    auth: store.auth,
    products: store.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginSuccessAction: (name, token) => dispatch(loginSuccess(name, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

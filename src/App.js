import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'

import Header from './components/header'
import ProductList from './containers/productList'
import Details from './containers/details'
import LoginPage from './containers/loginPage'

function App( props ) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details/:id" component={Details} />
          <Route path="/login" component={LoginPage} />
        </Switch>
        <p>Привет, {props.auth.name}</p>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = store => {
  return {
    auth: store.auth,
  }
}


export default connect(mapStateToProps)(App)

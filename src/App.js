import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {loginSuccess, logoutSuccess} from './store/actions/authActions';
import {addProduct, removeProduct, editProduct, getProducts} from './store/actions/productActions'

import Header from './components/header'
import ProductList from './containers/productList'
import Details from './containers/details'

function App( props ) {
  const {loginSuccessAction, logoutSuccessAction, getProductsAction, addProductAction, removeProductAction, editProductAction} = props
  return (
    <BrowserRouter>
      <div className="App">
        <Header loginSuccess={loginSuccessAction} logoutSuccess={logoutSuccessAction}/>
        <Switch>
          <Route exact path="/" 
          render={() => (
            <ProductList getProducts={getProductsAction} addProduct={addProductAction}  removeProduct={removeProductAction} editProduct={editProductAction} token={props.auth.token}/>
          )}
          />
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
    getProductsAction: products => dispatch(getProducts(products)),
    loginSuccessAction: (name, token) => dispatch(loginSuccess(name, token)),
    logoutSuccessAction: (token) => dispatch(logoutSuccess(token)),
    addProductAction: (id, title, price, description, status) => dispatch(addProduct(id, title, price, description, status)),
    editProductAction: (id, title, price, description) => dispatch(editProduct(id, title, price, description)),
    removeProductAction: (id) => dispatch(removeProduct(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

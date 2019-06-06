import React, { Component } from 'react';
import './productList.scss'
import AddProduct from './addProduct';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import {getData} from '../services/getProducts';
import axios from 'axios';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.product.data,
    }
  }

  componentDidUpdate() {
    axios.get(' https://gentle-escarpment-19443.herokuapp.com/v1/articles?page=1&updated_after=1410403761', {
    mode: 'no-cors',
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: 'Bearer ' + this.props.token
    }
  })
    .then((res) => {
      this.setState({
        data: res.data
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <AddProduct addProduct={this.props.addProduct} token={this.props.token}/>
        <p>{this.props.data}</p>
        <table className="products">
          <tbody>
            <tr>
              <th>Название</th>
              <th>Цена</th>
              <th>Описание</th>
            </tr>
            {this.state.data && this.state.data.map((item, i) => {
              // if (!this.state.product.data[i].status) {
              //   return null
              // }
              return (
                <tr key={Math.random()} id={item.id}>
                  <td className="title">{item.title}</td>
                  <td className="price">{item.price}</td>
                  <td className="description">{item.description}</td>
                  <td>
                    <Link ref to={'details/' /*this.props.product.data[i].id*/ }>
                      <span className="edit">
                        <i onClick={this.props.editProduct} className="fas fa-pen"></i>
                      </span>
                    </Link>
                  </td>
                  <td>
                    <span className="delete">
                      <i onClick={this.props.removeProduct} className="fas fa-times-circle"></i>
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => {
  return {
    product: store.product,
    auth: store.auth
  }
}


export default connect(mapStateToProps)(ProductList)

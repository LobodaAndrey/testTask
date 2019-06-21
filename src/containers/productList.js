import React, { Component } from 'react';
import './productList.scss'
import AddProduct from './addProduct';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { getProductsService } from '../services/getProductsService';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.products
    }
  }

  componentDidMount() {
    this.props.token &&
    axios.get(' https://gentle-escarpment-19443.herokuapp.com/v1/articles?page=1&updated_after=1410403761', {
    mode: 'no-cors',
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: 'Bearer ' + this.props.token
    }
  })
    .then((res) => {
      console.log(res)
      this.setState({
        data: res.data
      })
    })
  }

  componentDidUpdate() {
    this.props.token && !this.state.data &&
    axios.get(' https://gentle-escarpment-19443.herokuapp.com/v1/articles?page=1&updated_after=1410403761', {
    mode: 'no-cors',
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: 'Bearer ' + this.props.token
    }
  })
    .then((res) => {
      console.log(res)
      this.setState({
        data: res.data
      })
    })
  }

  render() {
    console.log(this.state.data)
    return (
    
      <React.Fragment>
        { this.props.token && 
        <div>
        <AddProduct addProduct={this.props.addProduct} token={this.props.token} />
        <table className="products">
          <tbody>
            <tr>
              <th>Название</th>
              <th>Цена</th>
              <th>Описание</th>
            </tr>
            {this.state.data.length && this.state.data.map((item, i) => {
              return (
                <tr key={Math.random()} id={item.id}>
                  <td className="title">{item.name}</td>
                  <td className="price">{item.price}</td>
                  <td className="description">{item.description}</td>
                  <td>
                    <Link ref to={'details/' + item.id}>
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
            })
            }
          </tbody>
        </table>
        </div>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => {
  return {
    products: store.products,
    auth: store.auth
  }
}


export default connect(mapStateToProps)(ProductList)

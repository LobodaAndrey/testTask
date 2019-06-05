import React, { Component } from 'react';
import './productList.scss'
import AddProduct from './addProduct';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios'

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.product.products,
    }
  }

  productRemove = (id, status) => {
    axios.post('https://gentle-escarpment-19443.herokuapp.com/v1/articles', {
        mode: 'no-cors',
        method: "POST",
        credentials: "include",
        headers: {
          Authorization: 'Bearer ' + this.props.token
        },
        "group_id": id,
        "status": 0
      })
        .then((res) => {
          console.log(res)
        })
  }

  componentWillReceiveProps(props){
    console.log(props)
    axios.get(' https://gentle-escarpment-19443.herokuapp.com/v1/articles?page=1&updated_after=1410403761', {
      mode: 'no-cors',
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: 'Bearer ' + props.token 
      }
    })
      .then((res) => {
        console.log(res)
      })
  }

  render() {
    return (
      <React.Fragment>
        <AddProduct addItem={this.addItem} addProduct={this.propsaddProduct}/>
        <table className="products">
          <tbody>
            <tr>
              <th>Название</th>
              <th>Цена</th>
              <th>Описание</th>
            </tr>
            {this.state.items && this.state.items.map((item, i) => {
              if (!this.props.product.products[i].status) {
                return null
              }
              return (    
                <tr key={Math.random()}>
                  <td className="title">{item.title}</td>
                  <td className="price">{item.price}</td>
                  <td className="description">{item.description}</td>
                  <td>
                    <Link ref to={'details/'+ this.props.product.products[i].id}>
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

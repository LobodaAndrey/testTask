import React, {Component} from 'react'

import {getProducts, removeProduct} from '../actions/productActions';

class ProductItem extends Component {
  render() {
    const item = this.props
    console.log(item)
    return (
      <tr id={item.id}>
        <td className="title">{item.name}</td>
        <td className="price">{item.price}</td>
        <td className="description">{item.description}</td>
        <td>
          <span className="edit">
            <i onClick={() => { this.handleShow(item.id, item) }} className="fas fa-pen"></i>
          </span>
        </td>
        <td>
          <span className="delete">
            <i onClick={(e) => {
              e.preventDefault();
              removeProduct(item.id);
              getProducts()
            }
            } className="fas fa-times-circle"></i>
          </span>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
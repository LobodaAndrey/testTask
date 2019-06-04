import React, { Component } from 'react';
import './productList.scss'
import AddProduct from './addProduct';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as data from './data.json';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data.items,
      newItem: {
      }
    }
  }

  addItem = ( value ) => {
    this.setState({ newItem: value })

    setTimeout(() => {
      this.setState({
        items: [...this.state.items, this.state.newItem]
      })
    }, 100)
  }

  render() {
    return (
      <React.Fragment>
        <AddProduct addItem={this.addItem} />
        <table className="products">
          <tbody>
            <tr>
              <th>Название</th>
              <th>Цена</th>
              <th>Описание</th>
            </tr>
            {this.state.items && this.state.items.map(item => {
              const id = 1;
              return (
                <tr key={Math.random()}>
                  <td className="title">{item.title}</td>
                  <td className="price">{item.price}</td>
                  <td className="description">{item.description}</td>
                  <td>
                    <Link ref to={`details/${id}`}>
                      <span className="edit">
                        <i className="fas fa-pen"></i>
                      </span>
                    </Link>
                  </td>
                  <td>
                    <span className="delete">
                      <i className="fas fa-times-circle"></i>
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
  }
}


export default connect(mapStateToProps)(ProductList)

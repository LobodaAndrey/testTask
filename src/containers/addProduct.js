import React, { Component } from 'react';
import './addProduct.scss';
import { Button } from 'react-bootstrap';
import {addProduct, getProducts} from '../actions/productActions';

class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: {
        id: 0,
        name: '',
        price: 0,
        description: '',
        status: 0
      }
    }
  }

  nameRef = React.createRef()
  priceRef = React.createRef()
  descriptionRef = React.createRef()


  handleChange = () => {
    this.setState({
      newItem:
      {
        id: Date.now(),
        name: this.nameRef.current.value,
        price: this.priceRef.current.value,
        description: this.descriptionRef.current.value,
        status: 10
      }
    })
  }
  
  sendNewItem = (e) => {
    e.preventDefault();
    if (this.state.newItem.name.length && this.state.newItem.description.length ) {
      addProduct(this.state.newItem)
      getProducts();
    } else {
      alert ('Заполните поля названия и описания')
    }

  }

  render() {
    return (
      <React.Fragment>
        <form className="add-form" onSubmit={(e) => {
          e.preventDefault()
        }}>
          <label htmlFor="name">Название</label>
          <input className="add-input" ref={this.nameRef} id="title" type="text" onChange={this.handleChange} />
          <label htmlFor="price">Цена</label>
          <input className="add-input" ref={this.priceRef} id="price" type="number" onChange={this.handleChange} />
          <label htmlFor="description">Описание</label>
          <input className="add-input" ref={this.descriptionRef} id="description" type="text" onChange={this.handleChange} />
          <Button className="add-btn" onClick={this.sendNewItem}>Добавить продукт</Button>
        </form>
      </React.Fragment>
    );
  }
}

export default AddProduct;
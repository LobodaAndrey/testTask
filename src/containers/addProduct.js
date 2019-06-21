import React, { Component } from 'react';
import axios from 'axios';
import './addProduct.scss';

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
    console.log(this.props.token)
    console.log('new item added on server')
    console.log(this.state.newItem)
    axios.post('https://gentle-escarpment-19443.herokuapp.com/v1/articles', this.state.newItem, {
      credentials: "include",
      headers: {
        Authorization: 'Bearer ' + this.props.token
      },
      "group_id": this.state.id,
      "name": this.state.name,
      "description": this.state.description,
      "price": this.state.price,
      "status": 10
    })
      .then((res) => {
        console.log(res)
      })
  }

  render() {
    return (
      <React.Fragment>
        <form className="add-form" onSubmit={(e) => {
          e.preventDefault()
        }}>
          <label htmlFor="name">Название</label>
          <input ref={this.nameRef} id="title" type="text" onChange={this.handleChange} />
          <label htmlFor="price">Цена</label>
          <input ref={this.priceRef} id="price" type="number" onChange={this.handleChange} />
          <label htmlFor="description">Описание</label>
          <input ref={this.descriptionRef} id="description" type="text" onChange={this.handleChange} />
          <button onClick={this.sendNewItem}>Добавить продукт</button>
        </form>
      </React.Fragment>
    );
  }
}

export default AddProduct;
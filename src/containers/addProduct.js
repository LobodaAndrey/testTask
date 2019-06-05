import React, { Component } from 'react';
import axios from 'axios';
import './addProduct.scss';

class AddProduct extends Component {
  state = {
    newItem: {
      id: 0,
      title: '',
      price: 0,
      description: '',
      status: 0
    }
  }

  titleRef = React.createRef()
  priceRef = React.createRef()
  descriptionRef = React.createRef()


  handleChange = () => {
    this.setState({
      newItem:
      {
        title: this.titleRef.current.value,
        price: this.priceRef.current.value,
        description: this.descriptionRef.current.value
      }
    })
  }

  sendNewItem = (e) => {
    console.log('new item added')
    console.log(this.state.newItem)
    axios.post('https://gentle-escarpment-19443.herokuapp.com/v1/articles', {
      mode: 'no-cors',
      method: "POST",
      credentials: "include",
      headers: {
        Authorization: 'Bearer ' + this.props.token
      },
      "group_id": 1,
      "name": "Article 1",
      "description": "Article 1 Description",
      "price": "12.50",
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
          <label htmlFor="title">Название</label>
          <input ref={this.titleRef} id="title" type="text" onChange={this.handleChange} />
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
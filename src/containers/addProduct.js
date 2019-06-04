import React, { Component } from 'react';
import './addProduct.scss';

class AddProduct extends Component {
  state = {
    title: '-',
    price: 0,
    description: '-'
  }

  titleRef = React.createRef()
  priceRef = React.createRef()
  descriptionRef = React.createRef()


  handleChange = () => {
    this.setState({
      title: this.titleRef.current.value,
      price: this.priceRef.current.value,
      description: this.descriptionRef.current.value
    })
  }


  render() {
    return (
      <React.Fragment>
        <form className="add-form" onSubmit={(e) => {
          e.preventDefault()
        }}>
          <label htmlFor="title">Название</label>
          <input ref={this.titleRef} id="title" type="text" onChange={this.handleChange}/>
          <label htmlFor="price">Цена</label>
          <input ref={this.priceRef} id="price" type="number" onChange={this.handleChange}/>
          <label htmlFor="description">Описание</label>
          <input ref={this.descriptionRef} id="description" type="text" onChange={this.handleChange}/>
          <button onClick={() => { this.props.addItem(this.state)}}>Добавить продукт</button>
        </form>
      </React.Fragment>
    );
  }
}

export default AddProduct;
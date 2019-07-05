import React, { Component } from 'react';
import './productList.scss'
import AddProduct from './addProduct';
import { connect } from 'react-redux';
import { getProducts, removeProduct, editProduct } from '../actions/productActions';
import { Modal, Button, Form } from 'react-bootstrap';


class ProductList extends Component {
  state = {
    show: false,
    currentId: null,
    product: {  
      newTitle: '',
      newPrice: 0,
      newDescription: ''
    },
    start: {
      title: '',
      price: 0,
      descr: ''
    }
  };

  titleRef = React.createRef();
  priceRef = React.createRef();
  descriptionRef = React.createRef();

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = (id, data) => {
    console.log(data)
    this.setState({
      show: true,
      currentId: id,
      newTitle: '',
      newPrice: 0,
      newDescription: '',
      start: {
        title: data.name,
        price: data.price,
        descr: data.description
      }
    });
  }

  componentDidMount() {
    getProducts()
  }

  handleUpdate = (id) => {
    editProduct(id, this.state.product);
    getProducts();
    this.handleClose();
  }


  handleChange = () => {
    this.setState(prevState => ({
      ...prevState,
      product: {
        newTitle: this.titleRef.current.value,
        newPrice: this.priceRef.current.value,
        newDescription: this.descriptionRef.current.value
      }
    }
    ))
  }


  render() {
    const { products } = this.props.products
    return (
      <React.Fragment>
        {this.props.auth.token &&
          <>
            <AddProduct addProduct={this.props.addProduct} token={this.props.token} />
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit your product</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={(e) => { 
                  e.preventDefault();
                  this.handleUpdate(this.state.currentId) 
                  }}>
                  <Form.Group controlId="title">
                    <Form.Label>Name</Form.Label>
                    <Form.Control defaultValue={this.state.start.title} type="text" placeholder="title" ref={this.titleRef} onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control defaultValue={this.state.start.price} type="number" placeholder="price" ref={this.priceRef} onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group controlId="descr">
                    <Form.Label>Description</Form.Label>
                    <Form.Control defaultValue={this.state.start.descr} type="text" placeholder="description" ref={this.descriptionRef} onChange={this.handleChange}/>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                  Save
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Cancel
            </Button>
              </Modal.Footer>
            </Modal>
            <table className="products">
              <tbody>
                <tr>
                  <th>Название</th>
                  <th>Цена</th>
                  <th>Описание</th>
                </tr>
                {products && products.map((item) => {
                  return (
                    item.status ?
                      <tr key={Math.random()} id={item.id}>
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
                      :
                      null
                  )
                })
                }
              </tbody>
            </table>
          </>
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

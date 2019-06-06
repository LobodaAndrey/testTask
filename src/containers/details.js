import React, { Component } from 'react';
import axios from 'axios';


class Details extends Component {

  componentDidMount(props) {
    axios.get('https://gentle-escarpment-19443.herokuapp.com/v1/articles/2' /*+ props.id*/, {
      mode: 'no-cors',
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: 'Bearer ' + this.props.token
      }

    })
      .then((res) => {
        console.log(res)
      })
  }

  // For changes
  // axios.put('https://gentle-escarpment-19443.herokuapp.com/v1/articles/2' /*+ props.id*/, {
  //   mode: 'no-cors',
  //   method: "PUT",
  //   credentials: "include",
  //   headers: {
  //     Authorization: 'Bearer ' + props.token
  //   }

  // })
  //   .then((res) => {
  //     console.log(res)
  //   })


  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <h3>Details</h3>
        <p>{this.props.id}</p>
        <p>{this.props.name}</p>
        <p>{this.props.description}</p>
        <p>{this.props.price}</p>
      </React.Fragment>
    );
  }
}

export default Details;
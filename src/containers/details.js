import React, { Component } from 'react';

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data
    }
  }
  // componentDidMount() {
  //   axios.get('https://gentle-escarpment-19443.herokuapp.com/v1/articles/2' /*+ props.id*/, {
  //     mode: 'no-cors',
  //     method: "GET",
  //     credentials: "include",
  //     headers: {
  //       Authorization: 'Bearer ' + this.props.token
  //     }
  //   })
  //     .then((res) => {
  //       this.setState({
  //         data: res
  //       })
  //     })
  // }

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
    return (
      <React.Fragment>
        <h3>Details</h3>
        <p>{this.state.data.id}</p>
        <p>{this.props.name}</p>
        <p>{this.props.description}</p>
        <p>{this.props.price}</p>
      </React.Fragment>
    );
  }
}

export default Details;
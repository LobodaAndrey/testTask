import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


const LoginPage = (props) => {
  const sendData = (e) => {
    e.preventDefault();
    let token = '';
    console.log('sended')
    console.log(props)
    axios.post('https://gentle-escarpment-19443.herokuapp.com/v1/users/auth', {
      mode: 'no-cors',
      method: "POST",
      credentials: "include",
      email: "user1@email.com",
      password: "!password!"
    })
      .then((res) => {
        token = res.data.access_token
        localStorage.setItem('token', token)
        console.log(res.data)
      })
  }
  return (
    <React.Fragment>
      <h2>Login</h2>
      <form name="form">
        <div className="form-group">
          <button onClick={sendData} className="btn btn-primary">Login</button>
        </div>
      </form>
    </React.Fragment>
  );
}

const mapStateToProps = store => {
  return {
    auth: store.auth
  }
}


export default connect(mapStateToProps)(LoginPage)
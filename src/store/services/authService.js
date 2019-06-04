import axios from 'axios';

function login() {
  axios.post('https://gentle-escarpment-19443.herokuapp.com/v1/users/auth',  {
    mode: 'no-cors',
    method: "POST",
    credentials: "include",
    email: "user1@email.com",
    password: "!password!"
  })
  .then((res) => {
    console.log(res.data.access_token)
    return (res.data.access_token)
  })
}

export {login}
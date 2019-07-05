import { store } from '../store/';
import axios from 'axios';

import { actionTypes as authActionTypes } from '../store/reducers/authReducer';

export const loginSuccess = () => {
  axios.post('https://gentle-escarpment-19443.herokuapp.com/v1/users/auth', {
    mode: 'no-cors',
    method: "POST",
    credentials: "include",
    email: "user1@email.com",
    password: "!password!",
  })
    .then((res) => {
      localStorage.setItem('token', res.data.access_token)
      let token = res.data.access_token
      return token
    }).then((token) => {
      store.dispatch({
        type: authActionTypes.LOGIN_SUCCESS,
        payload: token
      })
    })
}

export const logoutSuccess = () => {
  localStorage.removeItem('token');

  store.dispatch({
    type: authActionTypes.LOGOUT_SUCCESS,
    payload: null
  })
}


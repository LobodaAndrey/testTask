import { store } from '../store/index';
import axios from 'axios';
import { actionTypes as productActionTypes } from '../store/reducers/productReducer'

export const getProducts = () => {
  return axios.get('https://gentle-escarpment-19443.herokuapp.com/v1/articles?page=1&updated_after=1410403761', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  })
    .then((res) => {
      return res.data
    }).then((res) => {
      store.dispatch(
        {
          type: productActionTypes.GET_PRODUCTS,
          payload: res
        }
      )
    })
};


export const addProduct = (newItem) => {
  axios.post('https://gentle-escarpment-19443.herokuapp.com/v1/articles', newItem, {
    credentials: "include",
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
    .then((res) => {
      console.log(res)
    })
  store.dispatch({
    type: productActionTypes.ADD_PRODUCT
  })
};

export const removeProduct = (id) => {
  axios.put('https://gentle-escarpment-19443.herokuapp.com/v1/articles/' + id, {status: 0}, {
    credentials: "include",
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
    .then((res) => {
    })
  store.dispatch({
    type: productActionTypes.REMOVE_PRODUCT
  })

};

export const editProduct = (id, data) => {
  const newData = {
    name: data.newTitle,
    price: data.newPrice,
    description: data.newDescription
  }

  console.log((newData))
  axios.put('https://gentle-escarpment-19443.herokuapp.com/v1/articles/' + id, newData, {
    credentials: "include",
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
    .then((res) => {
      console.log(res)
    })
  store.dispatch({
    type: productActionTypes.EDIT_PRODUCT
  })
};
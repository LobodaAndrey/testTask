import {GET_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT, EDIT_PRODUCT} from '../../constants';

export const getProducts = (products) => ({
  type: GET_PRODUCTS,
  products
});

export const addProduct = (id, title, price, description, status) => ({
  type: ADD_PRODUCT,
  id,
  title,
  price, 
  description,
  status
});

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  id,
  status: 0
});

export const editProduct = (id, title, price, description) => ({
  type: EDIT_PRODUCT,
  id,
  title,
  price, 
  description
});
import {ADD_PRODUCT, REMOVE_PRODUCT, EDIT_PRODUCT} from '../../constants';

export const addProduct = (id, title, price, description) => ({
  type: ADD_PRODUCT,
  id,
  title,
  price, 
  description
});

export const removeProduct = id => ({
  type: REMOVE_PRODUCT,
  id
});

export const editProduct = id => ({
  type: EDIT_PRODUCT,
  id
});
import {GET_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT, EDIT_PRODUCT} from '../../constants'

const initialState = {
  products: []
}

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.products
      };
    case ADD_PRODUCT: 
      return {
        ...state
      };
    case EDIT_PRODUCT:
      return {
        ...state
      };
  case REMOVE_PRODUCT:
    return {
      ...state
    };
    default:
      return state
  }
}


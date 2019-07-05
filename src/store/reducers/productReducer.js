const initialState = {
  products: []
}

export const actionTypes = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  EDIT_PRODUCT: 'EDIT_PRODUCT'
}

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case actionTypes.ADD_PRODUCT: 
      return {
        ...state
      };
    case actionTypes.EDIT_PRODUCT:
      return {
        ...state
      };
  case actionTypes.REMOVE_PRODUCT:
    return {
      ...state
    };
    default:
      return state
  }
}


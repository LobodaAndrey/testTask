const initialState = {
  products: []
}

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
      };
    case 'ADD_PRODUCT': 
      return {
        ...state
      }
  
    default:
      return state
  }
}


import {GET_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT, EDIT_PRODUCT} from '../../constants'

const initialState = {
  products: [
    {
      "id": 1,
      "title": "bread",
      "price": 20,
      "description": "lalala",
      "status": 10
    },
    {
      "id": 2,
      "title": "Milk",
      "price": 20,
      "description": "lalala",
      "status": 10
    },
    {
      "id": 3,
      "title": "Icecream",
      "price": 20,
      "description": "lalala",
      "status": 10
    }
  ]
}

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT: 
      return {
        ...state
      };
    case EDIT_PRODUCT:
      return {
        ...state
      }
  case REMOVE_PRODUCT:
    default:
      return state
  }
}


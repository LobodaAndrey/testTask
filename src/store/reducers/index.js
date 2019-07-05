import { combineReducers } from 'redux'
import AuthReducer  from './authReducer'
import ProductReducer  from './productReducer'

export const rootReducer = combineReducers({
  auth: AuthReducer,
  products: ProductReducer,
})
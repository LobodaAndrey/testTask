import {LOGIN_SUCCESS, LOGOUT} from '../../constants'

const initialState = {
  name: 'Guest',
  isLogged: false
}

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        name: 'Andrey',
        isLogged: true
      };
    case LOGOUT:
      return {
        ...state,
        name: 'Guest',
        isLogged: false
      }
    default:
      return state
  }
}


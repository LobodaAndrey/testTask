import {LOGIN_SUCCESS, LOGOUT} from '../../constants'

const initialState = {
  name: 'Гость',
  isLogged: false,
  token: ''
}

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        name: action.name,
        isLogged: true,
        token: action.token
      };
    case LOGOUT:
      return {
        ...state,
        name: 'Гость',
        isLogged: false
      }
    default:
      return state
  }
}


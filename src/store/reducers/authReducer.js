import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from '../../constants'

const initialState = {
  name: 'Гость',
  isLogged: false,
  token: localStorage.getItem('token')
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
    case LOGOUT_SUCCESS:
      return {
        ...state,
        name: 'Гость',
        isLogged: false,
        token: action.token
      }
    default:
      return state
  }
}


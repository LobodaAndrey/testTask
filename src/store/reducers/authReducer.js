
const initialState = {
  token: localStorage.getItem('token')
}

export const actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS'
}

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state
  }
}


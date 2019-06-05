import {LOGIN_SUCCESS, LOGOUT} from '../../constants';

export const loginSuccess = (name, token) => ({
  type: LOGIN_SUCCESS,
  name,
  token
})

export const logout = () => ({
  type: LOGOUT
})

export const profileActions = {
  loginSuccess,
  logout
};


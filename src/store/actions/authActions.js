import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from '../../constants';

export const loginSuccess = (name, token) => ({
  type: LOGIN_SUCCESS,
  name,
  token
})

export const logoutSuccess = (token) => ({
  type: LOGOUT_SUCCESS
})

export const profileActions = {
  loginSuccess,
  logoutSuccess
};


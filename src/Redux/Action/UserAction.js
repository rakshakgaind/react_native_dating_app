import UserApi from '../../Axios/UserApi';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
} from './ActionType';

export const userRegister = params => async dispatch => {
  console.log('params ', params);
  try {
    dispatch({
      type: SIGNUP_REQUEST,
      payload: null,
    });
    const userRegisterResponse = await UserApi.post('api url', params);
    console.log('++++++', userRegisterResponse);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: null,
    });
    return userRegisterResponse;
  } catch (error) {
    dispatch({
      type: SIGNUP_FAILURE,
      payload: null,
    });
  }
};

export const userLogin = params => async dispatch => {
  console.log('calling ');
  try {
    dispatch({
      type: LOGIN_REQUEST,
      payload: null,
    });
    const userLoginResponse = await UserApi.post('api url', params);
    console.log('++++++', userLoginResponse);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: null,
    });
    return userLoginResponse;
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: null,
    });
  }
};

export const userForgotPassword = params => async dispatch => {
  console.log('params ', params);
  try {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
      payload: null,
    });
    const userForgotPasswordResponse = await UserApi.post('api url', params);
    console.log('++++++', userForgotPasswordResponse);
    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: null,
    });
    return userLoginResponse;
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAILURE,
      payload: null,
    });
  }
};

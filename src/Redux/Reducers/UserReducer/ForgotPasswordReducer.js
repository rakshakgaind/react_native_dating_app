import {
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
} from '../../Action/ActionType';

const initialState = {
  forgotPassword_Deatils: null,
  loading: false,
  error: false,
};

const ForgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        forgotPassword_Deatils: null,
        loading: true,
        error: false,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPassword_Deatils: action.payload,
        loading: false,
        error: false,
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        forgotPassword_Deatils: null,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default ForgotPasswordReducer;

import {
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from '../../Action/ActionType';

const initialState = {
  user_registerDeatils: null,
  loading: false,
  error: false,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        user_registerDeatils: null,
        loading: true,
        error: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user_registerDeatils: action.payload,
        loading: false,
        error: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        user_registerDeatils: null,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default signUpReducer;

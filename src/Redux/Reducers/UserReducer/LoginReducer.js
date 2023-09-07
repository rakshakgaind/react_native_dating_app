import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from '../../Action/ActionType';

const initialState = {
  user_loginDetails: null,
  loading: false,
  error: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        user_loginDetails: null,
        loading: true,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user_loginDetails: action.payload,
        loading: false,
        error: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user_loginDetails: null,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default loginReducer;

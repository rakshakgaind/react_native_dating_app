import {combineReducers} from 'redux';
import signUpReducer from './UserReducer/SignUpReducer';
import loginReducer from './UserReducer/LoginReducer';
import ForgotPasswordReducer from './UserReducer/ForgotPasswordReducer';

const AppReducers = combineReducers({
  register: signUpReducer,
  login: loginReducer,
  forgot: ForgotPasswordReducer,
});
export default AppReducers;

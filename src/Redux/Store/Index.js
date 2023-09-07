import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AppReducers from '../Reducers/Index';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
  AppReducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
export default store;

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { listReducers } from './list';
import { authReducers } from './auth';


const rootReducer = combineReducers({
  list: listReducers,
  auth:  authReducers,
});

const middlewares = applyMiddleware(thunk);
const store = createStore(rootReducer, middlewares);

export default store;
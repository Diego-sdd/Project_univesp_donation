import {combineReducers} from 'redux';

import registerUserReducer from './registerUserReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
const rootReducer = combineReducers({
  registerUserReducer,
  authReducer,
  userReducer,
});

export default rootReducer;

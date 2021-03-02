import { combineReducers } from 'redux';
import campaignReducer from './campaign';
import userReducer from './user';
import errorReducer from './error';
import filterReducer from './filter';

export default combineReducers({
  campaigns: campaignReducer,
  users: userReducer,
  error: errorReducer,
  filters: filterReducer
});

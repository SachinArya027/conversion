import { RESET_ERROR, SET_ERROR } from '../actions/types';

function errorReducer(state = false, action) {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    case RESET_ERROR:
      return false;
    default:
      return state;
  }
}

export default errorReducer;

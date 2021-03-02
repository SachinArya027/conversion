import { SET_DATE_RANGE, SET_NAME } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  start: '',
  end: ''
};

function filterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_DATE_RANGE:
      return { ...state, start: action.payload.start, end: action.payload.end };
    case SET_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

export default filterReducer;

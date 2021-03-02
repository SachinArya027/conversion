import axios from 'axios';
import { setError } from '../';
import { FETCH_USERS } from '../types';

export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch({
      type: FETCH_USERS,
      payload: res.data
    });
  } catch (err) {
    // log error
    console.log(err);
    dispatch(setError('Error Fetching User data.'));
  }
};

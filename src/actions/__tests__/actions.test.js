import { cleanup } from '@testing-library/react';
import moxios from 'moxios';

import { fetchUsers } from '../thunk';
import { FETCH_USERS, SET_ERROR } from '../types';

const userResponse = [{ id: 1, name: 'user-1' }];

describe('fetchUsers action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
    cleanup();
  });

  it('dispatch the FETCH_USERS action correctly', async () => {
    moxios.stubRequest('https://jsonplaceholder.typicode.com/users', {
      status: 200,
      response: userResponse
    });

    const mockDispatch = jest.fn().mockImplementation();
    await fetchUsers()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: FETCH_USERS,
        payload: userResponse
      })
    );
  });

  it('dispatch the SET_ERROR action on fetchUser request fail', async () => {
    moxios.stubRequest('https://jsonplaceholder.typicode.com/users', {
      status: 400
    });

    const mockDispatch = jest.fn().mockImplementation();
    await fetchUsers()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: SET_ERROR,
        payload: 'Error Fetching User data.'
      })
    );
  });
});

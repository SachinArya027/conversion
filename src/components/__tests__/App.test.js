import React from 'react';
import moxios from 'moxios';
import Root from '../../Root';
import App from '../App';
import { screen, render, cleanup, waitFor } from '@testing-library/react';

afterEach(cleanup);

it('renders app successfully', () => {
  render(
    <Root>
      <App />
    </Root>
  );

  screen.getByTestId('app');
});

describe('App errors', () => {
  beforeEach(() => {
    moxios.install();

    moxios.stubRequest('https://jsonplaceholder.typicode.com/users', {
      status: 400
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('shows the error message on fetch user failure', async () => {
    render(
      <Root>
        <App />
      </Root>
    );

    await waitFor(() => {
      screen.getByText('Error Fetching User data.');
    });
  });
});

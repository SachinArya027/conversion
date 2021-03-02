import React from 'react';
import AppHeader from '../AppHeader';
import { screen, render, cleanup } from '@testing-library/react';

afterEach(cleanup);

it('renders app header successfully', () => {
  render(<AppHeader />);

  screen.getByText('Search Campaigns...');
});

import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import Root from '../Root';
import App from '../components/App';
import moxios from 'moxios';

const initialState = {
  filters: { name: '', start: '', end: '' },
  users: [{ id: 1, name: 'test-name' }],
  campaigns: [
    {
      id: 1,
      uniqueId: uuidv4(),
      name: 'Test-1',
      startDate: '9/19/2017',
      endDate: '3/9/2020',
      budget: 10000,
      userId: 3
    },
    {
      id: 2,
      uniqueId: uuidv4(),
      name: 'Test-2',
      startDate: '9/19/2018',
      endDate: '3/9/2020',
      budget: 9999999,
      userId: 1
    }
  ]
};

beforeEach(() => {
  moxios.install();

  moxios.stubRequest('https://jsonplaceholder.typicode.com/users', {
    status: 200,
    response: []
  });
});

afterEach(() => {
  moxios.uninstall();
  cleanup();
});

it('initially renders all campaigns', () => {
  const { getAllByTestId } = render(
    <Root initialState={initialState}>
      <App />
    </Root>
  );

  expect(getAllByTestId('campaign-list-item')).toHaveLength(2);
});

it('successfully add campaigns with global AddCampaigns method', () => {
  const { getByText, getAllByTestId } = render(
    <Root initialState={initialState}>
      <App />
    </Root>
  );

  window.AddCampaigns([
    {
      id: 3,
      name: 'Test-3',
      startDate: '9/19/2017',
      endDate: '3/9/2020',
      budget: 10000,
      userId: 3
    }
  ]);

  expect(getAllByTestId('campaign-list-item')).toHaveLength(3);
  getByText('Test-1');
  getByText('Test-2');
  getByText('Test-3');
});

it('filter campaigns on name search', () => {
  const { getByTestId, getAllByTestId } = render(
    <Root initialState={initialState}>
      <App />
    </Root>
  );

  const input = getByTestId('name-field').querySelector('input');

  fireEvent.change(input, {
    target: { value: 'Test-1' }
  });

  expect(getAllByTestId('campaign-list-item')).toHaveLength(1);
});

it('filter campaigns on date range search', () => {
  const { getByTestId, getAllByTestId, getByText } = render(
    <Root initialState={initialState}>
      <App />
    </Root>
  );

  const start = getByTestId('start-field').querySelector('input');
  const end = getByTestId('end-field').querySelector('input');

  fireEvent.change(start, {
    target: { value: '2018-01-01' }
  });

  fireEvent.change(end, {
    target: { value: '2021-01-01' }
  });

  expect(getAllByTestId('campaign-list-item')).toHaveLength(1);

  getByText('Test-2');
});

it('displays No Data Found warning when no campaign matches search criteria', () => {
  const { getByTestId, getByText } = render(
    <Root initialState={initialState}>
      <App />
    </Root>
  );

  const input = getByTestId('name-field').querySelector('input');

  fireEvent.change(input, {
    target: { value: 'dhcbhd' }
  });

  getByText('No Data Found');
  getByText('Add new campaigns or change search criteria.');
});

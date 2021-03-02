import React from 'react';
import Root from '../../Root';
import CampaignList from '../CampaignList';
import { render, cleanup } from '@testing-library/react';
import { formatBudget } from '../../helpers';

const initialState = {
  filters: { name: '', start: '', end: '' },
  users: [{ id: 1, name: 'test-name' }],
  campaigns: [
    {
      id: 1,
      uniqueId: 1,
      name: 'Test-1',
      startDate: '9/19/2017',
      endDate: '3/9/2020',
      budget: 100,
      userId: 3
    },
    {
      id: 2,
      uniqueId: 2,
      name: 'Test-2',
      startDate: '9/19/2017',
      endDate: '3/9/2020',
      budget: 9999999,
      userId: 1
    }
  ]
};

afterEach(cleanup);

it('renders the list successfully', () => {
  const { getAllByTestId, getByText } = render(
    <Root initialState={initialState}>
      <CampaignList />
    </Root>
  );

  expect(getAllByTestId('campaign-list-item')).toHaveLength(2);

  getByText('Test-1');
  getByText(formatBudget(initialState.campaigns[0].budget));
  getByText('Unknown User');

  getByText('Test-2');
  getByText(formatBudget(initialState.campaigns[1].budget));
  getByText(initialState.users[0].name);
});

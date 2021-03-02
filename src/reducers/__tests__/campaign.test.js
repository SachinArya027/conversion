import { BULK_ADD_CAMPAIGNS } from '../../actions/types';
import campaignReducer from '../campaign';

it('add bulk campaigns successfully', () => {
  const action = {
    type: BULK_ADD_CAMPAIGNS,
    payload: [
      { id: 1, name: 'Test-1' },
      { id: 2, name: 'Test-2' }
    ]
  };
  const newState = campaignReducer([], action);

  expect(newState).toHaveLength(2);
});

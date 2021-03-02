import { BULK_ADD_CAMPAIGNS } from '../actions/types';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = [
  {
    uniqueId: uuidv4(),
    id: 9999,
    name: 'Initial',
    startDate: '1/19/2021',
    endDate: '3/9/2021',
    budget: 8837799,
    userId: 3
  }
];

function campaignReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case BULK_ADD_CAMPAIGNS: {
      const campaigns = action.payload.map((campaign) => ({
        ...campaign,
        uniqueId: uuidv4()
      }));
      return [...state, ...campaigns];
    }
    default:
      return state;
  }
}

export default campaignReducer;
